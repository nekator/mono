(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66572],{23745:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return a(78518)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return s}});let s=(e,n,a)=>e.map((e,s)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(s))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,s,t,r;return{...e,example:n({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(r=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==r?r:e.name})}})}})},99341:function(e,n,a){"use strict";var s=a(52322),t=a(5632),r=a(2784),l=a(23075),i=a(73178);let o=e=>{let{examples:n,slotCode:a}=e;return(0,s.jsx)(i.wq,{className:"variants-card",slotCode:a,children:(0,s.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[d,c]=(0,r.useState)(),u=(0,t.useRouter)();(0,r.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&c(a.find(e=>e.name.toLowerCase()===n))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)("div",{children:(0,s.jsx)(o,{...d})}),!d&&(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(i.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(i.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,s.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},78518:function(e,n,a){"use strict";a.r(n);var s=a(52322),t=a(55012),r=a(23756),l=a(57277),i=a(58629),o=a(84271),d=a(73178),c=a(99341),u=a(18965),p=a(37395);let m=e=>{let{href:n,variant:a,disabled:t,size:r,content:l,children:i}=e;return(0,s.jsx)(d.vB,{href:n,variant:a,disabled:t,size:r,content:l,children:i})};n.default=()=>(0,s.jsx)(c.Z,{title:"DBLink",variants:(0,p.P)(u,m,[(0,s.jsx)(t.default,{}),(0,s.jsx)(r.default,{}),(0,s.jsx)(l.default,{}),(0,s.jsx)(i.default,{}),(0,s.jsx)(o.default,{})])})},18965:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"(Default) regular","className":"db-density-regular","props":{"href":"#"}},{"name":"expressive","className":"db-density-expressive","props":{"href":"#"}},{"name":"functional","className":"db-density-functional","props":{"href":"#"}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"href":"#"}},{"name":"Brand","props":{"href":"#","variant":"brand"}}]},{"name":"State","examples":[{"name":"(Default) Enabled","props":{"href":"#"}},{"name":"Disabled","props":{"href":"#","disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"href":"#"}},{"name":"Small","props":{"href":"#","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Internal","props":{"href":"#"}},{"name":"External","props":{"href":"#","content":"external"}}]}]')}},function(e){e.O(0,[64996,64037,23075,55012,23756,58629,84271,57277,92888,49774,40179],function(){return e(e.s=23745)}),_N_E=e.O()}]);