(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2347],{99012:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/overview",function(){return n(96330)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return t}});let t=(e,a,n)=>{var t,r,o;return e.map((e,i)=>({...e,slotCode:null!==(t=null==n?void 0:n.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:null!==(o=e.props.children)&&void 0!==o?o:e.name})}))}))}},68623:function(e,a,n){"use strict";var t=n(52322),r=n(5632),o=n(2784),i=n(18338),s=n(6210);let l=e=>{let{examples:a,slotCode:n}=e;return(0,t.jsx)(s.wq,{className:"variants-card",slotCode:n,children:(0,t.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,u]=(0,o.useState)(),p=(0,r.useRouter)();(0,o.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[p]);let d=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(l,{...c})}),!c&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(s.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(s.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,t.jsx)(l,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},96330:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var t=n(52322),r=n(36186),o=n(30078),i=n(75270),s=n(90518),l=n(6210),c=n(68623),u=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"icon":"account","areaPopup":true}},{"name":"regular (Default)","className":"db-ui-regular","props":{"icon":"account","areaPopup":true}},{"name":"expressive","className":"db-ui-expressive","props":{"icon":"account","areaPopup":true}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"icon":"account","areaPopup":true}},{"name":"Active","props":{"active":true,"icon":"account","areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"icon":"account","areaPopup":true}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account","areaPopup":false}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","areaPopup":true}},{"name":"Text - Trailing Icon","props":{"areaPopup":true}},{"name":"Text","props":{"areaPopup":false}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"icon":"account","areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","icon":"account","areaPopup":true}}]}]'),p=n(75549);let d=e=>{let{children:a,icon:n,disabled:r,active:o,width:i,areaPopup:s}=e;return(0,t.jsx)(l.pK,{icon:n,disabled:r,active:o,width:i,areaPopup:s,onClick:()=>{alert(a.toString())},slotSubNavigation:s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test1"})}),(0,t.jsx)(l.pK,{children:(0,t.jsx)("a",{href:"#",children:"Test2"})})]}),children:s?a:(0,t.jsx)("a",{href:"#",children:a})})};var m=()=>(0,t.jsx)(c.Z,{title:"DBNavigationItem",variants:(0,p.P)(u,d,[(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(s.default,{})])})}},function(e){e.O(0,[4996,4375,8338,6210,3359,78,6186,518,9774,2888,179],function(){return e(e.s=99012)}),_N_E=e.O()}]);