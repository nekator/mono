(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{86740:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/overview",function(){return n(54455)}])},44496:function(e,t,n){"use strict";n.d(t,{P:function(){return getVariants}});let getVariants=(e,t,n)=>e.map((e,a)=>{var i;return{...e,slotCode:null!==(i=null==n?void 0:n.at(a))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var n,a;return{...e,example:t({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},2670:function(e,t,n){"use strict";var a=n(52322),i=n(5632),l=n(2784),s=n(2087),r=n(31346);let VariantList=e=>{let{examples:t,slotCode:n}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[o,c]=(0,l.useState)(),d=(0,i.useRouter)();(0,l.useEffect)(()=>{if(d.query){var e;let t=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(t){let e=n.find(e=>e.name.toLowerCase()===t);c(e)}}},[d]);let getHref=e=>{var t,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("div",{children:(0,a.jsx)(VariantList,{...o})}),!o&&(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,a.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},54455:function(e,t,n){"use strict";n.r(t);var a=n(52322),i=n(90036),l=n(95994),s=n(2784),r=n(31346),o=n(2670),c=n(19371),d=n(44496);let getAccordionItem=e=>{let{children:t,disabled:n,open:i,title:l}=e,[o,c]=(0,s.useState)(null!=i&&i);return(0,a.jsx)(r.kC,{title:l,disabled:n,open:o,onToggle:c,children:t})};t.default=()=>(0,a.jsx)(o.Z,{title:"DBAccordionItem",variants:(0,d.P)(c,getAccordionItem,[(0,a.jsx)(i.default,{}),(0,a.jsx)(l.default,{})])})},19371:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"title":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"title":"regular (Default)"}},{"name":"expressive","className":"db-ui-expressive","props":{"title":"expressive"}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"title":"Enabled (Default)"}},{"name":"Disabled","props":{"title":"Disabled","disabled":true}},{"name":"Open","props":{"title":"Open","open":true}},{"name":"Open Disabled","props":{"title":"Open Disabled","open":true,"disabled":true}}]}]')}},function(e){e.O(0,[4996,4375,2087,1346,5994,36,9774,2888,179],function(){return e(e.s=86740)}),_N_E=e.O()}]);