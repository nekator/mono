(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8734],{9844:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/section/overview",function(){return n(25728)}])},29712:function(e,a,n){"use strict";n.d(a,{P:function(){return getVariants}});let getVariants=(e,a,n)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},1227:function(e,a,n){"use strict";var t=n(52322),s=n(5632),i=n(2784),l=n(82797),r=n(45489);let VariantList=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[o,c]=(0,i.useState)(),d=(0,s.useRouter)();(0,i.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);c(e)}}},[d]);let getHref=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)("div",{children:(0,t.jsx)(VariantList,{...o})}),!o&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,t.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},25728:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(76402),i=n(83662),l=n(27561),r=n(45489),o=n(1227),c=n(32694),d=n(29712);let getSection=e=>{let{variant:a,size:n,children:s}=e;return(0,t.jsx)(r.cN,{className:"db-bg-informational",size:n,variant:a,children:s})};a.default=()=>(0,t.jsx)(o.Z,{title:"DBSection",variants:(0,d.P)(c,getSection,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},32694:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Full (Default)","style":{"width":"100%","display":"block"},"props":{}},{"name":"Medium","style":{"width":"100%","display":"block"},"props":{"variant":"medium"}},{"name":"Large","style":{"width":"100%","display":"block"},"props":{"variant":"large"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Large","props":{"size":"large"}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,84375,82797,45489,83662,27561,76402,49774,92888,40179],function(){return e(e.s=9844)}),_N_E=e.O()}]);