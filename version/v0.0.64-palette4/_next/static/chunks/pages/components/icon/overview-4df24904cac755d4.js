(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4424],{80135:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/icon/overview",function(){return s(84702)}])},37395:function(e,n,s){"use strict";s.d(n,{P:function(){return a}});let a=(e,n,s)=>e.map((e,a)=>{var t;return{...e,slotCode:null!==(t=null==s?void 0:s.at(a))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var s,a,t,i;return{...e,example:n({...e.props,id:null!==(t=null===(s=e.props)||void 0===s?void 0:s.id)&&void 0!==t?t:e.name,children:null!==(i=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,s){"use strict";var a=s(52322),t=s(5632),i=s(2784),l=s(25942),r=s(23149);let o=e=>{let{examples:n,slotCode:s}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:s,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:s}=e,[c,d]=(0,i.useState)(),u=(0,t.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(s.find(e=>e.name.toLowerCase()===n))}},[u]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(o,{...c})}),!c&&(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==s?void 0:s.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,a.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},84702:function(e,n,s){"use strict";s.r(n);var a=s(52322),t=s(88503),i=s(23149),l=s(99341),r=s(42302),o=s(37395);let c=e=>{let{children:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.EZ,{icon:"none",size:"small",semantic:"informational",children:n}),(0,a.jsx)(i.Pg,{icon:"account",children:n})]})};n.default=()=>(0,a.jsx)(l.Z,{title:"DBIcon",variants:(0,o.P)(r,c,[(0,a.jsx)(t.default,{})])})},42302:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,23019,23149,25942,88503,92888,49774,40179],function(){return e(e.s=80135)}),_N_E=e.O()}]);