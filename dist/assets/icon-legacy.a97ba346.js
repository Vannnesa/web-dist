!function(){function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,c,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(o){a=!0,c=o}finally{try{u||null==r.return||r.return()}finally{if(a)throw c}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.f16914d7.js","./index-legacy.83dc8452.js","./index-legacy.e774b0c8.js","./Layout-legacy.fc6ef4f0.js"],(function(e){"use strict";var r,n,c,i,u,a,o,s,l,f,p,y,d,m,O,g,j,x,E,b,h,I,v,A,D,w,F,L,N,T,S,U,M,G,R,X;return{setters:[function(t){r=t.cB,n=t.cC,c=t.cD,i=t.cE,u=t.cF,a=t.cG,o=t.cH,s=t.cI,l=t.cJ,f=t.cK,p=t.cL,y=t.cM,d=t.cN,m=t.cO,O=t.cP,g=t.cQ},function(t){j=t.a,x=t.b,E=t.c,b=t.d,h=t.e,I=t.f,v=t.g,A=t.h,D=t.i,w=t.j},function(t){F=t.m,L=t.n,N=t.p,T=t.q,S=t.r,U=t.s,M=t.t,G=t.u,R=t.v},function(t){X=t.I}],execute:function(){var B=e("O",function(t){return t[t.UNKNOWN=0]="UNKNOWN",t[t.FOLDER=1]="FOLDER",t[t.VIDEO=2]="VIDEO",t[t.AUDIO=3]="AUDIO",t[t.TEXT=4]="TEXT",t[t.IMAGE=5]="IMAGE",t}(B||{})),C={"dmg,ipa,plist,tipa":r,"exe,msi":n,apk:X,db:F,md:c,epub:L,iso:N,m3u8:i,"doc,docx":u,"xls,xlsx":a,"ppt,pptx":o,pdf:s,"psd,pdd":j,prproj:x,"ai,ait,eps,epsf,ps":E,aep:b,sesx:h,indd:I,go:T,java:S,pnp:v,"py,pyc,pyo,pyi,pyw,pyd,pyx":U,"ts,tsx":A,"yaml,yml,toml":BsFiletypeYml,xml:BsFiletypeXml,sh:D,json:M,"js,mjs,cjs":w,css:G,html:R};e("g",(function(e){return function(e,r){if(e!==B.FOLDER){for(var n=0,c=Object.entries(C);n<c.length;n++){var u=t(c[n],2),a=u[0],o=u[1];if(a.split(",").includes(r.toLowerCase()))return o}if(f().includes(r))return p}switch(e){case B.FOLDER:return g;case B.VIDEO:return i;case B.AUDIO:return O;case B.TEXT:return m;case B.IMAGE:return d;default:return y}}(e.type,l(e.name))}))}}}))}();
