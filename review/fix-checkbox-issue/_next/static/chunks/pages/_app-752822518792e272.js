(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{86570:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2620)}])},19745:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let o="refresh",i="navigate",u="restore",l="server-patch",a="prefetch",s="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},12394:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(14079),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},14470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(43219),o=r(52322),i=n._(r(2784)),u=r(40706),l=r(90345),a=r(8985),s=r(70286),c=r(95549),d=r(24698),f=r(47640),p=r(34407),h=r(12394),v=r(70558),y=r(19745),b=r(67842),g=new Set;function m(e,t,r,n,o,i){if(i||(0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!i){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:j,prefetch:x=null,passHref:O,replace:C,shallow:P,scroll:E,locale:M,onClick:R,onMouseEnter:w,onTouchStart:A,legacyBehavior:k=!1,...T}=e;r=j,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let I=i.default.useContext(d.RouterContext),N=i.default.useContext(f.AppRouterContext),S=null!=I?I:N,L=!I,U=!1!==x,W=null===x?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:H,as:K}=i.default.useMemo(()=>{if(!I){let e=_(a);return{href:e,as:g?_(g):e}}let[e,t]=(0,u.resolveHref)(I,a,!0);return{href:e,as:g?(0,u.resolveHref)(I,g):t||e}},[I,a,g]),D=i.default.useRef(H),F=i.default.useRef(K);k&&(n=i.default.Children.only(r));let V=k?n&&"object"==typeof n&&n.ref:t,[B,Z,z]=(0,p.useIntersection)({rootMargin:"200px"}),G=i.default.useCallback(e=>{(F.current!==K||D.current!==H)&&(z(),F.current=K,D.current=H),B(e)},[K,H,z,B]),X=(0,b.useMergedRef)(G,V);i.default.useEffect(()=>{S&&Z&&U&&m(S,H,K,{locale:M},{kind:W},L)},[K,H,Z,M,U,null==I?void 0:I.locale,S,L,W]);let Y={ref:X,onClick(e){k||"function"!=typeof R||R(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,o,u,a,s,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(f):f()}(e,S,H,K,C,P,E,M,L)},onMouseEnter(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(U||!L)&&m(S,H,K,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:W},L)},onTouchStart:function(e){k||"function"!=typeof A||A(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(U||!L)&&m(S,H,K,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:W},L)}};if((0,s.isAbsoluteUrl)(K))Y.href=K;else if(!k||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Y.href=t||(0,v.addBasePath)((0,c.addLocale)(K,e,null==I?void 0:I.defaultLocale))}return k?i.default.cloneElement(n,Y):(0,o.jsx)("a",{...T,...Y,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},34407:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(2784),o=r(41346),i="function"==typeof IntersectionObserver,u=new Map,l=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),u.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67842:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2784);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=i(e,n),o.current=i(t,n))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},85803:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(52322),o=r(2784),i=r(98072);let u=(0,o.forwardRef)(function(e,t){let r=t||(0,o.useRef)(t);return(0,n.jsx)("span",{"aria-hidden":"true",ref:r,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-icon",e.className),"data-icon":e.icon,"data-icon-weight":e.weight,"data-icon-variant":e.variant,children:e.children})})},98072:(e,t,r)=>{"use strict";r.d(t,{Lp:()=>s,Vj:()=>n,X:()=>h,YR:()=>f,gG:()=>c,gw:()=>p,mS:()=>l,yI:()=>i,yn:()=>o});let n=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&o(e,t)})},i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let t in e)e[t]&&(n+="".concat(t," "))}}),n.trim()},u=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||u.includes(e))&&!t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}),a=e=>{var t;let{top:r,bottom:n,left:o,right:i,height:u,width:l}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:s}=window,c=r<0,d=n>a,f=o<0,p=i>s,h=e.hasAttribute("data-outside-vy"),v=e.hasAttribute("data-outside-vx"),y=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return y&&(h&&("top"===e.getAttribute("data-outside-vy")?c=y.top-(n-y.bottom)<0:d=y.bottom+(y.top-r)>a),v&&("left"===e.getAttribute("data-outside-vx")?f=y.left-(i-y.right)<0:p=y.right+(y.left-o)>s)),{outTop:c,outBottom:d,outLeft:f,outRight:p}},s=e=>{let{outTop:t,outBottom:r,outLeft:n,outRight:o}=a(e),i={};return t||r?(i={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",i.vy)):e.removeAttribute("data-outside-vy"),n||o?(i={...i,vx:o?"right":"left"},e.setAttribute("data-outside-vx",i.vx)):e.removeAttribute("data-outside-vx"),i},c=e=>Array.isArray(e)&&e.every(e=>"string"==typeof e),d=["Mac","iPhone","iPad","iPod"],f=()=>d.some(e=>window.navigator.userAgent.includes(e)),p=(e,t)=>new Promise(()=>setTimeout(e,t)),h=e=>e?String(e):e},2620:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(52322),o=r(45392),i=r(45847),u=r.n(i),l=r(97729),a=r.n(l);r(8391),r(87237),r(62038),r(85586);var s=r(39097),c=r.n(s),d=r(85803);let f=e=>{let{id:t}=e;return t?(0,n.jsxs)(c(),{className:"header-link",href:"?current=".concat(t),children:[(0,n.jsx)(d.Z,{icon:"paper_clip"}),t," anchor link"]}):null},p=e=>{let{Component:t,pageProps:r}=e;return(0,n.jsxs)(o.Z,{components:{h1:e=>(0,n.jsxs)("h1",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h2:e=>(0,n.jsxs)("h2",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h3:e=>(0,n.jsxs)("h3",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h4:e=>(0,n.jsxs)("h4",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h5:e=>(0,n.jsxs)("h5",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),h6:e=>(0,n.jsxs)("h6",{...e,children:[e.children,(0,n.jsx)(f,{id:e.id})]}),a:e=>(0,n.jsx)("a",{target:"_blank",referrerPolicy:"no-referrer",...e}),img:e=>{var t;return(0,n.jsx)("img",{...e,src:(null===(t=e.src)||void 0===t?void 0:t.startsWith("http"))?e.src:"".concat("/mono/review/fix-checkbox-issue").concat(e.src)})}},children:[(0,n.jsx)(u(),{src:"/mono/review/fix-checkbox-issue/iframe-resizer/iframeResizer.contentWindow.js"}),(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"DB UI Mono"})}),(0,n.jsx)(t,{...r})]})}},85586:()=>{},62038:()=>{},8391:()=>{},87237:()=>{},97729:(e,t,r)=>{e.exports=r(68792)},39097:(e,t,r)=>{e.exports=r(14470)},45847:(e,t,r)=>{e.exports=r(19406)},45392:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l,a:()=>u});var n=r(2784);let o={},i=n.createContext(o);function u(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(i.Provider,{value:t},e.children)}}},e=>{var t=t=>e(e.s=t);e.O(0,[9774,179],()=>(t(86570),t(70743))),_N_E=e.O()}]);