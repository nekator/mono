"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93085],{37395:function(e,a,n){n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(s))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,s,l,c;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(c=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==c?c:e.name})}})}})},99341:function(e,a,n){var s=n(52322),l=n(5632),c=n(2784),r=n(11803),t=n(86095);let i=e=>{let{examples:a,slotCode:n}=e,[l,r]=(0,c.useState)();return(0,s.jsxs)(t.f,{className:"variants-card db-code-docs",children:[(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,s.jsxs)("details",{className:"code-details",onToggle:()=>{r(!l)},children:[(0,s.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:l?"Hide code":"Show code"}),(0,s.jsxs)("div",{className:"db-ui-functional",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsx)(t.f,{className:"code",spacing:"small",children:n})]})]})]})},o=e=>{let{variants:a,componentName:n}=e,l=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],s="?page=".concat(e.name.toLowerCase());return a?"".concat(n.split("components")[0],"/components/").concat(a).concat(s):"".concat(n).concat(s)};return(0,s.jsx)(s.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(t.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(t.vB,{content:"external",target:"_blank",href:l(e,n),children:e.name})}),(0,s.jsx)(i,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:n,subComponent:t,isSubComponent:d,componentName:x}=e,[p,m]=(0,c.useState)(),h=(0,l.useRouter)();return(0,c.useEffect)(()=>{if(h.query){var e;let a=null===(e=h.query.page)||void 0===e?void 0:e.toString();a&&m(n.find(e=>e.name.toLowerCase()===a))}},[h]),(0,s.jsxs)(s.Fragment,{children:[p&&(0,s.jsx)("div",{children:(0,s.jsx)(i,{...p})}),!p&&!d&&(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),(0,s.jsx)(o,{variants:n,componentName:x})]}),t]}),!p&&d&&(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h2",{children:a}),(0,s.jsx)(o,{variants:n,componentName:x})]})]})}},39553:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Weak</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>(Default) Weak</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Weak</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">(Default) Weak</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Weak</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>(Default) Weak</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Weak</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>(Default) Weak</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-badge emphasis="strong">Strong</db-badge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-badge emphasis="strong">Strong</db-badge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy"})]})]})})]})}},38624:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-badge example="number">Numbers</db-badge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-badge example="number">Numbers</db-badge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Numbers</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Numbers</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge example="number">Numbers</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge example="number">Numbers</DBBadge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge example="number">Numbers</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge example="number">Numbers</DBBadge>')},children:"Copy"})]})]})})})}},57654:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Small</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>(Default) Small</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Small</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">(Default) Small</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Small</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>(Default) Small</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Small</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>(Default) Small</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-badge size="medium">Medium</db-badge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-badge size="medium">Medium</db-badge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-size="medium">\n  Medium\n</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge" data-size="medium">\n  Medium\n</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge size="medium">Medium</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge size="medium">Medium</DBBadge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge size="medium">Medium</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge size="medium">Medium</DBBadge>')},children:"Copy"})]})]})})]})}},1391:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Functional</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Functional</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Functional</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Functional</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Functional</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Functional</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Functional</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Functional</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Regular</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>(Default) Regular</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Regular</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">(Default) Regular</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Regular</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>(Default) Regular</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Regular</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>(Default) Regular</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Expressive</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Expressive</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Expressive</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Expressive</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Expressive</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Expressive</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Expressive</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Expressive</DBBadge>")},children:"Copy"})]})]})})]})}},9394:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{}},{"name":"(Default) Regular","className":"db-ui-regular","props":{}},{"name":"Expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"(Default) Weak","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{}},{"name":"Neutral","props":{"variant":"neutral"}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"variant":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"(Default) Small","props":{}},{"name":"Medium","props":{"size":"medium"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{}},{"name":"(Default) Text - Medium","props":{"size":"medium"}},{"name":"Dot - Small","props":{"noContent":true}},{"name":"Dot - Medium","props":{"noContent":true,"size":"medium"}},{"name":"Icon - Small","props":{"example":"icon"}},{"name":"Icon - Medium","props":{"example":"icon","size":"medium"}}]},{"name":"Placement","examples":[{"name":"(Default) Inline","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]')}}]);