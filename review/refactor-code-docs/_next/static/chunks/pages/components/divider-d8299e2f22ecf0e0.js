(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{49120:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider",function(){return s(50371)}])},37395:function(e,a,s){"use strict";s.d(a,{P:function(){return n}});let n=(e,a,s)=>e.map((e,n)=>{var t;return{...e,slotCode:null!==(t=null==s?void 0:s.at(n))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var s,n,t,i;return{...e,example:a({...e.props,id:null!==(t=null===(s=e.props)||void 0===s?void 0:s.id)&&void 0!==t?t:e.name,children:null!==(i=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,a,s){"use strict";var n=s(52322),t=s(5632),i=s(2784),l=s(23075),r=s(86095);let o=e=>{let{examples:a,slotCode:s}=e,[t,l]=(0,i.useState)();return(0,n.jsxs)(r.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{l(!t)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:t?"Hide code":"Show code"}),(0,n.jsx)("div",{className:"db-ui-functional code",children:s})]})]})};a.Z=e=>{let{title:a,variants:s}=e,[d,c]=(0,i.useState)(),u=(0,t.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&c(s.find(e=>e.name.toLowerCase()===a))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)("div",{children:(0,n.jsx)(o,{...d})}),!d&&(0,n.jsx)(l.Z,{children:(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:a}),null==s?void 0:s.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,n.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},50371:function(e,a,s){"use strict";s.r(a);var n=s(52322),t=s(64339),i=s(92738),l=s(810),r=s(86095),o=s(99341),d=s(55491),c=s(37395);let u=e=>{let{variant:a,emphasis:s,children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.EZ,{size:"small",variant:"informational",children:t}),(0,n.jsx)(r.oH,{variant:a,emphasis:s})]})};a.default=()=>(0,n.jsx)(o.Z,{title:"DBDivider",variants:(0,c.P)(d,u,[(0,n.jsx)(t.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(l.default,{})])})},55491:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"200px"},"className":"db-ui-functional","props":{}},{"name":"regular (Default)","style":{"width":"200px"},"className":"db-ui-regular","props":{}},{"name":"expressive","style":{"width":"200px"},"className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Adaptive - Horizontal (Default)","style":{"width":"200px"},"props":{}},{"name":"Adaptive - Vertical","style":{"height":"100px"},"props":{"variant":"vertical"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","style":{"width":"200px"},"props":{}},{"name":"Strong","style":{"width":"200px"},"props":{"emphasis":"strong"}}]}]')}},function(e){e.O(0,[64996,64037,23075,64339,92738,810,92888,49774,40179],function(){return e(e.s=49120)}),_N_E=e.O()}]);