(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34905],{86632:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/overview",function(){return a(44952)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>e.map((e,i)=>{var r;return{...e,slotCode:null!==(r=null==a?void 0:a.at(i))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var a,i,r,t;return{...e,example:n({...e.props,id:null!==(r=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==r?r:e.name,children:null!==(t=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==t?t:e.name})}})}})},99341:function(e,n,a){"use strict";var i=a(52322),r=a(5632),t=a(2784),l=a(23075),s=a(23149);let c=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(s.wq,{className:"variants-card",code:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[o,d]=(0,t.useState)(),u=(0,r.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[u]);let x=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...o})}),!o&&(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(s.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(s.vB,{content:"external",target:"_blank",href:x(e),children:e.name})}),(0,i.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},44952:function(e,n,a){"use strict";a.r(n);var i=a(52322),r=a(21224),t=a(99854),l=a(23149),s=a(97461),c=a(37395),o=a(99341);let d=e=>{let{drawerOpen:n,forceMobile:a,burgerMenuLabel:r,children:t,className:s,describedbyid:c,id:o,key:d,tabIndex:u,title:x,onToggle:h}=e;return(0,i.jsx)(l.W4,{brand:(0,i.jsx)(l.mX,{title:"DBHeader",imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"DBHeader"}),metaNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.vB,{href:"#",children:"Imprint"}),(0,i.jsx)(l.vB,{href:"#",children:"Help"})]}),callToAction:(0,i.jsx)(l.Y1,{icon:"search",variant:"text",noText:!0,children:"Search"}),actionBar:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Y1,{icon:"account",variant:"text",noText:!0,children:"Profile"}),(0,i.jsx)(l.Y1,{icon:"alert",variant:"text",noText:!0,children:"Notification"}),(0,i.jsx)(l.Y1,{icon:"help",variant:"text",noText:!0,children:"Help"})]}),drawerOpen:n,forceMobile:a,burgerMenuLabel:r,className:s,describedbyid:c,id:o,tabIndex:u,title:x,onToggle:h,children:(0,i.jsxs)(l.Cc,{children:[(0,i.jsx)(l.pK,{icon:"account",children:(0,i.jsx)("a",{href:"#",children:t})}),(0,i.jsx)(l.pK,{disabled:!0,children:(0,i.jsxs)("a",{href:"#",children:[t," disabled"]})})]})},d)};n.default=()=>(0,i.jsx)(o.Z,{title:"DBHeader",variants:(0,c.P)(s,d,[(0,i.jsx)(r.default,{}),(0,i.jsx)(t.default,{})])})},97461:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Behaviour","examples":[{"name":"Desktop (full width)","style":{"width":"100%","display":"block"}},{"name":"Mobile","props":{"forceMobile":"true"}}]}]')}},function(e){e.O(0,[64996,64037,23075,21224,99854,92888,49774,40179],function(){return e(e.s=86632)}),_N_E=e.O()}]);