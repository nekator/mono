"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37580],{37395:function(e,a,n){n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(s))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,s,l,c;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(c=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==c?c:e.name})}})}})},99341:function(e,a,n){var s=n(52322),l=n(5632),c=n(2784),i=n(11803),t=n(86095);let o=e=>{let{examples:a,slotCode:n}=e,[l,i]=(0,c.useState)();return(0,s.jsxs)(t.f,{className:"variants-card db-code-docs",children:[(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,s.jsxs)("details",{className:"code-details",onToggle:()=>{i(!l)},children:[(0,s.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:l?"Hide code":"Show code"}),(0,s.jsxs)("div",{className:"db-ui-functional",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsx)(t.f,{className:"code",spacing:"small",children:n})]})]})]})},r=e=>{let{variants:a,componentName:n}=e,l=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],s="?page=".concat(e.name.toLowerCase());return a?"".concat(n.split("components")[0],"/components/").concat(a).concat(s):"".concat(n).concat(s)};return(0,s.jsx)(s.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(t.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(t.vB,{content:"external",target:"_blank",href:l(e,n),children:e.name})}),(0,s.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:n,subComponent:t,isSubComponent:d,componentName:x}=e,[p,h]=(0,c.useState)(),j=(0,l.useRouter)();return(0,c.useEffect)(()=>{if(j.query){var e;let a=null===(e=j.query.page)||void 0===e?void 0:e.toString();a&&h(n.find(e=>e.name.toLowerCase()===a))}},[j]),(0,s.jsxs)(s.Fragment,{children:[p&&(0,s.jsx)("div",{children:(0,s.jsx)(o,{...p})}),!p&&!d&&(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),(0,s.jsx)(r,{variants:n,componentName:x})]}),t]}),!p&&d&&(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h2",{children:a}),(0,s.jsx)(r,{variants:n,componentName:x})]})]})}},22689:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),i=n(33878),t=n(95696),o=n(79041),r=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(o.Z,{children:"Angular"}),(0,s.jsx)(o.Z,{children:"HTML"}),(0,s.jsx)(o.Z,{children:"React"}),(0,s.jsx)(o.Z,{children:"Vue"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>Functional</db-page>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-page>Functional</db-page>")},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Functional</main>\n</div>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Functional</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Functional</DBPage>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>Functional</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Functional</DBPage>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>Functional</DBPage>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(o.Z,{children:"Angular"}),(0,s.jsx)(o.Z,{children:"HTML"}),(0,s.jsx)(o.Z,{children:"React"}),(0,s.jsx)(o.Z,{children:"Vue"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>(Default) Regular</db-page>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-page>(Default) Regular</db-page>")},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">(Default) Regular</main>\n</div>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">(Default) Regular</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>(Default) Regular</DBPage>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>(Default) Regular</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>(Default) Regular</DBPage>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>(Default) Regular</DBPage>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(o.Z,{children:"Angular"}),(0,s.jsx)(o.Z,{children:"HTML"}),(0,s.jsx)(o.Z,{children:"React"}),(0,s.jsx)(o.Z,{children:"Vue"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>Expressive</db-page>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-page>Expressive</db-page>")},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Expressive</main>\n</div>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">Expressive</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Expressive</DBPage>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>Expressive</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>Expressive</DBPage>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>Expressive</DBPage>")},children:"Copy"})]})]})})]})}},93078:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{}},{"name":"(Default) Regular","className":"db-ui-regular","props":{}},{"name":"Expressive","className":"db-ui-expressive","props":{}}]}]')}}]);