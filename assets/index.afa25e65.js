import{f as c,o,c as _,a as i,t as p,p as u,e as h,_ as d,b as s,w as g,d as f,F as v,r as C,h as $}from"./entry.be10bc6f.js";import{_ as x}from"./PLink.vue.1b6fb1bc.js";import"./nuxt-link.4b7e043a.js";const P=t=>(u("data-v-19e0dd13"),t=t(),h(),t),b={class:"container flex justify-center mb-20 lg:mb-30"},y={class:"relative"},I=P(()=>i("div",{class:"moving-block"},null,-1)),L={class:"title font-serif"},T=c({__name:"PageTitle",props:{title:{}},setup(t){return(e,a)=>(o(),_("div",b,[i("div",y,[I,i("div",L,p(e.$t(e.title)),1)])]))}});const k=d(T,[["__scopeId","data-v-19e0dd13"]]),B={class:"pt-10"},S=c({__name:"ChallengePageTitle",props:{title:{}},setup(t){return(e,a)=>{const n=k;return o(),_("div",B,[s(n,{title:e.title},null,8,["title"])])}}}),w={class:"py-5"},F=c({__name:"ChallengeListPageItem",props:{title:{},to:{}},setup(t){return(e,a)=>{const n=x;return o(),_("div",w,[s(n,{to:e.to,class:"h1"},{default:g(()=>[f(p(e.title),1)]),_:1},8,["to"])])}}}),N={class:"container"},V=c({__name:"ChallengeList",setup(t){const e=[{title:"Buttons",to:"/challenges/buttons"}];return(a,n)=>{const l=F;return o(),_("div",N,[(o(),_(v,null,C(e,({title:m,to:r})=>s(l,{key:r,title:m,to:r},null,8,["title","to"])),64))])}}}),A={};function E(t,e){const a=S,n=$("ChallengeAbout"),l=V;return o(),_("div",null,[s(a,{title:"Front-End Challenge"}),s(n),s(l)])}const z=d(A,[["render",E]]);export{z as default};
