(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29688],{44365:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert",function(){return t(31432)}])},37395:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var i;return{...e,slotCode:null!==(i=null==t?void 0:t.at(a))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var t,a,i,l;return{...e,example:n({...e.props,id:null!==(i=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==i?i:e.name,children:null!==(l=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,n,t){"use strict";var a=t(52322),i=t(5632),l=t(2784),r=t(23075),s=t(86095);let d=e=>{let{examples:n,slotCode:t}=e,[i,r]=(0,l.useState)();return(0,a.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))}),(0,a.jsxs)("details",{className:"code-details",onToggle:()=>{r(!i)},children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:i?"Hide code":"Show code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:t})]})]})};n.Z=e=>{let{title:n,variants:t}=e,[o,p]=(0,l.useState)(),c=(0,i.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let n=null===(e=c.query.page)||void 0===e?void 0:e.toString();n&&p(t.find(e=>e.name.toLowerCase()===n))}},[c]);let h=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("div",{children:(0,a.jsx)(d,{...o})}),!o&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,a.jsx)(d,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},31432:function(e,n,t){"use strict";t.r(n);var a=t(52322),i=t(25644),l=t(73095),r=t(34316),s=t(60893),d=t(84123),o=t(86095),p=t(99341),c=t(86600),h=t(37395);let u=e=>{let{variant:n,icon:t,headline:i,link:l,type:r,children:s,behaviour:d}=e;return(0,a.jsx)(o.H3,{variant:n,icon:t,headline:i,link:l,type:r,behaviour:d,onClick:()=>{alert(s.toString())},children:s})};n.default=()=>(0,a.jsx)(p.Z,{title:"DBAlert",variants:(0,h.P)(c,u,[(0,a.jsx)(i.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(r.default,{}),(0,a.jsx)(s.default,{}),(0,a.jsx)(d.default,{})])})},86600:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-ui-functional","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-ui-regular","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"expressive","style":{"width":"300px"},"className":"db-ui-expressive","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Type","examples":[{"name":"(Default) Alert","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Inline","style":{"width":"300px"},"props":{"type":"inline","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Neutral","style":{"width":"300px"},"props":{"type":"alert","variant":"neutral","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","variant":"critical","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","variant":"informational","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","variant":"successful","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","variant":"warning","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Content","examples":[{"name":"Headline & Text & Link & Icon","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Headline & Text & Link","style":{"width":"300px"},"props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Text & Link","style":{"width":"300px"},"props":{"link":{"href":"#","text":"Link"}}},{"name":"Text","style":{"width":"300px"},"props":{}}]},{"name":"Behaviour","examples":[{"name":"Closable","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"click":"()=>{alert(\\"click close button\\")}"}},{"name":"Permanent","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"behaviour":"permanent"}}]}]')}},function(e){e.O(0,[64996,64037,23075,34316,60893,25644,84123,73095,92888,49774,40179],function(){return e(e.s=44365)}),_N_E=e.O()}]);