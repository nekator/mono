(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5341],{5021:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/examples",function(){return l(2944)}])},53048:function(e,n,l){"use strict";var c=l(52322),a=l(2784),o=l(7070),d=l(8490);let i=(0,a.forwardRef)(function(e,n){let[l,i]=(0,a.useState)(()=>!1),[t,s]=(0,a.useState)(()=>d.IY),[u,r]=(0,a.useState)(()=>void 0),[h,g]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{i(!0),s(e.id||"radio-"+(0,o.Vj)()),e.stylePath&&g(e.stylePath)},[]),(0,a.useEffect)(()=>{if(e.checked&&l&&document&&t){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(t);e&&(e.checked=!0,i(!1))}},[l]),(0,c.jsxs)(c.Fragment,{children:[h?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,c.jsx)("input",{type:"radio",ref:n,className:(0,o.yI)("db-radio",e.className),id:t,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,value:e.value,required:e.required,onChange:n=>{var l,c,a,o,d,i;e.onChange&&e.onChange(n),e.change&&e.change(n),(null===(c=n.target)||void 0===c?void 0:null===(l=c.validity)||void 0===l?void 0:l.valid)!=u&&(r(null===(o=n.target)||void 0===o?void 0:null===(a=o.validity)||void 0===a?void 0:a.valid),e.validityChange&&e.validityChange(!!(null===(i=n.target)||void 0===i?void 0:null===(d=i.validity)||void 0===d?void 0:d.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,c.jsxs)("label",{htmlFor:t,children:[e.label?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{children:e.label})}):null,e.children]})]})});n.Z=i},8490:function(e,n,l){"use strict";var c,a,o,d,i,t,s;l.d(n,{$f:function(){return x},DM:function(){return v},IY:function(){return u},SU:function(){return r},YP:function(){return h},ce:function(){return g},iw:function(){return c},r$:function(){return o}});let u="OVERWRITE_DEFAULT_ID",r="LABEL SHOULD BE SET",h="Back",g="Close Button";(i=c||(c={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let x=Object.entries(c).map(e=>{let[,n]=e;return n});(a||(a={})).PRIMARY="primary",(t=o||(o={})).NEUTRAL="neutral",t.NEUTRAL_STRONG="neutral-strong",t.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",t.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",t.PRIMARY="primary",t.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",t.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",t.SUCCESSFUL="successful",t.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",t.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",t.CRITICAL="critical",t.CRITICAL_TRANSPARENT_Full="critical-transparent-full",t.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",t.WARNING="warning",t.WARNING_TRANSPARENT_FULL="warning-transparent-full",t.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",t.INFORMATIONAL="informational",t.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",t.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let v=Object.entries(o).map(e=>{let[,n]=e;return n});Object.entries(a).map(e=>{let[,n]=e;return n}),(s=d||(d={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,n]=e;return n})},7070:function(e,n,l){"use strict";l.d(n,{Vj:function(){return c},yI:function(){return o},yn:function(){return a}});let c=()=>{try{if(window.crypto){if(window.crypto.randomUUID)return window.crypto.randomUUID();if(window.crypto.getRandomValues)return window.crypto.getRandomValues(new Uint32Array(3)).join("-")}}catch(e){console.warn(e)}return Math.random().toString()},a=(e,n)=>{let l=e.children;Object.values(l).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&a(e,n)})},o=function(){for(var e=arguments.length,n=Array(e),l=0;l<e;l++)n[l]=arguments[l];let c="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let n in e)e[n]&&(c+="".concat(n," "))}}),c.trim()}},2944:function(e,n,l){"use strict";l.r(n);var c=l(52322),a=l(18338),o=l(53048);n.default=()=>(0,c.jsxs)(a.Z,{children:[(0,c.jsx)("h1",{children:" DBRadio Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, describedbyid, disabled, focus, id, invalid, key, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, id, invalid, key, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, id, invalid, key, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, key, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, max, maxLength, min, minLength, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,maxLength:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, max, min, minLength, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,min:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, max, min, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",max:100,min:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, min, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",min:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultValue, disabled, focus, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultValue, disabled, focus, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultValue, disabled, focus, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, focus, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, focus, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,defaultValue:"account",disabled:!0,invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, invalid, label, name, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,defaultValue:"account",disabled:!0,invalid:!0,label:"account",name:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,defaultValue:"account",disabled:!0,invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, disabled, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,disabled:!0,invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,invalid:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,invalid:!0,required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,invalid:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, invalid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,invalid:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"checked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{checked:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"size:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{size:"small",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"placeholder:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{placeholder:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"maxLength:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{maxLength:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"minLength:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{minLength:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"max:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{max:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"min:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{min:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"pattern:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{pattern:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"change:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{change:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{onChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"blur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{blur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onBlur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{onBlur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"focus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{focus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onFocus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{onFocus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"validityChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{validityChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"defaultValue:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{defaultValue:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{disabled:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{label:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{name:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"required:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{required:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"invalid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(o.Z,{invalid:!0,children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=5021)}),_N_E=e.O()}]);