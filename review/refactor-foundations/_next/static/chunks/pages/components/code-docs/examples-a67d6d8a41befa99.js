(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6793],{74212:function(e,d,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-docs/examples",function(){return t(37790)}])},95139:function(e,d,t){"use strict";var n=t(52322),i=t(2784),c=t(36029);let s=(0,i.forwardRef)(function(e,d){let[t,s]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,n.jsxs)("div",{ref:d,id:e.id,className:(0,c.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:d=>{e.onClick&&e.onClick(d)},children:[t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});d.Z=s},72451:function(e,d,t){"use strict";t.d(d,{f:function(){return n.Z}});var n=t(95139)},18241:function(e,d,t){"use strict";var n=t(52322),i=t(2784),c=t(72451),s=t(36029);let l=(0,i.forwardRef)(function(e,d){var t,l;let[r,a]=(0,i.useState)(()=>!1),[o,h]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&h(e.stylePath)},[]),(0,n.jsxs)(c.f,{ref:d,className:(0,s.yI)("db-code-docs",e.className),children:[o?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:o})}):null,e.children,(0,n.jsxs)("details",{className:"code-details",onToggle:e=>void a(!r),children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:r?null!==(t=e.hideCodeLabel)&&void 0!==t?t:"Hide Code":null!==(l=e.showCodeLabel)&&void 0!==l?l:"Show Code"}),(0,n.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});d.Z=l},36029:function(e,d,t){"use strict";t.d(d,{Vj:function(){return n},mT:function(){return s},yI:function(){return c},yn:function(){return i}});let n=()=>{var e,d;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(d=window.crypto)||void 0===d?void 0:d.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,d)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(d.key,d.value),e.children.length>0&&i(e,d)})},c=function(){for(var e=arguments.length,d=Array(e),t=0;t<e;t++)d[t]=arguments[t];let n="";return d.forEach((e,d)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let d in e)e[d]&&(n+="".concat(d," "))}}),n.trim()},s=(e,d)=>d||(e&&"adaptive"!==e?void 0:"none")},37790:function(e,d,t){"use strict";t.r(d);var n=t(52322),i=t(2087),c=t(18241);d.default=()=>(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("h1",{children:" DBCodeDocs Examples "}),(0,n.jsxs)("dl",{className:"example-list",children:[(0,n.jsx)("dt",{children:"showCodeLabel:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{showCodeLabel:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"describedbyid, hideCodeLabel, id, key, showCodeLabel, slotCode, tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{describedbyid:"account",hideCodeLabel:"account",id:"account",showCodeLabel:"account",slotCode:(0,n.jsx)("div",{children:"slotCode"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"describedbyid, hideCodeLabel, id, key, slotCode, tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{describedbyid:"account",hideCodeLabel:"account",id:"account",slotCode:(0,n.jsx)("div",{children:"slotCode"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"describedbyid, id, key, slotCode, tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{describedbyid:"account",id:"account",slotCode:(0,n.jsx)("div",{children:"slotCode"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{tabIndex:100,title:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"tabIndex, title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{tabIndex:100,title:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{title:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"hideCodeLabel:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{hideCodeLabel:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"slotCode:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{slotCode:(0,n.jsx)("div",{children:"slotCode"}),children:"Test"})]}),(0,n.jsx)("dt",{children:"describedbyid:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{describedbyid:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"id:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{id:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"key:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"tabIndex:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(c.Z,{tabIndex:100,children:"Test"})]})]})]})}},function(e){e.O(0,[4375,2087,9774,2888,179],function(){return e(e.s=74212)}),_N_E=e.O()}]);