(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47619],{29509:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item",function(){return n(43542)}])},29712:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>e.map((e,t)=>{var r;return{...e,slotCode:null!==(r=null==n?void 0:n.at(t))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var n,t;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}})}})},1227:function(e,a,n){"use strict";var t=n(52322),r=n(5632),s=n(2784),i=n(66503),l=n(37426);let o=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[u,p]=(0,s.useState)(),c=(0,r.useRouter)();(0,s.useEffect)(()=>{if(c.query){var e;let a=null===(e=c.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);p(e)}}},[c]);let d=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[u&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...u})}),!u&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},43542:function(e,a,n){"use strict";n.r(a);var t=n(52322),r=n(9803),s=n(2189),i=n(24882),l=n(16592),o=n(37426),u=n(1227),p=n(89267),c=n(29712);let d=e=>{let{children:a,icon:n,disabled:r,active:s,width:i,areaPopup:l}=e;return(0,t.jsx)(o.pK,{icon:n,disabled:r,active:s,width:i,areaPopup:l,onClick:()=>{alert(a.toString())},slotSubNavigation:l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test1"})}),(0,t.jsx)(o.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test2"})})]}),children:l?a:(0,t.jsx)("a",{href:"#",children:a})})};a.default=()=>(0,t.jsx)(u.Z,{title:"DBNavigationItem",variants:(0,c.P)(p,d,[(0,t.jsx)(r.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{})])})},89267:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"areaPopup":true}},{"name":"regular (Default)","className":"db-ui-regular","props":{"areaPopup":true}},{"name":"expressive","className":"db-ui-expressive","props":{"areaPopup":true}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"areaPopup":true}},{"name":"Active","props":{"active":true,"areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"areaPopup":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account","areaPopup":false}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","areaPopup":true}},{"name":"Text - Trailing Icon","props":{"areaPopup":true}},{"name":"Text","props":{"areaPopup":false}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","areaPopup":true}}]}]')}},function(e){e.O(0,[64996,23019,37426,66503,24882,2189,9803,16592,49774,92888,40179],function(){return e(e.s=29509)}),_N_E=e.O()}]);