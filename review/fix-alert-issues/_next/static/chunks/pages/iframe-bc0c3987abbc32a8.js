(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4614],{359:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iframe",function(){return n(6147)}])},6889:function(e,t,n){"use strict";var r=n(2322),a=n(2784),s=n(6510);let c=(0,a.forwardRef)(function(e,t){let[n,c]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,r.jsxs)("button",{ref:t,type:e.type,disabled:e.disabled,"aria-label":e.text,className:"db-button"+(e.className?" "+e.className:"")+(e.icon&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:t=>{e.onClick&&e.onClick(t)},children:[n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,r.jsx)(s.P,{icon:e.icon,icntxt:e.icntxt}),e.children]})});t.Z=c},648:function(e,t,n){"use strict";var r=n(2322),a=n(2784);let s=(0,a.forwardRef)(function(e,t){let[n,s]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,r.jsxs)("span",{"aria-hidden":"true",ref:t,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});t.Z=s},6510:function(e,t,n){"use strict";n.d(t,{P:function(){return r.Z}});var r=n(648)},816:function(e,t,n){"use strict";var r=n(2322),a=n(2784),s=n(6510),c=n(7233);let i=(0,a.forwardRef)(function(e,t){var n,i;let[l,o]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,r.jsxs)("span",{ref:t,className:"db-infotext"+(e.className?" "+e.className:""),title:e.title,"data-variant":e.variant,"data-size":e.size,children:[l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:l})}):null,"small"!==e.size?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.P,{icon:(n=e.icon,i=e.variant,n||c.I[i]||"info")})}):null,e.children]})});t.Z=i},7233:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});let r={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"}},6147:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(2322),a=n(8834),s=n(5632),c=n(2784),i=n(816),l=n(6889),o=n(648);let u=["marketingportal.extranet.deutschebahn.com"],d=e=>{let{type:t,content:n,index:a,props:s,className:c}=e,i=n instanceof Array?n.map((e,t)=>(0,r.jsx)(d,{index:"".concat(a,"-").concat(t),type:e.type,content:e.content,props:e.props,className:e.className},"innerComponent-".concat(a,"-").concat(t))):n;if("h1"===t)return(0,r.jsx)("h1",{className:c,children:i});if("h2"===t)return(0,r.jsx)("h2",{className:c,children:i});if("h3"===t)return(0,r.jsx)("h3",{className:c,children:i});if("h4"===t)return(0,r.jsx)("h4",{className:c,children:i});if("p"===t)return(0,r.jsx)("p",{className:c,children:i});if("flex"===t)return(0,r.jsx)("div",{className:"flex ".concat(c||""),"data-variant":(null==s?void 0:s.column)?"column":"row",children:i});if("a"===t)try{let e=new URL("",s.href),t=e.host;if(u.includes(t))return(0,r.jsx)("a",{className:c,href:s.href,target:s.target,children:i})}catch(e){console.error(e)}return"button"===t?(0,r.jsx)(l.Z,{className:c,...s,children:i}):"icon"===t?(0,r.jsx)(o.Z,{className:c,...s,children:i}):(0,r.jsx)("span",{className:c,children:i})},f=e=>{let{componentsString:t}=e,[n,a]=(0,c.useState)();return((0,c.useEffect)(()=>{try{a(JSON.parse(t))}catch(e){console.error(e)}},[t]),n&&n instanceof Array)?(0,r.jsx)(r.Fragment,{children:n.map((e,t)=>(0,r.jsx)(d,{index:t,type:e.type,content:e.content,props:e.props},"component-".concat(t)))}):(0,r.jsx)(i.Z,{variant:"critical",children:"Wrong format"})},h=()=>{var e,t,n;let c=(0,s.useRouter)(),i=null!==(e=c.query.tonality)&&void 0!==e?e:"regular",l=null!==(t=c.query.color)&&void 0!==t?t:"neutral-0",o=null!==(n=c.query.components)&&void 0!==n?n:"",u=a.lW.from(o,"base64"),d=u.toString("ascii");return(0,r.jsx)("div",{className:"iframe-component-container db-ui-".concat(i," db-bg-").concat(l),children:(0,r.jsx)(f,{componentsString:d})})};var m=h},5632:function(e,t,n){e.exports=n(6244)}},function(e){e.O(0,[8834,9774,2888,179],function(){return e(e.s=359)}),_N_E=e.O()}]);