(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21380],{82238:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/icon",function(){return s(69033)}])},37395:function(e,n,s){"use strict";s.d(n,{P:function(){return a}});let a=(e,n,s)=>e.map((e,a)=>{var t;return{...e,slotCode:null!==(t=null==s?void 0:s.at(a))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var s,a;return{...e,example:n({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},99341:function(e,n,s){"use strict";var a=s(52322),t=s(5632),i=s(2784),l=s(25942),r=s(8674);let c=e=>{let{examples:n,slotCode:s}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:s,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:s}=e,[o,d]=(0,i.useState)(),u=(0,t.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(s.find(e=>e.name.toLowerCase()===n))}},[u]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("div",{children:(0,a.jsx)(c,{...o})}),!o&&(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==s?void 0:s.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,a.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},69033:function(e,n,s){"use strict";s.r(n);var a=s(52322),t=s(88503),i=s(8674),l=s(99341),r=s(42302),c=s(37395);let o=e=>{let{children:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.EZ,{icon:"none",size:"small",semantic:"informational",children:n}),(0,a.jsx)(i.Pg,{icon:"account",children:n})]})};n.default=()=>(0,a.jsx)(l.Z,{title:"DBIcon",variants:(0,c.P)(r,o,[(0,a.jsx)(t.default,{})])})},42302:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,23019,8674,25942,88503,92888,49774,40179],function(){return e(e.s=82238)}),_N_E=e.O()}]);