/*!
 *  @preserve
 *  
 *  @module      iframe-resizer/legacy (child) 5.2.3 (iife) 
 *
 *  @license     GPL-3.0 for non-commercial use only.
 *               For commercial use, you must purchase a license from
 *               https://iframe-resizer.com/pricing
 * 
 *  @description Keep same and cross domain iFrames sized to their content 
 *
 *  @author      David J. Bradshaw <info@iframe-resizer.com>
 * 
 *  @see         {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.2.3",t=10,n="data-iframe-size",o="data-iframe-overflow",i="bottom",r="right",a=(e,t,n,o)=>e.addEventListener(t,n,o||!1),l=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."];Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)])));const s=e=>(e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))))(l[e]),c=e=>{let t=!1;return function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))}},d=e=>e;let u="";const m=e=>""!=`${e}`&&void 0!==e;const f=(...e)=>[`[iframe-resizer][${u}]`,...e].join(" "),p=(...e)=>console?.info(`[iframe-resizer][${u}]`,...e),h=(...e)=>console?.warn(f(...e)),y=(...e)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))(f)(...e)),g=e=>y(e);let v=[];const b=e=>{const t=e.side||i,n=e.onChange||d,r={root:document.documentElement,rootMargin:"0px",threshold:1},a=new WeakSet,l=new IntersectionObserver((e=>{e.forEach((e=>{e.target.toggleAttribute(o,(e=>0===e.boundingClientRect[t]||e.boundingClientRect[t]>e.rootBounds[t])(e))})),v=document.querySelectorAll(`[${o}]`),n()}),r);return e=>e.forEach((e=>{a.has(e)||(l.observe(e),a.add(e))}))},w=()=>v.length>0,z=1e5,S="--ifr-start",E="--ifr-end",j="--ifr-measure",$=[],P=new WeakSet,C=e=>"object"==typeof e&&P.add(e),O=e=>Math.floor(e*z)/z;let A=null,M=null,T={};const k=setInterval((()=>{if($.length<10)return;if(T.hasTags&&T.len<25)return;$.sort();const e=Math.min($.reduce(((e,t)=>e+t),0)/$.length,$[Math.floor($.length/2)]);e<=4||(clearInterval(k),y(`<rb>Performance Warning</>\n\nCalculating the page size is taking an excessive amount of time (${O(e)}ms).\n\nTo improve performance add the <b>data-iframe-size</> attribute to the ${T.Side.toLowerCase()} most element on the page. For more details see: <u>https://iframe-resizer.com/perf</>.`))}),5e3);function I(e){e.getEntries().forEach((e=>{if(e.name===E){const{duration:t}=performance.measure(j,S,E);!function(e,t){const{Side:n,len:o,hasTags:i,logging:r}=e;T=e,P.has(M)||A===M||i&&o<=1||(r||C(M),A=M,p(`\n${n} position calculated from:`,M,`\nParsed ${o} ${i?"tagged":"potentially overflowing"} elements in ${O(t)}ms`))}(e.detail,t),$.push(t),$.length>100&&$.shift()}}))}function N(){new PerformanceObserver(I).observe({entryTypes:["mark"]}),C(document.documentElement),C(document.body)}"undefined"!=typeof document&&"undefined"!=typeof PerformanceObserver&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",N):N()),"undefined"!=typeof window&&function(){const o={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},l={height:()=>(h("Custom height calculation function not defined"),Ue.auto()),width:()=>(h("Custom width calculation function not defined"),De.auto())},f={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},p=128,z={},j="checkVisibility"in window,$="auto",P="[iFrameSizer]",C=P.length,O={max:1,min:1,bodyScroll:1,documentElementScroll:1},A=["body"],T="scroll";let k,I,N=!0,R="",x=0,B="",q=null,W="",L=!0,F=!1,U=!0,D=!1,V=1,J=$,H=!0,Z="",Q={},X=!1,Y=0,G=!1,K="",_=d,ee="child",te=null,ne=!1,oe="",ie=[],re=window.parent,ae="*",le=0,se=!1,ce="",de=1,ue=T,me=window,fe=()=>{h("onMessage function not defined")},pe=()=>{},he=null,ye=null;function ge(){var o,d;!function(){const e=e=>"true"===e,t=Z.slice(C).split(":");K=t[0],x=void 0===t[1]?x:Number(t[1]),F=void 0===t[2]?F:e(t[2]),X=void 0===t[3]?X:e(t[3]),N=void 0===t[6]?N:e(t[6]),B=t[7],J=void 0===t[8]?J:t[8],R=t[9],W=t[10],le=void 0===t[11]?le:Number(t[11]),Q.enable=void 0!==t[12]&&e(t[12]),ee=void 0===t[13]?ee:t[13],ue=void 0===t[14]?ue:t[14],G=void 0===t[15]?G:e(t[15]),k=void 0===t[16]?k:Number(t[16]),I=void 0===t[17]?I:Number(t[17]),L=void 0===t[18]?L:e(t[18]),t[19],ce=t[20]||ce,Y=void 0===t[21]?Y:Number(t[21])}(),function(){function e(){const e=window.iframeResizer||window.iFrameResizer;fe=e?.onMessage||fe,pe=e?.onReady||pe,"number"==typeof e?.offset&&(y("<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."),L&&(k=e?.offset),F&&(I=e?.offset)),"number"==typeof e?.offsetSize&&(L&&(k=e?.offsetSize),F&&(I=e?.offsetSize)),Object.prototype.hasOwnProperty.call(e,"sizeSelector")&&(oe=e.sizeSelector),ae=e?.targetOrigin||ae,J=e?.heightCalculationMethod||J,ue=e?.widthCalculationMethod||ue}function t(e,t){return"function"==typeof e&&(l[t]=e,e="custom"),e}1!==Y&&"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),J=t(J,"height"),ue=t(ue,"width"))}(),u={id:K,logging:X}.id,function(){try{ne="iframeParentListener"in window.parent}catch(e){}}(),Y<0?g(`${s(Y+2)}${s(2)}`):ce.codePointAt(0)>4||Y<2&&g(s(3)),ce&&""!==ce&&"false"!==ce?ce!==e&&y(`<rb>Version mismatch</>\n\nThe parent and child pages are running different versions of <i>iframe resizer</>.\n\nParent page: ${ce} - Child page: ${e}.\n`):y("<rb>Legacy version detected on parent page</>\n\nDetected legacy version of parent page script. It is recommended to update the parent page to use <b>@iframe-resizer/parent</>.\n\nSee <u>https://iframe-resizer.com/setup/</> for more details.\n"),Pe(),Ce(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.toggleAttribute(n,!0)}));t("data-iframe-height"),t("data-iframe-width"),e&&y("<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>.")}(),be(),L!==F&&(_=b({onChange:c(ve),side:L?i:r})),1!==Y&&(me.parentIframe=Object.freeze({autoResize:e=>(!0===e&&!1===N?(N=!0,Oe()):!1===e&&!0===N&&(N=!1,je("remove"),te?.disconnect(),q?.disconnect()),Xe(0,0,"autoResize",JSON.stringify(N)),N),close(){Xe(0,0,"close")},getId:()=>K,getPageInfo(e){if("function"==typeof e)return he=e,Xe(0,0,"pageInfo"),void y("<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProps()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n");he=null,Xe(0,0,"pageInfoStop")},getParentProps(e){if("function"!=typeof e)throw new TypeError("parentIFrame.getParentProps(callback) callback not a function");return ye=e,Xe(0,0,"parentInfo"),()=>{ye=null,Xe(0,0,"parentInfoStop")}},getParentProperties(e){y("<rb>Renamed Method</>\n          \nThe <b>getParentProperties()</> method has been renamed <b>getParentProps()</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>.\n"),this.getParentProps(e)},moveToAnchor(e){Q.findTarget(e)},reset(){Qe()},scrollBy(e,t){Xe(t,e,"scrollBy")},scrollTo(e,t){Xe(t,e,"scrollTo")},scrollToOffset(e,t){Xe(t,e,"scrollToOffset")},sendMessage(e,t){Xe(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){J=e,Pe()},setWidthCalculationMethod(e){ue=e,Ce()},setTargetOrigin(e){ae=e},resize(e,t){Je("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)},size(e,t){y("<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"),this.resize(e,t)}}),me.parentIFrame=me.parentIframe),function(){function e(e){Xe(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){a(window.document,t,e)}!0===G&&(t("mouseenter"),t("mouseleave"))}(),Q=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function o(e){function t(e){const t=n(e);Xe(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),r=document.getElementById(i)||document.getElementsByName(i)[0];void 0===r?Xe(0,0,"inPageLink",`#${o}`):t(r)}function i(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&o(t)}function r(){function e(e){function t(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&a(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function l(){a(window,"hashchange",i)}function s(){setTimeout(i,p)}function c(){r(),l(),s()}return Q.enable&&(1===Y?y("In page linking requires a Professional or Business license. Please see https://iframe-resizer.com/pricing for more details."):c()),{findTarget:o}}(),we(qe(document)()),void 0===B&&(B=`${x}px`),ze("margin",(o="margin",(d=B).includes("-")&&(h(`Negative CSS value ignored for ${o}`),d=""),d)),ze("background",R),ze("padding",W),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body)}(),Se()}const ve=()=>{Je("init","Init message from host page",void 0,void 0,e),document.title&&""!==document.title&&Xe(0,0,"title",document.title),Oe(),pe()};function be(){ie=document.querySelectorAll(`[${n}]`),D=ie.length>0}function we(e){D?setTimeout(ve):_(e)}function ze(e,t){void 0!==t&&""!==t&&"null"!==t&&document.body.style.setProperty(e,t)}function Se(){""!==oe&&document.querySelectorAll(oe).forEach((e=>{e.dataset.iframeSize=!0}))}function Ee(e){({add(t){function n(){Je(e.eventName,e.eventType)}z[t]=n,a(window,t,n,{passive:!0})},remove(e){const t=z[e];var n,o;delete z[e],n=e,o=t,window.removeEventListener(n,o,!1)}})[e.method](e.eventName)}function je(e){Ee({method:e,eventType:"After Print",eventName:"afterprint"}),Ee({method:e,eventType:"Before Print",eventName:"beforeprint"}),Ee({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function $e(e,t,n,o){return t!==e&&(e in n||(h(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in f&&y(`<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`)),e}function Pe(){J=$e(J,$,Ue,"height")}function Ce(){ue=$e(ue,T,De,"width")}function Oe(){!0===N&&(je("add"),q=function(){const e=new Set;let t=!1,n=0,o=[];const i=t=>{const{length:n}=t;for(let o=0;o<n;o++){const{addedNodes:n,removedNodes:i}=t[o],r=n.length,a=i.length;if(r)for(let t=0;t<r;t++)e.add(n[t]);if(a)for(let t=0;t<a;t++)e.delete(i[t])}},r=16,a=2,l=200;let s=1;function c(){const d=performance.now(),u=d-n;if(u>r*s+++a&&u<l)return setTimeout(c,r*s),void(n=d);s=1,o.forEach(i),o=[],0!==e.size?(Se(),be(),we(e),e.forEach(Re),e.clear(),t=!1):t=!1}function d(e){o.push(e),t||(n=performance.now(),t=!0,requestAnimationFrame(c))}function u(){const e=new window.MutationObserver(d),t=document.querySelector("body"),n={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return e.observe(t,n),e}const m=u();return{disconnect(){m.disconnect()}}}(),te=new ResizeObserver(Me),Re(window.document))}let Ae;function Me(e){if(!Array.isArray(e)||0===e.length)return;const t=e[0].target;Ae=()=>Je("resizeObserver",`Resize Observed: ${function(e){switch(!0){case!m(e):return"";case m(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case m(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(m(e.className)?`.${e.className}`:"")}}(t)}`),setTimeout((()=>{Ae&&Ae(),Ae=void 0}),0)}const Te=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},ke=()=>[...qe(document)()].filter(Te),Ie=new WeakSet;function Ne(e){e&&(Ie.has(e)||(te.observe(e),Ie.add(e)))}function Re(e){[...ke(),...A.flatMap((t=>e.querySelector(t)))].forEach(Ne)}function xe(e){performance.mark(S);const t=(n=e).charAt(0).toUpperCase()+n.slice(1);var n;let i=0,r=document.documentElement,a=D?0:document.documentElement.getBoundingClientRect().bottom;performance.mark(S);const l=D?ie:w()?v:qe(document)();let s=l.length;return l.forEach((t=>{D||!j||t.checkVisibility(o)?(i=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),i>a&&(a=i,r=t)):s-=1})),M=r,performance.mark(E,{detail:{Side:t,len:s,hasTags:D,logging:X}}),a}const Be=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],qe=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)"),We={height:0,width:0},Le={height:0,width:0};function Fe(e){function t(){return Le[i]=r,We[i]=s,r}const n=w(),o=e===Ue,i=o?"height":"width",r=e.documentElementBoundingClientRect(),a=Math.ceil(r),l=Math.floor(r),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e);switch(!0){case!e.enabled():return s;case D:return e.taggedElement();case!n&&0===Le[i]&&0===We[i]:return t();case se&&r===Le[i]&&s===We[i]:return Math.max(r,s);case 0===r:return s;case!n&&r!==Le[i]&&s<=We[i]:return t();case!o:return e.taggedElement();case!n&&r<Le[i]:case s===l||s===a:case r>s:return t()}return Math.max(e.taggedElement(),t())}const Ue={enabled:()=>L,getOffset:()=>k,auto:()=>Fe(Ue),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Ue.bodyOffset(),custom:()=>l.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...Be(Ue)),min:()=>Math.min(...Be(Ue)),grow:()=>Ue.max(),lowestElement:()=>xe(i),taggedElement:()=>xe(i)},De={enabled:()=>F,getOffset:()=>I,auto:()=>Fe(De),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>l.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...Be(De)),min:()=>Math.min(...Be(De)),rightMostElement:()=>xe(r),scroll:()=>Math.max(De.bodyScroll(),De.documentElementScroll()),taggedElement:()=>xe(r)};function Ve(e,t,n,o,i){let r,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=le);return r=void 0===n?Ue[J]():n,a=void 0===o?De[ue]():o,L&&e(V,r)||F&&e(de,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(L&&J in O||F&&ue in O)&&Qe():(He(),V=r,de=a,Xe(V,de,e,i))}function Je(e,t,n,o,i){document.hidden||Ve(e,0,n,o,i)}function He(){se||(se=!0,requestAnimationFrame((()=>{se=!1})))}function Ze(e){V=Ue[J](),de=De[ue](),Xe(V,de,e)}function Qe(e){const t=J;J=$,He(),Ze("reset"),J=t}function Xe(e,t,n,o,i){Y<-1||(void 0!==i||(i=ae),function(){const r=`${K}:${e+(k||0)}:${t+(I||0)}:${n}${void 0===o?"":`:${o}`}`;ne?window.parent.iframeParentListener(P+r):re.postMessage(P+r,i)}())}function Ye(e){const t={init:function(){Z=e.data,re=e.source,ge(),U=!1,setTimeout((()=>{H=!1}),p)},reset(){H||Ze("resetPage")},resize(){Je("resizeParent")},moveToAnchor(){Q.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();he?he(JSON.parse(e)):Xe(0,0,"pageInfoStop")},parentInfo(){const e=o();ye?ye(Object.freeze(JSON.parse(e))):Xe(0,0,"parentInfoStop")},message(){const e=o();fe(JSON.parse(e))}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,r=()=>e.data.split(":")[2]in{true:1,false:1};P===`${e.data}`.slice(0,C)&&(!1!==U?r()&&t.init():function(){const o=n();o in t?t[o]():i()||r()||h(`Unexpected message (${e.data})`)}())}function Ge(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}window.iframeChildListener=e=>Ye({data:e,sameDomain:!0}),a(window,"message",Ye),a(window,"readystatechange",Ge),Ge()}()}();
