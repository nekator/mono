(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5190],{48314:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/overview",function(){return e(51037)}])},75549:function(a,n,e){"use strict";e.d(n,{P:function(){return r}});let r=(a,n,e)=>{var r,i,l;return a.map((a,s)=>({...a,slotCode:null!==(r=null==e?void 0:e.at(s))&&void 0!==r?r:"No code available",examples:a.examples.map(a=>({...a,example:n({...a.props,id:null!==(i=a.props.id)&&void 0!==i?i:a.name,children:null!==(l=a.props.children)&&void 0!==l?l:a.name})}))}))}},68623:function(a,n,e){"use strict";var r=e(52322),i=e(5632),l=e(2784),s=e(18338),t=e(74638);let c=a=>{let{examples:n,slotCode:e}=a;return(0,r.jsx)(t.wq,{className:"variants-card",slotCode:e,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((a,n)=>(0,r.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(n)))})})};n.Z=a=>{let{title:n,variants:e}=a,[o,p]=(0,l.useState)(),m=(0,i.useRouter)();(0,l.useEffect)(()=>{if(m.query){var a;let n=null===(a=m.query.page)||void 0===a?void 0:a.toString();if(n){let a=e.find(a=>a.name.toLowerCase()===n);p(a)}}},[m]);let u=a=>{var n,e;return window.location.origin?"".concat(null===(e=window)||void 0===e?void 0:null===(n=e.location)||void 0===n?void 0:n.href,"?page=").concat(a.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)("div",{children:(0,r.jsx)(c,{...o})}),!o&&(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==e?void 0:e.map((a,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(t.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(t.vB,{content:"external",target:"_blank",href:u(a),children:a.name})}),(0,r.jsx)(c,{...a})]},"".concat(a.name,"-").concat(n)))]})})]})}},51037:function(a,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var r=e(52322),i=e(6448),l=e(59983),s=e(83672),t=e(78051),c=e(74638),o=e(68623),p=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"neutral-strong","props":{"colorVariant":"neutral-strong","variant":"interactive","spacing":"small"}},{"name":"primary","props":{"colorVariant":"primary","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]'),m=e(75549);let u=a=>{let{colorVariant:n,variant:e,children:i,spacing:l}=a;return(0,r.jsxs)(c.f,{colorVariant:n,variant:e,spacing:l,children:[(0,r.jsx)("strong",{children:i}),n&&(0,r.jsx)("span",{children:n})]})};var d=()=>(0,r.jsx)(o.Z,{title:"DBCard",variants:(0,m.P)(p,u,[(0,r.jsx)(i.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(t.default,{})])})}},function(a){a.O(0,[4996,4375,8338,4638,9983,6448,3672,8051,9774,2888,179],function(){return a(a.s=48314)}),_N_E=a.O()}]);