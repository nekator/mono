"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90536],{45016:function(e,i,n){n.d(i,{P:function(){return s}});let s=(e,i,n)=>e.map((e,s)=>{var c;return{...e,slotCode:null!==(c=null==n?void 0:n.at(s))&&void 0!==c?c:"No code available",examples:e.examples.map(e=>{var n,s,c,a;return{...e,example:i({...e.props,id:null!==(c=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==c?c:e.name,children:null!==(a=null===(s=e.props)||void 0===s?void 0:s.children)&&void 0!==a?a:e.name})}})}})},47439:function(e,i,n){var s=n(52322),c=n(5632),a=n(2784),t=n(55216),o=n(3673);let l=e=>{let{examples:i,slotCode:n}=e,[c,t]=(0,a.useState)();return(0,s.jsxs)(o.f,{className:"variants-card db-code-docs",children:[(0,s.jsx)("div",{className:"variants-list",children:i.map((e,i)=>(0,s.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(i)))}),(0,s.jsxs)("details",{className:"code-details",onToggle:()=>{t(!c)},children:[(0,s.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:c?"Hide code":"Show code"}),(0,s.jsxs)("div",{className:"db-density-functional",children:[(0,s.jsx)("div",{className:"backdrop"}),(0,s.jsx)(o.f,{className:"code",spacing:"small",children:n})]})]})]})},d=e=>{let{variants:i,componentName:n}=e,c=(e,i)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],s="?page=".concat(e.name.toLowerCase());return i?"".concat(n.split("components")[0],"/components/").concat(i).concat(s):"".concat(n).concat(s)};return(0,s.jsx)(s.Fragment,{children:null==i?void 0:i.map((e,i)=>(0,s.jsxs)("div",{children:[(0,s.jsx)(o.oH,{}),(0,s.jsx)("h2",{children:(0,s.jsx)(o.vB,{content:"external",target:"_blank",href:c(e,n),children:e.name})}),(0,s.jsx)(l,{...e})]},"".concat(e.name,"-").concat(i)))})};i.Z=e=>{let{title:i,variants:n,subComponent:o,isSubComponent:r,componentName:x}=e,[h,u]=(0,a.useState)(),m=(0,c.useRouter)();return(0,a.useEffect)(()=>{if(m.query){var e;let i=null===(e=m.query.page)||void 0===e?void 0:e.toString();i&&u(n.find(e=>e.name.toLowerCase()===i))}},[m]),(0,s.jsxs)(s.Fragment,{children:[h&&(0,s.jsx)("div",{children:(0,s.jsx)(l,{...h})}),!h&&!r&&(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h1",{children:i}),(0,s.jsx)(d,{variants:n,componentName:x})]}),o]}),!h&&r&&(0,s.jsxs)("div",{className:"default-container",children:[(0,s.jsx)("h2",{children:i}),(0,s.jsx)(d,{variants:n,componentName:x})]})]})}},52150:function(e,i,n){n.r(i);var s=n(52322),c=n(2784),a=n(70741),t=n(57092),o=n(57884),l=n(57284),d=n(49953),r=n(10326);i.default=()=>{let[e,i]=(0,c.useState)();return(0,c.useEffect)(()=>{e&&setTimeout(()=>i(""),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-section>Functional</db-section>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-section>Functional</db-section>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<db-section>Functional</db-section>"),navigator.clipboard.writeText("<db-section>Functional</db-section>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Functional</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Functional</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Functional</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Functional</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>Functional</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>Functional</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>Functional</DBSection>"),navigator.clipboard.writeText("<DBSection>Functional</DBSection>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>Functional</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>Functional</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>Functional</DBSection>"),navigator.clipboard.writeText("<DBSection>Functional</DBSection>")},children:"Copy"})]})]})}),(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-section>(Default) Regular</db-section>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-section>(Default) Regular</db-section>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<db-section>(Default) Regular</db-section>"),navigator.clipboard.writeText("<db-section>(Default) Regular</db-section>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Regular</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Regular</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Regular</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Regular</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>(Default) Regular</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>(Default) Regular</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>(Default) Regular</DBSection>"),navigator.clipboard.writeText("<DBSection>(Default) Regular</DBSection>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>(Default) Regular</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>(Default) Regular</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>(Default) Regular</DBSection>"),navigator.clipboard.writeText("<DBSection>(Default) Regular</DBSection>")},children:"Copy"})]})]})}),(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-section>Expressive</db-section>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-section>Expressive</db-section>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<db-section>Expressive</db-section>"),navigator.clipboard.writeText("<db-section>Expressive</db-section>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Expressive</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Expressive</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Expressive</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>Expressive</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>Expressive</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>Expressive</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>Expressive</DBSection>"),navigator.clipboard.writeText("<DBSection>Expressive</DBSection>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>Expressive</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>Expressive</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>Expressive</DBSection>"),navigator.clipboard.writeText("<DBSection>Expressive</DBSection>")},children:"Copy"})]})]})})]})}},15132:function(e,i,n){n.r(i);var s=n(52322),c=n(2784),a=n(70741),t=n(57092),o=n(57884),l=n(57284),d=n(49953),r=n(10326);i.default=()=>{let[e,i]=(0,c.useState)();return(0,c.useEffect)(()=>{e&&setTimeout(()=>i(""),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-section>(Default) Medium</db-section>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-section>(Default) Medium</db-section>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<db-section>(Default) Medium</db-section>"),navigator.clipboard.writeText("<db-section>(Default) Medium</db-section>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Medium</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Medium</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Medium</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Medium</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>(Default) Medium</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>(Default) Medium</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>(Default) Medium</DBSection>"),navigator.clipboard.writeText("<DBSection>(Default) Medium</DBSection>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>(Default) Medium</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>(Default) Medium</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>(Default) Medium</DBSection>"),navigator.clipboard.writeText("<DBSection>(Default) Medium</DBSection>")},children:"Copy"})]})]})}),(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-section size="large">Large</db-section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-section size="large">Large</db-section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<db-section size="large">Large</db-section>'),navigator.clipboard.writeText('<db-section size="large">Large</db-section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="large" class="db-section">\n  <div>Large</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="large" class="db-section">\n  <div>Large</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="large" class="db-section">\n  <div>Large</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="large" class="db-section">\n  <div>Large</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection size="large">Large</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection size="large">Large</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection size="large">Large</DBSection>'),navigator.clipboard.writeText('<DBSection size="large">Large</DBSection>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection size="large">Large</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection size="large">Large</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection size="large">Large</DBSection>'),navigator.clipboard.writeText('<DBSection size="large">Large</DBSection>')},children:"Copy"})]})]})}),(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-section size="small">Small</db-section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-section size="small">Small</db-section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<db-section size="small">Small</db-section>'),navigator.clipboard.writeText('<db-section size="small">Small</db-section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="small" class="db-section">\n  <div>Small</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="small" class="db-section">\n  <div>Small</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="small" class="db-section">\n  <div>Small</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="small" class="db-section">\n  <div>Small</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection size="small">Small</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection size="small">Small</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection size="small">Small</DBSection>'),navigator.clipboard.writeText('<DBSection size="small">Small</DBSection>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection size="small">Small</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection size="small">Small</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection size="small">Small</DBSection>'),navigator.clipboard.writeText('<DBSection size="small">Small</DBSection>')},children:"Copy"})]})]})})]})}},48004:function(e,i,n){n.r(i);var s=n(52322),c=n(2784),a=n(70741),t=n(57092),o=n(57884),l=n(57284),d=n(49953),r=n(10326);i.default=()=>{let[e,i]=(0,c.useState)();return(0,c.useEffect)(()=>{e&&setTimeout(()=>i(""),1500)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:"<db-section>(Default) Full</db-section>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-section>(Default) Full</db-section>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<db-section>(Default) Full</db-section>"),navigator.clipboard.writeText("<db-section>(Default) Full</db-section>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Full</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Full</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Full</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div>(Default) Full</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>(Default) Full</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>(Default) Full</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>(Default) Full</DBSection>"),navigator.clipboard.writeText("<DBSection>(Default) Full</DBSection>")},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:"<DBSection>(Default) Full</DBSection>"})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSection>(Default) Full</DBSection>"===e?"done":"copy",variant:"ghost",onClick:()=>{i("<DBSection>(Default) Full</DBSection>"),navigator.clipboard.writeText("<DBSection>(Default) Full</DBSection>")},children:"Copy"})]})]})}),(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-section variant="medium">Medium</db-section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-section variant="medium">Medium</db-section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<db-section variant="medium">Medium</db-section>'),navigator.clipboard.writeText('<db-section variant="medium">Medium</db-section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="medium">Medium</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="medium">Medium</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="medium">Medium</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="medium">Medium</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection variant="medium">Medium</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection variant="medium">Medium</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection variant="medium">Medium</DBSection>'),navigator.clipboard.writeText('<DBSection variant="medium">Medium</DBSection>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection variant="medium">Medium</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection variant="medium">Medium</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection variant="medium">Medium</DBSection>'),navigator.clipboard.writeText('<DBSection variant="medium">Medium</DBSection>')},children:"Copy"})]})]})}),(0,s.jsx)(a.Z,{className:"tab-container",children:(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(l.Z,{children:"Angular"}),(0,s.jsx)(l.Z,{children:"HTML"}),(0,s.jsx)(l.Z,{children:"React"}),(0,s.jsx)(l.Z,{children:"Vue"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<db-section variant="large">Large</db-section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-section variant="large">Large</db-section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<db-section variant="large">Large</db-section>'),navigator.clipboard.writeText('<db-section variant="large">Large</db-section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-html",children:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="large">Large</div>\n</section>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="large">Large</div>\n</section>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="large">Large</div>\n</section>'),navigator.clipboard.writeText('<section id="OVERWRITE_DEFAULT_ID" data-size="medium" class="db-section">\n  <div data-variant="large">Large</div>\n</section>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection variant="large">Large</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection variant="large">Large</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection variant="large">Large</DBSection>'),navigator.clipboard.writeText('<DBSection variant="large">Large</DBSection>')},children:"Copy"})]}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{className:"hljs language-tsx",children:'<DBSection variant="large">Large</DBSection>'})}),(0,s.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSection variant="large">Large</DBSection>'===e?"done":"copy",variant:"ghost",onClick:()=>{i('<DBSection variant="large">Large</DBSection>'),navigator.clipboard.writeText('<DBSection variant="large">Large</DBSection>')},children:"Copy"})]})]})})]})}},32694:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"(Default) Full","style":{"width":"100%","display":"block"},"props":{}},{"name":"Medium","style":{"width":"100%","display":"block"},"props":{"variant":"medium"}},{"name":"Large","style":{"width":"100%","display":"block"},"props":{"variant":"large"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Large","props":{"size":"large"}},{"name":"Small","props":{"size":"small"}}]}]')}}]);