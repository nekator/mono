(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30317],{25768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer",function(){return n(37883)}])},56311:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});let a=(e,t,n)=>e.map((e,a)=>{var o;return{...e,slotCode:null!==(o=null==n?void 0:n.at(a))&&void 0!==o?o:"No code available",examples:e.examples.map(e=>{var n,a;return{...e,example:t({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},60955:function(e,t,n){"use strict";var a=n(52322),o=n(5632),s=n(2784),r=n(64508),l=n(88451);let i=e=>{let{examples:t,slotCode:n}=e;return(0,a.jsx)(l.wq,{className:"variants-card",slotCode:n,children:(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[u,d]=(0,s.useState)(),p=(0,o.useRouter)();(0,s.useEffect)(()=>{if(p.query){var e;let t=null===(e=p.query.page)||void 0===e?void 0:e.toString();t&&d(n.find(e=>e.name.toLowerCase()===t))}},[p]);let c=e=>{var t,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)("div",{children:(0,a.jsx)(i,{...u})}),!u&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(l.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(l.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,a.jsx)(i,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},37883:function(e,t,n){"use strict";n.r(t);var a=n(52322),o=n(48754),s=n(8807),r=n(25027),l=n(82537),i=n(51189),u=n(54310),d=n(2784),p=n(88451),c=n(95067),m=n(60955),h=n(56311);let x=e=>{let{id:t,width:n,rounded:o,withCloseButton:s,spacing:r,openDrawer:l,setOpenDrawer:i,direction:u,children:d,backdrop:c}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(p.TG,{withCloseButton:s,rounded:o,width:n,spacing:r,backdrop:c,direction:u,open:l===t,onClose:()=>{i(void 0)},children:d}),(0,a.jsxs)(p.Y1,{onClick:()=>{i(t)},children:["Open: ",d]})]})};t.default=()=>{let[e,t]=(0,d.useState)(void 0);return(0,a.jsx)(m.Z,{title:"DBDrawer",variants:(0,h.P)(c,n=>x({...n,openDrawer:e,setOpenDrawer:t}),[(0,a.jsx)(o.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(u.default,{})])})}},95067:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Size","examples":[{"name":"With padding (Default)","props":{"withCloseButton":true}},{"name":"Full","props":{"withCloseButton":true,"width":"full"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true}},{"name":"Backdrop-weak","props":{"withCloseButton":true,"backdrop":"weak"}},{"name":"No Backdrop","props":{"withCloseButton":true,"backdrop":"none"}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"}}]}]')}},function(e){e.O(0,[64996,23019,88451,64508,82537,54310,51189,48754,8807,25027,49774,92888,40179],function(){return e(e.s=25768)}),_N_E=e.O()}]);