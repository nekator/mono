(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64927],{87480:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return a(24938)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,t,s,i;return{...e,example:n({...e.props,id:null!==(s=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==s?s:e.name,children:null!==(i=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,a){"use strict";var t=a(52322),s=a(5632),i=a(2784),r=a(23075),l=a(23149);let o=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[d,m]=(0,i.useState)(),u=(0,s.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&m(a.find(e=>e.name.toLowerCase()===n))}},[u]);let c=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(r.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},24938:function(e,n,a){"use strict";a.r(n);var t=a(52322),s=a(94600),i=a(44507),r=a(39199),l=a(27322),o=a(99065),d=a(23149),m=a(99341),u=a(37395),c=a(46810);let p=e=>{let{label:n,size:a,name:s,checked:i,invalid:r,required:l,children:o,disabled:m,indeterminate:u,variant:c}=e;return(0,t.jsx)(d.I3,{label:n,size:a,name:s,defaultChecked:i,invalid:r,required:l,disabled:m,variant:c,indeterminate:u,children:o})};n.default=()=>(0,t.jsx)(m.Z,{title:"DBCheckbox",variants:(0,u.P)(c,p,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(o.default,{})])})},46810:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{"name":"Density"}},{"name":"regular (Default)","className":"db-density-regular","props":{"name":"Density"}},{"name":"expressive","className":"db-density-expressive","props":{"name":"Density"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}},{"name":"Disabled","props":{"name":"States","disabled":true}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"name":"Requirement"}},{"name":"Required","props":{"name":"Requirement","required":true}},{"name":"Required - Indeterminate","props":{"name":"Requirement","indeterminate":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label","props":{"name":"Content"}},{"name":"Hidden Label","props":{"name":"Content","variant":"hidden"}}]}]')}},function(e){e.O(0,[64996,64037,23075,44507,39199,94600,27322,99065,92888,49774,40179],function(){return e(e.s=87480)}),_N_E=e.O()}]);