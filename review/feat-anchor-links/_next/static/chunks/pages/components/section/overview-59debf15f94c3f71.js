(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8734],{9844:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/section/overview",function(){return n(36541)}])},56311:function(e,a,n){"use strict";n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(s))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,s;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}})}})},60955:function(e,a,n){"use strict";var s=n(52322),l=n(5632),t=n(2784),i=n(64508),r=n(88451);let o=e=>{let{examples:a,slotCode:n}=e;return(0,s.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,d]=(0,t.useState)(),u=(0,l.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&d(n.find(e=>e.name.toLowerCase()===a))}},[u]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)("div",{children:(0,s.jsx)(o,{...c})}),!c&&(0,s.jsx)(i.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(r.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,s.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},36541:function(e,a,n){"use strict";n.r(a);var s=n(52322),l=n(76402),t=n(83662),i=n(27561),r=n(88451),o=n(60955),c=n(32694),d=n(56311);let u=e=>{let{variant:a,size:n,children:l}=e;return(0,s.jsx)(r.cN,{className:"db-bg-informational",size:n,variant:a,children:l})};a.default=()=>(0,s.jsx)(o.Z,{title:"DBSection",variants:(0,d.P)(c,u,[(0,s.jsx)(l.default,{}),(0,s.jsx)(t.default,{}),(0,s.jsx)(i.default,{})])})},32694:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Full (Default)","style":{"width":"100%","display":"block"},"props":{}},{"name":"Medium","style":{"width":"100%","display":"block"},"props":{"variant":"medium"}},{"name":"Large","style":{"width":"100%","display":"block"},"props":{"variant":"large"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Large","props":{"size":"large"}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,10478,64508,83662,27561,76402,49774,92888,40179],function(){return e(e.s=9844)}),_N_E=e.O()}]);