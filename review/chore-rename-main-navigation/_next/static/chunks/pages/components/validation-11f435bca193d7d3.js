(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32945],{35504:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/validation",function(){return t(49540)}])},49540:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(52322),i=t(10851),l=t(45392);function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"validation",children:"Validation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The form components ",(0,r.jsx)(n.code,{children:"checkbox"}),", ",(0,r.jsx)(n.code,{children:"radio"}),", ",(0,r.jsx)(n.code,{children:"input"}),", ",(0,r.jsx)(n.code,{children:"textarea"})," & ",(0,r.jsx)(n.code,{children:"select"}),' have some sort of "auto-validation"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"checkbox"})," & ",(0,r.jsx)(n.code,{children:"radio"})," do have a color change if you use the ",(0,r.jsx)(n.code,{children:"required"})," attribute. If you use ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation",children:"required"})," they will be highlighted directly"]}),"\n",(0,r.jsxs)(n.li,{children:["If you use ",(0,r.jsx)(n.code,{children:"required"})," on ",(0,r.jsx)(n.code,{children:"input"}),", ",(0,r.jsx)(n.code,{children:"textarea"})," or ",(0,r.jsx)(n.code,{children:"select"})," you will see invalid/valid states only on submitting or ",(0,r.jsx)(n.code,{children:"onchange"})]}),"\n",(0,r.jsxs)(n.li,{children:["There are some other attributes for ",(0,r.jsx)(n.code,{children:"input"})," (",(0,r.jsx)(n.code,{children:"type"}),",",(0,r.jsx)(n.code,{children:"minlength"}),",",(0,r.jsx)(n.code,{children:"maxlength"}),",",(0,r.jsx)(n.code,{children:"pattern"}),") and ",(0,r.jsx)(n.code,{children:"textarea"}),"(",(0,r.jsx)(n.code,{children:"minlength"}),",",(0,r.jsx)(n.code,{children:"maxlength"}),") which can be used for ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation",children:"validation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," When you use some validation like ",(0,r.jsx)(n.code,{children:"required"})," for ",(0,r.jsx)(n.code,{children:"input"}),", ",(0,r.jsx)(n.code,{children:"textarea"})," or ",(0,r.jsx)(n.code,{children:"select"})," you need to provide a ",(0,r.jsx)(n.code,{children:"invalidMessage"})," and a ",(0,r.jsx)(n.code,{children:"validMessage"}),". Otherwise, you will see a TODO message to inform you that an additional property should be provided."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"validinvalid-messages",children:"Valid/Invalid Messages"}),"\n",(0,r.jsxs)(n.p,{children:["If you use some framework you can pass the props ",(0,r.jsx)(n.code,{children:"invalidMessage"})," and ",(0,r.jsx)(n.code,{children:"validMessage"})," to the component. If you use plain html you need to add 2 ",(0,r.jsx)(n.code,{children:".db-infotext"})," with ",(0,r.jsx)(n.code,{children:'[data-semantic="successful"]'})," &",(0,r.jsx)(n.code,{children:'[data-semantic="critical"]'})," inside your form-element."]}),"\n",(0,r.jsx)(n.h2,{id:"force-validinvalid",children:"Force valid/invalid"}),"\n",(0,r.jsxs)(n.p,{children:["You can use ",(0,r.jsx)(n.code,{children:'invalid="true/false"'})," or ",(0,r.jsx)(n.code,{children:'data-invalid="true/false"'})," to overwrite the default behaviour of ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid",children:(0,r.jsx)(n.code,{children:":user-valid"})}),"."]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let o=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function d(e){return(0,r.jsx)(s,{})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})})}},16134:function(e,n,t){"use strict";var r=t(52322),i=t(2784),l=t(13776);let a=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-button",e.className),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=a},63900:function(e,n,t){"use strict";var r,i,l,a,s,o,d;t.d(n,{IY:function(){return c},YP:function(){return u},ce:function(){return h}});let c="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(o=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(d=a||(a={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return o},Vj:function(){return r},cd:function(){return s},mS:function(){return a},yI:function(){return l},yn:function(){return i}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},l=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},a=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),s=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},o=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,10851,92888,49774,40179],function(){return e(e.s=35504)}),_N_E=e.O()}]);