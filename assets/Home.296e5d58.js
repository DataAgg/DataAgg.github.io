import{_ as d,i as h,I as k,k as i,u as e,o,c as a,a as c,J as I,K as n,t as l,y as x,L as g,F as L,x as F,M as A,e as m,O as y}from"./app.aad115ad.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],w={key:1,id:"main-title",class:"title"},V={key:2,class:"tagline"},b=h({setup(p){const{site:s,frontmatter:t}=k(),_=i(()=>{const{heroImage:r,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return r||u||$||H&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(r,u)=>e(_)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(I)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):n("",!0),e(v)?(o(),a("h1",w,l(e(v)),1)):n("",!0),e(f)?(o(),a("p",V,l(e(f)),1)):n("",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):n("",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var D=d(b,[["__scopeId","data-v-6377c28e"]]);const S={key:0,class:"home-features"},j={class:"wrapper"},E={class:"container"},J={class:"features"},K={key:0,class:"title"},M={key:1,class:"details"},O=h({setup(p){const{frontmatter:s}=k(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[c("div",j,[c("div",E,[c("div",J,[(o(!0),a(L,null,F(e(_),(r,u)=>(o(),a("section",{key:u,class:"feature"},[r.title?(o(),a("h2",K,l(r.title),1)):n("",!0),r.details?(o(),a("p",M,l(r.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var q=d(O,[["__scopeId","data-v-9a7a5cc2"]]);const z={key:0,class:"footer"},G={class:"container"},P={class:"text"},Q=h({setup(p){const{frontmatter:s}=k();return(t,_)=>e(s).footer?(o(),a("footer",z,[c("div",G,[c("p",P,l(e(s).footer),1)])])):n("",!0)}});var R=d(Q,[["__scopeId","data-v-00498372"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=h({setup(p){return(s,t)=>{const _=A("Content");return o(),a("main",U,[m(D),y(s.$slots,"hero",{},void 0,!0),m(q),c("div",W,[m(_)]),y(s.$slots,"features",{},void 0,!0),m(R),y(s.$slots,"footer",{},void 0,!0)])}}});var Z=d(X,[["__scopeId","data-v-42c6f074"]]);export{Z as default};