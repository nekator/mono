(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25862],{30061:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation",function(){return a(98285)}])},44496:function(e,n,a){"use strict";a.d(n,{P:function(){return getVariants}});let getVariants=(e,n,a)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,i;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}})}})},2670:function(e,n,a){"use strict";var i=a(52322),t=a(5632),s=a(2784),r=a(2087),l=a(34636);let VariantList=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,o]=(0,s.useState)(),d=(0,t.useRouter)();(0,s.useEffect)(()=>{if(d.query){var e;let n=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);o(e)}}},[d]);let getHref=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)("div",{children:(0,i.jsx)(VariantList,{...c})}),!c&&(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,i.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},98285:function(e,n,a){"use strict";a.r(n);var i=a(52322),t=a(25691),s=a(34636),r=a(2670),l=a(62698),c=a(44496);let getMainNavigation=e=>{let{children:n}=e;return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h6",{children:[n,":"]}),(0,i.jsxs)(s.Cc,{children:[(0,i.jsx)(s.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.pK,{active:!0,slotSubNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.pK,{active:!0,children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,i.jsx)(s.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,i.jsx)(s.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,i.jsx)(s.pK,{icon:"account",children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,i.jsx)(s.pK,{disabled:!0,children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,i.jsx)(r.Z,{title:"DBMainNavigation",variants:(0,c.P)(l,getMainNavigation,[(0,i.jsx)(t.default,{})])})},62698:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,84375,2087,34636,25691,49774,92888,40179],function(){return e(e.s=30061)}),_N_E=e.O()}]);