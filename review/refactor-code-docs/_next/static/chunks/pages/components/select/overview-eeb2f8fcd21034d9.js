(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31265],{74729:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select/overview",function(){return a(29561)}])},37395:function(e,l,a){"use strict";a.d(l,{P:function(){return i}});let i=(e,l,a)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,i,t,n;return{...e,example:l({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(n=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==n?n:e.name})}})}})},99341:function(e,l,a){"use strict";var i=a(52322),t=a(5632),n=a(2784),s=a(23075),o=a(86095);let p=e=>{let{examples:l,slotCode:a}=e,[t,s]=(0,n.useState)();return(0,i.jsxs)(o.f,{className:"variants-card db-code-docs",children:[(0,i.jsx)("div",{className:"variants-list",children:l.map((e,l)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(l)))}),(0,i.jsxs)("details",{className:"code-details",onToggle:()=>{s(!t)},children:[(0,i.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:t?"Hide code":"Show code"}),(0,i.jsx)("div",{className:"db-ui-functional code",children:a})]})]})};l.Z=e=>{let{title:l,variants:a}=e,[d,u]=(0,n.useState)(),r=(0,t.useRouter)();(0,n.useEffect)(()=>{if(r.query){var e;let l=null===(e=r.query.page)||void 0===e?void 0:e.toString();l&&u(a.find(e=>e.name.toLowerCase()===l))}},[r]);let v=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[d&&(0,i.jsx)("div",{children:(0,i.jsx)(p,{...d})}),!d&&(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:l}),null==a?void 0:a.map((e,l)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(o.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(o.vB,{content:"external",target:"_blank",href:v(e),children:e.name})}),(0,i.jsx)(p,{...e})]},"".concat(e.name,"-").concat(l)))]})})]})}},29561:function(e,l,a){"use strict";a.r(l);var i=a(52322),t=a(90100),n=a(42038),s=a(58565),o=a(14033),p=a(91599),d=a(94361),u=a(58234),r=a(87055),v=a(86095),b=a(99341),c=a(28213),m=a(37395);let x=e=>{let{children:l,label:a,variant:t,options:n,icon:s,message:o,disabled:p,value:d,required:u,labelVariant:r,invalid:b}=e;return(0,i.jsx)(v.kr,{label:a,placeholder:l,variant:t,options:n,disabled:p,labelVariant:r,icon:s,value:d,message:o,invalid:b,required:u,children:l})};l.default=()=>(0,i.jsx)(b.Z,{title:"DBSelect",variants:(0,m.P)(c,x,[(0,i.jsx)(t.default,{}),(0,i.jsx)(n.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(o.default,{}),(0,i.jsx)(p.default,{}),(0,i.jsx)(d.default,{}),(0,i.jsx)(u.default,{}),(0,i.jsx)(r.default,{})])})},28213:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"(Default) Regular","className":"db-ui-regular","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Expressive","className":"db-ui-expressive","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label Above","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Floating Label","style":{"width":"300px"},"props":{"options":[{"value":"Floating Label"},{"value":"Option 2"}],"label":"Label","labelVariant":"floating","value":"Floating Label"}},{"name":"Hidden Label","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","labelVariant":"hidden"}}]},{"name":"Variant Helper Message","examples":[{"name":"(Default) Basic","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Helper Message","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","message":"Helper Message"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","message":"Helper Message"}},{"name":"Critical","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"critical","message":"Critical Message"}},{"name":"Informational","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"informational","message":"Informational Message"}},{"name":"Successful","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"successful","message":"Successful Message"}},{"name":"Warning","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"warning","message":"Warning Message"}}]},{"name":"States Label Above","examples":[{"name":"(Default) Empty","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Filled","style":{"width":"300px"},"props":{"options":[{"value":"Filled"},{"value":"Option 2"}],"label":"Label","value":"Filled"}},{"name":"Filled - Invalid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Invalid"},{"value":"Option 2"}],"label":"Label","value":"Filled - Invalid","invalid":true}},{"name":"Filled - Valid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Valid"},{"value":"Option 2"}],"label":"Label","value":"Filled - Valid","invalid":false}},{"name":"Disabled","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","disabled":true}}]},{"name":"States Floating Label","examples":[{"name":"(Default) Empty","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","labelVariant":"floating"}},{"name":"Filled","style":{"width":"300px"},"props":{"options":[{"value":"Filled"},{"value":"Option 2"}],"label":"Label","value":"Filled","labelVariant":"floating"}},{"name":"Filled - Invalid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Invalid"},{"value":"Option 2"}],"label":"Label","invalid":true,"value":"Filled - Invalid","labelVariant":"floating"}},{"name":"Filled - Valid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Valid"},{"value":"Option 2"}],"label":"Label","value":"Filled - Valid","invalid":false,"labelVariant":"floating"}},{"name":"Disabled","style":{"width":"300px"},"props":{"options":[{"value":"Disabled"},{"value":"Option 2"}],"label":"Label","disabled":true,"labelVariant":"floating","value":"Disabled"}}]},{"name":"Content","examples":[{"name":"(Default) Text","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Text - Leading Icon","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","icon":"x_placeholder"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Required","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","required":true}},{"name":"Required - Filled","style":{"width":"300px"},"props":{"options":[{"value":"Required - Filled"},{"value":"Option 2"}],"label":"Label","value":"Required - Filled","required":true}}]}]')}},function(e){e.O(0,[64996,64037,23075,14033,94361,87055,90100,91599,58234,42038,58565,92888,49774,40179],function(){return e(e.s=74729)}),_N_E=e.O()}]);