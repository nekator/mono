(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5341],{5021:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/examples",function(){return n(2944)}])},53048:function(e,l,n){"use strict";var c=n(52322),d=n(2784),a=n(7070),o=n(8490);let i=(0,d.forwardRef)(function(e,l){let[n,i]=(0,d.useState)(()=>!1),[s,t]=(0,d.useState)(()=>o.IY),[r,u]=(0,d.useState)(()=>void 0),[h,g]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{i(!0),t(e.id||"radio-"+(0,a.Vj)()),e.stylePath&&g(e.stylePath)},[]),(0,d.useEffect)(()=>{if(e.checked&&n&&document&&s){var l;let e=null===(l=document)||void 0===l?void 0:l.getElementById(s);e&&(e.checked=!0,i(!1))}},[n]),(0,c.jsxs)(c.Fragment,{children:[h?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,c.jsx)("input",{type:"radio",ref:l,className:(0,a.yI)("db-radio",e.className),id:s,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,value:e.value,required:e.required,onChange:l=>{var n,c,d,a,o,i;e.onChange&&e.onChange(l),e.change&&e.change(l),(null===(c=l.target)||void 0===c?void 0:null===(n=c.validity)||void 0===n?void 0:n.valid)!=r&&(u(null===(a=l.target)||void 0===a?void 0:null===(d=a.validity)||void 0===d?void 0:d.valid),e.validityChange&&e.validityChange(!!(null===(i=l.target)||void 0===i?void 0:null===(o=i.validity)||void 0===o?void 0:o.valid)))},onBlur:l=>{e.onBlur&&e.onBlur(l),e.blur&&e.blur(l)},onFocus:l=>{e.onFocus&&e.onFocus(l),e.focus&&e.focus(l)}}),(0,c.jsxs)("label",{htmlFor:s,children:[e.label?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{children:e.label})}):null,e.children]})]})});l.Z=i},8490:function(e,l,n){"use strict";var c,d,a,o,i,s,t;n.d(l,{$f:function(){return x},DM:function(){return f},IY:function(){return r},SU:function(){return u},YP:function(){return h},ce:function(){return g},iw:function(){return c},r$:function(){return a}});let r="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",g="Close Button";(i=c||(c={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let x=Object.entries(c).map(e=>{let[,l]=e;return l});(d||(d={})).PRIMARY="primary",(s=a||(a={})).NEUTRAL="neutral",s.NEUTRAL_STRONG="neutral-strong",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.PRIMARY="primary",s.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",s.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",s.SUCCESSFUL="successful",s.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",s.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",s.CRITICAL="critical",s.CRITICAL_TRANSPARENT_Full="critical-transparent-full",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_TRANSPARENT_FULL="warning-transparent-full",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATIONAL="informational",s.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",s.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let f=Object.entries(a).map(e=>{let[,l]=e;return l});Object.entries(d).map(e=>{let[,l]=e;return l}),(t=o||(o={})).CRITICAL="critical",t.INFORMATIONAL="informational",t.WARNING="warning",t.SUCCESSFUL="successful",Object.entries(o).map(e=>{let[,l]=e;return l})},7070:function(e,l,n){"use strict";n.d(l,{Vj:function(){return c},mT:function(){return o},yI:function(){return a},yn:function(){return d}});let c=()=>{try{if(window.crypto){if(window.crypto.randomUUID)return window.crypto.randomUUID();if(window.crypto.getRandomValues)return window.crypto.getRandomValues(new Uint32Array(3)).join("-")}}catch(e){console.warn(e)}return Math.random().toString()},d=(e,l)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(l.key,l.value),e.children.length>0&&d(e,l)})},a=function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];let c="";return l.forEach((e,l)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let l in e)e[l]&&(c+="".concat(l," "))}}),c.trim()},o=(e,l)=>l||(e&&"adaptive"!==e?void 0:"none")},2944:function(e,l,n){"use strict";n.r(l);var c=n(52322),d=n(18338),a=n(53048);l.default=()=>(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("h1",{children:" DBRadio Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, describedbyid, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, focus, form, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, form, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, form, invalid, label, name, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, disabled, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"size:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{size:"small",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"change:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{change:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"blur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onBlur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onBlur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"focus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{focus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onFocus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onFocus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"validityChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{validityChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"defaultValue:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{defaultValue:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{disabled:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"form:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{form:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"invalid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{invalid:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{label:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{name:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"required:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{required:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{value:"account",children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=5021)}),_N_E=e.O()}]);