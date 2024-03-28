"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37580],{37395:function(e,a,n){n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(s))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,s,l,i;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(i=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,a,n){var s=n(52322),l=n(5632),i=n(2784),c=n(11803),t=n(86095);let r=e=>{let{examples:a,slotCode:n}=e,[l,c]=(0,i.useState)();return(0,s.jsxs)(t.f,{className:"variants-card db-code-docs",children:[(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,s.jsxs)("details",{className:"code-details",onToggle:()=>{c(!l)},children:[(0,s.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:l?"Hide code":"Show code"}),(0,s.jsxs)("div",{className:"db-ui-functional",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsx)(t.f,{className:"code",spacing:"small",children:n})]})]})]})};a.Z=e=>{let{title:a,variants:n}=e,[d,o]=(0,i.useState)(),x=(0,l.useRouter)();(0,i.useEffect)(()=>{if(x.query){var e;let a=null===(e=x.query.page)||void 0===e?void 0:e.toString();a&&o(n.find(e=>e.name.toLowerCase()===a))}},[x]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,s.jsxs)(s.Fragment,{children:[d&&(0,s.jsx)("div",{children:(0,s.jsx)(r,{...d})}),!d&&(0,s.jsx)(c.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(t.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(t.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,s.jsx)(r,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},22689:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),i=n(9513),c=n(33878),t=n(95696),r=n(79041),d=n(16909),o=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{className:"tab-container",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(r.Z,{children:"Angular"}),(0,s.jsx)(r.Z,{children:"HTML"}),(0,s.jsx)(r.Z,{children:"React"}),(0,s.jsx)(r.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>functional</db-page>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-page>functional</db-page>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">functional</main>\n</div>'})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">functional</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>functional</DBPage>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>functional</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>functional</DBPage>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>functional</DBPage>")},children:"Copy"})]})]})}),(0,s.jsx)(i.Z,{className:"tab-container",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(r.Z,{children:"Angular"}),(0,s.jsx)(r.Z,{children:"HTML"}),(0,s.jsx)(r.Z,{children:"React"}),(0,s.jsx)(r.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>regular (Default)</db-page>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-page>regular (Default)</db-page>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">regular (Default)</main>\n</div>'})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">regular (Default)</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>regular (Default)</DBPage>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>regular (Default)</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>regular (Default)</DBPage>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>regular (Default)</DBPage>")},children:"Copy"})]})]})}),(0,s.jsx)(i.Z,{className:"tab-container",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(r.Z,{children:"Angular"}),(0,s.jsx)(r.Z,{children:"HTML"}),(0,s.jsx)(r.Z,{children:"React"}),(0,s.jsx)(r.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-page>expressive</db-page>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-page>expressive</db-page>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">expressive</main>\n</div>'})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<div class="db-page" data-fonts-loaded="false">\n  <main class="db-main">expressive</main>\n</div>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>expressive</DBPage>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>expressive</DBPage>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBPage>expressive</DBPage>"})}),(0,s.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBPage>expressive</DBPage>")},children:"Copy"})]})]})})]})}},93078:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}}]);