(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2501],{2997:function(e,t,n){"use strict";let r,a,l;n.d(t,{F:function(){return ep},H:function(){return y},b:function(){return em},c:function(){return S},g:function(){return E},h:function(){return g},p:function(){return eO},r:function(){return ey}});let s=!1,i=!1,o=!1,d=!1,$=!1,c=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1],()=>{}},u=(e,t)=>()=>{},h="http://www.w3.org/1999/xlink",f={},b=e=>null!=e,m=e=>"object"==(e=typeof e)||"function"===e;function p(e){var t,n,r;return null!==(r=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==r?r:void 0}let g=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];let l=null,s=null,i=null,o=!1,d=!1,$=[],c=t=>{for(let n=0;n<t.length;n++)Array.isArray(l=t[n])?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!m(l))&&(l=String(l)),o&&d?$[$.length-1].$text$+=l:$.push(o?v(null,l):l),d=o)};if(c(r),t){t.key&&(s=t.key),t.name&&(i=t.name);{let e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,$,N);let u=v(e,null);return u.$attrs$=t,$.length>0&&(u.$children$=$),u.$key$=s,u.$name$=i,u},v=(e,t)=>{let n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n.$attrs$=null,n.$key$=null,n.$name$=null,n},y={},w=e=>e&&e.$tag$===y,N={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(k)},R=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),k=e=>{if("function"==typeof e.vtag){let t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),g(e.vtag,t,...e.vchildren||[])}let t=v(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},x=(e,t)=>{if(null!=e&&!m(e)){if(4&t)return"false"!==e&&(""===e||!!e);if(2&t)return parseFloat(e);if(1&t)return String(e)}return e},E=e=>ev(e).$hostElement$,S=(e,t,n)=>{let r=E(e);return{emit:e=>T(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},T=(e,t,n)=>{let r=eC.ce(t,n);return e.dispatchEvent(r),r},C=new WeakMap,O=(e,t,n)=>{let r=eE.get(e);ej&&n?"string"==typeof(r=r||new CSSStyleSheet)?r=t:r.replaceSync(t):r=t,eE.set(e,r)},j=(e,t,n,r)=>{var a;let l=M(t),s=eE.get(l);if(e=11===e.nodeType?e:eT,s){if("string"==typeof s){let t;e=e.head||e;let n=C.get(e);if(n||C.set(e,n=new Set),!n.has(l)){{(t=eT.createElement("style")).innerHTML=s;let n=null!==(a=eC.$nonce$)&&void 0!==a?a:p(eT);null!=n&&t.setAttribute("nonce",n),e.insertBefore(t,e.querySelector("link"))}n&&n.add(l)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])}return l},L=e=>{let t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,a=c("attachStyles",t.$tagName$),l=j(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=l,n.classList.add(l+"-h"),2&r&&n.classList.add(l+"-s")),a()},M=(e,t)=>"sc-"+e.$tagName$,P=(e,t,n,r,a,l)=>{if(n!==r){let s=eN(e,t),i=t.toLowerCase();if("class"===t){let t=e.classList,a=I(n),l=I(r);t.remove(...a.filter(e=>e&&!l.includes(e))),t.add(...l.filter(e=>e&&!a.includes(e)))}else if("style"===t){for(let t in n)r&&null!=r[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(let t in r)n&&r[t]===n[t]||(t.includes("-")?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("key"===t);else if("ref"===t)r&&r(e);else if(s||"o"!==t[0]||"n"!==t[1]){let o=m(r);if((s||o&&null!==r)&&!a)try{if(e.tagName.includes("-"))e[t]=r;else{let a=null==r?"":r;"list"===t?s=!1:(null==n||e[t]!=a)&&(e[t]=a)}}catch(e){}let d=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,d=!0),null==r||!1===r?(!1!==r||""===e.getAttribute(t))&&(d?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!s||4&l||a)&&!o&&(r=!0===r?"":r,d?e.setAttributeNS(h,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):eN(eS,i)?i.slice(2):i[2]+t.slice(3),n&&eC.rel(e,t,n,!1),r&&eC.ael(e,t,r,!1)}},A=/\s/,I=e=>e?e.split(A):[],_=(e,t,n,r)=>{let a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,l=e&&e.$attrs$||f,s=t.$attrs$||f;for(r in l)r in s||P(a,r,l[r],void 0,n,t.$flags$);for(r in s)P(a,r,l[r],s[r],n,t.$flags$)},B=(e,t,n,i)=>{let $,c,u;let h=t.$children$[n],f=0;if(s||(o=!0,"slot"!==h.$tag$||(r&&i.classList.add(r+"-s"),h.$flags$|=h.$children$?2:1)),null!==h.$text$)$=h.$elm$=eT.createTextNode(h.$text$);else if(1&h.$flags$)$=h.$elm$=eT.createTextNode("");else{if(d||(d="svg"===h.$tag$),$=h.$elm$=eT.createElementNS(d?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&h.$flags$?"slot-fb":h.$tag$),d&&"foreignObject"===h.$tag$&&(d=!1),_(null,h,d),b(r)&&$["s-si"]!==r&&$.classList.add($["s-si"]=r),h.$children$)for(f=0;f<h.$children$.length;++f)(c=B(e,h,f,$))&&$.appendChild(c);"svg"===h.$tag$?d=!1:"foreignObject"===$.tagName&&(d=!0)}return $["s-hn"]=l,3&h.$flags$&&($["s-sr"]=!0,$["s-cr"]=a,$["s-sn"]=h.$name$||"",(u=e&&e.$children$&&e.$children$[n])&&u.$tag$===h.$tag$&&e.$elm$&&z(e.$elm$,!1)),$},z=(e,t)=>{eC.$flags$|=1;let n=e.childNodes;for(let e=n.length-1;e>=0;e--){let r=n[e];r["s-hn"]!==l&&r["s-ol"]&&(F(r).insertBefore(r,D(r)),r["s-ol"].remove(),r["s-ol"]=void 0,o=!0),t&&z(r,t)}eC.$flags$&=-2},U=(e,t,n,r,a,s)=>{let i,o=e["s-cr"]&&e["s-cr"].parentNode||e;for(o.shadowRoot&&o.tagName===l&&(o=o.shadowRoot);a<=s;++a)r[a]&&(i=B(null,n,a,e))&&(r[a].$elm$=i,o.insertBefore(i,D(t)))},q=(e,t,n,r,a)=>{for(;t<=n;++t)(r=e[t])&&(a=r.$elm$,Q(r),i=!0,a["s-ol"]?a["s-ol"].remove():z(a,!0),a.remove())},H=(e,t,n,r)=>{let a,l,s=0,i=0,o=0,d=0,$=t.length-1,c=t[0],u=t[$],h=r.length-1,f=r[0],b=r[h];for(;s<=$&&i<=h;)if(null==c)c=t[++s];else if(null==u)u=t[--$];else if(null==f)f=r[++i];else if(null==b)b=r[--h];else if(V(c,f))W(c,f),c=t[++s],f=r[++i];else if(V(u,b))W(u,b),u=t[--$],b=r[--h];else if(V(c,b))("slot"===c.$tag$||"slot"===b.$tag$)&&z(c.$elm$.parentNode,!1),W(c,b),e.insertBefore(c.$elm$,u.$elm$.nextSibling),c=t[++s],b=r[--h];else if(V(u,f))("slot"===c.$tag$||"slot"===b.$tag$)&&z(u.$elm$.parentNode,!1),W(u,f),e.insertBefore(u.$elm$,c.$elm$),u=t[--$],f=r[++i];else{for(o=-1,d=s;d<=$;++d)if(t[d]&&null!==t[d].$key$&&t[d].$key$===f.$key$){o=d;break}o>=0?((l=t[o]).$tag$!==f.$tag$?a=B(t&&t[i],n,o,e):(W(l,f),t[o]=void 0,a=l.$elm$),f=r[++i]):(a=B(t&&t[i],n,i,e),f=r[++i]),a&&F(c.$elm$).insertBefore(a,D(c.$elm$))}s>$?U(e,null==r[h+1]?null:r[h+1].$elm$,n,r,i,h):i>h&&q(t,s,$)},V=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),D=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,W=(e,t)=>{let n;let r=t.$elm$=e.$elm$,a=e.$children$,l=t.$children$,s=t.$tag$,i=t.$text$;null===i?(d="svg"===s||"foreignObject"!==s&&d,"slot"===s||_(e,t,d),null!==a&&null!==l?H(r,a,t,l):null!==l?(null!==e.$text$&&(r.textContent=""),U(r,null,t,l,0,l.length-1)):null!==a&&q(a,0,a.length-1),d&&"svg"===s&&(d=!1)):(n=r["s-cr"])?n.parentNode.textContent=i:e.$text$!==i&&(r.data=i)},G=e=>{let t,n,r,a,l,s;let i=e.childNodes;for(n=0,r=i.length;n<r;n++)if(1===(t=i[n]).nodeType){if(t["s-sr"]){for(a=0,l=t["s-sn"],t.hidden=!1;a<r;a++)if(s=i[a].nodeType,i[a]["s-hn"]!==t["s-hn"]||""!==l){if(1===s&&l===i[a].getAttribute("slot")){t.hidden=!0;break}}else if(1===s||3===s&&""!==i[a].textContent.trim()){t.hidden=!0;break}}G(t)}},Z=[],J=e=>{let t,n,r,a,l,s;let o=0,d=e.childNodes,$=d.length;for(;o<$;o++){if((t=d[o])["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(r=n.parentNode.childNodes,a=t["s-sn"],s=r.length-1;s>=0;s--)(n=r[s])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(K(n,a)?(l=Z.find(e=>e.$nodeToRelocate$===n),i=!0,n["s-sn"]=n["s-sn"]||a,l?l.$slotRefNode$=t:Z.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&Z.map(e=>{K(e.$nodeToRelocate$,n["s-sn"])&&(l=Z.find(e=>e.$nodeToRelocate$===n))&&!e.$slotRefNode$&&(e.$slotRefNode$=l.$slotRefNode$)})):Z.some(e=>e.$nodeToRelocate$===n)||Z.push({$nodeToRelocate$:n}));1===t.nodeType&&J(t)}},K=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,Q=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Q)},X=(e,t)=>{let n=e.$hostElement$,d=e.$cmpMeta$,$=e.$vnode$||v(null,null),c=w(t)?t:g(null,null,t);if(l=n.tagName,d.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},d.$attrsToReflect$.map(e=>{let[t,r]=e;return c.$attrs$[r]=n[t]})),c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=$.$elm$=n.shadowRoot||n,r=n["s-sc"],a=n["s-cr"],s=(1&d.$flags$)!=0,i=!1,W($,c),eC.$flags$|=1,o){let e,t,n,r,a,l;J(c.$elm$);let s=0;for(;s<Z.length;s++)(t=(e=Z[s]).$nodeToRelocate$)["s-ol"]||((n=eT.createTextNode(""))["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(s=0;s<Z.length;s++)if(t=(e=Z[s]).$nodeToRelocate$,e.$slotRefNode$){for(r=e.$slotRefNode$.parentNode,a=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if((l=n["s-nr"])&&l["s-sn"]===t["s-sn"]&&r===l.parentNode&&(!(l=l.nextSibling)||!l["s-nr"])){a=l;break}(a||r===t.parentNode)&&t.nextSibling===a||t===a||(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),r.insertBefore(t,a))}else 1===t.nodeType&&(t.hidden=!0)}i&&G(c.$elm$),eC.$flags$&=-2,Z.length=0},Y=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},ee=(e,t)=>{if(e.$flags$|=16,4&e.$flags$){e.$flags$|=512;return}Y(e,e.$ancestorComponent$);let n=()=>et(e,t);return e_(n)},et=(e,t)=>{let n;let r=c("scheduleUpdate",e.$cmpMeta$.$tagName$),a=e.$lazyInstance$;return t&&(n=es(a,"componentWillLoad")),r(),ei(n,()=>en(e,a,t))},en=async(e,t,n)=>{let r=e.$hostElement$,a=c("update",e.$cmpMeta$.$tagName$),l=r["s-rc"];n&&L(e);let s=c("render",e.$cmpMeta$.$tagName$);er(e,t),l&&(l.map(e=>e()),r["s-rc"]=void 0),s(),a();{let t=r["s-p"],n=()=>ea(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},er=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,X(e,t)}catch(t){eR(t,e.$hostElement$)}return null},ea=e=>{let t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=c("postUpdate",t),a=e.$ancestorComponent$;64&e.$flags$?r():(e.$flags$|=64,eo(n),r(),e.$onReadyResolve$(n),a||el()),e.$onInstanceResolve$(n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&eI(()=>ee(e,!1)),e.$flags$&=-517},el=e=>{eo(eT.documentElement),eI(()=>T(eS,"appload",{detail:{namespace:"db-ui-elements"}}))},es=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){eR(e)}},ei=(e,t)=>e&&e.then?e.then(t):t(),eo=e=>e.classList.add("hydrated"),ed=(e,t)=>ev(e).$instanceValues$.get(t),e$=(e,t,n,r)=>{let a=ev(e),l=a.$hostElement$,s=a.$instanceValues$.get(t),i=a.$flags$,o=a.$lazyInstance$;n=x(n,r.$members$[t][0]);let d=Number.isNaN(s)&&Number.isNaN(n),$=n!==s&&!d;if((!(8&i)||void 0===s)&&$&&(a.$instanceValues$.set(t,n),o)){if(r.$watchers$&&128&i){let e=r.$watchers$[t];e&&e.map(e=>{try{o[e](n,s,t)}catch(e){eR(e,l)}})}(18&i)==2&&ee(a,!1)}},ec=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);let r=Object.entries(t.$members$),a=e.prototype;if(r.map(e=>{let[r,[l]]=e;31&l||2&n&&32&l?Object.defineProperty(a,r,{get(){return ed(this,r)},set(e){e$(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(a,r,{value(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a=ev(this);return a.$onInstancePromise$.then(()=>a.$lazyInstance$[r](...t))}})}),1&n){let n=new Map;a.attributeChangedCallback=function(e,t,r){eC.jmp(()=>{let t=n.get(e);if(this.hasOwnProperty(t))r=this[t],delete this[t];else if(a.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==r)return;this[t]=(null!==r||"boolean"!=typeof this[t])&&r})},e.observedAttributes=r.filter(e=>{let[t,n]=e;return 15&n[0]}).map(e=>{let[r,a]=e,l=a[1]||r;return n.set(l,r),512&a[0]&&t.$attrsToReflect$.push([r,l]),l})}}return e},eu=async(e,t,n,r,a)=>{if((32&t.$flags$)==0){{if(t.$flags$|=32,(a=ex(n)).then){let e=u();a=await a,e()}a.isProxied||(n.$watchers$=a.watchers,ec(a,n,2),a.isProxied=!0);let e=c("createInstance",n.$tagName$);t.$flags$|=8;try{new a(t)}catch(e){eR(e)}t.$flags$&=-9,t.$flags$|=128,e()}if(a.style){let e=a.style,t=M(n);if(!eE.has(t)){let r=c("registerStyles",n.$tagName$);O(t,e,!!(1&n.$flags$)),r()}}}let l=t.$ancestorComponent$,s=()=>ee(t,!0);l&&l["s-rc"]?l["s-rc"].push(s):s()},eh=e=>{if((1&eC.$flags$)==0){let t=ev(e),n=t.$cmpMeta$,r=c("connectedCallback",n.$tagName$);if(!(1&t.$flags$)){t.$flags$|=1,12&n.$flags$&&ef(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Y(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map(t=>{let[n,[r]]=t;if(31&r&&e.hasOwnProperty(n)){let t=e[n];delete e[n],e[n]=t}}),eu(e,t,n)}r()}},ef=e=>{let t=e["s-cr"]=eT.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},eb=e=>{(1&eC.$flags$)==0&&ev(e)},em=function(e){var t;let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=c(),l=[],s=r.exclude||[],i=eS.customElements,o=eT.head,d=o.querySelector("meta[charset]"),$=eT.createElement("style"),u=[],h=!0;Object.assign(eC,r),eC.$resourcesUrl$=new URL(r.resourcesUrl||"./",eT.baseURI).href,e.map(e=>{e[1].map(t=>{let r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2],r.$attrsToReflect$=[],r.$watchers$={};let a=r.$tagName$,o=class extends HTMLElement{connectedCallback(){n&&(clearTimeout(n),n=null),h?u.push(this):eC.jmp(()=>eh(this))}disconnectedCallback(){eC.jmp(()=>eb(this))}componentOnReady(){return ev(this).$onReadyPromise$}constructor(e){super(e),e=this,ew(e,r),1&r.$flags$&&e.attachShadow({mode:"open"})}};r.$lazyBundleId$=e[0],s.includes(a)||i.get(a)||(l.push(a),i.define(a,ec(o,r,1)))})});{$.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles","");let e=null!==(t=eC.$nonce$)&&void 0!==t?t:p(eT);null!=e&&$.setAttribute("nonce",e),o.insertBefore($,d?d.nextSibling:o.firstChild)}h=!1,u.length?u.map(e=>e.connectedCallback()):eC.jmp(()=>n=setTimeout(el,30)),a()},ep=(e,t)=>t,eg=new WeakMap,ev=e=>eg.get(e),ey=(e,t)=>eg.set(t.$lazyInstance$=e,t),ew=(e,t)=>{let n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise(e=>n.$onInstanceResolve$=e),n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[],eg.set(e,n)},eN=(e,t)=>t in e,eR=(e,t)=>(0,console.error)(e,t),ek=new Map,ex=(e,t,r)=>{let a=e.$tagName$.replace(/-/g,"_"),l=e.$lazyBundleId$,s=ek.get(l);if(s)return s[a];if(!r||!BUILD.hotModuleReplacement){let e=e=>(ek.set(l,e),e[a]);switch(l){case"db-button_2":return n.e(8130).then(n.bind(n,8130)).then(e,eR);case"db-accordion":return n.e(2754).then(n.bind(n,2754)).then(e,eR);case"db-brand":return n.e(1534).then(n.bind(n,1534)).then(e,eR);case"db-breadcrumb":return n.e(4533).then(n.bind(n,4533)).then(e,eR);case"db-card":return n.e(9319).then(n.bind(n,9319)).then(e,eR);case"db-cards":return n.e(2858).then(n.bind(n,2858)).then(e,eR);case"db-checkbox":return n.e(6323).then(n.bind(n,6323)).then(e,eR);case"db-chip":return n.e(7458).then(n.bind(n,7458)).then(e,eR);case"db-dropdown":return n.e(9650).then(n.bind(n,9650)).then(e,eR);case"db-footer":return n.e(6245).then(n.bind(n,6245)).then(e,eR);case"db-header":return n.e(7491).then(n.bind(n,7491)).then(e,eR);case"db-image":return n.e(5514).then(n.bind(n,5514)).then(e,eR);case"db-input":return n.e(942).then(n.bind(n,942)).then(e,eR);case"db-language-switcher":return n.e(8698).then(n.bind(n,8698)).then(e,eR);case"db-link":return n.e(7213).then(n.bind(n,7213)).then(e,eR);case"db-linklist":return n.e(4637).then(n.bind(n,4637)).then(e,eR);case"db-logo":return n.e(874).then(n.bind(n,874)).then(e,eR);case"db-mainnavigation":return n.e(5555).then(n.bind(n,5555)).then(e,eR);case"db-meta":return n.e(72).then(n.bind(n,72)).then(e,eR);case"db-metanavigation":return n.e(8922).then(n.bind(n,8922)).then(e,eR);case"db-notification":return n.e(2244).then(n.bind(n,2244)).then(e,eR);case"db-notifications":return n.e(8915).then(n.bind(n,8915)).then(e,eR);case"db-overflow-menu":return n.e(3699).then(n.bind(n,3699)).then(e,eR);case"db-page":return n.e(5974).then(n.bind(n,5974)).then(e,eR);case"db-pagination":return n.e(2428).then(n.bind(n,2428)).then(e,eR);case"db-progress":return n.e(5317).then(n.bind(n,5317)).then(e,eR);case"db-radio":return n.e(5028).then(n.bind(n,5028)).then(e,eR);case"db-sidenavi":return n.e(9821).then(n.bind(n,9821)).then(e,eR);case"db-tab":return n.e(7823).then(n.bind(n,7823)).then(e,eR);case"db-tab-bar":return n.e(1584).then(n.bind(n,1584)).then(e,eR);case"db-table":return n.e(3324).then(n.bind(n,3324)).then(e,eR);case"db-tag":return n.e(4806).then(n.bind(n,4806)).then(e,eR);case"db-textarea":return n.e(7900).then(n.bind(n,7900)).then(e,eR);case"db-toggle":return n.e(3469).then(n.bind(n,3469)).then(e,eR);case"github-version-switcher":return n.e(915).then(n.bind(n,915)).then(e,eR);case"db-headline":return n.e(1498).then(n.bind(n,1498)).then(e,eR);case"db-select":return n.e(258).then(n.bind(n,258)).then(e,eR)}}return n(3876)("./".concat(l,".entry.js")).then(e=>(ek.set(l,e),e[a]),eR)},eE=new Map,eS=window,eT=eS.document||{head:{}},eC={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)},eO=e=>Promise.resolve(e),ej=(()=>{try{return new CSSStyleSheet,"function"==typeof new CSSStyleSheet().replaceSync}catch(e){}return!1})(),eL=[],eM=[],eP=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){eR(e)}e.length=0},eA=()=>{eP(eL),eP(eM),($=eL.length>0)&&eC.raf(eA)},eI=e=>eO().then(e),e_=e=>{eM.push(e),$||($=!0,4&eC.$flags$?eI(eA):eC.raf(eA))}},6744:function(e,t,n){"use strict";n.d(t,{Bl:function(){return p},fw:function(){return g},ff:function(){return v},Pm:function(){return y},rG:function(){return w},T2:function(){return N}});var r=n(2784);let a=e=>e.toLowerCase().split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),l=e=>e.replace(/([A-Z])/g,e=>"-".concat(e[0].toLowerCase())),s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){let r=i(e.classList,t,n);""!==r&&(e.className=r),Object.keys(t).forEach(n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n){if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){let r=n.substring(2),a=r[0].toLowerCase()+r.substring(1);o(a)||d(e,a,t[n])}else{e[n]=t[n];let r=typeof t[n];"string"===r&&e.setAttribute(l(n),t[n])}}})}},i=(e,t,n)=>{let r=t.className||t.class,a=n.className||n.class,l=$(e),s=$(r?r.split(" "):[]),i=$(a?a.split(" "):[]),o=[];return l.forEach(e=>{s.has(e)?(o.push(e),s.delete(e)):i.has(e)||o.push(e)}),s.forEach(e=>o.push(e)),o.join(" ")},o=e=>{if("undefined"==typeof document)return!0;{let t="on"+e,n=t in document;if(!n){let e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},d=(e,t,n)=>{let r=e.__events||(e.__events={}),a=r[t];a&&e.removeEventListener(t,a),e.addEventListener(t,r[t]=function(e){n&&n.call(this,e)})},$=e=>{let t=new Map;return e.forEach(e=>t.set(e,e)),t},c=(e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)},u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{c(t,e)})}},h=(e,t)=>{let n=(t,n)=>r.createElement(e,Object.assign({},t,{forwardedRef:n}));return n.displayName=t,r.forwardRef(n)};var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};let b=(e,t,n,i)=>{void 0!==i&&i();let d=a(e),$=class extends r.Component{componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(e){s(this.componentEl,this.props,e)}render(){let t=this.props,{children:a,forwardedRef:s,style:i,className:d,ref:$}=t,c=f(t,["children","forwardedRef","style","className","ref"]),h=Object.keys(c).reduce((e,t)=>{let n=c[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){let r=t.substring(2).toLowerCase();"undefined"!=typeof document&&o(r)&&(e[t]=n)}else{let r=typeof n;("string"===r||"boolean"===r||"number"===r)&&(e[l(t)]=n)}return e},{});n&&(h=n(this.props,h));let b=Object.assign(Object.assign({},h),{ref:u(s,this.setComponentElRef),style:i});return(0,r.createElement)(e,b,a)}static get displayName(){return d}constructor(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}};return t&&($.contextType=t),h($,d)};var m=n(2997);!function(){if(void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),(0,m.p)().then(()=>(0,m.b)([["db-card",[[4,"db-card",{alt:[513],header:[513],content:[513],image:[513],illustration:[513],uiCoreIllustrationPath:[513,"illustration-path"],variant:[513]}]]],["db-chip",[[4,"db-chip",{datatype:[513],disabled:[516],icon:[513],iconafter:[513],input_id:[513],name:[513],selected:[516],variant:[513]}]]],["db-link",[[4,"db-link",{current:[513],href:[513],hreflang:[513],icon:[513],iconVariant:[513,"icon-variant"],icononly:[516],media:[513],rel:[513],target:[513],type:[513],text:[513]}]]],["db-table",[[2,"db-table",{tabledata:[1],align:[513],verticalalign:[513],bodyalign:[513],bodyverticalalign:[513],border:[513],density:[513],fontsize:[513],stripes:[513],sticky:[513]}]]],["db-tag",[[4,"db-tag",{icon:[513],iconafter:[513],small:[516],variant:[513]}]]],["github-version-switcher",[[1,"github-version-switcher",{owner:[1],repo:[1],groups:[32],currentBranch:[32],cleanOwner:[32],cleanRepo:[32]}]]],["db-accordion",[[4,"db-accordion",{emphasis:[4],size:[1],summary:[1]}]]],["db-brand",[[4,"db-brand",{siteNameLink:[516,"site-name-link"],alt:[513],anchorRef:[513,"href"],anchorTitle:[513,"title"],anchorRelation:[513,"rel"],src:[513]}]]],["db-breadcrumb",[[4,"db-breadcrumb",{data:[513],arialabel:[513]}]]],["db-cards",[[4,"db-cards"]]],["db-checkbox",[[2,"db-checkbox",{autofocus:[516],checked:[516],disabled:[516],input_id:[513],label:[513],name:[513],required:[516],value:[513],indeterminate:[4],setIndeterminate:[64]}]]],["db-dropdown",[[4,"db-dropdown",{data:[513],opposite:[516],summary:[513]}]]],["db-footer",[[6,"db-footer",{border:[4],copyright:[4]}]]],["db-header",[[4,"db-header"]]],["db-image",[[2,"db-image",{src:[513],modernformat:[1],srcset:[1],alt:[513],width:[514],height:[514],loading:[1],caption:[1],responsivemediaquery:[1],ariaid:[1]}]]],["db-input",[[6,"db-input",{ariainvalid:[513],ariarequired:[513],autocomplete:[513],autofocus:[516],description:[513],dirname:[513],disabled:[516],input_id:[513],label:[513],list:[513],maxlength:[514],minlength:[514],name:[513],pattern:[513],placeholder:[513],readonly:[516],required:[516],size:[514],type:[513],value:[513],variant:[513]}]]],["db-language-switcher",[[4,"db-language-switcher",{ariaSelectedIndex:[514,"aria-selected-index"],data:[513]}]]],["db-linklist",[[4,"db-linklist",{data:[513]}]]],["db-logo",[[0,"db-logo",{size:[1]}]]],["db-mainnavigation",[[4,"db-mainnavigation",{siteName:[513,"site-name"],data:[513]}]]],["db-meta",[[1,"db-meta"]]],["db-metanavigation",[[4,"db-metanavigation",{data:[513]}]]],["db-notification",[[4,"db-notification",{variant:[513],type:[513]}]]],["db-notifications",[[4,"db-notifications",{arialive:[513],variant:[513]}]]],["db-overflow-menu",[[4,"db-overflow-menu",{data:[513],opposite:[516],summary:[513]}]]],["db-page",[[4,"db-page"]]],["db-pagination",[[0,"db-pagination",{ellipsisstart:[516],ellipsisend:[516],currentpage:[514],pages:[514],count:[514],titleprevious:[513],titlenext:[513],titlepagination:[513],textprevious:[513],textnext:[513],arialabel:[513],ariaid:[1]}]]],["db-progress",[[2,"db-progress",{value:[514],max:[514],htmlid:[1],percentagesign:[1],circle:[4],indeterminate:[4]}]]],["db-radio",[[2,"db-radio",{autofocus:[516],checked:[516],disabled:[516],input_id:[513],label:[513],name:[513],required:[516],value:[513]}]]],["db-sidenavi",[[4,"db-sidenavi",{data:[513]}]]],["db-tab",[[4,"db-tab",{active:[516],label:[513],name:[513]}]]],["db-tab-bar",[[4,"db-tab-bar"]]],["db-textarea",[[6,"db-textarea",{ariainvalid:[513],ariarequired:[513],autofocus:[516],cols:[514],description:[513],dirname:[513],disabled:[516],input_id:[513],label:[513],maxlength:[514],minlength:[514],name:[513],placeholder:[513],readonly:[516],required:[516],rows:[514],variant:[513],wrap:[513],value:[513],valueSize:[32]}]]],["db-toggle",[[4,"db-toggle",{htmlid:[1],disabled:[516],checked:[516]}]]],["db-headline",[[4,"db-headline",{variant:[1],pulse:[516]}]]],["db-select",[[6,"db-select",{ariainvalid:[516],disabled:[516],input_id:[513],label:[513],multiple:[516],name:[513],required:[516],size:[514],value:[1],variant:[513]}]]],["db-button_2",[[4,"db-button",{ariaexpanded:[513],ariapressed:[513],disabled:[516],formaction:[513],formenctype:[513],formmethod:[513],formnovalidate:[516],formtarget:[513],icon:[513],iconafter:[513],icononly:[516],name:[513],tooltip:[513],type:[513],value:[513],variant:[513],size:[513]}],[1,"db-icon",{icon:[1],variant:[1]}]]]],void 0));let p=b("db-brand"),g=b("db-footer"),v=b("db-header"),y=b("db-mainnavigation"),w=b("db-page"),N=b("github-version-switcher")},6288:function(){},5632:function(e,t,n){e.exports=n(3642)}}]);