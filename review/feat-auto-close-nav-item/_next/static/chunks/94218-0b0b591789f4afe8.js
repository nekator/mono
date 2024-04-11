"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94218],{37395:function(e,n,a){a.d(n,{P:function(){return c}});let c=(e,n,a)=>e.map((e,c)=>{var i;return{...e,slotCode:null!==(i=null==a?void 0:a.at(c))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var a,c,i,l;return{...e,example:n({...e.props,id:null!==(i=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==i?i:e.name,children:null!==(l=null===(c=e.props)||void 0===c?void 0:c.children)&&void 0!==l?l:e.name})}})}})},99341:function(e,n,a){var c=a(52322),i=a(5632),l=a(2784),o=a(12156),s=a(53752);let d=e=>{let{examples:n,slotCode:a}=e,[i,o]=(0,l.useState)();return(0,c.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,c.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,c.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))}),(0,c.jsxs)("details",{className:"code-details",onToggle:()=>{o(!i)},children:[(0,c.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:i?"Hide code":"Show code"}),(0,c.jsxs)("div",{className:"db-ui-functional",children:[(0,c.jsx)("div",{className:"backdrop"}),(0,c.jsx)(s.f,{className:"code",spacing:"small",children:a})]})]})]})},t=e=>{let{variants:n,componentName:a}=e,i=(e,n)=>{if(!window.location.origin||!window.location.href)return"";let a=window.location.href.split("?")[0],c="?page=".concat(e.name.toLowerCase());return n?"".concat(a.split("components")[0],"/components/").concat(n).concat(c):"".concat(a).concat(c)};return(0,c.jsx)(c.Fragment,{children:null==n?void 0:n.map((e,n)=>(0,c.jsxs)("div",{children:[(0,c.jsx)(s.oH,{}),(0,c.jsx)("h2",{children:(0,c.jsx)(s.vB,{content:"external",target:"_blank",href:i(e,a),children:e.name})}),(0,c.jsx)(d,{...e})]},"".concat(e.name,"-").concat(n)))})};n.Z=e=>{let{title:n,variants:a,subComponent:s,isSubComponent:r,componentName:x}=e,[h,m]=(0,l.useState)(),u=(0,i.useRouter)();return(0,l.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();n&&m(a.find(e=>e.name.toLowerCase()===n))}},[u]),(0,c.jsxs)(c.Fragment,{children:[h&&(0,c.jsx)("div",{children:(0,c.jsx)(d,{...h})}),!h&&!r&&(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h1",{children:n}),(0,c.jsx)(t,{variants:a,componentName:x})]}),s]}),!h&&r&&(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h2",{children:n}),(0,c.jsx)(t,{variants:a,componentName:x})]})]})}},99746:function(e,n,a){a.r(n);var c=a(52322),i=a(2784),l=a(9513),o=a(33878),s=a(95696),d=a(79041),t=a(16909),r=a(16134);n.default=()=>{let[e,n]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>n(!1),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="(Default) Collapsed">\n  (Default) Collapsed\n</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="(Default) Collapsed">\n  (Default) Collapsed\n</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="(Default) Collapsed">\n  (Default) Collapsed\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="(Default) Collapsed">\n  (Default) Collapsed\n</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="(Default) Collapsed">\n  (Default) Collapsed\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="(Default) Collapsed">\n  (Default) Collapsed\n</DBAccordionItem>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="Open" [open]="true">Open</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="Open" [open]="true">Open</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Open" open>\n  Open\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Open" open>\n  Open\n</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Open" :open="true">Open</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Open" :open="true">Open</DBAccordionItem>')},children:"Copy"})]})]})})]})}},88228:function(e,n,a){a.r(n);var c=a(52322),i=a(2784),l=a(9513),o=a(33878),s=a(95696),d=a(79041),t=a(16909),r=a(16134);n.default=()=>{let[e,n]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>n(!1),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="Enabled (Default)/Hover/Pressed">\n  Enabled (Default)/Hover/Pressed\n</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="Enabled (Default)/Hover/Pressed">\n  Enabled (Default)/Hover/Pressed\n</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Enabled (Default)/Hover/Pressed">\n  Enabled (Default)/Hover/Pressed\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Enabled (Default)/Hover/Pressed">\n  Enabled (Default)/Hover/Pressed\n</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Enabled (Default)/Hover/Pressed">\n  Enabled (Default)/Hover/Pressed\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Enabled (Default)/Hover/Pressed">\n  Enabled (Default)/Hover/Pressed\n</DBAccordionItem>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="Disabled" [disabled]="true">Disabled</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="Disabled" [disabled]="true">Disabled</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Disabled" disabled>\n  Disabled\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Disabled" disabled>\n  Disabled\n</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Disabled" :disabled="true">Disabled</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Disabled" :disabled="true">Disabled</DBAccordionItem>')},children:"Copy"})]})]})})]})}},28651:function(e,n,a){a.r(n);var c=a(52322),i=a(2784),l=a(9513),o=a(33878),s=a(95696),d=a(79041),t=a(16909),r=a(16134);n.default=()=>{let[e,n]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>n(!1),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="Functional">Functional</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="Functional">Functional</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<details id="OVERWRITE_DEFAULT_ID" class="db-accordion-item">\n  <summary>Functional</summary>\n  <div>Functional</div>\n</details>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<details id="OVERWRITE_DEFAULT_ID" class="db-accordion-item">\n  <summary>Functional</summary>\n  <div>Functional</div>\n</details>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Functional">Functional</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Functional">Functional</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Functional">Functional</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Functional">Functional</DBAccordionItem>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="(Default) Regular">\n  (Default) Regular\n</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="(Default) Regular">\n  (Default) Regular\n</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<details id="OVERWRITE_DEFAULT_ID" class="db-accordion-item">\n  <summary>(Default) Regular</summary>\n  <div>(Default) Regular</div>\n</details>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<details id="OVERWRITE_DEFAULT_ID" class="db-accordion-item">\n  <summary>(Default) Regular</summary>\n  <div>(Default) Regular</div>\n</details>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="(Default) Regular">\n  (Default) Regular\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="(Default) Regular">\n  (Default) Regular\n</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="(Default) Regular">\n  (Default) Regular\n</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="(Default) Regular">\n  (Default) Regular\n</DBAccordionItem>')},children:"Copy"})]})]})}),(0,c.jsx)(l.Z,{className:"tab-container",children:(0,c.jsxs)(o.Z,{children:[(0,c.jsxs)(s.Z,{children:[(0,c.jsx)(d.Z,{children:"Angular"}),(0,c.jsx)(d.Z,{children:"HTML"}),(0,c.jsx)(d.Z,{children:"React"}),(0,c.jsx)(d.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-accordion-item headline="Expressive">Expressive</db-accordion-item>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<db-accordion-item headline="Expressive">Expressive</db-accordion-item>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<details id="OVERWRITE_DEFAULT_ID" class="db-accordion-item">\n  <summary>Expressive</summary>\n  <div>Expressive</div>\n</details>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<details id="OVERWRITE_DEFAULT_ID" class="db-accordion-item">\n  <summary>Expressive</summary>\n  <div>Expressive</div>\n</details>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Expressive">Expressive</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Expressive">Expressive</DBAccordionItem>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBAccordionItem headline="Expressive">Expressive</DBAccordionItem>'})}),(0,c.jsx)(r.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAccordionItem headline="Expressive">Expressive</DBAccordionItem>')},children:"Copy"})]})]})})]})}},19371:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"headline":"Functional"}},{"name":"(Default) Regular","className":"db-ui-regular","props":{"headline":"(Default) Regular"}},{"name":"Expressive","className":"db-ui-expressive","props":{"headline":"Expressive"}}]},{"name":"Interaction States","examples":[{"name":"Enabled (Default)/Hover/Pressed","props":{"headline":"Enabled (Default)/Hover/Pressed"}},{"name":"Disabled","props":{"headline":"Disabled","disabled":true}}]},{"name":"Content States","examples":[{"name":"(Default) Collapsed","props":{"headline":"(Default) Collapsed"}},{"name":"Open","props":{"headline":"Open","open":true}}]}]')}}]);