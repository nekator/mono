(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30907],{66692:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/overview",function(){return t(94646)}])},29712:function(e,a,t){"use strict";t.d(a,{P:function(){return getVariants}});let getVariants=(e,a,t)=>e.map((e,n)=>{var s;return{...e,slotCode:null!==(s=null==t?void 0:t.at(n))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var t,n;return{...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},1227:function(e,a,t){"use strict";var n=t(52322),s=t(5632),i=t(2784),r=t(82797),l=t(37426);let VariantList=e=>{let{examples:a,slotCode:t}=e;return(0,n.jsx)(l.wq,{className:"variants-card",slotCode:t,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:t}=e,[o,u]=(0,i.useState)(),d=(0,s.useRouter)();(0,i.useEffect)(()=>{if(d.query){var e;let a=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(a){let e=t.find(e=>e.name.toLowerCase()===a);u(e)}}},[d]);let getHref=e=>{var a,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(a=t.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[o&&(0,n.jsx)("div",{children:(0,n.jsx)(VariantList,{...o})}),!o&&(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==t?void 0:t.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(l.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(l.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,n.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},94646:function(e,a,t){"use strict";t.r(a);var n=t(52322),s=t(11453),i=t(71047),r=t(4547),l=t(52353),o=t(91584),u=t(85452),d=t(37426),c=t(1227),p=t(10689),m=t(29712);let getButton=e=>{let{variant:a,state:t,size:s,noText:i,icon:r,width:l,disabled:o,children:u}=e;return(0,n.jsx)(d.Y1,{variant:a,state:t,size:s,noText:i,icon:r,disabled:o,width:l,onClick:()=>{alert(u.toString())},children:u})};a.default=()=>(0,n.jsx)(c.Z,{title:"DBButton",variants:(0,m.P)(p,getButton,[(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(l.default,{}),(0,n.jsx)(o.default,{}),(0,n.jsx)(u.default,{})])})},10689:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Primary","props":{"variant":"primary"}},{"name":"Outlined (Adaptive)","props":{}},{"name":"Solid (Adaptive)","props":{"variant":"solid"}},{"name":"Text (Adaptive)","props":{"variant":"text"}}]},{"name":"State","examples":[{"name":"Enabled (Default)","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon & Text","props":{"icon":"account"}},{"name":"Icon","props":{"icon":"account","noText":true}}]},{"name":"Behaviour","examples":[{"name":"Auto Width (Default)","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]')}},function(e){e.O(0,[64996,84375,82797,37426,71047,91584,11453,54192,52353,4547,49774,92888,40179],function(){return e(e.s=66692)}),_N_E=e.O()}]);