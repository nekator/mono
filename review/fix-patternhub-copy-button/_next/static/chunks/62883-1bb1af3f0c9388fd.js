"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62883],{45016:function(e,a,n){n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(s))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,s,l,i;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(i=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==i?i:e.name})}})}})},47439:function(e,a,n){var s=n(52322),l=n(5632),i=n(2784),c=n(55216),d=n(3673);let t=e=>{let{examples:a,slotCode:n}=e,[l,c]=(0,i.useState)();return(0,s.jsxs)(d.f,{className:"variants-card db-code-docs",children:[(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,s.jsxs)("details",{className:"code-details",onToggle:()=>{c(!l)},children:[(0,s.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:l?"Hide code":"Show code"}),(0,s.jsxs)("div",{className:"db-density-functional",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsx)(d.f,{className:"code",spacing:"small",children:n})]})]})]})},o=e=>{let{variants:a,componentName:n}=e,l=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],s="?page=".concat(e.name.toLowerCase());return a?"".concat(n.split("components")[0],"/components/").concat(a).concat(s):"".concat(n).concat(s)};return(0,s.jsx)(s.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(d.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(d.vB,{content:"external",target:"_blank",href:l(e,n),children:e.name})}),(0,s.jsx)(t,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:n,subComponent:d,isSubComponent:r,componentName:g}=e,[p,x]=(0,i.useState)(),h=(0,l.useRouter)();return(0,i.useEffect)(()=>{if(h.query){var e;let a=null===(e=h.query.page)||void 0===e?void 0:e.toString();a&&x(n.find(e=>e.name.toLowerCase()===a))}},[h]),(0,s.jsxs)(s.Fragment,{children:[p&&(0,s.jsx)("div",{children:(0,s.jsx)(t,{...p})}),!p&&!r&&(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),(0,s.jsx)(o,{variants:n,componentName:g})]}),d]}),!p&&r&&(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h2",{children:a}),(0,s.jsx)(o,{variants:n,componentName:g})]})]})}},53221:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),i=n(70741),c=n(57092),d=n(57884),t=n(57284),o=n(49953),r=n(10326);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{className:"tab-container",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(t.Z,{children:"Angular"}),(0,s.jsx)(t.Z,{children:"HTML"}),(0,s.jsx)(t.Z,{children:"React"}),(0,s.jsx)(t.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>Functional</db-page>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-page>Functional</db-page>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-page>Functional</db-page>"),navigator.clipboard.writeText("<db-page>Functional</db-page>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Functional</main>\n</div>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Functional</main>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Functional</main>\n</div>'),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Functional</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Functional</DBPage>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBPage>Functional</DBPage>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBPage>Functional</DBPage>"),navigator.clipboard.writeText("<DBPage>Functional</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Functional</DBPage>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBPage>Functional</DBPage>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBPage>Functional</DBPage>"),navigator.clipboard.writeText("<DBPage>Functional</DBPage>")},children:"Copy"})]})]})}),(0,s.jsx)(i.Z,{className:"tab-container",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(t.Z,{children:"Angular"}),(0,s.jsx)(t.Z,{children:"HTML"}),(0,s.jsx)(t.Z,{children:"React"}),(0,s.jsx)(t.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>(Default) Regular</db-page>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-page>(Default) Regular</db-page>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-page>(Default) Regular</db-page>"),navigator.clipboard.writeText("<db-page>(Default) Regular</db-page>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">(Default) Regular</main>\n</div>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">(Default) Regular</main>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">(Default) Regular</main>\n</div>'),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">(Default) Regular</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>(Default) Regular</DBPage>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBPage>(Default) Regular</DBPage>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBPage>(Default) Regular</DBPage>"),navigator.clipboard.writeText("<DBPage>(Default) Regular</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>(Default) Regular</DBPage>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBPage>(Default) Regular</DBPage>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBPage>(Default) Regular</DBPage>"),navigator.clipboard.writeText("<DBPage>(Default) Regular</DBPage>")},children:"Copy"})]})]})}),(0,s.jsx)(i.Z,{className:"tab-container",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(t.Z,{children:"Angular"}),(0,s.jsx)(t.Z,{children:"HTML"}),(0,s.jsx)(t.Z,{children:"React"}),(0,s.jsx)(t.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>Expressive</db-page>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-page>Expressive</db-page>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<db-page>Expressive</db-page>"),navigator.clipboard.writeText("<db-page>Expressive</db-page>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Expressive</main>\n</div>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Expressive</main>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Expressive</main>\n</div>'),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Expressive</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Expressive</DBPage>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBPage>Expressive</DBPage>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBPage>Expressive</DBPage>"),navigator.clipboard.writeText("<DBPage>Expressive</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Expressive</DBPage>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBPage>Expressive</DBPage>"===e?"done":"copy",variant:"ghost",onClick:()=>{a("<DBPage>Expressive</DBPage>"),navigator.clipboard.writeText("<DBPage>Expressive</DBPage>")},children:"Copy"})]})]})})]})}},93078:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]}]')}}]);