(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69719],{74940:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge/overview",function(){return a(80378)}])},56311:function(e,n,a){"use strict";a.d(n,{P:function(){return r}});let r=(e,n,a)=>e.map((e,r)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(r))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,r;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:null!==(r=e.props.children)&&void 0!==r?r:e.name})}})}})},60955:function(e,n,a){"use strict";var r=a(52322),s=a(5632),i=a(2784),t=a(64508),l=a(88451);let o=e=>{let{examples:n,slotCode:a}=e;return(0,r.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,m]=(0,i.useState)(),p=(0,s.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let n=null===(e=p.query.page)||void 0===e?void 0:e.toString();n&&m(a.find(e=>e.name.toLowerCase()===n))}},[p]);let u=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(o,{...c})}),!c&&(0,r.jsx)(t.Z,{children:(0,r.jsxs)("div",{className:"default-container",children:[(0,r.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(l.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(l.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,r.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},80378:function(e,n,a){"use strict";a.r(n);var r=a(52322),s=a(35291),i=a(6897),t=a(88424),l=a(762),o=a(89829),c=a(11694),m=a(4339),p=a(88451),u=a(60955),d=a(9394),x=a(56311);let h=e=>{let{children:n,variant:a,emphasis:s,noContent:i,size:t,placement:l,example:o}=e;return(0,r.jsxs)(r.Fragment,{children:[!l&&!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.aE,{variant:a,emphasis:s,size:t,children:i?"":n}),i&&(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]}),l&&"inline"!==l&&!o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.Y1,{icon:"account",variant:"outlined",noText:!0,children:[(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"critical",placement:l}),n]}),(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]}),"inline"===l&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"badge-inline-container",children:[(0,r.jsx)(p.Pg,{icon:"account"}),(0,r.jsx)("span",{children:n}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"critical",children:"Label"}),(0,r.jsx)(p.Pg,{icon:"error"})]})}),"icon"===o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.aE,{variant:"critical",emphasis:"strong",size:t,children:(0,r.jsx)(p.Pg,{icon:"account",children:n})}),(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]}),"number"===o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.aE,{variant:"successful",children:"9"}),(0,r.jsx)(p.aE,{variant:"informational",children:"12"}),(0,r.jsx)(p.aE,{variant:"warning",children:"123"}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"successful",children:"9"}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"informational",children:"12"}),(0,r.jsx)(p.aE,{size:"small",emphasis:"strong",variant:"warning",children:"123"}),(0,r.jsx)(p.EZ,{variant:"informational",size:"small",icon:"none",children:n})]})]})};n.default=()=>(0,r.jsx)(u.Z,{title:"DBBadge",variants:(0,x.P)(d,h,[(0,r.jsx)(s.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(c.default,{}),(0,r.jsx)(m.default,{})])})},9394:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Adaptive (Default)","props":{}},{"name":"Neutral","props":{"variant":"neutral"}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"variant":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Dot (Default)","props":{"noContent":true}},{"name":"Dot - Small","props":{"noContent":true,"size":"small"}},{"name":"Text","props":{}},{"name":"Icon","props":{"example":"icon"}},{"name":"Icon - Small","props":{"example":"icon","size":"small"}}]},{"name":"Placement","examples":[{"name":"Inline (Default)","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]')}},function(e){e.O(0,[64996,78410,88451,64508,88424,11694,89829,35291,6897,762,4339,49774,92888,40179],function(){return e(e.s=74940)}),_N_E=e.O()}]);