(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91108],{74497:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item",function(){return t(3170)}])},37395:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var l;return{...e,slotCode:null!==(l=null==t?void 0:t.at(a))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var t,a,l,s;return{...e,example:n({...e.props,id:null!==(l=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==l?l:e.name,children:null!==(s=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,n,t){"use strict";var a=t(52322),l=t(5632),s=t(2784),i=t(23075),r=t(8674);let o=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[c,d]=(0,s.useState)(),u=(0,l.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(t.find(e=>e.name.toLowerCase()===n))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(o,{...c})}),!c&&(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,a.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},3170:function(e,n,t){"use strict";t.r(n);var a=t(52322),l=t(43121),s=t(73300),i=t(98350),r=t(8674),o=t(99341),c=t(19371),d=t(37395);let u=e=>{let{children:n,disabled:t,open:l,title:s}=e;return(0,a.jsx)(r.kC,{title:s,disabled:t,defaultOpen:l,children:n})};n.default=()=>(0,a.jsx)(o.Z,{title:"DBAccordionItem",variants:(0,d.P)(c,u,[(0,a.jsx)(l.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(i.default,{})])})},19371:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"title":"Functional"}},{"name":"Regular (Default)","className":"db-ui-regular","props":{"title":"Regular (Default)"}},{"name":"Expressive","className":"db-ui-expressive","props":{"title":"Expressive"}}]},{"name":"Interaction States","examples":[{"name":"Enabled (Default)/Hover/Pressed","props":{"title":"Enabled (Default)/Hover/Pressed"}},{"name":"Disabled","props":{"title":"Disabled","disabled":true}}]},{"name":"Content States","examples":[{"name":"Collapsed (Default)","props":{"title":"Collapsed (Default)"}},{"name":"Open","props":{"title":"Open","open":true}}]}]')}},function(e){e.O(0,[64996,64037,23075,43121,73300,98350,92888,49774,40179],function(){return e(e.s=74497)}),_N_E=e.O()}]);