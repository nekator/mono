(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67378],{56626:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion-item/migration",function(){return n(12075)}])},93568:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var r=n(52322),i=n(45392);function l(t){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(e.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Before"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(e.th,{children:"After"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"cmp-accordion"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"db-accordion-item"})}),(0,r.jsx)(e.td,{children:"The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component)"})]})})]}),"\n",(0,r.jsx)(e.h3,{id:"props",children:"props"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Before"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(e.th,{children:"After"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"summary"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"headline"})}),(0,r.jsx)(e.td,{children:"The title/summary of the details element."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"emphasis"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(e.td,{children:"❌"}),(0,r.jsx)(e.td,{children:"There is no emphasis anymore."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"size"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(e.td,{children:"❌"}),(0,r.jsx)(e.td,{children:"Controlled by the density."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\uD83C\uDD95"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"disabled"})}),(0,r.jsx)(e.td,{children:"Disable the component."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\uD83C\uDD95"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"content"})}),(0,r.jsx)(e.td,{children:"Pass in a simple string as fallback to normal children/slot"})]})]})]})]})}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},12075:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r=n(52322),i=n(45392),l=n(55216),s=n(93568);let a=t=>{let{children:e}=t;return(0,r.jsx)(l.Z,{children:e})};function d(t){let e={h1:"h1",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"dbaccordionitem-migration",children:"DBAccordionItem Migration"}),"\n",(0,r.jsx)(s.default,{})]})}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(a,{...t,children:(0,r.jsx)(d,{...t})})}},10326:function(t,e,n){"use strict";var r=n(52322),i=n(2784),l=n(43251);let s=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,r.jsx)("button",{ref:n,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=s},55482:function(t,e,n){"use strict";var r,i,l,s,a,d,c;n.d(e,{IY:function(){return o},YP:function(){return u},ce:function(){return h}});let o="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(a=r||(r={})).FUNCTIONAL="functional",a.REGULAR="regular",a.EXPRESSIVE="expressive",Object.entries(r).map(t=>{let[,e]=t;return e}),(i||(i={})).PRIMARY="primary",(d=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",d.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",d.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",d.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",d.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",d.BRAND_BG_LEVEL_1="brand-bg-lvl-1",d.BRAND_BG_LEVEL_2="brand-bg-lvl-2",d.BRAND_BG_LEVEL_3="brand-bg-lvl-3",d.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",d.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",d.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",d.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",d.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",d.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",d.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",d.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",d.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",d.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",d.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",d.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",d.WARNING_BG_LEVEL_1="warning-bg-lvl-1",d.WARNING_BG_LEVEL_2="warning-bg-lvl-2",d.WARNING_BG_LEVEL_3="warning-bg-lvl-3",d.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",d.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",d.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",d.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",d.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",d.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",d.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(t=>{let[,e]=t;return e}),Object.entries(i).map(t=>{let[,e]=t;return e}),(c=s||(s={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(s).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return c},Vj:function(){return r},mS:function(){return a},yI:function(){return l},yn:function(){return i}});let r=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&i(t,e)})},l=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let r="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let e in t)t[e]&&(r+="".concat(e," "))}}),r.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],a=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||s.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),d=t=>{var e;let{top:n,bottom:r,left:i,right:l,height:s,width:a}=t.getBoundingClientRect(),{innerHeight:d,innerWidth:c}=window,o=n<0,u=r>d,h=i<0,_=l>c,b=t.hasAttribute("data-outside-vy"),x=t.hasAttribute("data-outside-vx"),A=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return A&&(b&&("top"===t.getAttribute("data-outside-vy")?o=A.top-(r-A.bottom)<0:u=A.bottom+(A.top-n)>d),x&&("left"===t.getAttribute("data-outside-vx")?h=A.left-(l-A.right)<0:_=A.right+(A.left-i)>c)),{outTop:o,outBottom:u,outLeft:h,outRight:_}},c=t=>{let{outTop:e,outBottom:n,outLeft:r,outRight:i}=d(t),l={};return e||n?(l={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",l.vy)):t.removeAttribute("data-outside-vy"),r||i?(l={...l,vx:i?"right":"left"},t.setAttribute("data-outside-vx",l.vx)):t.removeAttribute("data-outside-vx"),l}}},function(t){t.O(0,[49710,55216,92888,49774,40179],function(){return t(t.s=56626)}),_N_E=t.O()}]);