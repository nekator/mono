(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{86570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(64204)}])},94684:function(e,t){"use strict";var n,r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let u="refresh",l="navigate",a="restore",c="server-patch",s="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(i=r||(r={})).fresh="fresh",i.reusable="reusable",i.expired="expired",i.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8250:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(62476),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(43219),o=n(52322),i=r._(n(2784)),u=n(98047),l=n(26790),a=n(47973),c=n(49274),s=n(78074),f=n(17942),d=n(1586),p=n(70514),h=n(8250),v=n(87891),y=n(94684),b=new Set;function g(e,t,n,r,o,i){if(i||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=i.default.forwardRef(function(e,t){let n,r;let{href:a,as:b,children:m,prefetch:_=null,passHref:x,replace:C,shallow:E,scroll:O,locale:A,onClick:P,onMouseEnter:R,onTouchStart:w,legacyBehavior:M=!1,...T}=e;n=m,M&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let k=i.default.useContext(f.RouterContext),I=i.default.useContext(d.AppRouterContext),N=null!=k?k:I,S=!k,L=!1!==_,U=null===_?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:W,as:K}=i.default.useMemo(()=>{if(!k){let e=j(a);return{href:e,as:b?j(b):e}}let[e,t]=(0,u.resolveHref)(k,a,!0);return{href:e,as:b?(0,u.resolveHref)(k,b):t||e}},[k,a,b]),D=i.default.useRef(W),F=i.default.useRef(K);M&&(r=i.default.Children.only(n));let H=M?r&&"object"==typeof r&&r.ref:t,[V,B,Z]=(0,p.useIntersection)({rootMargin:"200px"}),z=i.default.useCallback(e=>{(F.current!==K||D.current!==W)&&(Z(),F.current=K,D.current=W),V(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[K,H,W,Z,V]);i.default.useEffect(()=>{N&&B&&L&&g(N,W,K,{locale:A},{kind:U},S)},[K,W,B,A,L,null==k?void 0:k.locale,N,S,U]);let G={ref:z,onClick(e){M||"function"!=typeof P||P(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,u,a,c,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};s?i.default.startTransition(d):d()}(e,N,W,K,C,E,O,A,S)},onMouseEnter(e){M||"function"!=typeof R||R(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(L||!S)&&g(N,W,K,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)},onTouchStart:function(e){M||"function"!=typeof w||w(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(L||!S)&&g(N,W,K,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)}};if((0,c.isAbsoluteUrl)(K))G.href=K;else if(!M||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==A?A:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);G.href=t||(0,v.addBasePath)((0,s.addLocale)(K,e,null==k?void 0:k.defaultLocale))}return M?i.default.cloneElement(r,G):(0,o.jsx)("a",{...T,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},70514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(2784),o=n(25132),i="function"==typeof IntersectionObserver,u=new Map,l=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!i,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),u.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]),[p,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},74819:function(e,t,n){"use strict";var r=n(52322),o=n(2784),i=n(43251);let u=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t);return(0,r.jsx)("span",{"aria-hidden":"true",ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-icon",e.className),"data-icon":e.icon,"data-icon-weight":e.weight,"data-icon-variant":e.variant,children:e.children})});t.Z=u},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return c},Vj:function(){return r},gG:function(){return s},mS:function(){return l},yI:function(){return i},yn:function(){return o}});let r=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&o(e,t)})},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let t in e)e[t]&&(r+="".concat(t," "))}}),r.trim()},u=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||u.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),a=e=>{var t;let{top:n,bottom:r,left:o,right:i,height:u,width:l}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:c}=window,s=n<0,f=r>a,d=o<0,p=i>c,h=e.hasAttribute("data-outside-vy"),v=e.hasAttribute("data-outside-vx"),y=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return y&&(h&&("top"===e.getAttribute("data-outside-vy")?s=y.top-(r-y.bottom)<0:f=y.bottom+(y.top-n)>a),v&&("left"===e.getAttribute("data-outside-vx")?d=y.left-(i-y.right)<0:p=y.right+(y.left-o)>c)),{outTop:s,outBottom:f,outLeft:d,outRight:p}},c=e=>{let{outTop:t,outBottom:n,outLeft:r,outRight:o}=a(e),i={};return t||n?(i={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",i.vy)):e.removeAttribute("data-outside-vy"),r||o?(i={...i,vx:o?"right":"left"},e.setAttribute("data-outside-vx",i.vx)):e.removeAttribute("data-outside-vx"),i},s=e=>Array.isArray(e)&&e.every(e=>"string"==typeof e)},64204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(52322),o=n(45392),i=n(45847),u=n.n(i),l=n(97729),a=n.n(l);n(669),n(94985),n(29609),n(6802);var c=n(39097),s=n.n(c),f=n(74819),d=e=>{let{id:t}=e;return t?(0,r.jsxs)(s(),{className:"header-link",href:"?current=".concat(t),children:[(0,r.jsx)(f.Z,{icon:"paper_clip"}),t," anchor link"]}):null},p=e=>{let{Component:t,pageProps:n}=e;return(0,r.jsxs)(o.Z,{components:{h1:e=>(0,r.jsxs)("h1",{...e,children:[e.children,(0,r.jsx)(d,{id:e.id})]}),h2:e=>(0,r.jsxs)("h2",{...e,children:[e.children,(0,r.jsx)(d,{id:e.id})]}),h3:e=>(0,r.jsxs)("h3",{...e,children:[e.children,(0,r.jsx)(d,{id:e.id})]}),h4:e=>(0,r.jsxs)("h4",{...e,children:[e.children,(0,r.jsx)(d,{id:e.id})]}),h5:e=>(0,r.jsxs)("h5",{...e,children:[e.children,(0,r.jsx)(d,{id:e.id})]}),h6:e=>(0,r.jsxs)("h6",{...e,children:[e.children,(0,r.jsx)(d,{id:e.id})]}),a:e=>(0,r.jsx)("a",{target:"_blank",referrerPolicy:"no-referrer",...e}),img:e=>{var t;return(0,r.jsx)("img",{...e,src:(null===(t=e.src)||void 0===t?void 0:t.startsWith("http"))?e.src:"".concat("/mono/version/v0.3.0").concat(e.src)})}},children:[(0,r.jsx)(u(),{src:"/mono/version/v0.3.0/iframe-resizer/iframeResizer.contentWindow.js"}),(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"DB UI Mono"})}),(0,r.jsx)(t,{...n})]})}},6802:function(){},29609:function(){},669:function(){},94985:function(){},97729:function(e,t,n){e.exports=n(50044)},39097:function(e,t,n){e.exports=n(26713)},45847:function(e,t,n){e.exports=n(55706)},45392:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},a:function(){return u}});var r=n(2784);let o={},i=r.createContext(o);function u(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(i.Provider,{value:t},e.children)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],function(){return t(86570),t(69442)}),_N_E=e.O()}]);