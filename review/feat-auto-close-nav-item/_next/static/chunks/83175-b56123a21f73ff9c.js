"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83175],{37395:function(e,n,a){a.d(n,{P:function(){return c}});let c=(e,n,a)=>e.map((e,c)=>{var s;return{...e,slotCode:null!==(s=null==a?void 0:a.at(c))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var a,c,s,l;return{...e,example:n({...e.props,id:null!==(s=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==s?s:e.name,children:null!==(l=null===(c=e.props)||void 0===c?void 0:c.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,n,a){var c=a(52322),s=a(5632),l=a(2784),i=a(12156),o=a(53752);let r=e=>{let{examples:n,slotCode:a}=e,[s,i]=(0,l.useState)();return(0,c.jsxs)(o.f,{className:"variants-card db-code-docs",children:[(0,c.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,c.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))}),(0,c.jsxs)("details",{className:"code-details",onToggle:()=>{i(!s)},children:[(0,c.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:s?"Hide code":"Show code"}),(0,c.jsxs)("div",{className:"db-ui-functional",children:[(0,c.jsx)("div",{className:"backdrop"}),(0,c.jsx)(o.f,{className:"code",spacing:"small",children:a})]})]})]})};n.Z=e=>{let{title:n,variants:a}=e,[t,d]=(0,l.useState)(),x=(0,s.useRouter)();(0,l.useEffect)(()=>{if(x.query){var e;let n=null===(e=x.query.page)||void 0===e?void 0:e.toString();n&&d(a.find(e=>e.name.toLowerCase()===n))}},[x]);let h=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)("div",{children:(0,c.jsx)(r,{...t})}),!t&&(0,c.jsx)(i.Z,{children:(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,c.jsxs)("div",{children:[(0,c.jsx)(o.oH,{}),(0,c.jsx)("h2",{children:(0,c.jsx)(o.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,c.jsx)(r,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},85424:function(e,n,a){a.r(n);var c=a(52322),s=a(2784),l=a(9513),i=a(33878),o=a(95696),r=a(79041),t=a(16909),d=a(16134);n.default=()=>{let[e,n]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>n(!1),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(r.Z,{children:"Angular"}),(0,c.jsx)(r.Z,{children:"HTML"}),(0,c.jsx)(r.Z,{children:"React"}),(0,c.jsx)(r.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-icon>functional</db-icon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-icon>functional</db-icon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<span aria-hidden="true" class="db-icon">\n  functional\n</span>'})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<span aria-hidden="true" class="db-icon">\n  functional\n</span>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>functional</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBIcon>functional</DBIcon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>functional</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBIcon>functional</DBIcon>")},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(r.Z,{children:"Angular"}),(0,c.jsx)(r.Z,{children:"HTML"}),(0,c.jsx)(r.Z,{children:"React"}),(0,c.jsx)(r.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-icon>regular (Default)</db-icon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-icon>regular (Default)</db-icon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<span aria-hidden="true" class="db-icon">\n  regular (Default)\n</span>'})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<span aria-hidden="true" class="db-icon">\n  regular (Default)\n</span>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>regular (Default)</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBIcon>regular (Default)</DBIcon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>regular (Default)</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBIcon>regular (Default)</DBIcon>")},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(r.Z,{children:"Angular"}),(0,c.jsx)(r.Z,{children:"HTML"}),(0,c.jsx)(r.Z,{children:"React"}),(0,c.jsx)(r.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-icon>expressive</db-icon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-icon>expressive</db-icon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<span aria-hidden="true" class="db-icon">\n  expressive\n</span>'})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<span aria-hidden="true" class="db-icon">\n  expressive\n</span>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>expressive</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBIcon>expressive</DBIcon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>expressive</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBIcon>expressive</DBIcon>")},children:"Copy"})]})]})})]})}},42302:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]}]')}}]);