(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90484],{86740:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/overview",function(){return t(67497)}])},37395:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var s;return{...e,slotCode:null!==(s=null==t?void 0:t.at(a))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var t,a;return{...e,example:n({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},99341:function(e,n,t){"use strict";var a=t(52322),s=t(5632),l=t(2784),i=t(25942),r=t(8674);let o=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[c,d]=(0,l.useState)(),u=(0,s.useRouter)();(0,l.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(t.find(e=>e.name.toLowerCase()===n))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(o,{...c})}),!c&&(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,a.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},67497:function(e,n,t){"use strict";t.r(n);var a=t(52322),s=t(70467),l=t(8053),i=t(2784),r=t(8674),o=t(99341),c=t(19371),d=t(37395);let u=e=>{let{children:n,disabled:t,open:s,title:l}=e,[o,c]=(0,i.useState)(null!=s&&s);return(0,a.jsx)(r.kC,{title:l,disabled:t,open:o,onToggle:c,children:n})};n.default=()=>(0,a.jsx)(o.Z,{title:"DBAccordionItem",variants:(0,d.P)(c,u,[(0,a.jsx)(s.default,{}),(0,a.jsx)(l.default,{})])})},19371:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{"title":"functional"}},{"name":"regular (Default)","className":"db-density-regular","props":{"title":"regular (Default)"}},{"name":"expressive","className":"db-density-expressive","props":{"title":"expressive"}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"title":"Enabled (Default)"}},{"name":"Disabled","props":{"title":"Disabled","disabled":true}},{"name":"Open","props":{"title":"Open","open":true}},{"name":"Open Disabled","props":{"title":"Open Disabled","open":true,"disabled":true}}]}]')}},function(e){e.O(0,[64996,23019,8674,25942,8053,70467,92888,49774,40179],function(){return e(e.s=86740)}),_N_E=e.O()}]);