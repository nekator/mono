(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1940],{27143:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/overview",function(){return n(61048)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,s,l;return e.map((e,r)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(r))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(l=e.props.children)&&void 0!==l?l:e.name})}))}))}},68623:function(e,a,n){"use strict";var t=n(52322),s=n(5632),l=n(2784),r=n(18338),i=n(70306);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,c]=(0,l.useState)(),u=(0,s.useRouter)();(0,l.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);c(e)}}},[u]);let m=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(r.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(i.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(i.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},61048:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var t=n(52322),s=n(86061),l=n(49126),r=n(50739),i=n(70306),o=n(68623),d=n(75549),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Disabled","props":{"name":"States","disabled":true}},{"name":"Disabled checked","props":{"name":"States","disabled":true,"checked":true}},{"name":"Required","props":{"name":"States","required":true}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]}]');let u=e=>{let{label:a,size:n,name:s,checked:l,invalid:r,required:o,children:d,disabled:c,indeterminate:u}=e;return(0,t.jsx)(i.I3,{label:a,size:n,name:s,checked:l,invalid:r,required:o,disabled:c,indeterminate:u,children:d})};var m=()=>(0,t.jsx)(o.Z,{title:"DBCheckbox",variants:(0,d.P)(c,u,[(0,t.jsx)(s.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(r.default,{})])})}},function(e){e.O(0,[4996,4375,8338,306,9126,6061,739,9774,2888,179],function(){return e(e.s=27143)}),_N_E=e.O()}]);