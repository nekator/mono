(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1265],{74729:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select/overview",function(){return n(55357)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return l}});let l=(e,a,n)=>{var l,t,i;return e.map((e,o)=>({...e,slotCode:null!==(l=null==n?void 0:n.at(o))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}))}))}},68623:function(e,a,n){"use strict";var l=n(52322),t=n(5632),i=n(2784),o=n(18338),s=n(99686);let p=e=>{let{examples:a,slotCode:n}=e;return(0,l.jsx)(s.wq,{className:"variants-card",slotCode:n,children:(0,l.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,l.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[r,u]=(0,i.useState)(),c=(0,t.useRouter)();(0,i.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[c]);let v=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,l.jsxs)(l.Fragment,{children:[r&&(0,l.jsx)("div",{children:(0,l.jsx)(p,{...r})}),!r&&(0,l.jsx)(o.Z,{children:(0,l.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,l.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(s.oH,{}),(0,l.jsx)("h2",{children:(0,l.jsx)(s.vB,{content:"external",target:"_blank",href:v(e),children:e.name})}),(0,l.jsx)(p,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},55357:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return v}});var l=n(52322),t=n(11424),i=n(21127),o=n(69426),s=n(99686),p=n(68623),r=JSON.parse('[{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"label":"Label","message":"(Default) Adaptive","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Informational","props":{"label":"Label","message":"Informational","variant":"informational","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Warning","props":{"label":"Label","message":"Warning","variant":"warning","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Critical","props":{"label":"Label","message":"Critical","variant":"critical","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Successful","props":{"label":"Label","message":"Successful","variant":"successful","options":[{"value":"Option 1"},{"value":"Option 2"}]}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label","message":"Default","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With value","props":{"label":"Label","message":"With value","value":"Option 2","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Disabled","props":{"label":"Label","message":"Disabled","disabled":true,"options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Disabled + value","props":{"label":"Label","message":"Disabled + value","disabled":true,"value":"Option 2","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Optgroup","props":{"label":"Label","message":"Optgroup","options":[{"value":"Optgroup 1","options":[{"value":"Option 1"},{"value":"Option 2"}]},{"value":"Option 2"}]}}]},{"name":"Content","examples":[{"name":"Default","props":{"label":"Label","message":"Default","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With Icon","props":{"label":"Label","message":"With Icon","icon":"edit","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With Icon + Variant","props":{"label":"Label","message":"With Icon + Variant","icon":"edit","variant":"successful","options":[{"value":"Option 1"},{"value":"Option 2"}]}}]}]'),u=n(75549);let c=e=>{let{children:a,label:n,variant:t,options:i,icon:o,message:p,disabled:r,value:u}=e;return(0,l.jsx)(s.kr,{label:n,variant:t,options:i,disabled:r,icon:o,value:u,message:p,children:a})};var v=()=>(0,l.jsx)(p.Z,{title:"DBSelect",variants:(0,u.P)(r,c,[(0,l.jsx)(t.default,{}),(0,l.jsx)(i.default,{}),(0,l.jsx)(o.default,{})])})}},function(e){e.O(0,[4996,4375,8338,9686,1424,1127,9426,9774,2888,179],function(){return e(e.s=74729)}),_N_E=e.O()}]);