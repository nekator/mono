(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75190],{48314:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/overview",function(){return e(71721)}])},56311:function(a,n,e){"use strict";e.d(n,{P:function(){return i}});let i=(a,n,e)=>a.map((a,i)=>{var r;return{...a,slotCode:null!==(r=null==e?void 0:e.at(i))&&void 0!==r?r:"No code available",examples:a.examples.map(a=>{var e,i;return{...a,example:n({...a.props,id:null!==(e=a.props.id)&&void 0!==e?e:a.name,children:null!==(i=a.props.children)&&void 0!==i?i:a.name})}})}})},60955:function(a,n,e){"use strict";var i=e(52322),r=e(5632),s=e(2784),t=e(64508),l=e(88451);let c=a=>{let{examples:n,slotCode:e}=a;return(0,i.jsx)(l.wq,{className:"variants-card",slotCode:e,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((a,n)=>(0,i.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(n)))})})};n.Z=a=>{let{title:n,variants:e}=a,[o,p]=(0,s.useState)(),m=(0,r.useRouter)();(0,s.useEffect)(()=>{if(m.query){var a;let n=null===(a=m.query.page)||void 0===a?void 0:a.toString();n&&p(e.find(a=>a.name.toLowerCase()===n))}},[m]);let u=a=>{var n,e;if(window.location.origin&&(null===(e=window)||void 0===e?void 0:null===(n=e.location)||void 0===n?void 0:n.href)){let n=window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href;return"".concat(n,"?page=").concat(a.name.toLowerCase())}return""};return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...o})}),!o&&(0,i.jsx)(t.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==e?void 0:e.map((a,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:u(a),children:a.name})}),(0,i.jsx)(c,{...a})]},"".concat(a.name,"-").concat(n)))]})})]})}},71721:function(a,n,e){"use strict";e.r(n);var i=e(52322),r=e(8819),s=e(13971),t=e(78571),l=e(66042),c=e(88451),o=e(60955),p=e(1304),m=e(56311);let u=a=>{let{colorVariant:n,variant:e,children:r,spacing:s}=a;return(0,i.jsxs)(c.f,{colorVariant:n,variant:e,spacing:s,children:[(0,i.jsx)("strong",{children:r}),n&&(0,i.jsx)("span",{children:n})]})};n.default=()=>(0,i.jsx)(o.Z,{title:"DBCard",variants:(0,m.P)(p,u,[(0,i.jsx)(r.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(t.default,{}),(0,i.jsx)(l.default,{})])})},1304:function(a){"use strict";a.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"ColorVariant","examples":[{"name":"(Default) adaptive","props":{"variant":"interactive","spacing":"small","colorVariant":"adaptive"}},{"name":"neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"brand","props":{"colorVariant":"brand","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]')}},function(a){a.O(0,[64996,23019,88451,64508,13971,8819,78571,66042,49774,92888,40179],function(){return a(a.s=48314)}),_N_E=a.O()}]);