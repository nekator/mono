(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3962],{42798:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/base64",function(){return n(98015)}])},87224:function(t,e,n){"use strict";var r=n(52322),a=n(2784),i=n(7070);let l=(0,a.forwardRef)(function(t,e){let[n,l]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{t.stylePath&&l(t.stylePath)},[]),(0,r.jsxs)("a",{ref:e,className:(0,i.yI)("db-link",t.className),href:t.href,title:t.title,target:t.target,rel:t.rel,role:t.role,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,hrefLang:t.hreflang,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:e=>{t.onClick&&t.onClick(e)},children:[n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:n})}):null,t.text?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{children:t.text})}):null,t.children]})});e.Z=l},8490:function(t,e,n){"use strict";var r,a,i,l,c,s,u;n.d(e,{$f:function(){return N},DM:function(){return d},IY:function(){return o},SU:function(){return f},YP:function(){return R},ce:function(){return A},iw:function(){return r},r$:function(){return i}});let o="OVERWRITE_DEFAULT_ID",f="LABEL SHOULD BE SET",R="Back",A="Close Button";(c=r||(r={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive";let N=Object.entries(r).map(t=>{let[,e]=t;return e});(a||(a={})).PRIMARY="primary",(s=i||(i={})).NEUTRAL="neutral",s.NEUTRAL_STRONG="neutral-strong",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.PRIMARY="primary",s.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",s.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let d=Object.entries(i).map(t=>{let[,e]=t;return e});Object.entries(a).map(t=>{let[,e]=t;return e}),(u=l||(l={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,e]=t;return e})},7070:function(t,e,n){"use strict";n.d(e,{Vj:function(){return r},mT:function(){return l},yI:function(){return i},yn:function(){return a}});let r=()=>{var t;return null===(t=window.crypto)||void 0===t?void 0:t.randomUUID()},a=(t,e)=>{let n=t.children;Object.values(n).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&a(t,e)})},i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let r="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let e in t)t[e]&&(r+="".concat(e," "))}}),r.trim()},l=(t,e)=>t&&"adaptive"===t||e?e:"none"},98015:function(t,e,n){"use strict";n.r(e);var r=n(52322),a=n(48834),i=n(2784),l=n(87224),c=n(8490);e.default=()=>{let[t,e]=(0,i.useState)(""),[n,s]=(0,i.useState)(""),[u,o]=(0,i.useState)(c.iw.REGULAR),[f,R]=(0,i.useState)(c.r$.NEUTRAL);return(0,i.useEffect)(()=>{s(new URL("iframe?color=".concat(f,"&tonality=").concat(u,"&components=").concat(t),window.location.href).toString())},[u,f,t]),(0,r.jsxs)("div",{className:"base-64-container",children:[(0,r.jsx)("textarea",{onChange:t=>{e(a.lW.from(t.target.value).toString("base64"))}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("select",{value:u,onChange:t=>{var e;o(null==t?void 0:null===(e=t.target)||void 0===e?void 0:e.value)},children:c.$f.map(t=>(0,r.jsx)("option",{value:t,children:t},"tonality-option-".concat(t)))}),(0,r.jsx)("select",{value:f,onChange:t=>{var e;R(null==t?void 0:null===(e=t.target)||void 0===e?void 0:e.value)},children:c.DM.map(t=>(0,r.jsx)("option",{value:t,children:t},"tonality-option-".concat(t)))})]}),(0,r.jsx)(l.Z,{href:n,target:"_blank",variant:"primary",content:"external",children:"Open IFrame"})]})}}},function(t){t.O(0,[8834,9774,2888,179],function(){return t(t.s=42798)}),_N_E=t.O()}]);