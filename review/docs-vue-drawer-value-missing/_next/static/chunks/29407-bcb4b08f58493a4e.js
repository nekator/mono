"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29407],{45016:function(e,i,a){a.d(i,{P:function(){return n}});let n=(e,i,a)=>e.map((e,n)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(n))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,n,s,r;return{...e,example:i({...e.props,id:null!==(s=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==s?s:e.name,children:null!==(r=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==r?r:e.name})}})}})},47439:function(e,i,a){var n=a(52322),s=a(5632),r=a(2784),d=a(22116),l=a(71950);let c=e=>{let{examples:i,slotCode:a}=e,[s,d]=(0,r.useState)();return(0,n.jsxs)(l.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:i.map((e,i)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(i)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{d(!s)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:s?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-ui-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(l.f,{className:"code",spacing:"small",children:a})]})]})]})},t=e=>{let{variants:i,componentName:a}=e,s=(e,i)=>{if(!window.location.origin||!window.location.href)return"";let a=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return i?"".concat(a.split("components")[0],"/components/").concat(i).concat(n):"".concat(a).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==i?void 0:i.map((e,i)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(l.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(l.vB,{content:"external",target:"_blank",href:s(e,a),children:e.name})}),(0,n.jsx)(c,{...e})]},"".concat(e.name,"-").concat(i)))})};i.Z=e=>{let{title:i,variants:a,subComponent:l,isSubComponent:o,componentName:x}=e,[v,h]=(0,r.useState)(),p=(0,s.useRouter)();return(0,r.useEffect)(()=>{if(p.query){var e;let i=null===(e=p.query.page)||void 0===e?void 0:e.toString();i&&h(a.find(e=>e.name.toLowerCase()===i))}},[p]),(0,n.jsxs)(n.Fragment,{children:[v&&(0,n.jsx)("div",{children:(0,n.jsx)(c,{...v})}),!v&&!o&&(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:i}),(0,n.jsx)(t,{variants:a,componentName:x})]}),l]}),!v&&o&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:i}),(0,n.jsx)(t,{variants:a,componentName:x})]})]})}},54653:function(e,i,a){a.r(i);var n=a(52322),s=a(2784),r=a(70741),d=a(57092),l=a(57884),c=a(3041),t=a(49953),o=a(10326);i.default=()=>{let[e,i]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>i(!1),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-divider>(Default) Weak</db-divider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>(Default) Weak</db-divider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>(Default) Weak</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>(Default) Weak</DBDivider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>(Default) Weak</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>(Default) Weak</DBDivider>")},children:"Copy"})]})]})}),(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-divider emphasis="strong">Strong</db-divider>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<db-divider emphasis="strong">Strong</db-divider>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div data-emphasis="strong" class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div data-emphasis="strong" class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider emphasis="strong">Strong</DBDivider>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider emphasis="strong">Strong</DBDivider>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider emphasis="strong">Strong</DBDivider>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider emphasis="strong">Strong</DBDivider>')},children:"Copy"})]})]})})]})}},69346:function(e,i,a){a.r(i);var n=a(52322),s=a(2784),r=a(70741),d=a(57092),l=a(57884),c=a(3041),t=a(49953),o=a(10326);i.default=()=>{let[e,i]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>i(!1),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-divider>Functional</db-divider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>Functional</db-divider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Functional</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Functional</DBDivider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Functional</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Functional</DBDivider>")},children:"Copy"})]})]})}),(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-divider>(Default) Regular</db-divider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>(Default) Regular</db-divider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>(Default) Regular</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>(Default) Regular</DBDivider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>(Default) Regular</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>(Default) Regular</DBDivider>")},children:"Copy"})]})]})}),(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-divider>Expressive</db-divider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>Expressive</db-divider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Expressive</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Expressive</DBDivider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>Expressive</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>Expressive</DBDivider>")},children:"Copy"})]})]})})]})}},86741:function(e,i,a){a.r(i);var n=a(52322),s=a(2784),r=a(70741),d=a(57092),l=a(57884),c=a(3041),t=a(49953),o=a(10326);i.default=()=>{let[e,i]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>i(!1),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-divider>(Default) Adaptive - Horizontal</db-divider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<db-divider>(Default) Adaptive - Horizontal</db-divider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>(Default) Adaptive - Horizontal</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>(Default) Adaptive - Horizontal</DBDivider>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>(Default) Adaptive - Horizontal</DBDivider>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText("<DBDivider>(Default) Adaptive - Horizontal</DBDivider>")},children:"Copy"})]})]})}),(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-divider variant="vertical">Adaptive - Vertical</db-divider>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<db-divider variant="vertical">Adaptive - Vertical</db-divider>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div data-variant="vertical" class="db-divider"></div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<div data-variant="vertical" class="db-divider"></div>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{i(!0),navigator.clipboard.writeText('<DBDivider variant="vertical">Adaptive - Vertical</DBDivider>')},children:"Copy"})]})]})})]})}},55491:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","style":{"width":"200px"},"className":"db-ui-functional","props":{}},{"name":"(Default) Regular","style":{"width":"200px"},"className":"db-ui-regular","props":{}},{"name":"Expressive","style":{"width":"200px"},"className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive - Horizontal","style":{"width":"200px"},"props":{}},{"name":"Adaptive - Vertical","style":{"height":"100px"},"props":{"variant":"vertical"}}]},{"name":"Emphasis","examples":[{"name":"(Default) Weak","style":{"width":"200px"},"props":{}},{"name":"Strong","style":{"width":"200px"},"props":{"emphasis":"strong"}}]}]')}}]);