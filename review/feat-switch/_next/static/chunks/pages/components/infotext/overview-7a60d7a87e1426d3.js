(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32987],{41201:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext/overview",function(){return a(10644)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return s}});let s=(e,n,a)=>e.map((e,s)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(s))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,s,t,i;return{...e,example:n({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(i=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,a){"use strict";var s=a(52322),t=a(5632),i=a(2784),l=a(23075),r=a(73178);let o=e=>{let{examples:n,slotCode:a}=e;return(0,s.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,s.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,u]=(0,i.useState)(),d=(0,t.useRouter)();(0,i.useEffect)(()=>{if(d.query){var e;let n=null===(e=d.query.page)||void 0===e?void 0:e.toString();n&&u(a.find(e=>e.name.toLowerCase()===n))}},[d]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)("div",{children:(0,s.jsx)(o,{...c})}),!c&&(0,s.jsx)(l.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(r.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,s.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},10644:function(e,n,a){"use strict";a.r(n);var s=a(52322),t=a(56986),i=a(32621),l=a(29663),r=a(73178),o=a(99341),c=a(6514),u=a(37395);let d=e=>{let{semantic:n,size:a,icon:t,children:i}=e;return(0,s.jsx)(r.EZ,{semantic:n,size:a,icon:t,children:i})};n.default=()=>(0,s.jsx)(o.Z,{title:"DBInfotext",variants:(0,u.P)(c,d,[(0,s.jsx)(t.default,{}),(0,s.jsx)(i.default,{}),(0,s.jsx)(l.default,{})])})},6514:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Neutral","props":{"semantic":"neutral"}},{"name":"Critical","props":{"semantic":"critical"}},{"name":"Informational","props":{"semantic":"informational"}},{"name":"Successful","props":{"semantic":"successful"}},{"name":"Warning","props":{"semantic":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,64037,23075,32621,56986,29663,92888,49774,40179],function(){return e(e.s=41201)}),_N_E=e.O()}]);