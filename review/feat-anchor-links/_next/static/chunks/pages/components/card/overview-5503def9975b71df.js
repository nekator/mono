(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75190],{48314:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/overview",function(){return e(80269)}])},37395:function(a,n,e){"use strict";e.d(n,{P:function(){return i}});let i=(a,n,e)=>a.map((a,i)=>{var r;return{...a,slotCode:null!==(r=null==e?void 0:e.at(i))&&void 0!==r?r:"No code available",examples:a.examples.map(a=>{var e,i,r,s;return{...a,example:n({...a.props,id:null!==(r=null===(e=a.props)||void 0===e?void 0:e.id)&&void 0!==r?r:a.name,children:null!==(s=null===(i=a.props)||void 0===i?void 0:i.children)&&void 0!==s?s:a.name})}})}})},99341:function(a,n,e){"use strict";var i=e(52322),r=e(5632),s=e(2784),l=e(25942),t=e(8674);let c=a=>{let{examples:n,slotCode:e}=a;return(0,i.jsx)(t.wq,{className:"variants-card",slotCode:e,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((a,n)=>(0,i.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(n)))})})};n.Z=a=>{let{title:n,variants:e}=a,[o,p]=(0,s.useState)(),m=(0,r.useRouter)();(0,s.useEffect)(()=>{if(m.query){var a;let n=null===(a=m.query.page)||void 0===a?void 0:a.toString();n&&p(e.find(a=>a.name.toLowerCase()===n))}},[m]);let u=a=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(a.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...o})}),!o&&(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==e?void 0:e.map((a,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(t.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(t.vB,{content:"external",target:"_blank",href:u(a),children:a.name})}),(0,i.jsx)(c,{...a})]},"".concat(a.name,"-").concat(n)))]})})]})}},80269:function(a,n,e){"use strict";e.r(n);var i=e(52322),r=e(8819),s=e(13971),l=e(78571),t=e(66042),c=e(8674),o=e(99341),p=e(1304),m=e(37395);let u=a=>{let{colorVariant:n,variant:e,children:r,spacing:s}=a;return(0,i.jsxs)(c.f,{colorVariant:n,variant:e,spacing:s,children:[(0,i.jsx)("strong",{children:r}),n&&(0,i.jsx)("span",{children:n})]})};n.default=()=>(0,i.jsx)(o.Z,{title:"DBCard",variants:(0,m.P)(p,u,[(0,i.jsx)(r.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(l.default,{}),(0,i.jsx)(t.default,{})])})},1304:function(a){"use strict";a.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) adaptive","props":{"variant":"interactive","spacing":"small","colorVariant":"adaptive"}},{"name":"neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"brand","props":{"colorVariant":"brand","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]')}},function(a){a.O(0,[64996,10478,25942,13971,8819,78571,66042,92888,49774,40179],function(){return a(a.s=48314)}),_N_E=a.O()}]);