(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66572],{23745:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return n(78518)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return r}});let r=(e,a,n)=>e.map((e,r)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(r))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,r;return{...e,example:a({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(r=e.props.children)&&void 0!==r?r:e.name})}})}})},99341:function(e,a,n){"use strict";var r=n(52322),s=n(5632),t=n(2784),l=n(25942),i=n(61624);let o=e=>{let{examples:a,slotCode:n}=e;return(0,r.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,r.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,d]=(0,t.useState)(),u=(0,s.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&d(n.find(e=>e.name.toLowerCase()===a))}},[u]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(o,{...c})}),!c&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"default-container",children:[(0,r.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(i.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(i.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},78518:function(e,a,n){"use strict";n.r(a);var r=n(52322),s=n(90976),t=n(23756),l=n(57277),i=n(58629),o=n(84271),c=n(61624),d=n(99341),u=n(18965),p=n(37395);let m=e=>{let{href:a,variant:n,disabled:s,size:t,content:l,children:i}=e;return(0,r.jsx)(c.vB,{href:a,variant:n,disabled:s,size:t,content:l,children:i})};a.default=()=>(0,r.jsx)(d.Z,{title:"DBLink",variants:(0,p.P)(u,m,[(0,r.jsx)(s.default,{}),(0,r.jsx)(t.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{})])})},18965:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"href":"#"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"href":"#"}},{"name":"expressive","className":"db-ui-expressive","props":{"href":"#"}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"href":"#"}},{"name":"Primary","props":{"href":"#","variant":"primary"}}]},{"name":"State","examples":[{"name":"Default: (Enabled, Hover, Pressed)","props":{"href":"#"}},{"name":"Disabled","props":{"href":"#","disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"href":"#"}},{"name":"Small","props":{"href":"#","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Internal","props":{"href":"#"}},{"name":"External","props":{"href":"#","content":"external"}}]}]')}},function(e){e.O(0,[64996,10478,25942,90976,23756,58629,84271,57277,92888,49774,40179],function(){return e(e.s=23745)}),_N_E=e.O()}]);