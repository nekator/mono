(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32347],{99012:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/overview",function(){return n(88812)}])},56311:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var r;return{...e,slotCode:null!==(r=null==n?void 0:n.at(t))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},60955:function(e,a,n){"use strict";var t=n(52322),r=n(5632),i=n(2784),s=n(64508),l=n(88451);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[u,p]=(0,i.useState)(),c=(0,r.useRouter)();(0,i.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();a&&p(n.find(e=>e.name.toLowerCase()===a))}},[c]);let d=e=>{var a,n;if(window.location.origin&&(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href)){let a=window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href;return"".concat(a,"?page=").concat(e.name.toLowerCase())}return""};return(0,t.jsxs)(t.Fragment,{children:[u&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...u})}),!u&&(0,t.jsx)(s.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},88812:function(e,a,n){"use strict";n.r(a);var t=n(52322),r=n(9803),i=n(2189),s=n(24882),l=n(16592),o=n(88451),u=n(60955),p=n(89267),c=n(56311);let d=e=>{let{children:a,icon:n,disabled:r,active:i,width:s,areaPopup:l}=e;return(0,t.jsx)(o.pK,{icon:n,disabled:r,active:i,width:s,areaPopup:l,onClick:()=>{alert(a.toString())},slotSubNavigation:l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test1"})}),(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test2"})})]}),children:l?a:(0,t.jsx)("a",{href:"#",children:a})})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBNavigationItem",variants:(0,c.P)(p,d,[(0,t.jsx)(r.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(l.default,{})])})},89267:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"areaPopup":true}},{"name":"regular (Default)","className":"db-ui-regular","props":{"areaPopup":true}},{"name":"expressive","className":"db-ui-expressive","props":{"areaPopup":true}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"areaPopup":true}},{"name":"Active","props":{"active":true,"areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"areaPopup":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account","areaPopup":false}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","areaPopup":true}},{"name":"Text - Trailing Icon","props":{"areaPopup":true}},{"name":"Text","props":{"areaPopup":false}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","areaPopup":true}}]}]')}},function(e){e.O(0,[64996,23019,88451,64508,24882,2189,9803,16592,49774,92888,40179],function(){return e(e.s=99012)}),_N_E=e.O()}]);