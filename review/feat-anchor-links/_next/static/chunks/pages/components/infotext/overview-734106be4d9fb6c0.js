(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32987],{41201:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext/overview",function(){return n(10644)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var t;return{...e,slotCode:null!==(t=null==n?void 0:n.at(s))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var n,s;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(s=e.props.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,a,n){"use strict";var s=n(52322),t=n(5632),i=n(2784),r=n(25942),l=n(61624);let o=e=>{let{examples:a,slotCode:n}=e;return(0,s.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,u]=(0,i.useState)(),p=(0,t.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();a&&u(n.find(e=>e.name.toLowerCase()===a))}},[p]);let d=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)("div",{children:(0,s.jsx)(o,{...c})}),!c&&(0,s.jsx)(r.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(l.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(l.vB,{content:"external",target:"_blank",href:d(e),children:e.name})}),(0,s.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},10644:function(e,a,n){"use strict";n.r(a);var s=n(52322),t=n(67677),i=n(58232),r=n(29663),l=n(61624),o=n(99341),c=n(6514),u=n(37395);let p=e=>{let{variant:a,size:n,icon:t,children:i}=e;return(0,s.jsx)(l.EZ,{variant:a,size:n,icon:t,children:i})};a.default=()=>(0,s.jsx)(o.Z,{title:"DBInfotext",variants:(0,u.P)(c,p,[(0,s.jsx)(t.default,{}),(0,s.jsx)(i.default,{}),(0,s.jsx)(r.default,{})])})},6514:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]')}},function(e){e.O(0,[64996,10478,25942,58232,67677,29663,92888,49774,40179],function(){return e(e.s=41201)}),_N_E=e.O()}]);