(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55785],{43043:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider/overview",function(){return n(3884)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,t,s,i;return{...e,example:a({...e.props,id:null!==(s=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==s?s:e.name,children:null!==(i=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,a,n){"use strict";var t=n(52322),s=n(5632),i=n(2784),l=n(23075),r=n(8674);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,d]=(0,i.useState)(),p=(0,s.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();a&&d(n.find(e=>e.name.toLowerCase()===a))}},[p]);let u=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...c})}),!c&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},3884:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(64339),i=n(92738),l=n(810),r=n(8674),o=n(99341),c=n(55491),d=n(37395);let p=e=>{let{variant:a,emphasis:n,children:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.EZ,{size:"small",variant:"informational",children:s}),(0,t.jsx)(r.oH,{variant:a,emphasis:n})]})};a.default=()=>(0,t.jsx)(o.Z,{title:"DBDivider",variants:(0,d.P)(c,p,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},55491:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"200px"},"className":"db-ui-functional","props":{}},{"name":"regular (Default)","style":{"width":"200px"},"className":"db-ui-regular","props":{}},{"name":"expressive","style":{"width":"200px"},"className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Adaptive - Horizontal (Default)","style":{"width":"200px"},"props":{}},{"name":"Adaptive - Vertical","style":{"height":"100px"},"props":{"variant":"vertical"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","style":{"width":"200px"},"props":{}},{"name":"Strong","style":{"width":"200px"},"props":{"emphasis":"strong"}}]}]')}},function(e){e.O(0,[64996,64037,23075,64339,92738,810,92888,49774,40179],function(){return e(e.s=43043)}),_N_E=e.O()}]);