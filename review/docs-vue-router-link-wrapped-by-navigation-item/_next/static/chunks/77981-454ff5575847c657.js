"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77981],{45016:function(a,e,t){t.d(e,{P:function(){return n}});let n=(a,e,t)=>a.map((a,n)=>{var c;return{...a,slotCode:null!==(c=null==t?void 0:t.at(n))&&void 0!==c?c:"No code available",examples:a.examples.map(a=>{var t,n,c,o;return{...a,example:e({...a.props,id:null!==(c=null===(t=a.props)||void 0===t?void 0:t.id)&&void 0!==c?c:a.name,children:null!==(o=null===(n=a.props)||void 0===n?void 0:n.children)&&void 0!==o?o:a.name})}})}})},47439:function(a,e,t){var n=t(52322),c=t(5632),o=t(2784),i=t(55216),s=t(18297);let l=a=>{let{examples:e,slotCode:t}=a,[c,i]=(0,o.useState)();return(0,n.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:e.map((a,e)=>(0,n.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(e)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{i(!c)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:c?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(s.f,{className:"code",spacing:"small",children:t})]})]})]})},r=a=>{let{variants:e,componentName:t}=a,c=(a,e)=>{if(!window.location.origin||!window.location.href)return"";let t=window.location.href.split("?")[0],n="?page=".concat(a.name.toLowerCase());return e?"".concat(t.split("components")[0],"/components/").concat(e).concat(n):"".concat(t).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==e?void 0:e.map((a,e)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(s.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(s.vB,{content:"external",target:"_blank",href:c(a,t),children:a.name})}),(0,n.jsx)(l,{...a})]},"".concat(a.name,"-").concat(e)))})};e.Z=a=>{let{title:e,variants:t,subComponent:s,isSubComponent:d,componentName:g}=a,[h,x]=(0,o.useState)(),b=(0,c.useRouter)();return(0,o.useEffect)(()=>{if(b.query){var a;let e=null===(a=b.query.page)||void 0===a?void 0:a.toString();e&&x(t.find(a=>a.name.toLowerCase()===e))}},[b]),(0,n.jsxs)(n.Fragment,{children:[h&&(0,n.jsx)("div",{children:(0,n.jsx)(l,{...h})}),!h&&!d&&(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)(r,{variants:t,componentName:g})]}),s]}),!h&&d&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:e}),(0,n.jsx)(r,{variants:t,componentName:g})]})]})}},39573:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(70741),i=t(57092),s=t(57884),l=t(3041),r=t(49953),d=t(10326);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>(Default) Text</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>(Default) Text</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>(Default) Text</db-tag>"),navigator.clipboard.writeText("<db-tag>(Default) Text</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">(Default) Text</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">(Default) Text</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">(Default) Text</div>'),navigator.clipboard.writeText('<div class="db-tag">(Default) Text</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) Text</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) Text</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) Text</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) Text</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) Text</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) Text</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) Text</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) Text</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag icon="account" [noText]="true">Icon</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag icon="account" [noText]="true">Icon</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag icon="account" [noText]="true">Icon</db-tag>'),navigator.clipboard.writeText('<db-tag icon="account" [noText]="true">Icon</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-icon="account" data-no-text="true">\n  Icon\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account" noText>\n  Icon\n</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account" noText>\n  Icon\n</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account" noText>\n  Icon\n</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account" noText>\n  Icon\n</DBTag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account" :noText="true">Icon</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account" :noText="true">Icon</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account" :noText="true">Icon</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account" :noText="true">Icon</DBTag>')},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag icon="account">Icon & Text</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag icon="account">Icon & Text</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag icon="account">Icon & Text</db-tag>'),navigator.clipboard.writeText('<db-tag icon="account">Icon & Text</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-icon="account">\n  Icon &amp Text\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account">Icon & Text</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account">Icon & Text</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account">Icon & Text</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account">Icon & Text</DBTag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag icon="account">Icon & Text</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag icon="account">Icon & Text</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag icon="account">Icon & Text</DBTag>'),navigator.clipboard.writeText('<DBTag icon="account">Icon & Text</DBTag>')},children:"Copy"})]})]})})]})}},71543:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(70741),i=t(57092),s=t(57884),l=t(3041),r=t(49953),d=t(10326);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>Functional</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>Functional</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>Functional</db-tag>"),navigator.clipboard.writeText("<db-tag>Functional</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">Functional</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">Functional</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">Functional</div>'),navigator.clipboard.writeText('<div class="db-tag">Functional</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Functional</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Functional</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Functional</DBTag>"),navigator.clipboard.writeText("<DBTag>Functional</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Functional</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Functional</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Functional</DBTag>"),navigator.clipboard.writeText("<DBTag>Functional</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>(Default) Regular</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>(Default) Regular</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>(Default) Regular</db-tag>"),navigator.clipboard.writeText("<db-tag>(Default) Regular</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">(Default) Regular</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">(Default) Regular</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">(Default) Regular</div>'),navigator.clipboard.writeText('<div class="db-tag">(Default) Regular</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) Regular</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) Regular</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) Regular</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) Regular</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) Regular</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) Regular</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) Regular</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) Regular</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>Expressive</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>Expressive</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>Expressive</db-tag>"),navigator.clipboard.writeText("<db-tag>Expressive</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">Expressive</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">Expressive</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">Expressive</div>'),navigator.clipboard.writeText('<div class="db-tag">Expressive</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Expressive</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Expressive</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Expressive</DBTag>"),navigator.clipboard.writeText("<DBTag>Expressive</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>Expressive</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>Expressive</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>Expressive</DBTag>"),navigator.clipboard.writeText("<DBTag>Expressive</DBTag>")},children:"Copy"})]})]})})]})}},255:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(70741),i=t(57092),s=t(57884),l=t(3041),r=t(49953),d=t(10326);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>(Default) Weak</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>(Default) Weak</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>(Default) Weak</db-tag>"),navigator.clipboard.writeText("<db-tag>(Default) Weak</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">(Default) Weak</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">(Default) Weak</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">(Default) Weak</div>'),navigator.clipboard.writeText('<div class="db-tag">(Default) Weak</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) Weak</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) Weak</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) Weak</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) Weak</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) Weak</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) Weak</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) Weak</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) Weak</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag emphasis="strong">Strong</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag emphasis="strong">Strong</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag emphasis="strong">Strong</db-tag>'),navigator.clipboard.writeText('<db-tag emphasis="strong">Strong</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-emphasis="strong">\n  Strong\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag emphasis="strong">Strong</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag emphasis="strong">Strong</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag emphasis="strong">Strong</DBTag>'),navigator.clipboard.writeText('<DBTag emphasis="strong">Strong</DBTag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag emphasis="strong">Strong</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag emphasis="strong">Strong</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag emphasis="strong">Strong</DBTag>'),navigator.clipboard.writeText('<DBTag emphasis="strong">Strong</DBTag>')},children:"Copy"})]})]})})]})}},96396:function(a,e,t){t.r(e);var n=t(52322),c=t(2784),o=t(70741),i=t(57092),s=t(57884),l=t(3041),r=t(49953),d=t(10326);e.default=()=>{let[a,e]=(0,c.useState)();return(0,c.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-tag>(Default) No Overflow</db-tag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-tag>(Default) No Overflow</db-tag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<db-tag>(Default) No Overflow</db-tag>"),navigator.clipboard.writeText("<db-tag>(Default) No Overflow</db-tag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag">(Default) No Overflow</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag">(Default) No Overflow</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag">(Default) No Overflow</div>'),navigator.clipboard.writeText('<div class="db-tag">(Default) No Overflow</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) No Overflow</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) No Overflow</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) No Overflow</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) No Overflow</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag>(Default) No Overflow</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag>(Default) No Overflow</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag>(Default) No Overflow</DBTag>"),navigator.clipboard.writeText("<DBTag>(Default) No Overflow</DBTag>")},children:"Copy"})]})]})}),(0,n.jsx)(o.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(l.Z,{children:"Angular"}),(0,n.jsx)(l.Z,{children:"HTML"}),(0,n.jsx)(l.Z,{children:"React"}),(0,n.jsx)(l.Z,{children:"Vue"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tag [overflow]="true">With Overflow (max-width)</db-tag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tag [overflow]="true">With Overflow (max-width)</db-tag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<db-tag [overflow]="true">With Overflow (max-width)</db-tag>'),navigator.clipboard.writeText('<db-tag [overflow]="true">With Overflow (max-width)</db-tag>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>'),navigator.clipboard.writeText('<div class="db-tag" data-overflow="true">\n  With Overflow (max-width)\n</div>')},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBTag overflow>With Overflow (max-width)</DBTag>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBTag overflow>With Overflow (max-width)</DBTag>"===a?"done":"copy",variant:"ghost",onClick:()=>{e("<DBTag overflow>With Overflow (max-width)</DBTag>"),navigator.clipboard.writeText("<DBTag overflow>With Overflow (max-width)</DBTag>")},children:"Copy"})]}),(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTag :overflow="true">With Overflow (max-width)</DBTag>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTag :overflow="true">With Overflow (max-width)</DBTag>'===a?"done":"copy",variant:"ghost",onClick:()=>{e('<DBTag :overflow="true">With Overflow (max-width)</DBTag>'),navigator.clipboard.writeText('<DBTag :overflow="true">With Overflow (max-width)</DBTag>')},children:"Copy"})]})]})})]})}},47837:function(a){a.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"(Default) Weak","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Neutral","props":{"semantic":"neutral"}},{"name":"Critical","props":{"semantic":"critical"}},{"name":"Informational","props":{"semantic":"informational"}},{"name":"Successful","props":{"semantic":"successful"}},{"name":"Warning","props":{"semantic":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"semantic":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"semantic":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"semantic":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"semantic":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"semantic":"warning","emphasis":"strong"}}]},{"name":"Behaviour","examples":[{"name":"(Default) Static","props":{}},{"name":"Interactive Button","props":{"component":"button"},"code":{"angular":"<db-tag><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tag\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Link","props":{"component":"link"},"code":{"angular":"<db-tag><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tag\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Checkbox","props":{"component":"checkbox"},"code":{"angular":"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Radio 1","props":{"component":"radio","identifier":"radio01"},"code":{"angular":"<db-tag><db-radio name=\\"radio01\\">Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio01\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Radio 2","props":{"component":"radio","identifier":"radio01","code":{"angular":"<db-tag><db-radio name=\\"radio01\\">Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio01\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio01\\">Interactive Radio 2</DBRadio></DBTag>"}}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"(Default) Unchecked","props":{"component":"checkbox"},"code":{"angular":"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Checked","props":{"component":"checkbox","checked":true},"code":{"angular":"<db-tag><db-checkbox [checked]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input checked=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Disabled","props":{"component":"checkbox","checked":true,"disabled":true},"code":{"angular":"<db-tag><db-checkbox [checked]=\\"true\\" [disabled]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input checked=\\"true\\" disabled=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked disabled>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\" :disabled=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"(Default) No Overflow","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]},{"name":"Example","examples":[{"name":"Interactive Strong Button with Icon","props":{"component":"button","emphasis":"strong","icon":"account","behaviour":"removable"},"code":{"angular":"<db-tag><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tag\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Strong Link with Icon","props":{"component":"link","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tag><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tag\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Strong Checkbox with Icon","props":{"component":"checkbox","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tag><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Strong Radio 1 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account","identifier":"radio02"},"code":{"angular":"<db-tag><db-radio name=\\"radio02\\">Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio02\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Strong Radio 2 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account","identifier":"radio02","code":{"angular":"<db-tag><db-radio name=\\"radio02\\">Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tag\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" name=\\"radio02\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio name=\\"radio02\\">Interactive Radio 2</DBRadio></DBTag>"}}}]}]')}}]);