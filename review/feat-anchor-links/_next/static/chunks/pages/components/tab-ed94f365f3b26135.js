(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45544],{21160:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab",function(){return l(53507)}])},37395:function(e,a,l){"use strict";l.d(a,{P:function(){return t}});let t=(e,a,l)=>e.map((e,t)=>{var n;return{...e,slotCode:null!==(n=null==l?void 0:l.at(t))&&void 0!==n?n:"No code available",examples:e.examples.map(e=>{var l,t,n,i;return{...e,example:a({...e.props,id:null!==(n=null===(l=e.props)||void 0===l?void 0:l.id)&&void 0!==n?n:e.name,children:null!==(i=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,a,l){"use strict";var t=l(52322),n=l(5632),i=l(2784),s=l(25942),r=l(8674);let o=e=>{let{examples:a,slotCode:l}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:l,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:l}=e,[c,d]=(0,i.useState)(),u=(0,n.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&d(l.find(e=>e.name.toLowerCase()===a))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...c})}),!c&&(0,t.jsx)(s.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==l?void 0:l.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},53507:function(e,a,l){"use strict";l.r(a);var t=l(52322),n=l(64960),i=l(22282),s=l(72250),r=l(32258),o=l(29307),c=l(8674),d=l(99341),u=l(63535),p=l(37395);let m=e=>{let{children:a,active:l,noText:n,icon:i,iconAfter:s,width:r,alignment:o,disabled:d}=e;return(0,t.jsx)(c.QQ,{active:l,noText:n,icon:i,iconAfter:s,width:r,disabled:d,alignment:o,children:a})};a.default=()=>(0,t.jsx)(d.Z,{title:"DBTab",variants:(0,p.P)(u,m,[(0,t.jsx)(n.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{})])})},63535:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional tab-hide-article","props":{"label":"functional"}},{"name":"regular (Default)","className":"db-ui-regular tab-hide-article","props":{"label":"regular (Default)"}},{"name":"expressive","className":"db-ui-expressive tab-hide-article","props":{"label":"expressive"}}]},{"name":"States","examples":[{"name":"(Default) Enabled","props":{"label":"(Default) Enabled"}},{"name":"active","props":{"label":"active","active":true}},{"name":"disabled","props":{"label":"active","disabled":true}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"(Default) Text"}},{"name":"Text - Icon (Leading)","props":{"label":"Text - Icon (Leading)","icon":"x_placeholder"}},{"name":"Text - Icon (Trailing)","props":{"label":"Text - Icon (Trailing)","iconAfter":"x_placeholder"}},{"name":"Icon","props":{"icon":"x_placeholder","noText":true}}]},{"name":"Behaviour","examples":[{"name":"Auto Width (Default)","props":{"label":"Auto Width (Default)"}},{"name":"Width full","style":{"width":"500px"},"props":{"label":"Width full","width":"full"}}]},{"name":"Content Alignment Full Width","examples":[{"name":"Left","style":{"width":"500px"},"props":{"label":"Left","width":"full"}},{"name":"Centered","style":{"width":"500px"},"props":{"label":"Centered","width":"full","alignment":"center"}}]}]')}},function(e){e.O(0,[64996,10478,25942,72250,26250,64960,32258,29307,92888,49774,40179],function(){return e(e.s=21160)}),_N_E=e.O()}]);