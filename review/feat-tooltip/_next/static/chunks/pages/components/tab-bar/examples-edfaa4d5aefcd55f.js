(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45558],{18275:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/examples",function(){return n(52893)}])},86735:function(e,t,n){"use strict";var r=n(52322),i=n(2784),s=n(45588),c=n(80724);let a=(0,i.forwardRef)(function(e,t){var n;let[a,d]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,r.jsxs)("div",{role:"tablist",ref:t,id:e.id,className:(0,c.yI)("cmp-tab-bar",e.className),children:[a?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:a})}):null,e.tabs?(0,r.jsx)(r.Fragment,{children:null===(n=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===n?void 0:n.map(e=>(0,r.jsx)(s.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});t.Z=a},45588:function(e,t,n){"use strict";n.d(t,{Q:function(){return r.Z}});var r=n(12126)},12126:function(e,t,n){"use strict";var r=n(52322),i=n(2784),s=n(76238),c=n(80724);let a=(0,i.forwardRef)(function(e,t){let n=(0,i.useRef)(null),[a,d]=(0,i.useState)(()=>s.IY),[l,u]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{if(d((0,c.Vj)()),e.stylePath&&u(e.stylePath),e.active){var t;null===(t=n.current)||void 0===t||t.click()}},[]),(0,r.jsxs)("div",{ref:t,id:e.id,className:(0,c.yI)("db-tab",e.className),children:[l?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:l})}):null,(0,r.jsx)("input",{type:"radio",ref:n,name:e.name,id:a}),(0,r.jsx)("label",{role:"tab",htmlFor:a,children:e.label}),(0,r.jsxs)("section",{role:"tabpanel",id:"content-"+a,children:[e.content?(0,r.jsx)(r.Fragment,{children:e.content}):null,e.children]})]})});t.Z=a},76238:function(e,t,n){"use strict";var r,i,s,c,a,d,l;n.d(t,{$f:function(){return b},DM:function(){return A},IY:function(){return u},Kn:function(){return h},SU:function(){return o},YP:function(){return f},ce:function(){return x},iw:function(){return r},r$:function(){return s}});let u="OVERWRITE_DEFAULT_ID",o="LABEL SHOULD BE SET",h="-message",f="Back",x="Close Button";(a=r||(r={})).FUNCTIONAL="functional",a.REGULAR="regular",a.EXPRESSIVE="expressive";let b=Object.entries(r).map(e=>{let[,t]=e;return t});(i||(i={})).PRIMARY="primary",(d=s||(s={})).BASE="base",d.BASE_STRONG="base-strong",d.BASE_TRANSPARENT_FULL="base-transparent-full",d.BASE_TRANSPARENT_SEMI="base-transparent-semi",d.NEUTRAL="neutral",d.NEUTRAL_STRONG="neutral-strong",d.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",d.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",d.BRAND="brand",d.BRAND_TRANSPARENT_FULL="brand-transparent-full",d.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",d.SUCCESSFUL="successful",d.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",d.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",d.CRITICAL="critical",d.CRITICAL_TRANSPARENT_Full="critical-transparent-full",d.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",d.WARNING="warning",d.WARNING_TRANSPARENT_FULL="warning-transparent-full",d.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",d.INFORMATIONAL="informational",d.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",d.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let A=Object.entries(s).map(e=>{let[,t]=e;return t});Object.entries(i).map(e=>{let[,t]=e;return t}),(l=c||(c={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,t]=e;return t})},80724:function(e,t,n){"use strict";n.d(t,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,t)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&addAttributeToChildren(e,t)})},cls=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let t in e)e[t]&&(r+="".concat(t," "))}}),r.trim()},getMessageIcon=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none")},52893:function(e,t,n){"use strict";n.r(t);var r=n(52322),i=n(82797),s=n(86735);t.default=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBTabBar Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"name:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{name:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, name, tabIndex, tabs, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{describedbyid:"account",id:"account",name:"account",tabIndex:100,tabs:"undefined",title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, tabs, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{describedbyid:"account",id:"account",tabIndex:100,tabs:"undefined",title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{tabIndex:100,title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"tabs:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{tabs:"undefined",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(s.Z,{tabIndex:100,children:"Test"})]})]})]})}},function(e){e.O(0,[84375,82797,49774,92888,40179],function(){return e(e.s=18275)}),_N_E=e.O()}]);