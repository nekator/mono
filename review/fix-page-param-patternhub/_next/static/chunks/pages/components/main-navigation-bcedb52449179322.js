(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25862],{30061:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation",function(){return i(29017)}])},56311:function(e,n,i){"use strict";i.d(n,{P:function(){return a}});let a=(e,n,i)=>e.map((e,a)=>{var s;return{...e,slotCode:null!==(s=null==i?void 0:i.at(a))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var i,a;return{...e,example:n({...e.props,id:null!==(i=e.props.id)&&void 0!==i?i:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},60955:function(e,n,i){"use strict";var a=i(52322),s=i(5632),r=i(2784),t=i(64508),l=i(88451);let c=e=>{let{examples:n,slotCode:i}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:i,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:i}=e,[o,d]=(0,r.useState)(),u=(0,s.useRouter)();(0,r.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(i.find(e=>e.name.toLowerCase()===n))}},[u]);let h=e=>{var n,i;if(window.location.origin&&(null===(i=window)||void 0===i?void 0:null===(n=i.location)||void 0===n?void 0:n.href)){let n=window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href;return"".concat(n,"?page=").concat(e.name.toLowerCase())}return""};return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("div",{children:(0,a.jsx)(c,{...o})}),!o&&(0,a.jsx)(t.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==i?void 0:i.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,a.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},29017:function(e,n,i){"use strict";i.r(n);var a=i(52322),s=i(9597),r=i(88451),t=i(60955),l=i(62698),c=i(56311);let o=e=>{let{children:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h6",{children:[n,":"]}),(0,a.jsxs)(r.Cc,{children:[(0,a.jsx)(r.pK,{active:!0,slotSubNavigation:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.pK,{active:!0,slotSubNavigation:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.pK,{active:!0,children:(0,a.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,a.jsx)(r.pK,{children:(0,a.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,a.jsx)(r.pK,{children:(0,a.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,a.jsx)(r.pK,{icon:"account",children:(0,a.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,a.jsx)(r.pK,{disabled:!0,children:(0,a.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,a.jsx)(t.Z,{title:"DBMainNavigation",variants:(0,c.P)(l,o,[(0,a.jsx)(s.default,{})])})},62698:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,23019,88451,64508,9597,49774,92888,40179],function(){return e(e.s=30061)}),_N_E=e.O()}]);