(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8029],{36797:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/examples",function(){return l(71832)}])},27818:function(e,n,l){"use strict";var c=l(52322),d=l(2784),a=l(7070),o=l(8490);let i=(0,d.forwardRef)(function(e,n){let[l,i]=(0,d.useState)(()=>!1),[t,s]=(0,d.useState)(()=>o.IY),[r,u]=(0,d.useState)(()=>void 0),[h,g]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{i(!0),s(e.id||"checkbox-"+(0,a.Vj)()),e.stylePath&&g(e.stylePath)},[]),(0,d.useEffect)(()=>{if(l&&document&&t){var n;let l=null===(n=document)||void 0===n?void 0:n.getElementById(t);l&&(void 0!=e.checked&&(l.checked=e.checked),void 0!==e.indeterminate&&(l.indeterminate=e.indeterminate))}},[l,e.indeterminate,e.checked]),(0,c.jsxs)(c.Fragment,{children:[h?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,c.jsx)("input",{type:"checkbox",ref:n,className:(0,a.yI)("db-checkbox",e.className),id:t,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,required:e.required,onChange:n=>{var l,c,d,a,o,i;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(c=n.target)||void 0===c?void 0:null===(l=c.validity)||void 0===l?void 0:l.valid)!=r&&(u(null===(a=n.target)||void 0===a?void 0:null===(d=a.validity)||void 0===d?void 0:d.valid),e.validityChange&&e.validityChange(!!(null===(i=n.target)||void 0===i?void 0:null===(o=i.validity)||void 0===o?void 0:o.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,c.jsxs)("label",{htmlFor:t,children:[e.label?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{children:e.label})}):null,e.children]})]})});n.Z=i},8490:function(e,n,l){"use strict";var c,d,a,o,i,t,s;l.d(n,{$f:function(){return x},DM:function(){return f},IY:function(){return r},SU:function(){return u},YP:function(){return h},ce:function(){return g},iw:function(){return c},r$:function(){return a}});let r="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",g="Close Button";(i=c||(c={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let x=Object.entries(c).map(e=>{let[,n]=e;return n});(d||(d={})).PRIMARY="primary",(t=a||(a={})).NEUTRAL="neutral",t.NEUTRAL_STRONG="neutral-strong",t.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",t.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",t.PRIMARY="primary",t.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",t.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",t.SUCCESSFUL="successful",t.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",t.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",t.CRITICAL="critical",t.CRITICAL_TRANSPARENT_Full="critical-transparent-full",t.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",t.WARNING="warning",t.WARNING_TRANSPARENT_FULL="warning-transparent-full",t.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",t.INFORMATIONAL="informational",t.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",t.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let f=Object.entries(a).map(e=>{let[,n]=e;return n});Object.entries(d).map(e=>{let[,n]=e;return n}),(s=o||(o={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(o).map(e=>{let[,n]=e;return n})},7070:function(e,n,l){"use strict";l.d(n,{Vj:function(){return c},mT:function(){return o},yI:function(){return a},yn:function(){return d}});let c=()=>{try{if(window.crypto){if(window.crypto.randomUUID)return window.crypto.randomUUID();if(window.crypto.getRandomValues)return window.crypto.getRandomValues(new Uint32Array(3)).join("-")}}catch(e){console.warn(e)}return Math.random().toString()},d=(e,n)=>{let l=e.children;Object.values(l).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&d(e,n)})},a=function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];let c="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let n in e)e[n]&&(c+="".concat(n," "))}}),c.trim()},o=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")},71832:function(e,n,l){"use strict";l.r(n);var c=l(52322),d=l(18338),a=l(27818);n.default=()=>(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("h1",{children:" DBCheckbox Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"size:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{size:"small",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, describedbyid, disabled, focus, form, id, indeterminate, invalid, key, label, name, onBlur, onChange, onFocus, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",indeterminate:!0,invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, describedbyid, disabled, focus, form, id, indeterminate, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",indeterminate:!0,invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, describedbyid, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, focus, form, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, form, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, form, invalid, label, name, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, disabled, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"indeterminate:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{indeterminate:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"change:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{change:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"blur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onBlur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onBlur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"focus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{focus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onFocus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onFocus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"validityChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{validityChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"defaultValue:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{defaultValue:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{disabled:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"form:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{form:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"invalid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{invalid:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{label:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{name:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"required:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{required:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{value:"account",children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=36797)}),_N_E=e.O()}]);