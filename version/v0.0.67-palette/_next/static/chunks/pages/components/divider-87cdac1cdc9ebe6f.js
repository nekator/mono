(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{49120:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider",function(){return a(50371)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,t,s,i;return{...e,example:n({...e.props,id:null!==(s=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==s?s:e.name,children:null!==(i=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,a){"use strict";var t=a(52322),s=a(5632),i=a(2784),l=a(23075),r=a(23149);let o=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[d,c]=(0,i.useState)(),p=(0,s.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let n=null===(e=p.query.page)||void 0===e?void 0:e.toString();n&&c(a.find(e=>e.name.toLowerCase()===n))}},[p]);let u=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},50371:function(e,n,a){"use strict";a.r(n);var t=a(52322),s=a(73712),i=a(92738),l=a(810),r=a(23149),o=a(99341),d=a(55491),c=a(37395);let p=e=>{let{variant:n,emphasis:a,children:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.EZ,{size:"small",semantic:"informational",children:s}),(0,t.jsx)(r.oH,{variant:n,emphasis:a})]})};n.default=()=>(0,t.jsx)(o.Z,{title:"DBDivider",variants:(0,c.P)(d,p,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},55491:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","style":{"width":"200px"},"className":"db-density-functional","props":{}},{"name":"regular (Default)","style":{"width":"200px"},"className":"db-density-regular","props":{}},{"name":"expressive","style":{"width":"200px"},"className":"db-density-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Adaptive - Horizontal (Default)","style":{"width":"200px"},"props":{}},{"name":"Adaptive - Vertical","style":{"height":"100px"},"props":{"variant":"vertical"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","style":{"width":"200px"},"props":{}},{"name":"Strong","style":{"width":"200px"},"props":{"emphasis":"strong"}}]}]')}},function(e){e.O(0,[64996,64037,23075,73712,92738,810,92888,49774,40179],function(){return e(e.s=49120)}),_N_E=e.O()}]);