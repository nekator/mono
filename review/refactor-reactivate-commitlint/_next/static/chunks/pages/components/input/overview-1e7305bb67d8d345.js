(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4325],{46286:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input/overview",function(){return l(54606)}])},75549:function(e,a,l){"use strict";l.d(a,{P:function(){return n}});let n=(e,a,l)=>{var n,t,r;return e.map((e,s)=>({...e,slotCode:null!==(n=null==l?void 0:l.at(s))&&void 0!==n?n:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(r=e.props.children)&&void 0!==r?r:e.name})}))}))}},68623:function(e,a,l){"use strict";var n=l(52322),t=l(5632),r=l(2784),s=l(18338),i=l(51963);let o=e=>{let{examples:a,slotCode:l}=e;return(0,n.jsx)(i.wq,{className:"variants-card",slotCode:l,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:l}=e,[p,c]=(0,r.useState)(),u=(0,t.useRouter)();(0,r.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(a){let e=l.find(e=>e.name.toLowerCase()===a);c(e)}}},[u]);let b=e=>{var a,l;return window.location.origin?"".concat(null===(l=window)||void 0===l?void 0:null===(a=l.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[p&&(0,n.jsx)("div",{children:(0,n.jsx)(o,{...p})}),!p&&(0,n.jsx)(s.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==l?void 0:l.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(i.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(i.vB,{content:"external",target:"_blank",href:b(e),children:e.name})}),(0,n.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},54606:function(e,a,l){"use strict";l.r(a);var n=l(52322),t=l(35675),r=l(87037),s=l(88331),i=l(57056),o=l(19470),p=l(51963),c=l(68623),u=l(71952),b=l(75549);let m=e=>{let{label:a,variant:l,value:t,type:r,minLength:s,required:i,disabled:o,iconAfter:c,icon:u,children:b}=e;return(0,n.jsx)(p.aq,{label:a,message:b,placeholder:b,variant:l,value:t,type:r,minLength:s,required:i,disabled:o,iconAfter:c,icon:u})};a.default=()=>(0,n.jsx)(c.Z,{title:"DBInput",variants:(0,b.P)(u,m,[(0,n.jsx)(t.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(o.default,{})])})},71952:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"label":"Label"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"label":"Label"}},{"name":"expressive","className":"db-ui-expressive","props":{"label":"Label"}}]},{"name":"Variant","examples":[{"name":"(Default) Basic","props":{"label":"Label","placeholder":"I am a placeholder"}},{"name":"Informational","props":{"label":"Label","variant":"informational"}},{"name":"Warning","props":{"label":"Label","variant":"warning"}},{"name":"Critical","props":{"label":"Label","variant":"critical"}},{"name":"Successful","props":{"label":"Label","variant":"successful"}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label"}},{"name":"Filled","props":{"label":"Label","value":"Input Text"}},{"name":"Filled Number","props":{"label":"Label","value":"123456","type":"number"}},{"name":"Invalid","props":{"label":"Label","required":true,"minLength":5}},{"name":"Disabled","props":{"label":"Label","disabled":true}},{"name":"Disabled filled","props":{"label":"Label","value":"Input Text","disabled":true}},{"name":"Required","props":{"label":"Label","value":"Input Text","required":true}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"Label"}},{"name":"Leading Icon + Text","props":{"label":"Label","icon":"account"}},{"name":"Leading Icon + Text + Trailing Icon","props":{"label":"Label","icon":"account","iconAfter":"edit"}},{"name":"Text + Trailing Icon","props":{"label":"Label","iconAfter":"edit"}},{"name":"Text + Trailing Icon + Variant:Successful","props":{"label":"Label","variant":"successful","iconAfter":"edit"}}]},{"name":"Types","examples":[{"name":"(Default) Text","props":{"label":"Label"}},{"name":"Password","props":{"label":"Label","type":"password"}},{"name":"Search","props":{"label":"Label","type":"search"}},{"name":"E-Mail","props":{"label":"Label","type":"email"}},{"name":"Number","props":{"label":"Label","type":"number"}},{"name":"Tel","props":{"label":"Label","type":"tel"}},{"name":"URL","props":{"label":"Label","type":"url"}},{"name":"Date","props":{"label":"Label","type":"date"}},{"name":"Datetime Local","props":{"label":"Label","type":"datetime-local"}},{"name":"Month","props":{"label":"Label","type":"month"}},{"name":"Time","props":{"label":"Label","type":"time"}},{"name":"Week","props":{"label":"Label","type":"week"}}]}]')}},function(e){e.O(0,[4996,4375,8338,1963,9470,8331,7056,7037,5675,9774,2888,179],function(){return e(e.s=46286)}),_N_E=e.O()}]);