(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30907],{66692:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/overview",function(){return n(55662)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,t,s,l;return{...e,example:a({...e.props,id:null!==(s=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==s?s:e.name,children:null!==(l=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,a,n){"use strict";var t=n(52322),s=n(5632),l=n(2784),i=n(25942),r=n(8674);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,l.useState)(),c=(0,s.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();a&&u(n.find(e=>e.name.toLowerCase()===a))}},[c]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},55662:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(11453),l=n(71047),i=n(4547),r=n(52353),o=n(91584),d=n(54192),u=n(8674),c=n(99341),p=n(10689),m=n(37395);let x=e=>{let{variant:a,state:n,size:s,noText:l,icon:i,width:r,disabled:o,children:d}=e;return(0,t.jsx)(u.Y1,{variant:a,state:n,size:s,noText:l,icon:i,disabled:o,width:r,onClick:()=>{alert(d.toString())},children:d})};a.default=()=>(0,t.jsx)(c.Z,{title:"DBButton",variants:(0,m.P)(p,x,[(0,t.jsx)(s.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{}),(0,t.jsx)(d.default,{})])})},10689:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Primary","props":{"variant":"primary"}},{"name":"Outlined (Adaptive)","props":{}},{"name":"Solid (Adaptive)","props":{"variant":"solid"}},{"name":"Text (Adaptive)","props":{"variant":"text"}}]},{"name":"State","examples":[{"name":"Enabled (Default)","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon & Text","props":{"icon":"account"}},{"name":"Icon","props":{"icon":"account","noText":true}}]},{"name":"Behaviour","examples":[{"name":"Auto Width (Default)","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]')}},function(e){e.O(0,[64996,23019,8674,25942,71047,91584,11453,54192,52353,4547,92888,49774,40179],function(){return e(e.s=66692)}),_N_E=e.O()}]);