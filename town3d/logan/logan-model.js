var LoganModel=function(mn){"use strict";var A_=Object.defineProperty;var R_=(mn,on,Ye)=>on in mn?A_(mn,on,{enumerable:!0,configurable:!0,writable:!0,value:Ye}):mn[on]=Ye;var nt=(mn,on,Ye)=>R_(mn,typeof on!="symbol"?on+"":on,Ye);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const on="187",Ye={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Po=1,Rh=2,Xi=1,Ch=2,qi=3,ii=0,He=1,Oe=2,fi=0,Yi=1,Lo=2,Do=3,Io=4,Ph=5,pi=100,Lh=101,Dh=102,Ih=103,Nh=104,Uh=200,Fh=201,Oh=202,Bh=203,No=204,Uo=205,zh=206,kh=207,Gh=208,Hh=209,Vh=210,Wh=211,Xh=212,qh=213,Yh=214,yr=0,Er=1,br=2,Ki=3,wr=4,Tr=5,Ar=6,Rr=7,Fo=0,Kh=1,Zh=2,Tn=0,Oo=1,Bo=2,zo=3,ko=4,Go=5,Ho=6,Cr=7,Vo=300,mi=301,Zi=302,Pr=303,Lr=304,Dr=1e3,An=1001,Ir=1002,Le=1003,$h=1004,ws=1005,Ke=1006,Nr=1007,Rn=1008,je=1009,Wo=1010,Xo=1011,$i=1012,Ur=1013,gn=1014,_n=1015,xn=1016,Fr=1017,Or=1018,gi=1020,qo=35902,Yo=35899,Ko=1021,Zo=1022,vn=1023,Hn=1026,Vn=1027,$o=1028,Br=1029,si=1030,zr=1031,kr=1033,Ts=33776,As=33777,Rs=33778,Cs=33779,Gr=35840,Hr=35841,Vr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,Kr=37488,Zr=37489,Ps=37490,$r=37491,Jr=37808,Qr=37809,jr=37810,ta=37811,ea=37812,na=37813,ia=37814,sa=37815,ra=37816,aa=37817,oa=37818,la=37819,ca=37820,ha=37821,ua=36492,da=36494,fa=36495,pa=36283,ma=36284,Ls=36285,ga=36286,Jh=3200,Jo=3201,_a=0,Qh=1,Wn="",De="srgb",Ds="srgb-linear",Is="linear",re="srgb",xa=7680,jh=519,tu=512,eu=513,nu=514,Qo=515,iu=516,su=517,jo=518,tl=519,ru=35044,el="300 es",ln=2e3,Ji=2001;function au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){const i=Qi("canvas");return i.style.display="block",i}const nl={};function il(...i){const t="THREE."+i.shift();console.log(t,...i)}function sl(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=sl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=sl(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ns(...i){const t=i.join(" ");t in nl||(nl[t]=!0,Ft(...i))}function lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const cu={[yr]:yr,[br]:Ar,[wr]:wr,[Ki]:Tr,[Er]:Er,[Ar]:br,[Rr]:Rr,[Tr]:Ki};class Xn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const ji=Math.PI/180,ts=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function va(i,t){return(i%t+t)%t}function hu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function uu(i,t,e){return i!==t?(e-i)/(t-i):0}function es(i,t,e){return(1-e)*i+e*t}function du(i,t,e,n){return es(i,t,1-Math.exp(-e*n))}function fu(i,t=1){return t-Math.abs(va(i,t*2)-t)}function pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _u(i,t){return i+Math.random()*(t-i)}function xu(i){return i*(.5-Math.random())}function vu(i){i!==void 0&&(rl=i);let t=rl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mu(i){return i*ji}function Su(i){return i*ts}function yu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Eu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function al(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bu(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ma(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ol(i,t){if(t.constructor===Float32Array)return i;const e=Ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ll(i,t){if(t.constructor===Float32Array)return i;const e=Ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const te={DEG2RAD:ji,RAD2DEG:ts,generateUUID:_i,clamp:Xt,euclideanModulo:va,mapLinear:hu,inverseLerp:uu,lerp:es,damp:du,pingpong:fu,smoothstep:pu,smootherstep:mu,randInt:gu,randFloat:_u,randFloatSpread:xu,seededRandom:vu,degToRad:Mu,radToDeg:Su,isPowerOfTwo:yu,ceilPowerOfTwo:Eu,floorPowerOfTwo:al,setQuaternionFromProperEuler:bu,normalize:ll,denormalize:ol},Eo=class Eo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eo.prototype.isVector2=!0;let Pt=Eo;class qn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let k=bo;const Sa=new k,cl=new qn,wo=class wo{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],M=s[7],E=s[2],S=s[5],x=s[8];return r[0]=a*_+o*v+l*E,r[3]=a*m+o*y+l*S,r[6]=a*p+o*M+l*x,r[1]=c*_+u*v+d*E,r[4]=c*m+u*y+d*S,r[7]=c*p+u*M+d*x,r[2]=h*_+f*v+g*E,r[5]=h*m+f*y+g*S,r[8]=h*p+f*M+g*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ya.makeScale(t,e)),this}rotate(t){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wo.prototype.isMatrix3=!0;let Ot=wo;const ya=new Ot,hl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wu(){const i={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ds]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:re,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const $t=wu();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Tu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vi===void 0&&(vi=Qi("canvas")),vi.width=t.width,vi.height=t.height;const s=vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Au=0;class Ea{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ba(s[a].image)):r.push(ba(s[a]))}else r=ba(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Ru=0;const wa=new k;class Te extends Xn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=An,s=An,r=Ke,a=Rn,o=vn,l=je,c=Te.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=_i(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null,Te.DEFAULT_MAPPING=Vo,Te.DEFAULT_ANISOTROPY=1;const To=class To{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,E=(p+1)/2,S=(u+h)/4,x=(d+_)/4,b=(g+m)/4;return y>M&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};To.prototype.isVector4=!0;let ue=To;class Cu extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Te({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ea(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Cu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dl extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const vr=class vr{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),a=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Yn.crossVectors(n,tn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Yn.crossVectors(n,tn)),Yn.normalize(),Us.crossVectors(tn,Yn),s[0]=Yn.x,s[4]=Us.x,s[8]=tn.x,s[1]=Yn.y,s[5]=Us.y,s[9]=tn.y,s[2]=Yn.z,s[6]=Us.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],M=n[11],E=n[15],S=s[0],x=s[4],b=s[8],I=s[12],C=s[1],R=s[5],P=s[9],D=s[13],A=s[2],U=s[6],B=s[10],z=s[14],J=s[3],H=s[7],Y=s[11],tt=s[15];return r[0]=a*S+o*C+l*A+c*J,r[4]=a*x+o*R+l*U+c*H,r[8]=a*b+o*P+l*B+c*Y,r[12]=a*I+o*D+l*z+c*tt,r[1]=u*S+d*C+h*A+f*J,r[5]=u*x+d*R+h*U+f*H,r[9]=u*b+d*P+h*B+f*Y,r[13]=u*I+d*D+h*z+f*tt,r[2]=g*S+_*C+m*A+p*J,r[6]=g*x+_*R+m*U+p*H,r[10]=g*b+_*P+m*B+p*Y,r[14]=g*I+_*D+m*z+p*tt,r[3]=v*S+y*C+M*A+E*J,r[7]=v*x+y*R+M*U+E*H,r[11]=v*b+y*P+M*B+E*Y,r[15]=v*I+y*D+M*z+E*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=l*f-c*h,y=o*f-c*d,M=o*h-l*d,E=a*f-c*u,S=a*h-l*u,x=a*d-o*u;return e*(_*v-m*y+p*M)-n*(g*v-m*E+p*S)+s*(g*y-_*E+p*x)-r*(g*M-_*S+m*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=e*o-n*a,y=e*l-s*a,M=e*c-r*a,E=n*l-s*o,S=n*c-r*o,x=s*c-r*l,b=u*_-d*g,I=u*m-h*g,C=u*p-f*g,R=d*m-h*_,P=d*p-f*_,D=h*p-f*m,A=v*D-y*P+M*R+E*C-S*I+x*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return t[0]=(o*D-l*P+c*R)*U,t[1]=(s*P-n*D-r*R)*U,t[2]=(_*x-m*S+p*E)*U,t[3]=(h*S-d*x-f*E)*U,t[4]=(l*C-a*D-c*I)*U,t[5]=(e*D-s*C+r*I)*U,t[6]=(m*M-g*x-p*y)*U,t[7]=(u*x-h*M+f*y)*U,t[8]=(a*P-o*C+c*b)*U,t[9]=(n*C-e*P-r*b)*U,t[10]=(g*S-_*M+p*v)*U,t[11]=(d*M-u*S-f*v)*U,t[12]=(o*I-a*R-l*b)*U,t[13]=(e*R-n*I+s*b)*U,t[14]=(_*y-g*E-m*v)*U,t[15]=(u*E-d*y+h*v)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,v=l*c,y=l*u,M=l*d,E=n.x,S=n.y,x=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+M)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(f-M)*S,s[5]=(1-(h+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+y)*x,s[9]=(m-v)*x,s[10]=(1-(h+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),l=Mi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),cn.copy(this);const c=1/a,u=1/o,d=1/l;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ji)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===ln)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ji)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vr.prototype.isMatrix4=!0;let fe=vr;const Mi=new k,cn=new fe,Lu=new k(0,0,0),Du=new k(1,1,1),Yn=new k,Us=new k,tn=new k,fl=new fe,pl=new qn;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Iu=0;const ml=new k,Si=new qn,Ln=new fe,Fs=new k,ns=new k,Nu=new k,Uu=new qn,gl=new k(1,0,0),_l=new k(0,1,0),xl=new k(0,0,1),vl={type:"added"},Fu={type:"removed"},yi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Ie extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new k,e=new Pn,n=new qn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new Ot}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ns,Fs,this.up):Ln.lookAt(Fs,ns,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Ln),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),yi.child=t,this.dispatchEvent(yi),yi.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fu),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new k(0,1,0),Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ze extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ou={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ou)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<.16666666666666666?i+(t-i)*6*e:e<.5?t:e<.6666666666666666?i+(t-i)*6*(.6666666666666666-e):i}class It{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=va(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ca(a,r,t+.3333333333333333),this.g=Ca(a,r,t),this.b=Ca(a,r,t-.3333333333333333)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return $t.workingToColorSpace(ze.copy(this),t),Math.round(Xt(ze.r*255,0,255))*65536+Math.round(Xt(ze.g*255,0,255))*256+Math.round(Xt(ze.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=De){$t.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Os);const n=es(Kn.h,Os.h,e),s=es(Kn.s,Os.s,e),r=es(Kn.l,Os.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new It;It.NAMES=Ml;class Pa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new Pa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bu extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const hn=new k,Dn=new k,La=new k,In=new k,Ei=new k,bi=new k,Sl=new k,Da=new k,Ia=new k,Na=new k,Ua=new ue,Fa=new ue,Oa=new ue;class un{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Dn.subVectors(n,e),La.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(Dn),l=hn.dot(La),c=Dn.dot(Dn),u=Dn.dot(La),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ua.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Ua.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ua,r.x),a.addScaledVector(Fa,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Dn.subVectors(t,e),hn.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ei.subVectors(s,n),bi.subVectors(r,n),Da.subVectors(t,n);const l=Ei.dot(Da),c=bi.dot(Da);if(l<=0&&c<=0)return e.copy(n);Ia.subVectors(t,s);const u=Ei.dot(Ia),d=bi.dot(Ia);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Ei,a);Na.subVectors(t,r);const f=Ei.dot(Na),g=bi.dot(Na);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(bi,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Sl.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Sl,o);const p=1/(m+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(Ei,a).addScaledVector(bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class is{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),zs.subVectors(this.max,ss),wi.subVectors(t.a,ss),Ti.subVectors(t.b,ss),Ai.subVectors(t.c,ss),Zn.subVectors(Ti,wi),$n.subVectors(Ai,Ti),ri.subVectors(wi,Ai);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-ri.z,ri.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,ri.z,0,-ri.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-ri.y,ri.x,0];return!Ba(e,wi,Ti,Ai,zs)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,wi,Ti,Ai,zs))?!1:(ks.crossVectors(Zn,$n),e=[ks.x,ks.y,ks.z],Ba(e,wi,Ti,Ai,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new k,new k,new k,new k,new k,new k,new k,new k],dn=new k,Bs=new is,wi=new k,Ti=new k,Ai=new k,Zn=new k,$n=new k,ri=new k,ss=new k,zs=new k,ks=new k,ai=new k;function Ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ai.fromArray(i,r);const o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const xe=new k,Gs=new Pt;let zu=0;class Ht extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=_n,this.version=0,this._normalizationScale=t!==void 0?Ma(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ol(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):ll(t,this.array)}}class yl extends Ht{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class El extends Ht{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends Ht{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ku=new is,rs=new k,za=new k;class as{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(za)),this.expandByPoint(rs.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Gu=0;const nn=new fe,ka=new Ie,Ri=new k,en=new is,os=new is,Re=new k;class Me extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?El:yl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(en.min,os.min),en.expandByPoint(Re),Re.addVectors(en.max,os.max),en.expandByPoint(Re)):(en.expandByPoint(os.min),en.expandByPoint(os.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Re.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),Re.add(Ri)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new k,l[I]=new k;const u=new k,d=new k,h=new k,f=new Pt,g=new Pt,_=new Pt,m=new k,p=new k;function v(I,C,R){c[I]=c[C]=c[R]=1,u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,C),h.fromBufferAttribute(n,R),f.fromBufferAttribute(r,I),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,R),d.sub(u),h.sub(u),g.sub(f),_.sub(f);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(P),p.copy(h).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(P),o[I].add(m),o[C].add(m),o[R].add(m),l[I].add(p),l[C].add(p),l[R].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,C=y.length;I<C;++I){const R=y[I],P=R.start,D=R.count;for(let A=P,U=P+D;A<U;A+=3)v(t.getX(A+0),t.getX(A+1),t.getX(A+2))}const M=new k,E=new k,S=new k,x=new k;function b(I){S.fromBufferAttribute(s,I),x.copy(S);const C=o[I];M.copy(C),M.sub(S.multiplyScalar(S.dot(C))).normalize(),E.crossVectors(x,C);const P=E.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,C=n.count;I<C;++I)c[I]&&b(I);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ht(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Ht(h,u,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new k,Hu=new k,Vu=new Ot;class Sn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ga.subVectors(n,e).cross(Hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ga),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vu.getNormalMatrix(t),s=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Wu=0;class ls extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Yi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Uo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Un=new k,Ha=new k,Hs=new k,Vs=new k;class Va{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ha.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),Vs.copy(this.origin).sub(Ha);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=Vs.dot(this.direction),l=-Vs.dot(Hs),c=Vs.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ha).addScaledVector(Hs,h),f}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=n.x-a.x,v=n.y-a.y,y=n.z-a.z,M=Math.abs(l),E=Math.abs(c),S=Math.abs(u);let x,b,I,C,R,P,D,A,U,B,z,J;if(M>=E&&M>=S?(I=l,P=d,U=g,J=p,l>=0?(x=c,b=u,C=h,R=f,D=_,A=m,B=v,z=y):(x=u,b=c,C=f,R=h,D=m,A=_,B=y,z=v)):E>=S?(I=c,P=h,U=_,J=v,c>=0?(x=u,b=l,C=f,R=d,D=m,A=g,B=y,z=p):(x=l,b=u,C=d,R=f,D=g,A=m,B=p,z=y)):(I=u,P=f,U=m,J=y,u>=0?(x=l,b=c,C=d,R=h,D=g,A=_,B=p,z=v):(x=c,b=l,C=h,R=d,D=_,A=g,B=v,z=p)),I===0)return null;const H=x/I,Y=b/I,tt=1/I,gt=C-H*P,Lt=R-Y*P,K=D-H*U,it=A-Y*U,St=B-H*J,Et=z-Y*J,lt=St*it-Et*K,Mt=gt*Et-Lt*St,ee=K*Lt-it*gt;if(s){if(lt<0||Mt<0||ee<0)return null}else if((lt<0||Mt<0||ee<0)&&(lt>0||Mt>0||ee>0))return null;const Ct=lt+Mt+ee;if(Ct===0)return null;const Jt=tt*(lt*P+Mt*U+ee*J);return(Ct>0?Jt<0:Jt>0)?null:this.at(Jt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ws extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const bl=new fe,oi=new Va,Xs=new as,wl=new k,qs=new k,Ys=new k,Ks=new k,Wa=new k,Zs=new k,Tl=new k,$s=new k;class ne extends Ie{constructor(t=new Me,e=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Wa.fromBufferAttribute(d,t),a?Zs.addScaledVector(Wa,u):Zs.addScaledVector(Wa.sub(e),u))}e.add(Zs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(Xs.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Xs,wl)===null||oi.origin.distanceToSquared(wl)>(t.far-t.near)**2))&&(bl.copy(r).invert(),oi.copy(t.ray).applyMatrix4(bl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,E=y;M<E;M+=3){const S=o.getX(M),x=o.getX(M+1),b=o.getX(M+2);s=Js(this,p,t,n,c,u,d,S,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=Js(this,a,t,n,c,u,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,E=y;M<E;M+=3){const S=M,x=M+1,b=M+2;s=Js(this,p,t,n,c,u,d,S,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,M=m+2;s=Js(this,a,t,n,c,u,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xu(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ii,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Js(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,qs),i.getVertexPosition(l,Ys),i.getVertexPosition(c,Ks);const u=Xu(i,t,e,n,qs,Ys,Ks,Tl);if(u){const d=new k;un.getBarycoord(Tl,qs,Ys,Ks,d),s&&(u.uv=un.getInterpolatedAttribute(s,o,l,c,d,new Pt)),r&&(u.uv1=un.getInterpolatedAttribute(r,o,l,c,d,new Pt)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,d,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};un.getNormal(qs,Ys,Ks,h.normal),u.face=h,u.barycoord=d}return u}class qu extends Te{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,u=Le,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs extends Ht{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const li=new as,Yu=new Pt(.5,.5),Qs=new k;class hs{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],y=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-g,E-v).normalize(),s[1].setComponents(c+a,f+u,p+g,E+v).normalize(),s[2].setComponents(c+o,f+d,p+_,E+y).normalize(),s[3].setComponents(c-o,f-d,p-_,E-y).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,p-m,E-M).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-M).normalize(),e===ln)s[5].setComponents(c+l,f+h,p+m,E+M).normalize();else if(e===Ji)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=Yu.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Al=new fe;class Xa{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Al.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(Al,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new hs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Xa().copy(this)}}class Rl extends Te{constructor(t=[],e=mi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qa extends Te{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ci extends Te{constructor(t,e,n=gn,s,r,a,o=Le,l=Le,c,u=Hn,d=1){if(u!==Hn&&u!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Cl extends Ci{constructor(t,e=gn,n=mi,s,r,a=Le,o=Le,l,c=Hn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pl extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pi extends Me{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function g(_,m,p,v,y,M,E,S,x,b,I){const C=M/x,R=E/b,P=M/2,D=E/2,A=S/2,U=x+1,B=b+1;let z=0,J=0;const H=new k;for(let Y=0;Y<B;Y++){const tt=Y*R-D;for(let gt=0;gt<U;gt++){const Lt=gt*C-P;H[_]=Lt*v,H[m]=tt*y,H[p]=A,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=S>0?1:-1,u.push(H.x,H.y,H.z),d.push(gt/x),d.push(1-Y/b),z+=1}}for(let Y=0;Y<b;Y++)for(let tt=0;tt<x;tt++){const gt=h+tt+U*Y,Lt=h+tt+U*(Y+1),K=h+(tt+1)+U*(Y+1),it=h+(tt+1)+U*Y;l.push(gt,Lt,it),l.push(Lt,K,it),J+=6}o.addGroup(f,J,I),f+=J,h+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ya extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new k,M=new k,E=new k;for(let S=0;S<e.length;S+=3)f(e[S+0],y),f(e[S+1],M),f(e[S+2],E),l(y,M,E,v)}function l(v,y,M,E){const S=E+1,x=[];for(let b=0;b<=S;b++){x[b]=[];const I=v.clone().lerp(M,b/S),C=y.clone().lerp(M,b/S),R=S-b;for(let P=0;P<=R;P++)P===0&&b===S?x[b][P]=I:x[b][P]=I.clone().lerp(C,P/R)}for(let b=0;b<S;b++)for(let I=0;I<2*(S-b)-1;I++){const C=Math.floor(I/2);I%2===0?(h(x[b][C+1]),h(x[b+1][C]),h(x[b][C])):(h(x[b][C+1]),h(x[b+1][C+1]),h(x[b+1][C]))}}function c(v){const y=new k;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const v=new k;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const M=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;a.push(M,1-E)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],M=a[v+2],E=a[v+4],S=Math.max(y,M,E),x=Math.min(y,M,E);S>.9&&x<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,y){const M=v*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const v=new k,y=new k,M=new k,E=new k,S=new Pt,x=new Pt,b=new Pt;for(let I=0,C=0;I<r.length;I+=9,C+=6){v.set(r[I+0],r[I+1],r[I+2]),y.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),S.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),E.copy(v).add(y).add(M).divideScalar(3);const R=m(E);_(S,C+0,v,R),_(x,C+2,y,R),_(b,C+4,M,R)}}function _(v,y,M,E){E<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.vertices,t.indices,t.radius,t.detail)}}function Ku(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ll(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ju(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){const f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return us(r,a,e,o,l,c,0),a}function Ll(i,t,e,n,s){let r;if(s===hd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ul(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ul(a/n|0,i[a],i[a+1],r);return r&&Li(r,r.next)&&(ps(r),r=r.next),r}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Li(e,e.next)||me(e.prev,e,e.next)===0)){if(ps(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function us(i,t,e,n,s,r,a){if(!i)return;!a&&r&&sd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?$u(i,n,s,r):Zu(i)){t.push(l.i,i.i,c.i),ps(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ju(ci(i),t),us(i,t,e,n,s,r,2)):a===2&&Qu(i,t,e,n,s,r):us(ci(i),t,e,n,s,r,1);break}}}function Zu(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&ds(s,o,r,l,a,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $u(i,t,e,n){const s=i.prev,r=i,a=i.next;if(me(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),_=Math.max(o,l,c),m=Math.max(u,d,h),p=Ka(f,g,t,e,n),v=Ka(_,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,u,l,d,c,h,y.x,y.y)&&me(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ds(o,u,l,d,c,h,M.x,M.y)&&me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ds(o,u,l,d,c,h,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ds(o,u,l,d,c,h,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ju(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Li(n,s)&&Il(n,e,e.next,s)&&fs(n,s)&&fs(s,n)&&(t.push(n.i,e.i,s.i),ps(e),ps(e.next),e=i=s),e=e.next}while(e!==i);return ci(e)}function Qu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&od(a,o)){let l=Nl(a,o);a=ci(a,a.next),l=ci(l,l.next),us(a,t,e,n,s,r,0),us(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ju(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ll(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ad(c))}s.sort(td);for(let r=0;r<s.length;r++)e=ed(s[r],e);return e}function td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ed(i,t){const e=nd(i,t);if(!e)return t;const n=Nl(e,i);return ci(n,n.next),ci(e,e.next)}function nd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Li(i,e))return e;do{if(Li(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Dl(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);fs(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&id(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function id(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function sd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rd(s)}function rd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Dl(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ds(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Dl(i,t,e,n,s,r,a,o)}function od(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ld(i,t)&&(fs(i,t)&&fs(t,i)&&cd(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Li(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Li(i,t){return i.x===t.x&&i.y===t.y}function Il(i,t,e,n){const s=tr(me(i,t,e)),r=tr(me(i,t,n)),a=tr(me(e,n,i)),o=tr(me(e,n,t));return!!(s!==r&&a!==o||s===0&&js(i,e,t)||r===0&&js(i,n,t)||a===0&&js(e,i,n)||o===0&&js(e,t,n))}function js(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tr(i){return i>0?1:i<0?-1:0}function ld(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Il(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fs(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function cd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nl(i,t){const e=Za(i.i,i.x,i.y),n=Za(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ul(i,t,e,n){const s=Za(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ps(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Za(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ud{static triangulate(t,e,n=2){return Ku(t,e,n)}}class ms{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Fl(t),Ol(n,t);let a=t.length;e.forEach(Fl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ol(n,e[l]);const o=ud.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Fl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ol(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $a extends Ya{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $a(t.radius,t.detail)}}class Di extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let y=0;y<c;y++){const M=y*d-r;g.push(M,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,M=v+c*(p+1),E=v+1+c*(p+1),S=v+1+c*p;f.push(y,M,S),f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ja extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new k,h=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n,M=a+y*o,E=t*Math.cos(M),S=Math.sqrt(t*t-E*E);let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const I=b/e,C=s+I*r;d.x=-S*Math.cos(C),d.y=E,d.z=S*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(I+x,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=u[p][v+1],M=u[p][v],E=u[p+1][v],S=u[p+1][v+1];(p!==0||a>0)&&f.push(y,M,S),(p!==n-1||l<Math.PI)&&f.push(M,E,S)}this.setIndex(f),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Bl(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Bl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function Bl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const fd={clone:Ii,merge:Ve};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class gd extends Jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yn extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qa extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _d extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ja={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(kl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!kl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function kl(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class xd{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vd=new xd;class to{constructor(t){this.manager=t!==void 0?t:vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}to.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni=new WeakMap;class Md extends to{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ja.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ni.get(a);d===void 0&&(d=[],Ni.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Qi("img");function l(){u(),e&&e(this);const d=Ni.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Ni.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),ja.remove(`image:${t}`);const h=Ni.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Ni.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ja.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Sd extends to{constructor(t){super(t)}load(t,e,n,s){const r=new Te,a=new Md(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Gl extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class yd extends Gl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const eo=new fe,Hl=new k,Vl=new k;class Ed{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hl),Vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(eo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ji||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const er=new k,nr=new qn,En=new k;class Wl extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(er,nr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,nr,En.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(er,nr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,nr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new k,Xl=new Pt,ql=new Pt;class fn extends Wl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ji*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Yl extends Wl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bd extends Ed{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wd extends Gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new bd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Kl extends Me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const Ui=-90,Fi=1;class no extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Ui,Fi,t,e);s.layers=this.layers,this.add(s);const r=new fn(Ui,Fi,t,e);r.layers=this.layers,this.add(r);const a=new fn(Ui,Fi,t,e);a.layers=this.layers,this.add(a);const o=new fn(Ui,Fi,t,e);o.layers=this.layers,this.add(o);const l=new fn(Ui,Fi,t,e);l.layers=this.layers,this.add(l);const c=new fn(Ui,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Td extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const Zl=new fe;class $l{constructor(t,e,n=0,s=1/0){this.ray=new Va(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(t,e=!0,n=[]){return io(t,this,n,e),n.sort(Jl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)io(t[s],this,n,e);return n.sort(Jl),n}}function Jl(i,t){return i.distance-t.distance}function io(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)io(r[a],t,e,!0)}}class ir{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ao=class Ao{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ao.prototype.isMatrix2=!0;let Ql=Ao;class Ad extends Xn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function jl(i,t,e,n){const s=Rd(n);switch(e){case Ko:return i*t;case $o:return i*t/s.components*s.byteLength;case Br:return i*t/s.components*s.byteLength;case si:return i*t*2/s.components*s.byteLength;case zr:return i*t*2/s.components*s.byteLength;case Zo:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case kr:return i*t*4/s.components*s.byteLength;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hr:case Wr:return Math.max(i,16)*Math.max(t,8)/4;case Gr:case Vr:return Math.max(i,8)*Math.max(t,8)/2;case Xr:case qr:case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case Ps:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ua:case da:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ls:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rd(i){switch(i){case je:case Wo:return{byteLength:1,components:1};case $i:case Xo:case xn:return{byteLength:2,components:1};case Fr:case Or:return{byteLength:2,components:4};case gn:case Ur:case _n:return{byteLength:4,components:1};case qo:case Yo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:on}})),typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=on);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cd(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Wd=`#ifdef USE_BUMPMAP
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jd=`#define PI 3.141592653589793
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
} // validated`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,af="gl_FragColor = linearToOutputTexel( gl_FragColor );",of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,yf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
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
#endif`,Rf=`uniform sampler2D dfgLUT;
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
}`,Cf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,If=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mp=`float getShadowMask() {
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
}`,gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vt={alphahash_fragment:Pd,alphahash_pars_fragment:Ld,alphamap_fragment:Dd,alphamap_pars_fragment:Id,alphatest_fragment:Nd,alphatest_pars_fragment:Ud,aomap_fragment:Fd,aomap_pars_fragment:Od,batching_pars_vertex:Bd,batching_vertex:zd,begin_vertex:kd,beginnormal_vertex:Gd,bsdfs:Hd,iridescence_fragment:Vd,bumpmap_pars_fragment:Wd,clipping_planes_fragment:Xd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:Kd,color_fragment:Zd,color_pars_fragment:$d,color_pars_vertex:Jd,color_vertex:Qd,common:jd,defaultnormal_vertex:tf,displacementmap_pars_vertex:ef,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:af,colorspace_pars_fragment:of,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:yf,envmap_vertex:df,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:xf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Sf,lights_toon_fragment:Ef,lights_toon_pars_fragment:bf,lights_phong_fragment:wf,lights_phong_pars_fragment:Tf,lights_physical_fragment:Af,lights_physical_pars_fragment:Rf,lights_fragment_begin:Cf,lights_fragment_maps:Pf,lights_fragment_end:Lf,lightprobes_pars_fragment:Df,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Ff,map_fragment:Of,map_pars_fragment:Bf,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Hf,morphinstance_vertex:Vf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:qf,morphtarget_vertex:Yf,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:$f,normal_pars_vertex:Jf,normal_vertex:Qf,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:np,iridescence_pars_fragment:ip,opaque_fragment:sp,packing:rp,premultiplied_alpha_fragment:ap,project_vertex:op,dithering_fragment:lp,dithering_pars_fragment:cp,roughnessmap_fragment:hp,roughnessmap_pars_fragment:up,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:fp,shadowmap_vertex:pp,shadowmask_pars_fragment:mp,skinbase_vertex:gp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:Sp,tonemapping_fragment:yp,tonemapping_pars_fragment:Ep,transmission_fragment:bp,transmission_pars_fragment:wp,uv_pars_fragment:Tp,uv_pars_vertex:Ap,uv_vertex:Rp,worldpos_vertex:Cp,background_vert:`varying vec2 vUv;
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
}`},xt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},bn={basic:{uniforms:Ve([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ve([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ve([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ve([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ve([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new It(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ve([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ve([xt.points,xt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ve([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ve([xt.common,xt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ve([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ve([xt.sprite,xt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ve([xt.common,xt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ve([xt.lights,xt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};bn.physical={uniforms:Ve([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const sr={r:0,b:0,g:0},Pp=new fe,ec=new Ot;ec.set(-1,0,0,0,1,0,0,0,1);function Lp(i,t,e,n,s,r){const a=new It(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(v){let y=!1;const M=f(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,y){const M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new ne(new Pi(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ii(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ec),c.material.toneMapped=$t.getTransfer(M.colorSpace)!==re,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ne(new Di(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ii(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$t.getTransfer(M.colorSpace)!==re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(sr,zl(i)),e.buffers.color.setClear(sr.r,sr.g,sr.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Dp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(R,P,D,A,U){let B=!1;const z=d(R,A,D,P);r!==z&&(r=z,c(r.object)),B=f(R,A,D,U),B&&g(R,A,D,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(R,P,D,A),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function u(R){return i.deleteVertexArray(R)}function d(R,P,D,A){const U=A.wireframe===!0;let B=n[P.id];B===void 0&&(B={},n[P.id]=B);const z=R.isInstancedMesh===!0?R.id:0;let J=B[z];J===void 0&&(J={},B[z]=J);let H=J[D.id];H===void 0&&(H={},J[D.id]=H);let Y=H[U];return Y===void 0&&(Y=h(l()),H[U]=Y),Y}function h(R){const P=[],D=[],A=[];for(let U=0;U<e;U++)P[U]=0,D[U]=0,A[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:A,object:R,attributes:{},index:null}}function f(R,P,D,A){const U=r.attributes,B=P.attributes;let z=0;const J=D.getAttributes();for(const H in J)if(J[H].location>=0){const tt=U[H];let gt=B[H];if(gt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),tt===void 0||tt.attribute!==gt||gt&&tt.data!==gt.data)return!0;z++}return r.attributesNum!==z||r.index!==A}function g(R,P,D,A){const U={},B=P.attributes;let z=0;const J=D.getAttributes();for(const H in J)if(J[H].location>=0){let tt=B[H];tt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor));const gt={};gt.attribute=tt,tt&&tt.data&&(gt.data=tt.data),U[H]=gt,z++}r.attributes=U,r.attributesNum=z,r.index=A}function _(){const R=r.newAttributes;for(let P=0,D=R.length;P<D;P++)R[P]=0}function m(R){p(R,0)}function p(R,P){const D=r.newAttributes,A=r.enabledAttributes,U=r.attributeDivisors;D[R]=1,A[R]===0&&(i.enableVertexAttribArray(R),A[R]=1),U[R]!==P&&(i.vertexAttribDivisor(R,P),U[R]=P)}function v(){const R=r.newAttributes,P=r.enabledAttributes;for(let D=0,A=P.length;D<A;D++)P[D]!==R[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function y(R,P,D,A,U,B,z){z===!0?i.vertexAttribIPointer(R,P,D,U,B):i.vertexAttribPointer(R,P,D,A,U,B)}function M(R,P,D,A){_();const U=A.attributes,B=D.getAttributes(),z=P.defaultAttributeValues;for(const J in B){const H=B[J];if(H.location>=0){let Y=U[J];if(Y===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){const tt=Y.normalized,gt=Y.itemSize,Lt=t.get(Y);if(Lt===void 0)continue;const K=Lt.buffer,it=Lt.type,St=Lt.bytesPerElement,Et=it===i.INT||it===i.UNSIGNED_INT||Y.gpuType===Ur;if(Y.isInterleavedBufferAttribute){const lt=Y.data,Mt=lt.isInterleavedBuffer===!0?lt.stride:lt.itemSize,ee=Y.offset;if(lt.isInstancedInterleavedBuffer||lt.isInstancedBufferAttribute){for(let Ct=0;Ct<H.locationSize;Ct++)p(H.location+Ct,lt.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Ct=0;Ct<H.locationSize;Ct++)y(H.location+Ct,gt/H.locationSize,it,tt,Mt*St,(ee+gt/H.locationSize*Ct)*St,Et)}else{if(Y.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,Y.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let lt=0;lt<H.locationSize;lt++)y(H.location+lt,gt/H.locationSize,it,tt,gt*St,gt/H.locationSize*lt*St,Et)}}else if(z!==void 0){const tt=z[J];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(H.location,tt);break;case 3:i.vertexAttrib3fv(H.location,tt);break;case 4:i.vertexAttrib4fv(H.location,tt);break;default:i.vertexAttrib1fv(H.location,tt)}}}}v()}function E(){I();for(const R in n){const P=n[R];for(const D in P){const A=P[D];for(const U in A){const B=A[U];for(const z in B)u(B[z].object),delete B[z];delete A[U]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;const P=n[R.id];for(const D in P){const A=P[D];for(const U in A){const B=A[U];for(const z in B)u(B[z].object),delete B[z];delete A[U]}}delete n[R.id]}function x(R){for(const P in n){const D=n[P];for(const A in D){const U=D[A];if(U[R.id]===void 0)continue;const B=U[R.id];for(const z in B)u(B[z].object),delete B[z];delete U[R.id]}}}function b(R){for(const P in n){const D=n[P],A=R.isInstancedMesh===!0?R.id:0,U=D[A];if(U!==void 0){for(const B in U){const z=U[B];for(const J in z)u(z[J].object),delete z[J];delete U[B]}delete D[A],Object.keys(D).length===0&&delete n[P]}}}function I(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Ip(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==vn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==je&&x!==_n&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:E,samples:S}}function Up(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Sn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,y=v*4;let M=p.clippingState||null;l.value=M,M=u(g,h,y,f);for(let E=0;E!==y;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==_;++y,M+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class so extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:fi});r.uniforms.tEquirect.value=e;const a=new ne(s,r),o=e.minFilter;return e.minFilter===Rn&&(e.minFilter=Ke),new no(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const nc=256,Fp=3,Op=20,ic=256,sc=16,Bp=3,zp=new k,kp=new It;class rr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new ne(new Pi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=zp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(kp));const m=new no(n,s,u);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=g,t.background=_,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(nc,al(t))}_fromTexture(t,e){t.mapping===mi||t.mapping===Zi?this._setSize(t.image.length===0?nc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=rc(t,!1,!1),n=Math.log2(t)-Fp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=rc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===mi||t.mapping===Zi?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ac()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gp(),this._integrationMaterial=Hp());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/sc);for(let a=0;a<=n;a++){const o=rr.lodToRoughness(a,n);if(a>n-Bp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(ic*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Vp());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function rc(i,t,e){return new so(i,{minFilter:Rn,generateMipmaps:t,type:xn,colorSpace:Ds,depthBuffer:e})}function gs(i,t,e){return new Jn({name:i,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:He,blending:fi,depthTest:!1,depthWrite:!1})}function Gp(){return gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ic}u

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
	`)}function Hp(){return gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sc}},`

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
	`)}function Vp(){return gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Op}
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
	`)}function ac(){return gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function oc(){return gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Pr||f===Lr)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new so(g.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,g=f===Pr||f===Lr,_=f===mi||f===Zi;if(g||_){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new rr(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new rr(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Pr?h.mapping=mi:f===Lr&&(h.mapping=Zi),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Xp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function qp(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);const _=r.get(g);_&&(t.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function u(g){const _=g.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function d(g){const _=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const v=_!==null?_.array.length:m.array.length/3-1,y=m.count>=65535?El:yl,M=new y(Math.ceil(v/3)*6,1),E=M.array;if(_!==null){const x=_.array;p=_.version;for(let b=0,I=0;b<v;b+=3){const C=x[b+0],R=x[b+1],P=x[b+2];E[I++]=C,E[I++]=R,E[I++]=R,E[I++]=P,E[I++]=P,E[I++]=C}}else{p=m.version;for(let x=0,b=0;x<v;x+=3){const I=x+0,C=x+1,R=x+2;E[b++]=I,E[b++]=C,E[b++]=C,E[b++]=R,E[b++]=R,E[b++]=I}}M.version=p;const S=r.get(g);S&&t.remove(S),r.set(g,M)}function h(g){const _=r.get(g);if(_){const m=g.index;m!==null&&_.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(const g in s){const _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function Yp(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Kp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){const n=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let I=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let M=o.attributes.position.count*y,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const S=new Float32Array(M*E*4*d),x=new dl(S,M,E,d);x.type=_n,x.needsUpdate=!0;const b=y*4;for(let C=0;C<d;C++){const R=m[C],P=p[C],D=v[C],A=M*E*4*C;for(let U=0;U<R.count;U++){const B=U*b;f===!0&&(s.fromBufferAttribute(R,U),S[A+B+0]=s.x,S[A+B+1]=s.y,S[A+B+2]=s.z,S[A+B+3]=0),g===!0&&(s.fromBufferAttribute(P,U),S[A+B+4]=s.x,S[A+B+5]=s.y,S[A+B+6]=s.z,S[A+B+7]=0),_===!0&&(s.fromBufferAttribute(D,U),S[A+B+8]=s.x,S[A+B+9]=s.y,S[A+B+10]=s.z,S[A+B+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new Pt(M,E)},n.set(o,h),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $p(i,t,e,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Jp={[Oo]:"LINEAR_TONE_MAPPING",[Bo]:"REINHARD_TONE_MAPPING",[zo]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[Ho]:"AGX_TONE_MAPPING",[Cr]:"NEUTRAL_TONE_MAPPING",[Go]:"CUSTOM_TONE_MAPPING"};function Qp(i,t,e,n,s,r){const a=new Mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Me;u.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ae([0,2,0,0,2,0],2));const d=new gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ne(u,d),f=new Yl(-1,1,1,-1,0,1);let g=null,_=null,m=!1,p,v=null,y=[],M=!1;this.setSize=function(E,S){a.setSize(E,S),o!==null&&o.setSize(E,S),l!==null&&l.setSize(E,S);for(let x=0;x<y.length;x++){const b=y[x];b.setSize&&b.setSize(E,S)}},this.setEffects=function(E){y=E,M=y.length>0&&y[0].isRenderPass===!0;const S=a.width,x=a.height;y.length>0&&o===null&&(o=new Mn(S,x,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(S,x,{type:xn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&y.some(I=>I.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ci(S,x),r===!0&&(c.format=Vn,c.type=gi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let I=0;I<y.length;I++){const C=y[I];C.setSize&&C.setSize(S,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,S){if(m||E.toneMapping===Tn&&y.length===0)return!1;if(v=S,S!==null){const x=S.width,b=S.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return M===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=Tn,!0},this.hasRenderPass=function(){return M},this.end=function(E,S){E.toneMapping=p,m=!0;let x=a,b=o;for(let I=0;I<y.length;I++){const C=y[I];C.enabled!==!1&&(C.render(E,b,x,S),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(g!==E.outputColorSpace||_!==E.toneMapping){g=E.outputColorSpace,_=E.toneMapping,d.defines={},$t.getTransfer(g)===re&&(d.defines.SRGB_TRANSFER="");const I=Jp[_];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(h,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const lc=new Te,cc=new Ci(1,1),hc=new Cl(1),uc=new dl,dc=new Pu,fc=new Rl,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),xc=new Float32Array(4);function Oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pc[s];if(r===void 0&&(r=new Float32Array(s),pc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ar(i,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;xc.set(n),i.uniformMatrix2fv(this.addr,!1,xc),ye(e,n)}}function sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;_c.set(n),i.uniformMatrix3fv(this.addr,!1,_c),ye(e,n)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;gc.set(n),i.uniformMatrix4fv(this.addr,!1,gc),ye(e,n)}}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function or(i){return i.version===0&&(i.compareFunction=tl,i.needsUpdate=!0),i}function pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=or(cc):r=lc,e.setTexture2D(t||r,s)}function mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dc,s)}function gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=or(hc):r=fc,e.setTextureCube(t||r,s)}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uc,s)}function xm(i){switch(i){case 5126:return jp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function vm(i,t){i.uniform1fv(this.addr,t)}function Mm(i,t){const e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){const e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function ym(i,t){const e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function Em(i,t){const e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bm(i,t){const e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wm(i,t){const e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tm(i,t){i.uniform1iv(this.addr,t)}function Am(i,t){i.uniform2iv(this.addr,t)}function Rm(i,t){i.uniform3iv(this.addr,t)}function Cm(i,t){i.uniform4iv(this.addr,t)}function Pm(i,t){i.uniform1uiv(this.addr,t)}function Lm(i,t){i.uniform2uiv(this.addr,t)}function Dm(i,t){i.uniform3uiv(this.addr,t)}function Im(i,t){i.uniform4uiv(this.addr,t)}function Nm(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=or(cc):a=lc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Um(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dc,r[a])}function Fm(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=or(hc):a=fc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Om(i,t,e){const n=this.cache,s=t.length,r=ar(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uc,r[a])}function Bm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return ym;case 35674:return Em;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xm(e.type)}}class km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bm(e.type)}}class Gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function vc(i,t){i.seq.push(t),i.map[t.id]=t}function Hm(i,t,e){const n=i.name,s=n.length;for(ro.lastIndex=0;;){const r=ro.exec(n),a=ro.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vc(e,c===void 0?new zm(o,i,t):new km(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Gm(o),vc(e,d)),e=d}}}class lr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Hm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vm=37297;let Wm=0;function Xm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Sc=new Ot;function qm(i){$t._getMatrix(Sc,$t.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Is:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Xm(i.getShaderSource(t),o)}else return r}function Ym(i,t){const e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Km={[Oo]:"Linear",[Bo]:"Reinhard",[zo]:"Cineon",[ko]:"ACESFilmic",[Ho]:"AgX",[Cr]:"Neutral",[Go]:"Custom"};function Zm(i,t){const e=Km[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new k;function $m(){$t.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Qm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function _s(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(t0,e0)}function e0(i,t){const e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ao(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(n0,i0)}function i0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const s0={[Xi]:"SHADOWMAP_TYPE_PCF",[qi]:"SHADOWMAP_TYPE_VSM"};function r0(i){return s0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a0={[Zi]:"ENVMAP_MODE_REFRACTION"};function o0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l0={[Fo]:"ENVMAP_BLENDING_MULTIPLY",[Kh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function c0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l0[i.combine]||"ENVMAP_BLENDING_NONE"}function h0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=r0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=o0(e),d=c0(e),h=Jm(e),f=Qm(r),g=s.createProgram();let _,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(_s).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(_s).join(`
`),m.length>0&&(m+=`
`)):(_=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),m=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_s).join(`
`)),a=ao(a),a=Ec(a,e),a=bc(a,e),o=ao(o),o=Ec(o,e),o=bc(o,e),a=wc(a),o=wc(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=p+_+a,y=p+m+o,M=Mc(s,s.VERTEX_SHADER,v),E=Mc(s,s.FRAGMENT_SHADER,y);s.attachShader(g,M),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(C){if(i.debug.checkShaderErrors){const R=s.getProgramInfoLog(g)||"",P=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(E)||"",A=R.trim(),U=P.trim(),B=D.trim();let z=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,E);else{const H=yc(s,M,"vertex"),Y=yc(s,E,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+H+`
`+Y)}else A!==""?Ft("WebGLProgram: Program Info Log:",A):(U===""||B==="")&&(J=!1);J&&(C.diagnostics={runnable:z,programLog:A,vertexShader:{log:U,prefix:_},fragmentShader:{log:B,prefix:m}})}s.deleteShader(M),s.deleteShader(E),x=new lr(s,g),b=jm(s,g)}let x;this.getUniforms=function(){return x===void 0&&S(this),x};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(g,Vm)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let u0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function p0(i){return i===si||i===Ps||i===Ls}function m0(i,t,e,n,s,r){const a=new Ta,o=new d0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,I,C,R,P){const D=C.fog,A=R.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=t.get(x.envMap||U,B),J=h[x.type];let H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));const Y=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,tt=Y!==void 0?Y.length:0;let gt=0;A.morphAttributes.position!==void 0&&(gt=1),A.morphAttributes.normal!==void 0&&(gt=2),A.morphAttributes.color!==void 0&&(gt=3);let Lt,K,it,St;if(J){const vt=bn[J];Lt=vt.vertexShader,K=vt.fragmentShader}else{Lt=x.vertexShader,K=x.fragmentShader;const vt=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,vt,ae),it=vt.id,St=ae.id}const Et=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Mt=R.isInstancedMesh===!0,ee=R.isBatchedMesh===!0,Ct=!!x.map,Jt=!!x.matcap,qt=!!z,ot=qt&&z.isPMREMTexture===!0,Nt=!!x.aoMap,kt=!!x.lightMap,de=!!x.bumpMap&&x.wireframe===!1,oe=!!x.normalMap,Je=!!x.displacementMap,ge=!!x.emissiveMap,be=!!x.metalnessMap,Qe=!!x.roughnessMap,We=x.anisotropy>0,O=x.clearcoat>0,Xe=x.diffuseRoughness>0,le=x.dispersion>0,pe=x.retroreflectivity>0,_t=x.iridescence>0,we=x.sheen>0,Ut=x.transmission>0,Bt=We&&!!x.anisotropyMap,L=O&&!!x.clearcoatMap,w=O&&!!x.clearcoatNormalMap,W=O&&!!x.clearcoatRoughnessMap,st=Xe&&!!x.diffuseRoughnessMap,et=_t&&!!x.iridescenceMap,ct=_t&&!!x.iridescenceThicknessMap,pt=we&&!!x.sheenColorMap,$=we&&!!x.sheenRoughnessMap,Q=!!x.specularMap,ut=!!x.specularColorMap,N=!!x.specularIntensityMap,j=Ut&&!!x.transmissionMap,Z=Ut&&!!x.thicknessMap,dt=!!x.gradientMap,at=!!x.alphaMap,ht=x.alphaTest>0,Rt=!!x.alphaHash,Wt=!!x.extensions;let rt=Tn;x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Dt=ot?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Gt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:K,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:St,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:ee,batchingColor:ee&&R._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&R.instanceColor!==null,instancingMorph:Mt&&R.morphTexture!==null,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:Jt,envMap:qt,envMapMode:qt&&z.mapping,envMapPMREM:ot,envMapMaxLod:ot?Dt.length-1:null,envMapSize:ot?Dt[0].width:null,aoMap:Nt,lightMap:kt,bumpMap:de,normalMap:oe,displacementMap:Je,emissiveMap:ge,normalMapObjectSpace:oe&&x.normalMapType===Qh,normalMapTangentSpace:oe&&x.normalMapType===_a,packedNormalMap:oe&&x.normalMapType===_a&&p0(x.normalMap.format),metalnessMap:be,roughnessMap:Qe,anisotropy:We,anisotropyMap:Bt,clearcoat:O,clearcoatMap:L,clearcoatNormalMap:w,clearcoatRoughnessMap:W,diffuseRoughness:Xe,diffuseRoughnessMap:st,dispersion:le,retroreflection:pe,iridescence:_t,iridescenceMap:et,iridescenceThicknessMap:ct,sheen:we,sheenColorMap:pt,sheenRoughnessMap:$,specularMap:Q,specularColorMap:ut,specularIntensityMap:N,transmission:Ut,transmissionMap:j,thicknessMap:Z,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Yi&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:ht,alphaHash:Rt,combine:x.combine,mapUv:Ct&&f(x.map.channel),aoMapUv:Nt&&f(x.aoMap.channel),lightMapUv:kt&&f(x.lightMap.channel),bumpMapUv:de&&f(x.bumpMap.channel),normalMapUv:oe&&f(x.normalMap.channel),displacementMapUv:Je&&f(x.displacementMap.channel),emissiveMapUv:ge&&f(x.emissiveMap.channel),metalnessMapUv:be&&f(x.metalnessMap.channel),roughnessMapUv:Qe&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:L&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(x.sheenRoughnessMap.channel),specularMapUv:Q&&f(x.specularMap.channel),specularColorMapUv:ut&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:at&&f(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(oe||We),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!A.attributes.uv&&(Ct||at),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&oe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:gt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:P.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:ge&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oe,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Wt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&x.extensions.multiDraw===!0||ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)b.push(I),b.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(b,x),p(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const b=h[x.type];let I;if(b){const C=bn[b];I=fd.clone(C.uniforms)}else I=x.uniforms;return I}function y(x,b){let I=u.get(b);return I!==void 0?++I.usedTimes:(I=new h0(i,b,x,s),c.push(I),u.set(b,I)),I}function M(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:S}}function g0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=p),t++,v}function l(h,f,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);const y=o(h,f,g,_,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(h,f,g,_,m,p){const v=o(h,f,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||_0),n.length>1&&n.sort(f||Ac),s.length>1&&s.sort(f||Ac)}function d(){for(let h=t,f=i.length;h<f;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function x0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Rc,i.set(n,[a])):s>=r.length?(a=new Rc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new It};break;case"SpotLight":e={position:new k,direction:new k,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function M0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let S0=0;function y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E0(i){const t=new v0,e=M0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new fe,a=new fe;function o(c){let u=0,d=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,M=0,E=0,S=0,x=0,b=0,I=0,C=0;c.sort(y0);for(let P=0,D=c.length;P<D;P++){const A=c[P],U=A.color,B=A.intensity,z=A.distance;let J=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===si?J=A.shadow.map.texture:J=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=U.r*B,d+=U.g*B,h+=U.b*B;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],B);C++}else if(A.isSunLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=J;const gt=Y.getViewportCount();for(let Lt=0;Lt<gt;Lt++)n.sunShadowMatrix[_+Lt]=Y.getMatrix(Lt),n.sunShadowCascade[_+Lt]=Y._cascadeData[Lt];_+=gt,g++}n.sun[f]=H,f++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=A.shadow.matrix,E++}n.directional[m]=H,m++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(U).multiplyScalar(B),H.distance=z,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[v]=H;const Y=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,Y.updateMatrices(A),A.castShadow&&I++),n.spotLightMatrix[v]=Y.matrix,A.castShadow){const tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=J,x++}v++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(U).multiplyScalar(B),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=H,y++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const Y=A.shadow,tt=e.get(A);tt.shadowIntensity=Y.intensity,tt.shadowBias=Y.bias,tt.shadowNormalBias=Y.normalBias,tt.shadowRadius=Y.radius,tt.shadowMapSize=Y.mapSize,tt.shadowCameraNear=Y.camera.near,tt.shadowCameraFar=Y.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=A.shadow.matrix,S++}n.point[p]=H,p++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(B),H.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[M]=H,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==y||R.hemiLength!==M||R.numSunShadows!==g||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,R.sunLength=f,R.directionalLength=m,R.pointLength=p,R.spotLength=v,R.rectAreaLength=y,R.hemiLength=M,R.numSunShadows=g,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=C,n.version=S0++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const M=c[v];if(M.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Cc(i){const t=new E0(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function b0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Cc(i),t.set(s,[o])):r>=a.length?(o=new Cc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
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
}`,A0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],R0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Pc=new fe,xs=new k,oo=new k;function C0(i,t,e){let n=new hs;const s=new Pt,r=new Pt,a=new ue,o=new Qa,l=new _d,c={},u=e.maxTextureSize,d={[ii]:He,[He]:ii,[Oe]:Oe},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:w0,fragmentShader:T0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xi;let p=this.type;this.render=function(S,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ch&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xi);const I=i.getRenderTarget(),C=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=p!==this.type;D&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(U=>U.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,U=S.length;A<U;A++){const B=S[A],z=B.shadow;if(z===void 0){Ft("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||D===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qi){if(B.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Mn(s.x,s.y,{format:si,type:xn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Ci(s.x,s.y,_n),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Hn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Le,z.map.depthTexture.magFilter=Le}else B.isPointLight?(z.map=new so(s.x),z.map.depthTexture=new Cl(s.x,gn)):(z.map=new Mn(s.x,s.y),z.map.depthTexture=new Ci(s.x,s.y,gn)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Hn,this.type===Xi?(z.map.depthTexture.compareFunction=H?jo:Qo,z.map.depthTexture.minFilter=Ke,z.map.depthTexture.magFilter=Ke):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Le,z.map.depthTexture.magFilter=Le);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const Y=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();B.isPointLight!==!0&&z.updateMatrices(B,b);const tt=z.camera.layers.mask&4294967294?z.camera.layers:b.layers;for(let gt=0;gt<Y;gt++){const Lt=z.getCamera(gt);if(B.isPointLight){const K=z.camera,it=z.matrix,St=B.distance||K.far;St!==K.far&&(K.far=St,K.updateProjectionMatrix()),xs.setFromMatrixPosition(B.matrixWorld),K.position.copy(xs),oo.copy(K.position),oo.add(A0[gt]),K.up.copy(R0[gt]),K.lookAt(oo),K.updateMatrixWorld(),it.makeTranslation(-xs.x,-xs.y,-xs.z),Pc.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Pc,K.coordinateSystem,K.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(z.map),i.clear());const K=z.getViewport(gt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),P.viewport(a)}n=z.getFrustum(gt),M(x,b,Lt,B,tt,this.type)}z.isPointLightShadow!==!0&&this.type===qi&&v(z,b),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,C,R)};function v(S,x){const b=t.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Mn(s.x,s.y,{format:si,type:xn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(x,null,b,h,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(x,null,b,f,_,null)}function y(S,x,b,I){let C=null;const R=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)C=R;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const P=C.uuid,D=x.uuid;let A=c[P];A===void 0&&(A={},c[P]=A);let U=A[D];U===void 0&&(U=C.clone(),A[D]=U,x.addEventListener("dispose",E)),C=U}if(C.visible=x.visible,C.wireframe=x.wireframe,I===qi?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const P=i.properties.get(C);P.light=b}return C}function M(S,x,b,I,C,R){if(S.visible===!1)return;if(S.layers.test(C)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===qi)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const A=t.update(S),U=S.material;if(Array.isArray(U)){const B=A.groups;for(let z=0,J=B.length;z<J;z++){const H=B[z],Y=U[H.materialIndex];if(Y&&Y.visible){const tt=y(S,Y,I,R);S.onBeforeShadow(i,S,x,b,A,tt,H),i.renderBufferDirect(b,null,A,tt,S,H),S.onAfterShadow(i,S,x,b,A,tt,H)}}}else if(U.visible){const B=y(S,U,I,R);S.onBeforeShadow(i,S,x,b,A,B,null),i.renderBufferDirect(b,null,A,B,S,null),S.onAfterShadow(i,S,x,b,A,B,null)}}const D=S.children;for(let A=0,U=D.length;A<U;A++)M(D[A],x,b,I,C,R)}function E(S){S.target.removeEventListener("dispose",E);for(const b in c){const I=c[b],C=S.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function P0(i,t){function e(){let N=!1;const j=new ue;let Z=null;const dt=new ue(0,0,0,0);return{setMask:function(at){Z!==at&&!N&&(i.colorMask(at,at,at,at),Z=at)},setLocked:function(at){N=at},setClear:function(at,ht,Rt,Wt,rt){rt===!0&&(at*=Wt,ht*=Wt,Rt*=Wt),j.set(at,ht,Rt,Wt),dt.equals(j)===!1&&(i.clearColor(at,ht,Rt,Wt),dt.copy(j))},reset:function(){N=!1,Z=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,j=!1,Z=null,dt=null,at=null;return{setReversed:function(ht){if(j!==ht){const Rt=t.get("EXT_clip_control");ht?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),j=ht;const Wt=at;at=null,this.setClear(Wt)}},getReversed:function(){return j},setTest:function(ht){ht?lt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ht){Z!==ht&&!N&&(i.depthMask(ht),Z=ht)},setFunc:function(ht){if(j&&(ht=cu[ht]),dt!==ht){switch(ht){case yr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case br:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case wr:i.depthFunc(i.EQUAL);break;case Tr:i.depthFunc(i.GEQUAL);break;case Ar:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=ht}},setLocked:function(ht){N=ht},setClear:function(ht){at!==ht&&(at=ht,j&&(ht=1-ht),i.clearDepth(ht))},reset:function(){N=!1,Z=null,dt=null,at=null,j=!1}}}function s(){let N=!1,j=null,Z=null,dt=null,at=null,ht=null,Rt=null,Wt=null,rt=null;return{setTest:function(Dt){N||(Dt?lt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Dt){j!==Dt&&!N&&(i.stencilMask(Dt),j=Dt)},setFunc:function(Dt,Gt,vt){(Z!==Dt||dt!==Gt||at!==vt)&&(i.stencilFunc(Dt,Gt,vt),Z=Dt,dt=Gt,at=vt)},setOp:function(Dt,Gt,vt){(ht!==Dt||Rt!==Gt||Wt!==vt)&&(i.stencilOp(Dt,Gt,vt),ht=Dt,Rt=Gt,Wt=vt)},setLocked:function(Dt){N=Dt},setClear:function(Dt){rt!==Dt&&(i.clearStencil(Dt),rt=Dt)},reset:function(){N=!1,j=null,Z=null,dt=null,at=null,ht=null,Rt=null,Wt=null,rt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,y=null,M=null,E=null,S=null,x=null,b=new It(0,0,0),I=0,C=!1,R=null,P=null,D=null,A=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=J>=2);let Y=null,tt={};const gt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),K=new ue().fromArray(gt),it=new ue().fromArray(Lt);function St(N,j,Z,dt){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(N,ht),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<Z;Rt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(j+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const Et={};Et[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Ki),de(!1),oe(Po),lt(i.CULL_FACE),Nt(fi);function lt(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Mt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function ee(N,j){return h[N]!==j?(i.bindFramebuffer(N,j),h[N]=j,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ct(N,j){let Z=g,dt=!1;if(N){Z=f.get(j),Z===void 0&&(Z=[],f.set(j,Z));const at=N.textures;if(Z.length!==at.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Rt=at.length;ht<Rt;ht++)Z[ht]=i.COLOR_ATTACHMENT0+ht;Z.length=at.length,dt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,dt=!0);dt&&i.drawBuffers(Z)}function Jt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const qt={[pi]:i.FUNC_ADD,[Lh]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};qt[Ih]=i.MIN,qt[Nh]=i.MAX;const ot={[Uh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function Nt(N,j,Z,dt,at,ht,Rt,Wt,rt,Dt){if(N===fi){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(lt(i.BLEND),m=!0),N!==Ph){if(N!==p||Dt!==C){if((v!==pi||E!==pi)&&(i.blendEquation(i.FUNC_ADD),v=pi,E=pi),Dt)switch(N){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFunc(i.ONE,i.ONE);break;case Do:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",N);break}else switch(N){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Do:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Io:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",N);break}y=null,M=null,S=null,x=null,b.set(0,0,0),I=0,p=N,C=Dt}return}at=at||j,ht=ht||Z,Rt=Rt||dt,(j!==v||at!==E)&&(i.blendEquationSeparate(qt[j],qt[at]),v=j,E=at),(Z!==y||dt!==M||ht!==S||Rt!==x)&&(i.blendFuncSeparate(ot[Z],ot[dt],ot[ht],ot[Rt]),y=Z,M=dt,S=ht,x=Rt),(Wt.equals(b)===!1||rt!==I)&&(i.blendColor(Wt.r,Wt.g,Wt.b,rt),b.copy(Wt),I=rt),p=N,C=!1}function kt(N,j){N.side===Oe?Mt(i.CULL_FACE):lt(i.CULL_FACE);let Z=N.side===He;j&&(Z=!Z),de(Z),N.blending===Yi&&N.transparent===!1?Nt(fi):Nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(N){R!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),R=N)}function oe(N){N!==Ah?(lt(i.CULL_FACE),N!==P&&(N===Po?i.cullFace(i.BACK):N===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=N}function Je(N){N!==D&&(z&&i.lineWidth(N),D=N)}function ge(N,j,Z){N?(lt(i.POLYGON_OFFSET_FILL),(A!==j||U!==Z)&&(A=j,U=Z,a.getReversed()&&(j=-j,Z=-Z),i.polygonOffset(j,Z))):Mt(i.POLYGON_OFFSET_FILL)}function be(N){N?lt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Qe(N){N===void 0&&(N=i.TEXTURE0+B-1),Y!==N&&(i.activeTexture(N),Y=N)}function We(N,j,Z){Z===void 0&&(Y===null?Z=i.TEXTURE0+B-1:Z=Y);let dt=tt[Z];dt===void 0&&(dt={type:void 0,texture:void 0},tt[Z]=dt),(dt.type!==N||dt.texture!==j)&&(Y!==Z&&(i.activeTexture(Z),Y=Z),i.bindTexture(N,j||Et[N]),dt.type=N,dt.texture=j)}function O(){const N=tt[Y];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function le(){try{i.compressedTexImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function pe(){try{i.texSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function _t(){try{i.texSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function Bt(){try{i.texStorage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function L(){try{i.texStorage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function w(){try{i.texImage2D(...arguments)}catch(N){jt("WebGLState:",N)}}function W(){try{i.texImage3D(...arguments)}catch(N){jt("WebGLState:",N)}}function st(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function et(N,j){d[N]!==j&&(i.pixelStorei(N,j),d[N]=j)}function ct(N){K.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function pt(N){it.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),it.copy(N))}function $(N,j){let Z=c.get(j);Z===void 0&&(Z=new WeakMap,c.set(j,Z));let dt=Z.get(N);dt===void 0&&(dt=i.getUniformBlockIndex(j,N.name),i.uniformBlockBinding(j,dt,dt),Z.set(N,dt))}function Q(N,j,Z){const at=c.get(j).get(N);l[at]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,Z),l[at]=Z)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Y=null,tt={},h={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,y=null,M=null,E=null,S=null,x=null,b=new It(0,0,0),I=0,C=!1,R=null,P=null,D=null,A=null,U=null,K.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Mt,bindFramebuffer:ee,drawBuffers:Ct,useProgram:Jt,setBlending:Nt,setMaterial:kt,setFlipSided:de,setCullFace:oe,setLineWidth:Je,setPolygonOffset:ge,setScissorTest:be,activeTexture:Qe,bindTexture:We,unbindTexture:O,compressedTexImage2D:Xe,compressedTexImage3D:le,texImage2D:w,texImage3D:W,pixelStorei:et,getParameter:st,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Bt,texStorage3D:L,texSubImage2D:pe,texSubImage3D:_t,compressedTexSubImage2D:we,compressedTexSubImage3D:Ut,scissor:ct,viewport:pt,reset:ut}}function L0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap,d=new Set;let h;const f=new WeakMap,g=new Set,_=new FinalizationRegistry(L=>g.delete(L));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,w){return m?new OffscreenCanvas(L,w):Qi("canvas")}function v(L,w,W){let st=1;const et=Bt(L);if((et.width>W||et.height>W)&&(st=W/Math.max(et.width,et.height)),st<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(st*et.width),pt=Math.floor(st*et.height);h===void 0&&(h=p(ct,pt));const $=w?p(ct,pt):h;return $.width=ct,$.height=pt,$.getContext("2d").drawImage(L,0,0,ct,pt),Ft("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ct+"x"+pt+")."),$}else return"data"in L&&Ft("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function y(L){return L.generateMipmaps}function M(L){i.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(L,w,W,st,et,ct=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt;st&&(pt=t.get("EXT_texture_norm16"),pt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8),W===i.UNSIGNED_SHORT&&pt&&($=pt.R16_EXT),W===i.SHORT&&pt&&($=pt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),w===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8),W===i.UNSIGNED_SHORT&&pt&&($=pt.RG16_EXT),W===i.SHORT&&pt&&($=pt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),w===i.RGB&&(W===i.UNSIGNED_SHORT&&pt&&($=pt.RGB16_EXT),W===i.SHORT&&pt&&($=pt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),w===i.RGBA){const Q=ct?Is:$t.getTransfer(et);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=Q===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&pt&&($=pt.RGBA16_EXT),W===i.SHORT&&pt&&($=pt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(L,w){let W;return L?w===null||w===gn||w===gi?W=i.DEPTH24_STENCIL8:w===_n?W=i.DEPTH32F_STENCIL8:w===$i&&(W=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===gn||w===gi?W=i.DEPTH_COMPONENT24:w===_n?W=i.DEPTH_COMPONENT32F:w===$i&&(W=i.DEPTH_COMPONENT16),W}function b(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Le&&L.minFilter!==Ke?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=new WeakRef(L);n.get(L).__ref=w,g.add(w),_.register(L,w,w)}function C(L){const w=n.get(L).__ref;w!==void 0&&(g.delete(w),_.unregister(w))}function R(L){D(L.target)}function P(L){A(L.target)}function D(L){L.removeEventListener("dispose",R),C(L),B(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&d.delete(L)}function A(L){L.removeEventListener("dispose",P),C(L),J(L)}function U(){for(const L of g){const w=L.deref();w!==void 0&&(w.isRenderTarget===!0?A(w):D(w))}g.clear(),d.clear()}function B(L){const w=n.get(L);if(w.__webglInit===void 0)return;const W=L.source,st=f.get(W);if(st){const et=st[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&z(L),Object.keys(st).length===0&&f.delete(W)}n.remove(L)}function z(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const W=L.source,st=f.get(W);delete st[w.__cacheKey],a.memory.textures--}function J(L){const w=n.get(L);w.__depthDisposeCallback&&w.__depthDisposeCallback();const W=L.depthTexture;if(W&&W.renderTarget===L&&D(W),L.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let ct=0;ct<w.__webglFramebuffer[et].length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[et][ct]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const st=L.textures;for(let et=0,ct=st.length;et<ct;et++){const pt=n.get(st[et]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(st[et])}n.remove(L)}let H=0;function Y(){H=0}function tt(){return H}function gt(L){H=L}function Lt(){const L=H;return L>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,L}function K(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.mipmapsAutoUpdate),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function it(L,w){const W=n.get(L);if(L.isVideoTexture&&we(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const st=L.image;if(st===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{kt(W,L,w);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function St(L,w){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){kt(W,L,w);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function Et(L,w){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){kt(W,L,w);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function lt(L,w){const W=n.get(L);if(L.version>0&&W.__version!==L.version){de(W,L,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}const Mt={[Dr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ee={[Le]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},Ct={[tu]:i.NEVER,[tl]:i.ALWAYS,[eu]:i.LESS,[Qo]:i.LEQUAL,[nu]:i.EQUAL,[jo]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function Jt(L,w){if(w.type===_n&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ke||w.magFilter===Nr||w.magFilter===ws||w.magFilter===Rn||w.minFilter===Ke||w.minFilter===Nr||w.minFilter===ws||w.minFilter===Rn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Mt[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Mt[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Mt[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ee[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Le||w.minFilter!==ws&&w.minFilter!==Rn||w.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function qt(L,w){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",R),I(w));const st=w.source;let et=f.get(st);et===void 0&&(et={},f.set(st,et));const ct=K(w);if(ct!==L.__cacheKey){et[ct]===void 0&&(et[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[ct].usedTimes++;const pt=et[L.__cacheKey];pt!==void 0&&(et[L.__cacheKey].usedTimes--,pt.usedTimes===0&&z(w)),L.__cacheKey=ct,L.__webglTexture=et[ct].texture}return W}function ot(L,w,W){return Math.floor(Math.floor(L/W)/w)}function Nt(L,w,W,st){const ct=L.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,st,w.data);else{ct.sort((N,j)=>N.start-j.start);let pt=0;for(let N=1;N<ct.length;N++){const j=ct[pt],Z=ct[N],dt=j.start+j.count,at=ot(Z.start,w.width,4),ht=ot(j.start,w.width,4);Z.start<=dt+1&&at===ht&&ot(Z.start+Z.count-1,w.width,4)===at?j.count=Math.max(j.count,Z.start+Z.count-j.start):(++pt,ct[pt]=Z)}ct.length=pt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let N=0,j=ct.length;N<j;N++){const Z=ct[N],dt=Math.floor(Z.start/4),at=Math.ceil(Z.count/4),ht=dt%w.width,Rt=Math.floor(dt/w.width),Wt=at,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(i.TEXTURE_2D,0,ht,Rt,Wt,rt,W,st,w.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function kt(L,w,W){let st=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=i.TEXTURE_3D);const et=qt(L,w),ct=w.source;e.bindTexture(st,L.__webglTexture,i.TEXTURE0+W);const pt=n.get(ct);if(ct.version!==pt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const rt=$t.getPrimaries($t.workingColorSpace),Dt=w.colorSpace===Wn?null:$t.getPrimaries(w.colorSpace),Gt=w.colorSpace===Wn||rt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let Q=v(w.image,!1,s.maxTextureSize);Q=Ut(w,Q);const ut=r.convert(w.format,w.colorSpace),N=r.convert(w.type);let j=S(w.internalFormat,ut,N,w.normalized,w.colorSpace,w.isVideoTexture);Jt(st,w);let Z;const dt=w.mipmaps,at=w.isVideoTexture!==!0,ht=pt.__version===void 0||et===!0,Rt=ct.dataReady,Wt=b(w,Q);if(w.isDepthTexture)j=x(w.format===Vn,w.type),ht&&(at?e.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ut,N,null));else if(w.isDataTexture)if(dt.length>0){at&&ht&&e.texStorage2D(i.TEXTURE_2D,Wt,j,dt[0].width,dt[0].height);for(let rt=0,Dt=dt.length;rt<Dt;rt++)Z=dt[rt],at?Rt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,N,Z.data):e.texImage2D(i.TEXTURE_2D,rt,j,Z.width,Z.height,0,ut,N,Z.data);w.generateMipmaps=!1}else at?(ht&&e.texStorage2D(i.TEXTURE_2D,Wt,j,Q.width,Q.height),Rt&&Nt(w,Q,ut,N)):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ut,N,Q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,dt[0].width,dt[0].height,Q.depth);for(let rt=0,Dt=dt.length;rt<Dt;rt++)if(Z=dt[rt],w.format!==vn)if(ut!==null)if(at){if(Rt)if(w.layerUpdates.size>0){const Gt=jl(Z.width,Z.height,w.format,w.type);for(const vt of w.layerUpdates){const ae=Z.data.subarray(vt*Gt/Z.data.BYTES_PER_ELEMENT,(vt+1)*Gt/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,vt,Z.width,Z.height,1,ut,ae)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,Q.depth,ut,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,j,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Z.width,Z.height,Q.depth,ut,N,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,j,Z.width,Z.height,Q.depth,0,ut,N,Z.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{at&&ht&&e.texStorage2D(i.TEXTURE_2D,Wt,j,dt[0].width,dt[0].height);for(let rt=0,Dt=dt.length;rt<Dt;rt++)Z=dt[rt],w.format!==vn?ut!==null?at?Rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,j,Z.width,Z.height,0,Z.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Rt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Z.width,Z.height,ut,N,Z.data):e.texImage2D(i.TEXTURE_2D,rt,j,Z.width,Z.height,0,ut,N,Z.data)}else if(w.isDataArrayTexture)if(at){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,j,Q.width,Q.height,Q.depth),Rt)if(w.layerUpdates.size>0){const rt=jl(Q.width,Q.height,w.format,w.type);for(const Dt of w.layerUpdates){const Gt=Q.data.subarray(Dt*rt/Q.data.BYTES_PER_ELEMENT,(Dt+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,Q.width,Q.height,1,ut,N,Gt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,N,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ut,N,Q.data);else if(w.isData3DTexture)at?(ht&&e.texStorage3D(i.TEXTURE_3D,Wt,j,Q.width,Q.height,Q.depth),Rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,N,Q.data)):e.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ut,N,Q.data);else if(w.isFramebufferTexture){if(ht)if(at)e.texStorage2D(i.TEXTURE_2D,Wt,j,Q.width,Q.height);else{let rt=Q.width,Dt=Q.height;for(let Gt=0;Gt<Wt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,j,rt,Dt,0,ut,N,null),rt>>=1,Dt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),d.add(w),rt.onpaint=Dt=>{const Gt=Dt.changedElements;for(const vt of d)Gt.includes(vt.image)&&(vt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const Gt=i.RGBA,vt=i.RGBA,ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,vt,ae,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(at&&ht){const rt=Bt(dt[0]);e.texStorage2D(i.TEXTURE_2D,Wt,j,rt.width,rt.height)}for(let rt=0,Dt=dt.length;rt<Dt;rt++)Z=dt[rt],at?Rt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ut,N,Z):e.texImage2D(i.TEXTURE_2D,rt,j,ut,N,Z);w.generateMipmaps=!1}else if(at){if(ht){const rt=Bt(Q);e.texStorage2D(i.TEXTURE_2D,Wt,j,rt.width,rt.height)}Rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,N,Q)}else e.texImage2D(i.TEXTURE_2D,0,j,ut,N,Q);y(w)&&w.mipmapsAutoUpdate===!0&&M(st),pt.__version=ct.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,W){if(w.image.length!==6)return;const st=qt(L,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const ct=n.get(et);if(et.version!==ct.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const pt=$t.getPrimaries($t.workingColorSpace),$=w.colorSpace===Wn?null:$t.getPrimaries(w.colorSpace),Q=w.colorSpace===Wn||pt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,j=[];for(let vt=0;vt<6;vt++)!ut&&!N?j[vt]=v(w.image[vt],!0,s.maxCubemapSize):j[vt]=N?w.image[vt].image:w.image[vt],j[vt]=Ut(w,j[vt]);const Z=j[0],dt=r.convert(w.format,w.colorSpace),at=r.convert(w.type);let ht=S(w.internalFormat,dt,at,w.normalized,w.colorSpace);const Rt=w.isVideoTexture!==!0,Wt=ct.__version===void 0||st===!0,rt=et.dataReady;let Dt=b(w,Z);Jt(i.TEXTURE_CUBE_MAP,w);let Gt;if(w.isDepthTexture){if(ht=x(w.format===Vn,w.type),Wt)if(Rt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,Z.width,Z.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,Z.width,Z.height,0,dt,at,null)}else if(ut){Rt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ht,Z.width,Z.height);for(let vt=0;vt<6;vt++){Gt=j[vt].mipmaps;for(let ae=0;ae<Gt.length;ae++){const Ce=Gt[ae];w.format!==vn?dt!==null?Rt?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,0,0,Ce.width,Ce.height,dt,Ce.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,ht,Ce.width,Ce.height,0,Ce.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,0,0,Ce.width,Ce.height,dt,at,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae,ht,Ce.width,Ce.height,0,dt,at,Ce.data)}}}else{if(Gt=w.mipmaps,Rt&&Wt){Gt.length>0&&Dt++;const vt=Bt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ht,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(N){Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,j[vt].width,j[vt].height,dt,at,j[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,j[vt].width,j[vt].height,0,dt,at,j[vt].data);for(let ae=0;ae<Gt.length;ae++){const ei=Gt[ae].image[vt].image;Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,0,0,ei.width,ei.height,dt,at,ei.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,ht,ei.width,ei.height,0,dt,at,ei.data)}}else{Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,at,j[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,dt,at,j[vt]);for(let ae=0;ae<Gt.length;ae++){const Ce=Gt[ae];Rt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,0,0,dt,at,Ce.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ae+1,ht,dt,at,Ce.image[vt])}}}y(w)&&w.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ct.__version=et.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function oe(L,w,W,st,et,ct){const pt=r.convert(W.format,W.colorSpace),$=r.convert(W.type),Q=S(W.internalFormat,pt,$,W.normalized,W.colorSpace),ut=n.get(w),N=n.get(W);if(N.__renderTarget=w,!ut.__hasExternalTextures){const j=Math.max(1,w.width>>ct),Z=Math.max(1,w.height>>ct);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ct,Q,j,Z,w.depth,0,pt,$,null):e.texImage2D(et,ct,Q,j,Z,0,pt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),_t(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,N.__webglTexture,0,pe(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,et,N.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(L,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const st=w.depthTexture,et=st&&st.isDepthTexture?st.type:null,ct=x(w.stencilBuffer,et),pt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(w),ct,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(w),ct,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,L)}else{const st=w.textures;for(let et=0;et<st.length;et++){const ct=st[et],pt=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),Q=S(ct.internalFormat,pt,$,ct.normalized,ct.colorSpace);_t(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe(w),Q,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe(w),Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(L,w,W){const st=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const et=n.get(w.depthTexture);et.__renderTarget=w;const ct=st?w.depthTexture.image[0]:w.depthTexture.image;(!et.__webglTexture||ct.width!==w.width||ct.height!==w.height)&&(ct.width=w.width,ct.height=w.height,w.depthTexture.needsUpdate=!0),st?lt(w.depthTexture,0):it(w.depthTexture,0);const pt=et.__webglTexture,$=pe(w),Q=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ut=w.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Hn)_t(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else if(w.depthTexture.format===Vn)_t(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(L){const w=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const st=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),st){const et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,st.removeEventListener("dispose",et)};st.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=st}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let st=0;st<6;st++)ge(w.__webglFramebuffer[st],L,st);else L.texture.mipmaps.length>0?ge(w.__webglFramebuffer[0],L,0):ge(w.__webglFramebuffer,L,0);else if(W){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]===void 0)w.__webglDepthbuffer[st]=i.createRenderbuffer(),Je(w.__webglDepthbuffer[st],L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Je(w.__webglDepthbuffer,L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(L,w,W){const st=n.get(L);w!==void 0&&oe(st.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&be(L)}function We(L){const w=L.texture,W=n.get(L),st=n.get(w);L.addEventListener("dispose",P),I(L);const et=L.textures,ct=L.isWebGLCubeRenderTarget===!0,pt=et.length>1;if(pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=w.version,a.memory.textures++),ct){W.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){W.__webglFramebuffer[$]=[];for(let Q=0;Q<w.mipmaps.length;Q++)W.__webglFramebuffer[$][Q]=i.createFramebuffer()}else W.__webglFramebuffer[$]=i.createFramebuffer()}else{if(w.mipmaps.length>0){W.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)W.__webglFramebuffer[$]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pt)for(let $=0,Q=et.length;$<Q;$++){const ut=n.get(et[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&_t(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<et.length;$++){const Q=et[$];W.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[$]);const ut=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),j=S(Q.internalFormat,ut,N,Q.normalized,Q.colorSpace,L.isXRRenderTarget===!0),Z=pe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,j,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,W.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)oe(W.__webglFramebuffer[$][Q],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else oe(W.__webglFramebuffer[$],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);y(w)?M(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let $=0,Q=et.length;$<Q;$++){const ut=et[$],N=n.get(ut);let j=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(j=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,N.__webglTexture),Jt(j,ut),oe(W.__webglFramebuffer,L,ut,i.COLOR_ATTACHMENT0+$,j,0),y(ut)&&M(j)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&($=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,st.__webglTexture),Jt($,w),w.mipmaps.length>0)for(let Q=0;Q<w.mipmaps.length;Q++)oe(W.__webglFramebuffer[Q],L,w,i.COLOR_ATTACHMENT0,$,Q);else oe(W.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,$,0);y(w)?M($):w.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&be(L)}function O(L){const w=L.textures;for(let W=0,st=w.length;W<st;W++){const et=w[W];if(y(et)&&et.mipmapsAutoUpdate===!0){const ct=E(L),pt=n.get(et).__webglTexture;e.bindTexture(ct,pt),M(ct),e.unbindTexture()}}}const Xe=[];function le(L){if(L.samples>0){if(_t(L)===!1){const w=L.textures,W=L.width,st=L.height;let et=i.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(L),$=w.length>1;if($)for(let ut=0;ut<w.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<w.length;ut++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const N=n.get(w[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,W,st,0,0,W,st,et,i.NEAREST),l===!0&&(Xe.length=0,Xe.push(i.COLOR_ATTACHMENT0+ut),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Xe.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<w.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const N=n.get(w[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function pe(L){return Math.min(s.maxSamples,L.samples)}function _t(L){const w=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function we(L){const w=a.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ut(L,w){const W=L.colorSpace,st=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Ds&&W!==Wn&&($t.getTransfer(W)===re?(st!==vn||et!==je)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",W)),w}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Lt,this.resetTextureUnits=Y,this.getTextureUnits=tt,this.setTextureUnits=gt,this.setTexture2D=it,this.setTexture2DArray=St,this.setTexture3D=Et,this.setTextureCube=lt,this.rebindTextures=Qe,this.setupRenderTarget=We,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=_t,this.dispose=U}function D0(i,t){function e(n,s=Wn){let r;const a=$t.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Fr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Or)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wo)return i.BYTE;if(n===Xo)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Ur)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===Zo)return i.RGB;if(n===vn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===$o)return i.RED;if(n===Br)return i.RED_INTEGER;if(n===si)return i.RG;if(n===zr)return i.RG_INTEGER;if(n===kr)return i.RGBA_INTEGER;if(n===Ts||n===As||n===Rs||n===Cs)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===Hr||n===Vr||n===Wr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===Yr||n===Kr||n===Zr||n===Ps||n===$r)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===qr)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kr)return r.COMPRESSED_R11_EAC;if(n===Zr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ps)return r.COMPRESSED_RG11_EAC;if(n===$r)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jr)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ha)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===da||n===fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pa||n===ma||n===Ls||n===ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ls)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`;class U0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Jn({vertexShader:I0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends Xn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new U0,p={},v=e.getContextAttributes();let y=null,M=null;const E=[],S=[],x=new Pt;let b=null,I=null;const C=new fn;C.viewport=new ue;const R=new fn;R.viewport=new ue;const P=[C,R],D=new Td;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=E[K];return it===void 0&&(it=new Ra,E[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=E[K];return it===void 0&&(it=new Ra,E[K]=it),it.getGripSpace()},this.getHand=function(K){let it=E[K];return it===void 0&&(it=new Ra,E[K]=it),it.getHandSpace()};function B(K){const it=S.indexOf(K.inputSource);if(it===-1)return;const St=E[it];St!==void 0&&(St.update(K.inputSource,K.frame,c||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let K=0;K<E.length;K++){const it=S[K];it!==null&&(S[K]=null,E[K].disconnect(it))}A=null,U=null,m.reset();for(const K in p)delete p[K];if(t.setRenderTarget(y),f=null,h=null,d=null,s=null,M=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),I!==null){const K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Et=null,lt=null;v.depth&&(lt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?Vn:Hn,Et=v.stencil?gi:gn);const Mt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Mt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Mn(h.textureWidth,h.textureHeight,{format:vn,type:je,depthTexture:new Ci(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Mn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(K){for(let it=0;it<K.removed.length;it++){const St=K.removed[it],Et=S.indexOf(St);Et>=0&&(S[Et]=null,E[Et].disconnect(St))}for(let it=0;it<K.added.length;it++){const St=K.added[it];let Et=S.indexOf(St);if(Et===-1){for(let Mt=0;Mt<E.length;Mt++)if(Mt>=S.length){S.push(St),Et=Mt;break}else if(S[Mt]===null){S[Mt]=St,Et=Mt;break}if(Et===-1)break}const lt=E[Et];lt&&lt.connect(St)}}function H(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let it=K.near,St=K.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(St=m.depthFar)),D.near=R.near=C.near=it,D.far=R.far=C.far=St,(A!==D.near||U!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),A=D.near,U=D.far),D.layers.mask=K.layers.mask|6,C.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const Et=K.parent,lt=D.cameras;H(D,Et);for(let Mt=0;Mt<lt.length;Mt++)H(lt[Mt],Et);D.projectionMatrix.copy(C.projectionMatrix),D.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,D,Et)};function Y(K,it,St){St===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ts*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let tt=null;function gt(K,it){if(u=it.getViewerPose(c||a),g=it,u!==null){const St=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Et=!1;St.length!==D.cameras.length&&(D.cameras.length=0,Et=!0);for(let Ct=0;Ct<St.length;Ct++){const Jt=St[Ct];let qt=null;if(f!==null)qt=f.getViewport(Jt);else{const Nt=d.getViewSubImage(h,Jt);qt=Nt.viewport,Ct===0&&(t.setRenderTargetTextures(M,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(M))}let ot=P[Ct];ot===void 0&&(ot=new fn,ot.layers.enable(Ct),ot.viewport=new ue,P[Ct]=ot),ot.matrix.fromArray(Jt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Jt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(qt.x,qt.y,qt.width,qt.height),Ct===0&&(D.matrix.copy(ot.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Et===!0&&D.cameras.push(ot)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ct=d.getDepthInformation(St[0]);Ct&&Ct.isValid&&Ct.texture&&m.init(Ct,s.renderState)}if(lt&&lt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<St.length;Ct++){const Jt=St[Ct].camera;if(Jt){let qt=p[Jt];qt||(qt=new Pl,p[Jt]=qt);const ot=d.getCameraImage(Jt);qt.sourceTexture=ot}}}}for(let St=0;St<E.length;St++){const Et=S[St],lt=E[St];Et!==null&&lt!==void 0&&lt.update(Et,it,c||a)}tt&&tt(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Lt=new tc;Lt.setAnimationLoop(gt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const O0=new fe,Lc=new Ot;Lc.set(-1,0,0,0,1,0,0,0,1);function B0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lc),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z0(i,t,e,n){let s={},r={};function a(v,y){const M=y.program;n.uniformBlockBinding(v,M,s[v.id])}function o(v,y){let M=s[v.id];M===void 0&&(g(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(v,E);const S=t.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){const y=i.createBuffer(),M=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(v){const y=s[v.id],M=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,x=M.length;S<x;S++){const b=M[S];if(Array.isArray(b))for(let I=0,C=b.length;I<C;I++)u(b[I],S,I,E);else u(b,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,y,M,E){if(h(v,y,M,E)===!0){const S=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let I=0;I<x.length;I++){const C=x[I],R=_(C,!0);d(C,v.__data,b),b+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function d(v,y,M){typeof v=="number"||typeof v=="boolean"?y[M]=v:v.isMatrix3?(y[M]=v.elements[0],y[M+1]=v.elements[1],y[M+2]=v.elements[2],y[M+3]=0,y[M+4]=v.elements[3],y[M+5]=v.elements[4],y[M+6]=v.elements[5],y[M+7]=0,y[M+8]=v.elements[6],y[M+9]=v.elements[7],y[M+10]=v.elements[8],y[M+11]=0):ArrayBuffer.isView(v)?y.set(v.subarray(0,y.length-M),M):v.toArray(y,M)}function h(v,y,M,E){const S=v.value,x=y+"_"+M;if(Array.isArray(S)){E[x]===void 0&&(E[x]=[]);const b=E[x];let I=!1;for(let C=0;C<S.length;C++)f(S[C],b,C)===!0&&(I=!0);return I}return f(S,E,x)}function f(v,y,M){if(y[M]===void 0)return typeof v=="number"||typeof v=="boolean"?y[M]=v:ArrayBuffer.isView(v)?y[M]=v.slice():y[M]=v.clone(),!0;{const E=y[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return y[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function g(v){const y=v.uniforms;let M=0;const E=16;for(let x=0,b=y.length;x<b;x++){const I=Array.isArray(y[x])?y[x]:[y[x]];for(let C=0,R=I.length;C<R;C++){const P=I[C],D=Array.isArray(P.value)?P.value:[P.value],A=Array.isArray(y[x])||Array.isArray(P.value);let U=M;for(let z=0,J=D.length;z<J;z++){const H=D[z],Y=_(H,A),tt=M%E,gt=tt%Y.boundary,Lt=tt+gt;M+=gt,Lt!==0&&E-Lt<Y.storage&&(M+=E-Lt),z===0&&(U=M),M+=Y.storage}const B=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new B((M-U)/Float32Array.BYTES_PER_ELEMENT),P.__offset=U}}const S=M%E;return S>0&&(M+=E-S),v.__size=M,v.__cache={},this}function _(v,y){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",v),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(v){const y=v.target;y.removeEventListener("dispose",m),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}const k0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function G0(){return wn===null&&(wn=new qu(k0,16,16,si,xn),wn.name="DFG_LUT",wn.minFilter=Ke,wn.magFilter=Ke,wn.wrapS=An,wn.wrapT=An,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class H0{constructor(t={}){const{canvas:e=ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=je}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([kr,zr,Br]),p=new Set([je,gn,$i,gi,Fr,Or]),v=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,S=null;const x=[],b=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,P=null,D=null,A=null,U=null;this._outputColorSpace=De;let B=0,z=0,J=null,H=-1,Y=null;const tt=new ue,gt=new ue;let Lt=null;const K=new It(0);let it=0,St=e.width,Et=e.height,lt=1,Mt=null,ee=null;const Ct=new ue(0,0,St,Et),Jt=new ue(0,0,St,Et);let qt=!1;const ot=new hs,Nt=new Xa;let kt=!1,de=!1;const oe=new fe,Je=new k,ge=new ue,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function We(){return J===null?lt:1}let O=n;function Xe(T,F){return e.getContext(T,F)}let le,pe,_t,we,Ut,Bt,L,w,W,st,et,ct,pt,$,Q,ut,N,j,Z,dt,at,ht,Rt;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${on}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){const F="webgl2";if(O=Xe(F,T),O===null)throw Xe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(T){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),jt("WebGLRenderer: "+T.message),T}function Wt(){le=new Xp(O),le.init(),at=new D0(O,le),pe=new Np(O,le,t,at),_t=new P0(O,le),pe.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),D=O.createFramebuffer(),A=O.createFramebuffer(),U=O.createFramebuffer(),we=new Kp(O),Ut=new g0,Bt=new L0(O,le,_t,Ut,pe,at,we),L=new Wp(C),w=new Cd(O),ht=new Dp(O,w),W=new qp(O,w,we,ht),st=new $p(O,W,w,ht,we),j=new Zp(O,pe,Bt),Q=new Up(Ut),et=new m0(C,L,le,pe,ht,Q),ct=new B0(C,Ut),pt=new x0,$=new b0(le),N=new Lp(C,L,_t,st,g,l),ut=new C0(C,st,pe),Rt=new z0(O,we,pe,_t),Z=new Ip(O,le,we),dt=new Yp(O,le,we),we.programs=et.programs,C.capabilities=pe,C.extensions=le,C.properties=Ut,C.renderLists=pt,C.shadowMap=ut,C.state=_t,C.info=we}_!==je&&(I=new Qp(_,e.width,e.height,o,s,r));const rt=new F0(C,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(T){T!==void 0&&(lt=T,this.setSize(St,Et,!1))},this.getSize=function(T){return T.set(St,Et)},this.setSize=function(T,F,q=!0){if(rt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}St=T,Et=F,e.width=Math.floor(T*lt),e.height=Math.floor(F*lt),q===!0&&(e.style.width=T+"px",e.style.height=F+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(St*lt,Et*lt).floor()},this.setDrawingBufferSize=function(T,F,q){St=T,Et=F,lt=q,e.width=Math.floor(T*q),e.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(_===je){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(Ct)},this.setViewport=function(T,F,q,V){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,F,q,V),_t.viewport(tt.copy(Ct).multiplyScalar(We()).round())},this.getScissor=function(T){return T.copy(Jt)},this.setScissor=function(T,F,q,V){T.isVector4?Jt.set(T.x,T.y,T.z,T.w):Jt.set(T,F,q,V),_t.scissor(gt.copy(Jt).multiplyScalar(We()).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(T){_t.setScissorTest(qt=T)},this.setOpaqueSort=function(T){Mt=T},this.setTransparentSort=function(T){ee=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let V=0;if(T){let X=!1;if(J!==null){const mt=J.texture.format;X=m.has(mt)}if(X){const mt=J.texture.type,bt=p.has(mt),ft=N.getClearColor(),yt=N.getClearAlpha(),At=ft.r,zt=ft.g,Kt=ft.b;bt?(v[0]=At,v[1]=zt,v[2]=Kt,v[3]=yt,O.clearBufferuiv(O.COLOR,0,v)):(y[0]=At,y[1]=zt,y[2]=Kt,y[3]=yt,O.clearBufferiv(O.COLOR,0,y))}else V|=O.COLOR_BUFFER_BIT}F&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),P=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),N.dispose(),pt.dispose(),$.dispose(),Bt.dispose(),Ut.dispose(),L.dispose(),st.dispose(),W.dispose(),ht.dispose(),Rt.dispose(),et.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",_h),rt.removeEventListener("sessionend",xh),hi.stop()};function Dt(T){T.preventDefault(),il("WebGLRenderer: Context Lost."),R=!0}function Gt(){il("WebGLRenderer: Context Restored."),R=!1;const T=we.autoReset,F=ut.enabled,q=ut.autoUpdate,V=ut.needsUpdate,X=ut.type;Wt(),we.autoReset=T,ut.enabled=F,ut.autoUpdate=q,ut.needsUpdate=V,ut.type=X}function vt(T){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const F=T.target;F.removeEventListener("dispose",ae),Ce(F)}function Ce(T){ei(T),Ut.remove(T)}function ei(T){const F=Ut.get(T).programs;F!==void 0&&(F.forEach(function(q){et.releaseProgram(q)}),T.isShaderMaterial&&et.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,V,X,mt){F===null&&(F=be);const bt=X.isMesh&&X.matrixWorld.determinantAffine()<0,ft=b_(T,F,q,V,X);_t.setMaterial(V,bt);let yt=q.index,At=1;if(V.wireframe===!0){if(yt=W.getWireframeAttribute(q),yt===void 0)return;At=2}const zt=q.drawRange,Kt=q.attributes.position;let wt=zt.start*At,Zt=(zt.start+zt.count)*At;mt!==null&&(wt=Math.max(wt,mt.start*At),Zt=Math.min(Zt,(mt.start+mt.count)*At)),yt!==null?(wt=Math.max(wt,0),Zt=Math.min(Zt,yt.count)):Kt!=null&&(wt=Math.max(wt,0),Zt=Math.min(Zt,Kt.count));const ve=Zt-wt;if(ve<0||ve===1/0)return;ht.setup(X,V,ft,q,yt);let he,ce=Z;if(yt!==null&&(he=w.get(yt),ce=dt,ce.setIndex(he)),X.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*We()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(X.isLine){let ke=V.linewidth;ke===void 0&&(ke=1),_t.setLineWidth(ke*We()),X.isLineSegments?ce.setMode(O.LINES):X.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else X.isPoints?ce.setMode(O.POINTS):X.isSprite&&ce.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(le.get("WEBGL_multi_draw"))ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ke=X._multiDrawStarts,Tt=X._multiDrawCounts,qe=X._multiDrawCount,se=yt?w.get(yt).bytesPerElement:1,ui=Ut.get(V).currentProgram.getUniforms();for(let Ge=0;Ge<qe;Ge++)ui.setValue(O,"_gl_DrawID",Ge),ce.render(ke[Ge]/se,Tt[Ge])}else if(X.isInstancedMesh)ce.renderInstances(wt,ve,X.count);else if(q.isInstancedBufferGeometry){const ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,ke);ce.renderInstances(wt,ve,Tt)}else ce.render(wt,ve)};function gh(T,F,q,V){P!==null&&T.isNodeMaterial&&P.setObject(V,T),kt===!0&&Q.setState(T,q,!1),T.transparent===!0&&T.side===Oe&&T.forceSinglePass===!1?(T.side=He,T.needsUpdate=!0,bs(T,F,V),T.side=ii,T.needsUpdate=!0,bs(T,F,V),T.side=Oe):bs(T,F,V)}this.compile=function(T,F,q=null){q===null&&(q=T),P!==null&&P.renderStart(T,F,q),S=$.get(q),S.init(F),b.push(S),q.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),de=this.localClippingEnabled,kt=Q.init(this.clippingPlanes,de),kt===!0&&Q.setGlobalState(this.clippingPlanes,F),P!==null&&ut.render(S.state.shadowsArray,q,F);const V=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const mt=X.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const ft=mt[bt];gh(ft,q,F,X),V.add(ft)}else gh(mt,q,F,X),V.add(mt)}),S=b.pop(),P!==null&&P.renderEnd(),V},this.compileAsync=function(T,F,q=null){const V=this.compile(T,F,q);return new Promise(X=>{function mt(){if(V.forEach(function(bt){const yt=Ut.get(bt).currentProgram;(yt===void 0||yt.isReady())&&V.delete(bt)}),V.size===0){X(T);return}setTimeout(mt,10)}le.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ro=null;function y_(T){Ro&&Ro(T)}function _h(){hi.stop()}function xh(){hi.start()}const hi=new tc;hi.setAnimationLoop(y_),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){Ro=T,rt.setAnimationLoop(T),T===null?hi.stop():hi.start()},rt.addEventListener("sessionstart",_h),rt.addEventListener("sessionend",xh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P!==null&&P.renderStart(T,F);const q=rt.enabled===!0&&rt.isPresenting===!0,V=I!==null&&(J===null||q)&&I.begin(C,J);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(F),F=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,J),S=$.get(T,b.length),S.init(F),S.state.textureUnits=Bt.getTextureUnits(),b.push(S),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Nt.setFromArrayCamera(F):ot.setFromProjectionMatrix(oe,ln,F.reversedDepth),de=this.localClippingEnabled,kt=Q.init(this.clippingPlanes,de),E=pt.get(T,x.length),E.init(),x.push(E),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Co(bt,F,-1/0,C.sortObjects)}Co(T,F,0,C.sortObjects),E.finish(),P!==null&&P.updateLights(S.state.lightsArray),C.sortObjects===!0&&E.sort(Mt,ee),Qe=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Qe&&N.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),kt===!0&&Q.beginShadows();const X=S.state.shadowsArray;if(ut.render(X,T,F),kt===!0&&Q.endShadows(),(V&&I.hasRenderPass())===!1){const bt=E.opaque,ft=E.transmissive;if(S.setupLights(),F.isArrayCamera){const yt=F.cameras;if(ft.length>0)for(let At=0,zt=yt.length;At<zt;At++){const Kt=yt[At];Mh(bt,ft,T,Kt)}Qe&&N.render(T);for(let At=0,zt=yt.length;At<zt;At++){const Kt=yt[At];vh(E,T,Kt,Kt.viewport)}}else ft.length>0&&Mh(bt,ft,T,F),Qe&&N.render(T),vh(E,T,F)}J!==null&&z===0&&(Bt.updateMultisampleRenderTarget(J),Bt.updateRenderTargetMipmap(J)),V&&I.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),ht.resetDefaultState(),H=-1,Y=null,b.pop(),b.length>0?(S=b[b.length-1],Bt.setTextureUnits(S.state.textureUnits),kt===!0&&Q.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,P!==null&&P.renderEnd()};function Co(T,F,q,V){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){const bt=F.isArrayCamera?Nt:ot;if(!T.frustumCulled||T.intersectsFrustum(bt)){V&&ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const ft=st.update(T),yt=T.material;yt.visible&&E.push(T,ft,yt,q,ge.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){const bt=F.isArrayCamera?Nt:ot;if(!T.frustumCulled||T.intersectsFrustum(bt)){const ft=st.update(T),yt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ge.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ge.copy(ft.boundingSphere.center)),ge.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(yt)){const At=ft.groups;for(let zt=0,Kt=At.length;zt<Kt;zt++){const wt=At[zt],Zt=yt[wt.materialIndex];Zt&&Zt.visible&&E.push(T,ft,Zt,q,ge.z,wt,F)}}else yt.visible&&E.push(T,ft,yt,q,ge.z,null,F)}}}const mt=T.children;for(let bt=0,ft=mt.length;bt<ft;bt++)Co(mt[bt],F,q,V)}function vh(T,F,q,V){const{opaque:X,transmissive:mt,transparent:bt}=T;S.setupLightsView(q),kt===!0&&Q.setGlobalState(C.clippingPlanes,q),V&&_t.viewport(tt.copy(V)),X.length>0&&Mr(X,F,q),mt.length>0&&Mr(mt,F,q),bt.length>0&&Mr(bt,F,q),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Mh(T,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){const wt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new Mn(1,1,{generateMipmaps:!0,type:wt?xn:je,minFilter:Rn,samples:Math.max(4,pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}const mt=S.state.transmissionRenderTarget[V.id],bt=V.viewport||tt;mt.setSize(bt.z*C.transmissionResolutionScale,bt.w*C.transmissionResolutionScale);const ft=C.getRenderTarget(),yt=C.getActiveCubeFace(),At=C.getActiveMipmapLevel();C.setRenderTarget(mt),C.getClearColor(K),it=C.getClearAlpha(),it<1&&C.setClearColor(16777215,.5),C.clear(),Qe&&N.render(q);const zt=C.toneMapping;C.toneMapping=Tn;const Kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),kt===!0&&Q.setGlobalState(C.clippingPlanes,V),Mr(T,q,V),Bt.updateMultisampleRenderTarget(mt),Bt.updateRenderTargetMipmap(mt),le.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Zt=0,ve=F.length;Zt<ve;Zt++){const he=F[Zt],{object:ce,geometry:ke,material:Tt,group:qe}=he;if(Tt.side===Oe&&ce.layers.test(V.layers)){const se=Tt.side;Tt.side=He,Tt.needsUpdate=!0,Sh(ce,q,V,ke,Tt,qe),Tt.side=se,Tt.needsUpdate=!0,wt=!0}}wt===!0&&(Bt.updateMultisampleRenderTarget(mt),Bt.updateRenderTargetMipmap(mt))}C.setRenderTarget(ft,yt,At),C.setClearColor(K,it),Kt!==void 0&&(V.viewport=Kt),C.toneMapping=zt}function Mr(T,F,q){const V=F.isScene===!0?F.overrideMaterial:null;for(let X=0,mt=T.length;X<mt;X++){const bt=T[X],{object:ft,geometry:yt,group:At}=bt;let zt=bt.material;zt.allowOverride===!0&&V!==null&&(zt=V),ft.layers.test(q.layers)&&Sh(ft,F,q,yt,zt,At)}}function Sh(T,F,q,V,X,mt){P!==null&&X.isNodeMaterial&&P.setObject(T,X),T.onBeforeRender(C,F,q,V,X,mt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,F,q,V,T,mt),X.transparent===!0&&X.side===Oe&&X.forceSinglePass===!1?(X.side=He,X.needsUpdate=!0,C.renderBufferDirect(q,F,V,X,T,mt),X.side=ii,X.needsUpdate=!0,C.renderBufferDirect(q,F,V,X,T,mt),X.side=Oe):C.renderBufferDirect(q,F,V,X,T,mt),T.onAfterRender(C,F,q,V,X,mt)}function yh(T){let F=0;for(const q of T)q.texture!==null&&F++;return F}function bs(T,F,q){F.isScene!==!0&&(F=be);const V=Ut.get(T),X=S.state.lights,mt=S.state.shadowsArray,bt=X.state.version,ft=et.getParameters(T,X.state,mt,F,q,S.state.lightProbeGridArray),yt=et.getProgramCacheKey(ft);let At=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const zt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=L.get(T.envMap||V.environment,zt),V.envMapRotation=V.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,At===void 0&&(T.addEventListener("dispose",ae),At=new Map,V.programs=At,V.programVariants=new Map);let Kt=At.get(yt);if(Kt!==void 0){if(V.currentProgram===Kt&&V.lightsStateVersion===bt)return bh(T,ft),Kt}else ft.uniforms=et.getUniforms(T),P!==null&&T.isNodeMaterial&&P.build(T,q,ft),T.onBeforeCompile(ft,C),Kt=et.acquireProgram(ft,yt),At.set(yt,Kt),V.uniforms=ft.uniforms;const wt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(wt.clippingPlanes=Q.uniform),bh(T,ft),V.needsLights=T_(T),V.lightsStateVersion=bt,V.needsLights&&(wt.ambientLightColor.value=X.state.ambient,wt.lightProbe.value=X.state.probe,wt.sunLights.value=X.state.sun,wt.sunLightShadows.value=X.state.sunShadow,wt.directionalLights.value=X.state.directional,wt.directionalLightShadows.value=X.state.directionalShadow,wt.spotLights.value=X.state.spot,wt.spotLightShadows.value=X.state.spotShadow,wt.rectAreaLights.value=X.state.rectArea,wt.ltc_1.value=X.state.rectAreaLTC1,wt.ltc_2.value=X.state.rectAreaLTC2,wt.pointLights.value=X.state.point,wt.pointLightShadows.value=X.state.pointShadow,wt.hemisphereLights.value=X.state.hemi,wt.sunShadowMatrix.value=X.state.sunShadowMatrix,wt.sunShadowCascade.value=X.state.sunShadowCascade,wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,wt.spotLightMatrix.value=X.state.spotLightMatrix,wt.spotLightMap.value=X.state.spotLightMap,wt.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=yh(S.state.lightProbeGridArray),V.currentProgram=Kt,V.uniformsList=null,Kt}function E_(T,F,q,V,X){const mt=Ut.get(T),bt=mt.currentProgram.id+","+V+","+X;let ft=mt.programVariants.get(bt);return ft===void 0?(ft=bs(T,F,q),mt.programVariants.set(bt,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=V,mt.toneMapping=X),ft}function Eh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=lr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function bh(T,F){const q=Ut.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function b_(T,F,q,V,X){F.isScene!==!0&&(F=be),Bt.resetTextureUnits();const mt=F.fog,bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,ft=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:$t.workingColorSpace,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,At=L.get(V.envMap||bt,yt),zt=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Kt=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!q.morphAttributes.position,Zt=!!q.morphAttributes.normal,ve=!!q.morphAttributes.color;let he=Tn;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(he=C.toneMapping);const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ke=ce!==void 0?ce.length:0,Tt=Ut.get(V),qe=S.state.lights;if(kt===!0&&(de===!0||T!==Y)){const _e=T===Y&&V.id===H;Q.setState(V,T,_e)}let se=!1,ui=!1;V.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==qe.state.version||X.isBatchedMesh&&Tt.batching===!1||!X.isBatchedMesh&&Tt.batching===!0||X.isBatchedMesh&&Tt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Tt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Tt.instancing===!1||!X.isInstancedMesh&&Tt.instancing===!0||X.isSkinnedMesh&&Tt.skinning===!1||!X.isSkinnedMesh&&Tt.skinning===!0||X.isInstancedMesh&&Tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Tt.instancingMorph===!1&&X.morphTexture!==null||Tt.envMap!==At||V.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==zt||Tt.vertexTangents!==Kt||Tt.morphTargets!==wt||Tt.morphNormals!==Zt||Tt.morphColors!==ve||Tt.morphTargetsCount!==ke||Tt.numLightProbeGrids!==yh(S.state.lightProbeGridArray)?se=!0:(Tt.outputColorSpace!==ft||Tt.toneMapping!==he)&&(ui=!0):(se=!0,Tt.__version=V.version);let Ge=Tt.currentProgram;(se===!0||ui===!0)&&(Ge=ui===!0?E_(V,F,X,ft,he):bs(V,F,X),P&&V.isNodeMaterial&&P.onUpdateProgram(V,Ge,Tt));let Sr=!1,ni=!1,di=!1;const Qt=Ge.getUniforms(),Fe=Tt.uniforms;if(_t.useProgram(Ge.program)&&(Sr=!0,ni=!0,di=!0),V.id!==H&&(H=V.id,ni=!0),Sr||Y!==T){_t.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Qt.setValue(O,"projectionMatrix",T.projectionMatrix),Qt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Pe=Qt.map.cameraPosition;Pe!==void 0&&Pe.setValue(O,Je.setFromMatrixPosition(T.matrixWorld)),pe.logarithmicDepthBuffer&&Qt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Qt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,ni=!0,di=!0)}if(Tt.needsLights&&(qe.state.sunShadowMap.length>0&&Qt.setValue(O,"sunShadowMap",qe.state.sunShadowMap,Bt),qe.state.directionalShadowMap.length>0&&Qt.setValue(O,"directionalShadowMap",qe.state.directionalShadowMap,Bt),qe.state.spotShadowMap.length>0&&Qt.setValue(O,"spotShadowMap",qe.state.spotShadowMap,Bt),qe.state.pointShadowMap.length>0&&Qt.setValue(O,"pointShadowMap",qe.state.pointShadowMap,Bt)),X.isSkinnedMesh){Qt.setOptional(O,X,"bindMatrix"),Qt.setOptional(O,X,"bindMatrixInverse");const _e=X.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),Qt.setValue(O,"boneTexture",_e.boneTexture,Bt))}X.isBatchedMesh&&(Qt.setOptional(O,X,"batchingTexture"),Qt.setValue(O,"batchingTexture",X._matricesTexture,Bt),Qt.setOptional(O,X,"batchingIdTexture"),Qt.setValue(O,"batchingIdTexture",X._indirectTexture,Bt),Qt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Qt.setValue(O,"batchingColorTexture",X._colorsTexture,Bt));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&j.update(X,q,Ge),(ni||Tt.receiveShadow!==X.receiveShadow)&&(Tt.receiveShadow=X.receiveShadow,Qt.setValue(O,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Fe.envMapIntensity.value=F.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=G0()),ni){if(Qt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Tt.needsLights&&w_(Fe,di),mt&&V.fog===!0&&ct.refreshFogUniforms(Fe,mt),ct.refreshMaterialUniforms(Fe,V,lt,Et,S.state.transmissionRenderTarget[T.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){const _e=M;let Pe=0;for(const kn of S.state.lightProbeGridArray)kn.texture!==null&&(_e.textures[Pe]=kn.texture,_e.min[Pe]=kn.boundingBox.min,_e.max[Pe]=kn.boundingBox.max,_e.resolution[Pe]=kn.resolution,Pe++);for(const kn in _e)_e[kn].length=Pe;Fe.probesSH.value=_e.textures,Fe.probesMin.value=_e.min,Fe.probesMax.value=_e.max,Fe.probesResolution.value=_e.resolution}lr.upload(O,Eh(Tt),Fe,Bt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lr.upload(O,Eh(Tt),Fe,Bt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Qt.setValue(O,"center",X.center),Qt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Qt.setValue(O,"normalMatrix",X.normalMatrix),Qt.setValue(O,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){const _e=V.uniformsGroups;for(let Pe=0,kn=_e.length;Pe<kn;Pe++){const Th=_e[Pe];Rt.update(Th,Ge),Rt.bind(Th,Ge)}}return Ge}function w_(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function T_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(T,F,q){const V=Ut.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ut.get(T.texture).__webglTexture=F,Ut.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const q=Ut.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){J=T,B=F,z=q;let V=null,X=!1,mt=!1;if(T){const ft=Ut.get(T);if(ft.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(O.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(T.viewport),gt.copy(T.scissor),Lt=T.scissorTest,_t.viewport(tt),_t.scissor(gt),_t.setScissorTest(Lt),H=-1;return}else if(ft.__webglFramebuffer===void 0)Bt.setupRenderTarget(T);else if(ft.__hasExternalTextures)Bt.rebindTextures(T,Ut.get(T.texture).__webglTexture,Ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const zt=T.depthTexture;if(ft.__boundDepthTexture!==zt){if(zt!==null&&Ut.has(zt)&&(T.width!==zt.image.width||T.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(T)}}const yt=T.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);const At=Ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(At[F])?V=At[F][q]:V=At[F],X=!0):T.samples>0&&Bt.useMultisampledRTT(T)===!1?V=Ut.get(T).__webglMultisampledFramebuffer:Array.isArray(At)?V=At[q]:V=At,tt.copy(T.viewport),gt.copy(T.scissor),Lt=T.scissorTest}else tt.copy(Ct).multiplyScalar(lt).floor(),gt.copy(Jt).multiplyScalar(lt).floor(),Lt=qt;if(q!==0&&(V=D),_t.bindFramebuffer(O.FRAMEBUFFER,V)&&_t.drawBuffers(T,V),_t.viewport(tt),_t.scissor(gt),_t.setScissorTest(Lt),X){const ft=Ut.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ft.__webglTexture,q)}else if(mt){const ft=F;for(let yt=0;yt<T.textures.length;yt++){const At=Ut.get(T.textures[yt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+yt,At.__webglTexture,q,ft)}}else if(T!==null&&q!==0){const ft=Ut.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,q)}H=-1};function wh(T){const F=Ut.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=pe.textureFormatReadable(T.format),F.__typeReadable=pe.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,V,X,mt,bt,ft=0){if(!(T&&T.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt){_t.bindFramebuffer(O.FRAMEBUFFER,yt);try{const At=T.textures[ft],zt=At.format,Kt=At.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);const wt=wh(At);if(wt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-V&&q>=0&&q<=T.height-X&&O.readPixels(F,q,V,X,at.convert(zt),at.convert(Kt),mt)}finally{const At=J!==null?Ut.get(J).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,V,X,mt,bt,ft=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(yt=yt[bt],Array.isArray(yt)&&(yt=yt[0])),yt)if(F>=0&&F<=T.width-V&&q>=0&&q<=T.height-X){_t.bindFramebuffer(O.FRAMEBUFFER,yt);const At=T.textures[ft],zt=At.format,Kt=At.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ft);const wt=wh(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Zt),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(F,q,V,X,at.convert(zt),at.convert(Kt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const ve=J!==null?Ut.get(J).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,ve);const he=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await lu(O,he,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Zt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Zt),O.deleteSync(he),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){const V=Math.pow(2,-q),X=Math.floor(T.image.width*V),mt=Math.floor(T.image.height*V),bt=F!==null?F.x:0,ft=F!==null?F.y:0;Bt.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,bt,ft,X,mt),_t.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,V=null,X=0,mt=0){let bt,ft,yt,At,zt,Kt,wt,Zt,ve;const he=T.isCompressedTexture?T.mipmaps[mt]:T.image;if(q!==null)bt=q.max.x-q.min.x,ft=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,zt=q.min.y,Kt=q.isBox3?q.min.z:0;else{const Qt=Math.pow(2,-X);bt=Math.floor(he.width*Qt),ft=Math.floor(he.height*Qt),T.isDataArrayTexture?yt=he.depth:T.isData3DTexture?yt=Math.floor(he.depth*Qt):yt=1,At=0,zt=0,Kt=0}V!==null?(wt=V.x,Zt=V.y,ve=V.z):(wt=0,Zt=0,ve=0);const ce=at.convert(F.format),ke=at.convert(F.type);let Tt;F.isData3DTexture?(Bt.setTexture3D(F,0),Tt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Bt.setTexture2DArray(F,0),Tt=O.TEXTURE_2D_ARRAY):(Bt.setTexture2D(F,0),Tt=O.TEXTURE_2D),_t.activeTexture(O.TEXTURE0),_t.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),_t.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_t.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=_t.getParameter(O.UNPACK_ROW_LENGTH),se=_t.getParameter(O.UNPACK_IMAGE_HEIGHT),ui=_t.getParameter(O.UNPACK_SKIP_PIXELS),Ge=_t.getParameter(O.UNPACK_SKIP_ROWS),Sr=_t.getParameter(O.UNPACK_SKIP_IMAGES);_t.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,At),_t.pixelStorei(O.UNPACK_SKIP_ROWS,zt),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Kt);const ni=T.isDataArrayTexture||T.isData3DTexture,di=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Qt=Ut.get(T),Fe=Ut.get(F),pn=Ut.get(Qt.__renderTarget),_e=Ut.get(Fe.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,pn.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Pe=0;Pe<yt;Pe++)ni&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(T).__webglTexture,X,Kt+Pe),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(F).__webglTexture,mt,ve+Pe)),O.blitFramebuffer(At,zt,At+bt,zt+ft,wt,Zt,wt+bt,Zt+ft,O.DEPTH_BUFFER_BIT,O.NEAREST);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Ut.has(T)){const Qt=Ut.get(T),Fe=Ut.get(F);_t.bindFramebuffer(O.READ_FRAMEBUFFER,A),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let pn=0;pn<yt;pn++)ni?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,X,Kt+pn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,X),di?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,mt,ve+pn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fe.__webglTexture,mt),X!==0?O.blitFramebuffer(At,zt,At+bt,zt+ft,wt,Zt,wt+bt,Zt+ft,O.COLOR_BUFFER_BIT,O.NEAREST):di?O.copyTexSubImage3D(Tt,mt,wt,Zt,ve+pn,At,zt,bt,ft):O.copyTexSubImage2D(Tt,mt,wt,Zt,At,zt,bt,ft);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else di?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Tt,mt,wt,Zt,ve,bt,ft,yt,ce,ke,he.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,mt,wt,Zt,ve,bt,ft,yt,ce,he.data):O.texSubImage3D(Tt,mt,wt,Zt,ve,bt,ft,yt,ce,ke,he):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,mt,wt,Zt,bt,ft,ce,ke,he.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,mt,wt,Zt,he.width,he.height,ce,he.data):O.texSubImage2D(O.TEXTURE_2D,mt,wt,Zt,bt,ft,ce,ke,he);_t.pixelStorei(O.UNPACK_ROW_LENGTH,qe),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,se),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,ui),_t.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Sr),mt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Tt),_t.unbindTexture()},this.initRenderTarget=function(T){Ut.get(T).__webglFramebuffer===void 0&&Bt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Bt.setTextureCube(T,0):T.isData3DTexture?Bt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Bt.setTexture2DArray(T,0):Bt.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){B=0,z=0,J=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}async function lo(i){const t=new Uint8Array(i),e=new DataView(i);let n=8,s=0,r=0,a=0,o=0,l=0;const c=[];for(;n<t.length;){const _=e.getUint32(n),m=String.fromCharCode(t[n+4],t[n+5],t[n+6],t[n+7]);if(m==="IHDR")s=e.getUint32(n+8),r=e.getUint32(n+12),a=t[n+16],o=t[n+17],l=t[n+20];else if(m==="IDAT")c.push(t.subarray(n+8,n+8+_));else if(m==="IEND")break;n+=12+_}if(a!==8||o!==2&&o!==6||l)throw new Error("Unsupported terrain image format");const u=o===2?3:4,d=new Blob(c).stream().pipeThrough(new DecompressionStream("deflate")),h=new Uint8Array(await new Response(d).arrayBuffer()),f=s*u,g=new Uint8Array(f*r);for(let _=0;_<r;_++){const m=h[_*(f+1)],p=_*(f+1)+1,v=_*f;for(let y=0;y<f;y++){const M=y>=u?g[v+y-u]:0,E=_>0?g[v-f+y]:0,S=y>=u&&_>0?g[v-f+y-u]:0;let x=h[p+y];if(m===1)x+=M;else if(m===2)x+=E;else if(m===3)x+=M+E>>1;else if(m===4){const b=Math.abs(E-S),I=Math.abs(M-S),C=Math.abs(M+E-2*S);x+=b<=I&&b<=C?M:I<=C?E:S}g[v+y]=x&255}}return{width:s,height:r,channels:u,data:g}}const V0=["height.png","relief.webp","cover.png","ground.webp","lights.webp","roads.bin","buildings.bin","map.json","flood.json","flood-1974.png","flood-2017.png","flood-2022.png","flood-aep1.png","flood-aep2.png","flood-aep5.png"];function W0(i,t=""){const e=s=>i+s+(t?"?v="+t:""),n={};for(const s of V0){const r=/^flood-(.+)\.png$/.exec(s);r&&(n[r[1]]=e(s))}return{height:e("height.png"),relief:e("relief.webp"),cover:e("cover.png"),ground:e("ground.webp"),lights:e("lights.webp"),roads:e("roads.bin"),buildings:e("buildings.bin"),map:e("map.json"),flood:e("flood.json"),floodLevels:n}}const Dc=1,X0=2,Ic=4,q0=8;function Y0(i){const t=new DataView(i);if(t.getUint32(0,!0)!==827475788)throw new Error("Unexpected road data");const e=t.getUint32(4,!0),n=new Array(e);let s=8;for(let r=0;r<e;r++){const a=t.getUint8(s),o=t.getUint8(s+1),l=t.getUint16(s+2,!0),c=t.getUint16(s+4,!0);let u=t.getInt32(s+6,!0),d=t.getInt32(s+10,!0);s+=14;const h=new Float32Array(c*2);h[0]=u/4,h[1]=d/4;for(let f=1;f<c;f++)u+=t.getInt16(s,!0),d+=t.getInt16(s+2,!0),s+=4,h[f*2]=u/4,h[f*2+1]=d/4;n[r]={cls:a,flags:o,name:l,pts:h}}return n}function K0(i,t){const e=new DataView(i);if(e.getUint32(0,!0)!==826427212)throw new Error("Unexpected building data");const n=e.getUint32(4,!0),s=new Uint16Array(i,8,n),r=new Uint16Array(i,8+2*n,n),a=new Uint8Array(i,8+4*n,5*n),o={count:n,x:new Float32Array(n),z:new Float32Array(n),w:new Float32Array(n),d:new Float32Array(n),angle:new Float32Array(n),eave:new Float32Array(n),roof:new Float32Array(n)};for(let l=0;l<n;l++)o.x[l]=(s[l]/65535-.5)*t[0],o.z[l]=(r[l]/65535-.5)*t[1],o.w[l]=a[l]/2,o.d[l]=a[n+l]/2,o.angle[l]=a[2*n+l]/256*Math.PI,o.eave[l]=a[3*n+l]/4,o.roof[l]=a[4*n+l]/4;return o}function Z0(i,t,e){const n=new Uint8Array(t*e),s=document.createElement("canvas");s.width=t,s.height=e;const r=s.getContext("2d");if(!r)return n;r.drawImage(i.image,0,0,t,e);const a=r.getImageData(0,0,t,e).data;for(let o=0;o<t*e;o++)n[o]=a[o*4];return n}async function $0(i,t,e){let s=0;const r=S=>x=>(t(++s/8,S),x),a=async(S,x)=>{const b=await fetch(S,{signal:e});if(!b.ok)throw new Error(`Could not load ${x}`);return b},o=S=>new Sd().loadAsync(S);t(0,"Fetching map data");const[l,c,u,d,h,f,g,_]=await Promise.all([a(i.map,"the map data").then(S=>S.json()).then(r("Suburbs and boundaries")),a(i.height,"the terrain").then(S=>S.arrayBuffer()).then(lo).then(r("Terrain")),o(i.ground).then(r("Ground texture")),o(i.relief).then(r("Relief")),o(i.lights).then(r("City lights")),a(i.roads,"the streets").then(S=>S.arrayBuffer()).then(Y0).then(r("Streets")),a(i.buildings,"the buildings").then(S=>S.arrayBuffer()).then(r("Buildings")),a(i.cover,"the tree cover").then(S=>S.arrayBuffer()).then(lo).then(r("Bushland"))]),m=c.width*c.height,p=new Float32Array(m),v=c.channels;for(let S=0;S<m;S++)p[S]=(c.data[S*v]<<8|c.data[S*v+1])/l.meta.heightScale-l.meta.heightOffset;u.colorSpace=De;for(const S of[u,d,h])S.generateMipmaps=!0,S.minFilter=Rn;const y=_.width*_.height,M=new Uint8Array(y);for(let S=0;S<y;S++)M[S]=_.data[S*_.channels]>127?1:0;const E={w:_.width,h:_.height,wooded:M,built:Z0(h,_.width,_.height)};return{map:l,heights:p,ground:u,relief:d,lights:h,roads:f,buildings:K0(g,l.meta.size),cover:E}}const hr=new It;function G(i){return hr.set(i),[hr.r,hr.g,hr.b]}function Yt(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function J0(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function Bi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}class jn{constructor(){nt(this,"pos",[]);nt(this,"nor",[]);nt(this,"col",[]);nt(this,"glo",[]);nt(this,"ox",0);nt(this,"oy",0);nt(this,"oz",0);nt(this,"c",1);nt(this,"s",0)}get vertexCount(){return this.pos.length/3}frame(t=0,e=0,n=0,s=0){return this.ox=t,this.oy=e,this.oz=n,this.c=Math.cos(s),this.s=Math.sin(s),this}wx(t,e){return this.ox+t*this.c+e*this.s}wz(t,e){return this.oz-t*this.s+e*this.c}tri(t,e,n,s,r,a,o,l,c,u,d=0){const h=this.wx(t,n),f=this.wz(t,n),g=this.oy+e,_=this.wx(s,a),m=this.wz(s,a),p=this.oy+r,v=this.wx(o,c),y=this.wz(o,c),M=this.oy+l,E=_-h,S=p-g,x=m-f,b=v-h,I=M-g,C=y-f;let R=S*C-x*I,P=x*b-E*C,D=E*I-S*b;const A=Math.hypot(R,P,D)||1;R/=A,P/=A,D/=A,this.pos.push(h,g,f,_,p,m,v,M,y),this.nor.push(R,P,D,R,P,D,R,P,D),this.col.push(u[0],u[1],u[2],u[0],u[1],u[2],u[0],u[1],u[2]),this.glo.push(d,d,d)}quad(t,e,n,s,r,a,o,l,c,u,d,h,f,g=0){this.tri(t,e,n,s,r,a,o,l,c,f,g),this.tri(t,e,n,o,l,c,u,d,h,f,g)}box(t,e,n,s,r,a,o,l=void 0,c=null,u=0){this.quad(t,e,a,s,e,a,s,r,a,t,r,a,o,u),this.quad(s,e,n,t,e,n,t,r,n,s,r,n,o,u),this.quad(s,e,a,s,e,n,s,r,n,s,r,a,o,u),this.quad(t,e,n,t,e,a,t,r,a,t,r,n,o,u),l!==null&&this.quad(t,r,a,s,r,a,s,r,n,t,r,n,l??o,u),c&&this.quad(t,e,n,s,e,n,s,e,a,t,e,a,c,u)}cyl(t,e,n,s,r,a,o,l,c=null,u=0){const d=e+a;for(let h=0;h<o;h++){const f=h/o*Math.PI*2,g=(h+1)/o*Math.PI*2,_=Math.cos(f),m=Math.sin(f),p=Math.cos(g),v=Math.sin(g);r>1e-4?(this.quad(t+_*s,e,n+m*s,t+_*r,d,n+m*r,t+p*r,d,n+v*r,t+p*s,e,n+v*s,l,u),c&&this.tri(t,d,n,t+p*r,d,n+v*r,t+_*r,d,n+m*r,c,u)):this.tri(t+_*s,e,n+m*s,t,d,n,t+p*s,e,n+v*s,l,u)}}blob(t,e,n,s,r,a,o,l,c,u,d=0){const h=u??c;for(let f=0;f<l;f++){const g=f/l*Math.PI,_=(f+1)/l*Math.PI,m=Math.cos(g),p=Math.cos(_),v=Math.sin(g),y=Math.sin(_),M=J0(c,h,1-(f+.5)/l);for(let E=0;E<o;E++){const S=E/o*Math.PI*2,x=(E+1)/o*Math.PI*2,b=Math.cos(S),I=Math.sin(S),C=Math.cos(x),R=Math.sin(x),P=t+b*v*s,D=e+m*r,A=n+I*v*a,U=t+C*v*s,B=n+R*v*a,z=t+b*y*s,J=e+p*r,H=n+I*y*a,Y=t+C*y*s,tt=n+R*y*a;f>0&&this.tri(P,D,A,U,D,B,Y,J,tt,M,d),f<l-1&&this.tri(P,D,A,Y,J,tt,z,J,H,M,d)}}}walls(t,e,n,s,r=0){const a=t.length/2,o=ur(t)>0;for(let l=0;l<a;l++){const c=(l+1)%a,u=t[l*2],d=t[l*2+1],h=t[c*2],f=t[c*2+1];o?this.quad(h,e,f,u,e,d,u,n,d,h,n,f,s,r):this.quad(u,e,d,h,e,f,h,n,f,u,n,d,s,r)}}cap(t,e,n,s=0){const r=t.length/2,a=[];for(let l=0;l<r;l++)a.push(new Pt(t[l*2],t[l*2+1]));const o=ms.triangulateShape(a,[]);for(const l of o){const c=a[l[0]],u=a[l[1]],d=a[l[2]];(u.x-c.x)*(d.y-c.y)-(u.y-c.y)*(d.x-c.x)>0?this.tri(c.x,e,c.y,d.x,e,d.y,u.x,e,u.y,n,s):this.tri(c.x,e,c.y,u.x,e,u.y,d.x,e,d.y,n,s)}}build(){const t=new Me;return t.setAttribute("position",new Ht(new Float32Array(this.pos),3)),t.setAttribute("normal",new Ht(new Float32Array(this.nor),3)),t.setAttribute("color",new Ht(new Float32Array(this.col),3)),t.setAttribute("glow",new Ht(new Float32Array(this.glo),1)),t.computeBoundingSphere(),t.computeBoundingBox(),this.pos=[],this.nor=[],this.col=[],this.glo=[],t}}function ur(i){let t=0;const e=i.length/2;for(let n=0;n<e;n++){const s=(n+1)%e;t+=i[n*2]*i[s*2+1]-i[s*2]*i[n*2+1]}return t/2}const ti={value:0};function co(i={}){const t=new yn({vertexColors:!0,roughness:i.roughness??.86,metalness:0,side:i.side??Oe}),e=new It(i.glowColor??16761722);return t.onBeforeCompile=n=>{n.uniforms.uNight=ti,n.uniforms.uGlowColor={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float glow;
varying float vGlow;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vGlow;
uniform float uNight;
uniform vec3 uGlowColor;`).replace("#include <emissivemap_fragment>",i.ownGlow?`#include <emissivemap_fragment>
totalEmissiveRadiance += (vGlow < 0.0 ? vColor.rgb * -vGlow : uGlowColor * vGlow) * uNight * 2.4;`:`#include <emissivemap_fragment>
totalEmissiveRadiance += uGlowColor * vGlow * uNight * 2.4;`)},t.customProgramCacheKey=()=>i.ownGlow?"inverloch-model-own":"inverloch-model",t}async function Q0(i,t){const e=await fetch(i,{signal:t});if(!e.ok)throw new Error("Could not load the flood scenarios");return e.json()}const Nc=8;class j0{constructor(t,e,n,s){nt(this,"mesh");nt(this,"drop",{value:0});nt(this,"time");nt(this,"current","");nt(this,"level");nt(this,"wet");this.hf=t,this.info=e,this.levelUrls=s,this.time=n;const r=new yn({color:16777215,roughness:.22,metalness:0,transparent:!0,depthWrite:!1});r.onBeforeCompile=a=>{a.uniforms.uDrop=this.drop,a.uniforms.uTime=this.time,a.uniforms.uNight=ti,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          }`)},r.customProgramCacheKey=()=>"logan-flood",this.mesh=new ne(new Me,r),this.mesh.visible=!1,this.mesh.renderOrder=40,this.mesh.name="flood",this.mesh.frustumCulled=!1}get shown(){return this.mesh.visible?this.current:""}async show(t,e){const n=this.levelUrls[t];if(!n)throw new Error("That flood has no water levels");const s=await fetch(n,{signal:e});if(!s.ok)throw new Error("Could not load the flood");const r=await lo(await s.arrayBuffer()),{hf:a}=this,[o]=this.info.grid,l=a.step,c=a.nx*a.nz,u=new Float32Array(c*3),d=new Float32Array(c),h=new Float32Array(c);for(let m=0;m<a.nz;m++)for(let p=0;p<a.nx;p++){const v=m*a.nx+p,y=(m*l*o+p*l)*r.channels;u[v*3]=a.xMin+p*a.dx,u[v*3+1]=(r.data[y]<<8|r.data[y+1])/this.info.levelScale-this.info.levelOffset,u[v*3+2]=a.zMin+m*a.dz,d[v]=r.data[y+2]>127?1:0,h[v]=a.y[v]}const f=[];for(let m=0;m<a.nz-1;m++)for(let p=0;p<a.nx-1;p++){const v=m*a.nx+p,y=v+1,M=v+a.nx,E=M+1;d[v]+d[y]+d[M]+d[E]>0&&f.push(v,M,y,y,M,E)}const g=new Me;g.setAttribute("position",new Ht(u,3)),g.setAttribute("aWet",new Ht(d,1)),g.setAttribute("aGround",new Ht(h,1));const _=new Float32Array(c*3);for(let m=0;m<c;m++)_[m*3+1]=1;g.setAttribute("normal",new Ht(_,3)),g.setIndex(f),this.mesh.geometry.dispose(),this.mesh.geometry=g,this.mesh.visible=!0,this.current=t,this.level=new Float32Array(c);for(let m=0;m<c;m++)this.level[m]=u[m*3+1];this.wet=d}hide(){this.mesh.visible=!1}surfaceAt(t,e,n=!1){const{hf:s}=this;if(!this.mesh.visible||!this.level||!this.wet||!s.inside(t,e))return-1/0;const r=Math.round((e-s.zMin)/s.dz)*s.nx+Math.round((t-s.xMin)/s.dx);if(!this.wet[r])return-1/0;const a=this.level[r]-(n?0:this.drop.value);return a>s.yAt(t,e)?a:-1/0}setLevel(t){this.drop.value=(1-te.clamp(t,0,1))*Nc}}const tg='.lgn-label{position:absolute;left:0;top:0;margin:0;white-space:nowrap;will-change:transform;font-family:Space Grotesk,system-ui,sans-serif;line-height:1}button.lgn-label{pointer-events:auto;cursor:pointer}.lgn-label--suburb{padding:4px 6px;border:0;background:none;color:#fff;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;text-shadow:0 1px 2px rgba(8,22,28,.95),0 0 6px rgba(8,22,28,.85),0 0 2px rgba(8,22,28,.9)}.lgn-label--suburb:hover{color:#ffd200}.lgn-label--water{color:#eaf7ff;font-size:13px;font-style:italic;font-weight:500;letter-spacing:.1em;text-shadow:0 1px 2px rgba(0,40,70,.95),0 0 8px rgba(0,40,70,.75)}.lgn-label--region{color:#ffffffe6;font-size:15px;font-weight:600;letter-spacing:.32em;text-transform:uppercase;text-shadow:0 1px 3px rgba(8,22,28,.85),0 0 10px rgba(8,22,28,.6)}.lgn-label--division{padding:4px 8px;border-radius:4px;background:#083a54eb;color:#d6f1ff;font-size:12px;font-weight:600}.lgn-label--road{padding:3px 6px;border-radius:3px;background:#fade8ef0;color:#3a2a06;font-size:10.5px;font-weight:600}.lgn-label--place,.lgn-label--nature,.lgn-label--station,.lgn-label--peak{padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:#0c1c24eb;color:#fff;font-size:12px;font-weight:600}.lgn-label--place:after,.lgn-label--nature:after,.lgn-label--station:after,.lgn-label--peak:after{content:"";position:absolute;left:50%;bottom:-9px;width:1px;height:8px;background:#fffc}.lgn-label--place:hover{background:#0b7d9c}.lgn-label--nature{background:#183826f0}.lgn-label--nature:hover{background:#2c7a4b}.lgn-label--station{padding:4px 8px;border-color:#0c1c2459;background:#f4f2eaf5;color:#1c2a30;font-size:11px}.lgn-label--station:hover{background:#fff}.lgn-label--peak{background:#402c14f0}.lgn-label--peak:before{content:"▲ ";color:#ffd200;font-size:9px}.lgn-label--peak:hover{background:#7a5520}.lgn-range{-moz-appearance:none;appearance:none;-webkit-appearance:none;height:28px;background:transparent;cursor:pointer}.lgn-range::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#b9d7e6,#4f9bc4 55%,#173f7a)}.lgn-range::-moz-range-track{height:6px;border-radius:3px;background:linear-gradient(90deg,#b9d7e6,#4f9bc4 55%,#173f7a)}.lgn-range::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.lgn-range::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #0b3a4d}.lgn-range:focus-visible{outline:2px solid #ffd200;outline-offset:4px;border-radius:4px}',Uc={type:"change"},ho={type:"start"},Fc={type:"end"},dr=new Va,Oc=new Sn,eg=Math.cos(70*te.DEG2RAD),Ee=new k,$e=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uo=1e-6;class ng extends Ad{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ye.ROTATE,MIDDLE:Ye.DOLLY,RIGHT:Ye.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new qn,this._lastTargetPosition=new k,this._quat=new qn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ir,this._sphericalDelta=new ir,this._scale=1,this._panOffset=new k,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new k,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sg.bind(this),this._onPointerDown=ig.bind(this),this._onPointerUp=rg.bind(this),this._onContextMenu=dg.bind(this),this._onMouseWheel=lg.bind(this),this._onKeyDown=cg.bind(this),this._onTouchStart=hg.bind(this),this._onTouchMove=ug.bind(this),this._onMouseDown=ag.bind(this),this._onMouseMove=og.bind(this),this._interceptControlDown=fg.bind(this),this._interceptControlUp=pg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ie.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uc),this.update(),this.state=ie.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$e:n>Math.PI&&(n-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ee.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(dr.origin.copy(this.object.position),dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dr.direction))<eg?this.object.lookAt(this.target):(Oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),dr.intersectPlane(Oc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uo||this._lastTargetPosition.distanceToSquared(this.target)>uo?(this.dispatchEvent(Uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ig(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function sg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fc),this.state=ie.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ag(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case Ye.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case Ye.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(ho)}function og(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function lg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(ho),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fc))}function cg(i){this.enabled!==!1&&this._handleKeyDown(i)}function hg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gn.ROTATE:if(this.enableRotate===!1){this.state=ie.NONE;break}this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case Gn.PAN:if(this.enablePan===!1){this.state=ie.NONE;break}this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Gn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(ho)}function ug(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function dg(i){this.enabled!==!1&&i.preventDefault()}function fg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fo=new Sn,fr=new $l,zi=new Pt,po=new k;class mg extends ng{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Ye.PAN,MIDDLE:Ye.DOLLY,RIGHT:Ye.ROTATE},this.touches={ONE:Gn.PAN,TWO:Gn.DOLLY_ROTATE},this._panWorldStart=new k}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;fo.setFromNormalAndCoplanarPoint(this.object.up,this.target);const n=this.domElement.getBoundingClientRect();zi.x=(t.clientX-n.left)/n.width*2-1,zi.y=-((t.clientY-n.top)/n.height)*2+1,fr.setFromCamera(zi,this.object),fr.ray.intersectPlane(fo,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}const n=this.domElement.getBoundingClientRect();zi.x=(t.clientX-n.left)/n.width*2-1,zi.y=-((t.clientY-n.top)/n.height)*2+1,fr.setFromCamera(zi,this.object),fr.ray.intersectPlane(fo,po)&&(po.sub(this._panWorldStart),this._panOffset.copy(po).negate(),this.update())}}const Fn={day:{sunDir:[-.42,.78,-.46],sunColor:16774109,sunIntensity:3.1,hemiSky:13953279,hemiGround:9280120,hemiIntensity:1.25,zenith:4163279,horizon:13625078,below:1582638,sunGlow:1,shallow:7129789,deep:1201018,waterSky:12903158,foam:1,night:0,exposure:1},golden:{sunDir:[-.84,.22,.36],sunColor:16756848,sunIntensity:3,hemiSky:15781309,hemiGround:6973032,hemiIntensity:1.15,zenith:4153244,horizon:16760970,below:1645863,sunGlow:1.6,shallow:7320486,deep:1390942,waterSky:16763040,foam:.9,night:.25,exposure:1},night:{sunDir:[.38,.72,-.42],sunColor:10467071,sunIntensity:.5,hemiSky:3821436,hemiGround:1053980,hemiIntensity:.55,zenith:396056,horizon:1582922,below:263948,sunGlow:.5,shallow:1920092,deep:331552,waterSky:2242140,foam:.45,night:1,exposure:1.05}},gg=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0);
  gl_Position = p.xyww;
}`,_g=`
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
}`;class xg{constructor(t,e,n){nt(this,"sun",new wd(16777215,3));nt(this,"hemi",new yd(16777215,8947848,1));nt(this,"sky");nt(this,"sunDir",new k);nt(this,"horizon",new It);nt(this,"skyUniforms");nt(this,"from");nt(this,"to");nt(this,"t",1);nt(this,"mode","day");this.renderer=t,this.water=e,this.from=this.to=Fn.day,this.skyUniforms={uZenith:{value:new It},uHorizon:{value:new It},uBelow:{value:new It},uSunDir:{value:new k},uSunColor:{value:new It},uSunGlow:{value:1},uNight:{value:0}},this.sky=new ne(new Ja(1,32,16),new Jn({uniforms:this.skyUniforms,vertexShader:gg,fragmentShader:_g,side:He,depthWrite:!1,depthTest:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,n>0&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(n,n)),this.apply(1)}set(t,e=!1){t===this.mode&&this.t>=1||(this.from=this.snapshot(),this.to=Fn[t],this.mode=t,this.t=e?1:0,this.apply(this.t))}update(t){return this.t>=1?!1:(this.t=Math.min(1,this.t+t/1.4),this.apply(this.t),!0)}aimShadow(t,e){if(!this.sun.castShadow)return;const n=te.clamp(e*.7,140,2400),s=this.sun.shadow,r=s.camera,a=n*2/s.mapSize.x,o=Math.round(t.x/a)*a,l=Math.round(t.z/a)*a,c=n*2.4+300;this.sun.target.position.set(o,0,l),this.sun.position.set(o,0,l).addScaledVector(this.sunDir,c),this.sun.target.updateMatrixWorld(),r.right!==n&&(r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=1,r.far=c*2+400,r.updateProjectionMatrix(),s.bias=-.3/(r.far-r.near),s.normalBias=te.clamp(a*1.6,.06,1.2))}setSolar(t,e={rise:360,set:1230,noon:70}){const n=(t%1440+1440)%1440,{rise:s,set:r}=e;let a,o;if(n>=s&&n<=r)o=(n-s)/(r-s),a=Math.sin(Math.PI*o)*e.noon;else{const _=((n<s?n+1440:n)-r)/(1440-(r-s));o=_<.5?1:0,a=-Math.sin(Math.PI*_)*40}const l=te.degToRad(110*(1-2*o)),c=te.degToRad(Math.max(a,5)),u=[Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)];let d;a>=25?d=Fn.day:a>=6?d=mo(Fn.golden,Fn.day,(a-6)/19):a>=-6?d=mo(Fn.night,Fn.golden,(a+6)/12):d=Fn.night;const h=te.clamp((2-a)/6,0,1),f=Fn.night.sunDir,g=[u[0]+(f[0]-u[0])*h,u[1]+(f[1]-u[1])*h,u[2]+(f[2]-u[2])*h];this.from=this.to={...d,sunDir:g},this.mode=a>=25?"day":a>=-6?"golden":"night",this.apply(1)}snapshot(){return mo(this.from,this.to,vg(this.t))}apply(t){this.t=t;const e=this.snapshot();this.sunDir.set(...e.sunDir).normalize(),this.sun.color.set(e.sunColor),this.sun.intensity=e.sunIntensity,this.hemi.color.set(e.hemiSky),this.hemi.groundColor.set(e.hemiGround),this.hemi.intensity=e.hemiIntensity;const n=this.skyUniforms;if(n.uZenith.value.set(e.zenith),n.uHorizon.value.set(e.horizon),n.uBelow.value.set(e.below),n.uSunDir.value.copy(this.sunDir),n.uSunColor.value.set(e.sunColor),n.uSunGlow.value=e.sunGlow,n.uNight.value=e.night,this.horizon.set(e.horizon),this.water){const s=this.water.uniforms;s.uSunDir.value.copy(this.sunDir),s.uSunColor.value.set(e.sunColor).multiplyScalar(Math.min(1,e.sunIntensity/2.5)),s.uShallow.value.set(e.shallow),s.uDeep.value.set(e.deep),s.uSky.value.set(e.waterSky),s.uFoam.value=e.foam,this.water.skirt.material.color.set(e.deep).lerp(new It(e.shallow),.35)}ti.value=e.night,this.renderer.toneMappingExposure=e.exposure}}function vg(i){return i*i*(3-2*i)}function mo(i,t,e){if(e<=0)return i;if(e>=1)return t;const n=(r,a)=>new It(r).lerp(new It(a),e).getHex(),s=(r,a)=>r+(a-r)*e;return{sunDir:[s(i.sunDir[0],t.sunDir[0]),s(i.sunDir[1],t.sunDir[1]),s(i.sunDir[2],t.sunDir[2])],sunColor:n(i.sunColor,t.sunColor),sunIntensity:s(i.sunIntensity,t.sunIntensity),hemiSky:n(i.hemiSky,t.hemiSky),hemiGround:n(i.hemiGround,t.hemiGround),hemiIntensity:s(i.hemiIntensity,t.hemiIntensity),zenith:n(i.zenith,t.zenith),horizon:n(i.horizon,t.horizon),below:n(i.below,t.below),sunGlow:s(i.sunGlow,t.sunGlow),shallow:n(i.shallow,t.shallow),deep:n(i.deep,t.deep),waterSky:n(i.waterSky,t.waterSky),foam:s(i.foam,t.foam),night:s(i.night,t.night),exposure:s(i.exposure,t.exposure)}}const ki=2e3,go=[15129800,13875354,12158312,15723750,12434098,14273200],_o=[13224388,14868692,11843507,9409424,5987928,4672334,11035724,9280642],Mg=new Float32Array([-.5,0,-.5,.5,0,-.5,.5,0,.5,-.5,0,.5,-.5,1,-.5,.5,1,-.5,.5,1,.5,-.5,1,.5,-.5,1,-.5,.5,1,-.5,.5,1,.5,-.5,1,.5,-.5,2,0,.5,2,0]),Sg=new Float32Array([0,0,0,0,0,0,0,0,1,1,1,1,1,1]),yg=new Uint16Array([0,1,5,0,5,4,1,2,6,1,6,5,2,3,7,2,7,6,3,0,4,3,4,7,8,9,13,8,13,12,10,11,12,10,12,13,11,8,12,9,10,13]),Bc=`
attribute vec3 aPos;
attribute vec4 aDims; // width, eave height, depth, roof height
attribute vec4 aRot; // cos, sin, depth of the base below the centre ground, random seed
uniform float uRange;
uniform vec3 uEye; // the viewer's position; cameraPosition is the light's during the shadow pass
`,zc=`
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
`;function kc(i){return new It(i)}function Eg(i,t){const e=new yn({flatShading:!0,roughness:.86,metalness:0,side:Oe}),n=go.map(kc),s=_o.map(kc);e.onBeforeCompile=a=>{a.uniforms.uRange=i,a.uniforms.uEye=t,a.uniforms.uNight=ti,a.uniforms.uWalls={value:n},a.uniforms.uRoofs={value:s},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Bc}
attribute float aPart;
uniform vec3 uWalls[${go.length}];
uniform vec3 uRoofs[${_o.length}];
varying vec3 vLgColor;
varying float vLgGlow;
varying vec3 vLgLocal;
varying vec3 vLgBox;
varying vec2 vLgWin;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`${zc}
        {
          float seed = aRot.w;
          float large = step(650.0, aDims.x * aDims.z); // sheds and shops: pale metal roofs, plain walls
          vec3 wall = mix(uWalls[int(seed * ${go.length}.0)], uWalls[4], large * 0.7);
          vec3 roof = mix(uRoofs[int(fract(seed * 7.31) * ${_o.length}.0)], uRoofs[int(fract(seed * 3.7) * 3.0)], large);
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
totalEmissiveRadiance += vec3(1.0, 0.76, 0.48) * mix(vLgGlow, lgLit * 1.25, lgNear) * uNight * 1.6;`)},e.customProgramCacheKey=()=>"logan-building";const r=new Qa({depthPacking:Jo});return r.onBeforeCompile=a=>{a.uniforms.uRange=i,a.uniforms.uEye=t,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${Bc}`).replace("#include <begin_vertex>",zc)},r.customProgramCacheKey=()=>"logan-building-depth",{mat:e,depth:r}}function bg(i,t,e,n,s,r){const a=new Ze;a.name="buildings";const o={value:n},l={value:new k},{mat:c,depth:u}=Eg(o,l),d=new Ht(Mg,3),h=new Ht(Sg,1),f=new Ht(yg,1),[g,_]=t.meta.size,m=Math.ceil(g/ki),p=new Map;let v=0;for(let S=0;S<i.count;S++){if(i.w[S]*i.d[S]<s)continue;const x=Math.floor((i.z[S]+_/2)/ki)*m+Math.floor((i.x[S]+g/2)/ki);let b=p.get(x);b||p.set(x,b=[]),b.push(S),v++}const y=Bi(4114),M=[];for(const[S,x]of p){const b=x.length,I=new Float32Array(b*3),C=new Float32Array(b*4),R=new Float32Array(b*4);let P=1/0,D=-1/0;for(let J=0;J<b;J++){const H=x[J],Y=i.x[H],tt=i.z[H],gt=i.w[H],Lt=i.d[H],K=Math.cos(i.angle[H]),it=Math.sin(i.angle[H]),St=e.yAt(Y,tt);let Et=St;for(const[lt,Mt]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])Et=Math.min(Et,e.yAt(Y+lt*gt*K-Mt*Lt*it,tt+lt*gt*it+Mt*Lt*K));I.set([Y,St,tt],J*3),C.set([gt,i.eave[H],Lt,Math.max(i.roof[H]-i.eave[H],0)],J*4),R.set([K,it,St-Et+.4,y()],J*4),P=Math.min(P,Et),D=Math.max(D,St+i.roof[H])}const A=new Kl;A.setAttribute("position",d),A.setAttribute("aPart",h),A.setIndex(f),A.setAttribute("aPos",new cs(I,3)),A.setAttribute("aDims",new cs(C,4)),A.setAttribute("aRot",new cs(R,4)),A.instanceCount=b;const U=new k((S%m+.5)*ki-g/2,(P+D)/2,(Math.floor(S/m)+.5)*ki-_/2),B=Math.hypot(ki*.75,(D-P)/2)+60;A.boundingSphere=new as(U,B);const z=new ne(A,c);z.customDepthMaterial=u,z.castShadow=r,z.receiveShadow=r,z.visible=!1,a.add(z),M.push({mesh:z,centre:U,radius:B})}const E=wg(t,e,r);return E.visible=!1,a.add(E),{group:a,count:v+t.blocks.length,update(S){l.value.copy(S);let x=!1;for(const I of M){const C=S.distanceTo(I.centre)<n+I.radius;C!==I.mesh.visible&&(I.mesh.visible=C,x=!0)}const b=S.y<n*3;return b!==E.visible&&(E.visible=b,x=!0),x}}}function wg(i,t,e){const n=new jn,s=Bi(4131),r=[G(14605522),G(13224388),G(12172472),G(15328988)],a=[G(13618112),G(12434098),G(14275266)];for(const l of i.blocks){const c=l.p.length/2,u=new Array(c*2);let d=0,h=0,f=1/0;for(let _=0;_<c;_++){const m=l.p[_*2]/10,p=l.p[_*2+1]/10;u[_*2]=m,u[_*2+1]=p,d+=m/c,h+=p/c,f=Math.min(f,t.yAt(m,p))}const g=t.yAt(d,h)+l.e+(l.a-l.e)*.6;n.walls(u,f-.4,g,a[Math.floor(s()*a.length)],.22),n.cap(u,g,r[Math.floor(s()*r.length)])}const o=new ne(n.build(),co({roughness:.84}));return o.castShadow=e,o.receiveShadow=e,o.name="blocks",o}const pr=1;class Tg{constructor(t,e,n,s,r,a){nt(this,"nx");nt(this,"nz");nt(this,"y");nt(this,"xMin");nt(this,"zMin");nt(this,"xMax");nt(this,"zMax");nt(this,"dx");nt(this,"dz");nt(this,"yMax");this.sizeX=s,this.sizeZ=r,this.step=a;const o=s/e,l=r/n;this.nx=Math.floor((e-1)/a)+1,this.nz=Math.floor((n-1)/a)+1,this.dx=o*a,this.dz=l*a,this.xMin=-s/2+o/2,this.zMin=-r/2+l/2,this.xMax=this.xMin+(this.nx-1)*this.dx,this.zMax=this.zMin+(this.nz-1)*this.dz,this.y=new Float32Array(this.nx*this.nz);let c=0;for(let u=0;u<this.nz;u++)for(let d=0;d<this.nx;d++){const h=t[u*a*e+d*a]*pr;this.y[u*this.nx+d]=h,h>c&&(c=h)}this.yMax=c}yAt(t,e){let n=(t-this.xMin)/this.dx,s=(e-this.zMin)/this.dz;n<0?n=0:n>this.nx-1.0001&&(n=this.nx-1.0001),s<0?s=0:s>this.nz-1.0001&&(s=this.nz-1.0001);const r=n|0,a=s|0,o=n-r,l=s-a,c=a*this.nx+r,u=this.y[c],d=this.y[c+1],h=this.y[c+this.nx],f=this.y[c+this.nx+1];return o+l<=1?u+(d-u)*o+(h-u)*l:f+(h-f)*(1-o)+(d-f)*(1-l)}metresAt(t,e){return this.yAt(t,e)/pr}inside(t,e,n=0){return t>this.xMin+n&&t<this.xMax-n&&e>this.zMin+n&&e<this.zMax-n}drape(t,e,n,s,r){const a=(t-this.xMin)/this.dx,o=(e-this.zMin)/this.dz,l=(n-this.xMin)/this.dx,c=(s-this.zMin)/this.dz,u=[],d=(f,g)=>{if(f===g)return;const _=Math.min(f,g),m=Math.max(f,g);for(let p=Math.floor(_)+1;p<m;p++)u.push((p-f)/(g-f))};d(a,l),d(o,c),d(a+o,l+c),u.sort((f,g)=>f-g);let h=0;for(const f of u){if(f-h<1e-4||f>.9999)continue;h=f;const g=t+(n-t)*f,_=e+(s-e)*f;r.push(g,this.yAt(g,_),_)}r.push(n,this.yAt(n,s),s)}}const Ag=["suburb","water","region","road","division"],Rg=["water","region","road","division"];class Cg{constructor(t,e,n){nt(this,"items",[]);nt(this,"v",new k);nt(this,"visible",!0);nt(this,"obstacles",[]);nt(this,"hidden",new Set);this.layer=t;for(const s of[...e].sort((r,a)=>r.priority-a.priority)){const r=document.createElement(Rg.includes(s.kind)?"span":"button");r instanceof HTMLButtonElement&&(r.type="button",r.tabIndex=-1,r.addEventListener("click",()=>n(s.id))),r.className=`lgn-label lgn-label--${s.kind}`,r.textContent=s.name,r.style.visibility="hidden",t.appendChild(r),this.items.push({def:s,el:r,w:0,h:0,shown:!1,centred:Ag.includes(s.kind)})}}remeasure(){for(const t of this.items)t.w=0}setVisible(t){this.visible=t,this.layer.style.display=t?"":"none"}setKindVisible(t,e){e?this.hidden.delete(t):this.hidden.add(t)}setObstacles(t){this.obstacles=t}update(t,e,n,s=1/0){if(!this.visible)return;const r=[...this.obstacles];for(const a of this.items){a.w||(a.w=a.el.offsetWidth,a.h=a.el.offsetHeight);const o=a.def;this.v.set(o.x,o.y,o.z);const l=this.v.distanceTo(t.position);this.v.project(t);let c=!this.hidden.has(o.kind)&&this.v.z<1&&this.v.z>-1&&l<Math.min(o.maxDist??1/0,s)&&l>(o.minDist??0);const u=(this.v.x*.5+.5)*e,d=(-this.v.y*.5+.5)*n,h=u-a.w/2,f=a.centred?d-a.h/2:d-a.h-8,g=h+a.w,_=f+a.h;if(c&&(h<2||g>e-2||f<2||_>n-2)&&(c=!1),c){for(const m of r)if(h<m[2]+5&&g>m[0]-5&&f<m[3]+3&&_>m[1]-3){c=!1;break}}c&&(r.push([h,f,g,_]),a.el.style.transform=`translate3d(${Math.round(h)}px, ${Math.round(f)}px, 0)`),c!==a.shown&&(a.el.style.visibility=c?"visible":"hidden",a.shown=c)}}dispose(){for(const t of this.items)t.el.remove();this.items=[]}}const Pg=[{id:"council",name:"Logan City Council",kind:"place",lat:-27.64299,lon:153.10404,blurb:"The council's administration centre on Wembley Road, built around a courtyard. The survey puts its roof line about 10 metres up and the antenna on top at about 36 metres. The Logan Art Gallery is in its eastern wing.",view:[330,58,-150],priority:10,maxDist:3e4,stand:{from:[-38.5,40.4],at:[-5,49.5],pitch:.07}},{id:"lec",name:"Logan Entertainment Centre",kind:"place",lat:-27.643441,lon:153.102315,blurb:"The city's performance and events venue, next door to the council's administration centre.",view:[420,58,-150],priority:15,maxDist:5e3},{id:"pcyc",name:"PCYC Logan City",kind:"place",lat:-27.643802,lon:153.104141,blurb:"Police-Citizens Youth Club, behind the administration centre.",view:[360,58,-150],priority:16,maxDist:3500},{id:"gallery",name:"Logan Art Gallery",kind:"place",lat:-27.64274,lon:153.10439,blurb:"The city's art gallery. Queensland's community facilities data places it in the eastern wing of the council's administration centre.",view:[240,58,150],priority:16,maxDist:2600},{id:"civicpark",name:"Civic Centre Park",kind:"nature",lat:-27.64517,lon:153.10332,blurb:"Parkland and sports ovals south of the council's administration centre.",view:[520,58,10],priority:17,maxDist:2600},{id:"woodridgess",name:"Woodridge State School",kind:"place",lat:-27.64106,lon:153.10375,blurb:"State school on the north side of Wembley Road, opposite the council's administration centre.",view:[420,58,0],priority:18,maxDist:2200},{id:"specialschool",name:"Logan City Special School",kind:"place",lat:-27.6416,lon:153.10215,blurb:"Special school on Wembley Road, north-west of the council's administration centre.",view:[420,58,20],priority:18,maxDist:2200},{id:"police",name:"Logan Central Police Station",kind:"place",lat:-27.64589,lon:153.10493,blurb:"Police station south of the council's administration centre.",view:[420,58,-20],priority:18,maxDist:2200},{id:"wembleyfalls",name:"Wembley Falls Park",kind:"nature",lat:-27.64098,lon:153.10593,blurb:"Park beside the railway, north of Wembley Road.",view:[420,58,-15],priority:19,maxDist:2e3},{id:"hyperdome",name:"Logan Hyperdome",kind:"place",lat:-27.65885,lon:153.17124,blurb:"Shopping centre beside the Pacific Motorway. At about 98,700 square metres it is the largest building footprint in the city.",view:[1900,58,25],priority:11,maxDist:26e3},{id:"hospital",name:"Logan Hospital",kind:"place",lat:-27.67004,lon:153.14241,blurb:"The city's main public hospital. Its tallest block stands about 38 metres above the ground in the survey.",view:[1500,58,-15],priority:12,maxDist:22e3},{id:"griffith",name:"Griffith University",kind:"place",lat:-27.66509,lon:153.15262,blurb:"Griffith University's Logan campus.",view:[1700,58,10],priority:14,maxDist:16e3},{id:"springwood",name:"Springwood centre",kind:"place",lat:-27.61409,lon:153.12682,blurb:"Springwood's commercial centre beside the Pacific Motorway, around the Springwood Mall.",view:[1800,58,-25],priority:13,maxDist:2e4},{id:"grandplaza",name:"Grand Plaza",kind:"place",lat:-27.66299,lon:153.04097,blurb:"The main shopping centre at Browns Plains, and the third largest building footprint in the city.",view:[1700,58,20],priority:13,maxDist:2e4},{id:"butter",name:"Kingston Butter Factory",kind:"place",lat:-27.658,lon:153.12048,blurb:"The former butter factory, now a community arts venue, next to Kingston station.",view:[1100,60,30],priority:15,maxDist:12e3},{id:"mayes",name:"Mayes Cottage",kind:"place",lat:-27.65258,lon:153.11676,blurb:"Heritage house museum in Kingston.",view:[900,60,-30],priority:18,maxDist:7e3},{id:"beenleigh",name:"Beenleigh centre",kind:"place",lat:-27.71683,lon:153.20145,blurb:"Beenleigh's town centre: the courthouse, the library and the last station on the Beenleigh line.",view:[1900,58,15],priority:12,maxDist:24e3},{id:"yugambeh",name:"Yugambeh Museum",kind:"place",lat:-27.72409,lon:153.21749,blurb:"Museum of Yugambeh language and heritage.",view:[1100,60,-20],priority:18,maxDist:8e3},{id:"temple",name:"Chung Tian Temple",kind:"place",lat:-27.60327,lon:153.15125,blurb:"Buddhist temple set in bushland on the city's northern edge.",view:[1100,60,20],priority:17,maxDist:9e3},{id:"jimboomba",name:"Jimboomba centre",kind:"place",lat:-27.8295,lon:153.02645,blurb:"The town centre of Jimboomba, on the Mount Lindesay Highway in the south of the city.",view:[2200,58,-10],priority:12,maxDist:26e3},{id:"loganvillage",name:"Logan Village",kind:"place",lat:-27.76759,lon:153.10513,blurb:"Village centre near the Logan River, between Waterford and Yarrabilba.",view:[2e3,58,15],priority:14,maxDist:2e4},{id:"yarrabilba",name:"Yarrabilba",kind:"place",lat:-27.81405,lon:153.12125,blurb:"One of the city's newest communities. The surveyed streets and houses show how far it had been built.",view:[3200,56,-15],priority:13,maxDist:24e3},{id:"flagstone",name:"Flagstone",kind:"place",lat:-27.81686,lon:152.96475,blurb:"Flagstone's village centre, the heart of a growing community in the south-west.",view:[3e3,56,20],priority:13,maxDist:24e3},{id:"daisyhill",name:"Daisy Hill Conservation Park",kind:"nature",lat:-27.61761,lon:153.17205,blurb:"784 hectares of forest on the hills east of Springwood, home to the Daisy Hill Koala Centre.",view:[5200,56,-20],priority:9,maxDist:34e3},{id:"koala",name:"Daisy Hill Koala Centre",kind:"nature",lat:-27.62286,lon:153.15694,blurb:"Koala centre inside Daisy Hill Conservation Park.",view:[1300,60,35],priority:16,maxDist:9e3},{id:"springwoodcp",name:"Springwood Conservation Park",kind:"nature",lat:-27.62526,lon:153.14291,blurb:"A 29 hectare pocket of bushland in the middle of Springwood.",view:[1700,58,0],priority:17,maxDist:1e4},{id:"underwood",name:"Underwood Park",kind:"nature",lat:-27.59968,lon:153.1483,blurb:"About 40 hectares of sports fields and parkland.",view:[1900,58,-15],priority:17,maxDist:1e4},{id:"cornubia",name:"Cornubia Forest",kind:"nature",lat:-27.64953,lon:153.2047,blurb:"Cornubia Forest Nature Refuge: 133 hectares of bushland.",view:[3200,56,20],priority:15,maxDist:18e3},{id:"carbrook",name:"Carbrook Wetlands",kind:"nature",lat:-27.66949,lon:153.26531,blurb:"Conservation park on the low ground near the mouth of the Logan River.",view:[3600,56,-25],priority:14,maxDist:24e3},{id:"tygum",name:"Tygum Lagoon",kind:"nature",lat:-27.69524,lon:153.13178,blurb:"Lagoon and parkland in Waterford West.",view:[1300,60,20],priority:17,maxDist:9e3},{id:"parklands",name:"Logan River Parklands",kind:"nature",lat:-27.69839,lon:153.19237,blurb:"Riverside parkland on the Logan River at Beenleigh.",view:[1500,60,-30],priority:16,maxDist:1e4},{id:"eagleby",name:"Eagleby Wetlands",kind:"nature",lat:-27.70812,lon:153.22995,blurb:"Wetland reserve close to where the Albert River joins the Logan.",view:[2100,58,15],priority:16,maxDist:12e3},{id:"plunkett",name:"Plunkett Conservation Park",kind:"nature",lat:-27.80923,lon:153.14143,blurb:"782 hectares of bushland east of Yarrabilba.",view:[5200,56,20],priority:11,maxDist:3e4},{id:"springmountain",name:"Spring Mountain Forest Park",kind:"nature",lat:-27.71283,lon:152.90907,blurb:"340 hectares of forest in the west of the city.",view:[5200,56,-25],priority:12,maxDist:3e4},{id:"loganriver",name:"Logan River",kind:"water",lat:-27.70065,lon:153.14611,blurb:"The city's main river. It winds north-east across the whole map towards Moreton Bay.",view:[9e3,52,10],priority:8,maxDist:15e4},{id:"albertriver",name:"Albert River",kind:"water",lat:-27.74445,lon:153.19928,blurb:"Flows north along the city's eastern side to join the Logan River near Eagleby.",view:[8e3,52,-15],priority:9,maxDist:4e4}],Lg=[{name:"Pacific Motorway",kind:"road",lat:-27.65547,lon:153.16454,maxDist:26e3},{name:"Pacific Motorway",kind:"road",lat:-27.70388,lon:153.2014,maxDist:16e3},{name:"Logan Motorway",kind:"road",lat:-27.65277,lon:153.07095,maxDist:26e3},{name:"Logan Motorway",kind:"road",lat:-27.66671,lon:153.15186,maxDist:14e3},{name:"Mount Lindesay Highway",kind:"road",lat:-27.73991,lon:153.0265,maxDist:26e3},{name:"Mount Lindesay Highway",kind:"road",lat:-27.84813,lon:153.01892,maxDist:16e3},{name:"Logan River",kind:"water",lat:-27.69,lon:153.24506,maxDist:3e4},{name:"Logan River",kind:"water",lat:-27.769,lon:153.05127,maxDist:3e4}];function xo(i,t,e){return[(e-i.origin[0])*i.metresPerDegree[0],-(t-i.origin[1])*i.metresPerDegree[1]]}function Dg(i,t,e){return Pg.map(n=>{const[s,r]=xo(i,n.lat,n.lon);return{...n,x:s,z:r,y:t.yAt(s,r)+45,suburb:e(s,r)}})}const Gi={uPixel:{value:.001},uTint:{value:new It(1,1,1)},uNight:ti,uHole:{value:new ue(0,0,0,0)},uHoleOn:{value:0},uStreet:{value:0}},Gc=-1,Ig=0,Ng=1,Ug=2,Fg=3;class On{constructor(){nt(this,"pos",[]);nt(this,"side",[]);nt(this,"road",[]);nt(this,"col",[]);nt(this,"idx",[])}get vertexCount(){return this.pos.length/3}add(t,e,n,s,r,a=!1,o=Gc){const l=t.length/3;if(l<2)return;const c=this.vertexCount,u=e/2;let d=0;for(let h=0;h<l;h++){const f=t[h*3],g=t[h*3+1],_=t[h*3+2];h>0&&(d+=Math.hypot(f-t[h*3-3],_-t[h*3-1]));const m=h>0?h-1:a?l-2:0,p=h<l-1?h+1:a?1:l-1;let v=f-t[m*3],y=_-t[m*3+2],M=t[p*3]-f,E=t[p*3+2]-_;const S=Math.hypot(v,y),x=Math.hypot(M,E);S>1e-6?(v/=S,y/=S):(v=M/(x||1),y=E/(x||1)),x>1e-6?(M/=x,E/=x):(M=v,E=y);let b=v+M,I=y+E;const C=Math.hypot(b,I);C<1e-6?(b=M,I=E):(b/=C,I/=C);const R=1/Math.max(b*M+I*E,.45),P=-I*R,D=b*R;for(const A of[1,-1]){const U=r&&u>0?Math.max(g,r.yAt(f+P*A*u,_+D*A*u)):g;this.pos.push(f,U,_),this.side.push(P*A,D*A,u,n/2),this.road.push(A,d,o),this.col.push(s[0],s[1],s[2])}if(h>0){const A=c+(h-1)*2;this.idx.push(A,A+1,A+2,A+1,A+3,A+2)}}}build(){const t=new Me;return t.setAttribute("position",new Ht(new Float32Array(this.pos),3)),t.setAttribute("aSide",new Ht(new Float32Array(this.side),4)),t.setAttribute("aRoad",new Ht(new Float32Array(this.road),3)),t.setAttribute("color",new Ht(new Float32Array(this.col),3)),t.setIndex(this.vertexCount>65535?new Ht(new Uint32Array(this.idx),1):new Ht(new Uint16Array(this.idx),1)),t.computeBoundingSphere(),t.boundingSphere&&(t.boundingSphere.radius+=400),this.pos=[],this.side=[],this.road=[],this.col=[],this.idx=[],t}}function Bn(i={}){const t=new Ws({vertexColors:!0,transparent:!0,opacity:i.opacity??1,depthWrite:!1,side:Oe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),e={value:i.lift??.4},n={value:i.glow??0},s={value:i.nightDim??.2};return t.onBeforeCompile=r=>{Object.assign(r.uniforms,Gi,{uLift:e,uGlow:n,uNightDim:s}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
        }`:""}`)},t.customProgramCacheKey=()=>`logan-ribbon-${i.hole?"hole":"whole"}-${i.street??"plain"}`,t}const vs=G(3163482),Hc={council:{wall:G(14341834),roof:G(15001058),windows:"all",storey:3.3,parapet:.9,shades:!0},hall:{wall:G(13223613),roof:G(14211541),windows:"ground",storey:4.2,parapet:.7},sport:{wall:G(13617856),roof:G(14474456),windows:"ground",storey:4,parapet:.4},gallery:{wall:G(15262938),roof:G(15526886),windows:"all",storey:3.8,parapet:.5,shades:!0},community:{wall:G(12755331),roof:G(7557184),windows:"all",storey:3.2,parapet:.2,pitched:!0},school:{wall:G(14472905),roof:G(14277851),windows:"all",storey:3.1,parapet:.15,shades:!0,pitched:!0},police:{wall:G(13488854),roof:G(11975357),windows:"all",storey:3.4,parapet:.5,shades:!0},shops:{wall:G(14208960),roof:G(13685196),windows:"ground",storey:4.4,parapet:.8},other:{wall:G(14012355),roof:G(13619403),windows:"all",storey:3.4,parapet:.4,pitched:!0}},Vc=[15921904,14277339,10132896,3948356,2040358,12069163,2969487,7372940,15262676,4877138].map(G),Hi=[5209412,5932872,6853456,4682303].map(G),Wc=[14273976,13219740,11901570,15130578,11109480,10254946,13617341,12371656,15328208,12891042].map(G),Xc=[9128506,10638655,7303026,4936280,9410199,12830662,5597263,8077107,4145991,11119270].map(G),qc=[4008997,9056042,15789282,3099228,5201226].map(G),Yc=[9075560,14209728,9278097,6123356,10127988,7301731].map(G),Vi=G(9409430),mr=[3104138,12076090,15131350,4156234,2895411,14263361,8018572,10135469].map(G),gr=[14727578,13211508,10252114,15782068].map(G),Ne=te.degToRad,sn=.25,rn=[15527140,14925626,12368043,3828920,2763824,4867135].map(G);class Og{constructor(t){nt(this,"pos",[]);nt(this,"col",[]);this.hf=t}tri(t,e,n,s,r,a,o){const l=(s-e)*(r-t)-(n-t)*(a-e)>0;for(const[c,u]of l?[[t,e],[n,s],[r,a]]:[[t,e],[r,a],[n,s]])this.pos.push(c,this.hf.yAt(c,u)+sn+.04,u),this.col.push(o[0],o[1],o[2])}line(t,e,n,s,r,a){const o=Math.hypot(n-t,s-e);if(o<.001)return;const l=-(s-e)/o*(r/2),c=(n-t)/o*(r/2),u=Math.max(1,Math.ceil(o/4));for(let d=0;d<u;d++){const h=t+(n-t)*d/u,f=e+(s-e)*d/u,g=t+(n-t)*(d+1)/u,_=e+(s-e)*(d+1)/u;this.tri(h-l,f-c,g-l,_-c,g+l,_+c,a),this.tri(h-l,f-c,g+l,_+c,h+l,f+c,a)}}shape(t,e,n,s,r,a){const o=Ne(n),l=Math.cos(o)*s,c=Math.sin(o)*s,u=h=>t+r[h*2]*l-r[h*2+1]*c,d=h=>e-r[h*2]*c-r[h*2+1]*l;for(let h=1;h+1<r.length/2;h++)this.tri(u(0),d(0),u(h),d(h),u(h+1),d(h+1),a)}disc(t,e,n,s){const r=[];for(let a=0;a<8;a++)r.push(Math.cos(a/8*Math.PI*2)*n,Math.sin(a/8*Math.PI*2)*n);this.shape(t,e,0,1,r,s)}build(){const t=new Me,e=this.pos.length/3,n=new Float32Array(e*3);for(let a=0;a<e;a++)n[a*3+1]=1;t.setAttribute("position",new Ht(new Float32Array(this.pos),3)),t.setAttribute("normal",new Ht(n,3)),t.setAttribute("color",new Ht(new Float32Array(this.col),3));const s=new yn({vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,side:Oe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),r=new ne(t,s);return r.receiveShadow=!0,r.renderOrder=25,r.name="precinct-paint",r}}function Bg(i,t){const[e,n]=t.centre;for(let a=0;a<t.paint.length;a+=6){const o=t.paint;i.line(e+o[a]/100,n+o[a+1]/100,e+o[a+2]/100,n+o[a+3]/100,o[a+4]/100,rn[o[a+5]]??rn[0])}const s=[-2.3,-.2,.5,-.2,.5,.2,-2.3,.2],r=[.4,-.75,2.3,0,.4,.75];for(let a=0;a<t.marks.length;a+=5){const o=e+t.marks[a]/100,l=n+t.marks[a+1]/100,c=t.marks[a+2]/10,u=t.marks[a+3]/100,d=t.marks[a+4];if(d===0)i.shape(o,l,c,u,s,rn[0]),i.shape(o,l,c,u,r,rn[0]);else if(d===1||d===2){const h=d===1?1:-1;i.shape(o,l,c,u,[-2.3,-.2,.3,-.2,.3,.2,-2.3,.2],rn[0]),i.shape(o,l,c,u,[-.1,.2*h,.3,.2*h,.3,.95*h,-.1,.95*h],rn[0]),i.shape(o,l,c,u,[-.65,.85*h,.85,.85*h,.1,2.15*h],rn[0])}else if(d===3){i.disc(o,l,.55*u,rn[0]);const h=Ne(c);i.disc(o+Math.cos(h)*.95*u,l-Math.sin(h)*.95*u,.24*u,rn[0])}else i.disc(o,l,.42*u,rn[2]),i.disc(o,l,.33*u,rn[4])}}const Kc=i=>i.map(t=>t/10);function _r(i,t,e){let n=!1;for(let s=0,r=e.length-2;s<e.length;r=s,s+=2)e[s+1]>t!=e[r+1]>t&&i<(e[r]-e[s])*(t-e[s+1])/(e[r+1]-e[s+1])+e[s]&&(n=!n);return n}function vo(i,t,e,n,s){const r=c=>Array.from({length:c.length/2},(u,d)=>new Pt(c[d*2],c[d*2+1])),a=r(t),o=e.map(r),l=a.concat(...o);for(const c of ms.triangulateShape(a,o)){const u=l[c[0]],d=l[c[1]],h=l[c[2]];(d.x-u.x)*(h.y-u.y)-(d.y-u.y)*(h.x-u.x)>0?i.tri(u.x,n,u.y,h.x,n,h.y,d.x,n,d.y,s):i.tri(u.x,n,u.y,d.x,n,d.y,h.x,n,h.y,s)}}function zg(i,t,e,n,s,r,a){const o=t.length/2,l=t.map((u,d)=>(d%2?n:e)+(u-(d%2?n:e))*.32),c=ur(t)>0;for(let u=0;u<o;u++){const d=(u+1)%o,h=t[u*2],f=t[u*2+1],g=t[d*2],_=t[d*2+1],m=l[u*2],p=l[u*2+1],v=l[d*2],y=l[d*2+1],M=Yt(a,.92+.14*(u%4/3));c?i.quad(g,s,_,h,s,f,m,r,p,v,r,y,M):i.quad(h,s,f,g,s,_,v,r,y,m,r,p,M)}vo(i,l,[],r,Yt(a,1.04))}function Zc(i,t,e,n,s,r,a,o,l,c){const u=t.length/2,d=ur(t)>0;for(let h=0;h<u;h++){const f=(h+1)%u,g=t[h*2],_=t[h*2+1],m=t[f*2]-g,p=t[f*2+1]-_,v=Math.hypot(m,p);if(v<4.5||c!=null&&c(g,_,t[f*2],t[f*2+1]))continue;i.frame(g,n,_,Math.atan2(-p,m));const y=(d?1:-1)*(e?-1:1),M=-y*.07,E=Math.max(1,Math.floor((v-1.25)/2.95)),S=(v-1.6-(E-1)*.35)/E;for(const x of s){const b=x*r+.95,I=b+Math.min(1.6,r-1.5);for(let C=0;C<E;C++){const R=.8+C*(S+.35),P=R+S,D=a()<.32?.85:.05;M>0?i.quad(R,b,M,P,b,M,P,I,M,R,I,M,vs,D):i.quad(P,b,M,R,b,M,R,I,M,P,I,M,vs,D)}if(o&&v>7){const C=-y*.02,R=-y*.62,P=I+.16,D=P+.14;i.box(.5,P,Math.min(C,R),v-.5,D,Math.max(C,R),Yt(l,.86),Yt(l,1.05),Yt(l,.7))}}}}function kg(i,t,e,n,s){const r=Hc[t.k]??Hc.other,a=Kc(t.p),o=t.h.map(Kc),l=a.length/2;let c=1/0,u=0,d=0,h=0;for(let P=0;P<l;P++){const D=e.yAt(a[P*2],a[P*2+1]);c=Math.min(c,D),u+=D,d+=a[P*2]/l,h+=a[P*2+1]/l}const f=Math.abs(ur(a)),g=a.filter((P,D)=>D%2===0),_=a.filter((P,D)=>D%2===1),m=Math.min(...g),p=Math.max(...g),v=Math.min(..._),y=Math.max(..._),M=!!r.pitched&&o.length===0&&t.a-t.e>1.1&&f<2600&&f/((p-m)*(y-v))>.55,E=u/l,S=E+t.e,x=S+(M?0:r.parapet);i.frame(),i.walls(a,c-.4,x,r.wall);for(const P of o)i.walls(P,c-.4,x,Yt(r.wall,.94));M?zg(i,a,d,h,S,E+t.a,r.roof):vo(i,a,o,S,r.roof);const b=Math.max(1,Math.round(t.e/r.storey)),I=t.e/b,C=r.windows==="none"?[]:r.windows==="ground"?[0]:Array.from({length:b},(P,D)=>D);if(I>=2.6){const P=(A,U,B)=>!!s&&Math.hypot(A-s.wall[B],U-s.wall[B+1])<1.5,D=t.k==="council"&&s?(A,U,B,z)=>P(A,U,0)&&P(B,z,2)||P(A,U,2)&&P(B,z,0):void 0;Zc(i,a,!1,E,C,I,n,!!r.shades,r.wall,D);for(const A of o)Zc(i,A,!0,E,C,I,n,!!r.shades,r.wall)}if(t.k==="hall"&&t.a-t.e>3){const P=a.map((D,A)=>(A%2?h:d)+(D-(A%2?h:d))*.5);i.frame(),i.walls(P,S,E+t.a*.92,Yt(r.wall,.96)),vo(i,P,[],E+t.a*.92,r.roof)}else if(!M&&t.k!=="council"&&t.k!=="community"){const P=Math.min(10,Math.floor(f/420));for(let D=0,A=0;D<P&&A<120;A++){const U=m+n()*(p-m),B=v+n()*(y-v);[[-3,-3],[3,-3],[3,3],[-3,3]].every(([J,H])=>_r(U+J,B+H,a)&&!o.some(Y=>_r(U+J,B+H,Y)))&&(i.frame(U,S,B,n()*.6),i.box(-1.3,0,-.9,1.3,1.1,.9,G(11119528),G(12764353)),D++)}}const R=(P,D)=>_r(P,D,a)&&!o.some(A=>_r(P,D,A));return{floor:E,roofY:S,top:x,wall:r.wall,onRoof:R}}function Gg(i,t,e,n,s,r){for(const[d,h,f,g,_]of t.solar){i.frame(d,n+.3,h,Ne(_));for(let m=0;m*1.25+1.05<=g;m++){const p=-g/2+m*1.25,v=p+1.05;for(let y=-f/2;y+2<=f/2;y+=5.5){const M=Math.min(y+5.2,f/2);[[y,p],[M,p],[M,v],[y,v]].every(([E,S])=>r(i.wx(E,S),i.wz(E,S)))&&i.quad(y,0,v,M,0,v,M,0,p,y,0,p,G(1911879))}}}for(const[d,h,f,g,_,m]of t.plant)i.frame(d,n,h,Ne(_)),i.box(-f/2,0,-g/2,f/2,m,g/2,G(10198426),G(12040630));const[a,o,l,c,u]=t.canopy;if(i.frame(a,e,o,Ne(u)),!t.entry){i.box(-l/2,4,-c/2,l/2,4.4,c/2,G(15658730),void 0,G(14277076));for(const[d,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.box(d*(l/2-.6)-.2,0,h*(c/2-.6)-.2,d*(l/2-.6)+.2,4,h*(c/2-.6)+.2,G(13619146))}for(let d=-2;d<=2;d++)i.cyl(d*2.2,0,c/2+1.6,.13,.13,.95,6,G(7172469),G(9080466));for(const d of[-1,1])i.box(d*(l/2+2.2)-.9,.38,-.25,d*(l/2+2.2)+.9,.48,.25,G(9071178)),i.box(d*(l/2+2.2)-.8,0,-.2,d*(l/2+2.2)-.7,.38,.2,Vi,null),i.box(d*(l/2+2.2)+.7,0,-.2,d*(l/2+2.2)+.8,.38,.2,Vi,null);i.frame(t.mast[0],n,t.mast[1]),i.cyl(0,0,0,.32,.12,e+s-n,6,G(13159116)),i.box(-.25,e+s-n,-.25,.25,e+s-n+.5,.25,G(13650490),void 0,null,1)}function $c(i){const[t,e,n,s]=i.wall,r=Math.hypot(n-t,s-e),a=(n-t)/r,o=(s-e)/r,l=(i.flags[0]/10-t)*-o+(i.flags[1]/10-e)*a>0?1:-1;return{ax:t,az:e,len:r,ux:a,uz:o,nx:-o*l,nz:a*l}}function Hg(i,t,e,n,s){const r=$c(t),a=Yt(s,.8);i.frame();const o=(D,A)=>[r.ax+r.ux*D+r.nx*A,r.az+r.uz*D+r.nz*A];for(let D=4.6;D<r.len-1;D+=4.6){const[A,U]=o(D-.03,.03),[B,z]=o(D+.03,.03);i.quad(A,e-.4,U,B,e-.4,z,B,n,z,A,n,U,a)}for(const D of[e+2.9,e+6.2]){const[A,U]=o(.1,.03),[B,z]=o(r.len-.1,.03);i.quad(A,D-.025,U,B,D-.025,z,B,D+.025,z,A,D+.025,U,a)}const l=t.roof,c=l.length/2;let u=0,d=0;for(let D=0;D<c;D++)u+=l[D*2]/c,d+=l[D*2+1]/c;const[h,f,g,_]=t.doors,m=Math.hypot(g-h,_-f),p=(D,A)=>e+5+.36*Math.abs((D-h)*-(_-f)+(A-f)*(g-h))/m,v=[];for(let D=0;D<c;D++){const A=u+(l[D*2]-u)*1.14,U=d+(l[D*2+1]-d)*1.14;v.push([A,p(A,U),U])}const y=.55,M=G(15328988);for(let D=0;D<c;D++){const A=v[D],U=v[(D+1)%c];if(i.quad(A[0],A[1],A[2],U[0],U[1],U[2],U[0],U[1]+y,U[2],A[0],A[1]+y,A[2],M),D>0&&D<c-1){const B=v[0];i.tri(B[0],B[1],B[2],A[0],A[1],A[2],U[0],U[1],U[2],G(15722191)),i.tri(B[0],B[1]+y,B[2],U[0],U[1]+y,U[2],A[0],A[1]+y,A[2],G(14474454))}}for(let D=1;D<c-1;D++){const A=u+(l[D*2]-u)*.9,U=d+(l[D*2+1]-d)*.9;i.box(A-.22,e-.4,U-.22,A+.22,p(A,U),U+.22,G(14078664),null)}const E=Math.min(m/2-.3,1.9),S=(h+g)/2,x=(f+_)/2,b=(g-h)/m,I=(_-f)/m,C=(u-S)*-I+(d-x)*b>0?1:-1,R=-I*C*.07,P=b*C*.07;i.quad(S-b*E+R,e,x-I*E+P,S+b*E+R,e,x+I*E+P,S+b*E+R,e+2.7,x+I*E+P,S-b*E+R,e+2.7,x-I*E+P,vs,.6)}function Vg(i,t){if(typeof document>"u")return null;const[e,n,s,r]=i.sign,a=document.createElement("canvas");a.width=4096,a.height=Math.round(4096*s/n);const o=a.getContext("2d");if(!o)return null;const l=a.width/n,c=(E,S,x,b,I,C,R="#2a2a2b")=>{o.fillStyle=R,o.font=`${C} ${Math.round(I/.716*l)}px "Arial Black", "Helvetica Neue", Arial, sans-serif`,o.letterSpacing="0.12em";const P=o.measureText(E).width;o.save(),o.translate(S*l,b*l),o.scale((x-S)*l/P,1),o.fillText(E,0,0),o.restore()};c("LOGAN CITY COUNCIL",1.5,12,.74,.58,900),c("ADMINISTRATION CENTRE",1.5,8.9,1.36,.3,700),c("150 WEMBLEY ROAD",1.5,7,1.96,.3,700);const u="#1f2a5c",d=s/2*l,h=(E,S,x,b)=>{o.beginPath(),o.arc(E*l,d,S*l,0,Math.PI*2),o.strokeStyle=x,o.lineWidth=b*l,o.stroke()};for(const E of[.66,n-.66])o.beginPath(),o.arc(E*l,d,.64*l,0,Math.PI*2),o.fillStyle="#f6f5f0",o.fill(),h(E,.62,u,.025),h(E,.55,u,.012);{const E=(n-.66)*l,S=.55*l,x=d+.02*S,b=(C,R,P,D,A,U,B)=>{o.beginPath(),o.moveTo(E,x),o.quadraticCurveTo(E+P*S,d+D*S,E+C*S,d+R*S),o.quadraticCurveTo(E+A*S,d+U*S,E,x),o.fillStyle=B,o.fill()};b(-.56,-.42,-.5,.04,-.2,-.36,u),b(.56,-.42,.5,.04,.2,-.36,u),b(-.3,-.6,-.36,-.3,-.06,-.32,"#c5462f"),b(.3,-.6,.36,-.3,.06,-.32,"#8e2b3b");const I=o.createLinearGradient(0,d-.74*S,0,x);I.addColorStop(0,"#f8cf4a"),I.addColorStop(1,"#ee8527"),b(0,-.74,-.2,-.36,.2,-.36,I),o.fillStyle=u,o.fillRect(E-.02*S,x,.04*S,.1*S),o.textAlign="center",o.font=`600 ${Math.round(.15*S)}px "Helvetica Neue", Arial, sans-serif`,o.fillText("CITY OF",E,d+.3*S),o.font=`800 ${Math.round(.33*S)}px "Helvetica Neue", Arial, sans-serif`,o.fillText("LOGAN",E,d+.64*S),o.textAlign="left"}{const E=.66*l,S=.55*l;o.setLineDash([.02*l,.018*l]),h(.66,.48,"#55606a",.035),o.setLineDash([]);const x=()=>{o.beginPath(),o.moveTo(E-.42*S,d-.52*S),o.quadraticCurveTo(E-.2*S,d-.44*S,E,d-.56*S),o.quadraticCurveTo(E+.2*S,d-.44*S,E+.42*S,d-.52*S),o.lineTo(E+.42*S,d+.12*S),o.quadraticCurveTo(E+.4*S,d+.46*S,E,d+.66*S),o.quadraticCurveTo(E-.4*S,d+.46*S,E-.42*S,d+.12*S),o.closePath()};o.save(),x(),o.clip(),o.fillStyle="#1e4a39",o.fillRect(E-S,d-S,2*S,2*S),o.fillStyle="#a9cbe8",o.fillRect(E-S,d-.04*S,2*S,.2*S),o.fillStyle="#3f78b5",o.fillRect(E-S,d+.14*S,2*S,.14*S),o.fillStyle="#2c5e3d",o.beginPath(),o.moveTo(E-S,d+.34*S),o.quadraticCurveTo(E-.2*S,d+.16*S,E+.1*S,d+.3*S),o.quadraticCurveTo(E+.3*S,d+.2*S,E+S,d+.32*S),o.lineTo(E+S,d+S),o.lineTo(E-S,d+S),o.fill(),o.fillStyle="#f4f3ee";for(const[b,I,C]of[[-.18,-.26,.085],[.2,-.36,.045],[.24,-.14,.045],[.02,-.4,.04]]){o.beginPath();for(let R=0;R<8;R++){const P=R/8*Math.PI*2,D=(R%2?.38:1)*C*S;o.lineTo(E+b*S+Math.sin(P)*D,d+I*S-Math.cos(P)*D)}o.fill()}o.restore(),x(),o.strokeStyle="#1c2b33",o.lineWidth=.02*l,o.stroke()}const f=$c(i),g=e-n/2,_=t+r-s/2,m=(E,S)=>[f.ax+f.ux*E+f.nx*.08,S,f.az+f.uz*E+f.nz*.08],p=new Me;p.setAttribute("position",new Ht(new Float32Array([...m(g,_),...m(g+n,_),...m(g+n,_+s),...m(g,_+s)]),3)),p.setAttribute("normal",new Ht(new Float32Array([0,1,2,3].flatMap(()=>[f.nx,0,f.nz])),3)),p.setAttribute("uv",new Ht(new Float32Array([0,0,1,0,1,1,0,1]),2));const v=-f.uz*f.nx+f.ux*f.nz>0;p.setIndex(v?[0,1,2,0,2,3]:[0,2,1,0,3,2]);const y=new qa(a);y.colorSpace=De,y.anisotropy=8;const M=new ne(p,new yn({map:y,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,side:Oe}));return M.name="precinct-name",M}const Wg=G(1452138),xr=G(16053488),Jc=G(13115436);function Xg(i,t,e){for(let s=0;s<t.flags.length;s+=3){const r=t.flags[s]/10,a=t.flags[s+1]/10,o=s/3;i.frame(r,e.yAt(r,a)+sn,a,Ne(t.flags[s+2]/10)),i.cyl(0,0,0,.06,.045,7.2,6,G(14277596),G(13214266));const l=(u,d,h,f,g,_=0)=>{for(const m of _?[_*.012,-_*.012]:[0])i.quad(.08+u*1.8,6.15+d*.9,m,.08+h*1.8,6.15+d*.9,m,.08+h*1.8,6.15+f*.9,m,.08+u*1.8,6.15+f*.9,m,g)},c=(u,d,h,f)=>{for(const g of[.012,-.012])for(let _=0;_<8;_++){const m=_/8*Math.PI*2,p=(_+1)/8*Math.PI*2,v=M=>.08+(u+Math.cos(M)*h*.5)*1.8,y=M=>6.15+(d+Math.sin(M)*h)*.9;i.tri(.08+u*1.8,6.15+d*.9,g,v(m),y(m),g,v(p),y(p),g,f)}};if(o===0){l(0,0,1,1,Wg),l(0,.68,.5,.82,xr,1),l(.2,.5,.3,1,xr,1),l(0,.72,.5,.78,Jc,2),l(.225,.5,.275,1,Jc,2);for(const[u,d,h]of[[.25,.25,.11],[.75,.8,.06],[.62,.5,.06],[.75,.2,.06],[.88,.56,.06]])c(u,d,h,xr)}else o===1?(l(0,.5,1,1,G(1184274)),l(0,0,1,.5,G(13115436)),c(.5,.5,.25,G(16240919))):o===2?(l(0,.8,1,1,G(2067020)),l(0,.74,1,.8,G(1184274)),l(0,.26,1,.74,G(1920924)),l(0,.2,1,.26,G(1184274)),l(0,0,1,.2,G(2067020)),c(.5,.5,.15,xr)):l(0,0,1,1,G(15910685))}for(let s=0;s<t.hedges.length;s+=4){const r=t.hedges[s]/10,a=t.hedges[s+1]/10,o=t.hedges[s+2]/10,l=t.hedges[s+3]/10;i.frame(r,(e.yAt(r,a)+e.yAt(o,l))/2+sn-.1,a,Math.atan2(-(l-a),o-r));const c=Math.hypot(o-r,l-a),u=[G(4881726),G(5671492),G(4486714)];i.box(0,0,-.42,c,.82,.42,G(4157239),G(5211202));for(let d=0,h=.45;h<c-.2;d++,h+=.82){const f=u[(s+d)%3],g=.6+d*7%5*.03;i.blob(h,.56,0,g,.56,g,6,3,Yt(f,.82),Yt(f,1.12))}}for(let s=0;s<t.tufts.length;s+=2){const r=t.tufts[s]/10,a=t.tufts[s+1]/10;i.frame(r,e.yAt(r,a)+sn,a,s);for(let o=0;o<6;o++){const l=o/6*Math.PI*2,c=Math.cos(l),u=Math.sin(l);i.tri(-u*.09,0,c*.09,u*.09,0,-c*.09,c*.42,1.25,u*.42,G(o%2?8201016:6102317))}}i.frame();const n=G(9409430);for(let s=0;s<t.rails.length;s+=4){const r=t.rails[s]/10,a=t.rails[s+1]/10,o=t.rails[s+2]/10,l=t.rails[s+3]/10,c=e.yAt(r,a)+sn,u=e.yAt(o,l)+sn,d=Math.max(2,Math.round(Math.hypot(o-r,l-a)/1.4)+1);for(const h of[.5,.98])ys(i,r,c+h,a,o,u+h,l,.025,.025,n);for(let h=0;h<d;h++){const f=h/(d-1),g=r+(o-r)*f,_=a+(l-a)*f,m=c+(u-c)*f;i.box(g-.03,m,_-.03,g+.03,m+.98,_+.03,n,null)}}}const Ms=G(3095882),qg=G(1710877),Qc=G(11120048),jc=G(16774358),th=G(13771548);function an(i,t,e,n){for(const s of[-1,1]){const r=s*(t+.04),a=s*(t-.24);i.box(Math.min(r,a),0,e-n,Math.max(r,a),n*2,e+n,qg,null);const o=s*(t+.05),l=n*.45;s>0?i.quad(o,n-l,e+l,o,n-l,e-l,o,n+l,e-l,o,n+l,e+l,Qc):i.quad(o,n-l,e-l,o,n-l,e+l,o,n+l,e+l,o,n+l,e-l,Qc)}}function Ss(i,t,e,n,s,r,a,o,l){const c=t-.09;i.quad(-t,e,r,t,e,r,c,n,o,-c,n,o,Ms),i.quad(t,e,s,-t,e,s,-c,n,a,c,n,a,Ms),i.quad(t,e,r,t,e,s,c,n,a,c,n,o,Ms),i.quad(-t,e,s,-t,e,r,-c,n,o,-c,n,a,Ms),i.quad(-c,n,o,c,n,o,c,n,a,-c,n,a,l)}function Wi(i,t,e,n,s,r,a,o=.16){const l=a?-1:0,c=a?-.85:0,u=n+.012;for(const d of[-1,1]){const h=d*(t-.27)-.17,f=h+.34;i.quad(h,e,s+.015,f,e,s+.015,f,e+o,s+.015,h,e+o,s+.015,jc,l),i.quad(h,u,s,f,u,s,f,u,s-.2,h,u,s-.2,jc,l),i.quad(f,e,r-.015,h,e,r-.015,h,e+o,r-.015,f,e+o,r-.015,th,c),i.quad(h,u,r+.2,f,u,r+.2,f,u,r,h,u,r,th,c)}}function Yg(i){const s=G(15659247),r=G(2067078),a=G(16753951);an(i,1.25,3.7,.48),an(i,1.25,-3.3,.48),i.box(-1.25,.34,-6.1,1.25,.98,6.1,s,null),i.box(-1.25,.98,-6.1,1.25,1.28,6.1,r,null),i.box(-1.25,1.28,-6.1,1.25,2.3,6.1,Ms,null),i.box(-1.25,2.3,-6.1,1.25,3.02,6.1,s,G(14277851)),i.box(-.8,3.02,-3.4,.8,3.24,-.6,G(12896456));for(const[o,l]of[[4.2,5.4],[-.9,.5]])i.quad(1.27,.42,l,1.27,.42,o,1.27,2.3,o,1.27,2.3,l,G(1449252));i.quad(-.95,2.42,6.119999999999999,.95,2.42,6.119999999999999,.95,2.86,6.119999999999999,-.95,2.86,6.119999999999999,a,-.9),Wi(i,1.25,.6,3.02,6.1,-6.1,!0,.2)}function eh(i,t,e){const n=G(2763823);for(let s=0;s<t.length;s+=4){const r=t[s]/10,a=t[s+1]/10,o=t[s+3];if(i.frame(r,e.yAt(r,a)+sn,a,Ne(90+t[s+2]/10)),o>=100){Yg(i);continue}const l=o>=20,c=s/4,u=(c*7+o%20*3)%10,d=Vc[u===9&&c%3?0:o%Vc.length],h=Yt(d,.93);u<=3?(an(i,.89,1.42,.32),an(i,.89,-1.38,.32),i.box(-.89,.26,-2.3,.89,.8,2.3,d),Ss(i,.84,.8,1.42,-1.6,1,-1,.42,h),Wi(i,.89,.56,.8,2.3,-2.3,l)):u<=5?(an(i,.87,1.25,.31),an(i,.87,-1.3,.31),i.box(-.87,.26,-2,.87,.84,2,d),Ss(i,.82,.84,1.47,-1.95,.85,-1.62,.3,h),Wi(i,.87,.58,.84,2,-2,l)):u<=7?(an(i,.94,1.45,.37),an(i,.94,-1.42,.37),i.box(-.94,.33,-2.35,.94,1,2.35,d),Ss(i,.89,1,1.74,-2.3,1,-2.05,.5,h),Wi(i,.94,.72,1,2.35,-2.35,l)):u===8?(an(i,.93,1.7,.37),an(i,.93,-1.65,.37),i.box(-.93,.33,0,.93,.98,2.65,d),i.box(-.93,.33,-2.65,.93,.98,0,d,n),Ss(i,.88,.98,1.72,.05,1.5,.2,1.05,h),Wi(i,.93,.7,.98,2.65,-2.65,l)):(an(i,.97,1.75,.35),an(i,.97,-1.6,.35),i.box(-.97,.3,-2.6,.97,1.08,2.6,d),i.box(-.97,1.08,-2.6,.97,2.02,1.2,d,h),Ss(i,.97,1.08,2.02,1.2,2.3,1.2,1.72,h),Wi(i,.97,.66,1.08,2.6,-2.6,l))}}const nh=G(7297605),ih=G(13353648),sh=[7047774,8033384,6258520].map(G),rh=[9336009,10849248,8020664].map(G),Kg=G(3495996);function ys(i,t,e,n,s,r,a,o,l,c){const u=s-t,d=r-e,h=a-n,f=Math.hypot(u,d,h)||1;let g=-h,_=u;const m=Math.hypot(g,_);m<1e-6?(g=1,_=0):(g/=m,_/=m);const p=d/f*_,v=h/f*g-u/f*_,y=-(d/f)*g,M=(E,S,x,b,I)=>[x+(g*Math.cos(E)+p*Math.sin(E))*S,b+v*Math.sin(E)*S,I+(_*Math.cos(E)+y*Math.sin(E))*S];for(let E=0;E<4;E++){const S=E/4*Math.PI*2,x=(E+1)/4*Math.PI*2,b=M(S,o,t,e,n),I=M(x,o,t,e,n),C=M(x,l,s,r,a),R=M(S,l,s,r,a);i.quad(b[0],b[1],b[2],I[0],I[1],I[2],C[0],C[1],C[2],R[0],R[1],R[2],c)}}function ah(i,t,e,n){for(let s=0;s<t.length;s+=4){const r=t[s]/10,a=t[s+1]/10,o=t[s+2]/10,l=t[s+3];if(!n(o,l))continue;const c=Bi(5e3+t[s]*5+t[s+1]*9),u=c()*Math.PI*2,d=Hi[Math.floor(c()*Hi.length)];if(i.frame(r,e.yAt(r,a),a,u),l===1||l===5){const h=l===5,f=h?13+c()*4.5:6.5+c()*4.5,g=Math.max(o,2.2)*(h?1.12:1),_=G(5012799),m=G(7643735),p=h?15:12,v=h?.4:.52;h?(i.cyl(0,0,0,.21,.14,f-1.2,6,G(10985877)),i.cyl(0,f-1.2,0,.17,.12,1.25,6,G(8823647))):(i.cyl(0,0,0,.26,.17,f,5,G(9075302)),i.blob(0,f+.1,0,.5,.45,.5,5,3,_));const y=g/3.3,M=[[1.5,2,1.2],[1,1,-.2],[.6,.2,-1.5]];for(let E=0;E<p;E++){const S=E/p*Math.PI*2+c()*.3,x=Math.cos(S),b=Math.sin(S),I=M[E%3],C=E%2?_:m,R=(H,Y,tt,gt)=>[x*g*H-b*tt*gt,f+Y*y,b*g*H+x*tt*gt],P=R(0,0,.12,-1),D=R(0,0,.12,1),A=R(.35,I[0],v,-1),U=R(.35,I[0],v,1),B=R(.75,I[1],v*.9,-1),z=R(.75,I[1],v*.9,1),J=R(1.1,I[2],0,0);i.quad(P[0],P[1],P[2],D[0],D[1],D[2],U[0],U[1],U[2],A[0],A[1],A[2],C),i.quad(A[0],A[1],A[2],U[0],U[1],U[2],z[0],z[1],z[2],B[0],B[1],B[2],Yt(C,.94)),i.tri(B[0],B[1],B[2],z[0],z[1],z[2],J[0],J[1],J[2],Yt(C,.88))}}else if(l===2){const h=(5+o*1.5)*.52,f=sh[Math.floor(c()*sh.length)];i.cyl(0,0,0,.22+o*.03,.15,h+.2,5,ih);for(let g=0;g<3;g++){const _=g*2.09+c()*.8,m=o*(.42+.22*c()),p=h*(1.65+.5*c()),v=o*(.44+.14*c());ys(i,0,h,0,Math.cos(_)*m,p,Math.sin(_)*m,.13,.06,ih),i.blob(Math.cos(_)*m,p+v*.3,Math.sin(_)*m,v,v*.62,v,6,3,Yt(f,.8),Yt(f,1.16))}}else if(l===3){const h=1.8+o*.5,f=rh[Math.floor(c()*rh.length)];i.cyl(0,0,0,.18+o*.03,.14,h+.2,5,G(5982780));for(let g=0;g<3;g++){const _=g*2.09+c()*.6,m=o*.52,p=h+o*.5;ys(i,0,h,0,Math.cos(_)*m,p,Math.sin(_)*m,.11,.06,G(5982780)),i.blob(Math.cos(_)*m,p+o*.16,Math.sin(_)*m,o*.56,o*.36,o*.56,6,3,Yt(f,.82),Yt(f,1.12))}i.blob(0,h+o*.86,0,o*.5,o*.34,o*.5,6,3,Yt(f,.86),Yt(f,1.15))}else if(l===4){const h=4+o*2.2;i.cyl(0,0,0,.16,.1,h*.3,5,nh);for(let f=0;f<3;f++)i.cyl(0,h*(.18+.26*f),0,o*(.78-.2*f),.02,h*.38,6,Yt(Kg,.9+.1*f))}else{const h=1.6+o*.75,f=o>4.5?3:o>2.6?2:0;i.cyl(0,0,0,.2+o*.035,.16+o*.02,h+o*.3,5,nh),i.blob(0,h+o*.62,0,o*(f?.86:1),o*.72,o*(f?.86:1),o>7?9:7,o>7?5:4,Yt(d,.82),Yt(d,1.18));for(let g=0;g<f;g++){const _=g*(6.283/f)+c(),m=o*(.48+.12*c());i.blob(Math.cos(_)*o*.5,h+o*(.42+.25*c()),Math.sin(_)*o*.5,m,m*.72,m,6,3,Yt(d,.78),Yt(d,1.12))}}}}function Zg(i,t,e){for(let n=0;n<t.length;n+=3){const s=t[n]/10,r=t[n+1]/10,a=t[n+2]/10;i.frame(s,e.yAt(s,r),r),i.cyl(0,0,0,.11,.08,a,5,Vi),i.box(-.7,a,-.22,.7,a+.16,.22,G(14211282),void 0,G(16773832),1)}}function zn(i,t,e,n,s,r,a,o,l,c=0,u=.05){t===0?i.quad(s,a,n/2+u,r,a,n/2+u,r,o,n/2+u,s,o,n/2+u,l,c):t===1?i.quad(r,a,-n/2-u,s,a,-n/2-u,s,o,-n/2-u,r,o,-n/2-u,l,c):t===2?i.quad(e/2+u,a,r,e/2+u,a,s,e/2+u,o,s,e/2+u,o,r,l,c):i.quad(-e/2-u,a,s,-e/2-u,a,r,-e/2-u,o,r,-e/2-u,o,s,l,c)}function $g(i,t,e,n){const s=G(12368043),r=G(9409430);for(let a=0;a<t.length;a+=9){const o=Bi(9001+t[a]*7+t[a+1]*13),l=t[a]/10,c=t[a+1]/10,u=t[a+2]/10,d=t[a+3]/10,h=t[a+5]/10,f=Math.max(t[a+6]/10,h+.25),g=t[a+7],_=e.yAt(l,c);i.frame(l,_,c,-Ne(t[a+4]/10));const m=u*d<46||h<2.35,p=m?G(o()<.5?12172474:13617851):Wc[Math.floor(o()*Wc.length)],v=m?G(o()<.5?10988200:8225926):Xc[Math.floor(o()*Xc.length)];i.box(-u/2,-.6,-d/2,u/2,h,d/2,p,null);const y=m?.15:.45,M=u/2+y,E=d/2+y,S=m||o()<.32,x=S?M:Math.max(.2,M-E*.9),b=Yt(v,1.06),I=Yt(v,.9),C=Yt(v,.98);if(i.quad(-M,h,E,M,h,E,x,f,0,-x,f,0,b),i.quad(M,h,-E,-M,h,-E,-x,f,0,x,f,0,I),S?(i.tri(M-y,h,d/2,M-y,h,-d/2,M-y,f,0,p),i.tri(-M+y,h,-d/2,-M+y,h,d/2,-M+y,f,0,p)):(i.tri(M,h,E,M,h,-E,x,f,0,C),i.tri(-M,h,-E,-M,h,E,-x,f,0,C)),m){u>4.5&&h>2.1&&zn(i,g,u,d,-1.3,1.3,0,Math.min(2.1,h-.15),G(14934488));continue}const R=Bi(4242+t[a]*3+t[a+1]*11),P=R()<.6?G(15855592):G(4014405),D=(ot,Nt,kt)=>ot===0?[Nt,d/2+kt]:ot===1?[Nt,-d/2-kt]:ot===2?[u/2+kt,Nt]:[-u/2-kt,Nt],A=(ot,Nt,kt,de,oe,Je,ge,be,Qe)=>{const[We,O]=D(ot,Nt,de),[Xe,le]=D(ot,kt,oe);i.box(Math.min(We,Xe),Je,Math.min(O,le),Math.max(We,Xe),ge,Math.max(O,le),be,Qe)};i.quad(-M,h-.2,E,M,h-.2,E,M,h,E,-M,h,E,P),i.quad(M,h-.2,-E,-M,h-.2,-E,-M,h,-E,M,h,-E,P),S||(i.quad(M,h-.2,E,M,h-.2,-E,M,h,-E,M,h,E,P),i.quad(-M,h-.2,-E,-M,h-.2,E,-M,h,E,-M,h,-E,P));const U=-Ne(t[a+4]/10),B=Math.cos(U)<0?1:-1,z=(S?M:x+.25*(M-x))-.5,J=Math.min(z,2.4+R()*1.4);if(R()<.38&&J>1&&f-h>.5){const ot=(R()-.5)*(z-J)*2,Nt=kt=>h+(f-h)*(1-kt)+.07;i.quad(ot-J,Nt(.74),B*E*.74,ot+J,Nt(.74),B*E*.74,ot+J,Nt(.26),B*E*.26,ot-J,Nt(.26),B*E*.26,G(1780295))}if(R()<.45){const ot=(R()-.5)*x;i.box(ot-.03,f-.1,-.03,ot+.03,f+1.5,.03,r,null),i.box(ot-.5,f+1.28,-.02,ot+.5,f+1.32,.02,r),i.box(ot-.35,f+1.03,-.02,ot+.35,f+1.07,.02,r)}R()<.3&&i.cyl((R()-.5)*x,h+(f-h)*.5-.05,-B*E*.5,.19,.19,.34,6,G(12106940),G(13619922));const H=g^1,Y=g<2?R()<.5?2:3:R()<.5?0:1,tt=Y<2?u:d,gt=H<2?u:d;if(R()<.3){const[ot,Nt]=D(Y,(R()<.5?1:-1)*(tt/2-1.3),1.25),kt=R()<.5?G(8359802):G(13223088);i.cyl(ot,0,Nt,1,1,2,8,kt,Yt(kt,.88))}if(R()<.55){const ot=(R()-.5)*gt*.5;A(H,ot-.42,ot+.42,0,.34,.1,.78,G(14277334))}if(R()<.42){const[ot,Nt]=D(H,(R()-.5)*gt*.4,3.4+R()*1.6);i.box(ot-.035,0,Nt-.035,ot+.035,2,Nt+.035,r,null),i.box(ot-1.15,1.95,Nt-.03,ot+1.15,2,Nt+.03,r),i.box(ot-.03,1.95,Nt-1.15,ot+.03,2,Nt+1.15,r)}const Lt=h>5.1?[1,3.75]:[1],K=Math.max(1,Math.floor(u/3.7));for(const ot of[0,1])for(const Nt of Lt)for(let kt=0;kt<K;kt++){const de=-u/2+u*(kt+.5)/K;if(!(ot===g&&Nt<2&&(kt===0||kt===Math.floor(K/2)))&&(zn(i,ot,u,d,de-.86,de+.86,Nt-.1,Nt+1.26,P,0,.03),zn(i,ot,u,d,de-.75,de+.75,Nt,Nt+1.15,vs,o()<.45?.7:.04),ot===g&&Nt<2)){const[oe,Je]=D(g,de,.75),ge=Hi[(a+kt)%Hi.length],be=.42+R()*.2;i.blob(oe,be*.6,Je,be,be*.75,be,6,3,Yt(ge,.78),Yt(ge,1.1))}}for(const ot of[2,3])zn(i,ot,u,d,-.81,.81,.9,2.26,P,0,.03),zn(i,ot,u,d,-.7,.7,1,2.15,vs,o()<.4?.7:.04);const it=g<2?u:d,St=qc[Math.floor(o()*qc.length)];let Et,lt,Mt;if(g<2){const ot=-it/2+it*.5/K,Nt=Math.min(1.35,it/K/2-.2);Et=ot-Nt,lt=ot+Nt,Mt=-it/2+it*(Math.floor(K/2)+.5)/K}else Et=-it/2+.5,lt=-it/2+3.1,Mt=it/2-1.4;zn(i,g,u,d,Et,lt,0,2.15,G(14868437));for(const ot of[.54,1.08,1.62])zn(i,g,u,d,Et,lt,ot,ot+.03,G(11118495),0,.07);zn(i,g,u,d,Mt-.62,Mt+.62,0,2.22,P,0,.03),zn(i,g,u,d,Mt-.5,Mt+.5,0,2.1,St);const ee=Math.min(2.5,h-.2);if(A(g,Mt-.8,Mt+.8,0,.6,-.4,.3,s),R()<.6&&ee>2.1){A(g,Mt-1.75,Mt+1.75,0,1.75,-.4,.3,s),A(g,Mt-1.85,Mt+1.85,0,1.85,ee,ee+.14,P,Yt(v,.95));for(const ot of[-1.68,1.68])A(g,Mt+ot-.06,Mt+ot+.06,1.58,1.7,.3,ee,P,null)}const Ct=G(3104058);A(g,-it/2-.95,-it/2-.4,-1.15,-.6,0,1,Ct,G(11022890)),A(g,-it/2-.95,-it/2-.4,-1.85,-1.3,0,1,Ct,G(14268718));const Jt=(t[a+8]??0)/10,qt=Math.min(Jt-.4,14);if(qt>2.5){const[ot,Nt]=D(g,Mt,.5),[kt,de]=D(g,Mt,qt);n.line(i.wx(ot,Nt),i.wz(ot,Nt),i.wx(kt,de),i.wz(kt,de),1,rn[2]),qt>4.5&&(A(g,Mt+.84,Mt+.96,qt-2.56,qt-2.44,0,.95,r,null),A(g,Mt+.7,Mt+1.1,qt-2.64,qt-2.36,.95,1.24,P))}}}function Jg(i,t,e){i.frame();for(let n=0;n<t.length;n+=4){const s=t[n]/10,r=t[n+1]/10,a=t[n+2]/10,o=t[n+3]/10,l=Yc[n/4%Yc.length],c=Math.max(1,Math.round(Math.hypot(a-s,o-r)/6));for(let u=0;u<c;u++){const d=s+(a-s)*u/c,h=r+(o-r)*u/c,f=s+(a-s)*(u+1)/c,g=r+(o-r)*(u+1)/c,_=e.yAt(d,h),m=e.yAt(f,g),p=1.7;i.quad(d,_,h,f,m,g,f,m+p,g,d,_+p,h,l),i.quad(f,m,g,d,_,h,d,_+p,h,f,m+p,g,Yt(l,.9))}}}function Qg(i,t,e,n){for(let u=0;u<e.lamps.length;u+=3){const d=e.lamps[u]/10,h=e.lamps[u+1]/10;i.frame(d,n.yAt(d,h),h,Ne(e.lamps[u+2]/10)),i.cyl(0,0,0,.12,.08,9.2,5,Vi),i.box(0,9.05,-.06,2.4,9.18,.06,Vi),i.box(1.7,8.9,-.24,2.6,9.05,.24,G(14211282),void 0,G(16773832),1)}for(let u=0;u<e.masts.length;u+=4){const d=e.masts[u]/10,h=e.masts[u+1]/10,f=e.masts[u+3]/10;i.frame(d,n.yAt(d,h),h,Ne(e.masts[u+2]/10));for(const g of[-1,1])i.box(-.14,0,g*f-.14,.14,7.6,g*f+.14,G(7830398));i.box(-.12,7.2,-f,.12,7.5,f,G(7830398));for(let g=-f+2.2;g<f-1;g+=4.2)i.box(-.04,6.1,g-.04,.04,7.2,g+.04,G(6251366),null)}for(let u=0;u<e.shelters.length;u+=3){const d=e.shelters[u]/10,h=e.shelters[u+1]/10;i.frame(d,n.yAt(d,h),h,Ne(e.shelters[u+2]/10)),i.box(-2.2,2.45,-.9,2.2,2.6,.9,G(15329764),void 0,G(13619146));for(const f of[-2,2])i.box(f-.07,0,.7,f+.07,2.45,.84,Vi,null);i.box(-2.1,.3,.74,2.1,2.2,.8,G(7309203)),i.box(-1.6,.42,.2,1.6,.5,.62,G(9071178))}const s=G(7034692),r=G(2961201);let a=null;for(let u=0;u<e.wires.length;u+=4){const d=e.wires[u]/10,h=e.wires[u+1]/10,f=n.yAt(d,h);i.frame(d,f,h,Ne(e.wires[u+2]/10)),i.cyl(0,0,0,.17,.12,9.6,5,s),i.box(-.07,8.75,-1.15,.07,8.9,1.15,s);const g=[-1.05,0,1.05].map(_=>[i.wx(0,_),f+8.95,i.wz(0,_)]);if(a)for(let _=0;_<3;_++){const[m,p,v]=a[_],[y,M,E]=g[_],S=(m+y)/2,x=(p+M)/2-.55,b=(v+E)/2;ys(t,m,p,v,S,x,b,.022,.022,r),ys(t,S,x,b,y,M,E,.022,.022,r)}a=e.wires[u+3]?g:null}const o=G(9409430),l=G(13119530),c=G(15921644);for(let u=0;u<e.signs.length;u+=4){const d=e.signs[u]/10,h=e.signs[u+1]/10,f=e.signs[u+3];if(i.frame(d,n.yAt(d,h)+sn,h,Ne(e.signs[u+2]/10)),f===4){i.box(-.27,0,-.27,.27,.95,.27,G(4020805),G(2500650));continue}if(f===5){i.cyl(0,0,0,.09,.09,.72,6,G(3882561)),i.cyl(0,.72,0,.1,.1,.16,6,G(15985360),null,1),i.cyl(0,.88,0,.11,.11,.05,6,G(3882561),G(3882561));continue}if(f===6){const g=G(9071178);i.box(-.25,.42,-.95,.25,.48,.95,g),i.box(-.3,.48,-.95,-.24,.92,.95,g);for(const _ of[-.8,.8])i.box(-.24,0,_-.04,.22,.42,_+.04,o,null);continue}if(f===7){i.box(-.06,0,-.32,.06,2.3,.32,G(2051974)),i.quad(.065,1.55,.26,.065,1.55,-.26,.065,2.05,-.26,.065,2.05,.26,c);continue}if(i.cyl(0,0,0,.04,.04,f===3?2.75:2.4,4,o),f===0)i.tri(.04,2.42,.46,.04,2.42,-.46,.04,1.62,0,l),i.tri(.055,2.34,.31,.055,2.34,-.31,.055,1.8,0,c);else if(f===1)i.box(-.02,2,-.55,.02,2.6,-.05,G(15904798));else if(f===2){i.box(-.02,1.7,-.3,.02,2.3,.3,G(2908072));const g=(_,m,p,v)=>i.quad(.03,p,_,.03,p,m,.03,v,m,.03,v,_,c);g(.06,.14,1.8,2.2),g(-.12,.06,2.13,2.2),g(-.12,-.05,2,2.2),g(-.12,.06,2,2.06)}else i.box(-.5,2.5,-.015,.5,2.7,.015,G(2059077))}for(let u=0;u<e.signals.length;u+=2){const d=e.signals[u]/10,h=e.signals[u+1]/10;i.frame(d,n.yAt(d,h),h,u/2*1.57),i.cyl(0,0,0,.1,.09,3.9,5,G(5593436)),i.box(-.2,3,-.16,.2,4.1,.16,G(2763822));for(const[f,g]of[G(13646383),G(14722346),G(3844186)].entries())i.quad(-.11,3.78-f*.34,.17,.11,3.78-f*.34,.17,.11,3.98-f*.34,.17,-.11,3.98-f*.34,.17,g)}}function jg(i,t,e){for(let n=0;n<t.shrubs.length;n+=3){const s=t.shrubs[n]/10,r=t.shrubs[n+1]/10,a=t.shrubs[n+2]/10,o=Hi[n/3%Hi.length];i.frame(s,e.yAt(s,r),r,n),i.blob(0,a*.62,0,a,a*.72,a,6,3,Yt(o,.8),Yt(o,1.12))}for(let n=0;n<t.people.length;n+=4){const s=t.people[n]/10,r=t.people[n+1]/10,a=n/4,o=.94+a*37%13/100;i.frame(s,e.yAt(s,r)+.28,r,Ne(90+t.people[n+2]/10)),i.box(-.17,0,-.1,.17,.84*o,.1,G(a%3?3422271:5989488),null),i.box(-.21,.84*o,-.12,.21,1.42*o,.12,mr[t.people[n+3]%mr.length]),i.blob(0,1.56*o,0,.11,.13,.11,6,3,gr[a%gr.length])}}const oh=[8235870,8829030,7514200,7034434,12894649,11705474,11973804,4079685,4803408,8024165,11575424,6261326].map(G),t_=`
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
`,e_=`
{
  vec2 p = vLgGround.xz; // metres from the middle of the detailed area: small numbers, so the grain stays fine
  float px = sqrt(length(dFdx(p)) * length(dFdy(p))); // the ground one pixel covers, m: between its width and its length when seen at a low angle
  float k = vLgKind, v = 1.0;
  float broad = lgNoise(p * 0.33) * lgShows(0.33, px), patchy = lgNoise(p * 2.1) * lgShows(2.1, px);
  float grit = (lgHash(floor(p * 26.0)) - 0.5) * lgShows(26.0, px), chips = lgNoise(p * 9.0) * lgShows(9.0, px);
  if (k < 2.5) {
    // grass: blades, and stripes where it is mown
    v += broad * 0.16 + patchy * 0.1 + lgNoise(p * vec2(34.0, 11.0)) * 0.24 * lgShows(34.0, px);
    if (k > 0.5) v += (step(0.5, fract(dot(p, uMow) / 4.4)) - 0.5) * 0.07 * lgShows(0.25, px);
  } else if (k < 3.5) v += chips * 0.5 + patchy * 0.2;                 // mulch
  else if (k < 4.5) v += broad * 0.07 + grit * 0.07;                   // concrete
  else if (k < 5.5) v += broad * 0.08 + grit * 0.3 + (lgHash(floor(p * 60.0)) - 0.5) * 0.18 * lgShows(60.0, px);  // pebbles in aggregate
  else if (k < 6.5) v += grit * 0.05;                                  // kerb
  else if (k < 8.5) v += broad * 0.14 + patchy * 0.08 + grit * 0.2;    // asphalt
  else if (k < 9.5) v += (lgHash(floor(p * 15.0)) - 0.5) * 0.5 * lgShows(15.0, px) + patchy * 0.15;  // ballast stones
  else if (k < 10.5) v += broad * 0.15 + chips * 0.15;                 // an unsealed track
  else v += chips * 0.4 + patchy * 0.2;                                // planting
  diffuseColor.rgb *= v;
  // fade out at the edge of the detailed area, so its streets run into the map's own
  vec2 lgIn = min(p - uBox.xy, uBox.zw - p);
  diffuseColor.a *= clamp(min(lgIn.x, lgIn.y) / 26.0, 0.0, 1.0);
}
`;function n_(i,t){const[e,n]=i.centre,s=[],r=[],a=[],o=(_,m,p,v,y,M,E,S)=>{const x=Math.hypot(p-_,v-m),b=Math.hypot(y-p,M-v),I=Math.hypot(_-y,m-M),C=Math.max(x,b,I);if(C>7){if(C===x){const P=(_+p)/2,D=(m+v)/2;o(_,m,P,D,y,M,E,S),o(P,D,p,v,y,M,E,S)}else if(C===b){const P=(p+y)/2,D=(v+M)/2;o(_,m,p,v,P,D,E,S),o(_,m,P,D,y,M,E,S)}else{const P=(y+_)/2,D=(M+m)/2;o(_,m,p,v,P,D,E,S),o(P,D,p,v,y,M,E,S)}return}const R=(v-m)*(y-_)-(p-_)*(M-m)>0;for(const[P,D]of R?[[_,m],[p,v],[y,M]]:[[_,m],[y,M],[p,v]])s.push(P,t.yAt(P,D)+sn,D),r.push(E[0],E[1],E[2]),a.push(S)};for(const _ of i.ground??[]){const m=_[0],p=m>>4,v=m&15,y=oh[p]??oh[0],M=p===0?Yt(y,.93+v*.028):v?Yt(y,.94):y,E=_.slice(1).map(x=>Array.from({length:x.length/2},(b,I)=>new Pt(e+x[I*2]/100,n+x[I*2+1]/100)));if(E[0].length<3)continue;const S=E.flat();for(const x of ms.triangulateShape(E[0],E.slice(1))){const b=S[x[0]],I=S[x[1]],C=S[x[2]];o(b.x,b.y,I.x,I.y,C.x,C.y,M,p)}}const l=new Me,c=s.length/3,u=new Float32Array(c*3);for(let _=0;_<c;_++)u[_*3+1]=1;l.setAttribute("position",new Ht(new Float32Array(s),3)),l.setAttribute("normal",new Ht(u,3)),l.setAttribute("color",new Ht(new Float32Array(r),3)),l.setAttribute("aKind",new Ht(new Float32Array(a),1));const d=new yn({vertexColors:!0,transparent:!0,depthWrite:!1,roughness:.95,metalness:0,side:Oe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),h=new ue(i.box[0]-e,i.box[1]-n,i.box[2]-e,i.box[3]-n),f=new Pt(Math.cos(Ne(22.6)),-Math.sin(Ne(22.6)));d.onBeforeCompile=_=>{_.uniforms.uBox={value:h},_.uniforms.uMiddle={value:new k(e,0,n)},_.uniforms.uMow={value:f},_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
attribute float aKind;
uniform vec3 uMiddle;
varying float vLgKind;
varying vec3 vLgGround;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLgKind = aKind;
vLgGround = transformed - uMiddle;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying float vLgKind;
varying vec3 vLgGround;
uniform vec4 uBox;
uniform vec2 uMow;
${t_}`).replace("#include <color_fragment>",`#include <color_fragment>
${e_}`)},d.customProgramCacheKey=()=>"logan-precinct-ground";const g=new ne(l,d);return g.receiveShadow=!0,g.renderOrder=24,g.name="precinct-ground",g}class lh{constructor(t,e){nt(this,"pts");nt(this,"at",[0]);nt(this,"length");this.closed=e,this.pts=t.map(n=>n/10),e&&this.pts.push(this.pts[0],this.pts[1]);for(let n=2;n<this.pts.length;n+=2)this.at.push(this.at[n/2-1]+Math.hypot(this.pts[n]-this.pts[n-2],this.pts[n+1]-this.pts[n-1]));this.length=this.at[this.at.length-1]}where(t){let e=!1;this.closed?t=(t%this.length+this.length)%this.length:(t=(t%(2*this.length)+2*this.length)%(2*this.length),t>this.length&&(t=2*this.length-t,e=!0));let n=1;for(;n<this.at.length-1&&this.at[n]<t;)n++;const s=this.pts[n*2-2],r=this.pts[n*2-1],a=this.pts[n*2],o=this.pts[n*2+1],l=this.at[n]-this.at[n-1]||1,c=(t-this.at[n-1])/l,u=e?-1:1;return[s+(a-s)*c,r+(o-r)*c,(a-s)/l*u,(o-r)/l*u]}}function i_(i,t,e){var u,d;const n=new Ze;n.name="precinct-movers";const s=co({roughness:.84,ownGlow:!0}),r={yAt:()=>-sn},a=h=>{const f=new ne(h.build(),s);return f.castShadow=e,f},o=[],l=(h,f,g,_)=>{let m=Math.atan2(f,g)-h.rotation.y;m=Math.atan2(Math.sin(m),Math.cos(m)),h.rotation.y+=m*Math.min(1,_)};(((u=i.movers)==null?void 0:u.cars)??[]).forEach((h,f)=>{const g=new lh(h,!0),_=new jn;eh(_,[0,0,-900,20+(f*3+5)%10],r);const m=a(_);n.add(m),o.push((p,v)=>{const[y,M,E,S]=g.where(p*4.2+f*37);m.position.set(y,t.yAt(y,M)+sn,M),l(m,E,S,v*6)})}),(((d=i.movers)==null?void 0:d.walkers)??[]).forEach((h,f)=>{const g=new lh(h,!1),_=.94+f*37%13/100,m=1.25+f%3*.12,p=new Ze,v=new jn,y=G(f%2?3422271:5989488),M=mr[(f*3+1)%mr.length],E=gr[f%gr.length];v.box(-.21,.84*_,-.12,.21,1.42*_,.12,M),v.blob(0,1.56*_,0,.11,.13,.11,6,3,E),p.add(a(v));const S=[];for(const[x,b,I,C,R]of[[-.17,-.01,.84,.84,y],[.01,.17,.84,.84,y],[-.29,-.21,1.38,.58,M],[.21,.29,1.38,.58,M]]){const P=new jn;P.box(x,-C*_,-.09,b,0,.09,R,null);const D=a(P);D.position.y=I*_,p.add(D),S.push(D)}n.add(p),o.push((x,b)=>{const I=x*m+f*23,[C,R,P,D]=g.where(I),A=C+D*.55,U=R-P*.55;p.position.set(A,t.yAt(A,U)+sn,U),l(p,P,D,b*5);const B=Math.sin(I*4.4)*.55;S[0].rotation.x=B,S[1].rotation.x=-B,S[2].rotation.x=-B*.8,S[3].rotation.x=B*.8})});let c=0;for(const h of o)h(0,1);return{group:n,any:o.length>0,advance(h){c+=h;for(const f of o)f(c,h)}}}function s_(i,t,e,n){const s={houses:[],fences:[],lamps:[],masts:[],shelters:[],signals:[],shrubs:[],people:[],labels:[],wires:[],signs:[],paint:[],marks:[],ground:[],...i},r=new Ze;r.name="precinct";const a=(C,R)=>{const P=new ne(C.build(),co({roughness:.84,ownGlow:!0}));return P.castShadow=e,P.receiveShadow=e,P.name=R,P},o=new jn,l=Bi(4114);for(const C of s.buildings){const{floor:R,roofY:P,top:D,wall:A,onRoof:U}=kg(o,C,t,l,s.entry);if(C.k==="council"&&(Gg(o,s,R,P,C.a,U),s.entry)){Hg(o,s.entry,R,D,A);const B=Vg(s.entry,R);B&&r.add(B)}}const c=(C,R)=>R===1||R===5||C>=4.6;ah(o,s.trees,t,c),Zg(o,s.poles,t);const u=a(o,"precinct-model"),d=new Og(t),h=new Ze;h.name="precinct-streets",Bg(d,s);const f=new Map,g=(C,R,P)=>{for(let D=0;D+R<=C.length;D+=R){const A=`${Math.floor(C[D]/2500)},${Math.floor(C[D+1]/2500)}`;let U=f.get(A);U||f.set(A,U={houses:[],fences:[],cars:[],trees:[],shrubs:[],people:[]});for(let B=0;B<R;B++)U[P].push(C[D+B])}};g(s.houses,9,"houses"),g(s.fences,4,"fences"),g(s.cars,4,"cars"),g(s.trees,4,"trees"),g(s.shrubs,3,"shrubs"),g(s.people,4,"people");for(const[C,R]of f){const P=new jn;$g(P,R.houses,t,d),Jg(P,R.fences,t),jg(P,{...s,shrubs:R.shrubs,people:R.people},t),eh(P,R.cars,t),ah(P,R.trees,t,(D,A)=>!c(D,A)),P.vertexCount&&h.add(a(P,`precinct-streets-${C}`))}const _=new jn,m=new jn;Qg(_,m,s,t),s.entry&&Xg(_,s.entry,t),h.add(a(_,"precinct-furniture"));const p=a(m,"precinct-wires");p.castShadow=!1,h.add(p);const v=i_(s,t,e);h.add(v.group);const y=n_(s,t),M=y.material,E=d.build(),S=E.material;r.add(y,E,u,h);const x=new k(s.centre[0],t.yAt(s.centre[0],s.centre[1]),s.centre[1]),b=26;Gi.uHole.value.set(s.box[0]+b,s.box[1]+b,s.box[2]-b,s.box[3]-b);let I="";return{group:r,update(C){const R=C.distanceTo(x),P=R<9e3,D=R<n+450,A=te.clamp((2900-R)/1100,0,1)*(1-.72*ti.value),U=`${P}${D}${A.toFixed(2)}`;return U===I?!1:(I=U,r.visible=P,h.visible=D,y.visible=A>.01,M.opacity=A,E.visible=D&&A>.01,S.opacity=A,Gi.uHoleOn.value=P?A:0,!0)},animate(C,R){return!v.any||!h.visible||R.distanceTo(x)>520?!1:(v.advance(C),!0)}}}const ch=[{width:14,minPx:2.8,fill:G(15902272),casing:G(10115858)},{width:11.5,minPx:2.4,fill:G(16172115),casing:G(10253344)},{width:10,minPx:1.7,fill:G(16311974),casing:G(9405269)},{width:8,minPx:1.2,fill:G(16250090),casing:G(9275772)},{width:6.5,minPx:.85,fill:G(15723746),casing:G(10131082)},{width:4,minPx:.6,fill:G(14868178),casing:G(10723219)},{width:3,minPx:.6,fill:G(12889474),casing:G(9403740)},{width:2,minPx:.5,fill:G(14470050),casing:G(10260336)}],r_=G(13482126),a_=[{classes:[6,7],fade:[3500,5500],glow:.12,casing:!1},{classes:[4,5],fade:[13e3,19e3],glow:.45,casing:!0},{classes:[3],fade:[34e3,46e3],glow:.65,casing:!0},{classes:[2],fade:[1e9,1e9],glow:.85,casing:!0},{classes:[0,1],fade:[1e9,1e9],glow:1,casing:!0}];function hh(i,t){const e=i.pts,n=e.length/2,s=[e[0],t.yAt(e[0],e[1]),e[1]];if(i.flags&Dc){let r=0;for(let c=1;c<n;c++)r+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]);const a=s[1],o=t.yAt(e[n*2-2],e[n*2-1]);let l=0;for(let c=1;c<n;c++){l+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]);const u=a+(o-a)*(r>0?l/r:1);s.push(e[c*2],Math.max(u,t.yAt(e[c*2],e[c*2+1])),e[c*2+1])}return s}for(let r=1;r<n;r++)t.drape(e[r*2-2],e[r*2-1],e[r*2],e[r*2+1],s);return s}function o_(i,t){var r;const e=new Ze;e.name="roads";const n=[],s=ch.map(()=>[]);for(const a of i)(r=s[a.cls])==null||r.push(a);return a_.forEach((a,o)=>{const l=new On,c=new On;for(const d of a.classes){const h=ch[d];for(const f of s[d]){const g=hh(f,t),_=f.flags&Ic?.62:1,m=f.flags&Dc?void 0:t,p=!!(f.flags&q0)&&d>=3,v=p||d>5?Gc:f.flags&(Ic|X0)||d>3?Ig:d===0?Fg:d===1?Ug:Ng;l.add(g,h.width*_,h.minPx*_,p?r_:h.fill,m,!1,v),a.casing&&c.add(g,h.width*_+2.4,h.minPx*_+1.5,h.casing,m,!1,v)}}const u=[];if(a.casing&&c.vertexCount){const d=new ne(c.build(),Bn({lift:.3,glow:0,nightDim:.12,opacity:.85,hole:!0,street:"casing"}));d.renderOrder=10+o*2,u.push(d)}if(l.vertexCount){const d=new ne(l.build(),Bn({lift:.45,glow:a.glow,hole:!0,street:"fill"}));d.renderOrder=11+o*2,u.push(d)}for(const d of u)d.userData.baseOpacity=d.material.opacity,e.add(d);n.push({fade:a.fade,meshes:u,opacity:1})}),{group:e,update(a){let o=!1;for(const l of n){const c=1-te.smoothstep(a,l.fade[0],l.fade[1]);if(!(Math.abs(c-l.opacity)<.004)){l.opacity=c,o=!0;for(const u of l.meshes)u.visible=c>.01,u.material.opacity=u.userData.baseOpacity*c}}return o}}}const Es=-260,Mo=1100,l_=`
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
`;function c_(i,t,e){const{nx:n,nz:s}=i,r=new Float32Array(n*s*3),a=new Float32Array(n*s*2);for(let f=0;f<s;f++)for(let g=0;g<n;g++){const _=f*n+g,m=i.xMin+g*i.dx,p=i.zMin+f*i.dz;r[_*3]=m,r[_*3+1]=i.y[_],r[_*3+2]=p,a[_*2]=(m+i.sizeX/2)/i.sizeX,a[_*2+1]=1-(p+i.sizeZ/2)/i.sizeZ}const o=new Uint32Array((n-1)*(s-1)*6);let l=0;for(let f=0;f<s-1;f++)for(let g=0;g<n-1;g++){const _=f*n+g,m=_+1,p=_+n,v=p+1;o[l++]=_,o[l++]=p,o[l++]=m,o[l++]=m,o[l++]=p,o[l++]=v}const c=new Me;c.setAttribute("position",new Ht(r,3)),c.setAttribute("uv",new Ht(a,2)),c.setIndex(new Ht(o,1)),c.computeBoundingSphere();const u=new yn({map:t.ground,roughness:.95,metalness:0,flatShading:!0});u.onBeforeCompile=f=>{f.uniforms.uRelief={value:t.relief},f.uniforms.uLights={value:t.lights},f.uniforms.uNight=ti,f.uniforms.uTime=e,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`#include <begin_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;
uniform sampler2D uRelief;
uniform sampler2D uLights;
uniform float uNight;
uniform float uTime;
${l_}`).replace("#include <map_fragment>",`#include <map_fragment>
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
        }`)},u.customProgramCacheKey=()=>"logan-terrain";const d=new ne(c,u);d.receiveShadow=!0,d.name="terrain";const h=new Ze;return h.add(d,u_(i),d_(i)),h}function h_(i){const t=[];for(let e=0;e<i.nx;e++)t.push([i.xMin+e*i.dx,i.zMin]);for(let e=1;e<i.nz;e++)t.push([i.xMax,i.zMin+e*i.dz]);for(let e=i.nx-2;e>=0;e--)t.push([i.xMin+e*i.dx,i.zMax]);for(let e=i.nz-2;e>=1;e--)t.push([i.xMin,i.zMin+e*i.dz]);return t}function u_(i){const t=h_(i),e=t.length,n=[],s=[],r=[],a=new It(9074780),o=new It(6180669),l=new It(3813673),c=45;for(let h=0;h<e;h++){const[f,g]=t[h],[_,m]=t[(h+1)%e],p=i.yAt(f,g),v=i.yAt(_,m),y=_-f,M=m-g,E=Math.hypot(y,M)||1,S=M/E,x=-y/E;for(const[b,I,C,R,P,D]of[[p,p-c,v,v-c,a,o],[p-c,Es,v-c,Es,o,l]]){n.push(f,b,g,_,C,m,_,R,m,f,b,g,_,R,m,f,I,g);for(const A of[P,P,D,P,D,D])s.push(A.r,A.g,A.b);for(let A=0;A<6;A++)r.push(S,0,x)}}const u=new Me;u.setAttribute("position",new Ae(n,3)),u.setAttribute("normal",new Ae(r,3)),u.setAttribute("color",new Ae(s,3));const d=new ne(u,new yn({vertexColors:!0,roughness:1,side:Oe}));return d.name="skirt",d}function d_(i){const t=new Ze,e=i.xMax-i.xMin+Mo*2,n=i.zMax-i.zMin+Mo*2,s=1100,r=(i.xMin+i.xMax)/2,a=(i.zMin+i.zMax)/2,o=new ne(new Pi(e,s,n),new yn({color:1779245,roughness:.75,metalness:.1}));o.position.set(r,Es-s/2,a),t.add(o);const l=document.createElement("canvas");l.width=2048,l.height=160;const c=l.getContext("2d");c.fillStyle="#1b262d",c.fillRect(0,0,l.width,l.height),c.fillStyle="#e9d9a6",c.textBaseline="middle",c.font="600 78px 'Space Grotesk', system-ui, sans-serif",c.fillText("LOGAN",40,84);const u=c.measureText("LOGAN").width;c.fillStyle="#9fb4bd",c.font="400 42px 'Space Grotesk', system-ui, sans-serif",c.fillText("City of Logan, Queensland   ·   27.76° S  153.05° E   ·   958 km²",40+u+46,88);const d=new qa(l);d.colorSpace=De,d.anisotropy=8;const h=12500,f=new ne(new Di(h,h*(l.height/l.width)),new Ws({map:d,toneMapped:!1,fog:!1}));f.position.set(r-e/2+h/2+700,Es-s/2,a+n/2+4),t.add(f);const g=document.createElement("canvas");g.width=g.height=256;const _=g.getContext("2d");_.fillStyle="#e9d9a6",_.beginPath(),_.moveTo(128,18),_.lineTo(176,150),_.lineTo(128,122),_.lineTo(80,150),_.closePath(),_.fill(),_.font="700 86px 'Space Grotesk', system-ui, sans-serif",_.textAlign="center",_.fillText("N",128,240);const m=new qa(g);m.colorSpace=De;const p=new ne(new Di(850,850),new Ws({map:m,transparent:!0,toneMapped:!1,fog:!1}));return p.rotation.x=-Math.PI/2,p.position.set(i.xMax+Mo/2,Es+4,i.zMin+800),t.add(p),t}const Ue=1e3,So=[5932872,6853456,7772757,5209412,8824160],uh=`
attribute vec4 aTree; // x, ground height, z, canopy radius
attribute float aSeed;
attribute float aPart; // 0 the canopy, 1 the trunk
uniform float uRange;
uniform vec3 uEye; // the viewer's position; cameraPosition is the light's during the shadow pass
`,dh=`
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
`;function f_(i,t,e,n,s,r,a){const o=new Ze;o.name="trees";const l={value:n},c={value:new k},u=So.map(R=>new It(R)),d=new yn({flatShading:!0,roughness:.95,metalness:0});d.onBeforeCompile=R=>{R.uniforms.uRange=l,R.uniforms.uEye=c,R.uniforms.uGreens={value:u},R.uniforms.uNight=ti,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
${uh}
uniform vec3 uGreens[${So.length}];
varying vec3 vLgColor;`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0, 1.0, 0.0);").replace("#include <begin_vertex>",`${dh}
        vLgColor = uGreens[int(aSeed * ${So.length}.0)] * (0.8 + 0.3 * fract(aSeed * 9.7)) * (0.72 + 0.28 * smoothstep(-0.6, 0.9, position.y));
        vLgColor = mix(vLgColor, vec3(0.36, 0.45, 0.33) * (0.8 + 0.3 * fract(aSeed * 9.7)), 0.55 * lgSlim); // the grey-green of gums
        if (aPart > 0.5) vLgColor = mix(vec3(0.33, 0.26, 0.2), vec3(0.62, 0.58, 0.5), lgSlim) * (0.85 + 0.3 * fract(aSeed * 7.9));`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLgColor;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = vLgColor;`)},d.customProgramCacheKey=()=>"logan-tree";const h=new Qa({depthPacking:Jo});h.onBeforeCompile=R=>{R.uniforms.uRange=l,R.uniforms.uEye=c,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
${uh}`).replace("#include <begin_vertex>",dh)},h.customProgramCacheKey=()=>"logan-tree-depth";const f=new $a(1,0).getAttribute("position"),g=Array.from(f.array),_=new Array(f.count).fill(0);for(let R=0;R<3;R++){const P=R/3*Math.PI*2,D=(R+1)/3*Math.PI*2,A=Math.cos(P),U=Math.sin(P),B=Math.cos(D),z=Math.sin(D);g.push(A,0,U,B,1,z,B,0,z,A,0,U,A,1,U,B,1,z),_.push(1,1,1,1,1,1)}const m=new Ht(new Float32Array(g),3),p=new Ht(new Float32Array(_),1),[v,y]=e,M=t.w/v,E=t.h/y,S=(R,P)=>{const D=Math.sin(R*127.1+P*311.7)*43758.5453;return D-Math.floor(D)};function x(R,P){const D=R*Ue-v/2,A=P*Ue-y/2,U=[],B=[];let z=1/0,J=-1/0;const H=Math.ceil(Ue/s);for(let gt=0;gt<H;gt++)for(let Lt=0;Lt<H;Lt++){const K=Math.round(D/s)+Lt,it=Math.round(A/s)+gt,St=S(K,it),Et=S(it+17.3,K-5.1),lt=S(K*1.7+3.1,it*2.3),Mt=(K+St)*s,ee=(it+Et)*s;if(!i.inside(Mt,ee,60)||Mt>a[0]&&Mt<a[2]&&ee>a[1]&&ee<a[3])continue;const Ct=Math.min(t.h-1,Math.max(0,Math.floor((ee+y/2)*E)))*t.w+Math.min(t.w-1,Math.max(0,Math.floor((Mt+v/2)*M)));if(!t.wooded[Ct]||t.built[Ct]>46+lt*30||lt>.9)continue;const Jt=i.yAt(Mt,ee),qt=3.4+lt*3.2+St*1.4;U.push(Mt,Jt-.5,ee,qt),B.push(Et),z=Math.min(z,Jt),J=Math.max(J,Jt+qt*3.4)}if(!B.length)return null;const Y=new Kl;Y.setAttribute("position",m.clone()),Y.setAttribute("aPart",p.clone()),Y.setAttribute("aTree",new cs(new Float32Array(U),4)),Y.setAttribute("aSeed",new cs(new Float32Array(B),1)),Y.instanceCount=B.length,Y.boundingSphere=new as(new k(D+Ue/2,(z+J)/2,A+Ue/2),Math.hypot(Ue*.75,(J-z)/2)+20);const tt=new ne(Y,d);return tt.customDepthMaterial=h,tt.castShadow=r,tt.receiveShadow=r,tt}const b=new Map,I=Math.ceil(v/Ue),C=Math.ceil(y/Ue);return{group:o,update(R){c.value.copy(R);const P=n+Ue*.75,D=(R.x+v/2)/Ue,A=(R.z+y/2)/Ue,U=Math.ceil(P/Ue);let B=0,z=!1;const J=R.y-i.yAt(R.x,R.z)<n;if(J)for(let H=Math.max(0,Math.floor(A-U));H<=Math.min(C-1,Math.floor(A+U));H++)for(let Y=Math.max(0,Math.floor(D-U));Y<=Math.min(I-1,Math.floor(D+U));Y++){const tt=H*I+Y;if(b.has(tt)||Math.hypot((Y+.5-D)*Ue,(H+.5-A)*Ue)>P)continue;if(B>=2){z=!0;continue}const gt=x(Y,H);b.set(tt,gt),gt&&o.add(gt),B++}for(const[H,Y]of b)(!J||Math.hypot((H%I+.5-D)*Ue,(Math.floor(H/I)+.5-A)*Ue)>P+Ue*2)&&(Y&&(o.remove(Y),Y.geometry.dispose()),b.delete(H));return B>0||z}}}const p_={rise:5.75*60,set:18*60,noon:62},fh=220,ph=125e3,m_={high:{step:1,range:7500,minArea:0,trees:[2400,15],shadow:4096,pixelRatio:2},medium:{step:2,range:5200,minArea:45,trees:[1800,19],shadow:2048,pixelRatio:1.5},low:{step:3,range:3600,minArea:60,trees:[1200,24],shadow:0,pixelRatio:1}},g_=new It(1,1,1),__=()=>new Promise(i=>requestAnimationFrame(()=>i())),mh=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;class x_{constructor(t,e,n,s){nt(this,"renderer");nt(this,"scene",new Bu);nt(this,"camera",new fn(38,1,5,9e5));nt(this,"controls");nt(this,"atmosphere");nt(this,"fog",new Pa(16777215,1,2));nt(this,"hf");nt(this,"map");nt(this,"roads");nt(this,"buildings");nt(this,"precinct");nt(this,"trees");nt(this,"labels");nt(this,"places",[]);nt(this,"shapes",[]);nt(this,"roadData",[]);nt(this,"streets");nt(this,"suburbLines");nt(this,"divisionLines");nt(this,"selection");nt(this,"time",{value:0});nt(this,"flood");nt(this,"floodInfo");nt(this,"floodRise");nt(this,"raf",0);nt(this,"last",0);nt(this,"dirty",!0);nt(this,"animating",!0);nt(this,"disposed",!1);nt(this,"abort",new AbortController);nt(this,"resizeObserver");nt(this,"flight");nt(this,"lastCompass",NaN);nt(this,"width",1);nt(this,"height",1);nt(this,"quality","high");nt(this,"pixelRatio",1);nt(this,"slowFrames",0);nt(this,"press");nt(this,"external");nt(this,"solar",NaN);nt(this,"idle",0);nt(this,"focus",new k);nt(this,"onPointerDown",t=>{this.press=t.button===0&&t.isPrimary?{x:t.clientX,y:t.clientY,t:performance.now()}:void 0});nt(this,"onPointerUp",t=>{const e=this.press;if(this.press=void 0,!e||Math.hypot(t.clientX-e.x,t.clientY-e.y)>6||performance.now()-e.t>600)return;const n=this.groundPoint(t.clientX,t.clientY),s=n?this.suburbAt(n.x,n.z):-1;s>=0&&this.cb.onSelect({kind:"suburb",index:s})});nt(this,"onKey",t=>{if(t.altKey||t.ctrlKey||t.metaKey)return;const e=this.currentView(),n=e.dist*.12,s=te.degToRad(e.azimuth),r=-Math.sin(s),a=-Math.cos(s),o=Math.cos(s),l=-Math.sin(s);let c=null;switch(t.key){case"ArrowUp":c={...e,x:e.x+r*n,z:e.z+a*n};break;case"ArrowDown":c={...e,x:e.x-r*n,z:e.z-a*n};break;case"ArrowLeft":c={...e,x:e.x-o*n,z:e.z-l*n};break;case"ArrowRight":c={...e,x:e.x+o*n,z:e.z+l*n};break;case"+":case"=":c={...e,dist:e.dist*.8};break;case"-":case"_":c={...e,dist:e.dist*1.25};break;case"q":case"Q":c={...e,azimuth:e.azimuth-15};break;case"e":case"E":c={...e,azimuth:e.azimuth+15};break;case"r":case"R":c={...e,polar:e.polar-6};break;case"f":case"F":c={...e,polar:e.polar+6};break;case"Home":c=this.homeView();break;default:return}t.preventDefault(),this.fly(c,.3)});nt(this,"frame",t=>{var d,h,f,g,_,m;if(this.disposed)return;this.raf=requestAnimationFrame(this.frame);const e=(t-this.last)/1e3,n=Math.min(.1,e);if(this.last=t,document.hidden)return;if(this.flight){const p=this.flight;p.t=Math.min(1,p.t+n/p.duration);const v=mh(p.t),y=(M,E)=>M+(E-M)*v;this.applyView({x:y(p.from.x,p.to.x),z:y(p.from.z,p.to.z),dist:Math.exp(y(Math.log(p.from.dist),Math.log(p.to.dist))),polar:y(p.from.polar,p.to.polar),azimuth:y(p.from.azimuth,p.to.azimuth)}),p.t>=1&&(this.flight=void 0)}if(!this.external&&this.controls.update()&&(this.dirty=!0),this.atmosphere.update(n)&&(this.dirty=!0),this.floodRise&&this.flood){const p=this.floodRise;p.t=Math.min(1,p.t+n/4);const v=.35+.65*mh(p.t);this.flood.setLevel(v),this.time.value+=n,this.cb.onFloodLevel(v),p.t>=1&&(this.floodRise=void 0),this.dirty=!0}const s=this.camera,r=((d=this.precinct)==null?void 0:d.animate(n,s.position))??!1;let a=this.controls.target,o;if(this.external){if(!this.dirty&&!r){this.idle++;return}this.idle=this.dirty?0:this.idle+1,this.dirty=!1;const p=this.hf.yAt(s.position.x,s.position.z);s.position.y<p+1.2&&(s.position.y=p+1.2);const v=s.getWorldDirection(this.focus),y=s.position.y-p;o=te.clamp(v.y<-.08?y/-v.y:y*6,60,15e4),a=this.focus.multiplyScalar(o).add(s.position),a.y=this.hf.yAt(a.x,a.z)}else{const p=this.hf.yAt(a.x,a.z)-a.y;if(Math.abs(p)>.5){const y=p*Math.min(1,n*7);a.y+=y,s.position.y+=y,this.dirty=!0}if(!this.dirty&&!r)return;this.dirty=!1;const v=this.hf.yAt(s.position.x,s.position.z)+25;s.position.y<v&&(s.position.y=v),o=s.position.distanceTo(a)}const l=te.clamp(o*.02,this.external?.6:3,700),c=te.clamp(o*10+7e4,7e4,9e5);if((Math.abs(l-s.near)>s.near*.05||Math.abs(c-s.far)>s.far*.05)&&(s.near=l,s.far=c,s.updateProjectionMatrix()),this.fog.color.copy(this.atmosphere.horizon),this.fog.near=o*1.6+2500,this.fog.far=o*6+75e3,Gi.uTint.value.copy(this.atmosphere.sun.color).lerp(g_,.45),Gi.uStreet.value=1-te.smoothstep(o,650,1500),(h=this.roads)!=null&&h.update(o)&&(this.dirty=!0),(f=this.buildings)!=null&&f.update(s.position)&&(this.dirty=!0),(g=this.trees)!=null&&g.update(s.position)&&(this.dirty=!0),(_=this.precinct)!=null&&_.update(s.position)&&(this.dirty=!0),this.atmosphere.aimShadow(a,o),this.renderer.render(this.scene,s),(m=this.labels)==null||m.update(s,this.width,this.height,this.external?Math.max(280,o*6):1/0),e<.25&&(this.slowFrames=e>.042?this.slowFrames+1:Math.max(0,this.slowFrames-2),this.slowFrames>50&&this.pixelRatio>1&&(this.pixelRatio=Math.max(1,this.pixelRatio*.75),this.renderer.setPixelRatio(this.pixelRatio),this.resize(),this.slowFrames=0)),this.external)return;const u=Math.round(this.currentView().azimuth);u!==this.lastCompass&&(this.lastCompass=u,this.cb.onCompass(u))});this.container=t,this.labelLayer=e,this.cb=n,this.opts=s,this.external=!!s.external}async init(){var u;try{this.renderer=new H0({antialias:!0,powerPreference:"high-performance"})}catch{this.cb.onError("This browser could not start WebGL, which the 3D map needs.");return}const t=this.renderer;this.quality=this.pickQuality();const e=m_[this.quality];this.pixelRatio=Math.min(window.devicePixelRatio||1,e.pixelRatio),t.setPixelRatio(this.pixelRatio),t.outputColorSpace=De,t.toneMapping=Cr,t.shadowMap.enabled=e.shadow>0,t.shadowMap.type=Xi;const n=t.domElement;n.tabIndex=0,this.external?(n.tabIndex=-1,n.setAttribute("role","img"),n.setAttribute("aria-label","3D map of Logan")):(n.setAttribute("role","application"),n.setAttribute("aria-label","3D map of Logan. Drag to pan, right-drag to rotate, scroll to zoom, click a suburb to select it. Arrow keys pan, plus and minus zoom, Q and E rotate.")),n.style.display="block",n.style.outlineOffset="-3px",this.container.appendChild(n),n.addEventListener("webglcontextlost",d=>{d.preventDefault(),this.disposed||this.cb.onError("The browser reclaimed the graphics memory this map was using.")});let s;try{s=await $0(this.opts.assets,(d,h)=>this.cb.onProgress(d*.6,h),this.abort.signal)}catch(d){this.disposed||this.cb.onError(d instanceof Error?d.message:"The map data could not be loaded.");return}if(this.disposed)return;const{map:r,heights:a}=s;this.map=r,s.ground.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());const o=async(d,h)=>{this.cb.onProgress(d,h),await __()};await o(.62,"Shaping the terrain");const l=this.hf=new Tg(a,r.meta.grid[0],r.meta.grid[1],r.meta.size[0],r.meta.size[1],e.step);if(this.scene.add(c_(l,s,this.time)),await o(.7,"Laying out the streets"),this.roadData=s.roads,this.roads=o_(s.roads,l),this.scene.add(this.roads.group,this.buildRail()),await o(.8,"Raising the buildings"),this.buildings=bg(s.buildings,r,l,e.range,e.minArea,e.shadow>0),this.scene.add(this.buildings.group),this.trees=f_(l,s.cover,r.meta.size,e.trees[0],e.trees[1],e.shadow>0,r.precinct.box),this.precinct=s_(r.precinct,l,e.shadow>0,e.range),this.scene.add(this.trees.group,this.precinct.group),await o(.9,"Drawing the boundaries"),this.shapes=r.suburbs.map(d=>{const h=d.r.map(g=>new Float32Array(g.map(_=>_/10))),f=[1/0,1/0,-1/0,-1/0];for(const g of h)for(let _=0;_<g.length;_+=2)f[0]=Math.min(f[0],g[_]),f[1]=Math.min(f[1],g[_+1]),f[2]=Math.max(f[2],g[_]),f[3]=Math.max(f[3],g[_+1]);return{rings:h,box:f}}),this.buildBoundaries(),this.disposed)return;this.atmosphere=new xg(t,null,e.shadow),this.scene.add(this.atmosphere.sky,this.atmosphere.sun,this.atmosphere.sun.target,this.atmosphere.hemi),this.scene.fog=this.fog,this.places=Dg(r.meta,l,(d,h)=>{var f;return((f=r.suburbs[this.suburbAt(d,h)])==null?void 0:f.n)??""}),this.labels=new Cg(this.labelLayer,this.labelDefs(),d=>this.pickLabel(d)),this.labels.setKindVisible("division",!1),(u=document.fonts)==null||u.ready.then(()=>{var d;(d=this.labels)==null||d.remeasure(),this.dirty=!0}),this.setupControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.resize();const c=this.homeView();this.external?(this.controls.enabled=!1,this.animating=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.applyView(c)):window.matchMedia("(prefers-reduced-motion: reduce)").matches?(this.animating=!1,this.applyView(c)):(this.applyView({...c,dist:c.dist*1.1,polar:10,azimuth:-24}),this.fly(c,3.2)),this.cb.onProgress(1,"Ready"),this.cb.onReady({quality:this.quality,places:this.places,suburbs:r.suburbs.map((d,h)=>({index:h,name:d.n,areaKm2:d.a,buildings:d.b,low:d.e[0],high:d.e[1],wooded:d.t,streetKm:d.s})),facts:{areaKm2:r.meta.areaKm2,buildings:r.meta.buildings,streetKm:r.meta.streetKm,wooded:r.meta.treeCover,peakMetres:r.meta.peak.m,peakSuburb:r.meta.peak.suburb}}),this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)}setTimeOfDay(t){var e;(e=this.atmosphere)==null||e.set(t,!this.animating),this.dirty=!0}async floodScenarios(){return this.floodInfo||(this.floodInfo=await Q0(this.opts.assets.flood,this.abort.signal)),this.floodInfo}async showFlood(t){var n;if(this.floodRise=void 0,!t){(n=this.flood)==null||n.hide(),this.dirty=!0;return}const e=await this.floodScenarios();this.flood||(this.flood=new j0(this.hf,e,this.time,this.opts.assets.floodLevels),this.scene.add(this.flood.mesh)),await this.flood.show(t,this.abort.signal),!this.disposed&&(this.animating?(this.floodRise={t:0},this.flood.setLevel(.35)):(this.flood.setLevel(1),this.cb.onFloodLevel(1)),this.dirty=!0)}setFloodLevel(t){var e;this.floodRise=void 0,(e=this.flood)==null||e.setLevel(t),this.dirty=!0}setLayerVisible(t,e){var n,s,r;t==="suburbs"&&this.suburbLines?(this.suburbLines.visible=e,(n=this.labels)==null||n.setKindVisible("suburb",e)):t==="divisions"&&this.divisionLines?(this.divisionLines.visible=e,(s=this.labels)==null||s.setKindVisible("division",e)):t==="labels"&&((r=this.labels)==null||r.setVisible(e)),this.dirty=!0}setLabelObstacles(t){var e;(e=this.labels)==null||e.setObstacles(t),this.dirty=!0}selectSuburb(t,e=!1){const n=t===null?void 0:this.shapes[t];if(this.highlight(n?n.rings.map(s=>this.drapeRing(s)):[]),n&&t!==null&&e){const s=this.map.suburbs[t],r=Math.max(n.box[2]-n.box[0],n.box[3]-n.box[1]);this.fly({x:s.c[0],z:s.c[1],dist:te.clamp(r*1.9,3200,42e3),polar:46,azimuth:0},2.2)}}findStreets(t,e=40){const n=t.trim().toLowerCase();if(n.length<2)return[];const s=[],r=[];for(const a of this.streetIndex()){const o=a.name.toLowerCase().indexOf(n);if(!(o<0)&&((o===0?s:r).push({id:a.id,name:a.name,suburb:a.suburb}),s.length>=e))break}return s.concat(r).slice(0,e)}selectStreet(t){const e=this.streetIndex()[t];if(!e)return;this.highlight(e.roads.map(s=>hh(s,this.hf)));const n=Math.max(e.box[2]-e.box[0],e.box[3]-e.box[1]);this.fly({x:(e.box[0]+e.box[2])/2,z:(e.box[1]+e.box[3])/2,dist:te.clamp(n*2.2,900,16e3),polar:48,azimuth:0},2.2)}flyToPlace(t){const e=this.places.find(n=>n.id===t);e&&this.fly({x:e.x,z:e.z,dist:e.view[0],polar:e.view[1],azimuth:e.view[2]},2.4)}resetView(){this.fly(this.homeView(),2)}setView(t,e,n,s,r,a=1.5){this.fly({x:t,z:e,dist:n,polar:s,azimuth:r},a)}faceNorth(){this.fly({...this.currentView(),azimuth:0},.8)}zoomBy(t){const e=this.currentView();this.fly({...e,dist:e.dist*t},.35)}setExternalCamera(t,e,n,s,r){const a=this.camera;!this.hf||a.position.x===t&&a.position.y===e&&a.position.z===n&&a.rotation.y===s&&a.rotation.x===r||(a.position.set(t,e,n),a.rotation.set(r,s,0,"YXZ"),this.dirty=!0)}getCamera(){const t=new Pn().setFromQuaternion(this.camera.quaternion,"YXZ");return{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z,yaw:t.y,pitch:t.x}}setSolarMinutes(t){const e=Math.round(t);e===this.solar||!this.atmosphere||(this.solar=e,this.atmosphere.setSolar(e,p_),this.dirty=!0)}setAnimating(t){this.animating=t}groundAt(t,e){return this.hf.yAt(t,e)}waterAt(t,e,n=!1){return this.flood?this.flood.surfaceAt(t,e,n):-1/0}overview(){const t=this.homeView(),e=te.degToRad(t.polar);return{x:t.x,y:this.hf.yAt(t.x,t.z)+t.dist*Math.cos(e),z:t.z+t.dist*Math.sin(e),yaw:0,pitch:e-Math.PI/2}}get settled(){return this.idle>=3}get fov(){return this.camera.fov}get bounds(){return[this.hf.xMin,this.hf.xMax,this.hf.zMin,this.hf.zMax]}fromLatLon(t,e){return xo(this.map.meta,t,e)}dispose(){var e,n,s;if(this.disposed=!0,this.abort.abort(),cancelAnimationFrame(this.raf),(e=this.resizeObserver)==null||e.disconnect(),(n=this.labels)==null||n.dispose(),(s=this.controls)==null||s.dispose(),!this.renderer)return;const t=this.renderer.domElement;t.removeEventListener("keydown",this.onKey),t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointerup",this.onPointerUp),this.scene.traverse(r=>{var l,c,u;const a=r;(c=(l=a.geometry)==null?void 0:l.dispose)==null||c.call(l);const o=Array.isArray(a.material)?a.material:a.material?[a.material]:[];for(const d of o){for(const h of Object.values(d))h instanceof Te&&h.dispose();d.dispose()}(u=a.customDepthMaterial)==null||u.dispose()}),this.renderer.dispose(),t.remove()}homeView(){const t=this.width>=768&&!this.external,e=2*Math.atan(Math.tan(te.degToRad(this.camera.fov)/2)*this.camera.aspect),n=te.clamp((t?29e3:25500)/Math.tan(e/2),t?66e3:6e4,112e3);return{x:t?-n*.075:0,z:n*.04,dist:n,polar:t?38:30,azimuth:0}}suburbAt(t,e){for(let n=0;n<this.shapes.length;n++){const{rings:s,box:r}=this.shapes[n];if(t<r[0]||t>r[2]||e<r[1]||e>r[3])continue;let a=!1;for(const o of s)for(let l=0,c=o.length-2;l<o.length;c=l,l+=2)o[l+1]>e!=o[c+1]>e&&t<(o[c]-o[l])*(e-o[l+1])/(o[c+1]-o[l+1])+o[l]&&(a=!a);if(a)return n}return-1}highlight(t){if(this.selection&&(this.scene.remove(this.selection),this.selection.geometry.dispose(),this.selection.material.dispose(),this.selection=void 0),t.length){const e=new On;for(const n of t)e.add(n,0,9,G(858142));for(const n of t)e.add(n,0,4.5,G(16765440));this.selection=new ne(e.build(),Bn({lift:4,nightDim:1})),this.selection.renderOrder=34,this.scene.add(this.selection)}this.dirty=!0}streetIndex(){if(this.streets)return this.streets;const t=new Map;for(const e of this.roadData){if(!e.name||e.cls>5)continue;const n=e.pts,s=Math.floor(n.length/4)*2,r=this.suburbAt(n[s],n[s+1]);if(r<0)continue;const a=`${e.name}:${r}`;let o=t.get(a);o||(o={id:0,name:this.map.roadNames[e.name],suburb:this.map.suburbs[r].n,roads:[],box:[1/0,1/0,-1/0,-1/0]},t.set(a,o)),o.roads.push(e);for(let l=0;l<n.length;l+=2)o.box[0]=Math.min(o.box[0],n[l]),o.box[1]=Math.min(o.box[1],n[l+1]),o.box[2]=Math.max(o.box[2],n[l]),o.box[3]=Math.max(o.box[3],n[l+1])}return this.streets=[...t.values()].sort((e,n)=>e.name.localeCompare(n.name)||e.suburb.localeCompare(n.suburb)),this.streets.forEach((e,n)=>e.id=n),this.streets}drapeRing(t){const e=[t[0],this.hf.yAt(t[0],t[1]),t[1]];for(let n=2;n<t.length;n+=2)this.hf.drape(t[n-2],t[n-1],t[n],t[n+1],e);return e}buildBoundaries(){const{map:t}=this,e=c=>c.map(u=>u/10),n=new On;for(const c of this.shapes)for(const u of c.rings)n.add(this.drapeRing(u),0,1.3,G(16777215));this.suburbLines=new ne(n.build(),Bn({lift:2,opacity:.6,nightDim:.75})),this.suburbLines.renderOrder=28;const s=new On;for(const c of t.divisions)for(const u of c.r)s.add(this.drapeRing(e(u)),0,2.4,G(5556479));this.divisionLines=new ne(s.build(),Bn({lift:3,opacity:.95,nightDim:.9})),this.divisionLines.renderOrder=30,this.divisionLines.visible=!1;const r=new On,a=new On;for(const c of t.boundary){const u=this.drapeRing(e(c));r.add(u,0,7,G(1057836)),a.add(u,0,3,G(16773288))}const o=new ne(r.build(),Bn({lift:3,opacity:.45,nightDim:.4}));o.renderOrder=31;const l=new ne(a.build(),Bn({lift:3.5,nightDim:.95}));l.renderOrder=32,this.scene.add(this.suburbLines,this.divisionLines,o,l)}buildRail(){const t=new On,e=new On;for(const a of this.map.rail){const o=this.drapeRing(a.map(l=>l/10));t.add(o,7,3.4,G(16052970)),e.add(o,3.4,1.7,G(4013895))}const n=new Ze;n.name="rail";const s=new ne(t.build(),Bn({lift:.5,opacity:.9,nightDim:.25,hole:!0}));s.renderOrder=22;const r=new ne(e.build(),Bn({lift:.6,nightDim:.5,hole:!0}));return r.renderOrder=23,n.add(s,r),n}labelDefs(){const{map:t,hf:e}=this,n=(o,l,c)=>({x:o,z:l,y:e.yAt(o,l)+c}),s=[];t.suburbs.map((o,l)=>({s:o,i:l})).sort((o,l)=>l.s.b-o.s.b).forEach(({s:o,i:l},c)=>{s.push({id:`suburb:${l}`,name:o.n,kind:"suburb",...n(o.c[0],o.c[1],30),priority:20+c*.4,maxDist:c<16?1/0:c<36?62e3:c<56?36e3:24e3})});for(const o of this.places)s.push({id:`place:${o.id}`,name:o.name,kind:o.kind,x:o.x,y:o.y,z:o.z,priority:o.priority,maxDist:o.maxDist});for(const o of Lg){const[l,c]=xo(t.meta,o.lat,o.lon);s.push({id:`text:${o.name}:${o.lat}`,name:o.name,kind:o.kind,...n(l,c,20),priority:o.kind==="water"?9.5:40,maxDist:o.maxDist})}for(const o of t.precinct.labels??[])s.push({id:`text:${o.n}:${o.x}`,name:o.n,kind:o.k,...n(o.x,o.z,o.l),priority:44,maxDist:o.d});for(const o of t.stations)o.city&&s.push({id:`station:${o.n}`,name:`${o.n} station`,kind:"station",...n(o.x,o.z,30),priority:50,maxDist:9e3});const a=t.meta.peak;s.push({id:"peak",name:`Highest ground · ${a.m} m`,kind:"peak",...n(a.x,a.z,60),priority:16});for(const o of t.divisions)s.push({id:`division:${o.n}`,name:`Division ${o.n}`,kind:"division",...n(o.c[0],o.c[1],40),priority:6});for(const o of t.neighbours)s.push({id:`region:${o.n}`,name:o.n,kind:"region",...n(o.c[0],o.c[1],0),priority:5,minDist:14e3});return s}pickLabel(t){if(t==="peak"){const r=this.map.meta.peak;this.fly({x:r.x,z:r.z,dist:9e3,polar:62,azimuth:30},2.4),this.cb.onSelect({kind:"peak"});return}const e=t.indexOf(":"),n=t.slice(0,e),s=t.slice(e+1);if(n==="suburb")this.cb.onSelect({kind:"suburb",index:Number(s)});else if(n==="place")this.cb.onSelect({kind:"place",id:s});else if(n==="station"){const r=this.map.stations.find(a=>a.n===s);r&&this.fly({x:r.x,z:r.z,dist:1300,polar:58,azimuth:this.currentView().azimuth},2),this.cb.onSelect({kind:"station",name:s})}}groundPoint(t,e){const n=this.renderer.domElement.getBoundingClientRect(),s=new Pt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),r=new $l;r.setFromCamera(s,this.camera);const a=r.ray.origin,o=r.ray.direction,l=new k;let c=0,u=0;for(let d=0;d<4e3&&c<25e4;d++){l.copy(a).addScaledVector(o,c);const h=l.y-this.hf.yAt(l.x,l.z);if(h<=0){let f=u,g=c;for(let _=0;_<20;_++){const m=(f+g)/2;l.copy(a).addScaledVector(o,m),l.y-this.hf.yAt(l.x,l.z)>0?f=m:g=m}return this.hf.inside(l.x,l.z)?l:null}u=c,c+=Math.max(12,h*.4)}return null}pickQuality(){const t=new URLSearchParams(window.location.search).get("quality");if(t==="high"||t==="medium"||t==="low")return t;const e=this.renderer.getContext(),n=e.getExtension("WEBGL_debug_renderer_info"),s=n?String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)):"";if(/swiftshader|llvmpipe|software/i.test(s))return"low";const r=navigator.deviceMemory??8;return window.matchMedia("(pointer: coarse)").matches||r<=4?"medium":"high"}setupControls(){const t=this.controls=new mg(this.camera,this.renderer.domElement);if(t.enableDamping=!0,t.dampingFactor=.09,t.screenSpacePanning=!1,t.zoomToCursor=!0,t.minDistance=fh,t.maxDistance=ph,t.maxPolarAngle=te.degToRad(82),t.zoomSpeed=1.1,t.addEventListener("start",()=>{this.flight=void 0}),t.addEventListener("change",()=>{const n=t.target;n.x=te.clamp(n.x,this.hf.xMin,this.hf.xMax),n.z=te.clamp(n.z,this.hf.zMin,this.hf.zMax),this.dirty=!0}),this.external)return;const e=this.renderer.domElement;e.addEventListener("keydown",this.onKey),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointerup",this.onPointerUp)}clampView(t){return{x:te.clamp(t.x,this.hf.xMin,this.hf.xMax),z:te.clamp(t.z,this.hf.zMin,this.hf.zMax),dist:te.clamp(t.dist,fh,ph),polar:te.clamp(t.polar,2,82),azimuth:t.azimuth}}currentView(){const t=this.controls.target,e=new ir().setFromVector3(this.camera.position.clone().sub(t));return{x:t.x,z:t.z,dist:e.radius,polar:te.radToDeg(e.phi),azimuth:te.radToDeg(e.theta)}}applyView(t){const e=new ir(t.dist,te.degToRad(t.polar),te.degToRad(t.azimuth)),n=this.controls.target.set(t.x,this.hf.yAt(t.x,t.z),t.z);this.camera.position.setFromSpherical(e).add(n),this.camera.lookAt(n),this.dirty=!0}fly(t,e){if(t=this.clampView(t),!this.animating){this.flight=void 0,this.applyView(t),this.controls.update();return}const n=this.currentView();let s=(t.azimuth-n.azimuth)%360;s>180&&(s-=360),s<-180&&(s+=360),this.flight={from:n,to:{...t,azimuth:n.azimuth+s},t:0,duration:e}}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.fov=t/e<.8?52:38,this.camera.updateProjectionMatrix(),Gi.uPixel.value=2*Math.tan(te.degToRad(this.camera.fov)/2)/e,this.dirty=!0}}const v_="8",yo="Map and flood data © State of Queensland · Elevation © Geoscience Australia · Rainfall and river heights © Bureau of Meteorology (CC BY 4.0)",M_=`
.lgn-embed, .lgn-embed-layer { position: absolute; inset: 0; overflow: hidden; }
/* the labels sit over the map but never take a touch: drags and pinches must reach whatever the host listens on */
.lgn-embed-labels, .lgn-embed .lgn-label, .lgn-embed button.lgn-label { pointer-events: none; cursor: default; }
/* --inv-credit-bottom: the name the Inverloch model uses, so one host rule places either credit */
.lgn-embed-credit { position: absolute; left: 12px; right: 12px; bottom: var(--lgn-credit-bottom, var(--inv-credit-bottom, 6px)); width: fit-content; margin: 0 auto;
  padding: 2px 8px; border-radius: 4px; background: rgba(13, 24, 30, 0.7); color: rgba(255, 255, 255, 0.82); font: 10px/1.4 system-ui, sans-serif; text-align: center;
  pointer-events: none; }
`;function S_(i,t){if(!document.querySelector("style[data-logan-model]")){const d=document.createElement("style");d.setAttribute("data-logan-model",""),d.textContent=tg+M_,document.head.appendChild(d)}const e=document.createElement("div");e.className="lgn-embed";const n=document.createElement("div");n.className="lgn-embed-layer";const s=document.createElement("div");s.className="lgn-embed-layer lgn-embed-labels",s.setAttribute("aria-hidden","true");const r=document.createElement("p");r.className="lgn-embed-credit",r.textContent=yo,e.append(n,s,r),i.appendChild(e);let a=[],o=!1,l;const c=new Promise((d,h)=>l={ok:d,fail:h}),u=new x_(n,s,{onProgress:(d,h)=>{var f;return(f=t.onProgress)==null?void 0:f.call(t,d,h)},onReady:d=>{a=d.places.map(h=>{const f=Math.min(Math.max(h.view[0],120),7e3),g=h.view[1]*Math.PI/180,_=h.view[2]*Math.PI/180,m=h.x+f*Math.sin(g)*Math.sin(_),p=h.z+f*Math.sin(g)*Math.cos(_),v=u.groundAt(h.x,h.z),y=Math.max(u.groundAt(m,p)+30,v+f*Math.cos(g)),M=h.x-m,E=v-y,S=h.z-p,x=h.stand&&{x:h.x+h.stand.from[0],z:h.z-h.stand.from[1],yaw:Math.atan2(h.stand.from[0]-h.stand.at[0],h.stand.at[1]-h.stand.from[1]),pitch:h.stand.pitch};return{id:h.id,name:h.name,kind:h.kind,blurb:h.blurb,x:m,y,z:p,yaw:Math.atan2(-M,-S),pitch:Math.atan2(E,Math.hypot(M,S)),tx:h.x,tz:h.z,stand:x}}),t.labels===!1&&u.setLayerVisible("labels",!1),o=!0,l.ok()},onError:d=>{var h;return o?(h=t.onError)==null?void 0:h.call(t,d):l.fail(new Error(d))},onCompass:()=>{},onSelect:()=>{},onFloodLevel:d=>{var h;return(h=t.onFloodLevel)==null?void 0:h.call(t,d)}},{assets:typeof t.assets=="string"?W0(t.assets,v_):t.assets,external:!0,quality:t.quality});return u.init(),{ready:c,setCamera:(d,h,f,g,_)=>u.setExternalCamera(d,h,f,g,_),getCamera:()=>u.getCamera(),settled:()=>u.settled,setMinutes:d=>u.setSolarMinutes(d),setTide:()=>{},tide:{min:0,max:0,initial:0},setAnimating:d=>u.setAnimating(d),setLabelsVisible:d=>u.setLayerVisible("labels",d),setLabelObstacles:d=>u.setLabelObstacles(d),groundAt:(d,h)=>u.groundAt(d,h),waterLevel:()=>-1e6,waterAt:(d,h,f)=>u.waterAt(d,h,f),overview:()=>u.overview(),bounds:()=>u.bounds,fov:()=>u.fov,fromLatLon:(d,h)=>u.fromLatLon(d,h),spots:()=>a,floods:()=>u.floodScenarios().then(d=>d.events),setFlood:d=>u.showFlood(d),setFloodLevel:d=>u.setFloodLevel(d),floodDrop:Nc,credit:yo,dispose:()=>{u.dispose(),e.remove()}}}return mn.CREDIT=yo,mn.create=S_,Object.defineProperty(mn,Symbol.toStringTag,{value:"Module"}),mn}({});
