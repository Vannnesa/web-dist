!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.f16914d7.js","./style-legacy.31bb380c.js","./index-legacy.e774b0c8.js","./ImageWithError-legacy.6bc929bd.js","./icon-legacy.a97ba346.js","./helper-legacy.4ffa964b.js"],(function(n){"use strict";var r,o,i,a,l,u,c,f,s,b,g,d,h,p,m,y,j,v,w,x,$,S,k,A,O,I,C,P,_,E;return{setters:[function(e){r=e.bJ,o=e.E,i=e.h,a=e.aq,l=e.l,u=e.aC,c=e.m,f=e.k,s=e.aR,b=e.b,g=e.a7,d=e.N,h=e.aE,p=e.dw,m=e.t,y=e.aT,j=e.aH,v=e.aB,w=e.S,x=e.aA,$=e.a6,S=e.ai},function(e){k=e.b},function(e){A=e.G},function(e){O=e.I},function(e){I=e.g,C=e.O},function(e){P=e.u,_=e.I,E=e.a}],execute:function(){n("G",(function(n){if((0,r().isHide)(n.obj))return null;var M=o().setPathAs,z=i(u,{get color(){return a()},get boxSize(){return"".concat(parseInt(l.grid_item_size)-30,"px")},get as(){return I(n.obj)}}),D=t(c(!1),2),G=D[0],H=D[1],K=f((function(){return s()&&(G()||n.obj.selected)})),L=k({id:1}).show,T=b(),W=T.pushHref,q=T.to,B=E().isMouseSupported,J=P();return i(S.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var t,r,o;return i(g,(r={get classList(){return{selected:!!n.obj.selected}},class:"grid-item viselect-item"},(o={})[t="data-index"]=o[t]||{},o[t].get=function(){return n.index},e(r,"w","$full"),e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),"_hover",o._hover=o._hover||{},o._hover.get=function(){return{transform:"scale(1.06)",bgColor:d()}},e(r,"as",A),"href",o.href=o.href||{},o.href.get=function(){return n.obj.name},"cursor",o.cursor=o.cursor||{},o.cursor.get=function(){return B()||s()&&!J()?"default":"pointer"},"bgColor",o.bgColor=o.bgColor||{},o.bgColor.get=function(){return h((function(){return!!n.obj.selected}),!0)()?d():void 0},e(r,"on:dblclick",(function(e){B()&&(e.ctrlKey||e.metaKey||e.shiftKey||q(W(n.obj.name)))})),e(r,"on:click",(function(e){if(B())return e.preventDefault();s()&&(e.preventDefault(),J()?q(W(n.obj.name)):p(n.index,!n.obj.selected))})),e(r,"onMouseEnter",(function(){H(!0),M(n.obj.name,n.obj.is_dir,!0)})),e(r,"onMouseLeave",(function(){H(!1)})),e(r,"onContextMenu",(function(e){m((function(){y(!1),p(n.index,!0,!0)})),L(e,{props:n.obj})})),"children",o.children=o.children||{},o.children.get=function(){return[i(j,{class:"item-thumbnail",get h(){return"".concat(parseInt(l.grid_item_size),"px")},w:"$full","on:dblclick":function(e){B()&&n.obj.type===C.IMAGE&&(e.stopPropagation(),e.preventDefault(),v.emit("gallery",n.obj.name))},"on:click":function(e){B()||s()&&!J()||n.obj.type===C.IMAGE&&(e.stopPropagation(),e.preventDefault(),v.emit("gallery",n.obj.name))},pos:"relative",get children(){return[i(w,{get when(){return K()},get children(){return i(_,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return n.obj.selected},onChange:function(e){p(n.index,e.target.checked)}})}}),i(w,{get when(){return n.obj.thumb},fallback:z,get children(){return i(O,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return i(x,{size:"lg"})},fallbackErr:z,get src(){return n.obj.thumb},loading:"lazy"})}})]}}),i($,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return n.obj.name},get children(){return n.obj.name}})]},function(e,t){for(var n in t)(i=t[n]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n,i);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(t),o=0;o<r.length;o++){var i,a=r[o];(i=t[a]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,a,i)}}(r,o),r))}})}))}}}))}();
