(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68445],{12679:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation/overview",function(){return a(43968)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>e.map((e,i)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(i))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,i;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,a){"use strict";var i=a(52322),s=a(5632),t=a(2784),r=a(25942),l=a(8674);let c=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[o,d]=(0,t.useState)(),u=(0,s.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[u]);let h=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...o})}),!o&&(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,i.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},43968:function(e,n,a){"use strict";a.r(n);var i=a(52322),s=a(48615),t=a(8674),r=a(99341),l=a(62698),c=a(37395);let o=e=>{let{children:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h6",{children:[n,":"]}),(0,i.jsxs)(t.Cc,{children:[(0,i.jsx)(t.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pK,{active:!0,children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,i.jsx)(t.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,i.jsx)(t.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,i.jsx)(t.pK,{icon:"account",children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,i.jsx)(t.pK,{disabled:!0,children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,i.jsx)(r.Z,{title:"DBMainNavigation",variants:(0,c.P)(l,o,[(0,i.jsx)(s.default,{})])})},62698:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,23019,8674,25942,48615,92888,49774,40179],function(){return e(e.s=12679)}),_N_E=e.O()}]);