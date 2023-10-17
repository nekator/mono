(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4375],{64441:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",l="navigate",u="restore",f="server-patch",a="prefetch",i="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67361:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(36213),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},99938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(43219),o=r._(n(2784)),l=n(90038),u=n(65571),f=n(68613),a=n(98318),i=n(24077),c=n(89994),s=n(56415),d=n(19190),p=n(67361),h=n(65299),y=n(64441),b=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,u.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(b.has(l))return;b.add(l)}let f=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:b,children:v,prefetch:_=null,passHref:g,replace:O,shallow:m,scroll:C,locale:E,onClick:P,onMouseEnter:T,onTouchStart:j,legacyBehavior:M=!1,...R}=e;n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let A=o.default.useContext(c.RouterContext),I=o.default.useContext(s.AppRouterContext),k=null!=A?A:I,L=!A,S=!1!==_,N=null===_?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:x,as:U}=o.default.useMemo(()=>{if(!A){let e=formatStringOrUrl(f);return{href:e,as:b?formatStringOrUrl(b):e}}let[e,t]=(0,l.resolveHref)(A,f,!0);return{href:e,as:b?(0,l.resolveHref)(A,b):t||e}},[A,f,b]),w=o.default.useRef(x),K=o.default.useRef(U);M&&(r=o.default.Children.only(n));let D=M?r&&"object"==typeof r&&r.ref:t,[F,H,V]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(K.current!==U||w.current!==x)&&(V(),K.current=U,w.current=x),F(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[U,D,x,V,F]);o.default.useEffect(()=>{k&&H&&S&&prefetch(k,x,U,{locale:E},{kind:N},L)},[U,x,H,E,S,null==A?void 0:A.locale,k,L,N]);let z={ref:q,onClick(e){M||"function"!=typeof P||P(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,n,r,l,f,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:f,locale:i,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,k,x,U,O,m,C,E,L,S)},onMouseEnter(e){M||"function"!=typeof T||T(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),k&&(S||!L)&&prefetch(k,x,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:N},L)},onTouchStart(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),k&&(S||!L)&&prefetch(k,x,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:N},L)}};if((0,a.isAbsoluteUrl)(U))z.href=U;else if(!M||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);z.href=t||(0,h.addBasePath)((0,i.addLocale)(U,e,null==A?void 0:A.defaultLocale))}return M?o.default.cloneElement(r,z):o.default.createElement("a",{...R,...z},n)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},19190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(2784),o=n(82120),l="function"==typeof IntersectionObserver,u=new Map,f=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!l,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},f.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39097:function(e,t,n){e.exports=n(99938)},5632:function(e,t,n){e.exports=n(65123)}}]);