(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68445],{12679:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation/overview",function(){return i(43968)}])},37395:function(e,n,i){"use strict";i.d(n,{P:function(){return a}});let a=(e,n,i)=>e.map((e,a)=>{var s;return{...e,slotCode:null!==(s=null==i?void 0:i.at(a))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var i,a,s,t;return{...e,example:n({...e.props,id:null!==(s=null===(i=e.props)||void 0===i?void 0:i.id)&&void 0!==s?s:e.name,children:null!==(t=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==t?t:e.name})}})}})},99341:function(e,n,i){"use strict";var a=i(52322),s=i(5632),t=i(2784),l=i(44842),r=i(58851);let c=e=>{let{examples:n,slotCode:i}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:i,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:i}=e,[o,d]=(0,t.useState)(),u=(0,s.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(i.find(e=>e.name.toLowerCase()===n))}},[u]);let v=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("div",{children:(0,a.jsx)(c,{...o})}),!o&&(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==i?void 0:i.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:v(e),children:e.name})}),(0,a.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},43968:function(e,n,i){"use strict";i.r(n);var a=i(52322),s=i(9597),t=i(58851),l=i(99341),r=i(62698),c=i(37395);let o=e=>{let{children:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h6",{children:[n,":"]}),(0,a.jsxs)(t.Cc,{children:[(0,a.jsx)(t.pK,{active:!0,slotSubNavigation:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pK,{active:!0,slotSubNavigation:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pK,{active:!0,children:(0,a.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,a.jsx)(t.pK,{children:(0,a.jsx)("a",{children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,a.jsx)(t.pK,{children:(0,a.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,a.jsx)(t.pK,{icon:"account",children:(0,a.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,a.jsx)(t.pK,{disabled:!0,children:(0,a.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,a.jsx)(l.Z,{title:"DBMainNavigation",variants:(0,c.P)(r,o,[(0,a.jsx)(s.default,{})])})},62698:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,64037,44842,9597,92888,49774,40179],function(){return e(e.s=12679)}),_N_E=e.O()}]);