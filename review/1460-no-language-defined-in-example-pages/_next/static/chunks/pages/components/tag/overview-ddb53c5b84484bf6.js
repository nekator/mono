(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5846],{10199:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/overview",function(){return n(7043)}])},75549:function(e,a,n){"use strict";n.d(a,{P:function(){return r}});let r=(e,a,n)=>{var r,t,i;return e.map((e,s)=>({...e,slotCode:null!==(r=null==n?void 0:n.at(s))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>({...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(i=e.props.children)&&void 0!==i?i:e.name})}))}))}},68623:function(e,a,n){"use strict";var r=n(52322),t=n(5632),i=n(2784),s=n(18338),o=n(6210);let l=e=>{let{examples:a,slotCode:n}=e;return(0,r.jsx)(o.wq,{className:"variants-card",slotCode:n,children:(0,r.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[c,u]=(0,i.useState)(),p=(0,t.useRouter)();(0,i.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();if(a){let e=n.find(e=>e.name.toLowerCase()===a);u(e)}}},[p]);let m=e=>{var a,n;return window.location.origin?"".concat(null===(n=window)||void 0===n?void 0:null===(a=n.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(l,{...c})}),!c&&(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(o.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(o.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,r.jsx)(l,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},7043:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return h}});var r=n(52322),t=n(51336),i=n(57559),s=n(32576),o=n(56388),l=n(44429),c=n(14183),u=n(97453),p=n(6210),m=n(68623),v=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive","props":{"behaviour":"interactive"}},{"name":"Interactive-unique 01","props":{"name":"interactive-unique","behaviour":"interactive-unique"}},{"name":"Interactive-unique 02","props":{"name":"interactive-unique","behaviour":"interactive-unique"}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"behaviour":"interactive"}},{"name":"Checked","props":{"behaviour":"interactive","checked":true}},{"name":"Disabled","props":{"behaviour":"interactive","checked":true,"disabled":true}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]}]'),d=n(75549);let f=e=>{let{variant:a,disabled:n,children:t,icon:i,overflow:s,checked:o,noText:l,behaviour:c,emphasis:u,label:m,removeButton:v,name:d}=e;return(0,r.jsx)(p.k8,{variant:a,disabled:n,icon:i,noText:l,behaviour:c,emphasis:u,checked:o,label:m,overflow:s,removeButton:v,name:d,onRemove:()=>{alert(t.toString())},children:t})};var h=()=>(0,r.jsx)(m.Z,{title:"DBTag",variants:(0,d.P)(v,f,[(0,r.jsx)(t.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(c.default,{}),(0,r.jsx)(u.default,{})])})}},function(e){e.O(0,[4996,4375,8338,6210,2576,6388,4429,4183,1336,7559,7453,9774,2888,179],function(){return e(e.s=10199)}),_N_E=e.O()}]);