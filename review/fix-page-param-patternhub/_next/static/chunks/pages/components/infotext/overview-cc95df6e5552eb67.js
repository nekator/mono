(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32987],{41201:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext/overview",function(){return a(99486)}])},56311:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,i;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}})}})},60955:function(e,n,a){"use strict";var i=a(52322),t=a(5632),r=a(2784),s=a(64508),l=a(88451);let o=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,u]=(0,r.useState)(),d=(0,t.useRouter)();(0,r.useEffect)(()=>{if(d.query){var e;let n=null===(e=d.query.page)||void 0===e?void 0:e.toString();n&&u(a.find(e=>e.name.toLowerCase()===n))}},[d]);let p=e=>{var n,a;if(window.location.origin&&(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href)){let n=window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href;return"".concat(n,"?page=").concat(e.name.toLowerCase())}return""};return(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)("div",{children:(0,i.jsx)(o,{...c})}),!c&&(0,i.jsx)(s.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,i.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},99486:function(e,n,a){"use strict";a.r(n);var i=a(52322),t=a(67677),r=a(58232),s=a(29663),l=a(88451),o=a(60955),c=a(6514),u=a(56311);let d=e=>{let{variant:n,size:a,icon:t,children:r}=e;return(0,i.jsx)(l.EZ,{variant:n,size:a,icon:t,children:r})};n.default=()=>(0,i.jsx)(o.Z,{title:"DBInfotext",variants:(0,u.P)(c,d,[(0,i.jsx)(t.default,{}),(0,i.jsx)(r.default,{}),(0,i.jsx)(s.default,{})])})},6514:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,23019,88451,64508,58232,67677,29663,49774,92888,40179],function(){return e(e.s=41201)}),_N_E=e.O()}]);