"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93085],{37395:function(e,a,n){n.d(a,{P:function(){return s}});let s=(e,a,n)=>e.map((e,s)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(s))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,s,l,c;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(c=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==c?c:e.name})}})}})},99341:function(e,a,n){var s=n(52322),l=n(5632),c=n(2784),r=n(11803),t=n(86095);let i=e=>{let{examples:a,slotCode:n}=e,[l,r]=(0,c.useState)();return(0,s.jsxs)(t.f,{className:"variants-card db-code-docs",children:[(0,s.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,s.jsxs)("details",{className:"code-details",onToggle:()=>{r(!l)},children:[(0,s.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:l?"Hide code":"Show code"}),(0,s.jsxs)("div",{className:"db-ui-functional",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsx)(t.f,{className:"code",spacing:"small",children:n})]})]})]})};a.Z=e=>{let{title:a,variants:n}=e,[o,d]=(0,c.useState)(),x=(0,l.useRouter)();(0,c.useEffect)(()=>{if(x.query){var e;let a=null===(e=x.query.page)||void 0===e?void 0:e.toString();a&&d(n.find(e=>e.name.toLowerCase()===a))}},[x]);let p=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)("div",{children:(0,s.jsx)(i,{...o})}),!o&&(0,s.jsx)(r.Z,{children:(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(t.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(t.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,s.jsx)(i,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},39553:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Weak (Default)</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Weak (Default)</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Weak (Default)</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Weak (Default)</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Weak (Default)</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Weak (Default)</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Weak (Default)</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Weak (Default)</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-badge emphasis="strong">Strong</db-badge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-badge emphasis="strong">Strong</db-badge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy"})]})]})})]})}},38624:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-badge example="number">Numbers</db-badge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-badge example="number">Numbers</db-badge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Numbers</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Numbers</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge example="number">Numbers</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge example="number">Numbers</DBBadge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge example="number">Numbers</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge example="number">Numbers</DBBadge>')},children:"Copy"})]})]})})})}},57654:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-badge size="small">Small (Default)</db-badge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-badge size="small">Small (Default)</db-badge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-size="small">\n  Small (Default)\n</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge" data-size="small">\n  Small (Default)\n</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge size="small">Small (Default)</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge size="small">Small (Default)</DBBadge>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge size="small">Small (Default)</DBBadge>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBBadge size="small">Small (Default)</DBBadge>')},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Medium</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Medium</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Medium</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Medium</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Medium</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Medium</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Medium</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Medium</DBBadge>")},children:"Copy"})]})]})})]})}},1391:function(e,a,n){n.r(a);var s=n(52322),l=n(2784),c=n(9513),r=n(33878),t=n(95696),i=n(79041),o=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Functional</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Functional</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Functional</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Functional</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Functional</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Functional</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Functional</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Functional</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Regular (Default)</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Regular (Default)</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Regular (Default)</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Regular (Default)</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Regular (Default)</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Regular (Default)</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Regular (Default)</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Regular (Default)</DBBadge>")},children:"Copy"})]})]})}),(0,s.jsx)(c.Z,{className:"tab-container",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(t.Z,{children:[(0,s.jsx)(i.Z,{children:"Angular"}),(0,s.jsx)(i.Z,{children:"HTML"}),(0,s.jsx)(i.Z,{children:"React"}),(0,s.jsx)(i.Z,{children:"Vue"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-badge>Expressive</db-badge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<db-badge>Expressive</db-badge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">Expressive</span>'})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<span class="db-badge">Expressive</span>')},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Expressive</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Expressive</DBBadge>")},children:"Copy"})]}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>Expressive</DBBadge>"})}),(0,s.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBBadge>Expressive</DBBadge>")},children:"Copy"})]})]})})]})}},9394:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{}},{"name":"Regular (Default)","className":"db-ui-regular","props":{}},{"name":"Expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Semantic","examples":[{"name":"Adaptive (Default)","props":{}},{"name":"Neutral","props":{"variant":"neutral"}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"variant":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Size","examples":[{"name":"Small (Default)","props":{"size":"small"}},{"name":"Medium","props":{}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Dot","props":{"noContent":true}},{"name":"Dot - Small","props":{"noContent":true,"size":"small"}},{"name":"Icon","props":{"example":"icon"}},{"name":"Icon - Small","props":{"example":"icon","size":"small"}}]},{"name":"Placement","examples":[{"name":"Inline (Default)","props":{"placement":"inline"}},{"name":"Corner - Top - Left","props":{"placement":"corner-top-left"}},{"name":"Corner - Center - Left","props":{"placement":"corner-center-left"}},{"name":"Corner - Bottom- Left","props":{"placement":"corner-bottom-left"}},{"name":"Corner - Top - Right","props":{"placement":"corner-top-right"}},{"name":"Corner - Center - Right","props":{"placement":"corner-center-right"}},{"name":"Corner - Bottom- Right","props":{"placement":"corner-bottom-right"}}]},{"name":"Examples","examples":[{"name":"Numbers","props":{"example":"number"}}]}]')}}]);