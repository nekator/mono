(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84008],{56004:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand",function(){return a(88682)}])},37395:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>e.map((e,t)=>{var i;return{...e,slotCode:null!==(i=null==a?void 0:a.at(t))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var a,t,i,s;return{...e,example:n({...e.props,id:null!==(i=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==i?i:e.name,children:null!==(s=null===(t=e.props)||void 0===t?void 0:t.children)&&void 0!==s?s:e.name})}})}})},99341:function(e,n,a){"use strict";var t=a(52322),i=a(5632),s=a(2784),l=a(23075),r=a(23149);let o=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,d]=(0,s.useState)(),u=(0,i.useRouter)();(0,s.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[u]);let m=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(o,{...c})}),!c&&(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,t.jsx)(o,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},88682:function(e,n,a){"use strict";a.r(n);var t=a(52322),i=a(20767),s=a(23149),l=a(69255),r=a(37395),o=a(99341);let c=e=>{let{imgAlt:n,imgHeight:a,imgSrc:i,imgWidth:l,anchorChildren:r,anchorRef:o,anchorTitle:c,anchorRelation:d,hideDefaultAsset:u,children:m,className:h,describedbyid:p,id:v,key:x,stylePath:f,tabIndex:g,title:j}=e;return(0,t.jsx)(s.mX,{imgAlt:n,imgHeight:a,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:l,anchorChildren:r,anchorRef:o,anchorTitle:c,anchorRelation:d,hideDefaultAsset:u,className:h,describedbyid:p,id:v,stylePath:f,tabIndex:g,title:j,children:m},x)};n.default=()=>(0,t.jsx)(o.Z,{title:"DBBrand",variants:(0,r.P)(l,c,[(0,t.jsx)(i.default,{})])})},69255:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}},function(e){e.O(0,[64996,64037,23075,20767,92888,49774,40179],function(){return e(e.s=56004)}),_N_E=e.O()}]);