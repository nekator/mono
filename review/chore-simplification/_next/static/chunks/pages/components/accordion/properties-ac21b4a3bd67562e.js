(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73664],{90444:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion/properties",function(){return n(4889)}])},4889:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),i=n(45392),s=n(55216);let a=e=>{let{children:t}=e;return(0,r.jsx)(s.Z,{children:t})};function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbaccordion",children:"DBAccordion"}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Options"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"variant"}),(0,r.jsxs)(t.td,{children:["Defines the display of the accordion and the items:",(0,r.jsx)("br",{}),'"default": with a dividing line between the items',(0,r.jsx)("br",{}),'"card": w/o dividing line, but items are shown in the card variant']}),(0,r.jsx)(t.td,{children:"literal"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"'card'"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"behaviour"}),(0,r.jsx)(t.td,{children:"To allow multiple items open at the same time or only 1 item"}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"'multiple' | 'single'"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"initOpenIndex"}),(0,r.jsx)(t.td,{children:"The index of items which should be open when loading the accordion"}),(0,r.jsx)(t.td,{children:"Array"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"const array:number[] = []"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"items"}),(0,r.jsx)(t.td,{children:"Alternative to pass in a simple representation of accordion items"}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"DBAccordionItemDefaultProps |  | string"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onChange"}),(0,r.jsx)(t.td,{children:"Informs about the changes in the internal state, which item is open"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(openAccordionItemIds: string[]) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:"default slot"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"className"}),(0,r.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"describedbyid"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,r.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"React specific for render process."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]})]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})})}},10326:function(e,t,n){"use strict";var r=n(52322),i=n(2784),s=n(43251);let a=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,r.jsx)("button",{ref:n,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=a},55482:function(e,t,n){"use strict";var r,i,s,a,l,d,c;n.d(t,{IY:function(){return o},YP:function(){return u},ce:function(){return h}});let o="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(l=r||(r={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,t]=e;return t}),(i||(i={})).PRIMARY="primary",(d=s||(s={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",d.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",d.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",d.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",d.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",d.BRAND_BG_LEVEL_1="brand-bg-lvl-1",d.BRAND_BG_LEVEL_2="brand-bg-lvl-2",d.BRAND_BG_LEVEL_3="brand-bg-lvl-3",d.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",d.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",d.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",d.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",d.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",d.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",d.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",d.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",d.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",d.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",d.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",d.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",d.WARNING_BG_LEVEL_1="warning-bg-lvl-1",d.WARNING_BG_LEVEL_2="warning-bg-lvl-2",d.WARNING_BG_LEVEL_3="warning-bg-lvl-3",d.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",d.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",d.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",d.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",d.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",d.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",d.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(s).map(e=>{let[,t]=e;return t}),Object.entries(i).map(e=>{let[,t]=e;return t}),(c=a||(a={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return c},Vj:function(){return r},mS:function(){return l},yI:function(){return s},yn:function(){return i}});let r=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&i(e,t)})},s=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let t in e)e[t]&&(r+="".concat(t," "))}}),r.trim()},a=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||a.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),d=e=>{var t;let{top:n,bottom:r,left:i,right:s,height:a,width:l}=e.getBoundingClientRect(),{innerHeight:d,innerWidth:c}=window,o=n<0,u=r>d,h=i<0,_=s>c,b=e.hasAttribute("data-outside-vy"),p=e.hasAttribute("data-outside-vx"),x=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return x&&(b&&("top"===e.getAttribute("data-outside-vy")?o=x.top-(r-x.bottom)<0:u=x.bottom+(x.top-n)>d),p&&("left"===e.getAttribute("data-outside-vx")?h=x.left-(s-x.right)<0:_=x.right+(x.left-i)>c)),{outTop:o,outBottom:u,outLeft:h,outRight:_}},c=e=>{let{outTop:t,outBottom:n,outLeft:r,outRight:i}=d(e),s={};return t||n?(s={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",s.vy)):e.removeAttribute("data-outside-vy"),r||i?(s={...s,vx:i?"right":"left"},e.setAttribute("data-outside-vx",s.vx)):e.removeAttribute("data-outside-vx"),s}}},function(e){e.O(0,[49710,55216,92888,49774,40179],function(){return e(e.s=90444)}),_N_E=e.O()}]);