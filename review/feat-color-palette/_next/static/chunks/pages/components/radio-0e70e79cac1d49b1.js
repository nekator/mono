(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16565],{43754:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return n(53289)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,t,s,l;return{...e,example:a({...e.props,id:null!==(s=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==s?s:e.name,children:null!==(l=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,a,n){"use strict";var t=n(52322),s=n(5632),l=n(2784),i=n(23075),r=n(23149);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,l.useState)(),c=(0,s.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();a&&u(n.find(e=>e.name.toLowerCase()===a))}},[c]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},53289:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(95427),l=n(62126),i=n(1214),r=n(66931),o=n(55595),d=n(23149),u=n(99341),c=n(37395),m=n(81566);let p=e=>{let{label:a,size:n,name:s,checked:l,invalid:i,required:r,children:o,disabled:u,value:c,variant:m}=e;return(0,t.jsx)(d.an,{label:a,size:n,name:s,defaultChecked:l,invalid:i,required:r,disabled:u,variant:m,value:c,children:o})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBRadio",variants:(0,c.P)(m,p,[(0,t.jsx)(s.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{})])})},81566:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{"name":"Density","value":"functional"}},{"name":"regular (Default)","className":"db-density-regular","props":{"name":"Density","value":"regular"}},{"name":"expressive","className":"db-density-expressive","props":{"name":"Density","value":"expressive"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Disabled","props":{"name":"States","disabled":true}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"name":"Requirement"}},{"name":"Required","props":{"name":"Requirement","required":true,"invalid":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label","props":{"name":"Content"}},{"name":"Hidden Label","props":{"name":"Content","variant":"hidden"}}]}]')}},function(e){e.O(0,[64996,64037,23075,95427,62126,66931,1214,55595,92888,49774,40179],function(){return e(e.s=43754)}),_N_E=e.O()}]);