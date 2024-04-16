"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24614],{45016:function(e,n,t){t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var s;return{...e,slotCode:null!==(s=null==t?void 0:t.at(a))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var t,a,s,l;return{...e,example:n({...e.props,id:null!==(s=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==s?s:e.name,children:null!==(l=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==l?l:e.name})}})}})},47439:function(e,n,t){var a=t(52322),s=t(5632),l=t(2784),o=t(55216),i=t(3673);let c=e=>{let{examples:n,slotCode:t}=e,[s,o]=(0,l.useState)();return(0,a.jsxs)(i.f,{className:"variants-card db-code-docs",children:[(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))}),(0,a.jsxs)("details",{className:"code-details",onToggle:()=>{o(!s)},children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:s?"Hide code":"Show code"}),(0,a.jsxs)("div",{className:"db-density-functional",children:[(0,a.jsx)("div",{className:"backdrop"}),(0,a.jsx)(i.f,{className:"code",spacing:"small",children:t})]})]})]})},r=e=>{let{variants:n,componentName:t}=e,s=(e,n)=>{if(!window.location.origin||!window.location.href)return"";let t=window.location.href.split("?")[0],a="?page=".concat(e.name.toLowerCase());return n?"".concat(t.split("components")[0],"/components/").concat(n).concat(a):"".concat(t).concat(a)};return(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(i.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(i.vB,{content:"external",target:"_blank",href:s(e,t),children:e.name})}),(0,a.jsx)(c,{...e})]},"".concat(e.name,"-").concat(n)))})};n.Z=e=>{let{title:n,variants:t,subComponent:i,isSubComponent:x,componentName:d}=e,[p,f]=(0,l.useState)(),h=(0,s.useRouter)();return(0,l.useEffect)(()=>{if(h.query){var e;let n=null===(e=h.query.page)||void 0===e?void 0:e.toString();n&&f(t.find(e=>e.name.toLowerCase()===n))}},[h]),(0,a.jsxs)(a.Fragment,{children:[p&&(0,a.jsx)("div",{children:(0,a.jsx)(c,{...p})}),!p&&!x&&(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),(0,a.jsx)(r,{variants:t,componentName:d})]}),i]}),!p&&x&&(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h2",{children:n}),(0,a.jsx)(r,{variants:t,componentName:d})]})]})}},63319:function(e,n,t){t.r(n);var a=t(52322),s=t(2784),l=t(70741),o=t(57092),i=t(57884),c=t(57284),r=t(49953),x=t(10326);n.default=()=>{let[e,n]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>n(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-infotext>Functional</db-infotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<db-infotext>Functional</db-infotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<db-infotext>Functional</db-infotext>"),navigator.clipboard.writeText("<db-infotext>Functional</db-infotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<span class="db-infotext">Functional</span>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<span class="db-infotext">Functional</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<span class="db-infotext">Functional</span>'),navigator.clipboard.writeText('<span class="db-infotext">Functional</span>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>Functional</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>Functional</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>Functional</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>Functional</DBInfotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>Functional</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>Functional</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>Functional</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>Functional</DBInfotext>")},children:"Copy"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-infotext>(Default) Regular</db-infotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<db-infotext>(Default) Regular</db-infotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<db-infotext>(Default) Regular</db-infotext>"),navigator.clipboard.writeText("<db-infotext>(Default) Regular</db-infotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<span class="db-infotext">(Default) Regular</span>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<span class="db-infotext">(Default) Regular</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<span class="db-infotext">(Default) Regular</span>'),navigator.clipboard.writeText('<span class="db-infotext">(Default) Regular</span>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>(Default) Regular</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>(Default) Regular</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>(Default) Regular</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>(Default) Regular</DBInfotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>(Default) Regular</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>(Default) Regular</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>(Default) Regular</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>(Default) Regular</DBInfotext>")},children:"Copy"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-infotext>Expressive</db-infotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<db-infotext>Expressive</db-infotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<db-infotext>Expressive</db-infotext>"),navigator.clipboard.writeText("<db-infotext>Expressive</db-infotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<span class="db-infotext">Expressive</span>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<span class="db-infotext">Expressive</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<span class="db-infotext">Expressive</span>'),navigator.clipboard.writeText('<span class="db-infotext">Expressive</span>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>Expressive</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>Expressive</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>Expressive</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>Expressive</DBInfotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>Expressive</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>Expressive</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>Expressive</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>Expressive</DBInfotext>")},children:"Copy"})]})]})})]})}},10455:function(e,n,t){t.r(n);var a=t(52322),s=t(2784),l=t(70741),o=t(57092),i=t(57884),c=t(57284),r=t(49953),x=t(10326);n.default=()=>{let[e,n]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>n(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-infotext>(Default) Medium</db-infotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<db-infotext>(Default) Medium</db-infotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<db-infotext>(Default) Medium</db-infotext>"),navigator.clipboard.writeText("<db-infotext>(Default) Medium</db-infotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<span class="db-infotext">(Default) Medium</span>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<span class="db-infotext">(Default) Medium</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<span class="db-infotext">(Default) Medium</span>'),navigator.clipboard.writeText('<span class="db-infotext">(Default) Medium</span>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>(Default) Medium</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>(Default) Medium</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>(Default) Medium</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>(Default) Medium</DBInfotext>")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBInfotext>(Default) Medium</DBInfotext>"})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:"<DBInfotext>(Default) Medium</DBInfotext>"===e?"done":"copy",variant:"ghost",onClick:()=>{n("<DBInfotext>(Default) Medium</DBInfotext>"),navigator.clipboard.writeText("<DBInfotext>(Default) Medium</DBInfotext>")},children:"Copy"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-infotext size="small">Small</db-infotext>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<db-infotext size="small">Small</db-infotext>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<db-infotext size="small">Small</db-infotext>'),navigator.clipboard.writeText('<db-infotext size="small">Small</db-infotext>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<span class="db-infotext" data-size="small">\n  Small\n</span>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<span class="db-infotext" data-size="small">\n  Small\n</span>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<span class="db-infotext" data-size="small">\n  Small\n</span>'),navigator.clipboard.writeText('<span class="db-infotext" data-size="small">\n  Small\n</span>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBInfotext size="small">Small</DBInfotext>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<DBInfotext size="small">Small</DBInfotext>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<DBInfotext size="small">Small</DBInfotext>'),navigator.clipboard.writeText('<DBInfotext size="small">Small</DBInfotext>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBInfotext size="small">Small</DBInfotext>'})}),(0,a.jsx)(x.Z,{className:"copy-button",noText:!0,icon:'<DBInfotext size="small">Small</DBInfotext>'===e?"done":"copy",variant:"ghost",onClick:()=>{n('<DBInfotext size="small">Small</DBInfotext>'),navigator.clipboard.writeText('<DBInfotext size="small">Small</DBInfotext>')},children:"Copy"})]})]})})]})}},6514:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Neutral","props":{"semantic":"neutral"}},{"name":"Critical","props":{"semantic":"critical"}},{"name":"Informational","props":{"semantic":"informational"}},{"name":"Successful","props":{"semantic":"successful"}},{"name":"Warning","props":{"semantic":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]')}}]);