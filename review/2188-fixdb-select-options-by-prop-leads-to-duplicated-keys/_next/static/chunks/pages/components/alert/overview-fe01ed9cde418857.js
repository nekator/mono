(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59251],{4111:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/overview",function(){return t(59725)}])},37395:function(e,n,t){"use strict";t.d(n,{P:function(){return i}});let i=(e,n,t)=>e.map((e,i)=>{var a;return{...e,slotCode:null!==(a=null==t?void 0:t.at(i))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>{var t,i,a,l;return{...e,example:n({...e.props,id:null!==(a=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==a?a:e.name,children:null!==(l=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,n,t){"use strict";var i=t(52322),a=t(5632),l=t(2784),r=t(25942),s=t(8674);let d=e=>{let{examples:n,slotCode:t}=e;return(0,i.jsx)(s.wq,{className:"variants-card",slotCode:t,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[o,p]=(0,l.useState)(),c=(0,a.useRouter)();(0,l.useEffect)(()=>{if(c.query){var e;let n=null===(e=c.query.page)||void 0===e?void 0:e.toString();n&&p(t.find(e=>e.name.toLowerCase()===n))}},[c]);let h=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("div",{children:(0,i.jsx)(d,{...o})}),!o&&(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(s.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(s.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,i.jsx)(d,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},59725:function(e,n,t){"use strict";t.r(n);var i=t(52322),a=t(25644),l=t(73095),r=t(34316),s=t(60893),d=t(84123),o=t(8674),p=t(99341),c=t(86600),h=t(37395);let x=e=>{let{variant:n,icon:t,headline:a,link:l,type:r,children:s,behaviour:d}=e;return(0,i.jsx)(o.H3,{variant:n,icon:t,headline:a,link:l,type:r,behaviour:d,onClick:()=>{alert(s.toString())},children:s})};n.default=()=>(0,i.jsx)(p.Z,{title:"DBAlert",variants:(0,h.P)(c,x,[(0,i.jsx)(a.default,{}),(0,i.jsx)(l.default,{}),(0,i.jsx)(r.default,{}),(0,i.jsx)(s.default,{}),(0,i.jsx)(d.default,{})])})},86600:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-ui-functional","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-ui-regular","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"expressive","style":{"width":"300px"},"className":"db-ui-expressive","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Type","examples":[{"name":"(Default) Alert","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Inline","style":{"width":"300px"},"props":{"type":"inline","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Neutral","style":{"width":"300px"},"props":{"type":"alert","variant":"neutral","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","variant":"critical","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","variant":"informational","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","variant":"successful","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","variant":"warning","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Content","examples":[{"name":"Headline & Text & Link & Icon","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Headline & Text & Link","style":{"width":"300px"},"props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Text & Link","style":{"width":"300px"},"props":{"link":{"href":"#","text":"Link"}}},{"name":"Text","style":{"width":"300px"},"props":{}}]},{"name":"Behaviour","examples":[{"name":"Closable","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"click":"()=>{alert(\\"click close button\\")}"}},{"name":"Permanent","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"behaviour":"permanent"}}]}]')}},function(e){e.O(0,[64996,23019,8674,25942,34316,60893,25644,84123,73095,92888,49774,40179],function(){return e(e.s=4111)}),_N_E=e.O()}]);