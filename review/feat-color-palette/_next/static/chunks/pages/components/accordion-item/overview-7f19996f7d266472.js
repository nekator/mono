(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90484],{86740:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/overview",function(){return t(67497)}])},37395:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var l;return{...e,slotCode:null!==(l=null==t?void 0:t.at(a))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var t,a,l,s;return{...e,example:n({...e.props,id:null!==(l=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==l?l:e.name,children:null!==(s=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,n,t){"use strict";var a=t(52322),l=t(5632),s=t(2784),i=t(23075),r=t(23149);let o=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(r.wq,{className:"variants-card",code:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[d,c]=(0,s.useState)(),u=(0,l.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&c(t.find(e=>e.name.toLowerCase()===n))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)("div",{children:(0,a.jsx)(o,{...d})}),!d&&(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,a.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},67497:function(e,n,t){"use strict";t.r(n);var a=t(52322),l=t(70467),s=t(8053),i=t(23149),r=t(99341),o=t(19371),d=t(37395);let c=e=>{let{children:n,disabled:t,open:l,title:s}=e;return(0,a.jsx)(i.kC,{title:s,disabled:t,defaultOpen:l,children:n})};n.default=()=>(0,a.jsx)(r.Z,{title:"DBAccordionItem",variants:(0,d.P)(o,c,[(0,a.jsx)(l.default,{}),(0,a.jsx)(s.default,{})])})},19371:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{"title":"functional"}},{"name":"regular (Default)","className":"db-density-regular","props":{"title":"regular (Default)"}},{"name":"expressive","className":"db-density-expressive","props":{"title":"expressive"}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"title":"Enabled (Default)"}},{"name":"Disabled","props":{"title":"Disabled","disabled":true}},{"name":"Open","props":{"title":"Open","open":true}},{"name":"Open Disabled","props":{"title":"Open Disabled","open":true,"disabled":true}}]}]')}},function(e){e.O(0,[64996,64037,23075,8053,70467,92888,49774,40179],function(){return e(e.s=86740)}),_N_E=e.O()}]);