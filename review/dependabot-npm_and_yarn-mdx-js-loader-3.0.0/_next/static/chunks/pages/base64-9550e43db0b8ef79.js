(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13962],{42798:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base64",function(){return e(94781)}])},60749:function(t,n,e){"use strict";var r=e(52322),a=e(2784),i=e(80724);let l=(0,a.forwardRef)(function(t,n){let[e,l]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{t.stylePath&&l(t.stylePath)},[]),(0,r.jsxs)("a",{ref:n,id:t.id,className:(0,i.yI)("db-link",t.className),href:t.href,title:t.title,target:t.target,rel:t.rel,role:t.role,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,hrefLang:t.hreflang,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:n=>{t.onClick&&t.onClick(n)},children:[e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:e})}):null,t.text?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{children:t.text})}):null,t.children]})});n.Z=l},76238:function(t,n,e){"use strict";var r,a,i,l,s,o,u;e.d(n,{$f:function(){return E},DM:function(){return T},D_:function(){return A},IY:function(){return c},Kn:function(){return f},SU:function(){return d},YP:function(){return N},ce:function(){return R},iw:function(){return r},r$:function(){return i}});let c="OVERWRITE_DEFAULT_ID",d="LABEL SHOULD BE SET",f="-message",A="-placeholder",N="Back",R="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let E=Object.entries(r).map(t=>{let[,n]=t;return n});(a||(a={})).PRIMARY="primary",(o=i||(i={})).BASE="base",o.BASE_STRONG="base-strong",o.BASE_TRANSPARENT_FULL="base-transparent-full",o.BASE_TRANSPARENT_SEMI="base-transparent-semi",o.NEUTRAL="neutral",o.NEUTRAL_STRONG="neutral-strong",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.BRAND="brand",o.BRAND_TRANSPARENT_FULL="brand-transparent-full",o.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING="warning",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let T=Object.entries(i).map(t=>{let[,n]=t;return n});Object.entries(a).map(t=>{let[,n]=t;return n}),(u=l||(l={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,n]=t;return n})},80724:function(t,n,e){"use strict";e.d(n,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var t,n;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(t,n)=>{let e=t.children;Object.values(e).forEach(t=>{t.setAttribute(n.key,n.value),t.children.length>0&&addAttributeToChildren(t,n)})},cls=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];let r="";return n.forEach((t,n)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let n in t)t[n]&&(r+="".concat(n," "))}}),r.trim()},getMessageIcon=(t,n)=>n||(t&&"adaptive"!==t?void 0:"none")},94781:function(t,n,e){"use strict";e.r(n);var r=e(52322),a=e(48834),i=e(2784),l=e(60749),s=e(76238);n.default=()=>{let[t,n]=(0,i.useState)(""),[e,o]=(0,i.useState)(""),[u,c]=(0,i.useState)(s.iw.REGULAR),[d,f]=(0,i.useState)(s.r$.NEUTRAL);return(0,i.useEffect)(()=>{o(new URL("iframe?color=".concat(d,"&tonality=").concat(u,"&components=").concat(t),window.location.href).toString())},[u,d,t]),(0,r.jsxs)("div",{className:"base-64-container",children:[(0,r.jsx)("textarea",{onChange:t=>{n(a.lW.from(t.target.value).toString("base64"))}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("select",{value:u,onChange:t=>{var n;c(null==t?void 0:null===(n=t.target)||void 0===n?void 0:n.value)},children:s.$f.map(t=>(0,r.jsx)("option",{value:t,children:t},"tonality-option-".concat(t)))}),(0,r.jsx)("select",{value:d,onChange:t=>{var n;f(null==t?void 0:null===(n=t.target)||void 0===n?void 0:n.value)},children:s.DM.map(t=>(0,r.jsx)("option",{value:t,children:t},"tonality-option-".concat(t)))})]}),(0,r.jsx)(l.Z,{href:e,target:"_blank",variant:"primary",content:"external",children:"Open IFrame"})]})}}},function(t){t.O(0,[48834,49774,92888,40179],function(){return t(t.s=42798)}),_N_E=t.O()}]);