"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68006],{37395:function(a,e,n){n.d(e,{P:function(){return c}});let c=(a,e,n)=>a.map((a,c)=>{var s;return{...a,slotCode:null!==(s=null==n?void 0:n.at(c))&&void 0!==s?s:"No code available",examples:a.examples.map(a=>{var n,c,s,l;return{...a,example:e({...a.props,id:null!==(s=null===(n=a.props)||void 0===n?void 0:n.id)&&void 0!==s?s:a.name,children:null!==(l=null===(c=a.props)||void 0===c?void 0:c.children)&&void 0!==l?l:a.name})}})}})},99341:function(a,e,n){var c=n(52322),s=n(5632),l=n(2784),i=n(11803),r=n(86095);let t=a=>{let{examples:e,slotCode:n}=a,[s,i]=(0,l.useState)();return(0,c.jsxs)(r.f,{className:"variants-card db-code-docs",children:[(0,c.jsx)("div",{className:"variants-list",children:e.map((a,e)=>(0,c.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(e)))}),(0,c.jsxs)("details",{className:"code-details",onToggle:()=>{i(!s)},children:[(0,c.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:s?"Hide code":"Show code"}),(0,c.jsxs)("div",{className:"db-ui-functional",children:[(0,c.jsx)("div",{className:"backdrop"}),(0,c.jsx)(r.f,{className:"code",spacing:"small",children:n})]})]})]})};e.Z=a=>{let{title:e,variants:n}=a,[d,o]=(0,l.useState)(),x=(0,s.useRouter)();(0,l.useEffect)(()=>{if(x.query){var a;let e=null===(a=x.query.page)||void 0===a?void 0:a.toString();e&&o(n.find(a=>a.name.toLowerCase()===e))}},[x]);let p=a=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(a.name.toLowerCase()):"";return(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)("div",{children:(0,c.jsx)(t,{...d})}),!d&&(0,c.jsx)(i.Z,{children:(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h1",{children:e}),null==n?void 0:n.map((a,e)=>(0,c.jsxs)("div",{children:[(0,c.jsx)(r.oH,{}),(0,c.jsx)("h2",{children:(0,c.jsx)(r.vB,{content:"external",target:"_blank",href:p(a),children:a.name})}),(0,c.jsx)(t,{...a})]},"".concat(a.name,"-").concat(e)))]})})]})}},38398:function(a,e,n){n.r(e);var c=n(52322),s=n(2784),l=n(9513),i=n(33878),r=n(95696),t=n(79041),d=n(16909),o=n(16134);e.default=()=>{let[a,e]=(0,s.useState)();return(0,s.useEffect)(()=>{a&&setTimeout(()=>e(!1),1500)},[a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-card>(Default) No Spacing</db-card>"})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText("<db-card>(Default) No Spacing</db-card>")},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card">(Default) No Spacing</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card">(Default) No Spacing</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBCard>(Default) No Spacing</DBCard>"})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText("<DBCard>(Default) No Spacing</DBCard>")},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBCard>(Default) No Spacing</DBCard>"})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText("<DBCard>(Default) No Spacing</DBCard>")},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="medium">Medium</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="medium">Medium</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-spacing="medium">\n  Medium\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-spacing="medium">\n  Medium\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="medium">Medium</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="medium">Medium</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="medium">Medium</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="medium">Medium</DBCard>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="small">Small</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="small">Small</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-spacing="small">\n  Small\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-spacing="small">\n  Small\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">Small</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">Small</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">Small</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">Small</DBCard>')},children:"Copy"})]})]})})]})}},25877:function(a,e,n){n.r(e);var c=n(52322),s=n(2784),l=n(9513),i=n(33878),r=n(95696),t=n(79041),d=n(16909),o=n(16134);e.default=()=>{let[a,e]=(0,s.useState)();return(0,s.useEffect)(()=>{a&&setTimeout(()=>e(!1),1500)},[a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="small">Functional</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="small">Functional</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-spacing="small">\n  Functional\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-spacing="small">\n  Functional\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">Functional</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">Functional</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">Functional</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">Functional</DBCard>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="small">(Default) Regular</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="small">(Default) Regular</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-spacing="small">\n  (Default) Regular\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-spacing="small">\n  (Default) Regular\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">(Default) Regular</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">(Default) Regular</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">(Default) Regular</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">(Default) Regular</DBCard>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="small">Expressive</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="small">Expressive</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-spacing="small">\n  Expressive\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-spacing="small">\n  Expressive\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">Expressive</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">Expressive</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">Expressive</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">Expressive</DBCard>')},children:"Copy"})]})]})})]})}},11910:function(a,e,n){n.r(e);var c=n(52322),s=n(2784),l=n(9513),i=n(33878),r=n(95696),t=n(79041),d=n(16909),o=n(16134);e.default=()=>{let[a,e]=(0,s.useState)();return(0,s.useEffect)(()=>{a&&setTimeout(()=>e(!1),1500)},[a]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="small">(Default) Non interactive</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="small">(Default) Non interactive</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-spacing="small">\n  (Default) Non interactive\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-spacing="small">\n  (Default) Non interactive\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">(Default) Non interactive</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">(Default) Non interactive</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small">(Default) Non interactive</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small">(Default) Non interactive</DBCard>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-card spacing="small" variant="interactive">\n  Interactive\n</db-card>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<db-card spacing="small" variant="interactive">\n  Interactive\n</db-card>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-card" data-variant="interactive" data-spacing="small">\n  Interactive\n</div>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<div class="db-card" data-variant="interactive" data-spacing="small">\n  Interactive\n</div>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small" variant="interactive">\n  Interactive\n</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small" variant="interactive">\n  Interactive\n</DBCard>')},children:"Copy"})]}),(0,c.jsxs)(d.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCard spacing="small" variant="interactive">\n  Interactive\n</DBCard>'})}),(0,c.jsx)(o.Z,{className:"copy-button",noText:!0,icon:a?"done":"copy",variant:"text",onClick:()=>{e(!0),navigator.clipboard.writeText('<DBCard spacing="small" variant="interactive">\n  Interactive\n</DBCard>')},children:"Copy"})]})]})})]})}},1304:function(a){a.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"spacing":"small"}},{"name":"(Default) Regular","className":"db-ui-regular","props":{"spacing":"small"}},{"name":"Expressive","className":"db-ui-expressive","props":{"spacing":"small"}}]},{"name":"Color variant","examples":[{"name":"(Default) adaptive","props":{"variant":"interactive","spacing":"small","colorVariant":"adaptive"}},{"name":"neutral","props":{"colorVariant":"neutral","variant":"interactive","spacing":"small"}},{"name":"brand","props":{"colorVariant":"brand","variant":"interactive","spacing":"small"}},{"name":"critical","props":{"colorVariant":"critical","variant":"interactive","spacing":"small"}},{"name":"successful","props":{"colorVariant":"successful","variant":"interactive","spacing":"small"}},{"name":"warning","props":{"colorVariant":"warning","variant":"interactive","spacing":"small"}},{"name":"informational","props":{"colorVariant":"informational","variant":"interactive","spacing":"small"}}]},{"name":"Spacing","examples":[{"name":"(Default) No Spacing","props":{}},{"name":"Medium","props":{"spacing":"medium"}},{"name":"Small","props":{"spacing":"small"}}]},{"name":"Variant","examples":[{"name":"(Default) Non interactive","props":{"spacing":"small"}},{"name":"Interactive","props":{"spacing":"small","variant":"interactive"}}]}]')}}]);