(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3292],{16964:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/section",function(){return n(80911)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return l}});let l=(e,a,n)=>{var l,s,t;return e.map((e,i)=>({...e,slotCode:null!==(l=null==n?void 0:n.at(i))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}))}))}},68623:function(e,a,n){"use strict";var l=n(52322),s=n(5632),t=n(2784),i=n(89477),r=n(8132);let o=e=>{let{examples:a,slotCode:n}=e;return(0,l.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,l.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,l.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,d]=(0,t.useState)(),u=(0,s.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);d(e)}}},[u]);let m=e=>{var a;return window.location.origin?"".concat(null==window?void 0:null===(a=window.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,l.jsxs)(l.Fragment,{children:[c&&(0,l.jsx)("div",{children:(0,l.jsx)(o,{...c})}),!c&&(0,l.jsx)(i.Z,{children:(0,l.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,l.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(r.oH,{}),(0,l.jsx)("h2",{children:(0,l.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,l.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},80911:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var l=n(52322),s=n(8364),t=n(2388),i=n(92956),r=n(8132),o=n(68623),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Full (Default)","style":{"width":"100%","display":"block"},"props":{}},{"name":"Medium","style":{"width":"100%","display":"block"},"props":{"variant":"medium"}},{"name":"Large","style":{"width":"100%","display":"block"},"props":{"variant":"large"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Large","props":{"size":"large"}},{"name":"Small","props":{"size":"small"}}]}]'),d=n(75549);let u=e=>{let{variant:a,size:n,children:s}=e;return(0,l.jsx)(r.cN,{className:"db-bg-informational",size:n,variant:a,children:s})};var m=()=>(0,l.jsx)(o.Z,{title:"DBSection",variants:(0,d.P)(c,u,[(0,l.jsx)(s.default,{}),(0,l.jsx)(t.default,{}),(0,l.jsx)(i.default,{})])})}},function(e){e.O(0,[4996,203,9477,8132,2388,2956,8364,9774,2888,179],function(){return e(e.s=16964)}),_N_E=e.O()}]);