(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{18037:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(99748)}])},69953:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let o="refresh",u="navigate",i="restore",l="server-patch",a="prefetch",s="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57999:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(77149),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},63055:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(36004),o=r(31085),u=n._(r(14041)),i=r(40737),l=r(14239),a=r(1594),s=r(60592),c=r(32043),d=r(78294),f=r(86412),p=r(49988),h=r(57999),v=r(32238),y=r(69953),b=r(54261),g=new Set;function _(e,t,r,n,o,u){if(u||(0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!u){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}(async()=>u?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let x=u.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:x,prefetch:j=null,passHref:O,replace:C,shallow:E,scroll:M,locale:P,onClick:R,onMouseEnter:A,onTouchStart:w,legacyBehavior:T=!1,...k}=e;r=x,T&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let I=u.default.useContext(d.RouterContext),N=u.default.useContext(f.AppRouterContext),U=null!=I?I:N,L=!I,S=!1!==j,W=null===j?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:D,as:F}=u.default.useMemo(()=>{if(!I){let e=m(a);return{href:e,as:g?m(g):e}}let[e,t]=(0,i.resolveHref)(I,a,!0);return{href:e,as:g?(0,i.resolveHref)(I,g):t||e}},[I,a,g]),H=u.default.useRef(D),K=u.default.useRef(F);T&&(n=u.default.Children.only(r));let B=T?n&&"object"==typeof n&&n.ref:t,[V,q,z]=(0,p.useIntersection)({rootMargin:"200px"}),G=u.default.useCallback(e=>{(K.current!==F||H.current!==D)&&(z(),K.current=F,H.current=D),V(e)},[F,D,z,V]),X=(0,b.useMergedRef)(G,B);u.default.useEffect(()=>{U&&q&&S&&_(U,D,F,{locale:P},{kind:W},L)},[F,D,q,P,S,null==I?void 0:I.locale,U,L,W]);let Y={ref:X,onClick(e){T||"function"!=typeof R||R(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,o,i,a,s,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?u.default.startTransition(f):f()}(e,U,D,F,C,E,M,P,L)},onMouseEnter(e){T||"function"!=typeof A||A(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&(S||!L)&&_(U,D,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:W},L)},onTouchStart:function(e){T||"function"!=typeof w||w(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&(S||!L)&&_(U,D,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:W},L)}};if((0,s.isAbsoluteUrl)(F))Y.href=F;else if(!T||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Y.href=t||(0,v.addBasePath)((0,c.addLocale)(F,e,null==I?void 0:I.defaultLocale))}return T?u.default.cloneElement(n,Y):(0,o.jsx)("a",{...k,...Y,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49988:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(14041),o=r(98093),u="function"==typeof IntersectionObserver,i=new Map,l=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!u,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(s||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),i.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),i.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},54261:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(14041);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80692:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(31085),o=r(14041),u=r(5188);let i=(0,o.forwardRef)(function(e,t){let r=t||(0,o.useRef)(t);return(0,n.jsx)("span",{"aria-hidden":"true",ref:r,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-icon",e.className),"data-icon":e.icon,"data-icon-weight":e.weight,"data-icon-variant":e.variant,children:e.children})})},5188:(e,t,r)=>{"use strict";r.d(t,{AU:()=>o,EB:()=>h,LB:()=>f,MD:()=>l,cb:()=>p,dr:()=>c,ef:()=>s,uR:()=>n,xF:()=>u});let n=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&o(e,t)})},u=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let t in e)e[t]&&(n+="".concat(t," "))}}),n.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||i.includes(e))&&!t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}),a=e=>{var t;let{top:r,bottom:n,left:o,right:u,height:i,width:l}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:s}=window,c=r<0,d=n>a,f=o<0,p=u>s,h=e.hasAttribute("data-outside-vy"),v=e.hasAttribute("data-outside-vx"),y=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return y&&(h&&("top"===e.getAttribute("data-outside-vy")?c=y.top-(n-y.bottom)<0:d=y.bottom+(y.top-r)>a),v&&("left"===e.getAttribute("data-outside-vx")?f=y.left-(u-y.right)<0:p=y.right+(y.left-o)>s)),{outTop:c,outBottom:d,outLeft:f,outRight:p}},s=e=>{let{outTop:t,outBottom:r,outLeft:n,outRight:o}=a(e),u={};return t||r?(u={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",u.vy)):e.removeAttribute("data-outside-vy"),n||o?(u={...u,vx:o?"right":"left"},e.setAttribute("data-outside-vx",u.vx)):e.removeAttribute("data-outside-vx"),u},c=e=>Array.isArray(e)&&e.every(e=>"string"==typeof e),d=["Mac","iPhone","iPad","iPod"],f=()=>d.some(e=>window.navigator.userAgent.includes(e)),p=(e,t)=>new Promise(()=>setTimeout(e,t)),h=e=>e?String(e):e},99748:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(31085),o=r(71184),u=r(66996),i=r.n(u),l=r(2657),a=r.n(l);r(25721),r(72585),r(48232),r(40457);var s=r(34747),c=r.n(s),d=r(80692);let f=e=>{let{id:t}=e;return t?(0,n.jsxs)(c(),{className:"header-link",href:"?current=".concat(t),children:[(0,n.jsx)(d.A,{icon:"paper_clip"}),t," anchor link"]}):null},p=e=>{let{Component:t,pageProps:r}=e;return(0,n.jsxs)(o.x,{components:{h1:e=>(0,n.jsxs)("h1",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h2:e=>(0,n.jsxs)("h2",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h3:e=>(0,n.jsxs)("h3",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h4:e=>(0,n.jsxs)("h4",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h5:e=>(0,n.jsxs)("h5",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h6:e=>(0,n.jsxs)("h6",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),a:e=>(0,n.jsx)("a",{target:"_blank",referrerPolicy:"no-referrer",...e}),img:e=>{var t;return(0,n.jsx)("img",{...e,src:(null===(t=e.src)||void 0===t?void 0:t.startsWith("http"))?e.src:"".concat("/mono/review/3430-data-input-select-required-fehlerhaft").concat(e.src)})}},children:[(0,n.jsx)(i(),{src:"/mono/review/3430-data-input-select-required-fehlerhaft/iframe-resizer/iframeResizer.contentWindow.js"}),(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"DB UI Mono"})}),(0,n.jsx)(t,{...r})]})}},40457:()=>{},48232:()=>{},25721:()=>{},72585:()=>{},2657:(e,t,r)=>{e.exports=r(88151)},34747:(e,t,r)=>{e.exports=r(63055)},66996:(e,t,r)=>{e.exports=r(67424)},71184:(e,t,r)=>{"use strict";r.d(t,{R:()=>i,x:()=>l});var n=r(14041);let o={},u=n.createContext(o);function i(e){let t=n.useContext(u);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(u.Provider,{value:t},e.children)}}},e=>{var t=t=>e(e.s=t);e.O(0,[6593,8792],()=>(t(18037),t(56894))),_N_E=e.O()}]);