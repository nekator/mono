(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27589],{64148:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover/overview",function(){return t(20020)}])},37395:function(e,o,t){"use strict";t.d(o,{P:function(){return n}});let n=(e,o,t)=>e.map((e,n)=>{var p;return{...e,slotCode:null!==(p=null==t?void 0:t.at(n))&&void 0!==p?p:"No code available",examples:e.examples.map(e=>{var t,n,p,a;return{...e,example:o({...e.props,id:null!==(p=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==p?p:e.name,children:null!==(a=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==a?a:e.name})}})}})},99341:function(e,o,t){"use strict";var n=t(52322),p=t(5632),a=t(2784),r=t(23075),s=t(8674);let i=e=>{let{examples:o,slotCode:t}=e;return(0,n.jsx)(s.wq,{className:"variants-card",slotCode:t,children:(0,n.jsx)("div",{className:"variants-list",children:o.map((e,o)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(o)))})})};o.Z=e=>{let{title:o,variants:t}=e,[l,d]=(0,a.useState)(),c=(0,p.useRouter)();(0,a.useEffect)(()=>{if(c.query){var e;let o=null===(e=c.query.page)||void 0===e?void 0:e.toString();o&&d(t.find(e=>e.name.toLowerCase()===o))}},[c]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)("div",{children:(0,n.jsx)(i,{...l})}),!l&&(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:o}),null==t?void 0:t.map((e,o)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(s.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(s.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,n.jsx)(i,{...e})]},"".concat(e.name,"-").concat(o)))]})})]})}},20020:function(e,o,t){"use strict";t.r(o);var n=t(52322),p=t(22440),a=t(24475),r=t(62275),s=t(69223),i=t(45712),l=t(44891),d=t(8674),c=t(99341),m=t(69780),v=t(37395);let u=e=>{let{id:o,children:t,width:p,gap:a,spacing:r,placement:s,delay:i,content:l,animation:c}=e;return(0,n.jsxs)(d.Y1,{describedbyid:o,children:[t,(0,n.jsx)(d.Ys,{width:p,gap:a,spacing:r,placement:s,animation:c,delay:i,id:o,children:l})]})};o.default=()=>(0,n.jsx)(c.Z,{title:"DBPopover",variants:(0,v.P)(m,u,[(0,n.jsx)(p.default,{}),(0,n.jsx)(a.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(l.default,{})])})},69780:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"content":"Popover","id":"popover-01"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"content":"Popover","id":"popover-02"}},{"name":"expressive","className":"db-ui-expressive","props":{"content":"Popover","id":"popover-03"}}]},{"name":"Spacing","examples":[{"name":"Small (Default)","props":{"content":"Popover","spacing":"small","id":"popover-04"}},{"name":"Medium","props":{"content":"Popover","spacing":"medium","id":"popover-05"}},{"name":"None","props":{"content":"Popover","spacing":"none","id":"popover-06"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"content":"Popover","placement":"bottom-start","id":"popover-07-start"}},{"name":"bottom (Default)","props":{"content":"Popover","placement":"bottom","id":"popover-07"}},{"name":"bottom-end","props":{"content":"Popover","placement":"bottom-end","id":"popover-07-end"}},{"name":"left-start","props":{"content":"Popover","placement":"left-start","id":"popover-09-start"}},{"name":"left","props":{"content":"Popover","placement":"left","id":"popover-09"}},{"name":"left-end","props":{"content":"Popover","placement":"left-end","id":"popover-09-end"}},{"name":"right-start","props":{"content":"Popover","placement":"right-start","id":"popover-10-start"}},{"name":"right","props":{"content":"Popover","placement":"right","id":"popover-10"}},{"name":"right-end","props":{"content":"Popover","placement":"right-end","id":"popover-10-end"}},{"name":"top-start","props":{"content":"Popover","placement":"top-start","id":"popover-08-start"}},{"name":"top","props":{"content":"Popover","placement":"top","id":"popover-08"}},{"name":"top-end","props":{"content":"Popover","placement":"top-end","id":"popover-08-end"}}]},{"name":"Gap","examples":[{"name":"No gap (Default)","props":{"content":"Popover","id":"popover-11"}},{"name":"With gap","props":{"content":"Popover","gap":true,"id":"popover-12"}}]},{"name":"Animations","examples":[{"name":"Animation no delay (Default)","props":{"content":"Popover","id":"popover-13"}},{"name":"Delay slow","props":{"content":"Popover","delay":"slow","id":"popover-14"}},{"name":"Delay fast","props":{"content":"Popover","delay":"fast","id":"popover-15"}},{"name":"No animation","props":{"content":"Popover","animation":"disabled","id":"popover-16"}}]},{"name":"Width","examples":[{"name":"Auto (Default)","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"popover-17"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"popover-18"}}]}]')}},function(e){e.O(0,[64996,64037,23075,62275,45712,24475,22440,44891,69223,92888,49774,40179],function(){return e(e.s=64148)}),_N_E=e.O()}]);