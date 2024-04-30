"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81787],{45016:function(t,n,e){e.d(n,{P:function(){return o}});let o=(t,n,e)=>t.map((t,o)=>{var l;return{...t,slotCode:null!==(l=null==e?void 0:e.at(o))&&void 0!==l?l:"No code available",examples:t.examples.map(t=>{var e,o,l,c;return{...t,example:n({...t.props,id:null!==(l=null===(e=t.props)||void 0===e?void 0:e.id)&&void 0!==l?l:t.name,children:null!==(c=null===(o=t.props)||void 0===o?void 0:o.children)&&void 0!==c?c:t.name})}})}})},47439:function(t,n,e){var o=e(52322),l=e(5632),c=e(2784),s=e(55216),a=e(12480);let i=t=>{let{examples:n,slotCode:e}=t,[l,s]=(0,c.useState)();return(0,o.jsxs)(a.f,{className:"variants-card db-code-docs",children:[(0,o.jsx)("div",{className:"variants-list",children:n.map((t,n)=>(0,o.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(n)))}),(0,o.jsxs)("details",{className:"code-details",onToggle:()=>{s(!l)},children:[(0,o.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:l?"Hide code":"Show code"}),(0,o.jsxs)("div",{className:"db-density-functional",children:[(0,o.jsx)("div",{className:"backdrop"}),(0,o.jsx)(a.f,{className:"code",spacing:"small",children:e})]})]})]})},u=t=>{let{variants:n,componentName:e}=t,l=(t,n)=>{if(!window.location.origin||!window.location.href)return"";let e=window.location.href.split("?")[0],o="?page=".concat(t.name.toLowerCase());return n?"".concat(e.split("components")[0],"/components/").concat(n).concat(o):"".concat(e).concat(o)};return(0,o.jsx)(o.Fragment,{children:null==n?void 0:n.map((t,n)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(a.oH,{}),(0,o.jsx)("h2",{children:(0,o.jsx)(a.vB,{content:"external",target:"_blank",href:l(t,e),children:t.name})}),(0,o.jsx)(i,{...t})]},"".concat(t.name,"-").concat(n)))})};n.Z=t=>{let{title:n,variants:e,subComponent:a,isSubComponent:d,componentName:r}=t,[b,h]=(0,c.useState)(),x=(0,l.useRouter)();return(0,c.useEffect)(()=>{if(x.query){var t;let n=null===(t=x.query.page)||void 0===t?void 0:t.toString();n&&h(e.find(t=>t.name.toLowerCase()===n))}},[x]),(0,o.jsxs)(o.Fragment,{children:[b&&(0,o.jsx)("div",{children:(0,o.jsx)(i,{...b})}),!b&&!d&&(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h1",{children:n}),(0,o.jsx)(u,{variants:e,componentName:r})]}),a]}),!b&&d&&(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h2",{children:n}),(0,o.jsx)(u,{variants:e,componentName:r})]})]})}},28423:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),c=e(70741),s=e(57092),a=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Auto Width</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Auto Width</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Auto Width</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Auto Width</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Auto Width</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Auto Width</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Auto Width</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Auto Width</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Auto Width</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Auto Width</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Auto Width</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Auto Width</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Auto Width</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Auto Width</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Auto Width</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Auto Width</DBButton>")},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button width="full">Width full</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button width="full">Width full</db-button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<db-button width="full">Width full</db-button>'),navigator.clipboard.writeText('<db-button width="full">Width full</db-button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-width="full">\n  Width full\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-width="full">\n  Width full\n</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-width="full">\n  Width full\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-width="full">\n  Width full\n</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton width="full">Width full</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton width="full">Width full</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton width="full">Width full</DBButton>'),navigator.clipboard.writeText('<DBButton width="full">Width full</DBButton>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton width="full">Width full</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton width="full">Width full</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton width="full">Width full</DBButton>'),navigator.clipboard.writeText('<DBButton width="full">Width full</DBButton>')},children:"Copy code"})]})]})})]})}},74344:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),c=e(70741),s=e(57092),a=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Text</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Text</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Text</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Text</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Text</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Text</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Text</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Text</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Text</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Text</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Text</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Text</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Text</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Text</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Text</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Text</DBButton>")},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button icon="user">Icon & Text</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button icon="user">Icon & Text</db-button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<db-button icon="user">Icon & Text</db-button>'),navigator.clipboard.writeText('<db-button icon="user">Icon & Text</db-button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-icon="user">\n  Icon &amp Text\n</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user">Icon & Text</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user">Icon & Text</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user">Icon & Text</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user">Icon & Text</DBButton>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user">Icon & Text</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user">Icon & Text</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user">Icon & Text</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user">Icon & Text</DBButton>')},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button icon="user" [noText]="true">Icon</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button icon="user" [noText]="true">Icon</db-button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<db-button icon="user" [noText]="true">Icon</db-button>'),navigator.clipboard.writeText('<db-button icon="user" [noText]="true">Icon</db-button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-icon="user" data-no-text="true">\n  Icon\n</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user" noText>\n  Icon\n</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user" noText>\n  Icon\n</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user" noText>\n  Icon\n</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user" noText>\n  Icon\n</DBButton>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton icon="user" :noText="true">Icon</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton icon="user" :noText="true">Icon</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton icon="user" :noText="true">Icon</DBButton>'),navigator.clipboard.writeText('<DBButton icon="user" :noText="true">Icon</DBButton>')},children:"Copy code"})]})]})})]})}},71497:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),c=e(70741),s=e(57092),a=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>Functional</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>Functional</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>Functional</db-button>"),navigator.clipboard.writeText("<db-button>Functional</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">Functional</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">Functional</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">Functional</button>'),navigator.clipboard.writeText('<button class="db-button">Functional</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Functional</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Functional</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Functional</DBButton>"),navigator.clipboard.writeText("<DBButton>Functional</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Functional</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Functional</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Functional</DBButton>"),navigator.clipboard.writeText("<DBButton>Functional</DBButton>")},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Regular</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Regular</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Regular</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Regular</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Regular</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Regular</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Regular</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Regular</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Regular</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Regular</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Regular</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Regular</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Regular</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Regular</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Regular</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Regular</DBButton>")},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>Expressive</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>Expressive</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>Expressive</db-button>"),navigator.clipboard.writeText("<db-button>Expressive</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">Expressive</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">Expressive</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">Expressive</button>'),navigator.clipboard.writeText('<button class="db-button">Expressive</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Expressive</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Expressive</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Expressive</DBButton>"),navigator.clipboard.writeText("<DBButton>Expressive</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>Expressive</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>Expressive</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>Expressive</DBButton>"),navigator.clipboard.writeText("<DBButton>Expressive</DBButton>")},children:"Copy code"})]})]})})]})}},315:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),c=e(70741),s=e(57092),a=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Medium</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Medium</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Medium</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Medium</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Medium</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Medium</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Medium</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Medium</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Medium</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Medium</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Medium</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Medium</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Medium</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Medium</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Medium</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Medium</DBButton>")},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button size="small">Small</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button size="small">Small</db-button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<db-button size="small">Small</db-button>'),navigator.clipboard.writeText('<db-button size="small">Small</db-button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" data-size="small">\n  Small\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" data-size="small">\n  Small\n</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" data-size="small">\n  Small\n</button>'),navigator.clipboard.writeText('<button class="db-button" data-size="small">\n  Small\n</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton size="small">Small</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton size="small">Small</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton size="small">Small</DBButton>'),navigator.clipboard.writeText('<DBButton size="small">Small</DBButton>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton size="small">Small</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton size="small">Small</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton size="small">Small</DBButton>'),navigator.clipboard.writeText('<DBButton size="small">Small</DBButton>')},children:"Copy code"})]})]})})]})}},3305:function(t,n,e){e.r(n);var o=e(52322),l=e(2784),c=e(70741),s=e(57092),a=e(57884),i=e(57284),u=e(49953),d=e(10326);n.default=()=>{let[t,n]=(0,l.useState)();return(0,l.useEffect)(()=>{t&&setTimeout(()=>n(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:"<db-button>(Default) Enabled</db-button>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-button>(Default) Enabled</db-button>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<db-button>(Default) Enabled</db-button>"),navigator.clipboard.writeText("<db-button>(Default) Enabled</db-button>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button">(Default) Enabled</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button">(Default) Enabled</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button">(Default) Enabled</button>'),navigator.clipboard.writeText('<button class="db-button">(Default) Enabled</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Enabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Enabled</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Enabled</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Enabled</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton>(Default) Enabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton>(Default) Enabled</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton>(Default) Enabled</DBButton>"),navigator.clipboard.writeText("<DBButton>(Default) Enabled</DBButton>")},children:"Copy code"})]})]})}),(0,o.jsx)(c.Z,{className:"tab-container",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(i.Z,{children:"Angular"}),(0,o.jsx)(i.Z,{children:"HTML"}),(0,o.jsx)(i.Z,{children:"React"}),(0,o.jsx)(i.Z,{children:"Vue"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-button [disabled]="true">Disabled</db-button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-button [disabled]="true">Disabled</db-button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<db-button [disabled]="true">Disabled</db-button>'),navigator.clipboard.writeText('<db-button [disabled]="true">Disabled</db-button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<button class="db-button" disabled="">\n  Disabled\n</button>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<button class="db-button" disabled="">\n  Disabled\n</button>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<button class="db-button" disabled="">\n  Disabled\n</button>'),navigator.clipboard.writeText('<button class="db-button" disabled="">\n  Disabled\n</button>')},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:"<DBButton disabled>Disabled</DBButton>"})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBButton disabled>Disabled</DBButton>"===t?"check":"copy",variant:"ghost",onClick:()=>{n("<DBButton disabled>Disabled</DBButton>"),navigator.clipboard.writeText("<DBButton disabled>Disabled</DBButton>")},children:"Copy code"})]}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBButton :disabled="true">Disabled</DBButton>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBButton :disabled="true">Disabled</DBButton>'===t?"check":"copy",variant:"ghost",onClick:()=>{n('<DBButton :disabled="true">Disabled</DBButton>'),navigator.clipboard.writeText('<DBButton :disabled="true">Disabled</DBButton>')},children:"Copy code"})]})]})})]})}},10689:function(t){t.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Outlined - Adaptive","props":{}},{"name":"Filled - Adaptive","props":{"variant":"filled"}},{"name":"Ghost - Adaptive","props":{"variant":"ghost"}},{"name":"Brand","props":{"variant":"brand"}}]},{"name":"State","examples":[{"name":"(Default) Enabled","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"Icon & Text","props":{"icon":"user"}},{"name":"Icon","props":{"icon":"user","noText":true}}]},{"name":"Behaviour","examples":[{"name":"(Default) Auto Width","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]')}}]);