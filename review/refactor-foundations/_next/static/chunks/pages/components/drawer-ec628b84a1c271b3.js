(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{25768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer",function(){return n(45135)}])},44496:function(e,t,n){"use strict";n.d(t,{P:function(){return getVariants}});let getVariants=(e,t,n)=>e.map((e,a)=>{var r;return{...e,slotCode:null!==(r=null==n?void 0:n.at(a))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var n,a;return{...e,example:t({...e.props,id:null!==(n=e.props.id)&&void 0!==n?n:e.name,children:null!==(a=e.props.children)&&void 0!==a?a:e.name})}})}})},2670:function(e,t,n){"use strict";var a=n(52322),r=n(5632),o=n(2784),s=n(2087),i=n(31346);let VariantList=e=>{let{examples:t,slotCode:n}=e;return(0,a.jsx)(i.wq,{className:"variants-card",slotCode:n,children:(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))})})};t.Z=e=>{let{title:t,variants:n}=e,[l,u]=(0,o.useState)(),d=(0,r.useRouter)();(0,o.useEffect)(()=>{if(d.query){var e;let t=null===(e=d.query.page)||void 0===e?void 0:e.toString();if(t){let e=n.find(e=>e.name.toLowerCase()===t);u(e)}}},[d]);let getHref=e=>{var t,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(t=n.location)||void 0===t?void 0:t.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)("div",{children:(0,a.jsx)(VariantList,{...l})}),!l&&(0,a.jsx)(s.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:t}),null==n?void 0:n.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(i.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(i.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,a.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(t)))]})})]})}},45135:function(e,t,n){"use strict";n.r(t);var a=n(52322),r=n(88454),o=n(21390),s=n(5292),i=n(91142),l=n(31940),u=n(67376),d=n(2784),p=n(31346),c=n(95067),m=n(2670),h=n(44496);let getDrawer=e=>{let{id:t,width:n,rounded:r,withCloseButton:o,spacing:s,openDrawer:i,setOpenDrawer:l,direction:u,children:d,backdrop:c}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(p.TG,{withCloseButton:o,rounded:r,width:n,spacing:s,backdrop:c,direction:u,open:i===t,onClose:()=>{l(void 0)},children:d}),(0,a.jsxs)(p.Y1,{onClick:()=>{l(t)},children:["Open: ",d]})]})};t.default=()=>{let[e,t]=(0,d.useState)(void 0);return(0,a.jsx)(m.Z,{title:"DBDrawer",variants:(0,h.P)(c,n=>getDrawer({...n,openDrawer:e,setOpenDrawer:t}),[(0,a.jsx)(r.default,{}),(0,a.jsx)(o.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(u.default,{})])})}},95067:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Size","examples":[{"name":"With padding (Default)","props":{"withCloseButton":true}},{"name":"Full","props":{"withCloseButton":true,"width":"full"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true}},{"name":"Backdrop-weak","props":{"withCloseButton":true,"backdrop":"weak"}},{"name":"No Backdrop","props":{"withCloseButton":true,"backdrop":"none"}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"}}]}]')}},function(e){e.O(0,[4996,4375,2087,1346,1142,7376,827,8454,1390,5292,9774,2888,179],function(){return e(e.s=25768)}),_N_E=e.O()}]);