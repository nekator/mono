(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30317],{25768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer",function(){return n(88173)}])},37395:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});let o=(e,t,n)=>e.map((e,o)=>{var a;return{...e,slotCode:null!==(a=null==n?void 0:n.at(o))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>{var n,o,a,s;return{...e,example:t({...e.props,id:null!==(a=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==a?a:e.name,children:null!==(s=null===(o=e.props)||void 0===o?void 0:o.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,t,n){"use strict";var o=n(52322),a=n(5632),s=n(2784),r=n(25942),l=n(8674);let i=e=>{let{examples:t,slotCode:n}=e;return(0,o.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,o.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,o.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[u,d]=(0,s.useState)(),p=(0,a.useRouter)();(0,s.useEffect)(()=>{if(p.query){var e;let t=null===(e=p.query.page)||void 0===e?void 0:e.toString();t&&d(n.find(e=>e.name.toLowerCase()===t))}},[p]);let c=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,o.jsxs)(o.Fragment,{children:[u&&(0,o.jsx)("div",{children:(0,o.jsx)(i,{...u})}),!u&&(0,o.jsx)(r.Z,{children:(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(l.oH,{}),(0,o.jsx)("h2",{children:(0,o.jsx)(l.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,o.jsx)(i,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},88173:function(e,t,n){"use strict";n.r(t);var o=n(52322),a=n(48754),s=n(8807),r=n(25027),l=n(82537),i=n(51189),u=n(54310),d=n(2784),p=n(8674),c=n(95067),m=n(99341),h=n(37395);let w=e=>{let{id:t,width:n,rounded:a,withCloseButton:s,spacing:r,openDrawer:l,setOpenDrawer:i,direction:u,children:d,backdrop:c}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)(p.TG,{withCloseButton:s,rounded:a,width:n,spacing:r,backdrop:c,direction:u,open:l===t,onClose:()=>{i(void 0)},children:d}),(0,o.jsxs)(p.Y1,{onClick:()=>{i(t)},children:["Open: ",d]})]})};t.default=()=>{let[e,t]=(0,d.useState)(void 0);return(0,o.jsx)(m.Z,{title:"DBDrawer",variants:(0,h.P)(c,n=>w({...n,openDrawer:e,setOpenDrawer:t}),[(0,o.jsx)(a.default,{}),(0,o.jsx)(s.default,{}),(0,o.jsx)(r.default,{}),(0,o.jsx)(l.default,{}),(0,o.jsx)(i.default,{}),(0,o.jsx)(u.default,{})])})}},95067:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Size","examples":[{"name":"With padding (Default)","props":{"withCloseButton":true}},{"name":"Full","props":{"withCloseButton":true,"width":"full"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true}},{"name":"Backdrop-weak","props":{"withCloseButton":true,"backdrop":"weak"}},{"name":"No Backdrop","props":{"withCloseButton":true,"backdrop":"none"}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"}}]}]')}},function(e){e.O(0,[64996,10478,25942,82537,54310,51189,48754,8807,25027,92888,49774,40179],function(){return e(e.s=25768)}),_N_E=e.O()}]);