import{a as c,m as n,aa as p,h as e,aj as u,C as r,dM as g,dN as d,a2 as a,dL as f}from"./index.de4f757e.js";import{F as h}from"./File.258e8461.js";import"./icon.d4ed06cc.js";import"./index.f0aaca32.js";import"./index.a5543fd1.js";import"./Layout.fd23612d.js";import"./useTitle.7aae3524.js";import"./FolderTree.50ddc75b.js";import"./index.9af6fddc.js";const L=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{L as default};
