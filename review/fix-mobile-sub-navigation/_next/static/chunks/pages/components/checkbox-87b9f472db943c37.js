(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64927],{87480:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return n(24938)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(t))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,t,l,s;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(s=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,a,n){"use strict";var t=n(52322),l=n(5632),s=n(2784),i=n(23075),r=n(8674);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,s.useState)(),m=(0,l.useRouter)();(0,s.useEffect)(()=>{if(m.query){var e;let a=null===(e=m.query.page)||void 0===e?void 0:e.toString();a&&u(n.find(e=>e.name.toLowerCase()===a))}},[m]);let c=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},24938:function(e,a,n){"use strict";n.r(a);var t=n(52322),l=n(7465),s=n(44507),i=n(39199),r=n(27322),o=n(99065),d=n(8674),u=n(99341),m=n(37395),c=n(46810);let p=e=>{let{label:a,size:n,name:l,checked:s,invalid:i,required:r,children:o,disabled:u,indeterminate:m,labelVariant:c}=e;return(0,t.jsx)(d.I3,{label:a,size:n,name:l,defaultChecked:s,invalid:i,required:r,disabled:u,labelVariant:c,indeterminate:m,children:o})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBCheckbox",variants:(0,m.P)(c,p,[(0,t.jsx)(l.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{})])})},46810:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}},{"name":"Disabled","props":{"name":"States","disabled":true}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"name":"Requirement"}},{"name":"Required","props":{"name":"Requirement","required":true}},{"name":"Required - Checked","props":{"name":"Requirement","required":true,"checked":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label","props":{"name":"Content"}},{"name":"Hidden Label","props":{"name":"Content","labelVariant":"hidden"}}]}]')}},function(e){e.O(0,[64996,64037,23075,44507,39199,7465,27322,99065,92888,49774,40179],function(){return e(e.s=87480)}),_N_E=e.O()}]);