(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[33899],{9653:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge",function(){return a(23891)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return s}});let s=(e,n,a)=>e.map((e,s)=>{var i;return{...e,slotCode:null!==(i=null==a?void 0:a.at(s))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var a,s,i,t;return{...e,example:n({...e.props,id:null!==(i=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==i?i:e.name,children:null!==(t=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==t?t:e.name})}})}})},99341:function(e,n,a){"use strict";var s=a(52322),i=a(5632),t=a(2784),r=a(23075),l=a(23149);let o=e=>{let{examples:n,slotCode:a}=e;return(0,s.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,s.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,m]=(0,t.useState)(),p=(0,i.useRouter)();(0,t.useEffect)(()=>{if(p.query){var e;let n=null===(e=p.query.page)||void 0===e?void 0:e.toString();n&&m(a.find(e=>e.name.toLowerCase()===n))}},[p]);let d=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)("div",{children:(0,s.jsx)(o,{...c})}),!c&&(0,s.jsx)(r.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(l.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(l.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,s.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},23891:function(e,n,a){"use strict";a.r(n);var s=a(52322),i=a(99384),t=a(6897),r=a(31814),l=a(762),o=a(89829),c=a(11694),m=a(4339),p=a(23149),d=a(99341),u=a(9394),x=a(37395);let h=e=>{let{children:n,semantic:a,emphasis:i,noContent:t,size:r,placement:l,example:o}=e;return(0,s.jsxs)(s.Fragment,{children:[!l&&!o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.aE,{semantic:a,emphasis:i,size:r,children:t?"":n}),t&&(0,s.jsx)(p.EZ,{semantic:"informational",size:"small",icon:"none",children:n})]}),l&&"inline"!==l&&!o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(p.Y1,{icon:"account",variant:"outlined",noText:!0,children:[(0,s.jsx)(p.aE,{size:"small",emphasis:"strong",semantic:"critical",placement:l}),n]}),(0,s.jsx)(p.EZ,{semantic:"informational",size:"small",icon:"none",children:n})]}),"inline"===l&&(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"badge-inline-container",children:[(0,s.jsx)(p.Pg,{icon:"account"}),(0,s.jsx)("span",{children:n}),(0,s.jsx)(p.aE,{size:"small",emphasis:"strong",semantic:"critical",children:"Label"}),(0,s.jsx)(p.Pg,{icon:"error"})]})}),"icon"===o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.aE,{semantic:"critical",emphasis:"strong",size:r,children:(0,s.jsx)(p.Pg,{icon:"account",children:n})}),(0,s.jsx)(p.EZ,{semantic:"informational",size:"small",icon:"none",children:n})]}),"number"===o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.aE,{semantic:"successful",children:"9"}),(0,s.jsx)(p.aE,{semantic:"informational",children:"12"}),(0,s.jsx)(p.aE,{semantic:"warning",children:"123"}),(0,s.jsx)(p.aE,{size:"small",emphasis:"strong",semantic:"successful",children:"9"}),(0,s.jsx)(p.aE,{size:"small",emphasis:"strong",semantic:"informational",children:"12"}),(0,s.jsx)(p.aE,{size:"small",emphasis:"strong",semantic:"warning",children:"123"}),(0,s.jsx)(p.EZ,{semantic:"informational",size:"small",icon:"none",children:n})]})]})};n.default=()=>(0,s.jsx)(d.Z,{title:"DBBadge",variants:(0,x.P)(u,h,[(0,s.jsx)(i.default,{}),(0,s.jsx)(t.default,{}),(0,s.jsx)(r.default,{}),(0,s.jsx)(l.default,{}),(0,s.jsx)(o.default,{}),(0,s.jsx)(c.default,{}),(0,s.jsx)(m.default,{})])})},9394:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Semantic","examples":[{"name":"Adaptive (Default)","props":{}},{"name":"Neutral","props":{"semantic":"neutral"}},{"name":"Critical","props":{"semantic":"critical"}},{"name":"Informational","props":{"semantic":"informational"}},{"name":"Successful","props":{"semantic":"successful"}},{"name":"Warning","props":{"semantic":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"semantic":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"semantic":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"semantic":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"semantic":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"semantic":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"Dot","props":{"noContent":true}},{"name":"Dot - Small","props":{"noContent":true,"size":"small"}},{"name":"Icon","props":{"example":"icon"}},{"name":"Icon - Small","props":{"example":"icon","size":"small"}}]},{"name":"Placement","examples":[{"name":"Inline (Default)","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]')}},function(e){e.O(0,[64996,64037,23075,31814,11694,89829,99384,6897,762,4339,92888,49774,40179],function(){return e(e.s=9653)}),_N_E=e.O()}]);