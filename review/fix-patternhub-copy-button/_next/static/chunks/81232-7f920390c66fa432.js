"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81232],{45016:function(e,a,s){s.d(a,{P:function(){return n}});let n=(e,a,s)=>e.map((e,n)=>{var d;return{...e,slotCode:null!==(d=null==s?void 0:s.at(n))&&void 0!==d?d:"No code available",examples:e.examples.map(e=>{var s,n,d,l;return{...e,example:a({...e.props,id:null!==(d=null===(s=e.props)||void 0===s?void 0:s.id)&&void 0!==d?d:e.name,children:null!==(l=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==l?l:e.name})}})}})},47439:function(e,a,s){var n=s(52322),d=s(5632),l=s(2784),c=s(55216),r=s(18297);let i=e=>{let{examples:a,slotCode:s}=e,[d,c]=(0,l.useState)();return(0,n.jsxs)(r.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{c(!d)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:d?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(r.f,{className:"code",spacing:"small",children:s})]})]})]})},t=e=>{let{variants:a,componentName:s}=e,d=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let s=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return a?"".concat(s.split("components")[0],"/components/").concat(a).concat(n):"".concat(s).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:d(e,s),children:e.name})}),(0,n.jsx)(i,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:s,subComponent:r,isSubComponent:o,componentName:g}=e,[p,m]=(0,l.useState)(),x=(0,d.useRouter)();return(0,l.useEffect)(()=>{if(x.query){var e;let a=null===(e=x.query.page)||void 0===e?void 0:e.toString();a&&m(s.find(e=>e.name.toLowerCase()===a))}},[x]),(0,n.jsxs)(n.Fragment,{children:[p&&(0,n.jsx)("div",{children:(0,n.jsx)(i,{...p})}),!p&&!o&&(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:a}),(0,n.jsx)(t,{variants:s,componentName:g})]}),r]}),!p&&o&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:a}),(0,n.jsx)(t,{variants:s,componentName:g})]})]})}},15314:function(e,a,s){s.r(a);var n=s(52322),d=s(2784),l=s(70741),c=s(57092),r=s(57884),i=s(57284),t=s(49953),o=s(10326);a.default=()=>{let[e,a]=(0,d.useState)();return(0,d.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-badge>Functional</db-badge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<db-badge>Functional</db-badge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-badge>Functional</db-badge>"),navigator.clipboard.writeText("<db-badge>Functional</db-badge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Functional</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">Functional</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge">Functional</span>'),navigator.clipboard.writeText('<span class="db-badge">Functional</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Functional</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>Functional</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>Functional</DBBadge>"),navigator.clipboard.writeText("<DBBadge>Functional</DBBadge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Functional</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>Functional</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>Functional</DBBadge>"),navigator.clipboard.writeText("<DBBadge>Functional</DBBadge>")},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Regular</db-badge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<db-badge>(Default) Regular</db-badge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-badge>(Default) Regular</db-badge>"),navigator.clipboard.writeText("<db-badge>(Default) Regular</db-badge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Regular</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">(Default) Regular</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge">(Default) Regular</span>'),navigator.clipboard.writeText('<span class="db-badge">(Default) Regular</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Regular</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Regular</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>(Default) Regular</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Regular</DBBadge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Regular</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Regular</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>(Default) Regular</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Regular</DBBadge>")},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-badge>Expressive</db-badge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<db-badge>Expressive</db-badge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-badge>Expressive</db-badge>"),navigator.clipboard.writeText("<db-badge>Expressive</db-badge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Expressive</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">Expressive</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge">Expressive</span>'),navigator.clipboard.writeText('<span class="db-badge">Expressive</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Expressive</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>Expressive</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>Expressive</DBBadge>"),navigator.clipboard.writeText("<DBBadge>Expressive</DBBadge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Expressive</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>Expressive</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>Expressive</DBBadge>"),navigator.clipboard.writeText("<DBBadge>Expressive</DBBadge>")},children:"Copy"})]})]})})]})}},23851:function(e,a,s){s.r(a);var n=s(52322),d=s(2784),l=s(70741),c=s(57092),r=s(57884),i=s(57284),t=s(49953),o=s(10326);a.default=()=>{let[e,a]=(0,d.useState)();return(0,d.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Weak</db-badge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<db-badge>(Default) Weak</db-badge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-badge>(Default) Weak</db-badge>"),navigator.clipboard.writeText("<db-badge>(Default) Weak</db-badge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Weak</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">(Default) Weak</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge">(Default) Weak</span>'),navigator.clipboard.writeText('<span class="db-badge">(Default) Weak</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Weak</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Weak</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>(Default) Weak</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Weak</DBBadge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Weak</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Weak</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>(Default) Weak</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Weak</DBBadge>")},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-badge emphasis="strong">Strong</db-badge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-badge emphasis="strong">Strong</db-badge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-badge emphasis="strong">Strong</db-badge>'),navigator.clipboard.writeText('<db-badge emphasis="strong">Strong</db-badge>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'),navigator.clipboard.writeText('<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBBadge emphasis="strong">Strong</DBBadge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBBadge emphasis="strong">Strong</DBBadge>'),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBBadge emphasis="strong">Strong</DBBadge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBBadge emphasis="strong">Strong</DBBadge>'),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy"})]})]})})]})}},64607:function(e,a,s){s.r(a);var n=s(52322),d=s(2784),l=s(70741),c=s(57092),r=s(57884),i=s(57284),t=s(49953),o=s(10326);a.default=()=>{let[e,a]=(0,d.useState)();return(0,d.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-badge example="number">Numbers</db-badge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-badge example="number">Numbers</db-badge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-badge example="number">Numbers</db-badge>'),navigator.clipboard.writeText('<db-badge example="number">Numbers</db-badge>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Numbers</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">Numbers</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge">Numbers</span>'),navigator.clipboard.writeText('<span class="db-badge">Numbers</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge example="number">Numbers</DBBadge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBBadge example="number">Numbers</DBBadge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBBadge example="number">Numbers</DBBadge>'),navigator.clipboard.writeText('<DBBadge example="number">Numbers</DBBadge>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge example="number">Numbers</DBBadge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBBadge example="number">Numbers</DBBadge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBBadge example="number">Numbers</DBBadge>'),navigator.clipboard.writeText('<DBBadge example="number">Numbers</DBBadge>')},children:"Copy"})]})]})})})}},26046:function(e,a,s){s.r(a);var n=s(52322),d=s(2784),l=s(70741),c=s(57092),r=s(57884),i=s(57284),t=s(49953),o=s(10326);a.default=()=>{let[e,a]=(0,d.useState)();return(0,d.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Small</db-badge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<db-badge>(Default) Small</db-badge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-badge>(Default) Small</db-badge>"),navigator.clipboard.writeText("<db-badge>(Default) Small</db-badge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Small</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">(Default) Small</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge">(Default) Small</span>'),navigator.clipboard.writeText('<span class="db-badge">(Default) Small</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Small</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Small</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>(Default) Small</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Small</DBBadge>")},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Small</DBBadge>"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Small</DBBadge>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBBadge>(Default) Small</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Small</DBBadge>")},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{children:"Angular"}),(0,n.jsx)(i.Z,{children:"HTML"}),(0,n.jsx)(i.Z,{children:"React"}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-badge size="medium">Medium</db-badge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-badge size="medium">Medium</db-badge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-badge size="medium">Medium</db-badge>'),navigator.clipboard.writeText('<db-badge size="medium">Medium</db-badge>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-size="medium">\n  Medium\n</span>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge" data-size="medium">\n  Medium\n</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<span class="db-badge" data-size="medium">\n  Medium\n</span>'),navigator.clipboard.writeText('<span class="db-badge" data-size="medium">\n  Medium\n</span>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge size="medium">Medium</DBBadge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBBadge size="medium">Medium</DBBadge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBBadge size="medium">Medium</DBBadge>'),navigator.clipboard.writeText('<DBBadge size="medium">Medium</DBBadge>')},children:"Copy"})]}),(0,n.jsxs)(t.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge size="medium">Medium</DBBadge>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBBadge size="medium">Medium</DBBadge>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBBadge size="medium">Medium</DBBadge>'),navigator.clipboard.writeText('<DBBadge size="medium">Medium</DBBadge>')},children:"Copy"})]})]})})]})}},9394:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"(Default) Weak","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Neutral","props":{"semantic":"neutral"}},{"name":"Critical","props":{"semantic":"critical"}},{"name":"Informational","props":{"semantic":"informational"}},{"name":"Successful","props":{"semantic":"successful"}},{"name":"Warning","props":{"semantic":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"semantic":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"semantic":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"semantic":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"semantic":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"semantic":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"(Default) Small","props":{}},{"name":"Medium","props":{"size":"medium"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"(Default) Text - Medium","props":{"size":"medium"}},{"name":"Dot - Small","props":{"noContent":true}},{"name":"Dot - Medium","props":{"noContent":true,"size":"medium"}},{"name":"Icon - Small","props":{"example":"icon"}},{"name":"Icon - Medium","props":{"example":"icon","size":"medium"}}]},{"name":"Placement","examples":[{"name":"(Default) Inline","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]')}}]);