!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,c,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);u=!0);}catch(o){a=!0,c=o}finally{try{u||null==e.return||e.return()}finally{if(a)throw c}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.e06448b3.js","./index-legacy.74c0282a.js","./index-legacy.5603f9ba.js","./Layout-legacy.581e5b81.js"],(function(r){"use strict";var e,n,c,i,u,a,o,s,l,f,p,y,d,m,O,b,g,j,x,h,E,v,I,A,D,T,w,L,N,S,U,M,R,F,V,X,G,K;return{setters:[function(t){e=t.cJ,n=t.cK,c=t.cL,i=t.cM,u=t.cN,a=t.cO,o=t.cP,s=t.cQ,l=t.cR,f=t.cS,p=t.cT,y=t.cU,d=t.cV,m=t.cW,O=t.cX,b=t.cY,g=t.cZ,j=t.c_},function(t){x=t.a,h=t.b,E=t.c,v=t.d,I=t.e,A=t.f,D=t.g,T=t.h,w=t.i,L=t.j},function(t){N=t.m,S=t.n,U=t.p,M=t.q,R=t.r,F=t.s,V=t.t,X=t.u,G=t.v},function(t){K=t.I}],execute:function(){var W=r("O",function(t){return t[t.UNKNOWN=0]="UNKNOWN",t[t.FOLDER=1]="FOLDER",t[t.VIDEO=2]="VIDEO",t[t.AUDIO=3]="AUDIO",t[t.TEXT=4]="TEXT",t[t.IMAGE=5]="IMAGE",t}(W||{})),C={"dmg,ipa,plist,tipa":f,"exe,msi":p,apk:K,db:N,md:y,epub:S,iso:U,m3u8:s,"doc,docx":d,"xls,xlsx":m,"ppt,pptx":O,pdf:b,"psd,pdd":x,prproj:h,"ai,ait,eps,epsf,ps":E,aep:v,sesx:I,indd:A,go:M,java:R,pnp:D,"py,pyc,pyo,pyi,pyw,pyd,pyx":F,"ts,tsx":T,"yaml,yml,toml":g,xml:j,sh:w,json:V,"js,mjs,cjs":L,css:X,html:G};r("g",(function(r){return function(r,e){if(r!==W.FOLDER){for(var f=0,p=Object.entries(C);f<p.length;f++){var y=t(p[f],2),d=y[0],m=y[1];if(d.split(",").includes(e.toLowerCase()))return m}if(n().includes(e))return c}switch(r){case W.FOLDER:return l;case W.VIDEO:return s;case W.AUDIO:return o;case W.TEXT:return a;case W.IMAGE:return u;default:return i}}(r.type,e(r.name))}))}}}))}();
