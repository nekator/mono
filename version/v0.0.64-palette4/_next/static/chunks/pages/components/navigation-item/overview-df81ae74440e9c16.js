(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32347],{99012:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/overview",function(){return n(68436)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var r;return{...e,slotCode:null!==(r=null==n?void 0:n.at(t))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var n,t,r,s;return{...e,example:a({...e.props,id:null!==(r=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==r?r:e.name,children:null!==(s=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,a,n){"use strict";var t=n(52322),r=n(5632),s=n(2784),i=n(25942),l=n(23149);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[p,u]=(0,s.useState)(),c=(0,r.useRouter)();(0,s.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();a&&u(n.find(e=>e.name.toLowerCase()===a))}},[c]);let d=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[p&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...p})}),!p&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},68436:function(e,a,n){"use strict";n.r(a);var t=n(52322),r=n(33284),s=n(2189),i=n(24882),l=n(16592),o=n(23149),p=n(99341),u=n(89267),c=n(37395);let d=e=>{let{children:a,icon:n,disabled:r,active:s,width:i,areaPopup:l}=e;return(0,t.jsx)(o.pK,{icon:n,disabled:r,active:s,width:i,areaPopup:l,onClick:()=>{alert(a.toString())},slotSubNavigation:l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test1"})}),(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test2"})})]}),children:l?a:(0,t.jsx)("a",{href:"#",children:a})})};a.default=()=>(0,t.jsx)(p.Z,{title:"DBNavigationItem",variants:(0,c.P)(u,d,[(0,t.jsx)(r.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},89267:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{"areaPopup":true}},{"name":"regular (Default)","className":"db-density-regular","props":{"areaPopup":true}},{"name":"expressive","className":"db-density-expressive","props":{"areaPopup":true}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"areaPopup":true}},{"name":"Active","props":{"active":true,"areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"areaPopup":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account","areaPopup":false}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","areaPopup":true}},{"name":"Text - Trailing Icon","props":{"areaPopup":true}},{"name":"Text","props":{"areaPopup":false}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","areaPopup":true}}]}]')}},function(e){e.O(0,[64996,23019,23149,25942,24882,2189,33284,16592,92888,49774,40179],function(){return e(e.s=99012)}),_N_E=e.O()}]);