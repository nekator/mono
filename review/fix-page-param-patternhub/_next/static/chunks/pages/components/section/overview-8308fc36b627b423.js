(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8734],{9844:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/section/overview",function(){return n(36541)}])},56311:function(e,a,n){"use strict";n.d(a,{P:function(){return l}});let l=(e,a,n)=>e.map((e,l)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(l))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,l;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(l=e.props.children)&&void 0!==l?l:e.name})}})}})},60955:function(e,a,n){"use strict";var l=n(52322),s=n(5632),i=n(2784),t=n(64508),r=n(88451);let o=e=>{let{examples:a,slotCode:n}=e;return(0,l.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,l.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,l.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,d]=(0,i.useState)(),u=(0,s.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&d(n.find(e=>e.name.toLowerCase()===a))}},[u]);let p=e=>{var a,n;if(window.location.origin&&(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href)){let a=window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href;return"".concat(a,"?page=").concat(e.name.toLowerCase())}return""};return(0,l.jsxs)(l.Fragment,{children:[c&&(0,l.jsx)("div",{children:(0,l.jsx)(o,{...c})}),!c&&(0,l.jsx)(t.Z,{children:(0,l.jsxs)("div",{className:"default-container",children:[(0,l.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(r.oH,{}),(0,l.jsx)("h2",{children:(0,l.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,l.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},36541:function(e,a,n){"use strict";n.r(a);var l=n(52322),s=n(76402),i=n(83662),t=n(27561),r=n(88451),o=n(60955),c=n(32694),d=n(56311);let u=e=>{let{variant:a,size:n,children:s}=e;return(0,l.jsx)(r.cN,{className:"db-bg-informational",size:n,variant:a,children:s})};a.default=()=>(0,l.jsx)(o.Z,{title:"DBSection",variants:(0,d.P)(c,u,[(0,l.jsx)(s.default,{}),(0,l.jsx)(i.default,{}),(0,l.jsx)(t.default,{})])})},32694:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Full (Default)","style":{"width":"100%","display":"block"},"props":{}},{"name":"Medium","style":{"width":"100%","display":"block"},"props":{"variant":"medium"}},{"name":"Large","style":{"width":"100%","display":"block"},"props":{"variant":"large"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Large","props":{"size":"large"}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,23019,88451,64508,83662,27561,76402,49774,92888,40179],function(){return e(e.s=9844)}),_N_E=e.O()}]);