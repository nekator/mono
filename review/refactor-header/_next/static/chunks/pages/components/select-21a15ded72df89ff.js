(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{96148:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){return n(24468)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return i}});let i=(e,a,n)=>{var i,t,l;return e.map((e,o)=>({...e,slotCode:null!==(i=null==n?void 0:n.at(o))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(l=e.props.children)&&void 0!==l?l:e.name})}))}))}},68623:function(e,a,n){"use strict";var i=n(52322),t=n(5632),l=n(2784),o=n(89477),s=n(8132);let p=e=>{let{examples:a,slotCode:n}=e;return(0,i.jsx)(s.wq,{className:"variants-card",slotCode:n,children:(0,i.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[r,u]=(0,l.useState)(),c=(0,t.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[c]);let d=e=>{var a;return window.location.origin?"".concat(null==window?void 0:null===(a=window.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)("div",{children:(0,i.jsx)(p,{...r})}),!r&&(0,i.jsx)(o.Z,{children:(0,i.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,i.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(s.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(s.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,i.jsx)(p,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},24468:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return d}});var i=n(52322),t=n(60286),l=n(76509),o=n(55527),s=n(8132),p=n(68623),r=JSON.parse('[{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"label":"Label","description":"(Default) Adaptive","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Informational","props":{"label":"Label","description":"Informational","variant":"informational","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Warning","props":{"label":"Label","description":"Warning","variant":"warning","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Critical","props":{"label":"Label","description":"Critical","variant":"critical","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Successful","props":{"label":"Label","description":"Successful","variant":"successful","options":[{"value":"Option 1"},{"value":"Option 2"}]}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label","description":"Default","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With value","props":{"label":"Label","description":"With value","value":"Option 2","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Disabled","props":{"label":"Label","description":"Disabled","disabled":true,"options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Disabled + value","props":{"label":"Label","description":"Disabled + value","disabled":true,"value":"Option 2","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"Optgroup","props":{"label":"Label","description":"Optgroup","options":[{"value":"Optgroup 1","options":[{"value":"Option 1"},{"value":"Option 2"}]},{"value":"Option 2"}]}}]},{"name":"Content","examples":[{"name":"Default","props":{"label":"Label","description":"Default","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With Icon","props":{"label":"Label","description":"With Icon","icon":"edit","options":[{"value":"Option 1"},{"value":"Option 2"}]}},{"name":"With Icon + Variant","props":{"label":"Label","description":"With Icon + Variant","icon":"edit","variant":"successful","options":[{"value":"Option 1"},{"value":"Option 2"}]}}]}]'),u=n(75549);let c=e=>{let{children:a,label:n,variant:t,options:l,icon:o,description:p,disabled:r,value:u}=e;return(0,i.jsx)(s.kr,{label:n,variant:t,options:l,disabled:r,icon:o,value:u,description:p,children:a})};var d=()=>(0,i.jsx)(p.Z,{title:"DBSelect",variants:(0,u.P)(r,c,[(0,i.jsx)(t.default,{}),(0,i.jsx)(l.default,{}),(0,i.jsx)(o.default,{})])})}},function(e){e.O(0,[4996,203,9477,8132,286,6509,5527,9774,2888,179],function(){return e(e.s=96148)}),_N_E=e.O()}]);