(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{68346:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return t(50858)}])},43548:function(e,n,t){"use strict";var c=t(52322),l=t(2784),i=t(62540),a=t(17212),r=t(76238),o=t(80724);let d=(0,l.forwardRef)(function(e,n){var t;let[d,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,c.jsxs)("div",{ref:n,id:e.id,className:(0,o.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-elevation":e.elevation,children:[d?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:d})}):null,e.headline?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,c.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.v,{variant:"inline",className:"db-alert-link",href:e.link.href,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,hreflang:e.link.hreflang,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(t=e.closeButtonText)&&void 0!==t?t:r.ce})}):null]})});n.Z=d},42684:function(e,n,t){"use strict";var c=t(52322),l=t(2784),i=t(80724);let a=(0,l.forwardRef)(function(e,n){let[t,a]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,c.jsxs)("button",{id:e.id,ref:n,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=a},62540:function(e,n,t){"use strict";t.d(n,{Y:function(){return c.Z}});var c=t(42684)},17212:function(e,n,t){"use strict";t.d(n,{v:function(){return c.Z}});var c=t(60749)},60749:function(e,n,t){"use strict";var c=t(52322),l=t(2784),i=t(80724);let a=(0,l.forwardRef)(function(e,n){let[t,a]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,c.jsxs)("a",{ref:n,id:e.id,className:(0,i.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:t})}):null,e.text?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{children:e.text})}):null,e.children]})});n.Z=a},76238:function(e,n,t){"use strict";var c,l,i,a,r,o,d;t.d(n,{$f:function(){return j},DM:function(){return v},IY:function(){return s},Kn:function(){return h},SU:function(){return u},YP:function(){return x},ce:function(){return b},iw:function(){return c},r$:function(){return i}});let s="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="-message",x="Back",b="Close Button";(r=c||(c={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive";let j=Object.entries(c).map(e=>{let[,n]=e;return n});(l||(l={})).PRIMARY="primary",(o=i||(i={})).BASE="base",o.BASE_STRONG="base-strong",o.BASE_TRANSPARENT_FULL="base-transparent-full",o.BASE_TRANSPARENT_SEMI="base-transparent-semi",o.NEUTRAL="neutral",o.NEUTRAL_STRONG="neutral-strong",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.BRAND="brand",o.BRAND_TRANSPARENT_FULL="brand-transparent-full",o.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING="warning",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let v=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(l).map(e=>{let[,n]=e;return n}),(d=a||(a={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,n]=e;return n})},80724:function(e,n,t){"use strict";t.d(n,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&addAttributeToChildren(e,n)})},cls=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let c="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let n in e)e[n]&&(c+="".concat(n," "))}}),c.trim()},getMessageIcon=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")},50858:function(e,n,t){"use strict";t.r(n);var c=t(52322),l=t(82797),i=t(43548);n.default=()=>(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("h1",{children:" DBAlert Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"ariaLive:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{ariaLive:"polite",children:"Test"})]}),(0,c.jsx)("dt",{children:"ariaLive, behaviour, closeButtonId, closeButtonText, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{ariaLive:"polite",behaviour:"permanent",closeButtonId:"account",closeButtonText:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"behaviour, closeButtonId, closeButtonText, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{behaviour:"permanent",closeButtonId:"account",closeButtonText:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, headline, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, icon, id, key, link, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, icon, id, key, onClick, tabIndex, title, type, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",type:"inline",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, describedbyid, elevation, icon, id, key, onClick, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",describedbyid:"account",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, id, key, onClick, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, key, onClick, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"neutral",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, onClick, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",variant:"neutral",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, onClick, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),title:"account",variant:"neutral",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, onClick, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",icon:"account",onClick:e=>console.log(e),variant:"neutral",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, icon, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",icon:"account",variant:"neutral",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonId, elevation, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",elevation:"none",variant:"neutral",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonId, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",variant:"neutral",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonId:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonId:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"behaviour:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{behaviour:"permanent",children:"Test"})]}),(0,c.jsx)("dt",{children:"closeButtonText:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{closeButtonText:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"headline:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{headline:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"link:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account"},children:"Test"})]}),(0,c.jsx)("dt",{children:"type:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{type:"inline",children:"Test"})]}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"onClick:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{onClick:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"icon:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{icon:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"elevation:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{elevation:"none",children:"Test"})]}),(0,c.jsx)("dt",{children:"variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(i.Z,{variant:"neutral",children:"Test"})]})]})]})}},function(e){e.O(0,[4375,2797,9774,2888,179],function(){return e(e.s=68346)}),_N_E=e.O()}]);