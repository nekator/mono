(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5750],{90689:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link/overview",function(){return n(56267)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return r}});let r=(e,a,n)=>{var r,l,t;return e.map((e,s)=>({...e,slotCode:null!==(r=null==n?void 0:n.at(s))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}))}))}},68623:function(e,a,n){"use strict";var r=n(52322),l=n(5632),t=n(2784),s=n(18338),i=n(70306);let o=e=>{let{examples:a,slotCode:n}=e;return(0,r.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,r.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,t.useState)(),c=(0,l.useRouter)();(0,t.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[c]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("div",{children:(0,r.jsx)(o,{...d})}),!d&&(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(i.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(i.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},56267:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return f}});var r=n(52322),l=n(43898),t=n(24862),s=n(69401),i=n(42500),o=n(88797),d=n(70306),u=n(68623),c=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"href":"#"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"href":"#"}},{"name":"expressive","className":"db-ui-expressive","props":{"href":"#"}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"href":"#"}},{"name":"Primary","props":{"href":"#","variant":"primary"}}]},{"name":"State","examples":[{"name":"Default: (Enabled, Hover, Pressed)","props":{"href":"#"}},{"name":"Disabled","props":{"href":"#","disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"href":"#"}},{"name":"Small","props":{"href":"#","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Internal","props":{"href":"#"}},{"name":"External","props":{"href":"#","content":"external"}}]}]'),p=n(75549);let m=e=>{let{href:a,variant:n,disabled:l,size:t,content:s,children:i}=e;return(0,r.jsx)(d.vB,{href:a,variant:n,disabled:l,size:t,content:s,children:i})};var f=()=>(0,r.jsx)(u.Z,{title:"DBLink",variants:(0,p.P)(c,m,[(0,r.jsx)(l.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{})])})}},function(e){e.O(0,[4996,4375,8338,306,3898,4862,2500,8797,9401,9774,2888,179],function(){return e(e.s=90689)}),_N_E=e.O()}]);