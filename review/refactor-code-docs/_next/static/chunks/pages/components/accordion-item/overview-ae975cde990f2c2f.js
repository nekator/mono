(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90484],{86740:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/overview",function(){return n(67497)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(t))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,t,l,s;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(s=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,a,n){"use strict";var t=n(52322),l=n(5632),s=n(2784),i=n(23075),r=n(86095);let o=e=>{let{examples:a,slotCode:n}=e,[l,i]=(0,s.useState)();return(0,t.jsxs)(r.f,{className:"variants-card db-code-docs",children:[(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,t.jsxs)("details",{className:"code-details",onToggle:()=>{i(!l)},children:[(0,t.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:l?"Hide code":"Show code"}),(0,t.jsx)("div",{className:"db-ui-functional code",children:n})]})]})};a.Z=e=>{let{title:a,variants:n}=e,[d,c]=(0,s.useState)(),u=(0,l.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&c(n.find(e=>e.name.toLowerCase()===a))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},67497:function(e,a,n){"use strict";n.r(a);var t=n(52322),l=n(43121),s=n(8053),i=n(86095),r=n(99341),o=n(19371),d=n(37395);let c=e=>{let{children:a,disabled:n,open:l,title:s}=e;return(0,t.jsx)(i.kC,{title:s,disabled:n,defaultOpen:l,children:a})};a.default=()=>(0,t.jsx)(r.Z,{title:"DBAccordionItem",variants:(0,d.P)(o,c,[(0,t.jsx)(l.default,{}),(0,t.jsx)(s.default,{})])})},19371:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"title":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"title":"regular (Default)"}},{"name":"expressive","className":"db-ui-expressive","props":{"title":"expressive"}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"title":"Enabled (Default)"}},{"name":"Disabled","props":{"title":"Disabled","disabled":true}},{"name":"Open","props":{"title":"Open","open":true}},{"name":"Open Disabled","props":{"title":"Open Disabled","open":true,"disabled":true}}]}]')}},function(e){e.O(0,[64996,64037,23075,8053,43121,92888,49774,40179],function(){return e(e.s=86740)}),_N_E=e.O()}]);