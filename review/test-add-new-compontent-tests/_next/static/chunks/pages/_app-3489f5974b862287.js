(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92888],{86570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(54587)}])},94459:function(e,t){"use strict";var n,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return o},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return d},isThenable:function(){return u}});let r="refresh",i="navigate",l="restore",o="server-patch",s="prefetch",c="fast-refresh",d="server-action";function u(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(a=n||(n={})).AUTO="auto",a.FULL="full",a.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20710:function(e,t,n){"use strict";function a(e,t,n,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return a}}),n(8723),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},70216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let a=n(43219),r=n(52322),i=a._(n(2784)),l=n(90988),o=n(77113),s=n(86792),c=n(57308),d=n(11082),u=n(21051),f=n(8375),h=n(6607),m=n(20710),v=n(52515),b=n(94459),p=new Set;function g(e,t,n,a,r,i){if(i||(0,o.isLocalURL)(t)){if(!a.bypassPrefetchedCheck){let r=t+"%"+n+"%"+(void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0);if(p.has(r))return;p.add(r)}Promise.resolve(i?e.prefetch(t,r):e.prefetch(t,n,a)).catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let n,a;let{href:s,as:p,children:j,prefetch:N=null,passHref:y,replace:R,shallow:S,scroll:E,locale:I,onClick:C,onMouseEnter:w,onTouchStart:A,legacyBehavior:T=!1,...k}=e;n=j,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,r.jsx)("a",{children:n}));let _=i.default.useContext(u.RouterContext),F=i.default.useContext(f.AppRouterContext),L=null!=_?_:F,O=!_,P=!1!==N,B=null===N?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:M,as:U}=i.default.useMemo(()=>{if(!_){let e=x(s);return{href:e,as:p?x(p):e}}let[e,t]=(0,l.resolveHref)(_,s,!0);return{href:e,as:p?(0,l.resolveHref)(_,p):t||e}},[_,s,p]),Y=i.default.useRef(M),V=i.default.useRef(U);T&&(a=i.default.Children.only(n));let z=T?a&&"object"==typeof a&&a.ref:t,[D,W,Z]=(0,h.useIntersection)({rootMargin:"200px"}),K=i.default.useCallback(e=>{(V.current!==U||Y.current!==M)&&(Z(),V.current=U,Y.current=M),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[U,z,M,Z,D]);i.default.useEffect(()=>{L&&W&&P&&g(L,M,U,{locale:I},{kind:B},O)},[U,M,W,I,P,null==_?void 0:_.locale,L,O,B]);let H={ref:K,onClick(e){T||"function"!=typeof C||C(e),T&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,a,r,l,s,c,d){let{nodeName:u}=e.currentTarget;if("A"===u.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:l,locale:c,scroll:e}):t[r?"replace":"push"](a||n,{scroll:e})};d?i.default.startTransition(f):f()}(e,L,M,U,R,S,E,I,O)},onMouseEnter(e){T||"function"!=typeof w||w(e),T&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),L&&(P||!O)&&g(L,M,U,{locale:I,priority:!0,bypassPrefetchedCheck:!0},{kind:B},O)},onTouchStart(e){T||"function"!=typeof A||A(e),T&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),L&&(P||!O)&&g(L,M,U,{locale:I,priority:!0,bypassPrefetchedCheck:!0},{kind:B},O)}};if((0,c.isAbsoluteUrl)(U))H.href=U;else if(!T||y||"a"===a.type&&!("href"in a.props)){let e=void 0!==I?I:null==_?void 0:_.locale,t=(null==_?void 0:_.isLocaleDomain)&&(0,m.getDomainLocale)(U,e,null==_?void 0:_.locales,null==_?void 0:_.domainLocales);H.href=t||(0,v.addBasePath)((0,d.addLocale)(U,e,null==_?void 0:_.defaultLocale))}return T?i.default.cloneElement(a,H):(0,r.jsx)("a",{...k,...H,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let a=n(2784),r=n(61289),i="function"==typeof IntersectionObserver,l=new Map,o=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!i,[d,u]=(0,a.useState)(!1),f=(0,a.useRef)(null),h=(0,a.useCallback)(e=>{f.current=e},[]);return(0,a.useEffect)(()=>{if(i){if(c||d)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:a,observer:r,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=o.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=l.get(a)))return t;let r=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},o.push(n),l.set(n,t),t}(n);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),l.delete(a);let e=o.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!d){let e=(0,r.requestIdleCallback)(()=>u(!0));return()=>(0,r.cancelIdleCallback)(e)}},[c,n,t,d,f.current]),[h,d,(0,a.useCallback)(()=>{u(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22003:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var a=n(52322),r=n(2784),i=n(58077),l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("button",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})})},6009:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var a=n(52322),r=n(2784),i=n(58077),l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsxs)("div",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:t=>{e.onClick&&e.onClick(t)},children:[e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})})},60767:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var a=n(52322),r=n(2784),i=n(58077),l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("span",{"aria-hidden":"true",ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-icon",e.className),"data-icon":e.icon,"data-icon-weight":e.weight,"data-icon-variant":e.variant,title:e.title,children:e.children})})},32924:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var a=n(52322),r=n(2784),i=n(58077),l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("span",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-infotext",e.className),title:e.title,"data-icon":e.icon,"data-variant":e.variant,"data-size":e.size,children:e.children})})},562:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077),l=n(65982);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[o,s]=(0,r.useState)(()=>l.IY);return(0,a.jsxs)("a",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,hrefLang:e.hreflang,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:t=>{e.onClick&&e.onClick(t)},children:[e.text?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.text})}):null,e.children]})});t.Z=o},36802:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077);let l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("i",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-popover",e.className),"data-spacing":e.spacing,"data-gap":e.gap,"data-animation":e.animation,"data-open":e.open,"data-delay":e.delay,"data-width":e.width,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),children:e.children})});t.Z=l},89686:function(e,t,n){"use strict";n.d(t,{P:function(){return a.Z}});var a=n(95610)},95610:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077),l=n(65982);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[o,s]=(0,r.useState)(()=>l.IY);return(0,a.jsx)("div",{role:"tablist",ref:n,...(0,i.mS)(e,[]),id:o,className:(0,i.yI)("db-tab-list",e.className),children:(0,a.jsx)("div",{className:"db-tab-list-scroll-container",children:e.children})})});t.Z=o},9178:function(e,t,n){"use strict";n.d(t,{A:function(){return a.Z}});var a=n(99469)},99469:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077),l=n(65982);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[o,s]=(0,r.useState)(()=>l.IY);return(0,r.useEffect)(()=>{},[]),(0,a.jsxs)("article",{role:"tabpanel",ref:n,...(0,i.mS)(e,[]),className:(0,i.yI)("db-tab-panel",e.className),id:o,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})});t.Z=o},59696:function(e,t,n){"use strict";n.d(t,{Q:function(){return a.Z}});var a=n(5951)},5951:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077),l=n(65982);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[o,s]=(0,r.useState)(()=>l.IY),[c,d]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{d(!0)},[]),(0,r.useEffect)(()=>{e.active&&c&&(n.current.click(),d(!1))},[n.current,c]),(0,a.jsxs)("label",{role:"tab",htmlFor:o,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-width":e.width,"data-alignment":e.alignment,className:(0,i.yI)("db-tab",e.className,{"is-icon-text-replace":e.noText}),children:[(0,a.jsx)("input",{type:"radio",disabled:e.disabled,ref:n,...(0,i.mS)(e,[]),id:o}),e.label?(0,a.jsx)(a.Fragment,{children:e.label}):null,e.children]})});t.Z=o},83270:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077),l=n(22003),o=n(89686),s=n(59696),c=n(9178),d=n(65982);let u=(0,r.forwardRef)(function(e,t){var n,u;let f=t||(0,r.useRef)(t),[h,m]=(0,r.useState)(()=>d.IY),[v,b]=(0,r.useState)(()=>""),[p,g]=(0,r.useState)(()=>!1),[x,j]=(0,r.useState)(()=>!1),[N,y]=(0,r.useState)(()=>!1),[R,S]=(0,r.useState)(()=>null);function E(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function I(e){let t=e.scrollWidth>e.clientWidth;j(t&&e.scrollLeft>1),y(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function C(t){let n=e.arrowScrollDistance||100;t&&(n*=-1),null==R||R.scrollBy({top:0,left:n,behavior:"smooth"})}return(0,r.useEffect)(()=>{m(e.id||"tabs-"+(0,i.Vj)()),b(e.name||(0,i.Vj)()),g(!0)},[]),(0,r.useEffect)(()=>{if(f.current&&p){let t=f.current.getElementsByClassName("db-tab-list");if((null==t?void 0:t.length)>0){let n=t.item(0);if(n){if(n.getAttributeNames().includes("aria-orientation")||n.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour){let e=n.getElementsByClassName("db-tab-list-scroll-container");if((null==e?void 0:e.length)>0){let t=e.item(0);S(t),I(t),t.addEventListener("scroll",()=>{I(t)})}}let t=n.getElementsByClassName("db-tab");(null==t?void 0:t.length)>0&&Array.from(t).forEach((t,n)=>{let a=t.getAttributeNames();a.includes("data-width")||t.setAttribute("data-width",e.width||"auto"),a.includes("data-alignment")||t.setAttribute("data-alignment",e.alignment||"start");let r=t.getElementsByTagName("input");if(r.length>0){let a=r[0];if(a.id===d.IY){let e="".concat(v,"-tab-").concat(n);t.setAttribute("for",e),t.setAttribute("aria-controls","".concat(v,"-tab-panel-").concat(n)),a.id=e,a.setAttribute("name",v)}let i=!e.initialSelectedMode||"auto"===e.initialSelectedMode,l=void 0===e.initialSelectedIndex&&0===n||e.initialSelectedIndex===n;i&&l&&a.click()}})}}let n=f.current.getElementsByClassName("db-tab-panel");(null==n?void 0:n.length)>0&&Array.from(n).forEach((e,t)=>{e.id===d.IY&&(e.id="".concat(v,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(v,"-tab-").concat(t)))}),g(!1)}},[f.current,p]),(0,a.jsxs)("div",{ref:f,...(0,i.mS)(e,[]),id:h,className:(0,i.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Y,{variant:"text",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>C(!0),children:"Scroll left"})}):null,e.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.P,{children:null===(n=E(e.tabs))||void 0===n?void 0:n.map((t,n)=>(0,a.jsx)(s.Q,{active:t.active,label:t.label,alignment:t.alignment,width:t.width,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab"+n))}),null===(u=E(e.tabs))||void 0===u?void 0:u.map((t,n)=>(0,a.jsx)(c.A,{content:t.content,children:t.children},e.name+"tab-panel"+n))]}):null,N?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Y,{variant:"text",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>C(),children:"Scroll right"})}):null,e.children]})});t.Z=u},19429:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(58077);let l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("i",{role:"tooltip","data-gap":"true",ref:n,...(0,i.mS)(e,[]),id:e.id,"data-emphasis":e.emphasis,"data-animation":e.animation,"data-delay":e.delay,"data-width":e.width,"data-variant":e.variant,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),className:(0,i.yI)("db-tooltip",e.className),children:e.children})});t.Z=l},86095:function(e,t,n){"use strict";n.d(t,{aw:function(){return A},kC:function(){return w},H3:function(){return c},aE:function(){return d},mX:function(){return u},Y1:function(){return i.Y},f:function(){return f.f},I3:function(){return h},oH:function(){return m},TG:function(){return v},W4:function(){return b},Pg:function(){return p.P},EZ:function(){return g.E},aq:function(){return x},vB:function(){return l.Z},Cc:function(){return T},pK:function(){return j},wi:function(){return N},Ys:function(){return k.Z},an:function(){return y},cN:function(){return R},kr:function(){return S},QQ:function(){return E.Q},PC:function(){return F.P},Ao:function(){return O.A},nE:function(){return L.Z},k8:function(){return I},GI:function(){return C},Nd:function(){return _.Z}});var a=n(52322),r=n(2784),i=n(22003),l=n(562),o=n(65982),s=n(58077),c=(0,r.forwardRef)(function(e,t){var n;let c=t||(0,r.useRef)(t);return(0,a.jsxs)("div",{ref:c,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-elevation":e.elevation,children:[e.headline?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,a.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Z,{variant:"inline",className:"db-alert-link",href:e.link.href,hreflang:e.link.hreflang,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:t=>{e.onClick&&e.onClick(t)},children:null!==(n=e.closeButtonText)&&void 0!==n?n:o.ce})}):null]})}),d=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("span",{ref:n,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:e.children})}),u=(0,r.forwardRef)(function(e,t){var n,i,l,o,c;let d=t||(0,r.useRef)(t),[u,f]=(0,r.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"}));return(0,a.jsxs)("div",{ref:d,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-brand",e.className),children:[(0,a.jsxs)("a",{href:null!==(n=e.anchorRef)&&void 0!==n?n:u.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-logo",src:null!==(i=e.imgSrc)&&void 0!==i?i:u.src,alt:null!==(l=e.imgAlt)&&void 0!==l?l:"",height:null!==(o=e.imgHeight)&&void 0!==o?o:u.height,width:null!==(c=e.imgWidth)&&void 0!==c?c:u.width})}),e.anchorChildren?(0,a.jsx)(a.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,a.jsx)(a.Fragment,{children:e.children})]})}),f=n(6009),h=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,l]=(0,r.useState)(()=>!1),[c,d]=(0,r.useState)(()=>o.IY);return(0,r.useEffect)(()=>{l(!0),d(e.id||"checkbox-"+(0,s.Vj)())},[]),(0,r.useEffect)(()=>{if(i&&document&&c){var t;let n=null===(t=document)||void 0===t?void 0:t.getElementById(c);n&&(void 0!=e.checked&&(n.checked=e.checked),void 0!==e.indeterminate&&(n.indeterminate=e.indeterminate))}},[i,e.indeterminate,e.checked]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-variant":e.labelVariant,htmlFor:c,className:(0,s.yI)("db-checkbox",e.className),children:[(0,a.jsx)("input",{type:"checkbox",ref:n,...(0,s.mS)(e,[]),id:c,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,required:e.required,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})}),m=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("div",{ref:n,...(0,s.mS)(e,[]),id:e.id,"data-margin":e.margin,"data-variant":e.variant,"data-emphasis":e.emphasis,className:(0,s.yI)("db-divider",e.className)})}),v=(0,r.forwardRef)(function(e,t){var n;let l=t||(0,r.useRef)(t),c=(0,r.useRef)(null);function d(t){"Escape"===t.key&&t.preventDefault(),("close"===t||"Escape"===t.key||"DIALOG"===t.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function u(){(null==l?void 0:l.current)&&(e.open&&!l.current.open&&(c.current&&(c.current.hidden=!1),"none"===e.backdrop?l.current.show():l.current.showModal()),!e.open&&l.current.open&&(c.current&&(c.current.hidden=!0),setTimeout(()=>{var e;c.current&&(c.current.hidden=!1),null===(e=l.current)||void 0===e||e.close()},401)))}return(0,r.useEffect)(()=>{u()},[]),(0,r.useEffect)(()=>{u()},[e.open]),(0,a.jsx)("dialog",{className:"db-drawer",id:e.id,ref:l,...(0,s.mS)(e,["onClose"]),onClick:e=>{d(e)},onKeyDown:e=>d(e),"data-backdrop":e.backdrop,children:(0,a.jsxs)("article",{ref:c,className:(0,s.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,a.jsxs)("header",{className:"db-drawer-header",children:[(0,a.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>d("close"),children:null!==(n=e.closeButtonText)&&void 0!==n?n:o.ce})}):null]}),(0,a.jsx)("div",{className:"db-drawer-content",children:e.children})]})})}),b=(0,r.forwardRef)(function(e,t){var n;let l=t||(0,r.useRef)(t),[c,d]=(0,r.useState)(()=>o.IY),[u,f]=(0,r.useState)(()=>!1),[h,m]=(0,r.useState)(()=>!1),[b,p]=(0,r.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function g(){e.onToggle&&e.onToggle(!e.drawerOpen)}return(0,r.useEffect)(()=>{f(!0),d(e.id||"header-"+(0,s.Vj)())},[]),(0,r.useEffect)(()=>{if(u&&document&&c&&e.forceMobile){let e=document.getElementById(c);e&&(0,s.yn)(e,{key:"data-force-mobile",value:"true"}),m(!0)}},[u]),(0,a.jsxs)("header",{ref:l,...(0,s.mS)(e,[]),className:(0,s.yI)("db-header",e.className),id:c,"data-on-forcing-mobile":e.forceMobile&&!h,children:[(0,a.jsxs)(v,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>g(),children:[(0,a.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,a.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,a.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,a.jsxs)("div",{className:"db-header-navigation-container",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,a.jsxs)("div",{className:"db-header-action-container",children:[(0,a.jsx)("div",{className:"db-header-burger-menu-container",children:(0,a.jsx)(i.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>g(),children:null!==(n=e.burgerMenuLabel)&&void 0!==n?n:b.burgerMenuLabel})}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})}),p=n(60767),g=n(32924),x=(0,r.forwardRef)(function(e,t){var n,i,l;let c=t||(0,r.useRef)(t),[d,u]=(0,r.useState)(()=>o.IY),[f,h]=(0,r.useState)(()=>o.IY+o.Kn),[m,v]=(0,r.useState)(()=>o.IY),[b,p]=(0,r.useState)(()=>({label:o.SU,placeholder:" "}));return(0,r.useEffect)(()=>{u(e.id||"input-"+(0,s.Vj)()),h(d+o.Kn),v(e.dataListId||"datalist-".concat((0,s.Vj)()))},[]),(0,a.jsxs)("div",{className:(0,s.yI)("db-input",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,"data-icon-after":e.iconAfter,children:[(0,a.jsx)("label",{htmlFor:d,children:null!==(i=e.label)&&void 0!==i?i:b.label}),(0,a.jsx)("input",{ref:c,...(0,s.mS)(e,[]),id:d,name:e.name,type:e.type||"text",placeholder:null!==(l=e.placeholder)&&void 0!==l?l:b.placeholder,disabled:e.disabled,required:e.required,step:e.step,value:e.value,"aria-invalid":e.invalid,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,readOnly:e.readOnly,form:e.form,pattern:e.pattern,autoComplete:e.autocomplete,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)},list:e.dataList&&m,"aria-describedby":e.message&&f}),e.dataList?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("datalist",{id:m,children:null===(n=e.dataList)||void 0===n?void 0:n.map(e=>(0,a.jsx)("option",{value:e.key,children:e.value},m+"-option-"+e.key))})}):null,e.children,e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g.E,{size:"small",variant:e.variant,icon:(0,s.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})}),j=(0,r.forwardRef)(function(e,t){var n;let l=t||(0,r.useRef)(t),[c,d]=(0,r.useState)(()=>!1),[u,f]=(0,r.useState)(()=>!1),[h,m]=(0,r.useState)(()=>!0),[v,b]=(0,r.useState)(()=>!1),[p,g]=(0,r.useState)(()=>"sub-navigation-"+(0,s.Vj)());return(0,r.useEffect)(()=>{d(!0)},[]),(0,r.useEffect)(()=>{void 0!==e.subNavigationExpanded&&b(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,r.useEffect)(()=>{if(void 0!==e.areaPopup)f(e.areaPopup),m(u);else if(c&&document&&p){var t;let e=null===(t=document)||void 0===t?void 0:t.getElementById(p);if(e){let t=e.children;(null==t?void 0:t.length)>0?(f(!0),(0,s.cd)(e)||e.setAttribute("data-outside-vx","true"),(0,s.MN)(e)||e.setAttribute("data-outside-vy","true")):m(!1)}}},[c,e.areaPopup]),(0,a.jsxs)("li",{ref:l,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[h?null:(0,a.jsx)(a.Fragment,{children:e.children}),h?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":u,"aria-expanded":v,disabled:e.disabled,onClick:t=>{e.onClick&&e.onClick(t),u&&b(!0)},children:e.children}),(0,a.jsxs)("menu",{className:"db-sub-navigation",id:p,children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"db-mobile-navigation-back",children:(0,a.jsx)(i.Y,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),b(!1)},children:null!==(n=e.backButtonText)&&void 0!==n?n:o.YP})})}):null,e.slotSubNavigation]})]}):null]})}),N=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,l]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{l(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{l(!0)}):l(!0)},[]),(0,a.jsxs)("div",{ref:n,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[e.slotHeader,(0,a.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})}),y=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,l]=(0,r.useState)(()=>!1),[c,d]=(0,r.useState)(()=>o.IY);return(0,r.useEffect)(()=>{l(!0),d(e.id||"radio-"+(0,s.Vj)())},[]),(0,r.useEffect)(()=>{if(e.checked&&i&&document&&c){var t;let n=null===(t=document)||void 0===t?void 0:t.getElementById(c);n&&void 0!=e.checked&&(n.checked=!0)}},[i]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-variant":e.labelVariant,className:(0,s.yI)("db-radio",e.className),htmlFor:c,children:[(0,a.jsx)("input",{type:"radio",ref:n,...(0,s.mS)(e,[]),id:c,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,value:e.value,required:e.required,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})}),R=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,l]=(0,r.useState)(()=>o.IY);return(0,r.useEffect)(()=>{l(e.id||"section-"+(0,s.Vj)())},[]),(0,a.jsx)("section",{ref:n,...(0,s.mS)(e,[]),id:i,"data-size":e.size||"medium",className:(0,s.yI)("db-section",e.className),children:(0,a.jsx)("div",{"data-variant":e.variant,children:e.children})})}),S=(0,r.forwardRef)(function(e,t){var n,i,l;let c=t||(0,r.useRef)(t),[d,u]=(0,r.useState)(()=>o.IY),[f,h]=(0,r.useState)(()=>o.IY+o.Kn),[m,v]=(0,r.useState)(()=>o.IY+o.D_);function b(e){var t;return null!==(t=e.label)&&void 0!==t?t:e.value.toString()}return(0,r.useEffect)(()=>{let t=e.id||"select-"+(0,s.Vj)();u(t),h(t+o.Kn),v(t+o.D_)},[]),(0,a.jsxs)("div",{className:(0,s.yI)("db-select",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,children:[(0,a.jsx)("label",{htmlFor:d,children:null!==(i=e.label)&&void 0!==i?i:o.SU}),(0,a.jsxs)("select",{ref:c,...(0,s.mS)(e,[]),"aria-invalid":e.invalid,required:e.required,disabled:e.disabled,id:d,name:e.name,value:e.value,autoComplete:e.autocomplete,onClick:t=>{e.onClick&&e.onClick(t)},onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)},"aria-describedby":e.message&&f||m,children:[(0,a.jsx)("option",{hidden:!0}),e.options?(0,a.jsx)(r.Fragment,{children:null===(n=e.options)||void 0===n?void 0:n.map(e=>{var t;return(0,a.jsxs)(r.Fragment,{children:[e.options?(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("optgroup",{label:b(e),children:null===(t=e.options)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:b(e)},e.value.toString()))})},(0,s.Vj)()):null,e.options?null:(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:b(e)})},(0,s.Vj)())]},(0,s.Vj)())})},(0,s.Vj)()):null,e.children]}),(0,a.jsx)("span",{id:m,children:null!==(l=e.placeholder)&&void 0!==l?l:e.label}),e.message?(0,a.jsx)(r.Fragment,{children:(0,a.jsx)(g.E,{size:"small",variant:e.variant,icon:(0,s.mT)(e.variant,e.messageIcon),id:f,children:e.message})},(0,s.Vj)()):null]})}),E=n(59696),I=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);function l(){return e.removeButton?e.removeButton:"Remove tag"}return(0,a.jsxs)("div",{ref:n,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-tag",e.className),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,"data-icon":e.icon,"data-no-text":e.noText,"data-overflow":e.overflow,children:[e.children,e.text?(0,a.jsx)(a.Fragment,{children:e.text}):null,"removable"===e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Y,{icon:"close",size:"small",variant:"text",className:"db-tab-remove-button",onClick:t=>void(e.onRemove&&e.onRemove()),noText:!0,title:l(),children:l()})}):null]})}),C=(0,r.forwardRef)(function(e,t){var n,i,l;let c=t||(0,r.useRef)(t),[d,u]=(0,r.useState)(()=>o.IY),[f,h]=(0,r.useState)(()=>o.IY+o.Kn),[m,v]=(0,r.useState)(()=>({label:o.SU,placeholder:" ",rows:"4"}));return(0,r.useEffect)(()=>{u(e.id||"textarea-"+(0,s.Vj)()),h(d+o.Kn)},[]),(0,a.jsxs)("div",{className:(0,s.yI)("db-textarea",e.className),"data-label-variant":e.labelVariant,"data-variant":e.variant,children:[(0,a.jsx)("label",{htmlFor:d,children:null!==(n=e.label)&&void 0!==n?n:m.label}),(0,a.jsx)("textarea",{ref:c,...(0,s.mS)(e,[]),id:d,"data-resize":e.resize,disabled:e.disabled,required:e.required,readOnly:e.readOnly,"aria-invalid":e.invalid,form:e.form,maxLength:e.maxLength,minLength:e.minLength,name:e.name,wrap:e.wrap,spellCheck:e.spellCheck,autoComplete:e.autocomplete,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)},value:e.value,"aria-describedby":e.message&&f,placeholder:null!==(i=e.placeholder)&&void 0!==i?i:m.placeholder,rows:null!==(l=e.rows)&&void 0!==l?l:m.rows,cols:e.cols}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(g.E,{size:"small",variant:e.variant,icon:(0,s.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})}),w=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,l]=(0,r.useState)(()=>o.IY),[c,d]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{l(e.id||"accordion-item-"+(0,s.Vj)()),e.defaultOpen&&d(e.defaultOpen)},[]),(0,a.jsxs)("details",{ref:n,...(0,s.mS)(e,[]),id:i,className:(0,s.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:c,name:e.name,children:[(0,a.jsxs)("summary",{onClick:t=>(function(t){null==t||t.preventDefault();let n=!c;e.onToggle&&e.onToggle(n),d(n)})(t),children:[e.title?(0,a.jsx)(a.Fragment,{children:e.title}):null,e.title?null:(0,a.jsx)(a.Fragment,{children:e.slotTitle})]}),(0,a.jsxs)("div",{children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.content?null:(0,a.jsx)(a.Fragment,{children:e.children})]})]})}),A=(0,r.forwardRef)(function(e,t){var n;let i=t||(0,r.useRef)(t),[l,o]=(0,r.useState)(()=>[]),[c,d]=(0,r.useState)(()=>""),[u,f]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{f(!0)},[]),(0,r.useEffect)(()=>{if(i.current&&u){let t=i.current.getElementsByTagName("details");if(t){let n=[];Array.from(t).forEach((t,a)=>{var r;let i=t.id;(t.open||(null===(r=e.initOpenIndex)||void 0===r?void 0:r.includes(a)))&&n.push(i);let l=t.getElementsByTagName("summary");(null==l?void 0:l.length)>0&&l[0].addEventListener("click",()=>{d(i)})}),"single"===e.behaviour&&n.length>1&&(n=[n[0]]),o(n),f(!1)}}},[i.current,u]),(0,r.useEffect)(()=>{(null==c?void 0:c.length)>0&&(l.includes(c)?"single"===e.behaviour?o([]):o(l.filter(e=>e!==c)):"single"===e.behaviour?o([c]):o([...l,c]),e.onChange&&e.onChange(l),d(""))},[c]),(0,r.useEffect)(()=>{if(null==i?void 0:i.current){let e=i.current.getElementsByTagName("details");e&&Array.from(e).forEach(e=>{e.open=l.includes(e.id)})}},[l]),(0,a.jsxs)("div",{ref:i,...(0,s.mS)(e,[]),id:e.id,className:(0,s.yI)("db-accordion",e.className),children:[e.items?null:(0,a.jsx)(a.Fragment,{children:e.children}),e.items?(0,a.jsx)(a.Fragment,{children:null===(n=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.items))||void 0===n?void 0:n.map((e,t)=>(0,a.jsx)(w,{title:e.title,disabled:e.disabled,content:e.content},"accordion-item-".concat(e.title,"-").concat(t)))}):null]})}),T=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,l]=(0,r.useState)(()=>o.IY);return(0,r.useEffect)(()=>{l(e.id||"main-navigation-"+(0,s.Vj)())},[]),(0,a.jsx)("nav",{ref:n,...(0,s.mS)(e,[]),id:i,className:(0,s.yI)("db-main-navigation",e.className),children:(0,a.jsx)("menu",{children:e.children})})}),k=n(36802),_=n(19429),F=n(89686),L=n(83270),O=n(9178)},65982:function(e,t,n){"use strict";var a,r,i,l,o,s,c;n.d(t,{$f:function(){return b},DM:function(){return p},D_:function(){return h},IY:function(){return d},Kn:function(){return f},SU:function(){return u},YP:function(){return m},ce:function(){return v},iw:function(){return a},r$:function(){return i}});let d="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",f="-message",h="-placeholder",m="Back",v="Close Button";(o=a||(a={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive";let b=Object.entries(a).map(e=>{let[,t]=e;return t});(r||(r={})).PRIMARY="primary",(s=i||(i={})).BASE="base",s.BASE_STRONG="base-strong",s.BASE_TRANSPARENT_SEMI="base-transparent-semi",s.BASE_TRANSPARENT_FULL="base-transparent-full",s.NEUTRAL="neutral",s.NEUTRAL_STRONG="neutral-strong",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.BRAND="brand",s.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",s.BRAND_TRANSPARENT_FULL="brand-transparent-full",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.WARNING="warning",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full";let p=Object.entries(i).map(e=>{let[,t]=e;return t});Object.entries(r).map(e=>{let[,t]=e;return t}),(c=l||(l={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,t]=e;return t})},58077:function(e,t,n){"use strict";n.d(t,{MN:function(){return c},Vj:function(){return a},cd:function(){return s},mS:function(){return o},mT:function(){return l},yI:function(){return i},yn:function(){return r}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},l=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none"),o=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),s=e=>{let{left:t,right:n}=e.getBoundingClientRect(),{innerWidth:a}=window;return t>=0&&n<=a},c=e=>{let{top:t,bottom:n}=e.getBoundingClientRect(),{innerHeight:a}=window;return t>=0&&n<=a}},54587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(52322),r=n(45392),i=n(45847),l=n.n(i);n(99819),n(33337),n(56523);var o=n(39097),s=n.n(o),c=n(86095),d=e=>{let{id:t}=e;return t?(0,a.jsxs)(s(),{className:"header-link",href:"?current=".concat(t),children:[(0,a.jsx)(c.Pg,{icon:"add_link"}),t," anchor link"]}):null},u=e=>{let{Component:t,pageProps:n}=e;return(0,a.jsxs)(r.Z,{components:{h1:e=>(0,a.jsxs)("h1",{...e,children:[e.children,(0,a.jsx)(d,{id:e.id})]}),h2:e=>(0,a.jsxs)("h2",{...e,children:[e.children,(0,a.jsx)(d,{id:e.id})]}),h3:e=>(0,a.jsxs)("h3",{...e,children:[e.children,(0,a.jsx)(d,{id:e.id})]}),h4:e=>(0,a.jsxs)("h4",{...e,children:[e.children,(0,a.jsx)(d,{id:e.id})]}),h5:e=>(0,a.jsxs)("h5",{...e,children:[e.children,(0,a.jsx)(d,{id:e.id})]}),h6:e=>(0,a.jsxs)("h6",{...e,children:[e.children,(0,a.jsx)(d,{id:e.id})]}),a:e=>(0,a.jsx)("a",{target:"_blank",referrerPolicy:"no-referrer",...e}),img:e=>{var t;return(0,a.jsx)("img",{...e,src:(null===(t=e.src)||void 0===t?void 0:t.startsWith("http"))?e.src:"".concat("/mono/review/test-add-new-compontent-tests").concat(e.src)})}},children:[(0,a.jsx)(l(),{src:"/mono/review/test-add-new-compontent-tests/iframe-resizer/iframeResizer.contentWindow.js"}),(0,a.jsx)(t,{...n})]})}},56523:function(){},99819:function(){},33337:function(){},39097:function(e,t,n){e.exports=n(70216)},45847:function(e,t,n){e.exports=n(28263)},45392:function(e,t,n){"use strict";n.d(t,{Z:function(){return o},a:function(){return l}});var a=n(2784);let r={},i=a.createContext(r);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[49774,40179],function(){return t(86570),t(5244)}),_N_E=e.O()}]);