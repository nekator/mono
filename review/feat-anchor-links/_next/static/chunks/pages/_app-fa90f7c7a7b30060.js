(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92888],{86570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(54587)}])},94459:function(e,t){"use strict";var n,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return i},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return o},ACTION_FAST_REFRESH:function(){return d},ACTION_SERVER_ACTION:function(){return c},isThenable:function(){return u}});let r="refresh",l="navigate",i="restore",s="server-patch",o="prefetch",d="fast-refresh",c="server-action";function u(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(a=n||(n={})).AUTO="auto",a.FULL="full",a.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20710:function(e,t,n){"use strict";function a(e,t,n,a){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return a}}),n(8723),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},70216:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let a=n(43219),r=n(52322),l=a._(n(2784)),i=n(90988),s=n(77113),o=n(86792),d=n(57308),c=n(11082),u=n(21051),f=n(8375),h=n(6607),m=n(20710),v=n(52515),p=n(94459),b=new Set;function g(e,t,n,a,r,l){if(l||(0,s.isLocalURL)(t)){if(!a.bypassPrefetchedCheck){let r=t+"%"+n+"%"+(void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0);if(b.has(r))return;b.add(r)}Promise.resolve(l?e.prefetch(t,r):e.prefetch(t,n,a)).catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let j=l.default.forwardRef(function(e,t){let n,a;let{href:o,as:b,children:j,prefetch:y=null,passHref:N,replace:S,shallow:R,scroll:E,locale:k,onClick:C,onMouseEnter:I,onTouchStart:P,legacyBehavior:w=!1,...F}=e;n=j,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,r.jsx)("a",{children:n}));let T=l.default.useContext(u.RouterContext),A=l.default.useContext(f.AppRouterContext),_=null!=T?T:A,L=!T,O=!1!==y,B=null===y?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:M,as:U}=l.default.useMemo(()=>{if(!T){let e=x(o);return{href:e,as:b?x(b):e}}let[e,t]=(0,i.resolveHref)(T,o,!0);return{href:e,as:b?(0,i.resolveHref)(T,b):t||e}},[T,o,b]),Y=l.default.useRef(M),V=l.default.useRef(U);w&&(a=l.default.Children.only(n));let z=w?a&&"object"==typeof a&&a.ref:t,[D,K,W]=(0,h.useIntersection)({rootMargin:"200px"}),q=l.default.useCallback(e=>{(V.current!==U||Y.current!==M)&&(W(),V.current=U,Y.current=M),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[U,z,M,W,D]);l.default.useEffect(()=>{_&&K&&O&&g(_,M,U,{locale:k},{kind:B},L)},[U,M,K,k,O,null==T?void 0:T.locale,_,L,B]);let H={ref:q,onClick(e){w||"function"!=typeof C||C(e),w&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),_&&!e.defaultPrevented&&function(e,t,n,a,r,i,o,d,c){let{nodeName:u}=e.currentTarget;if("A"===u.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,s.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==o||o;"beforePopState"in t?t[r?"replace":"push"](n,a,{shallow:i,locale:d,scroll:e}):t[r?"replace":"push"](a||n,{scroll:e})};c?l.default.startTransition(f):f()}(e,_,M,U,S,R,E,k,L)},onMouseEnter(e){w||"function"!=typeof I||I(e),w&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),_&&(O||!L)&&g(_,M,U,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:B},L)},onTouchStart(e){w||"function"!=typeof P||P(e),w&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),_&&(O||!L)&&g(_,M,U,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:B},L)}};if((0,d.isAbsoluteUrl)(U))H.href=U;else if(!w||N||"a"===a.type&&!("href"in a.props)){let e=void 0!==k?k:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,m.getDomainLocale)(U,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);H.href=t||(0,v.addBasePath)((0,c.addLocale)(U,e,null==T?void 0:T.defaultLocale))}return w?l.default.cloneElement(a,H):(0,r.jsx)("a",{...F,...H,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return o}});let a=n(2784),r=n(61289),l="function"==typeof IntersectionObserver,i=new Map,s=[];function o(e){let{rootRef:t,rootMargin:n,disabled:o}=e,d=o||!l,[c,u]=(0,a.useState)(!1),f=(0,a.useRef)(null),h=(0,a.useCallback)(e=>{f.current=e},[]);return(0,a.useEffect)(()=>{if(l){if(d||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:a,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},a=s.find(e=>e.root===n.root&&e.margin===n.margin);if(a&&(t=i.get(a)))return t;let r=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},s.push(n),i.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),i.delete(a);let e=s.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,r.requestIdleCallback)(()=>u(!0));return()=>(0,r.cancelIdleCallback)(e)}},[d,n,t,c,f.current]),[h,c,(0,a.useCallback)(()=>{u(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22003:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var a=n(52322),r=n(2784),l=n(58077),i=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("button",{ref:n,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})})},6009:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var a=n(52322),r=n(2784),l=n(58077),i=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:t=>{e.onClick&&e.onClick(t)},children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})})},60767:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var a=n(52322),r=n(2784),l=n(58077),i=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("span",{"aria-hidden":"true",ref:n,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-icon",e.className),"data-icon":e.icon,"data-icon-weight":e.weight,"data-icon-variant":e.variant,title:e.title,children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})})},32924:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var a=n(52322),r=n(2784),l=n(58077),i=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-infotext",e.className),title:e.title,"data-icon":e.icon,"data-variant":e.variant,"data-size":e.size,children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})})},562:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(58077);let i=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("a",{ref:n,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,hrefLang:e.hreflang,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:t=>{e.onClick&&e.onClick(t)},children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.text?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.text})}):null,e.children]})});t.Z=i},36802:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(58077),i=n(65982);let s=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[s,o]=(0,r.useState)(()=>i.IY),[d,c]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{o(e.id||"popover-"+(0,l.Vj)()),e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("i",{ref:n,...(0,l.mS)(e,[]),id:s,className:(0,l.yI)("db-popover",e.className),"data-spacing":e.spacing,"data-gap":e.gap,"data-animation":e.animation,"data-open":e.open,"data-delay":e.delay,"data-width":e.width,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.children]})});t.Z=s},19429:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(58077),i=n(65982);let s=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[s,o]=(0,r.useState)(()=>i.IY),[d,c]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{o(e.id||"tooltip-"+(0,l.Vj)()),e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("i",{role:"tooltip","data-gap":"true",ref:n,...(0,l.mS)(e,[]),id:s,"data-emphasis":e.emphasis,"data-animation":e.animation,"data-delay":e.delay,"data-width":e.width,"data-variant":e.variant,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),className:(0,l.yI)("db-tooltip",e.className),children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.children]})});t.Z=s},84042:function(e,t,n){"use strict";n.d(t,{aw:function(){return I},kC:function(){return C},H3:function(){return d},aE:function(){return c},mX:function(){return u},Y1:function(){return l.Y},f:function(){return f.f},I3:function(){return h},wq:function(){return m},oH:function(){return v},TG:function(){return p},W4:function(){return b},Pg:function(){return g.P},EZ:function(){return x.E},aq:function(){return j},vB:function(){return i.Z},Cc:function(){return P},pK:function(){return y},Ys:function(){return w.Z},an:function(){return N},cN:function(){return S},kr:function(){return R},k8:function(){return E},GI:function(){return k},Nd:function(){return F.Z}});var a=n(52322),r=n(2784),l=n(22003),i=n(562),s=n(65982),o=n(58077),d=(0,r.forwardRef)(function(e,t){var n;let d=t||(0,r.useRef)(t),[c,u]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,a.jsxs)("div",{ref:d,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-elevation":e.elevation,children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,e.headline?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,a.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.Z,{variant:"inline",className:"db-alert-link",href:e.link.href,hreflang:e.link.hreflang,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:t=>{e.onClick&&e.onClick(t)},children:null!==(n=e.closeButtonText)&&void 0!==n?n:s.ce})}):null]})}),c=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,a.jsxs)("span",{ref:n,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:[l?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})}),u=(0,r.forwardRef)(function(e,t){var n,l,i,s,d;let c=t||(0,r.useRef)(t),[u,f]=(0,r.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[h,m]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&m(e.stylePath)},[]),(0,a.jsxs)("div",{ref:c,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-brand",e.className),children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,a.jsxs)("a",{href:null!==(n=e.anchorRef)&&void 0!==n?n:u.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-logo",src:null!==(l=e.imgSrc)&&void 0!==l?l:u.src,alt:null!==(i=e.imgAlt)&&void 0!==i?i:"",height:null!==(s=e.imgHeight)&&void 0!==s?s:u.height,width:null!==(d=e.imgWidth)&&void 0!==d?d:u.width})}),e.anchorChildren?(0,a.jsx)(a.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,a.jsx)(a.Fragment,{children:e.children})]})}),f=n(6009),h=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>!1),[d,c]=(0,r.useState)(()=>s.IY),[u,f]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{i(!0),c(e.id||"checkbox-"+(0,o.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,r.useEffect)(()=>{if(l&&document&&d){var t;let n=null===(t=document)||void 0===t?void 0:t.getElementById(d);n&&(void 0!=e.checked&&(n.checked=e.checked),void 0!==e.indeterminate&&(n.indeterminate=e.indeterminate))}},[l,e.indeterminate,e.checked]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-variant":e.labelVariant,htmlFor:d,className:(0,o.yI)("db-checkbox",e.className),children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:u})}):null,(0,a.jsx)("input",{type:"checkbox",ref:n,...(0,o.mS)(e,[]),id:d,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,required:e.required,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})}),m=(0,r.forwardRef)(function(e,t){var n,l;let i=t||(0,r.useRef)(t),[s,d]=(0,r.useState)(()=>!1),[c,u]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,a.jsxs)(f.f,{ref:i,...(0,o.mS)(e,[]),className:(0,o.yI)("db-code-docs",e.className),children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children,(0,a.jsxs)("details",{className:"code-details",onToggle:e=>void d(!s),children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:s?null!==(n=e.hideCodeLabel)&&void 0!==n?n:"Hide Code":null!==(l=e.showCodeLabel)&&void 0!==l?l:"Show Code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})}),v=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,a.jsx)("div",{ref:n,...(0,o.mS)(e,[]),id:e.id,"data-margin":e.margin,"data-variant":e.variant,"data-emphasis":e.emphasis,className:(0,o.yI)("db-divider",e.className),children:l?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:l})}):null})}),p=(0,r.forwardRef)(function(e,t){var n;let i=t||(0,r.useRef)(t),d=(0,r.useRef)(null),[c,u]=(0,r.useState)(()=>s.IY);function f(t){"Escape"===t.key&&t.preventDefault(),("close"===t||"Escape"===t.key||"DIALOG"===t.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function h(){(null==i?void 0:i.current)&&(e.open&&!i.current.open&&(d.current&&(d.current.hidden=!1),"none"===e.backdrop?i.current.show():i.current.showModal()),!e.open&&i.current.open&&(d.current&&(d.current.hidden=!0),setTimeout(()=>{var e;d.current&&(d.current.hidden=!1),null===(e=i.current)||void 0===e||e.close()},401)))}let[m,v]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{u(e.id||"drawer-"+(0,o.Vj)()),e.stylePath&&v(e.stylePath),h()},[]),(0,r.useEffect)(()=>{h()},[e.open]),(0,a.jsxs)("dialog",{className:"db-drawer",id:c,ref:i,...(0,o.mS)(e,["onClose"]),onClick:e=>{f(e)},onKeyDown:e=>f(e),"data-backdrop":e.backdrop,children:[m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:m})}):null,(0,a.jsxs)("article",{ref:d,className:(0,o.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,a.jsxs)("header",{className:"db-drawer-header",children:[(0,a.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>f("close"),children:null!==(n=e.closeButtonText)&&void 0!==n?n:s.ce})}):null]}),(0,a.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})}),b=(0,r.forwardRef)(function(e,t){var n;let i=t||(0,r.useRef)(t),[d,c]=(0,r.useState)(()=>s.IY),[u,f]=(0,r.useState)(()=>!1),[h,m]=(0,r.useState)(()=>!1),[v,b]=(0,r.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function g(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[x,j]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{f(!0),c(e.id||"header-"+(0,o.Vj)()),e.stylePath&&j(e.stylePath)},[]),(0,r.useEffect)(()=>{if(u&&document&&d&&e.forceMobile){let e=document.getElementById(d);e&&(0,o.yn)(e,{key:"data-force-mobile",value:"true"}),m(!0)}},[u]),(0,a.jsxs)("header",{ref:i,...(0,o.mS)(e,[]),className:(0,o.yI)("db-header",e.className),id:d,"data-on-forcing-mobile":e.forceMobile&&!h,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:x})}):null,(0,a.jsxs)(p,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>g(),children:[(0,a.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,a.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,a.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,a.jsxs)("div",{className:"db-header-navigation-container",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,a.jsxs)("div",{className:"db-header-action-container",children:[(0,a.jsx)("div",{className:"db-header-burger-menu-container",children:(0,a.jsx)(l.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>g(),children:null!==(n=e.burgerMenuLabel)&&void 0!==n?n:v.burgerMenuLabel})}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})}),g=n(60767),x=n(32924),j=(0,r.forwardRef)(function(e,t){var n,l,i;let d=t||(0,r.useRef)(t),[c,u]=(0,r.useState)(()=>s.IY),[f,h]=(0,r.useState)(()=>s.IY+s.Kn),[m,v]=(0,r.useState)(()=>s.IY),[p,b]=(0,r.useState)(()=>({label:s.SU,placeholder:" "})),[g,j]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{u(e.id||"input-"+(0,o.Vj)()),h(c+s.Kn),v(e.dataListId||"datalist-".concat((0,o.Vj)())),e.stylePath&&j(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,o.yI)("db-input",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,"data-icon-after":e.iconAfter,children:[g?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:g})}):null,(0,a.jsx)("label",{htmlFor:c,children:null!==(l=e.label)&&void 0!==l?l:p.label}),(0,a.jsx)("input",{ref:d,...(0,o.mS)(e,[]),id:c,name:e.name,type:e.type||"text",placeholder:null!==(i=e.placeholder)&&void 0!==i?i:p.placeholder,disabled:e.disabled,required:e.required,step:e.step,value:e.value,"aria-invalid":e.invalid,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,readOnly:e.readOnly,form:e.form,pattern:e.pattern,autoComplete:e.autocomplete,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)},list:e.dataList&&m,"aria-describedby":e.message&&f}),e.dataList?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("datalist",{id:m,children:null===(n=e.dataList)||void 0===n?void 0:n.map(e=>(0,a.jsx)("option",{value:e.key,children:e.value},m+"-option-"+e.key))})}):null,e.children,e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x.E,{size:"small",variant:e.variant,icon:(0,o.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})}),y=(0,r.forwardRef)(function(e,t){var n;let i=t||(0,r.useRef)(t),[d,c]=(0,r.useState)(()=>!1),[u,f]=(0,r.useState)(()=>!1),[h,m]=(0,r.useState)(()=>!0),[v,p]=(0,r.useState)(()=>!1),[b,g]=(0,r.useState)(()=>"sub-navigation-"+(0,o.Vj)()),[x,j]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{c(!0),e.stylePath&&j(e.stylePath)},[]),(0,r.useEffect)(()=>{void 0!==e.subNavigationExpanded&&p(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,r.useEffect)(()=>{if(void 0!==e.areaPopup)f(e.areaPopup),m(u);else if(d&&document&&b){var t;let e=null===(t=document)||void 0===t?void 0:t.getElementById(b);if(e){let t=e.children;(null==t?void 0:t.length)>0?f(!0):m(!1)}}},[d,e.areaPopup]),(0,a.jsxs)("li",{ref:i,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:x})}):null,h?null:(0,a.jsx)(a.Fragment,{children:e.children}),h?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":u,"aria-expanded":v,disabled:e.disabled,onClick:t=>{e.onClick&&e.onClick(t),u&&p(!0)},children:e.children}),(0,a.jsxs)("menu",{className:"db-sub-navigation",id:b,children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"db-mobile-navigation-back",children:(0,a.jsx)(l.Y,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),p(!1)},children:null!==(n=e.backButtonText)&&void 0!==n?n:s.YP})})}):null,e.slotSubNavigation]})]}):null]})}),N=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>!1),[d,c]=(0,r.useState)(()=>s.IY),[u,f]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{i(!0),c(e.id||"radio-"+(0,o.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,r.useEffect)(()=>{if(e.checked&&l&&document&&d){var t;let n=null===(t=document)||void 0===t?void 0:t.getElementById(d);n&&void 0!=e.checked&&(n.checked=!0)}},[l]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-variant":e.labelVariant,className:(0,o.yI)("db-radio",e.className),htmlFor:d,children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:u})}):null,(0,a.jsx)("input",{type:"radio",ref:n,...(0,o.mS)(e,[]),id:d,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,value:e.value,required:e.required,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})}),S=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,a.jsxs)("section",{ref:n,...(0,o.mS)(e,[]),id:e.id,"data-size":e.size||"medium",className:(0,o.yI)("db-section",e.className),children:[l?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:l})}):null,(0,a.jsx)("div",{"data-variant":e.variant,children:e.children})]})}),R=(0,r.forwardRef)(function(e,t){var n,l,i;let d=t||(0,r.useRef)(t),[c,u]=(0,r.useState)(()=>s.IY),[f,h]=(0,r.useState)(()=>s.IY+s.Kn),[m,v]=(0,r.useState)(()=>s.IY+s.D_);function p(e){var t;return null!==(t=e.label)&&void 0!==t?t:e.value.toString()}let[b,g]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{let t=e.id||"select-"+(0,o.Vj)();u(t),h(t+s.Kn),v(t+s.D_),e.stylePath&&g(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,o.yI)("db-select",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,a.jsx)("label",{htmlFor:c,children:null!==(l=e.label)&&void 0!==l?l:s.SU}),(0,a.jsxs)("select",{ref:d,...(0,o.mS)(e,[]),"aria-invalid":e.invalid,required:e.required,disabled:e.disabled,id:c,name:e.name,value:e.value,autoComplete:e.autocomplete,onClick:t=>{e.onClick&&e.onClick(t)},onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)},"aria-describedby":e.message&&f||m,children:[(0,a.jsx)("option",{hidden:!0}),e.options?(0,a.jsx)(a.Fragment,{children:null===(n=e.options)||void 0===n?void 0:n.map(e=>{var t;return(0,a.jsxs)(a.Fragment,{children:[e.options?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("optgroup",{label:p(e),children:null===(t=e.options)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:p(e)},"option-"+e.value))},"optgroup-"+e.value)}):null,e.options?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:p(e)},"option-"+e.value)})]})})}):null,e.children]}),(0,a.jsx)("span",{id:m,children:null!==(i=e.placeholder)&&void 0!==i?i:e.label}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x.E,{size:"small",variant:e.variant,icon:(0,o.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})}),E=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);function i(){return e.removeButton?e.removeButton:"Remove tag"}let[s,d]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,a.jsxs)("div",{ref:n,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-tag",e.className),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,"data-icon":e.icon,"data-no-text":e.noText,"data-overflow":e.overflow,children:[s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:s})}):null,e.children,e.text?(0,a.jsx)(a.Fragment,{children:e.text}):null,"removable"===e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Y,{icon:"close",size:"small",variant:"text",className:"db-tab-remove-button",onClick:t=>void(e.onRemove&&e.onRemove()),noText:!0,title:i(),children:i()})}):null]})}),k=(0,r.forwardRef)(function(e,t){var n,l,i;let d=t||(0,r.useRef)(t),[c,u]=(0,r.useState)(()=>s.IY),[f,h]=(0,r.useState)(()=>s.IY+s.Kn),[m,v]=(0,r.useState)(()=>({label:s.SU,placeholder:" ",rows:"4"})),[p,b]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&b(e.stylePath),u(e.id||"textarea-"+(0,o.Vj)()),h(c+s.Kn)},[]),(0,a.jsxs)("div",{className:(0,o.yI)("db-textarea",e.className),"data-label-variant":e.labelVariant,"data-variant":e.variant,children:[p?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:p})}):null,(0,a.jsx)("label",{htmlFor:c,children:null!==(n=e.label)&&void 0!==n?n:m.label}),(0,a.jsx)("textarea",{ref:d,...(0,o.mS)(e,[]),id:c,"data-resize":e.resize,disabled:e.disabled,required:e.required,readOnly:e.readOnly,"aria-invalid":e.invalid,form:e.form,maxLength:e.maxLength,minLength:e.minLength,name:e.name,wrap:e.wrap,spellCheck:e.spellCheck,autoComplete:e.autocomplete,onChange:t=>{e.onChange&&e.onChange(t),e.change&&e.change(t),t.target},onBlur:t=>{e.onBlur&&e.onBlur(t),e.blur&&e.blur(t)},onFocus:t=>{e.onFocus&&e.onFocus(t),e.focus&&e.focus(t)},value:e.value,"aria-describedby":e.message&&f,placeholder:null!==(l=e.placeholder)&&void 0!==l?l:m.placeholder,rows:null!==(i=e.rows)&&void 0!==i?i:m.rows,cols:e.cols}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(x.E,{size:"small",variant:e.variant,icon:(0,o.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})}),C=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>s.IY),[d,c]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{i(e.id||"accordion-item-"+(0,o.Vj)()),e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("details",{ref:n,...(0,o.mS)(e,[]),id:l,className:(0,o.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,name:e.name,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,a.jsxs)("summary",{onClick:t=>{null==t||t.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,a.jsx)(a.Fragment,{children:e.title}):null,e.title?null:(0,a.jsx)(a.Fragment,{children:e.slotTitle})]}),(0,a.jsxs)("div",{children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.content?null:(0,a.jsx)(a.Fragment,{children:e.children})]})]})}),I=(0,r.forwardRef)(function(e,t){var n;let l=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>[]),[d,c]=(0,r.useState)(()=>""),[u,f]=(0,r.useState)(()=>!1),[h,m]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&m(e.stylePath),f(!0)},[]),(0,r.useEffect)(()=>{if(l.current&&u){let t=l.current.getElementsByTagName("details");if(t){let n=[];Array.from(t).forEach((t,a)=>{var r;let l=t.id;(t.open||(null===(r=e.initOpenIndex)||void 0===r?void 0:r.includes(a)))&&n.push(l);let i=t.getElementsByTagName("summary");(null==i?void 0:i.length)>0&&i[0].addEventListener("click",()=>{c(l)})}),"single"===e.behaviour&&n.length>1&&(n=[n[0]]),s(n),f(!1)}}},[l.current,u]),(0,r.useEffect)(()=>{(null==d?void 0:d.length)>0&&(i.includes(d)?"single"===e.behaviour?s([]):s(i.filter(e=>e!==d)):"single"===e.behaviour?s([d]):s([...i,d]),e.onChange&&e.onChange(i),c(""))},[d]),(0,r.useEffect)(()=>{if(null==l?void 0:l.current){let e=l.current.getElementsByTagName("details");e&&Array.from(e).forEach(e=>{e.open=i.includes(e.id)})}},[i]),(0,a.jsxs)("div",{ref:l,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-accordion",e.className),children:[h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:h})}):null,e.items?null:(0,a.jsx)(a.Fragment,{children:e.children}),e.items?(0,a.jsx)(a.Fragment,{children:null===(n=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.items))||void 0===n?void 0:n.map((e,t)=>(0,a.jsx)(C,{title:e.title,disabled:e.disabled,content:e.content},"accordion-item-".concat(e.title,"-").concat(t)))}):null]})}),P=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[l,i]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,a.jsxs)("nav",{ref:n,...(0,o.mS)(e,[]),id:e.id,className:(0,o.yI)("db-main-navigation",e.className),children:[l?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:l})}):null,(0,a.jsx)("menu",{children:e.children})]})}),w=n(36802),F=n(19429)},65982:function(e,t,n){"use strict";var a,r,l,i,s,o,d;n.d(t,{$f:function(){return p},DM:function(){return b},D_:function(){return h},IY:function(){return c},Kn:function(){return f},SU:function(){return u},YP:function(){return m},ce:function(){return v},iw:function(){return a},r$:function(){return l}});let c="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",f="-message",h="-placeholder",m="Back",v="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let p=Object.entries(a).map(e=>{let[,t]=e;return t});(r||(r={})).PRIMARY="primary",(o=l||(l={})).BASE="base",o.BASE_STRONG="base-strong",o.BASE_TRANSPARENT_SEMI="base-transparent-semi",o.BASE_TRANSPARENT_FULL="base-transparent-full",o.NEUTRAL="neutral",o.NEUTRAL_STRONG="neutral-strong",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.BRAND="brand",o.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",o.BRAND_TRANSPARENT_FULL="brand-transparent-full",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.WARNING="warning",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full";let b=Object.entries(l).map(e=>{let[,t]=e;return t});Object.entries(r).map(e=>{let[,t]=e;return t}),(d=i||(i={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,t]=e;return t})},58077:function(e,t,n){"use strict";n.d(t,{Vj:function(){return a},mS:function(){return s},mT:function(){return i},yI:function(){return l},yn:function(){return r}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},i=(e,t)=>t||(e&&"adaptive"!==e?void 0:"none"),s=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{})},54587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a=n(52322),r=n(45392),l=n(45847),i=n.n(l);n(30955),n(93496),n(99819),n(56523);var s=n(39097),o=n.n(s),d=n(84042),c=e=>{let{id:t}=e;return t?(0,a.jsx)(o(),{href:"#".concat(t),scroll:!1,children:(0,a.jsx)(d.Pg,{icon:"add_link",children:t})}):null},u=e=>{let{Component:t,pageProps:n}=e;return(0,a.jsxs)(r.Z,{components:{h1:e=>(0,a.jsxs)("h1",{...e,children:[e.children,(0,a.jsx)(c,{id:e.id})]}),h2:e=>(0,a.jsxs)("h2",{...e,children:[e.children,(0,a.jsx)(c,{id:e.id})]}),h3:e=>(0,a.jsxs)("h3",{...e,children:[e.children,(0,a.jsx)(c,{id:e.id})]}),h4:e=>(0,a.jsxs)("h4",{...e,children:[e.children,(0,a.jsx)(c,{id:e.id})]}),h5:e=>(0,a.jsxs)("h5",{...e,children:[e.children,(0,a.jsx)(c,{id:e.id})]}),h6:e=>(0,a.jsxs)("h6",{...e,children:[e.children,(0,a.jsx)(c,{id:e.id})]}),a:e=>(0,a.jsx)("a",{target:"_blank",referrerPolicy:"no-referrer",...e}),img:e=>{var t;return(0,a.jsx)("img",{...e,src:(null===(t=e.src)||void 0===t?void 0:t.startsWith("http"))?e.src:"".concat("/mono/review/feat-anchor-links").concat(e.src)})}},children:[(0,a.jsx)(i(),{src:"/mono/review/feat-anchor-links/iframe-resizer/iframeResizer.contentWindow.js"}),(0,a.jsx)(t,{...n})]})}},30955:function(){},93496:function(){},56523:function(){},99819:function(){},39097:function(e,t,n){e.exports=n(70216)},45847:function(e,t,n){e.exports=n(28263)},45392:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},a:function(){return i}});var a=n(2784);let r={},l=a.createContext(r);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[49774,40179],function(){return t(86570),t(5244)}),_N_E=e.O()}]);