"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81787],{45016:function(t,n,e){e.d(n,{P:function(){return o}});let o=(t,n,e)=>t.map((t,o)=>{var a;return{...t,slotCode:null!==(a=null==e?void 0:e.at(o))&&void 0!==a?a:"No code available",examples:t.examples.map(t=>{var e,o,a,l;return{...t,example:n({...t.props,id:null!==(a=null===(e=t.props)||void 0===e?void 0:e.id)&&void 0!==a?a:t.name,children:null!==(l=null===(o=t.props)||void 0===o?void 0:o.children)&&void 0!==l?l:t.name})}})}})},47439:function(t,n,e){var o=e(52322),a=e(5632),l=e(2784),s=e(55216),c=e(18297);let i=t=>{let{examples:n,slotCode:e}=t,[a,s]=(0,l.useState)();return(0,o.jsxs)(c.f,{className:"variants-card db-code-docs",children:[(0,o.jsx)("div",{className:"variants-list",children:n.map((t,n)=>(0,o.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(n)))}),(0,o.jsxs)("details",{className:"code-details",onToggle:()=>{s(!a)},children:[(0,o.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:a?"Hide code":"Show code"}),(0,o.jsxs)("div",{className:"db-density-functional",children:[(0,o.jsx)("div",{className:"backdrop"}),(0,o.jsx)(c.f,{className:"code",spacing:"small",children:e})]})]})]})},u=t=>{let{variants:n,componentName:e}=t,a=(t,n)=>{if(!window.location.origin||!window.location.href)return"";let e=window.location.href.split("?")[0],o="?page=".concat(t.name.toLowerCase());return n?"".concat(e.split("components")[0],"/components/").concat(n).concat(o):"".concat(e).concat(o)};return(0,o.jsx)(o.Fragment,{children:null==n?void 0:n.map((t,n)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(c.oH,{}),(0,o.jsx)("h2",{children:(0,o.jsx)(c.vB,{content:"external",target:"_blank",href:a(t,e),children:t.name})}),(0,o.jsx)(i,{...t})]},"".concat(t.name,"-").concat(n)))})};n.Z=t=>{let{title:n,variants:e,subComponent:c,isSubComponent:d,componentName:r}=t,[b,x]=(0,l.useState)(),h=(0,a.useRouter)();return(0,l.useEffect)(()=>{if(h.query){var t;let n=null===(t=h.query.page)||void 0===t?void 0:t.toString();n&&x(e.find(t=>t.name.toLowerCase()===n))}},[h]),(0,o.jsxs)(o.Fragment,{children:[b&&(0,o.jsx)("div",{children:(0,o.jsx)(i,{...b})}),!b&&!d&&(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h1",{children:n}),(0,o.jsx)(u,{variants:e,componentName:r})]}),c]}),!b&&d&&(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h2",{children:n}),(0,o.jsx)(u,{variants:e,componentName:r})]})]})}},28423:function(t,n,e){e.r(n);var o=e(52322),a=e(2784),l=e(70741),s=e(57092),c=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,a.useState)();return(0,a.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Auto Width</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Auto Width</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Auto Width</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Auto Width</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Auto Width</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Auto Width</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Auto Width</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Auto Width</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Auto Width</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Auto Width</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Auto Width</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Auto Width</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Auto Width</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Auto Width</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Auto Width</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Auto Width</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button width="full">Width full</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button width="full">Width full</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button width="full">Width full</db-button>'),navigator.clipboard.writeText('<db-button width="full">Width full</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-width="full">\n  Width full\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-width="full">\n  Width full\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-width="full">\n  Width full\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-width="full">\n  Width full\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton width="full">Width full</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton width="full">Width full</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton width="full">Width full</DBButton>'),navigator.clipboard.writeText('<DBButton width="full">Width full</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton width="full">Width full</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton width="full">Width full</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton width="full">Width full</DBButton>'),navigator.clipboard.writeText('<DBButton width="full">Width full</DBButton>')},children:"Copy"})]})]})})]})}},74344:function(t,n,e){e.r(n);var o=e(52322),a=e(2784),l=e(70741),s=e(57092),c=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,a.useState)();return(0,a.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Text</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Text</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Text</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Text</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Text</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Text</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Text</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Text</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Text</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Text</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Text</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Text</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Text</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Text</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Text</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Text</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button icon="account">Icon & Text</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button icon="account">Icon & Text</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button icon="account">Icon & Text</db-button>'),navigator.clipboard.writeText('<db-button icon="account">Icon & Text</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-icon="account">\n  Icon &amp Text\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-icon="account">\n  Icon &amp Text\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-icon="account">\n  Icon &amp Text\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-icon="account">\n  Icon &amp Text\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="account">Icon & Text</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="account">Icon & Text</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="account">Icon & Text</DBButton>'),navigator.clipboard.writeText('<DBButton icon="account">Icon & Text</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="account">Icon & Text</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="account">Icon & Text</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="account">Icon & Text</DBButton>'),navigator.clipboard.writeText('<DBButton icon="account">Icon & Text</DBButton>')},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button icon="account" [noText]="true">Icon</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button icon="account" [noText]="true">Icon</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button icon="account" [noText]="true">Icon</db-button>'),navigator.clipboard.writeText('<db-button icon="account" [noText]="true">Icon</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-icon="account" data-no-text="true">\n  Icon\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-icon="account" data-no-text="true">\n  Icon\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-icon="account" data-no-text="true">\n  Icon\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-icon="account" data-no-text="true">\n  Icon\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="account" noText>\n  Icon\n</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="account" noText>\n  Icon\n</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="account" noText>\n  Icon\n</DBButton>'),navigator.clipboard.writeText('<DBButton icon="account" noText>\n  Icon\n</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="account" :noText="true">Icon</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="account" :noText="true">Icon</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="account" :noText="true">Icon</DBButton>'),navigator.clipboard.writeText('<DBButton icon="account" :noText="true">Icon</DBButton>')},children:"Copy"})]})]})})]})}},71497:function(t,n,e){e.r(n);var o=e(52322),a=e(2784),l=e(70741),s=e(57092),c=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,a.useState)();return(0,a.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>Functional</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>Functional</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>Functional</db-button>"),navigator.clipboard.writeText("<db-button>Functional</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">Functional</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">Functional</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">Functional</button>'),navigator.clipboard.writeText('<button class="db-button">Functional</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Functional</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Functional</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Functional</DBButton>"),navigator.clipboard.writeText("<DBButton>Functional</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Functional</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Functional</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Functional</DBButton>"),navigator.clipboard.writeText("<DBButton>Functional</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Regular</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Regular</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Regular</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Regular</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Regular</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Regular</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Regular</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Regular</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Regular</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Regular</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Regular</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Regular</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Regular</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Regular</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Regular</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Regular</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>Expressive</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>Expressive</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>Expressive</db-button>"),navigator.clipboard.writeText("<db-button>Expressive</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">Expressive</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">Expressive</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">Expressive</button>'),navigator.clipboard.writeText('<button class="db-button">Expressive</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Expressive</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Expressive</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Expressive</DBButton>"),navigator.clipboard.writeText("<DBButton>Expressive</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Expressive</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Expressive</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Expressive</DBButton>"),navigator.clipboard.writeText("<DBButton>Expressive</DBButton>")},children:"Copy"})]})]})})]})}},315:function(t,n,e){e.r(n);var o=e(52322),a=e(2784),l=e(70741),s=e(57092),c=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,a.useState)();return(0,a.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Medium</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Medium</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Medium</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Medium</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Medium</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Medium</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Medium</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Medium</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Medium</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Medium</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Medium</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Medium</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Medium</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Medium</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Medium</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Medium</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button size="small">Small</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button size="small">Small</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button size="small">Small</db-button>'),navigator.clipboard.writeText('<db-button size="small">Small</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-size="small">\n  Small\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-size="small">\n  Small\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-size="small">\n  Small\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-size="small">\n  Small\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton size="small">Small</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton size="small">Small</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton size="small">Small</DBButton>'),navigator.clipboard.writeText('<DBButton size="small">Small</DBButton>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton size="small">Small</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton size="small">Small</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton size="small">Small</DBButton>'),navigator.clipboard.writeText('<DBButton size="small">Small</DBButton>')},children:"Copy"})]})]})})]})}},3305:function(t,n,e){e.r(n);var o=e(52322),a=e(2784),l=e(70741),s=e(57092),c=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,a.useState)();return(0,a.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Enabled</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Enabled</db-button>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Enabled</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Enabled</db-button>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Enabled</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Enabled</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Enabled</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Enabled</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Enabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Enabled</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Enabled</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Enabled</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Enabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Enabled</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Enabled</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Enabled</DBButton>")},children:"Copy"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button [disabled]="true">Disabled</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button [disabled]="true">Disabled</db-button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<db-button [disabled]="true">Disabled</db-button>'),navigator.clipboard.writeText('<db-button [disabled]="true">Disabled</db-button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" disabled="">\n  Disabled\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" disabled="">\n  Disabled\n</button>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" disabled="">\n  Disabled\n</button>'),navigator.clipboard.writeText('<button class="db-button" disabled="">\n  Disabled\n</button>')},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton disabled>Disabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton disabled>Disabled</DBButton>"===t?"done":"copy",variant:"ghost",onClick:()=>{n("<DBButton disabled>Disabled</DBButton>"),navigator.clipboard.writeText("<DBButton disabled>Disabled</DBButton>")},children:"Copy"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton :disabled="true">Disabled</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton :disabled="true">Disabled</DBButton>'===t?"done":"copy",variant:"ghost",onClick:()=>{n('<DBButton :disabled="true">Disabled</DBButton>'),navigator.clipboard.writeText('<DBButton :disabled="true">Disabled</DBButton>')},children:"Copy"})]})]})})]})}},10689:function(t){t.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Outlined - Adaptive","props":{}},{"name":"Filled - Adaptive","props":{"variant":"filled"}},{"name":"Ghost - Adaptive","props":{"variant":"ghost"}},{"name":"Brand","props":{"variant":"brand"}}]},{"name":"State","examples":[{"name":"(Default) Enabled","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"Icon & Text","props":{"icon":"account"}},{"name":"Icon","props":{"icon":"account","noText":true}}]},{"name":"Behaviour","examples":[{"name":"(Default) Auto Width","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]')}}]);