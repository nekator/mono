(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47619],{29509:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item",function(){return a(70241)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>e.map((e,t)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(t))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,t,s,i;return{...e,example:n({...e.props,id:null!==(s=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==s?s:e.name,children:null!==(i=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,a){"use strict";var t=a(52322),s=a(5632),i=a(2784),l=a(23075),r=a(23149);let o=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",code:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,d]=(0,i.useState)(),p=(0,s.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let n=null===(e=p.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[p]);let u=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...c})}),!c&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:u(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},70241:function(e,n,a){"use strict";a.r(n);var t=a(52322),s=a(33284),i=a(2189),l=a(24882),r=a(16592),o=a(23149),c=a(99341),d=a(89267),p=a(37395);let u=e=>{let{children:n,icon:a,disabled:s,active:i,width:l,areaPopup:r}=e;return(0,t.jsx)(o.pK,{icon:a,disabled:s,active:i,width:l,areaPopup:r,onClick:()=>{alert(n.toString())},subNavigation:r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test1"})}),(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test2"})})]}),children:r?n:(0,t.jsx)("a",{href:"#",children:n})})};n.default=()=>(0,t.jsx)(c.Z,{title:"DBNavigationItem",variants:(0,p.P)(d,u,[(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(r.default,{})])})},89267:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{}},{"name":"Active","props":{"active":true}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account"}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account"}},{"name":"Text - Trailing Icon","props":{}},{"name":"Text","props":{}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full"}}]}]')}},function(e){e.O(0,[64996,64037,23075,24882,2189,33284,16592,92888,49774,40179],function(){return e(e.s=29509)}),_N_E=e.O()}]);