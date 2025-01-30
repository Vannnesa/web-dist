import{h as t,H as D,a7 as y,k as x,al as T,am as $,bP as s,a1 as R,a0 as M,b as f,a as _,O as N,Q as W,N as w,S as E,aC as p,bQ as h,m as U,bR as b,aj as m,ac as c,aI as H,W as n,X as r,bS as z,bT as F,bU as Y,bV as j,bW as X,bX as q,bY as P,bZ as Q,b_ as J,b$ as Z,aW as K,c0 as G,c1 as ee,c2 as te,aD as ne,c3 as re,c4 as oe,aP as ie,a$ as se,be as ae,Y as O,ap as S,c5 as le,br as ce,bj as ue,bk as de,bl as me,bm as ge,bn as _e,aH as I,bp as C,bq as k,bf as he,c6 as Ee,n as pe,c7 as fe,c8 as be,c9 as Ie}from"./index.de4f757e.js";import{b as Ae,a as ve}from"./useTitle.7aae3524.js";import{A as Le,k as Te,b as $e,l as Re,m as Pe,n as Se,o as De}from"./index.a5543fd1.js";import{S as we}from"./index.f0aaca32.js";var a=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e))(a||{}),Oe=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Oe||{});const Ce=e=>{const o=x(()=>{if(!T.is_admin($())){if(e.role===void 0)return!1;if(e.role===s.GENERAL&&!T.is_general($()))return!1}return!0});return t(M,{get fallback(){return t(ke,e)},get children(){return[t(R,{get when(){return!o()},children:null}),t(R,{get when(){return e.children},get children(){return t(Ve,e)}})]}})},ke=e=>{const{pathname:o}=f(),i=_(),u=()=>o()===e.to;return t(Le,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:N,get href(){return e.to},onClick:d=>{var L;if(V(),e.refresh){(L=d.stopPropagation)==null||L.call(d);let g=e.to;g.startsWith("http")||(g=W(g)),window.open(g,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return i(e.title)}})]}})},Ve=e=>{const{pathname:o}=f(),[i,u]=U(o().includes(e.to)),d=_();return t(c,{w:"$full",get children(){return[t(b,{justifyContent:"space-between",onClick:()=>{u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return d(e.title)}})]}}),t(p,{as:Te,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return i()},get children(){return t(c,{pl:"$2",get children(){return t(A,{get items(){return e.children}})}})}})]}})},A=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(D,{get each(){return e.items},children:o=>t(Ce,o)})}});function Be(e){return H({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>r(()=>import("./Common.9baa164c.js"),["assets/Common.9baa164c.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/SettingItem.eed277bd.js","assets/item_type.ee87ae79.js","assets/index.a5543fd1.js","assets/ResponsiveGrid.8fb8490a.js","assets/index.f0aaca32.js"])),v=[{title:"manage.sidemenu.profile",icon:z,to:"/@iris",role:s.GUEST,component:n(()=>r(()=>import("./Profile.788628a8.js"),["assets/Profile.788628a8.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.275fafaa.js"]))},{title:"manage.sidemenu.settings",icon:F,to:"/@iris/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/@iris/settings/site",component:()=>t(l,{get group(){return a.SITE}})},{title:"manage.sidemenu.style",icon:j,to:"/@iris/settings/style",component:()=>t(l,{get group(){return a.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@iris/settings/preview",component:()=>t(l,{get group(){return a.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@iris/settings/global",component:()=>t(l,{get group(){return a.GLOBAL}})},{title:"manage.sidemenu.sso",icon:P,to:"/@iris/settings/sso",component:()=>t(l,{get group(){return a.SSO}})},{title:"manage.sidemenu.ldap",icon:P,to:"/@iris/settings/ldap",component:()=>t(l,{get group(){return a.LDAP}})},{title:"manage.sidemenu.s3",icon:Q,to:"/@iris/settings/s3",component:n(()=>r(()=>import("./S3.d2dc085e.js"),["assets/S3.d2dc085e.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/SettingItem.eed277bd.js","assets/item_type.ee87ae79.js","assets/index.a5543fd1.js","assets/ResponsiveGrid.8fb8490a.js","assets/FolderTree.50ddc75b.js","assets/index.b9920492.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.f0aaca32.js"]))},{title:"manage.sidemenu.ftp",icon:J,to:"/@iris/settings/ftp",component:()=>t(l,{get group(){return a.FTP}})},{title:"manage.sidemenu.other",icon:Z,to:"/@iris/settings/other",component:n(()=>r(()=>import("./Other.8da4dd78.js"),["assets/Other.8da4dd78.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/FolderTree.50ddc75b.js","assets/index.a5543fd1.js","assets/useTitle.7aae3524.js","assets/SettingItem.eed277bd.js","assets/item_type.ee87ae79.js","assets/index.f0aaca32.js"]))}]},{title:"manage.sidemenu.tasks",icon:Be,to:"/@iris/tasks",role:s.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:K,to:"/@iris/tasks/offline_download",role:s.GENERAL,component:n(()=>r(()=>import("./offline_download.f992fb3b.js"),["assets/offline_download.f992fb3b.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/helper.b2de05fd.js","assets/Paginator.c0e96492.js","assets/index.a5543fd1.js"]))},{title:"manage.sidemenu.upload",icon:G,to:"/@iris/tasks/upload",role:s.GENERAL,component:n(()=>r(()=>import("./Upload.2daebf78.js"),["assets/Upload.2daebf78.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/helper.b2de05fd.js","assets/Paginator.c0e96492.js","assets/index.a5543fd1.js"]))},{title:"manage.sidemenu.copy",icon:ee,to:"/@iris/tasks/copy",role:s.GENERAL,component:n(()=>r(()=>import("./Copy.9602f63a.js"),["assets/Copy.9602f63a.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/helper.b2de05fd.js","assets/Paginator.c0e96492.js","assets/index.a5543fd1.js"]))},{title:"manage.sidemenu.decompress",icon:$e,to:"/@iris/tasks/decompress",role:s.GENERAL,component:n(()=>r(()=>import("./Decompress.82c14b9f.js"),["assets/Decompress.82c14b9f.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/helper.b2de05fd.js","assets/Paginator.c0e96492.js","assets/index.a5543fd1.js"]))}]},{title:"manage.sidemenu.users",icon:te,to:"/@iris/users",component:n(()=>r(()=>import("./Users.0e54c790.js"),["assets/Users.0e54c790.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/DeletePopover.df160835.js","assets/Wether.3d67ae94.js"]))},{title:"manage.sidemenu.storages",icon:Re,to:"/@iris/storages",component:n(()=>r(()=>import("./Storages.ff293583.js"),["assets/Storages.ff293583.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/DeletePopover.df160835.js"]))},{title:"manage.sidemenu.metas",icon:we,to:"/@iris/metas",component:n(()=>r(()=>import("./Metas.c41d925c.js"),["assets/Metas.c41d925c.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/DeletePopover.df160835.js","assets/Wether.3d67ae94.js"]))},{title:"manage.sidemenu.indexes",icon:ne,to:"/@iris/indexes",component:n(()=>r(()=>import("./indexes.c4b09308.js"),["assets/indexes.c4b09308.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/Common.9baa164c.js","assets/useTitle.7aae3524.js","assets/SettingItem.eed277bd.js","assets/item_type.ee87ae79.js","assets/index.a5543fd1.js","assets/ResponsiveGrid.8fb8490a.js","assets/index.f0aaca32.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@iris/backup-restore",icon:Pe,component:n(()=>r(()=>import("./backup-restore.cf9e4319.js"),["assets/backup-restore.cf9e4319.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js","assets/index.b9920492.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:re,to:"/@iris/about",role:s.GUEST,component:n(()=>r(()=>import("./About.d5592c55.js"),["assets/About.d5592c55.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/useTitle.7aae3524.js"]))},{title:"manage.sidemenu.docs",icon:Se,to:"https://alist.nn.ci",role:s.GUEST,external:!0},{title:"manage.sidemenu.home",icon:oe,to:"/",role:s.GUEST,refresh:!0}],{isOpen:ye,onOpen:xe,onClose:V}=ie(),[Me,Ne]=se(()=>ae.get("/auth/logout")),We=()=>{const e=_(),{to:o}=f(),i=async()=>{he(await Ne(),()=>{Ee(),pe.success(e("manage.logout_success")),o(`/@vannesa?redirect=${encodeURIComponent(location.pathname)}`)})};return t(c,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[t(b,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(S,{"aria-label":"menu",get icon(){return t(De,{})},display:{"@sm":"none"},onClick:xe,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@iris")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(S,{"aria-label":"logout",get icon(){return t(le,{})},get loading(){return Me()},onClick:i,size:"sm"})}})]}}),t(ce,{get opened(){return ye()},placement:"left",onClose:V,get children(){return[t(ue,{}),t(de,{get children(){return[t(me,{}),t(ge,{color:"$info9",get children(){return e("manage.title")}}),t(_e,{get children(){return[t(A,{items:v}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},Ue=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.0b54f138.js"),["assets/AddOrEdit.0b54f138.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.8fb8490a.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.0b54f138.js"),["assets/AddOrEdit.0b54f138.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.8fb8490a.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.ef537456.js"),["assets/AddOrEdit.ef537456.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/FolderTree.50ddc75b.js","assets/index.a5543fd1.js","assets/PublicKeys.275fafaa.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.ef537456.js"),["assets/AddOrEdit.ef537456.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/FolderTree.50ddc75b.js","assets/index.a5543fd1.js","assets/PublicKeys.275fafaa.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.d3ebffcf.js"),["assets/AddOrEdit.d3ebffcf.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/FolderTree.50ddc75b.js","assets/index.a5543fd1.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.d3ebffcf.js"),["assets/AddOrEdit.d3ebffcf.js","assets/index.de4f757e.js","assets/index.c4c82a28.css","assets/FolderTree.50ddc75b.js","assets/index.a5543fd1.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.5ad2f109.js"),["assets/2fa.5ad2f109.js","assets/index.de4f757e.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.444a964e.js"),["assets/Messenger.444a964e.js","assets/index.de4f757e.js","assets/index.c4c82a28.css"]))}],He=e=>(Ae(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,o=[])=>(e.forEach(i=>{i.children?B(i.children,o):o.push({to:fe(i.to,"/@iris"),component:i.component||(()=>t(He,{get title(){return i.title},get to(){return i.to||"empty"}}))})}),o),ze=B(v).concat(Ue),Fe=()=>{const e=_();return ve(()=>e("manage.title")),t(c,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(We,{}),t(b,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(c,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return[t(A,{items:v}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(c,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(be,{get children(){return t(D,{each:ze,children:o=>t(Ie,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));export{Oe as F,a as G,Qe as i};
