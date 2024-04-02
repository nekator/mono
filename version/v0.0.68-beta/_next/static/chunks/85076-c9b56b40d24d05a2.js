"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85076],{37395:function(a,e,t){t.d(e,{P:function(){return n}});let n=(a,e,t)=>a.map((a,n)=>{var c;return{...a,slotCode:null!==(c=null==t?void 0:t.at(n))&&void 0!==c?c:"No code available",examples:a.examples.map(a=>{var t,n,c,o;return{...a,example:e({...a.props,id:null!==(c=null===(t=a.props)||void 0===t?void 0:t.id)&&void 0!==c?c:a.name,children:null!==(o=null===(n=a.props)||void 0===n?void 0:n.children)&&void 0!==o?o:a.name})}})}})},99341:function(a,e,t){var n=t(52322),c=t(5632),o=t(2784),i=t(11803),s=t(28148);let l=a=>{let{examples:e,slotCode:t}=a,[c,i]=(0,o.useState)();return(0,n.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:e.map((a,e)=>(0,n.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(e)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{i(!c)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:c?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(s.f,{className:"code",spacing:"small",children:t})]})]})]})};e.Z=a=>{let{title:e,variants:t}=a,[r,d]=(0,o.useState)(),g=(0,c.useRouter)();(0,o.useEffect)(()=>{if(g.query){var a;let e=null===(a=g.query.page)||void 0===a?void 0:a.toString();e&&d(t.find(a=>a.name.toLowerCase()===e))}},[g]);let h=a=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(a.name.toLowerCase()):"";return(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)("div",{children:(0,n.jsx)(l,{...r})}),!r&&(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:e}),null==t?void 0:t.map((a,e)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(s.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(s.vB,{content:"external",target:"_blank",href:h(a),children:a.name})}),(0,n.jsx)(l,{...a})]},"".concat(a.name,"-").concat(e)))]})})]})}},8042:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(9513),i=t(33878),s=t(95696),l=t(79041),r=t(16909),d=t(16134);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>Text (Default)</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>Text (Default)</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>Text (Default)</db-tag>"),navigator.clipboard.writeText("<db-tag>Text (Default)</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">Text (Default)</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">Text (Default)</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">Text (Default)</div>'),navigator.clipboard.writeText('<div class="db-tag">Text (Default)</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Text (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Text (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Text (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>Text (Default)</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Text (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Text (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Text (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>Text (Default)</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag icon="account" [noText]="true">Icon</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag icon="account" [noText]="true">Icon</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag icon="account" [noText]="true">Icon</db-tag>'),navigator.clipboard.writeText('<db-tag icon="account" [noText]="true">Icon</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account" noText>\n  Icon\n</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account" noText>\n  Icon\n</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account" noText>\n  Icon\n</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account" noText>\n  Icon\n</DBTag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account" :noText="true">Icon</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account" :noText="true">Icon</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account" :noText="true">Icon</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account" :noText="true">Icon</DBTag>')},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag icon="account">Icon & Text</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag icon="account">Icon & Text</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag icon="account">Icon & Text</db-tag>'),navigator.clipboard.writeText('<db-tag icon="account">Icon & Text</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account">Icon & Text</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account">Icon & Text</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account">Icon & Text</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account">Icon & Text</DBTag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account">Icon & Text</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account">Icon & Text</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account">Icon & Text</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account">Icon & Text</DBTag>')},children:"Copy"})]})]})})]})}},97965:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(9513),i=t(33878),s=t(95696),l=t(79041),r=t(16909),d=t(16134);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>functional</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>functional</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>functional</db-tag>"),navigator.clipboard.writeText("<db-tag>functional</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">functional</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">functional</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">functional</div>'),navigator.clipboard.writeText('<div class="db-tag">functional</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>functional</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>functional</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>functional</DBTag>"),navigator.clipboard.writeText("<DBTag>functional</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>functional</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>functional</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>functional</DBTag>"),navigator.clipboard.writeText("<DBTag>functional</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>regular (Default)</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>regular (Default)</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>regular (Default)</db-tag>"),navigator.clipboard.writeText("<db-tag>regular (Default)</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">regular (Default)</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">regular (Default)</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">regular (Default)</div>'),navigator.clipboard.writeText('<div class="db-tag">regular (Default)</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>regular (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>regular (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>regular (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>regular (Default)</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>regular (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>regular (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>regular (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>regular (Default)</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>expressive</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>expressive</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>expressive</db-tag>"),navigator.clipboard.writeText("<db-tag>expressive</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">expressive</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">expressive</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">expressive</div>'),navigator.clipboard.writeText('<div class="db-tag">expressive</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>expressive</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>expressive</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>expressive</DBTag>"),navigator.clipboard.writeText("<DBTag>expressive</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>expressive</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>expressive</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>expressive</DBTag>"),navigator.clipboard.writeText("<DBTag>expressive</DBTag>")},children:"Copy"})]})]})})]})}},56377:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(9513),i=t(33878),s=t(95696),l=t(79041),r=t(16909),d=t(16134);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>Weak (Default)</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>Weak (Default)</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>Weak (Default)</db-tag>"),navigator.clipboard.writeText("<db-tag>Weak (Default)</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">Weak (Default)</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">Weak (Default)</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">Weak (Default)</div>'),navigator.clipboard.writeText('<div class="db-tag">Weak (Default)</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Weak (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Weak (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Weak (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>Weak (Default)</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Weak (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Weak (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Weak (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>Weak (Default)</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag emphasis="strong">Strong</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag emphasis="strong">Strong</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag emphasis="strong">Strong</db-tag>'),navigator.clipboard.writeText('<db-tag emphasis="strong">Strong</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag emphasis="strong">Strong</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag emphasis="strong">Strong</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag emphasis="strong">Strong</DBTag>'),navigator.clipboard.writeText('<DBTag emphasis="strong">Strong</DBTag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag emphasis="strong">Strong</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag emphasis="strong">Strong</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag emphasis="strong">Strong</DBTag>'),navigator.clipboard.writeText('<DBTag emphasis="strong">Strong</DBTag>')},children:"Copy"})]})]})})]})}},54721:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(9513),i=t(33878),s=t(95696),l=t(79041),r=t(16909),d=t(16134);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>No Overflow (Default)</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>No Overflow (Default)</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>No Overflow (Default)</db-tag>"),navigator.clipboard.writeText("<db-tag>No Overflow (Default)</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">No Overflow (Default)</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">No Overflow (Default)</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">No Overflow (Default)</div>'),navigator.clipboard.writeText('<div class="db-tag">No Overflow (Default)</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>No Overflow (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>No Overflow (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>No Overflow (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>No Overflow (Default)</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>No Overflow (Default)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>No Overflow (Default)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>No Overflow (Default)</DBTag>"),navigator.clipboard.writeText("<DBTag>No Overflow (Default)</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag [overflow]="true">With Overflow (max-width)</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag [overflow]="true">With Overflow (max-width)</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag [overflow]="true">With Overflow (max-width)</db-tag>'),navigator.clipboard.writeText('<db-tag [overflow]="true">With Overflow (max-width)</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag overflow>With Overflow (max-width)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag overflow>With Overflow (max-width)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag overflow>With Overflow (max-width)</DBTag>"),navigator.clipboard.writeText("<DBTag overflow>With Overflow (max-width)</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag :overflow="true">With Overflow (max-width)</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag :overflow="true">With Overflow (max-width)</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag :overflow="true">With Overflow (max-width)</DBTag>'),navigator.clipboard.writeText('<DBTag :overflow="true">With Overflow (max-width)</DBTag>')},children:"Copy"})]})]})})]})}},47837:function(a){a.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{}},{"name":"regular (Default)","className":"db-density-regular","props":{}},{"name":"expressive","className":"db-density-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Semantic","examples":[{"name":"Adaptive (Default)","props":{}},{"name":"Neutral","props":{"semantic":"neutral"}},{"name":"Critical","props":{"semantic":"critical"}},{"name":"Informational","props":{"semantic":"informational"}},{"name":"Successful","props":{"semantic":"successful"}},{"name":"Warning","props":{"semantic":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"semantic":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"semantic":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"semantic":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"semantic":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"semantic":"warning","emphasis":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive Button","props":{"component":"button"},"code":{"angular":"<db-tag><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tag\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Link","props":{"component":"link"},"code":{"angular":"<db-tag><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tag\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Checkbox","props":{"component":"checkbox"},"code":{"angular":"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Radio 1","props":{"component":"radio","identifier":"radio01"},"code":{"angular":"<db-tag><db-radio name=\\"radio01\\">Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio01\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Radio 2","props":{"component":"radio","identifier":"radio01","code":{"angular":"<db-tag><db-radio name=\\"radio01\\">Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio01\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 2</DBRadio></DBTag>"}}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"component":"checkbox"},"code":{"angular":"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Checked","props":{"component":"checkbox","checked":true},"code":{"angular":"<db-tag><db-checkbox [checked]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input checked=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Disabled","props":{"component":"checkbox","checked":true,"disabled":true},"code":{"angular":"<db-tag><db-checkbox [checked]=\\"true\\" [disabled]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input checked=\\"true\\" disabled=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked disabled>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\" :disabled=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]},{"name":"Example","examples":[{"name":"Interactive Strong Button with Icon","props":{"component":"button","emphasis":"strong","icon":"account","behaviour":"removable"},"code":{"angular":"<db-tag><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tag\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Strong Link with Icon","props":{"component":"link","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tag><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tag\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Strong Checkbox with Icon","props":{"component":"checkbox","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Strong Radio 1 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account","identifier":"radio02"},"code":{"angular":"<db-tag><db-radio name=\\"radio02\\">Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio02\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Strong Radio 2 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account","identifier":"radio02","code":{"angular":"<db-tag><db-radio name=\\"radio02\\">Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio02\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 2</DBRadio></DBTag>"}}}]}]')}}]);