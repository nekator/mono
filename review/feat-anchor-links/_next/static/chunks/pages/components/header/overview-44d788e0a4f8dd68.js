(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34905],{86632:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/overview",function(){return a(44952)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,i,t,l;return{...e,example:n({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(l=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,n,a){"use strict";var i=a(52322),t=a(5632),l=a(2784),r=a(25942),s=a(8674);let o=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(s.wq,{className:"variants-card",slotCode:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,d]=(0,l.useState)(),u=(0,t.useRouter)();(0,l.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[u]);let h=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)("div",{children:(0,i.jsx)(o,{...c})}),!c&&(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(s.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(s.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,i.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},44952:function(e,n,a){"use strict";a.r(n);var i=a(52322),t=a(21224),l=a(99854),r=a(8674),s=a(97461),o=a(37395),c=a(99341);let d=e=>{let{drawerOpen:n,forceMobile:a,burgerMenuLabel:t,children:l,className:s,describedbyid:o,id:c,key:d,stylePath:u,tabIndex:h,title:x,onToggle:p}=e;return(0,i.jsx)(r.W4,{slotBrand:(0,i.jsx)(r.mX,{title:"DBHeader",imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"DBHeader"}),slotMetaNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.vB,{href:"#",children:"Imprint"}),(0,i.jsx)(r.vB,{href:"#",children:"Help"})]}),slotCallToAction:(0,i.jsx)(r.Y1,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Y1,{icon:"account",variant:"text",noText:!0,children:"Profile"}),(0,i.jsx)(r.Y1,{icon:"alert",variant:"text",noText:!0,children:"Notification"}),(0,i.jsx)(r.Y1,{icon:"help",variant:"text",noText:!0,children:"Help"})]}),drawerOpen:n,forceMobile:a,burgerMenuLabel:t,className:s,describedbyid:o,id:c,stylePath:u,tabIndex:h,title:x,onToggle:p,children:(0,i.jsxs)(r.Cc,{children:[(0,i.jsx)(r.pK,{icon:"account",children:(0,i.jsx)("a",{href:"#",children:l})}),(0,i.jsx)(r.pK,{disabled:!0,children:(0,i.jsxs)("a",{href:"#",children:[l," disabled"]})})]})},d)};n.default=()=>(0,i.jsx)(c.Z,{title:"DBHeader",variants:(0,o.P)(s,d,[(0,i.jsx)(t.default,{}),(0,i.jsx)(l.default,{})])})},97461:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Behaviour","examples":[{"name":"Desktop (full width)","style":{"width":"100%","display":"block"}},{"name":"Mobile","props":{"forceMobile":"true"}}]}]')}},function(e){e.O(0,[64996,10478,25942,21224,99854,92888,49774,40179],function(){return e(e.s=86632)}),_N_E=e.O()}]);