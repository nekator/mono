(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13962],{42798:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base64",function(){return e(94781)}])},60749:function(n,t,e){"use strict";var r=e(52322),a=e(2784),i=e(80724);let l=(0,a.forwardRef)(function(n,t){let[e,l]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{n.stylePath&&l(n.stylePath)},[]),(0,r.jsxs)("a",{ref:t,id:n.id,className:(0,i.yI)("db-link",n.className),href:n.href,title:n.title,target:n.target,rel:n.rel,role:n.role,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:0,"aria-selected":n.selected,"aria-label":n.label,hrefLang:n.hreflang,"aria-current":n.current,"data-size":n.size,"data-variant":n.variant,"data-content":n.content||"internal",onClick:t=>{n.onClick&&n.onClick(t)},children:[e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:e})}):null,n.text?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{children:n.text})}):null,n.children]})});t.Z=l},76238:function(n,t,e){"use strict";var r,a,i,l,s,o,u;e.d(t,{$f:function(){return E},DM:function(){return S},D_:function(){return N},IY:function(){return c},Kn:function(){return A},SU:function(){return f},YP:function(){return d},ce:function(){return R},iw:function(){return r},r$:function(){return i}});let c="OVERWRITE_DEFAULT_ID",f="LABEL SHOULD BE SET",A="-message",N="-placeholder",d="Back",R="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let E=Object.entries(r).map(n=>{let[,t]=n;return t});(a||(a={})).PRIMARY="primary",(o=i||(i={})).BASE="base",o.BASE_STRONG="base-strong",o.BASE_TRANSPARENT_FULL="base-transparent-full",o.BASE_TRANSPARENT_SEMI="base-transparent-semi",o.NEUTRAL="neutral",o.NEUTRAL_STRONG="neutral-strong",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.BRAND="brand",o.BRAND_TRANSPARENT_FULL="brand-transparent-full",o.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING="warning",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let S=Object.entries(i).map(n=>{let[,t]=n;return t});Object.entries(a).map(n=>{let[,t]=n;return t}),(u=l||(l={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(l).map(n=>{let[,t]=n;return t})},80724:function(n,t,e){"use strict";e.d(t,{Vj:function(){return r},mT:function(){return l},yI:function(){return i},yn:function(){return a}});let r=()=>{var n,t;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(n,t)=>{let e=n.children;Object.values(e).forEach(n=>{n.setAttribute(t.key,t.value),n.children.length>0&&a(n,t)})},i=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];let r="";return t.forEach((n,t)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let t in n)n[t]&&(r+="".concat(t," "))}}),r.trim()},l=(n,t)=>t||(n&&"adaptive"!==n?void 0:"none")},94781:function(n,t,e){"use strict";e.r(t);var r=e(52322),a=e(48834),i=e(2784),l=e(60749),s=e(76238);t.default=()=>{let[n,t]=(0,i.useState)(""),[e,o]=(0,i.useState)(""),[u,c]=(0,i.useState)(s.iw.REGULAR),[f,A]=(0,i.useState)(s.r$.NEUTRAL);return(0,i.useEffect)(()=>{o(new URL("iframe?color=".concat(f,"&tonality=").concat(u,"&components=").concat(n),window.location.href).toString())},[u,f,n]),(0,r.jsxs)("div",{className:"base-64-container",children:[(0,r.jsx)("textarea",{onChange:n=>{t(a.lW.from(n.target.value).toString("base64"))}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("select",{value:u,onChange:n=>{var t;c(null==n?void 0:null===(t=n.target)||void 0===t?void 0:t.value)},children:s.$f.map(n=>(0,r.jsx)("option",{value:n,children:n},"tonality-option-".concat(n)))}),(0,r.jsx)("select",{value:f,onChange:n=>{var t;A(null==n?void 0:null===(t=n.target)||void 0===t?void 0:t.value)},children:s.DM.map(n=>(0,r.jsx)("option",{value:n,children:n},"tonality-option-".concat(n)))})]}),(0,r.jsx)(l.Z,{href:e,target:"_blank",variant:"primary",content:"external",children:"Open IFrame"})]})}}},function(n){n.O(0,[48834,49774,92888,40179],function(){return n(n.s=42798)}),_N_E=n.O()}]);