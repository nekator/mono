"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80269],{37395:function(e,i,a){a.d(i,{P:function(){return r}});let r=(e,i,a)=>e.map((e,r)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(r))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,r,s,n;return{...e,example:i({...e.props,id:null!==(s=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==s?s:e.name,children:null!==(n=null===(r=e.props)||void 0===r?void 0:r.children)&&void 0!==n?n:e.name})}})}})},99341:function(e,i,a){var r=a(52322),s=a(5632),n=a(2784),d=a(11803),l=a(86095);let c=e=>{let{examples:i,slotCode:a}=e,[s,d]=(0,n.useState)();return(0,r.jsxs)(l.f,{className:"variants-card db-code-docs",children:[(0,r.jsx)("div",{className:"variants-list",children:i.map((e,i)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(i)))}),(0,r.jsxs)("details",{className:"code-details",onToggle:()=>{d(!s)},children:[(0,r.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:s?"Hide code":"Show code"}),(0,r.jsxs)("div",{className:"db-ui-functional",children:[(0,r.jsx)("div",{className:"backdrop"}),(0,r.jsx)(l.f,{className:"code",spacing:"small",children:a})]})]})]})};i.Z=e=>{let{title:i,variants:a}=e,[t,o]=(0,n.useState)(),x=(0,s.useRouter)();(0,n.useEffect)(()=>{if(x.query){var e;let i=null===(e=x.query.page)||void 0===e?void 0:e.toString();i&&o(a.find(e=>e.name.toLowerCase()===i))}},[x]);let v=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("div",{children:(0,r.jsx)(c,{...t})}),!t&&(0,r.jsx)(d.Z,{children:(0,r.jsxs)("div",{className:"default-container",children:[(0,r.jsx)("h1",{children:i}),null==a?void 0:a.map((e,i)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(l.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(l.vB,{content:"external",target:"_blank",href:v(e),children:e.name})}),(0,r.jsx)(c,{...e})]},"".concat(e.name,"-").concat(i)))]})})]})}},90038:function(e,i,a){a.r(i);var r=a(52322),s=a(2784),n=a(9513),d=a(33878),l=a(95696),c=a(79041),t=a(16909),o=a(16134);i.default=()=>{let[e,i]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>i(!1),1500)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:"<db-divider>Weak (Default)</db-divider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>Weak (Default)</db-divider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Weak (Default)</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Weak (Default)</DBDivider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Weak (Default)</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Weak (Default)</DBDivider>")},children:"Copy"})]})]})}),(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-divider emphasis="strong">Strong</db-divider>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<db-divider emphasis="strong">Strong</db-divider>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div data-emphasis="strong" class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div data-emphasis="strong" class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider emphasis="strong">Strong</DBDivider>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider emphasis="strong">Strong</DBDivider>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider emphasis="strong">Strong</DBDivider>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider emphasis="strong">Strong</DBDivider>')},children:"Copy"})]})]})})]})}},29137:function(e,i,a){a.r(i);var r=a(52322),s=a(2784),n=a(9513),d=a(33878),l=a(95696),c=a(79041),t=a(16909),o=a(16134);i.default=()=>{let[e,i]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>i(!1),1500)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:"<db-divider>functional</db-divider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>functional</db-divider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>functional</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>functional</DBDivider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>functional</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>functional</DBDivider>")},children:"Copy"})]})]})}),(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:"<db-divider>Regular (Default)</db-divider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>Regular (Default)</db-divider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Regular (Default)</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Regular (Default)</DBDivider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Regular (Default)</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Regular (Default)</DBDivider>")},children:"Copy"})]})]})}),(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:"<db-divider>expressive</db-divider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>expressive</db-divider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>expressive</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>expressive</DBDivider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>expressive</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>expressive</DBDivider>")},children:"Copy"})]})]})})]})}},71693:function(e,i,a){a.r(i);var r=a(52322),s=a(2784),n=a(9513),d=a(33878),l=a(95696),c=a(79041),t=a(16909),o=a(16134);i.default=()=>{let[e,i]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>i(!1),1500)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:"<db-divider>Adaptive - Horizontal (Default)</db-divider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>Adaptive - Horizontal (Default)</db-divider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Adaptive - Horizontal (Default)</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Adaptive - Horizontal (Default)</DBDivider>")},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Adaptive - Horizontal (Default)</DBDivider>"})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Adaptive - Horizontal (Default)</DBDivider>")},children:"Copy"})]})]})}),(0,r.jsx)(n.Z,{className:"tab-container",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Angular"}),(0,r.jsx)(c.Z,{children:"HTML"}),(0,r.jsx)(c.Z,{children:"React"}),(0,r.jsx)(c.Z,{children:"Vue"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-divider variant="vertical">Adaptive - Vertical</db-divider>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<db-divider variant="vertical">Adaptive - Vertical</db-divider>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div data-variant="vertical" class="db-divider"></div>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div data-variant="vertical" class="db-divider"></div>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>')},children:"Copy"})]}),(0,r.jsxs)(t.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>'})}),(0,r.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>')},children:"Copy"})]})]})})]})}},55491:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"200px"},"className":"db-ui-functional","props":{}},{"name":"Regular (Default)","style":{"width":"200px"},"className":"db-ui-regular","props":{}},{"name":"expressive","style":{"width":"200px"},"className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Adaptive - Horizontal (Default)","style":{"width":"200px"},"props":{}},{"name":"Adaptive - Vertical","style":{"height":"100px"},"props":{"variant":"vertical"}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","style":{"width":"200px"},"props":{}},{"name":"Strong","style":{"width":"200px"},"props":{"emphasis":"strong"}}]}]')}}]);