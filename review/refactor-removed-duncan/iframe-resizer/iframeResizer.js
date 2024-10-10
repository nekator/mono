/*!
 *  @preserve
 *  
 *  @module      iframe-resizer/legacy (parent) 5.3.1 (umd) - 2024-09-12
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


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iframeResize=t()}(this,(function(){"use strict";console.info("IFRAME-RESIZER 5\n\nThis package has been split into separate packages for Parent and Child pages. Along with new packages for jQuery, React and Vue.\n\nGoing forward you are advised to use the new separate packages for Parent and Child pages, rather than this combined package.\n\nPlease see https://iframe-resizer.com/upgrade for more details.\n");const e="[iframe-resizer]";const t=t=>`${e}[${function(e){return window.top===window.self?`Parent page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested parent page: ${e}`}(t)}]`,i=(e,...i)=>((e,i,...n)=>window?.console[e](t(i),...n))("warn",e,...i),n=(t,i)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((t=>(...i)=>[`${e}[${t}]`,...i].join(" "))(t))(i)),o="5.3.1",r="[iFrameSizer]",a=r.length,s=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),l=(e,t,i,n)=>e.addEventListener(t,i,n||!1),c=(e,t,i)=>e.removeEventListener(t,i,!1),d=e=>{if(!e)return"";let t=-559038744,i=1103547984;for(let n,o=0;o<e.length;o++)n=e.codePointAt(o),t=Math.imul(t^n,2246822519),i=Math.imul(i^n,3266489917);return t^=Math.imul(t^i>>>15,1935289751),i^=Math.imul(i^t>>>15,3405138345),t^=i>>>16,i^=t>>>16,(2097152*(i>>>0)+(t>>>11)).toString(36)},u=e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))),f=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."],p=["NWSc3","zvsv","wyv","ibzpulzz","vlt"],h=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)]))),m=e=>u(f[e]),y=e=>{const t=e[u("spjluzl")];if(!t)return-1;const i=t.split("-");let n=function(e=""){let t=-2;const i=d(u(e));return i in h&&(t=h[i]),t}(i[0]);return 0===n||(e=>e[2]===d(e[0]+e[1]))(i)||(n=-2),n},g={},w=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,heightCalculationMethod:"auto",id:"iFrameResizer",log:!1,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,waitForLoad:!1,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof g[e.id].onInit&&(n(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),g[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),b={position:null,version:o};function v(e){function t(){M(P),R(),L("onResized",P)}function s(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function d(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}const u=e=>O.slice(O.indexOf(":")+7+e);const f=(e,t)=>(i,n)=>{const o={};var r,a;r=function(){S(`Send ${e} (${i})`,`${e}:${t()}`,n)},o[a=n]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},p=(e,t)=>()=>{let i=!1;const n=t=>()=>{g[d]?i&&i!==t||(e(t,d),i=t,requestAnimationFrame((()=>{i=!1}))):s()},o=n("scroll"),r=n("resize window");function a(e,t){t(window,"scroll",o),t(window,"resize",r)}function s(){a(0,c),u.disconnect(),f.disconnect()}const d=H,u=new ResizeObserver(n("page observed")),f=new ResizeObserver(n("iframe observed"));a(0,l),u.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),f.observe(g[d].iframe,{attributes:!0,childList:!1,subtree:!1}),g[d]&&(g[d][`stop${t}`]=s)},h=e=>()=>{e in g[H]&&(g[H][e](),delete g[H][e])},m=f("pageInfo",(function(){const e=document.body.getBoundingClientRect(),t=P.iframe.getBoundingClientRect(),{scrollY:i,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:i,scrollLeft:n,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),y=f("parentInfo",(function(){const{iframe:e}=P,{scrollWidth:t,scrollHeight:i}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:t,scrollHeight:i},viewport:{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}})})),w=p(m,"PageInfo"),v=p(y,"ParentInfo"),j=h("stopPageInfo"),E=h("stopParentInfo");function W(e){const t=e.getBoundingClientRect();return k(),{x:Number(t.left)+Number(b.position.x),y:Number(t.top)+Number(b.position.y)}}function N(e){const t=e?W(P.iframe):{x:0,y:0},i=((e,t)=>({x:e.width+t.x,y:e.height+t.y}))(P,t),n=window.parentIframe||window.parentIFrame;n?function(t,i){t["scrollTo"+(e?"Offset":"")](i.x,i.y)}(n,i):function(e){b.position=e,A(H)}(i)}function A(e){const{x:t,y:i}=b.position,n=g[e]?.iframe;!1!==L("onScroll",{iframe:n,top:i,left:t,x:t,y:i})?R():$()}function C(e){let t={};if(0===P.width&&0===P.height){const e=u(9).split(":");t={x:e[1],y:e[0]}}else t={x:P.width,y:P.height};L(e,{iframe:P.iframe,screenX:Number(t.x),screenY:Number(t.y),type:P.type})}const L=(e,t)=>z(H,e,t);let O=e.data,P={},H=null;"[iFrameResizerChild]Ready"!==O?r===`${O}`.slice(0,a)&&O.slice(a).split(":")[0]in g&&(P=function(){const e=O.slice(a).split(":"),t=e[1]?Number(e[1]):0,i=g[e[0]]?.iframe,n=getComputedStyle(i);return{iframe:i,id:e[0],height:t+s(n)+d(n),width:Number(e[2]),type:e[3],msg:e[4]}}(),H=P.id,H?(function(e){if(!g[e])throw new Error(`${P.type} No settings for ${e}. Message was: ${O}`)}(H),P.type in{true:1,false:1,undefined:1}||(g[H].loaded=!0,(null!==P.iframe||(i(H,`The iframe (${P.id}) was not found.`),0))&&function(){const{origin:t,sameDomain:i}=e;if(i)return!0;let n=g[H]?.checkOrigin;if(n&&"null"!=`${t}`&&!(n.constructor===Array?function(){let e=0,i=!1;for(;e<n.length;e++)if(n[e]===t){i=!0;break}return i}():function(){const e=g[H]?.remoteHost;return t===e}()))throw new Error(`Unexpected message received from: ${t} for ${P.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(g[H]?.firstRun&&g[H]&&(g[H].firstRun=!1),P.type){case"close":T(P.iframe);break;case"message":r=u(6),L("onMessage",{iframe:P.iframe,message:JSON.parse(r)});break;case"mouseenter":C("onMouseEnter");break;case"mouseleave":C("onMouseLeave");break;case"autoResize":g[H].autoResize=JSON.parse(u(9));break;case"scrollBy":!function(){const e=P.width,t=P.height;(window.parentIframe||window).scrollBy(e,t)}();break;case"scrollTo":N(!1);break;case"scrollToOffset":N(!0);break;case"pageInfo":m("start",H),w();break;case"parentInfo":y("start",H),v();break;case"pageInfoStop":j();break;case"parentInfoStop":E();break;case"inPageLink":!function(e){const t=e.split("#")[1]||"",i=decodeURIComponent(t);let n=document.getElementById(i)||document.getElementsByName(i)[0];n?function(){const e=W(n);b.position={x:e.x,y:e.y},A(H),window.location.hash=t}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(t)}(u(9));break;case"title":!function(e,t){g[t]?.syncTitle&&(g[t].iframe.title=e)}(P.msg,H);break;case"reset":I(P);break;case"init":t(),function(e){try{g[e].sameDomain=!!g[e]?.iframe?.contentWindow?.iframeChildListener}catch(t){g[e].sameDomain=!1}}(H),(e=P.msg)!==o&&(void 0!==e||n(H,"<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")),F=!0,L("onReady",P.iframe);break;default:if(0===P.width&&0===P.height)return void i(H,`Unsupported message received (${P.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===P.width||0===P.height)return;if(document.hidden)return;t()}var e,r}())):i("","iframeResizer received messageData without id, message was: ",O)):Object.keys(g).forEach((e=>{g[e].mode>=0&&S("iFrame requested init",x(e),e)}))}function z(e,t,i){let n=null,o=null;if(g[e]){if(n=g[e][t],"function"!=typeof n)throw new TypeError(`${t} on iFrame[${e}] is not a function`);"onClose"===t||"onScroll"===t?o=n(i):setTimeout((()=>n(i)))}return o}function j(e){const{id:t}=e;delete g[t]}function T(e){const{id:t}=e;if(!1!==z(t,"onClose",t)){try{e.parentNode&&e.remove()}catch(e){i(t,e)}z(t,"onClosed",t),j(e)}}function k(e){null===b.position&&(b.position={x:window.scrollX,y:window.scrollY})}function $(){b.position=null}function R(e){null!==b.position&&(window.scrollTo(b.position.x,b.position.y),$())}function I(e){k(e.id),M(e),S("reset","reset",e.id)}function M(e){function t(t){const i=`${e[t]}px`;e.iframe.style[t]=i}const{id:i}=e,{sizeHeight:n,sizeWidth:o}=g[i];n&&t("height"),o&&t("width")}function S(e,t,o,a){g[o]&&(g[o]?.postMessageTarget?function(){const{iframe:e,postMessageTarget:i,sameDomain:n,targetOrigin:a}=g[o];if(n)try{return void e.contentWindow.iframeChildListener(r+t)}catch(e){}i.postMessage(r+t,a)}():i(o,`[${e}] IFrame(${o}) not found`),a&&g[o]?.warningTimeout&&(g[o].msgTimeout=setTimeout((function(){if(void 0===g[o])return;const{iframe:e,loaded:t,loadErrorShown:i,waitForLoad:r}=g[o],{sandbox:a}=e;t||i||(g[o].loadErrorShown=!0,n(o,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${o}</>) has not responded within ${g[o].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n${r?"\nThe <b>waitForLoad</> option is currently set to <i>'true'</>. If the iframe loads before the JavaScript runs, this option will prevent <i>iframe-resizer</> from initialising. To disable this, set the <b>waitForLoad</> option to <i>'false'</>.  \n":""}\n${!(a?.length>0)||a.contains("allow-scripts")&&a.contains("allow-same-origin")?"":"The iframe has the <b>sandbox</> attribute, please ensure it contains both the <i>'allow-same-origin'</> and <i>'allow-scripts'</> values."}\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`))}),g[o].warningTimeout)))}function x(e){const t=g[e];return[e,"8",t.sizeWidth,t.log,"32",!0,t.autoResize,t.bodyMargin,t.heightCalculationMethod,t.bodyBackground,t.bodyPadding,t.tolerance,t.inPageLinks,"child",t.widthCalculationMethod,t.mouseEvents,t.offsetHeight,t.offsetWidth,t.sizeHeight,t.license,b.version,t.mode].join(":")}let E=0,F=!1,W=!1;const N=e=>t=>{function r(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&n(c,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}function a(e){const t=g[e]?.iframe?.title;return""===t||void 0===t}const c=function(i){if(i&&"string"!=typeof i)throw new TypeError("Invalid id for iFrame. Expected String");return""!==i&&i||(i=function(){let t=e?.id||w.id+E++;return null!==document.getElementById(t)&&(t+=E++),t}(),t.id=i,(e||{}).log),i}(t.id);return c in g&&"iFrameResizer"in t?i(c,"Ignored iFrame, already setup."):(function(e){var i,o;g[c]={iframe:t,firstRun:!0,remoteHost:t?.src.split("/").slice(0,3).join("/"),...w,...r(e),mode:y(e),syncTitle:a(c)},function(){const{direction:e}=g[c];if("horizontal"===e)return g[c].sizeWidth=!0,void(g[c].sizeHeight=!1);if("none"===e)return g[c].sizeWidth=!1,g[c].sizeHeight=!1,void(g[c].autoResize=!1);if("vertical"!==e)throw new TypeError(c,`Direction value of "${e}" is not valid`)}(),(i=e?.offsetSize||e?.offset)&&("vertical"===g[c].direction?g[c].offsetHeight=i:g[c].offsetWidth=i),e?.offset&&n(c,"<rb>Deprecated option</>\n\n The <b>offset</> option has been renamed to <b>offsetSize</>. Use of the old name will be removed in a future version of <i>iframe-resizer</>."),null===g[c].postMessageTarget&&(g[c].postMessageTarget=t.contentWindow),g[c].targetOrigin=!0===g[c].checkOrigin?""===(o=g[c].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*"}(e),function(){const{mode:e}=g[c];e<0&&n("Parent",`${m(e+2)}${m(2)}`),W||e<0||(W=!0,(e=>{console.info(`%c[iframe-resizer] ${e}`,"font-weight: bold;")})(`v${o} (${(e=>u(p[e]))(e)})`),e<1&&n("Parent",m(3)))}(),C(),function(){switch(t.style.overflow=!1===g[c]?.scrolling?"hidden":"auto",g[c]?.scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=g[c]?g[c].scrolling:"no"}}(),function(){const{bodyMargin:e}=g[c];"number"!=typeof e&&"0"!==e||(g[c].bodyMargin=`${e}px`)}(),function(e){const{id:i}=t,{mode:n,waitForLoad:o}=g[i];-1!==n&&-2!==n&&(l(t,"load",(function(){S("iFrame.onload",`${e}:${F}`,i,!0),function(){const e=g[c]?.firstRun,i=g[c]?.heightCalculationMethod in s;!e&&i&&I({iframe:t,height:0,width:0,type:"init"})}()})),!1===o&&S("init",`${e}:${F}`,i,!0))}(x(c)),function(){if(g[c]){const{iframe:e}=g[c],t={close:T.bind(null,e),disconnect:j.bind(null,e),removeListeners(){n(c,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:S.bind(null,"Window resize","resize",c),moveToAnchor(e){S("Move to anchor",`moveToAnchor:${e}`,c)},sendMessage(e){S("Send Message",`message:${e=JSON.stringify(e)}`,c)}};e.iframeResizer=t,e.iFrameResizer=t}}()),t?.iFrameResizer};function A(){!1===document.hidden&&function(e,t){const i=e=>g[e]?.autoResize&&!g[e]?.firstRun;Object.keys(g).forEach((function(n){i(n)&&S(e,t,n)}))}("Tab Visible","resize")}const C=(e=>{let t=!1;return function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))}})((()=>{l(window,"message",v),l(document,"visibilitychange",A),window.iframeParentListener=e=>setTimeout((()=>v({data:e,sameDomain:!0})))})),L="[iframeResizer] ";const O=function(){function e(e){switch(!0){case!e:throw new TypeError(`${L}iframe is not defined`);case!e.tagName:throw new TypeError(`${L}Not a valid DOM element`);case"IFRAME"!==e.tagName.toUpperCase():throw new TypeError(`${L}Expected <IFRAME> tag, found <${e.tagName}>`);default:t(e),i.push(e)}}let t,i;return function(n,o){if("undefined"==typeof window)return[];switch(t=N(n),i=[],typeof o){case"undefined":case"string":document.querySelectorAll(o||"iframe").forEach(e);break;case"object":e(o);break;default:throw new TypeError(`${L}Unexpected data type (${typeof o})`)}return Object.freeze(i)}}();return"undefined"!=typeof window&&(window.iFrameResize=window.iFrameResize||function(...e){n("","Deprecated: iFrameResize(), please use iframeResize()"),O(...e)}),O}));
