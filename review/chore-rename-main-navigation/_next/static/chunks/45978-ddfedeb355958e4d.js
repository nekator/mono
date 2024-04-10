"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45978],{37395:function(e,o,n){n.d(o,{P:function(){return r}});let r=(e,o,n)=>e.map((e,r)=>{var p;return{...e,slotCode:null!==(p=null==n?void 0:n.at(r))&&void 0!==p?p:"No code available",examples:e.examples.map(e=>{var n,r,p,i;return{...e,example:o({...e.props,id:null!==(p=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==p?p:e.name,children:null!==(i=null===(r=e.props)||void 0===r?void 0:r.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,o,n){var r=n(52322),p=n(5632),i=n(2784),a=n(10851),t=n(66703);let s=e=>{let{examples:o,slotCode:n}=e,[p,a]=(0,i.useState)();return(0,r.jsxs)(t.f,{className:"variants-card db-code-docs",children:[(0,r.jsx)("div",{className:"variants-list",children:o.map((e,o)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(o)))}),(0,r.jsxs)("details",{className:"code-details",onToggle:()=>{a(!p)},children:[(0,r.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:p?"Hide code":"Show code"}),(0,r.jsxs)("div",{className:"db-density-functional",children:[(0,r.jsx)("div",{className:"backdrop"}),(0,r.jsx)(t.f,{className:"code",spacing:"small",children:n})]})]})]})};o.Z=e=>{let{title:o,variants:n}=e,[d,l]=(0,i.useState)(),c=(0,p.useRouter)();(0,i.useEffect)(()=>{if(c.query){var e;let o=null===(e=c.query.page)||void 0===e?void 0:e.toString();o&&l(n.find(e=>e.name.toLowerCase()===o))}},[c]);let v=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("div",{children:(0,r.jsx)(s,{...d})}),!d&&(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"default-container",children:[(0,r.jsx)("h1",{children:o}),null==n?void 0:n.map((e,o)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(t.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(t.vB,{content:"external",target:"_blank",href:v(e),children:e.name})}),(0,r.jsx)(s,{...e})]},"".concat(e.name,"-").concat(o)))]})})]})}},56517:function(e,o,n){n.r(o);var r=n(52322),p=n(2784),i=n(9513),a=n(33878),t=n(95696),s=n(79041),d=n(16909),l=n(16134);o.default=()=>{let[e,o]=(0,p.useState)();return(0,p.useEffect)(()=>{e&&setTimeout(()=>o(""),1500)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover id="popover-01">Functional</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover id="popover-01">Functional</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover id="popover-01">Functional</db-popover>'),navigator.clipboard.writeText('<db-popover id="popover-01">Functional</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-01" class="db-popover">\n  <article class="db-popover-content">Functional</article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-01" class="db-popover">\n  <article class="db-popover-content">Functional</article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-01" class="db-popover">\n  <article class="db-popover-content">Functional</article>\n</div>'),navigator.clipboard.writeText('<div id="popover-01" class="db-popover">\n  <article class="db-popover-content">Functional</article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-01">Functional</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-01">Functional</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-01">Functional</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-01">Functional</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-01">Functional</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-01">Functional</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-01">Functional</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-01">Functional</DBPopover>')},children:"Copy"})]})]})}),(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover id="popover-02">(Default) Regular</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover id="popover-02">(Default) Regular</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover id="popover-02">(Default) Regular</db-popover>'),navigator.clipboard.writeText('<db-popover id="popover-02">(Default) Regular</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-02" class="db-popover">\n  <article class="db-popover-content">(Default) Regular</article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-02" class="db-popover">\n  <article class="db-popover-content">(Default) Regular</article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-02" class="db-popover">\n  <article class="db-popover-content">(Default) Regular</article>\n</div>'),navigator.clipboard.writeText('<div id="popover-02" class="db-popover">\n  <article class="db-popover-content">(Default) Regular</article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-02">(Default) Regular</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-02">(Default) Regular</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-02">(Default) Regular</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-02">(Default) Regular</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-02">(Default) Regular</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-02">(Default) Regular</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-02">(Default) Regular</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-02">(Default) Regular</DBPopover>')},children:"Copy"})]})]})}),(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover id="popover-03">Expressive</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover id="popover-03">Expressive</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover id="popover-03">Expressive</db-popover>'),navigator.clipboard.writeText('<db-popover id="popover-03">Expressive</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-03" class="db-popover">\n  <article class="db-popover-content">Expressive</article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-03" class="db-popover">\n  <article class="db-popover-content">Expressive</article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-03" class="db-popover">\n  <article class="db-popover-content">Expressive</article>\n</div>'),navigator.clipboard.writeText('<div id="popover-03" class="db-popover">\n  <article class="db-popover-content">Expressive</article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-03">Expressive</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-03">Expressive</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-03">Expressive</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-03">Expressive</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-03">Expressive</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-03">Expressive</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-03">Expressive</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-03">Expressive</DBPopover>')},children:"Copy"})]})]})})]})}},28133:function(e,o,n){n.r(o);var r=n(52322),p=n(2784),i=n(9513),a=n(33878),t=n(95696),s=n(79041),d=n(16909),l=n(16134);o.default=()=>{let[e,o]=(0,p.useState)();return(0,p.useEffect)(()=>{e&&setTimeout(()=>o(""),1500)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover id="popover-11">(Default) No gap</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover id="popover-11">(Default) No gap</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover id="popover-11">(Default) No gap</db-popover>'),navigator.clipboard.writeText('<db-popover id="popover-11">(Default) No gap</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-11" class="db-popover">\n  <article class="db-popover-content">(Default) No gap</article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-11" class="db-popover">\n  <article class="db-popover-content">(Default) No gap</article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-11" class="db-popover">\n  <article class="db-popover-content">(Default) No gap</article>\n</div>'),navigator.clipboard.writeText('<div id="popover-11" class="db-popover">\n  <article class="db-popover-content">(Default) No gap</article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-11">(Default) No gap</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-11">(Default) No gap</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-11">(Default) No gap</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-11">(Default) No gap</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover id="popover-11">(Default) No gap</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover id="popover-11">(Default) No gap</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover id="popover-11">(Default) No gap</DBPopover>'),navigator.clipboard.writeText('<DBPopover id="popover-11">(Default) No gap</DBPopover>')},children:"Copy"})]})]})}),(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover [gap]="true" id="popover-12">With gap</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover [gap]="true" id="popover-12">With gap</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover [gap]="true" id="popover-12">With gap</db-popover>'),navigator.clipboard.writeText('<db-popover [gap]="true" id="popover-12">With gap</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-12" class="db-popover">\n  <article class="db-popover-content" data-gap="true">\n    With gap\n  </article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-12" class="db-popover">\n  <article class="db-popover-content" data-gap="true">\n    With gap\n  </article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-12" class="db-popover">\n  <article class="db-popover-content" data-gap="true">\n    With gap\n  </article>\n</div>'),navigator.clipboard.writeText('<div id="popover-12" class="db-popover">\n  <article class="db-popover-content" data-gap="true">\n    With gap\n  </article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover gap id="popover-12">\n  With gap\n</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover gap id="popover-12">\n  With gap\n</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover gap id="popover-12">\n  With gap\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover gap id="popover-12">\n  With gap\n</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover :gap="true" id="popover-12">With gap</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover :gap="true" id="popover-12">With gap</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover :gap="true" id="popover-12">With gap</DBPopover>'),navigator.clipboard.writeText('<DBPopover :gap="true" id="popover-12">With gap</DBPopover>')},children:"Copy"})]})]})})]})}},17587:function(e,o,n){n.r(o);var r=n(52322),p=n(2784),i=n(9513),a=n(33878),t=n(95696),s=n(79041),d=n(16909),l=n(16134);o.default=()=>{let[e,o]=(0,p.useState)();return(0,p.useEffect)(()=>{e&&setTimeout(()=>o(""),1500)},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>'),navigator.clipboard.writeText('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-17" class="db-popover">\n  <article class="db-popover-content">(Default) Auto</article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-17" class="db-popover">\n  <article class="db-popover-content">(Default) Auto</article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-17" class="db-popover">\n  <article class="db-popover-content">(Default) Auto</article>\n</div>'),navigator.clipboard.writeText('<div id="popover-17" class="db-popover">\n  <article class="db-popover-content">(Default) Auto</article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>')},children:"Copy"})]})]})}),(0,r.jsx)(i.Z,{className:"tab-container",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(s.Z,{children:"Angular"}),(0,r.jsx)(s.Z,{children:"HTML"}),(0,r.jsx)(s.Z,{children:"React"}),(0,r.jsx)(s.Z,{children:"Vue"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'),navigator.clipboard.writeText('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-html",children:'<div id="popover-18" class="db-popover">\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<div id="popover-18" class="db-popover">\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<div id="popover-18" class="db-popover">\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>'),navigator.clipboard.writeText('<div id="popover-18" class="db-popover">\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>')},children:"Copy"})]}),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'})}),(0,r.jsx)(l.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'===e?"done":"copy",variant:"ghost",onClick:()=>{o('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>')},children:"Copy"})]})]})})]})}},69780:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{"id":"popover-01"}},{"name":"(Default) Regular","className":"db-density-regular","props":{"id":"popover-02"}},{"name":"Expressive","className":"db-density-expressive","props":{"id":"popover-03"}}]},{"name":"Spacing","examples":[{"name":"(Default) Small","props":{"spacing":"small","id":"popover-04"}},{"name":"Medium","props":{"spacing":"medium","id":"popover-05"}},{"name":"None","props":{"spacing":"none","id":"popover-06"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"placement":"bottom-start","id":"popover-07-start"}},{"name":"(Default) bottom","props":{"placement":"bottom","id":"popover-07"}},{"name":"bottom-end","props":{"placement":"bottom-end","id":"popover-07-end"}},{"name":"left-start","props":{"placement":"left-start","id":"popover-09-start"}},{"name":"left","props":{"placement":"left","id":"popover-09"}},{"name":"left-end","props":{"placement":"left-end","id":"popover-09-end"}},{"name":"right-start","props":{"placement":"right-start","id":"popover-10-start"}},{"name":"right","props":{"placement":"right","id":"popover-10"}},{"name":"right-end","props":{"placement":"right-end","id":"popover-10-end"}},{"name":"top-start","props":{"placement":"top-start","id":"popover-08-start"}},{"name":"top","props":{"placement":"top","id":"popover-08"}},{"name":"top-end","props":{"placement":"top-end","id":"popover-08-end"}}]},{"name":"Gap","examples":[{"name":"(Default) No gap","props":{"id":"popover-11"}},{"name":"With gap","props":{"gap":true,"id":"popover-12"}}]},{"name":"Animations","examples":[{"name":"(Default) Animation no delay","props":{"id":"popover-13"}},{"name":"Delay slow","props":{"delay":"slow","id":"popover-14"}},{"name":"Delay fast","props":{"delay":"fast","id":"popover-15"}},{"name":"No animation","props":{"animation":"disabled","id":"popover-16"}}]},{"name":"Width","examples":[{"name":"(Default) Auto","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"popover-17"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"popover-18"}}]}]')}}]);