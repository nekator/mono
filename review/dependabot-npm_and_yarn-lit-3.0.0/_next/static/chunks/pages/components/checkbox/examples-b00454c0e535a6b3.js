(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98029],{36797:function(e,l,d){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/examples",function(){return d(54192)}])},80910:function(e,l,d){"use strict";var n=d(52322),c=d(2784),a=d(80724),o=d(76238);let i=(0,c.forwardRef)(function(e,l){let[d,i]=(0,c.useState)(()=>!1),[t,u]=(0,c.useState)(()=>o.IY),[s,r]=(0,c.useState)(()=>void 0),[h,b]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{i(!0),u(e.id||"checkbox-"+(0,a.Vj)()),e.stylePath&&b(e.stylePath)},[]),(0,c.useEffect)(()=>{if(d&&document&&t){var l;let d=null===(l=document)||void 0===l?void 0:l.getElementById(t);d&&(void 0!=e.checked&&(d.checked=e.checked),void 0!==e.indeterminate&&(d.indeterminate=e.indeterminate),void 0!==e.defaultChecked&&(d.defaultChecked=e.defaultChecked))}},[d,e.indeterminate,e.checked,e.defaultChecked]),(0,n.jsxs)("label",{"data-size":e.size,"data-label-hidden":e.labelHidden,htmlFor:t,className:(0,a.yI)("db-checkbox",e.className),children:[h?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,n.jsx)("input",{type:"checkbox",ref:l,id:t,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,required:e.required,onChange:l=>{var d,n,c,a,o,i;e.onChange&&e.onChange(l),e.change&&e.change(l),(null===(n=l.target)||void 0===n?void 0:null===(d=n.validity)||void 0===d?void 0:d.valid)!=s&&(r(null===(a=l.target)||void 0===a?void 0:null===(c=a.validity)||void 0===c?void 0:c.valid),e.validityChange&&e.validityChange(!!(null===(i=l.target)||void 0===i?void 0:null===(o=i.validity)||void 0===o?void 0:o.valid)))},onBlur:l=>{e.onBlur&&e.onBlur(l),e.blur&&e.blur(l)},onFocus:l=>{e.onFocus&&e.onFocus(l),e.focus&&e.focus(l)}}),e.label?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{children:e.label})}):null,e.children]})});l.Z=i},76238:function(e,l,d){"use strict";var n,c,a,o,i,t,u;d.d(l,{$f:function(){return x},DM:function(){return j},D_:function(){return b},IY:function(){return s},Kn:function(){return h},SU:function(){return r},YP:function(){return f},ce:function(){return g},iw:function(){return n},r$:function(){return a}});let s="OVERWRITE_DEFAULT_ID",r="LABEL SHOULD BE SET",h="-message",b="-placeholder",f="Back",g="Close Button";(i=n||(n={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive";let x=Object.entries(n).map(e=>{let[,l]=e;return l});(c||(c={})).PRIMARY="primary",(t=a||(a={})).BASE="base",t.BASE_STRONG="base-strong",t.BASE_TRANSPARENT_FULL="base-transparent-full",t.BASE_TRANSPARENT_SEMI="base-transparent-semi",t.NEUTRAL="neutral",t.NEUTRAL_STRONG="neutral-strong",t.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",t.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",t.BRAND="brand",t.BRAND_TRANSPARENT_FULL="brand-transparent-full",t.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",t.SUCCESSFUL="successful",t.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",t.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",t.CRITICAL="critical",t.CRITICAL_TRANSPARENT_Full="critical-transparent-full",t.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",t.WARNING="warning",t.WARNING_TRANSPARENT_FULL="warning-transparent-full",t.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",t.INFORMATIONAL="informational",t.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",t.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(a).map(e=>{let[,l]=e;return l});Object.entries(c).map(e=>{let[,l]=e;return l}),(u=o||(o={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(o).map(e=>{let[,l]=e;return l})},80724:function(e,l,d){"use strict";d.d(l,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,l;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(l=window.crypto)||void 0===l?void 0:l.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,l)=>{let d=e.children;Object.values(d).forEach(e=>{e.setAttribute(l.key,l.value),e.children.length>0&&addAttributeToChildren(e,l)})},cls=function(){for(var e=arguments.length,l=Array(e),d=0;d<e;d++)l[d]=arguments[d];let n="";return l.forEach((e,l)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let l in e)e[l]&&(n+="".concat(l," "))}}),n.trim()},getMessageIcon=(e,l)=>l||(e&&"adaptive"!==e?void 0:"none")},54192:function(e,l,d){"use strict";d.r(l);var n=d(52322),c=d(82797),a=d(80910);l.default=()=>(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("h1",{children:" DBCheckbox Examples "}),(0,n.jsxs)("dl",{className:"example-list",children:[(0,n.jsx)("dt",{children:"size:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{size:"small",children:"Test"})]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, describedbyid, disabled, focus, form, id, indeterminate, invalid, key, label, labelHidden, name, onBlur, onChange, onFocus, required, size, tabIndex, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",indeterminate:!0,invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,size:"small",tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, describedbyid, disabled, focus, form, id, indeterminate, invalid, key, label, labelHidden, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",indeterminate:!0,invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, describedbyid, disabled, focus, form, id, invalid, key, label, labelHidden, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, id, invalid, key, label, labelHidden, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",id:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, key, label, labelHidden, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onBlur, onChange, onFocus, required, tabIndex, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,tabIndex:100,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onBlur, onChange, onFocus, required, title, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"blur, change, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"blur, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"blur, checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, focus, form, invalid, label, labelHidden, name, onFocus, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,focus:e=>console.log(e),form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, form, invalid, label, labelHidden, name, onFocus, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, form, invalid, label, labelHidden, name, required, validityChange, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, defaultValue, disabled, form, invalid, label, labelHidden, name, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,defaultValue:"account",disabled:!0,form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, disabled, form, invalid, label, labelHidden, name, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,disabled:!0,form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, form, invalid, label, labelHidden, name, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,form:"account",invalid:!0,label:"account",labelHidden:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, invalid, label, labelHidden, name, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,invalid:!0,label:"account",labelHidden:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, label, labelHidden, name, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,label:"account",labelHidden:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, labelHidden, name, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,labelHidden:!0,name:"account",required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, labelHidden, required, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,labelHidden:!0,required:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, labelHidden, value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,labelHidden:!0,value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked, defaultChecked, labelHidden:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,defaultChecked:!0,labelHidden:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"defaultChecked, labelHidden:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{defaultChecked:!0,labelHidden:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"labelHidden:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{labelHidden:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"indeterminate:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{indeterminate:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"describedbyid:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{describedbyid:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"id:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{id:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"key:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{children:"Test"},"account")]}),(0,n.jsx)("dt",{children:"tabIndex:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{tabIndex:100,children:"Test"})]}),(0,n.jsx)("dt",{children:"title:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{title:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"change:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{change:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"onChange:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{onChange:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"blur:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{blur:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"onBlur:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{onBlur:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"focus:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{focus:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"onFocus:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{onFocus:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"validityChange:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{validityChange:e=>console.log(e),children:"Test"})]}),(0,n.jsx)("dt",{children:"defaultValue:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{defaultValue:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"disabled:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{disabled:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"form:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{form:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"invalid:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{invalid:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"label:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{label:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"name:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{name:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"required:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{required:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"value:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{value:"account",children:"Test"})]}),(0,n.jsx)("dt",{children:"checked:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{checked:!0,children:"Test"})]}),(0,n.jsx)("dt",{children:"defaultChecked:"})," ",(0,n.jsxs)("dd",{children:[" ",(0,n.jsx)(a.Z,{defaultChecked:!0,children:"Test"})]})]})]})}},function(e){e.O(0,[84375,82797,49774,92888,40179],function(){return e(e.s=36797)}),_N_E=e.O()}]);