(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5862],{30061:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation",function(){return a(61180)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>{var i,s,t;return e.map((e,l)=>({...e,slotCode:null!==(i=null==a?void 0:a.at(l))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>({...e,example:n({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}))}))}},68623:function(e,n,a){"use strict";var i=a(52322),s=a(5632),t=a(2784),l=a(18338),r=a(51963);let c=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[o,d]=(0,t.useState)(),u=(0,s.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);d(e)}}},[u]);let h=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...o})}),!o&&(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(r.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,i.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},61180:function(e,n,a){"use strict";a.r(n);var i=a(52322),s=a(96058),t=a(51963),l=a(68623),r=a(62698),c=a(75549);let o=e=>{let{children:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h6",{children:[n,":"]}),(0,i.jsxs)(t.Cc,{children:[(0,i.jsx)(t.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.pK,{active:!0,children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,i.jsx)(t.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,i.jsx)(t.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,i.jsx)(t.pK,{icon:"account",children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,i.jsx)(t.pK,{disabled:!0,children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,i.jsx)(l.Z,{title:"DBMainNavigation",variants:(0,c.P)(r,o,[(0,i.jsx)(s.default,{})])})},62698:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[4996,4375,8338,1963,6058,9774,2888,179],function(){return e(e.s=30061)}),_N_E=e.O()}]);