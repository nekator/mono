(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13962],{42798:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base64",function(){return e(94781)}])},60749:function(t,n,e){"use strict";var r=e(52322),a=e(2784),i=e(80724);let l=(0,a.forwardRef)(function(t,n){let e=(0,a.useRef)(n),[l,s]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{t.stylePath&&s(t.stylePath)},[]),(0,r.jsxs)("a",{ref:e,...(0,i.mS)(t),id:t.id,className:(0,i.yI)("db-link",t.className),href:t.href,title:t.title,target:t.target,rel:t.rel,role:t.role,hrefLang:t.hreflang,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:n=>{t.onClick&&t.onClick(n)},children:[l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:l})}):null,t.text?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{children:t.text})}):null,t.children]})});n.Z=l},76238:function(t,n,e){"use strict";var r,a,i,l,s,u,o;e.d(n,{$f:function(){return E},DM:function(){return S},D_:function(){return A},IY:function(){return c},Kn:function(){return d},SU:function(){return f},YP:function(){return N},ce:function(){return R},iw:function(){return r},r$:function(){return i}});let c="OVERWRITE_DEFAULT_ID",f="LABEL SHOULD BE SET",d="-message",A="-placeholder",N="Back",R="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let E=Object.entries(r).map(t=>{let[,n]=t;return n});(a||(a={})).PRIMARY="primary",(u=i||(i={})).BASE="base",u.BASE_STRONG="base-strong",u.BASE_TRANSPARENT_SEMI="base-transparent-semi",u.BASE_TRANSPARENT_FULL="base-transparent-full",u.NEUTRAL="neutral",u.NEUTRAL_STRONG="neutral-strong",u.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",u.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",u.BRAND="brand",u.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",u.BRAND_TRANSPARENT_FULL="brand-transparent-full",u.SUCCESSFUL="successful",u.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",u.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",u.CRITICAL="critical",u.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",u.CRITICAL_TRANSPARENT_Full="critical-transparent-full",u.WARNING="warning",u.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",u.WARNING_TRANSPARENT_FULL="warning-transparent-full",u.INFORMATIONAL="informational",u.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",u.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full";let S=Object.entries(i).map(t=>{let[,n]=t;return n});Object.entries(a).map(t=>{let[,n]=t;return n}),(o=l||(l={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,n]=t;return n})},80724:function(t,n,e){"use strict";e.d(n,{Vj:function(){return r},mS:function(){return s},mT:function(){return l},yI:function(){return i},yn:function(){return a}});let r=()=>{var t,n;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(t,n)=>{let e=t.children;Object.values(e).forEach(t=>{t.setAttribute(n.key,n.value),t.children.length>0&&a(t,n)})},i=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];let r="";return n.forEach((t,n)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let n in t)t[n]&&(r+="".concat(n," "))}}),r.trim()},l=(t,n)=>n||(t&&"adaptive"!==t?void 0:"none"),s=t=>Object.keys(t).filter(t=>t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("on")).reduce((n,e)=>(n[e]=t[e],n),{})},94781:function(t,n,e){"use strict";e.r(n);var r=e(52322),a=e(48834),i=e(2784),l=e(60749),s=e(76238);n.default=()=>{let[t,n]=(0,i.useState)(""),[e,u]=(0,i.useState)(""),[o,c]=(0,i.useState)(s.iw.REGULAR),[f,d]=(0,i.useState)(s.r$.NEUTRAL);return(0,i.useEffect)(()=>{u(new URL("iframe?color=".concat(f,"&tonality=").concat(o,"&components=").concat(t),window.location.href).toString())},[o,f,t]),(0,r.jsxs)("div",{className:"base-64-container",children:[(0,r.jsx)("textarea",{onChange:t=>{n(a.lW.from(t.target.value).toString("base64"))}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("select",{value:o,onChange:t=>{var n;c(null==t?void 0:null===(n=t.target)||void 0===n?void 0:n.value)},children:s.$f.map(t=>(0,r.jsx)("option",{value:t,children:t},"tonality-option-".concat(t)))}),(0,r.jsx)("select",{value:f,onChange:t=>{var n;d(null==t?void 0:null===(n=t.target)||void 0===n?void 0:n.value)},children:s.DM.map(t=>(0,r.jsx)("option",{value:t,children:t},"tonality-option-".concat(t)))})]}),(0,r.jsx)(l.Z,{href:e,target:"_blank",variant:"primary",content:"external",children:"Open IFrame"})]})}}},function(t){t.O(0,[48834,49774,92888,40179],function(){return t(t.s=42798)}),_N_E=t.O()}]);