(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70832],{69599:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/notification",function(){return n(48471)}])},37395:function(e,a,n){"use strict";n.d(a,{P:function(){return i}});let i=(e,a,n)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==n?void 0:n.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var n,i,t,l;return{...e,example:a({...e.props,id:null!==(t=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==t?t:e.name,children:null!==(l=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,a,n){"use strict";var i=n(52322),t=n(5632),l=n(2784),o=n(23075),r=n(23149);let s=e=>{let{examples:a,slotCode:n}=e;return(0,i.jsx)(r.wq,{className:"variants-card",slotCode:n,children:(0,i.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:n}=e,[p,d]=(0,l.useState)(),m=(0,t.useRouter)();(0,l.useEffect)(()=>{if(m.query){var e;let a=null===(e=m.query.page)||void 0===e?void 0:e.toString();a&&d(n.find(e=>e.name.toLowerCase()===a))}},[m]);let c=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)("div",{children:(0,i.jsx)(s,{...p})}),!p&&(0,i.jsx)(o.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(r.vB,{content:"external",target:"_blank",href:c(e),children:e.name})}),(0,i.jsx)(s,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},48471:function(e,a,n){"use strict";n.r(a);var i=n(52322),t=n(77677),l=n(27798),o=n(78362),r=n(90046),s=n(94891),p=n(28150),d=n(58412),m=n(23149),c=n(99341),h=n(79587),x=n(37395);let u=e=>{let{semantic:a,icon:n,headline:t,variant:l,children:o,behaviour:r,link:s,timestamp:p,linkVariant:d,img:c}=e;return(0,i.jsx)(m.gt,{semantic:a,icon:n,headline:t,slotLink:s?(0,i.jsx)(m.vB,{href:"#",children:"Textlink"}):void 0,slotImage:c?(0,i.jsx)("img",{src:"".concat("/mono/version/v0.0.66-palette","/assets/images/placeholder.png"),alt:"Placeholder"}):void 0,variant:l,behaviour:r,linkVariant:d,timestamp:p,onClose:()=>{alert(o.toString())},children:o})};a.default=()=>(0,i.jsx)(c.Z,{title:"DBNotification",variants:(0,x.P)(h,u,[(0,i.jsx)(t.default,{}),(0,i.jsx)(l.default,{}),(0,i.jsx)(o.default,{}),(0,i.jsx)(r.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(p.default,{}),(0,i.jsx)(d.default,{})])})},79587:function(e){"use strict";e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-density-functional","props":{"headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-density-regular","props":{"headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"expressive","style":{"width":"300px"},"className":"db-density-expressive","props":{"headline":"Headline","icon":"information","behaviour":"closable"}}]},{"name":"Variant","examples":[{"name":"(Default) Docked","style":{"width":"300px"},"props":{"variant":"docked","headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"Standalone","style":{"width":"300px"},"props":{"variant":"standalone","headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"Overlay","style":{"width":"300px"},"props":{"variant":"overlay","headline":"Headline","icon":"information","behaviour":"closable","timestamp":"10 min ago"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","behaviour":"closable"}},{"name":"Neutral","style":{"width":"300px"},"props":{"type":"alert","semantic":"neutral","headline":"Headline","behaviour":"closable"}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","semantic":"critical","headline":"Headline","behaviour":"closable"}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","semantic":"informational","headline":"Headline","behaviour":"closable"}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","semantic":"successful","headline":"Headline","behaviour":"closable"}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","semantic":"warning","headline":"Headline","behaviour":"closable"}}]},{"name":"Behaviour","examples":[{"name":"(Default) Permanent","style":{"width":"300px"},"props":{}},{"name":"Closeable","style":{"width":"300px"},"props":{"behaviour":"closable"}}]},{"name":"Content - Variant:Docked","examples":[{"name":"Text","style":{"width":"300px"},"props":{"behaviour":"permanent"}},{"name":"Text & Icon","style":{"width":"300px"},"props":{"icon":"information","behaviour":"permanent"}},{"name":"Text & Preview Image","style":{"width":"300px"},"props":{"img":true,"behaviour":"permanent"}},{"name":"Text & Headline","style":{"width":"300px"},"props":{"headline":"Headline","behaviour":"permanent"}},{"name":"Text & Textlink Block","style":{"width":"300px"},"props":{"link":true,"behaviour":"permanent"}},{"name":"Text & Textlink Inline","style":{"width":"300px"},"props":{"link":true,"linkVariant":"inline","behaviour":"permanent"}},{"name":"Text & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"headline":"Headline","link":true,"linkVariant":"inline"}},{"name":"Text & Icon & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"icon":"information","headline":"Headline","link":true,"linkVariant":"inline"}}]},{"name":"Content - Variant:Standalone","examples":[{"name":"Text","style":{"width":"300px"},"props":{"variant":"standalone","behaviour":"permanent"}},{"name":"Text & Icon","style":{"width":"300px"},"props":{"icon":"information","variant":"standalone","behaviour":"permanent"}},{"name":"Text & Preview Image","style":{"width":"300px"},"props":{"img":true,"variant":"standalone","behaviour":"permanent"}},{"name":"Text & Headline","style":{"width":"300px"},"props":{"headline":"Headline","variant":"standalone","behaviour":"permanent"}},{"name":"Text & Textlink Block","style":{"width":"300px"},"props":{"link":true,"variant":"standalone","behaviour":"permanent"}},{"name":"Text & Textlink Inline","style":{"width":"300px"},"props":{"link":true,"linkVariant":"inline","variant":"standalone","behaviour":"permanent"}},{"name":"Text & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"headline":"Headline","link":true,"linkVariant":"inline","variant":"standalone"}},{"name":"Text & Icon & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"icon":"information","headline":"Headline","link":true,"linkVariant":"inline","variant":"standalone"}}]},{"name":"Content - Variant:Overlay","examples":[{"name":"Text","style":{"width":"300px"},"props":{"variant":"overlay","behaviour":"permanent"}},{"name":"Text & Icon","style":{"width":"300px"},"props":{"icon":"information","variant":"overlay","behaviour":"permanent"}},{"name":"Text & Preview Image","style":{"width":"300px"},"props":{"img":true,"variant":"overlay","behaviour":"permanent"}},{"name":"Text & Headline","style":{"width":"300px"},"props":{"headline":"Headline","variant":"overlay","behaviour":"permanent"}},{"name":"Text & Timed","style":{"width":"300px"},"props":{"timestamp":"10 min ago","variant":"overlay","behaviour":"permanent"}},{"name":"Text & Timed & Cloaseable","style":{"width":"300px"},"props":{"timestamp":"10 min ago","variant":"overlay"}},{"name":"Text & Headline & Timed & Cloaseable","style":{"width":"300px"},"props":{"headline":"Headline","timestamp":"10 min ago","variant":"overlay"}},{"name":"Text & Icon & Headline & Timed & Cloaseable","style":{"width":"300px"},"props":{"icon":"information","headline":"Headline","timestamp":"10 min ago","variant":"overlay"}}]}]')}},function(e){e.O(0,[64996,64037,23075,78362,28150,58412,27798,94891,77677,90046,92888,49774,40179],function(){return e(e.s=69599)}),_N_E=e.O()}]);