(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8686],{62509:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/examples",function(){return a(44339)}])},96889:function(e,n,a){"use strict";var c=a(52322),i=a(2784),t=a(7070);let d=(0,i.forwardRef)(function(e,n){let[a,d]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,c.jsxs)("button",{id:e.id,ref:n,className:(0,t.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[a?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:a})}):null,e.children]})});n.Z=d},94938:function(e,n,a){"use strict";a.d(n,{Y:function(){return c.Z}});var c=a(96889)},35524:function(e,n,a){"use strict";var c=a(52322),i=a(2784),t=a(94938),d=a(7070),l=a(8490);let r=(0,i.forwardRef)(function(e,n){let[a,r]=(0,i.useState)(()=>!1),[o,s]=(0,i.useState)(()=>l.IY),[u,h]=(0,i.useState)(()=>void 0);function v(){return e.removeButton?e.removeButton:"Remove tag"}function x(){return!!e.behaviour&&e.behaviour.includes("interactive")}let[m,f]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{r(!0),s(e.id||"tag-"+(0,d.Vj)()),e.stylePath&&f(e.stylePath)},[]),(0,i.useEffect)(()=>{if(e.checked&&a&&document&&o){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(o);e&&(e.checked=!0,r(!1))}},[a]),(0,c.jsxs)("div",{ref:n,id:e.id,className:(0,d.yI)("db-tag",e.className),tabIndex:function(){var n;if(!e.disabled)return null!==(n=e.tabIndex)&&void 0!==n?n:void 0}(),"data-interactive":x(),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,children:[m?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:m})}):null,x()?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{id:o,type:"interactive-unique"===e.behaviour?"radio":"checkbox",checked:e.checked,name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-invalid":e.invalid,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n)}}),(0,c.jsx)("label",{className:(0,d.yI)("tag-label",{"is-icon-text-replace":e.noText}),htmlFor:o,"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})]}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{className:(0,d.yI)("tag-label",{"is-icon-text-replace":e.noText}),"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})}),"removable"===e.behaviour?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(t.Y,{icon:"close",size:"small",variant:"text",onClick:n=>void(e.onRemove&&e.onRemove()),noText:!0,title:v(),children:v()})}):null]})});n.Z=r},8490:function(e,n,a){"use strict";var c,i,t,d,l,r,o;a.d(n,{$f:function(){return x},DM:function(){return m},IY:function(){return s},SU:function(){return u},YP:function(){return h},ce:function(){return v},iw:function(){return c},r$:function(){return t}});let s="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",v="Close Button";(l=c||(c={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive";let x=Object.entries(c).map(e=>{let[,n]=e;return n});(i||(i={})).PRIMARY="primary",(r=t||(t={})).NEUTRAL="neutral",r.NEUTRAL_STRONG="neutral-strong",r.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",r.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",r.PRIMARY="primary",r.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",r.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",r.SUCCESSFUL="successful",r.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",r.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",r.CRITICAL="critical",r.CRITICAL_TRANSPARENT_Full="critical-transparent-full",r.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",r.WARNING="warning",r.WARNING_TRANSPARENT_FULL="warning-transparent-full",r.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",r.INFORMATIONAL="informational",r.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",r.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let m=Object.entries(t).map(e=>{let[,n]=e;return n});Object.entries(i).map(e=>{let[,n]=e;return n}),(o=d||(d={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,n]=e;return n})},7070:function(e,n,a){"use strict";a.d(n,{Vj:function(){return c},mT:function(){return d},yI:function(){return t},yn:function(){return i}});let c=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{let a=e.children;Object.values(a).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},t=function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];let c="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)c+="".concat(e," ");else for(let n in e)e[n]&&(c+="".concat(n," "))}}),c.trim()},d=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")},44339:function(e,n,a){"use strict";a.r(n);var c=a(52322),i=a(18338),t=a(35524);n.default=()=>(0,c.jsxs)(i.Z,{children:[(0,c.jsx)("h1",{children:" DBTag Examples "}),(0,c.jsxs)("dl",{className:"example-list",children:[(0,c.jsx)("dt",{children:"behaviour:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{behaviour:"interactive-unique",children:"Test"})]}),(0,c.jsx)("dt",{children:"behaviour, change, checked, defaultValue, describedbyid, disabled, emphasis, form, icon, id, invalid, key, label, name, noText, onChange, onRemove, overflow, removeButton, required, tabIndex, title, value, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{behaviour:"interactive-unique",change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",noText:!0,onChange:e=>console.log(e),onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, emphasis, form, icon, id, invalid, key, label, name, noText, onChange, onRemove, overflow, removeButton, required, tabIndex, title, value, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",noText:!0,onChange:e=>console.log(e),onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, emphasis, form, icon, id, invalid, key, label, name, onChange, onRemove, overflow, removeButton, required, tabIndex, title, value, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),onRemove:()=>console.log("onRemove triggered"),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, emphasis, form, icon, id, invalid, key, label, name, onChange, overflow, removeButton, required, tabIndex, title, value, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, emphasis, form, icon, id, invalid, key, label, name, onChange, overflow, required, tabIndex, title, value, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, emphasis, form, icon, id, invalid, key, label, name, onChange, overflow, required, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, disabled, emphasis, form, icon, id, invalid, key, label, name, onChange, overflow, required, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, disabled, emphasis, form, icon, invalid, key, label, name, onChange, overflow, required, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, disabled, emphasis, form, icon, invalid, label, name, onChange, overflow, required, tabIndex, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, disabled, emphasis, form, icon, invalid, label, name, onChange, overflow, required, title, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,title:"account",variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"change, checked, defaultValue, disabled, emphasis, form, icon, invalid, label, name, onChange, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, emphasis, form, icon, invalid, label, name, onChange, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, defaultValue, disabled, emphasis, form, icon, invalid, label, name, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,defaultValue:"account",disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, disabled, emphasis, form, icon, invalid, label, name, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,disabled:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, emphasis, form, icon, invalid, label, name, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,emphasis:"strong",form:"account",icon:"account",invalid:!0,label:"account",name:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, emphasis, icon, invalid, label, name, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,emphasis:"strong",icon:"account",invalid:!0,label:"account",name:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, emphasis, icon, label, name, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,emphasis:"strong",icon:"account",label:"account",name:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, emphasis, icon, name, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,emphasis:"strong",icon:"account",name:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, emphasis, icon, overflow, required, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,emphasis:"strong",icon:"account",overflow:!0,required:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"checked, emphasis, icon, overflow, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,emphasis:"strong",icon:"account",overflow:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"emphasis, icon, overflow, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{emphasis:"strong",icon:"account",overflow:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"emphasis, overflow, variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{emphasis:"strong",overflow:!0,variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"emphasis, overflow:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{emphasis:"strong",overflow:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"emphasis:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{emphasis:"strong",children:"Test"})]}),(0,c.jsx)("dt",{children:"noText:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{noText:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"onRemove:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{onRemove:()=>console.log("onRemove triggered"),children:"Test"})]}),(0,c.jsx)("dt",{children:"removeButton:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{removeButton:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"value:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{value:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"describedbyid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{describedbyid:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"id:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{id:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"key:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{children:"Test"},"account")]}),(0,c.jsx)("dt",{children:"tabIndex:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{tabIndex:100,children:"Test"})]}),(0,c.jsx)("dt",{children:"title:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{title:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"change:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{change:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"onChange:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{onChange:e=>console.log(e),children:"Test"})]}),(0,c.jsx)("dt",{children:"defaultValue:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{defaultValue:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"disabled:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{disabled:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"form:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{form:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"invalid:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{invalid:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"label:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{label:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"name:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{name:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"required:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{required:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"checked:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{checked:!0,children:"Test"})]}),(0,c.jsx)("dt",{children:"icon:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{icon:"account",children:"Test"})]}),(0,c.jsx)("dt",{children:"variant:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{variant:"critical",children:"Test"})]}),(0,c.jsx)("dt",{children:"overflow:"})," ",(0,c.jsxs)("dd",{children:[" ",(0,c.jsx)(t.Z,{overflow:!0,children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=62509)}),_N_E=e.O()}]);