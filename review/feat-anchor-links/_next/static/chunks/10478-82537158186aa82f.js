(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10478],{35368:function(e){/*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */e.exports=function(){"use strict";let{entries:e,setPrototypeOf:t,isFrozen:n,getPrototypeOf:o,getOwnPropertyDescriptor:r}=Object,{freeze:i,seal:a,create:l}=Object,{apply:c,construct:s}="undefined"!=typeof Reflect&&Reflect;i||(i=function(e){return e}),a||(a=function(e){return e}),c||(c=function(e,t,n){return e.apply(t,n)}),s||(s=function(e,t){return new e(...t)});let u=_(Array.prototype.forEach),m=_(Array.prototype.pop),f=_(Array.prototype.push),p=_(String.prototype.toLowerCase),d=_(String.prototype.toString),h=_(String.prototype.match),g=_(String.prototype.replace),y=_(String.prototype.indexOf),T=_(String.prototype.trim),E=_(RegExp.prototype.test),A=(j=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(j,t)});function _(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return c(e,t,o)}}function b(e,o){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p;t&&t(e,null);let i=o.length;for(;i--;){let t=o[i];if("string"==typeof t){let e=r(t);e!==t&&(n(o)||(o[i]=e),t=e)}e[t]=!0}return e}function N(t){let n=l(null);for(let[o,i]of e(t))void 0!==r(t,o)&&(n[o]=i);return n}function S(e,t){for(;null!==e;){let n=r(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=o(e)}return function(e){return console.warn("fallback value for",e),null}}let w=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),k=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=i(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),v=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),C=i(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),D=i(["#text"]),x=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),O=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),I=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),M=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),U=a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),P=a(/<%[\w\W]*|[\w\W]*%>/gm),H=a(/\${[\w\W]*}/gm),F=a(/^data-[\-\w.\u00B7-\uFFFF]/),z=a(/^aria-[\-\w]+$/),W=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),B=a(/^(?:\w+script|data):/i),G=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Y=a(/^html$/i);var j,q=Object.freeze({__proto__:null,MUSTACHE_EXPR:U,ERB_EXPR:P,TMPLIT_EXPR:H,DATA_ATTR:F,ARIA_ATTR:z,IS_ALLOWED_URI:W,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:G,DOCTYPE_NAME:Y});let X=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null,o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));let r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function t(){let n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,r=e=>t(e);if(r.version="3.0.6",r.removed=[],!o||!o.document||9!==o.document.nodeType)return r.isSupported=!1,r;let{document:a}=o,c=a,s=c.currentScript,{DocumentFragment:_,HTMLTemplateElement:U,Node:P,Element:H,NodeFilter:F,NamedNodeMap:z=o.NamedNodeMap||o.MozNamedAttrMap,HTMLFormElement:B,DOMParser:G,trustedTypes:j}=o,K=H.prototype,V=S(K,"cloneNode"),$=S(K,"nextSibling"),Z=S(K,"childNodes"),J=S(K,"parentNode");if("function"==typeof U){let e=a.createElement("template");e.content&&e.content.ownerDocument&&(a=e.content.ownerDocument)}let Q="",{implementation:ee,createNodeIterator:et,createDocumentFragment:en,getElementsByTagName:eo}=a,{importNode:er}=c,ei={};r.isSupported="function"==typeof e&&"function"==typeof J&&ee&&void 0!==ee.createHTMLDocument;let{MUSTACHE_EXPR:ea,ERB_EXPR:el,TMPLIT_EXPR:ec,DATA_ATTR:es,ARIA_ATTR:eu,IS_SCRIPT_OR_DATA:em,ATTR_WHITESPACE:ef}=q,{IS_ALLOWED_URI:ep}=q,ed=null,eh=b({},[...w,...k,...R,...v,...D]),eg=null,ey=b({},[...x,...O,...I,...M]),eT=Object.seal(l(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),eE=null,eA=null,e_=!0,eb=!0,eN=!1,eS=!0,ew=!1,ek=!1,eR=!1,eL=!1,ev=!1,eC=!1,eD=!1,ex=!0,eO=!1,eI=!0,eM=!1,eU={},eP=null,eH=b({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eF=null,ez=b({},["audio","video","img","source","image","track"]),eW=null,eB=b({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eG="http://www.w3.org/1998/Math/MathML",eY="http://www.w3.org/2000/svg",ej="http://www.w3.org/1999/xhtml",eq=ej,eX=!1,eK=null,eV=b({},[eG,eY,ej],d),e$=null,eZ=["application/xhtml+xml","text/html"],eJ=null,eQ=null,e0=a.createElement("form"),e1=function(e){return e instanceof RegExp||e instanceof Function},e2=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!eQ||eQ!==e){if(e&&"object"==typeof e||(e={}),e=N(e),eJ="application/xhtml+xml"===(e$=e$=-1===eZ.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?d:p,ed="ALLOWED_TAGS"in e?b({},e.ALLOWED_TAGS,eJ):eh,eg="ALLOWED_ATTR"in e?b({},e.ALLOWED_ATTR,eJ):ey,eK="ALLOWED_NAMESPACES"in e?b({},e.ALLOWED_NAMESPACES,d):eV,eW="ADD_URI_SAFE_ATTR"in e?b(N(eB),e.ADD_URI_SAFE_ATTR,eJ):eB,eF="ADD_DATA_URI_TAGS"in e?b(N(ez),e.ADD_DATA_URI_TAGS,eJ):ez,eP="FORBID_CONTENTS"in e?b({},e.FORBID_CONTENTS,eJ):eH,eE="FORBID_TAGS"in e?b({},e.FORBID_TAGS,eJ):{},eA="FORBID_ATTR"in e?b({},e.FORBID_ATTR,eJ):{},eU="USE_PROFILES"in e&&e.USE_PROFILES,e_=!1!==e.ALLOW_ARIA_ATTR,eb=!1!==e.ALLOW_DATA_ATTR,eN=e.ALLOW_UNKNOWN_PROTOCOLS||!1,eS=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,ew=e.SAFE_FOR_TEMPLATES||!1,ek=e.WHOLE_DOCUMENT||!1,ev=e.RETURN_DOM||!1,eC=e.RETURN_DOM_FRAGMENT||!1,eD=e.RETURN_TRUSTED_TYPE||!1,eL=e.FORCE_BODY||!1,ex=!1!==e.SANITIZE_DOM,eO=e.SANITIZE_NAMED_PROPS||!1,eI=!1!==e.KEEP_CONTENT,eM=e.IN_PLACE||!1,ep=e.ALLOWED_URI_REGEXP||W,eq=e.NAMESPACE||ej,eT=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&e1(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(eT.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&e1(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(eT.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(eT.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ew&&(eb=!1),eC&&(ev=!0),eU&&(ed=b({},[...D]),eg=[],!0===eU.html&&(b(ed,w),b(eg,x)),!0===eU.svg&&(b(ed,k),b(eg,O),b(eg,M)),!0===eU.svgFilters&&(b(ed,R),b(eg,O),b(eg,M)),!0===eU.mathMl&&(b(ed,v),b(eg,I),b(eg,M))),e.ADD_TAGS&&(ed===eh&&(ed=N(ed)),b(ed,e.ADD_TAGS,eJ)),e.ADD_ATTR&&(eg===ey&&(eg=N(eg)),b(eg,e.ADD_ATTR,eJ)),e.ADD_URI_SAFE_ATTR&&b(eW,e.ADD_URI_SAFE_ATTR,eJ),e.FORBID_CONTENTS&&(eP===eH&&(eP=N(eP)),b(eP,e.FORBID_CONTENTS,eJ)),eI&&(ed["#text"]=!0),ek&&b(ed,["html","head","body"]),ed.table&&(b(ed,["tbody"]),delete eE.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw A('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');Q=(n=e.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===n&&(n=X(j,s)),null!==n&&"string"==typeof Q&&(Q=n.createHTML(""));i&&i(e),eQ=e}},e3=b({},["mi","mo","mn","ms","mtext"]),e9=b({},["foreignobject","desc","title","annotation-xml"]),e8=b({},["title","style","font","a","script"]),e5=b({},k);b(e5,R),b(e5,L);let e6=b({},v);b(e6,C);let e4=function(e){let t=J(e);t&&t.tagName||(t={namespaceURI:eq,tagName:"template"});let n=p(e.tagName),o=p(t.tagName);return!!eK[e.namespaceURI]&&(e.namespaceURI===eY?t.namespaceURI===ej?"svg"===n:t.namespaceURI===eG?"svg"===n&&("annotation-xml"===o||e3[o]):!!e5[n]:e.namespaceURI===eG?t.namespaceURI===ej?"math"===n:t.namespaceURI===eY?"math"===n&&e9[o]:!!e6[n]:e.namespaceURI===ej?(t.namespaceURI!==eY||!!e9[o])&&(t.namespaceURI!==eG||!!e3[o])&&!e6[n]&&(e8[n]||!e5[n]):"application/xhtml+xml"===e$&&!!eK[e.namespaceURI])},e7=function(e){f(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},te=function(e,t){try{f(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){f(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!eg[e]){if(ev||eC)try{e7(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}}},tt=function(e){let t=null,o=null;if(eL)e="<remove></remove>"+e;else{let t=h(e,/^[\r\n\t ]+/);o=t&&t[0]}"application/xhtml+xml"===e$&&eq===ej&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let r=n?n.createHTML(e):e;if(eq===ej)try{t=new G().parseFromString(r,e$)}catch(e){}if(!t||!t.documentElement){t=ee.createDocument(eq,"template",null);try{t.documentElement.innerHTML=eX?Q:r}catch(e){}}let i=t.body||t.documentElement;return(e&&o&&i.insertBefore(a.createTextNode(o),i.childNodes[0]||null),eq===ej)?eo.call(t,ek?"html":"body")[0]:ek?t.documentElement:i},tn=function(e){return et.call(e.ownerDocument||e,e,F.SHOW_ELEMENT|F.SHOW_COMMENT|F.SHOW_TEXT,null)},to=function(e){return"function"==typeof P&&e instanceof P},tr=function(e,t,n){ei[e]&&u(ei[e],e=>{e.call(r,t,n,eQ)})},ti=function(e){let t=null;if(tr("beforeSanitizeElements",e,null),e instanceof B&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof z)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes))return e7(e),!0;let n=eJ(e.nodeName);if(tr("uponSanitizeElement",e,{tagName:n,allowedTags:ed}),e.hasChildNodes()&&!to(e.firstElementChild)&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent))return e7(e),!0;if(!ed[n]||eE[n]){if(!eE[n]&&tl(n)&&(eT.tagNameCheck instanceof RegExp&&E(eT.tagNameCheck,n)||eT.tagNameCheck instanceof Function&&eT.tagNameCheck(n)))return!1;if(eI&&!eP[n]){let t=J(e)||e.parentNode,n=Z(e)||e.childNodes;if(n&&t){let o=n.length;for(let r=o-1;r>=0;--r)t.insertBefore(V(n[r],!0),$(e))}}return e7(e),!0}return e instanceof H&&!e4(e)||("noscript"===n||"noembed"===n||"noframes"===n)&&E(/<\/no(script|embed|frames)/i,e.innerHTML)?(e7(e),!0):(ew&&3===e.nodeType&&(t=e.textContent,u([ea,el,ec],e=>{t=g(t,e," ")}),e.textContent!==t&&(f(r.removed,{element:e.cloneNode()}),e.textContent=t)),tr("afterSanitizeElements",e,null),!1)},ta=function(e,t,n){if(ex&&("id"===t||"name"===t)&&(n in a||n in e0))return!1;if(eb&&!eA[t]&&E(es,t));else if(e_&&E(eu,t));else if(!eg[t]||eA[t]){if(!(tl(e)&&(eT.tagNameCheck instanceof RegExp&&E(eT.tagNameCheck,e)||eT.tagNameCheck instanceof Function&&eT.tagNameCheck(e))&&(eT.attributeNameCheck instanceof RegExp&&E(eT.attributeNameCheck,t)||eT.attributeNameCheck instanceof Function&&eT.attributeNameCheck(t))||"is"===t&&eT.allowCustomizedBuiltInElements&&(eT.tagNameCheck instanceof RegExp&&E(eT.tagNameCheck,n)||eT.tagNameCheck instanceof Function&&eT.tagNameCheck(n))))return!1}else if(eW[t]);else if(E(ep,g(n,ef,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===y(n,"data:")&&eF[e]);else if(eN&&!E(em,g(n,ef,"")));else if(n)return!1;return!0},tl=function(e){return e.indexOf("-")>0},tc=function(e){tr("beforeSanitizeAttributes",e,null);let{attributes:t}=e;if(!t)return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:eg},i=t.length;for(;i--;){let{name:a,namespaceURI:l,value:c}=t[i],s=eJ(a),f="value"===a?c:T(c);if(o.attrName=s,o.attrValue=f,o.keepAttr=!0,o.forceKeepAttr=void 0,tr("uponSanitizeAttribute",e,o),f=o.attrValue,o.forceKeepAttr||(te(a,e),!o.keepAttr))continue;if(!eS&&E(/\/>/i,f)){te(a,e);continue}ew&&u([ea,el,ec],e=>{f=g(f,e," ")});let p=eJ(e.nodeName);if(ta(p,s,f)){if(eO&&("id"===s||"name"===s)&&(te(a,e),f="user-content-"+f),n&&"object"==typeof j&&"function"==typeof j.getAttributeType){if(l);else switch(j.getAttributeType(p,s)){case"TrustedHTML":f=n.createHTML(f);break;case"TrustedScriptURL":f=n.createScriptURL(f)}}try{l?e.setAttributeNS(l,a,f):e.setAttribute(a,f),m(r.removed)}catch(e){}}}tr("afterSanitizeAttributes",e,null)},ts=function e(t){let n=null,o=tn(t);for(tr("beforeSanitizeShadowDOM",t,null);n=o.nextNode();)tr("uponSanitizeShadowNode",n,null),ti(n)||(n.content instanceof _&&e(n.content),tc(n));tr("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,i=null,a=null,l=null;if((eX=!e)&&(e="<!-->"),"string"!=typeof e&&!to(e)){if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw A("dirty is not a string, aborting")}else throw A("toString is not a function")}if(!r.isSupported)return e;if(eR||e2(t),r.removed=[],"string"==typeof e&&(eM=!1),eM){if(e.nodeName){let t=eJ(e.nodeName);if(!ed[t]||eE[t])throw A("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof P)1===(i=(o=tt("<!---->")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName?o=i:"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!ev&&!ew&&!ek&&-1===e.indexOf("<"))return n&&eD?n.createHTML(e):e;if(!(o=tt(e)))return ev?null:eD?Q:""}o&&eL&&e7(o.firstChild);let s=tn(eM?e:o);for(;a=s.nextNode();)ti(a)||(a.content instanceof _&&ts(a.content),tc(a));if(eM)return e;if(ev){if(eC)for(l=en.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return(eg.shadowroot||eg.shadowrootmode)&&(l=er.call(c,l,!0)),l}let m=ek?o.outerHTML:o.innerHTML;return ek&&ed["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&E(Y,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),ew&&u([ea,el,ec],e=>{m=g(m,e," ")}),n&&eD?n.createHTML(m):m},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e2(e),eR=!0},r.clearConfig=function(){eQ=null,eR=!1},r.isValidAttribute=function(e,t,n){return eQ||e2({}),ta(eJ(e),eJ(t),n)},r.addHook=function(e,t){"function"==typeof t&&(ei[e]=ei[e]||[],f(ei[e],t))},r.removeHook=function(e){if(ei[e])return m(ei[e])},r.removeHooks=function(e){ei[e]&&(ei[e]=[])},r.removeAllHooks=function(){ei={}},r}()}()},5632:function(e,t,n){e.exports=n(15894)}}]);