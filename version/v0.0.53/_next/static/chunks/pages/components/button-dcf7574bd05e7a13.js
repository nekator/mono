(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9091],{57755:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button",function(){return n(87947)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,s,l;return e.map((e,i)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(s=e.props.id)&&void 0!==s?s:e.name,children:null!==(l=e.props.children)&&void 0!==l?l:e.name})}))}))}},68623:function(e,a,n){"use strict";var t=n(52322),s=n(5632),l=n(2784),i=n(18338),r=n(51963);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[d,u]=(0,l.useState)(),c=(0,s.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[c]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},87947:function(e,a,n){"use strict";n.r(a);var t=n(52322),s=n(88852),l=n(36883),i=n(65544),r=n(57229),o=n(59481),d=n(31676),u=n(51963),c=n(68623),p=n(10689),m=n(75549);let x=e=>{let{variant:a,state:n,size:s,noText:l,icon:i,width:r,disabled:o,children:d}=e;return(0,t.jsx)(u.Y1,{variant:a,state:n,size:s,noText:l,icon:i,disabled:o,width:r,onClick:()=>{alert(d.toString())},children:d})};a.default=()=>(0,t.jsx)(c.Z,{title:"DBButton",variants:(0,m.P)(p,x,[(0,t.jsx)(s.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{}),(0,t.jsx)(d.default,{})])})},10689:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Primary","props":{"variant":"primary"}},{"name":"Outlined (Adaptive)","props":{}},{"name":"Solid (Adaptive)","props":{"variant":"solid"}},{"name":"Text (Adaptive)","props":{"variant":"text"}}]},{"name":"State","examples":[{"name":"Enabled (Default)","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon & Text","props":{"icon":"account"}},{"name":"Icon","props":{"icon":"account","noText":true}}]},{"name":"Behaviour","examples":[{"name":"Auto Width (Default)","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]')}},function(e){e.O(0,[4996,4375,8338,1963,6883,9481,8852,1676,7229,5544,9774,2888,179],function(){return e(e.s=57755)}),_N_E=e.O()}]);