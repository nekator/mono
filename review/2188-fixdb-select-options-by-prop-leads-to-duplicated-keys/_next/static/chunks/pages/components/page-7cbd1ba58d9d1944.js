(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77001],{25510:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/page",function(){return t(62147)}])},37395:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var i;return{...e,slotCode:null!==(i=null==t?void 0:t.at(a))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var t,a,i,s;return{...e,example:n({...e.props,id:null!==(i=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==i?i:e.name,children:null!==(s=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,n,t){"use strict";var a=t(52322),i=t(5632),s=t(2784),r=t(25942),l=t(8674);let o=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[c,d]=(0,s.useState)(),u=(0,i.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(t.find(e=>e.name.toLowerCase()===n))}},[u]);let x=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(o,{...c})}),!c&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:x(e),children:e.name})}),(0,a.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},62147:function(e,n,t){"use strict";t.r(n);var a=t(52322),i=t(64258),s=t(8674),r=t(93078),l=t(37395),o=t(99341);let c=e=>{let{type:n,fadeIn:t,children:i,className:r,describedbyid:l,id:o,key:c,stylePath:d,tabIndex:u,title:x}=e;return(0,a.jsx)(s.wi,{type:n,fadeIn:t,className:r,describedbyid:l,id:o,stylePath:d,tabIndex:u,slotHeader:(0,a.jsx)(s.W4,{slotBrand:(0,a.jsx)(s.mX,{title:"DBHeader",imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"DBHeader"}),slotMetaNavigation:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.vB,{href:"#",children:"Imprint"}),(0,a.jsx)(s.vB,{href:"#",children:"Help"})]}),slotCallToAction:(0,a.jsx)(s.Y1,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Y1,{icon:"account",variant:"text",noText:!0,children:"Profile"}),(0,a.jsx)(s.Y1,{icon:"alert",variant:"text",noText:!0,children:"Notification"}),(0,a.jsx)(s.Y1,{icon:"help",variant:"text",noText:!0,children:"Help"})]}),title:x,children:(0,a.jsxs)(s.Cc,{children:[(0,a.jsx)(s.pK,{icon:"account",children:(0,a.jsx)("a",{href:"#",children:i})}),(0,a.jsx)(s.pK,{disabled:!0,children:(0,a.jsxs)("a",{href:"#",children:[i," disabled"]})})]})}),slotFooter:(0,a.jsx)(a.Fragment,{children:"Footer Content"}),children:"My Page Content"},c)};n.default=()=>(0,a.jsx)(o.Z,{title:"DBPage",variants:(0,l.P)(r,c,[(0,a.jsx)(i.default,{})])})},93078:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,23019,8674,25942,64258,92888,49774,40179],function(){return e(e.s=25510)}),_N_E=e.O()}]);