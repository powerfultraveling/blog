import{_ as F}from"./SIcon.vue.020cefa2.js";import{j as E,K as T,L as j,M as N,z,D as H,i as c,N as L,A as q,f as R,O as A,k as h,o as m,c as g,a as u,b as I,t as D,n as S,m as b,F as O,r as M,p as V,e as G,_ as $,P as K,h as U,w as W}from"./entry.4079d3b3.js";import{_ as J}from"./ChallengeInnerPageWrapper.0bff383d.js";import"./Icon.ad03dc91.js";import"./index.d3bdc2a1.js";const Q=()=>null;function X(...l){const d=typeof l[l.length-1]=="string"?l.pop():void 0;typeof l[0]!="string"&&l.unshift(d);let[n,o,e={}]=l;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??Q,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=H(),P=()=>a.isHydrating?a.payload.data[n]:a.static.data[n],x=()=>P()!==void 0;(!a._asyncData[n]||!e.immediate)&&(a._asyncData[n]={data:E(P()??e.default()),pending:E(!x()),error:T(a.payload._errors,n),status:E("idle")});const s={...a._asyncData[n]};s.refresh=s.execute=(i={})=>{if(a._asyncDataPromises[n]){if(i.dedupe===!1)return a._asyncDataPromises[n];a._asyncDataPromises[n].cancelled=!0}if((i._initial||a.isHydrating&&i._initial!==!1)&&x())return P();s.pending.value=!0,s.status.value="pending";const f=new Promise((t,r)=>{try{t(o(a))}catch(k){r(k)}}).then(t=>{if(f.cancelled)return a._asyncDataPromises[n];let r=t;e.transform&&(r=e.transform(t)),e.pick&&(r=Y(r,e.pick)),s.data.value=r,s.error.value=null,s.status.value="success"}).catch(t=>{if(f.cancelled)return a._asyncDataPromises[n];s.error.value=t,s.data.value=c(e.default()),s.status.value="error"}).finally(()=>{f.cancelled||(s.pending.value=!1,a.payload.data[n]=s.data.value,s.error.value&&(a.payload._errors[n]=L(s.error.value)),delete a._asyncDataPromises[n])});return a._asyncDataPromises[n]=f,a._asyncDataPromises[n]};const _=()=>s.refresh({_initial:!0}),w=e.server!==!1&&a.payload.serverRendered;{const i=q();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const t=i._nuxtOnBeforeMountCbs;i&&(j(()=>{t.forEach(r=>{r()}),t.splice(0,t.length)}),N(()=>t.splice(0,t.length)))}w&&a.isHydrating&&x()?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):i&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(_):e.immediate&&_(),e.watch&&z(e.watch,()=>s.refresh());const f=a.hook("app:data:refresh",t=>{if(!t||t.includes(n))return s.refresh()});i&&N(f)}const p=Promise.resolve(a._asyncDataPromises[n]).then(()=>s);return Object.assign(p,s),p}function Y(l,d){const n={};for(const o of d)n[o]=l[o];return n}const Z=l=>(V("data-v-f15f0da2"),l=l(),G(),l),ee={key:0,class:"flex justify-center font-sans"},te={class:"flex items-center space-x-4"},ae={class:"flex space-x-4 md:hidden"},ne=Z(()=>u("li",null,"/",-1)),se={class:"text-gray"},oe={class:"page-numbers"},re={key:1},ie=["onClick"],ce={key:2},C=1,y=5,le=R({__name:"SPagination",props:{total:{default:0},perPage:{default:10}},setup(l){const d=l,n=A(),o=h(()=>Number(n.currentRoute.value.query.page)||C),e=h(()=>Math.round(d.total/d.perPage)),a=h(()=>o.value>C),P=h(()=>o.value<e.value),x=h(()=>o.value>=y),s=h(()=>e.value>y&&o.value<=e.value-y);function _(t,r){const k=[];for(let v=t;v<=r;v++)k.push(v);return k}const w=h(()=>{const t=o.value;if(o.value<y){const r=e.value<=y?e.value:y;return _(C,r)}if(t>=e.value-y)return _(e.value-y,e.value);if(o.value>=y&&o.value<e.value)return _(o.value-2,o.value+2)});function p(t){t&&n.replace({query:{page:t}})}function i(){if(!a.value)return;const t=o.value-1;p(t)}function f(){if(!P.value)return;const t=o.value+1;p(t)}return(t,r)=>{const k=F;return t.total?(m(),g("div",ee,[u("div",te,[u("button",{onClick:i},[I(k,{name:"chevron-back-sharp"})]),u("ul",ae,[u("li",null,D(c(o)),1),ne,u("li",se,D(c(e)),1)]),u("ul",oe,[c(x)?(m(),g("li",{key:0,onClick:r[0]||(r[0]=v=>p(C))},[u("div",{class:S(["page-item",{active:c(o)===C}])},D(C),2)])):b("",!0),c(x)?(m(),g("li",re,"...")):b("",!0),(m(!0),g(O,null,M(c(w),v=>(m(),g("li",{key:v,class:S(["page-item",{active:c(o)===v}]),onClick:fe=>p(v)},[u("div",null,D(v),1)],10,ie))),128)),c(s)?(m(),g("li",ce,"...")):b("",!0),c(s)?(m(),g("li",{key:3,onClick:r[1]||(r[1]=v=>p(c(e)))},[u("div",{class:S(["page-item",{active:c(o)===c(e)}])},D(c(e)),3)])):b("",!0)]),u("button",{type:"button",onClick:f},[I(k,{name:"chevron-forward-sharp"})])])])):b("",!0)}}});const ue=$(le,[["__scopeId","data-v-f15f0da2"]]),de={class:"pt-10"},B=5,_e=R({__name:"pagination",async setup(l){var s;let d,n;const{data:o}=([d,n]=K(()=>X("pagination",()=>$fetch("https://jsonplaceholder.typicode.com/posts"))),d=await d,n(),d),e=(s=o.value)==null?void 0:s.length,a=A(),P=h(()=>Number(a.currentRoute.value.query.page||1)),x=h(()=>{var _;return(_=o.value)==null?void 0:_.slice((P.value-1)*B,P.value*B)});return(_,w)=>{const p=ue,i=J;return m(),U(i,{title:_.$t("pagination")},{right:W(()=>[u("ul",null,[(m(!0),g(O,null,M(c(x),({id:f,title:t})=>(m(),g("li",{key:f},[u("div",null,D(f),1),u("div",null,D(t),1)]))),128))]),u("div",de,[I(p,{total:c(e),"per-page":B},null,8,["total"])])]),_:1},8,["title"])}}});const ge=$(_e,[["__scopeId","data-v-384c7439"]]);export{ge as default};
