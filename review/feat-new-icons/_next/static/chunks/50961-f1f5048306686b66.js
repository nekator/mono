"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50961],{37395:function(t,n,e){e.d(n,{P:function(){return o}});let o=(t,n,e)=>t.map((t,o)=>{var l;return{...t,slotCode:null!==(l=null==e?void 0:e.at(o))&&void 0!==l?l:"No code available",examples:t.examples.map(t=>{var e,o,l,s;return{...t,example:n({...t.props,id:null!==(l=null===(e=t.props)||void 0===e?void 0:e.id)&&void 0!==l?l:t.name,children:null!==(s=null===(o=t.props)||void 0===o?void 0:o.children)&&void 0!==s?s:t.name})}})}})},99341:function(t,n,e){var o=e(52322),l=e(5632),s=e(2784),a=e(11803),c=e(28148);let i=t=>{let{examples:n,slotCode:e}=t,[l,a]=(0,s.useState)();return(0,o.jsxs)(c.f,{className:"variants-card db-code-docs",children:[(0,o.jsx)("div",{className:"variants-list",children:n.map((t,n)=>(0,o.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(n)))}),(0,o.jsxs)("details",{className:"code-details",onToggle:()=>{a(!l)},children:[(0,o.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:l?"Hide code":"Show code"}),(0,o.jsxs)("div",{className:"db-density-functional",children:[(0,o.jsx)("div",{className:"backdrop"}),(0,o.jsx)(c.f,{className:"code",spacing:"small",children:e})]})]})]})};n.Z=t=>{let{title:n,variants:e}=t,[u,d]=(0,s.useState)(),r=(0,l.useRouter)();(0,s.useEffect)(()=>{if(r.query){var t;let n=null===(t=r.query.page)||void 0===t?void 0:t.toString();n&&d(e.find(t=>t.name.toLowerCase()===n))}},[r]);let b=t=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(t.name.toLowerCase()):"";return(0,o.jsxs)(o.Fragment,{children:[u&&(0,o.jsx)("div",{children:(0,o.jsx)(i,{...u})}),!u&&(0,o.jsx)(a.Z,{children:(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h1",{children:n}),null==e?void 0:e.map((t,n)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(c.oH,{}),(0,o.jsx)("h2",{children:(0,o.jsx)(c.vB,{content:"external",target:"_blank",href:b(t),children:t.name})}),(0,o.jsx)(i,{...t})]},"".concat(t.name,"-").concat(n)))]})})]})}},56147:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),s=e(9513),a=e(33878),c=e(95696),i=e(79041),u=e(16909),d=e(16134);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Auto Width</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Auto Width</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Auto Width</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Auto Width</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Auto Width</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Auto Width</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Auto Width</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Auto Width</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Auto Width</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Auto Width</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Auto Width</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Auto Width</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Auto Width</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Auto Width</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Auto Width</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Auto Width</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button width="full">Width full</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button width="full">Width full</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button width="full">Width full</db-button>'),navigator.clipboard.writeText('<db-button width="full">Width full</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-width="full">\n  Width full\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-width="full">\n  Width full\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-width="full">\n  Width full\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-width="full">\n  Width full\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton width="full">Width full</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton width="full">Width full</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton width="full">Width full</DBButton>'),navigator.clipboard.writeText('<DBButton width="full">Width full</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton width="full">Width full</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton width="full">Width full</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton width="full">Width full</DBButton>'),navigator.clipboard.writeText('<DBButton width="full">Width full</DBButton>')},children:"Copy"})]})]})})]})}},1886:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),s=e(9513),a=e(33878),c=e(95696),i=e(79041),u=e(16909),d=e(16134);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Text</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Text</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Text</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Text</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Text</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Text</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Text</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Text</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Text</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Text</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Text</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Text</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Text</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Text</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Text</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Text</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button icon="user">Icon & Text</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button icon="user">Icon & Text</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button icon="user">Icon & Text</db-button>'),navigator.clipboard.writeText('<db-button icon="user">Icon & Text</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user">Icon & Text</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user">Icon & Text</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user">Icon & Text</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user">Icon & Text</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user">Icon & Text</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user">Icon & Text</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user">Icon & Text</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user">Icon & Text</DBButton>')},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button icon="user" [noText]="true">Icon</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button icon="user" [noText]="true">Icon</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button icon="user" [noText]="true">Icon</db-button>'),navigator.clipboard.writeText('<db-button icon="user" [noText]="true">Icon</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user" noText>\n  Icon\n</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user" noText>\n  Icon\n</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user" noText>\n  Icon\n</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user" noText>\n  Icon\n</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user" :noText="true">Icon</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user" :noText="true">Icon</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user" :noText="true">Icon</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user" :noText="true">Icon</DBButton>')},children:"Copy"})]})]})})]})}},57089:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),s=e(9513),a=e(33878),c=e(95696),i=e(79041),u=e(16909),d=e(16134);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) regular</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) regular</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) regular</db-button>"),navigator.clipboard.writeText("<db-button>(Default) regular</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) regular</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) regular</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) regular</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) regular</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) regular</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) regular</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) regular</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) regular</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) regular</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) regular</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) regular</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) regular</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>expressive</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>expressive</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>expressive</db-button>"),navigator.clipboard.writeText("<db-button>expressive</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">expressive</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">expressive</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">expressive</button>'),navigator.clipboard.writeText('<button class="db-button">expressive</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>expressive</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>expressive</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>expressive</DBButton>"),navigator.clipboard.writeText("<DBButton>expressive</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>expressive</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>expressive</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>expressive</DBButton>"),navigator.clipboard.writeText("<DBButton>expressive</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>functional</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>functional</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>functional</db-button>"),navigator.clipboard.writeText("<db-button>functional</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">functional</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">functional</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">functional</button>'),navigator.clipboard.writeText('<button class="db-button">functional</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>functional</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>functional</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>functional</DBButton>"),navigator.clipboard.writeText("<DBButton>functional</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>functional</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>functional</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>functional</DBButton>"),navigator.clipboard.writeText("<DBButton>functional</DBButton>")},children:"Copy"})]})]})})]})}},67558:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),s=e(9513),a=e(33878),c=e(95696),i=e(79041),u=e(16909),d=e(16134);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Medium</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Medium</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Medium</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Medium</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Medium</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Medium</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Medium</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Medium</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Medium</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Medium</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Medium</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Medium</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Medium</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Medium</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Medium</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Medium</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button size="small">Small</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button size="small">Small</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button size="small">Small</db-button>'),navigator.clipboard.writeText('<db-button size="small">Small</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-size="small">\n  Small\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-size="small">\n  Small\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-size="small">\n  Small\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-size="small">\n  Small\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton size="small">Small</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton size="small">Small</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton size="small">Small</DBButton>'),navigator.clipboard.writeText('<DBButton size="small">Small</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton size="small">Small</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton size="small">Small</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton size="small">Small</DBButton>'),navigator.clipboard.writeText('<DBButton size="small">Small</DBButton>')},children:"Copy"})]})]})})]})}},71475:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),s=e(9513),a=e(33878),c=e(95696),i=e(79041),u=e(16909),d=e(16134);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Enabled</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Enabled</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Enabled</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Enabled</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Enabled</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Enabled</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Enabled</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Enabled</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Enabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Enabled</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Enabled</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Enabled</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Enabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Enabled</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Enabled</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Enabled</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(s.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button [disabled]="true">Disabled</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button [disabled]="true">Disabled</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button [disabled]="true">Disabled</db-button>'),navigator.clipboard.writeText('<db-button [disabled]="true">Disabled</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" disabled="">\n  Disabled\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" disabled="">\n  Disabled\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" disabled="">\n  Disabled\n</button>'),navigator.clipboard.writeText('<button class="db-button" disabled="">\n  Disabled\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton disabled>Disabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton disabled>Disabled</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton disabled>Disabled</DBButton>"),navigator.clipboard.writeText("<DBButton disabled>Disabled</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton :disabled="true">Disabled</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton :disabled="true">Disabled</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton :disabled="true">Disabled</DBButton>'),navigator.clipboard.writeText('<DBButton :disabled="true">Disabled</DBButton>')},children:"Copy"})]})]})})]})}},10689:function(t){t.exports=JSON.parse('[{"name":"Density","examples":[{"name":"(Default) regular","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}},{"name":"functional","className":"db-density-functional","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Outlined - Adaptive","props":{}},{"name":"Filled - Adaptive","props":{"variant":"filled"}},{"name":"Ghost - Adaptive","props":{"variant":"ghost"}},{"name":"Brand","props":{"variant":"brand"}}]},{"name":"State","examples":[{"name":"(Default) Enabled","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"Icon & Text","props":{"icon":"user"}},{"name":"Icon","props":{"icon":"user","noText":true}}]},{"name":"Behaviour","examples":[{"name":"(Default) Auto Width","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]')}}]);