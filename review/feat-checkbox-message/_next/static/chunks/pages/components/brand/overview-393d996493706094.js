(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18944],{61609:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/overview",function(){return a(77746)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return i}});let i=(e,n,a)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,i,t,s;return{...e,example:n({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(s=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,n,a){"use strict";var i=a(52322),t=a(5632),s=a(2784),l=a(23075),r=a(23149);let o=e=>{let{examples:n,slotCode:a}=e;return(0,i.jsx)(r.wq,{className:"variants-card",code:a,children:(0,i.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,d]=(0,s.useState)(),u=(0,t.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[u]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[c&&(0,i.jsx)("div",{children:(0,i.jsx)(o,{...c})}),!c&&(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,i.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},77746:function(e,n,a){"use strict";a.r(n);var i=a(52322),t=a(20767),s=a(23149),l=a(69255),r=a(37395),o=a(99341);let c=e=>{let{imgAlt:n,imgHeight:a,imgSrc:t,imgWidth:l,anchorChildren:r,anchorRef:o,anchorTitle:c,anchorRelation:d,hideDefaultAsset:u,children:m,className:p,describedbyid:h,id:v,key:x,tabIndex:f,title:g}=e;return(0,i.jsx)(s.mX,{imgAlt:n,imgHeight:a,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:l,anchorChildren:r,anchorRef:o,anchorTitle:c,anchorRelation:d,hideDefaultAsset:u,className:p,describedbyid:h,id:v,tabIndex:f,title:g,children:m},x)};n.default=()=>(0,i.jsx)(o.Z,{title:"DBBrand",variants:(0,r.P)(l,c,[(0,i.jsx)(t.default,{})])})},69255:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,64037,23075,20767,92888,49774,40179],function(){return e(e.s=61609)}),_N_E=e.O()}]);