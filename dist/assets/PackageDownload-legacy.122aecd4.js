!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(_){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h={};function d(){}function p(){}function m(){}var v={};s(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(U([])));g&&g!==r&&n.call(g,a)&&(v=g);var w=m.prototype=d.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(o,a,i,c){var s=f(e[o],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==u(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(h).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function U(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,s(w,"constructor",m),s(m,"constructor",p),p.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(S.prototype),s(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=U,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:U(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function t(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=i(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}function n(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,u,"next",e)}function u(e){n(i,o,a,c,u,"throw",e)}c(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}System.register(["./index-legacy.f16914d7.js"],(function(n){"use strict";var i,c,l,f,h,d,p,m,v,y,g,w,b,S,x,L,E,k,U;return{setters:[function(e){i=e.a,c=e.m,l=e.b,f=e.s,h=e.h,d=e.a7,p=e.bQ,m=e.aE,v=e.H,y=e.a6,g=e.A,w=e.B,b=e.C,S=e.S,x=e.p,L=e.d,E=e.g,k=e.f,U=e._}],execute:function(){var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.crc=-1}var t,r,n;return t=e,(r=[{key:"append",value:function(e){for(var t=0|this.crc,r=this.table,n=0,o=0|e.length;n<o;n++)t=t>>>8^r[255&(t^e[n])];this.crc=t}},{key:"get",value:function(){return~this.crc}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();j.prototype.table=function(){var e,t,r,n=[];for(e=0;e<256;e++){for(r=e,t=0;t<8;t++)r=1&r?r>>>1^3988292384:r>>>1;n[e]=r}return n}();var _=function(e){var t=new Uint8Array(e);return{array:t,view:new DataView(t.buffer)}};window.ZIP=function(e){var t,r,n,o=Object.create(null),a=[],i=new TextEncoder,c=0,u=0;function s(){u++,(r=o[a[u]])?h():n&&f()}var l={enqueue:function(e){if(n)throw new TypeError("Cannot enqueue a chunk into a readable stream that is closed or has been requested to be closed");var u=e.name.trim(),l=new Date(void 0===e.lastModified?Date.now():e.lastModified);if(e.directory&&!u.endsWith("/")&&(u+="/"),o[u])throw new Error("File already exists.");var f=i.encode(u);a.push(u);var d=o[u]={level:0,ctrl:t,directory:!!e.directory,nameBuf:f,comment:i.encode(e.comment||""),compressedLength:0,uncompressedLength:0,writeHeader:function(){var e=_(26),r=_(30+f.length);d.offset=c,d.header=e,0===d.level||d.directory||e.view.setUint16(4,2048),e.view.setUint32(0,335546376),e.view.setUint16(6,(l.getHours()<<6|l.getMinutes())<<5|l.getSeconds()/2,!0),e.view.setUint16(8,(l.getFullYear()-1980<<4|l.getMonth()+1)<<5|l.getDate(),!0),e.view.setUint16(22,f.length,!0),r.view.setUint32(0,1347093252),r.array.set(e.array,4),r.array.set(f,30),c+=r.array.length,t.enqueue(r.array)},writeFooter:function(){var e=_(16);e.view.setUint32(0,1347094280),d.crc&&(d.header.view.setUint32(10,d.crc.get(),!0),d.header.view.setUint32(14,d.compressedLength,!0),d.header.view.setUint32(18,d.uncompressedLength,!0),e.view.setUint32(4,d.crc.get(),!0),e.view.setUint32(8,d.compressedLength,!0),e.view.setUint32(12,d.uncompressedLength,!0)),t.enqueue(e.array),c+=d.compressedLength+16,s()},fileLike:e};r||(r=d,h())},close:function(){if(n)throw new TypeError("Cannot close a readable stream that has already been requested to be closed");r||f(),n=!0}};function f(){var e,r,n=0,i=0;for(e=0;e<a.length;e++)n+=46+(r=o[a[e]]).nameBuf.length+r.comment.length;var u=_(n+22);for(e=0;e<a.length;e++)r=o[a[e]],u.view.setUint32(i,1347092738),u.view.setUint16(i+4,5120),u.array.set(r.header.array,i+6),u.view.setUint16(i+32,r.comment.length,!0),r.directory&&u.view.setUint8(i+38,16),u.view.setUint32(i+42,r.offset,!0),u.array.set(r.nameBuf,i+46),u.array.set(r.comment,i+46+r.nameBuf.length),i+=46+r.nameBuf.length+r.comment.length;u.view.setUint32(i,1347093766),u.view.setUint16(i+8,a.length,!0),u.view.setUint16(i+10,a.length,!0),u.view.setUint32(i+12,n,!0),u.view.setUint32(i+16,c,!0),t.enqueue(u.array),t.close()}function h(){var e;if(r)return r.directory?r.writeFooter(r.writeHeader()):r.reader?(e=r).reader.read().then((function(t){if(t.done)return e.writeFooter();var r=t.value;e.crc.append(r),e.uncompressedLength+=r.length,e.compressedLength+=r.length,e.ctrl.enqueue(r)})):void(r.fileLike.stream?(r.crc=new j,r.reader=r.fileLike.stream.getReader(),r.writeHeader()):s())}return new ReadableStream({start:function(r){t=r,e.start&&Promise.resolve(e.start(l))},pull:function(){return h()||e.pull&&Promise.resolve(e.pull(l))}})};var M={exports:{}};/*! streamsaver. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */!function(e){var t=this;e.exports=function(){var e="object"===("undefined"==typeof window?"undefined":u(window))?window:t;e.HTMLElement||console.warn("streamsaver is meant to run on browsers main thread");var r=null,n=!1,o=function(e){try{e()}catch(t){}},a=e.WebStreamsPolyfill||{},i=e.isSecureContext,c=/constructor/i.test(e.HTMLElement)||!!e.safari||!!e.WebKitPoint,s=i||"MozAppearance"in document.documentElement.style?"iframe":"navigate",l={createWriteStream:p,WritableStream:e.WritableStream||a.WritableStream,supported:!0,version:{full:"2.0.5",major:2,minor:0,dot:5},mitm:"https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"};function f(e){if(!e)throw new Error("meh");var t=document.createElement("iframe");return t.hidden=!0,t.src=e,t.loaded=!1,t.name="iframe",t.isIframe=!0,t.postMessage=function(){var e;return(e=t.contentWindow).postMessage.apply(e,arguments)},t.addEventListener("load",(function(){t.loaded=!0}),{once:!0}),document.body.appendChild(t),t}function h(t){var r="width=200,height=100",n=document.createDocumentFragment(),o={frame:e.open(t,"popup",r),loaded:!1,isIframe:!1,isPopup:!0,remove:function(){o.frame.close()},addEventListener:function(){n.addEventListener.apply(n,arguments)},dispatchEvent:function(){n.dispatchEvent.apply(n,arguments)},removeEventListener:function(){n.removeEventListener.apply(n,arguments)},postMessage:function(){var e;(e=o.frame).postMessage.apply(e,arguments)}},a=function t(r){r.source===o.frame&&(o.loaded=!0,e.removeEventListener("message",t),o.dispatchEvent(new Event("load")))};return e.addEventListener("message",a),o}try{new Response(new ReadableStream),i&&!("serviceWorker"in navigator)&&(c=!0)}catch(m){c=!0}function d(){r||(r=i?f(l.mitm):h(l.mitm))}function p(e,t,o){var a={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},i=0,u=null,h=null,p=null;if(Number.isFinite(t)){var m=[t,o];o=m[0],t=m[1],console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),a.size=o,a.writableStrategy=t}else t&&t.highWaterMark?(console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),a.size=o,a.writableStrategy=t):a=t||{};if(!c){d(),h=new MessageChannel,e=encodeURIComponent(e.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");var v={transferringReadable:n,pathname:a.pathname||Math.random().toString().slice(-6)+"/"+e,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+e}};a.size&&(v.headers["Content-Length"]=a.size);var y,g=[v,"*",[h.port2]];if(n){var w="iframe"===s?void 0:{transform:function(e,t){if(!(e instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");i+=e.length,t.enqueue(e),u&&(location.href=u,u=null)},flush:function(){u&&(location.href=u)}},b=(p=new l.TransformStream(w,a.writableStrategy,a.readableStrategy)).readable;h.port1.postMessage({readableStream:b},[b])}h.port1.onmessage=function(e){e.data.download?"navigate"===s?(r.remove(),r=null,i?location.href=e.data.download:u=e.data.download):(r.isPopup&&(r.remove(),r=null,"iframe"===s&&f(l.mitm)),f(e.data.download)):e.data.abort&&(S=[],h.port1.postMessage("abort"),h.port1.onmessage=null,h.port1.close(),h.port2.close(),h=null)},r.loaded?(y=r).postMessage.apply(y,g):r.addEventListener("load",(function(){var e;(e=r).postMessage.apply(e,g)}),{once:!0})}var S=[];return!c&&p&&p.writable||new l.WritableStream({write:function(e){if(!(e instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");c?S.push(e):(h.port1.postMessage(e),i+=e.length,u&&(location.href=u,u=null))},close:function(){if(c){var t=new Blob(S,{type:"application/octet-stream; charset=utf-8"}),r=document.createElement("a");r.href=URL.createObjectURL(t),r.download=e,r.click()}else h.port1.postMessage("end")},abort:function(){S=[],h.port1.postMessage("abort"),h.port1.onmessage=null,h.port1.close(),h.port2.close(),h=null}},a.writableStrategy)}return o((function(){var e=(new TransformStream).readable,t=new MessageChannel;t.port1.postMessage(e,[e]),t.port1.close(),t.port2.close(),n=!0,Object.defineProperty(l,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})})),l}()}(M);var T=M.exports;T.mitm="/streamer/mitm.html";var A=0;n("default",(function(n){var u=i(),s=a(c(u("home.package_download.initializing")),2),j=s[0],_=s[1],M=a(c(0),2),O=M[0],P=M[1],C=l().pathname,I=f(),F=function(){var n=o(e().mark((function n(o,a){var i,c,u,s,l,f,h;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.is_dir){e.next=5;break}return A+=a.size,e.abrupt("return",[{path:L(o,a.name),url:E(L(C(),o),a,"direct",!0)}]);case 5:return e.next=7,k(L(C(),o,a.name),U());case 7:if(200===(c=e.sent).code){e.next=10;break}return e.abrupt("return",c.message);case 10:u=[],s=r(null!==(i=c.data.content)&&void 0!==i?i:[]),e.prev=12,s.s();case 14:if((l=s.n()).done){e.next=26;break}return f=l.value,e.next=18,F(L(o,a.name),f);case 18:if("string"!=typeof(h=e.sent)){e.next=23;break}return e.abrupt("return",h);case 23:u.push.apply(u,t(h));case 24:e.next=14;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(12),s.e(e.t0);case 31:return e.prev=31,s.f(),e.finish(31);case 34:return e.abrupt("return",u);case 35:case"end":return e.stop()}}),n,null,[[12,28,31,34]])})));return function(e,t){return n.apply(this,arguments)}}(),W=a(c([]),2),q=W[0],z=W[1],N=function(){var n=o(e().mark((function n(){var o,a,i,c,s,l,f,h,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=x(C()),1===I.length&&(o=I[0].name),o||(o=u("manage.sidemenu.home")),a=T.createWriteStream("".concat(o,".zip"),{size:A}),_(u("home.package_download.fetching_struct")),P(2),i=[],c=r(I),e.prev=8,c.s();case 10:if((s=c.n()).done){e.next=24;break}return l=s.value,e.next=14,F("",l);case 14:if("string"!=typeof(f=e.sent)){e.next=21;break}return _("".concat(u("home.package_download.fetching_struct_failed"),": ").concat(f)),P(1),e.abrupt("return",f);case 21:i.push.apply(i,t(f));case 22:e.next=10;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(8),c.e(e.t0);case 29:return e.prev=29,c.f(),e.finish(29);case 32:if(_(u("home.package_download.downloading")),P(3),h=i.values(),d=new window.ZIP({pull:function(e){var r=h.next();if(!r.done){var n=r.value.path.replace(/^\/+|\/+$/g,"");1===I.length&&(n=n.replace("".concat(o,"/"),""));var a=r.value.url;return fetch(a).then((function(r){z((function(e){return[].concat(t(e),[n])})),e.enqueue({name:n,stream:r.body})}))}e.close()}}),!window.WritableStream||!d.pipeTo){e.next=38;break}return e.abrupt("return",d.pipeTo(a).then((function(){_("".concat(u("home.package_download.success"))),P(4)})).catch((function(e){_("".concat(u("home.package_download.failed"),": ").concat(e)),P(1)})));case 38:case"end":return e.stop()}}),n,null,[[8,26,29,32]])})));return function(){return n.apply(this,arguments)}}();return N(),[h(g,{get children(){return h(d,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[h(p,{get children(){return[m((function(){return u("home.package_download.current_status")})),": ",m((function(){return j()}))]}}),h(v,{get each(){return q()},children:function(e){return h(y,{css:{wordBreak:"break-all"},get children(){return["Fetching: ",e]}})}})]}})}}),h(S,{get when(){return[1,4].includes(O())},get children(){return h(w,{get children(){return h(b,{colorScheme:"info",get onClick(){return n.onClose},get children(){return u("global.close")}})}})}})]}))}}}))}();
