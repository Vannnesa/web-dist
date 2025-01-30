import{a as _,b as y,a$ as v,be as u,m as x,dj as p,h as e,aj as h,C as o,ac as T,dk as B,dl as F,dm as f,H as m,dn as b,dp as H,dq as s,bf as g,n as $,a7 as L,cm as M,aL as P,aM as R,al as j}from"./index.de4f757e.js";import{b as D}from"./useTitle.7aae3524.js";import{D as I}from"./DeletePopover.df160835.js";import{W}from"./Wether.3d67ae94.js";const q=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(M,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},z=t=>{const n=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:P,children:(a,d)=>e(R,{get label(){return n(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(j.can(t.user,d()))}})}})})}})},E=()=>{const t=_();D("manage.sidemenu.users");const{to:n}=y(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=x([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[C,S]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(L,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{n("/@iris/users/add")},get children(){return t("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return t(`users.${r}`)}})}),e(b,{get children(){return t("global.operations")}})]}})}}),e(H,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(q,{get role(){return r.role}})}}),e(s,{get children(){return e(z,{user:r})}}),e(s,{get children(){return e(W,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{n(`/@iris/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(I,{get name(){return r.username},get loading(){return C()===r.id},onClick:async()=>{const c=await S(r.id);g(c,()=>{$.success(t("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(t("users.cancel_2fa_success")),l()})},get children(){return t("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{E as default};
