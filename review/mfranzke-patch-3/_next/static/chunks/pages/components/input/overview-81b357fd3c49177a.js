(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4325],{46286:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input/overview",function(){return n(53029)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return l}});let l=(e,a,n)=>{var l,i,t;return e.map((e,r)=>({...e,slotCode:null!==(l=null==n?void 0:n.at(r))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(i=e.props.id)&&void 0!==i?i:e.name,children:null!==(t=e.props.children)&&void 0!==t?t:e.name})}))}))}},68623:function(e,a,n){"use strict";var l=n(52322),i=n(5632),t=n(2784),r=n(18338),s=n(65107);let o=e=>{let{examples:a,slotCode:n}=e;return(0,l.jsx)(s.wq,{className:"variants-card",slotCode:n,children:(0,l.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,l.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,d]=(0,t.useState)(),u=(0,i.useRouter)();(0,t.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);d(e)}}},[u]);let p=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,l.jsxs)(l.Fragment,{children:[c&&(0,l.jsx)("div",{children:(0,l.jsx)(o,{...c})}),!c&&(0,l.jsx)(r.Z,{children:(0,l.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,l.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(s.oH,{}),(0,l.jsx)("h2",{children:(0,l.jsx)(s.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,l.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},53029:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return b}});var l=n(52322),i=n(35675),t=n(87037),r=n(88331),s=n(57056),o=n(65107),c=n(68623),d=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"label":"Label","description":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"label":"Label","description":"regular (Default)"}},{"name":"expressive","className":"db-ui-expressive","props":{"label":"Label","description":"expressive"}}]},{"name":"Variant","examples":[{"name":"(Default) Basic","props":{"label":"Label","description":"(Default) Basic"}},{"name":"Informational","props":{"label":"Label","description":"Informational","variant":"informational"}},{"name":"Warning","props":{"label":"Label","description":"Warning","variant":"warning"}},{"name":"Critical","props":{"label":"Label","description":"Critical","variant":"critical"}},{"name":"Successful","props":{"label":"Label","description":"Successful","variant":"successful"}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label","description":"Default"}},{"name":"Filled","props":{"label":"Label","value":"Input Text","description":"Filled"}},{"name":"Filled Number","props":{"label":"Label","value":"123456","type":"number","description":"Filled Number"}},{"name":"Invalid","props":{"label":"Label","description":"Invalid","required":true,"minLength":5}},{"name":"Disabled","props":{"label":"Label","disabled":true,"description":"Disabled"}},{"name":"Disabled with value","props":{"label":"Label","value":"Input Text","disabled":true,"description":"Disabled with value"}},{"name":"Required","props":{"label":"Label","value":"Input Text","disabled":true,"required":true,"description":"Required"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"Label","description":"(Default) Text"}},{"name":"Leading Icon + Text","props":{"label":"Label","icon":"account","description":"Leading Icon + Text"}},{"name":"Leading Icon + Text + Trailing Icon","props":{"label":"Label","icon":"account","iconAfter":"edit","description":"Leading Icon + Text + Trailing Icon"}},{"name":"Text + Trailing Icon","props":{"label":"Label","iconAfter":"edit","description":"Text + Trailing Icon"}},{"name":"Text + Trailing Icon + Variant:Successful","props":{"label":"Label","variant":"successful","iconAfter":"edit","description":"Text + Trailing Icon + Variant:Successful"}}]}]'),u=n(75549);let p=e=>{let{label:a,variant:n,value:i,type:t,minLength:r,required:s,disabled:c,iconAfter:d,icon:u,children:p}=e;return(0,l.jsx)(o.aq,{label:a,description:p,variant:n,value:i,type:t,minLength:r,required:s,disabled:c,iconAfter:d,icon:u})};var b=()=>(0,l.jsx)(c.Z,{title:"DBInput",variants:(0,u.P)(d,p,[(0,l.jsx)(i.default,{}),(0,l.jsx)(t.default,{}),(0,l.jsx)(r.default,{}),(0,l.jsx)(s.default,{})])})}},function(e){e.O(0,[4996,4375,8338,5107,8331,7056,7037,5675,9774,2888,179],function(){return e(e.s=46286)}),_N_E=e.O()}]);