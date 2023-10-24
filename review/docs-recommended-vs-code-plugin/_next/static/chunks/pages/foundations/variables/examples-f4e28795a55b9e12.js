(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25649],{50885:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return n(53367)}])},42684:function(e,i,n){"use strict";var t=n(52322),a=n(2784),s=n(80724);let r=(0,a.forwardRef)(function(e,i){let[n,r]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,t.jsxs)("button",{id:e.id,ref:i,className:(0,s.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:i=>{e.onClick&&e.onClick(i)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});i.Z=r},62540:function(e,i,n){"use strict";n.d(i,{Y:function(){return t.Z}});var t=n(42684)},26213:function(e,i,n){"use strict";var t=n(52322),a=n(2784),s=n(80724);let r=(0,a.forwardRef)(function(e,i){let[n,r]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,t.jsxs)("div",{ref:i,id:e.id,className:(0,s.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:i=>{e.onClick&&e.onClick(i)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.imgSrc?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});i.Z=r},37252:function(e,i,n){"use strict";n.d(i,{f:function(){return t.Z}});var t=n(26213)},51897:function(e,i,n){"use strict";var t=n(52322),a=n(2784),s=n(80724);let r=(0,a.forwardRef)(function(e,i){let[n,r]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,t.jsxs)("span",{"aria-hidden":"true",ref:i,id:e.id,className:(0,s.yI)("db-icon",e.className),"data-icon":e.icon,title:e.title,children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});i.Z=r},18811:function(e,i,n){"use strict";n.d(i,{P:function(){return t.Z}});var t=n(51897)},70849:function(e,i,n){"use strict";n.d(i,{E:function(){return t.Z}});var t=n(71087)},71087:function(e,i,n){"use strict";var t=n(52322),a=n(2784),s=n(80724);let r=(0,a.forwardRef)(function(e,i){let[n,r]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,t.jsxs)("span",{ref:i,id:e.id,className:(0,s.yI)("db-infotext",e.className),title:e.title,"data-icon":e.icon,"data-variant":e.variant,"data-size":e.size,children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});i.Z=r},80724:function(e,i,n){"use strict";n.d(i,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,i;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(i=window.crypto)||void 0===i?void 0:i.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,i)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(i.key,i.value),e.children.length>0&&addAttributeToChildren(e,i)})},cls=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];let t="";return i.forEach((e,i)=>{if(e){if("string"==typeof e)t+="".concat(e," ");else for(let i in e)e[i]&&(t+="".concat(i," "))}}),t.trim()},getMessageIcon=(e,i)=>i||(e&&"adaptive"!==e?void 0:"none")},53367:function(e,i,n){"use strict";n.r(i);var t=n(52322),a=n(82797),s=n(70849),r=n(37252),l=n(18811),c=n(62540);i.default=()=>(0,t.jsxs)(a.Z,{children:[(0,t.jsx)("h1",{children:"Variable Examples"}),(0,t.jsx)("blockquote",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,t.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,t.jsx)("li",{children:"Don't use it like this in a real app. \uD83D\uDCA2For example `width: var(--db-spacing-fixed-md)`\uD83D\uDCA5"})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{children:e}),(0,t.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(i=>(0,t.jsxs)(r.f,{className:"example-item db-ui-".concat(i),spacing:"small",children:[(0,t.jsx)(s.E,{icon:"none",variant:"informational",children:i}),(0,t.jsxs)("div",{className:"example-".concat(e.toLowerCase().replace(/ /g,"-")),children:["Spacing fixed"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)(l.P,{icon:"account",children:"Account"}),(0,t.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,t.jsx)(l.P,{icon:"edit",children:"Edit"}),(0,t.jsx)("div",{className:"gap1",children:"xl"}),(0,t.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"margin1",children:"sm"}),(0,t.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,t.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,t.jsxs)("div",{children:[(0,t.jsx)(c.Y,{children:"height: sm"}),(0,t.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},function(e){e.O(0,[84375,82797,49774,92888,40179],function(){return e(e.s=50885)}),_N_E=e.O()}]);