(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5341],{5021:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/examples",function(){return n(25774)}])},42029:function(e,l,n){"use strict";var c=n(52322),d=n(2784),a=n(36029),o=n(41220);let t=(0,d.forwardRef)(function(e,l){let[n,t]=(0,d.useState)(()=>!1),[i,u]=(0,d.useState)(()=>o.IY),[s,r]=(0,d.useState)(()=>void 0),[h,f]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{t(!0),u(e.id||"radio-"+(0,a.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,d.useEffect)(()=>{if(e.checked&&n&&document&&i){var l;let e=null===(l=document)||void 0===l?void 0:l.getElementById(i);e&&(e.checked=!0,t(!1))}},[n]),(0,c.jsxs)(c.Fragment,{children:[h?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,c.jsx)("input",{type:"radio",ref:l,className:(0,a.yI)("db-radio",e.className),id:i,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,value:e.value,required:e.required,onChange:l=>{var n,c,d,a,o,t;e.onChange&&e.onChange(l),e.change&&e.change(l),(null===(c=l.target)||void 0===c?void 0:null===(n=c.validity)||void 0===n?void 0:n.valid)!=s&&(r(null===(a=l.target)||void 0===a?void 0:null===(d=a.validity)||void 0===d?void 0:d.valid),e.validityChange&&e.validityChange(!!(null===(t=l.target)||void 0===t?void 0:null===(o=t.validity)||void 0===o?void 0:o.valid)))},onBlur:l=>{e.onBlur&&e.onBlur(l),e.blur&&e.blur(l)},onFocus:l=>{e.onFocus&&e.onFocus(l),e.focus&&e.focus(l)}}),(0,c.jsxs)("label",{htmlFor:i,children:[e.label?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{children:e.label})}):null,e.children]})]})});l.Z=t},41220:function(e,l,n){"use strict";var c,d,a,o,t,i,u;n.d(l,{$f:function(){return x},DM:function(){return j},IY:function(){return s},Kn:function(){return h},SU:function(){return r},YP:function(){return f},ce:function(){return g},iw:function(){return c},r$:function(){return a}});let s="OVERWRITE_DEFAULT_ID",r="LABEL SHOULD BE SET",h="-message",f="Back",g="Close Button";(t=c||(c={})).FUNCTIONAL="functional",t.REGULAR="regular",t.EXPRESSIVE="expressive";let x=Object.entries(c).map(e=>{let[,l]=e;return l});(d||(d={})).PRIMARY="primary",(i=a||(a={})).NEUTRAL="neutral",i.NEUTRAL_STRONG="neutral-strong",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.PRIMARY="primary",i.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",i.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",i.SUCCESSFUL="successful",i.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",i.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.WARNING="warning",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.INFORMATIONAL="informational",i.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",i.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(a).map(e=>{let[,l]=e;return l});Object.entries(d).map(e=>{let[,l]=e;return l}),(u=o||(o={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(o).map(e=>{let[,l]=e;return l})},36029:function(e,l,n){"use strict";n.d(l,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,l;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(l=window.crypto)||void 0===l?void 0:l.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,l)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(l.key,l.value),e.children.length>0&&addAttributeToChildren(e,l)})},cls=function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];let c="";return l.forEach((e,l)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let l in e)e[l]&&(c+="".concat(l," "))}}),c.trim()},getMessageIcon=(e,l)=>l||(e&&"adaptive"!==e?void 0:"none")},25774:function(e,l,n){"use strict";n.r(l);var c=n(52322),d=n(2087),a=n(42029);l.default=()=>(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("h1",{children:" DBRadio Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, describedbyid, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, size, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, id, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, key, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, title, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"blur, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, form, invalid, label, name, onFocus, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, form, invalid, label, name, required, validityChange, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, disabled, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,disabled:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, form, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,form:"account",invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, invalid, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,invalid:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, label, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, name, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, required, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,required:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked, value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultChecked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,defaultChecked:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"defaultChecked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{defaultChecked:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"size:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{size:"small",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"change:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{change:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"blur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{blur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onBlur:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onBlur:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"focus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{focus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onFocus:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{onFocus:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"validityChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{validityChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"defaultValue:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{defaultValue:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{disabled:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"form:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{form:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"invalid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{invalid:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{label:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{name:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"required:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{required:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(a.Z,{checked:!0,children:"Test"})]})]})]})}},function(e){e.O(0,[4375,2087,9774,2888,179],function(){return e(e.s=5021)}),_N_E=e.O()}]);