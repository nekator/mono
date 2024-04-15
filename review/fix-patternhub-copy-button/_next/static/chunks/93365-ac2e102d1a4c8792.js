"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93365],{45016:function(n,e,a){a.d(e,{P:function(){return c}});let c=(n,e,a)=>n.map((n,c)=>{var s;return{...n,slotCode:null!==(s=null==a?void 0:a.at(c))&&void 0!==s?s:"No code available",examples:n.examples.map(n=>{var a,c,s,o;return{...n,example:e({...n.props,id:null!==(s=null===(a=n.props)||void 0===a?void 0:a.id)&&void 0!==s?s:n.name,children:null!==(o=null===(c=n.props)||void 0===c?void 0:c.children)&&void 0!==o?o:n.name})}})}})},47439:function(n,e,a){var c=a(52322),s=a(5632),o=a(2784),i=a(55216),l=a(18297);let r=n=>{let{examples:e,slotCode:a}=n,[s,i]=(0,o.useState)();return(0,c.jsxs)(l.f,{className:"variants-card db-code-docs",children:[(0,c.jsx)("div",{className:"variants-list",children:e.map((n,e)=>(0,c.jsx)("div",{style:n.style,className:n.className,children:n.example},"".concat(n.name,"-").concat(e)))}),(0,c.jsxs)("details",{className:"code-details",onToggle:()=>{i(!s)},children:[(0,c.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:s?"Hide code":"Show code"}),(0,c.jsxs)("div",{className:"db-density-functional",children:[(0,c.jsx)("div",{className:"backdrop"}),(0,c.jsx)(l.f,{className:"code",spacing:"small",children:a})]})]})]})},t=n=>{let{variants:e,componentName:a}=n,s=(n,e)=>{if(!window.location.origin||!window.location.href)return"";let a=window.location.href.split("?")[0],c="?page=".concat(n.name.toLowerCase());return e?"".concat(a.split("components")[0],"/components/").concat(e).concat(c):"".concat(a).concat(c)};return(0,c.jsx)(c.Fragment,{children:null==e?void 0:e.map((n,e)=>(0,c.jsxs)("div",{children:[(0,c.jsx)(l.oH,{}),(0,c.jsx)("h2",{children:(0,c.jsx)(l.vB,{content:"external",target:"_blank",href:s(n,a),children:n.name})}),(0,c.jsx)(r,{...n})]},"".concat(n.name,"-").concat(e)))})};e.Z=n=>{let{title:e,variants:a,subComponent:l,isSubComponent:d,componentName:x}=n,[h,p]=(0,o.useState)(),u=(0,s.useRouter)();return(0,o.useEffect)(()=>{if(u.query){var n;let e=null===(n=u.query.page)||void 0===n?void 0:n.toString();e&&p(a.find(n=>n.name.toLowerCase()===e))}},[u]),(0,c.jsxs)(c.Fragment,{children:[h&&(0,c.jsx)("div",{children:(0,c.jsx)(r,{...h})}),!h&&!d&&(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h1",{children:e}),(0,c.jsx)(t,{variants:a,componentName:x})]}),l]}),!h&&d&&(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h2",{children:e}),(0,c.jsx)(t,{variants:a,componentName:x})]})]})}},25241:function(n,e,a){a.r(e);var c=a(52322),s=a(2784),o=a(70741),i=a(57092),l=a(57884),r=a(57284),t=a(49953),d=a(10326);e.default=()=>{let[n,e]=(0,s.useState)();return(0,s.useEffect)(()=>{n&&setTimeout(()=>e(""),1500)},[n]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(r.Z,{children:"Angular"}),(0,c.jsx)(r.Z,{children:"HTML"}),(0,c.jsx)(r.Z,{children:"React"}),(0,c.jsx)(r.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-icon>Functional</db-icon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-icon>Functional</db-icon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<db-icon>Functional</db-icon>"),navigator.clipboard.writeText("<db-icon>Functional</db-icon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<span aria-hidden="true" class="db-icon">\n  Functional\n</span>'})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<span aria-hidden="true" class="db-icon">\n  Functional\n</span>'===n?"done":"copy",variant:"ghost",onClick:()=>{e('<span aria-hidden="true" class="db-icon">\n  Functional\n</span>'),navigator.clipboard.writeText('<span aria-hidden="true" class="db-icon">\n  Functional\n</span>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>Functional</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBIcon>Functional</DBIcon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<DBIcon>Functional</DBIcon>"),navigator.clipboard.writeText("<DBIcon>Functional</DBIcon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>Functional</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBIcon>Functional</DBIcon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<DBIcon>Functional</DBIcon>"),navigator.clipboard.writeText("<DBIcon>Functional</DBIcon>")},children:"Copy"})]})]})}),(0,c.jsx)(o.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(r.Z,{children:"Angular"}),(0,c.jsx)(r.Z,{children:"HTML"}),(0,c.jsx)(r.Z,{children:"React"}),(0,c.jsx)(r.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-icon>(Default) Regular</db-icon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-icon>(Default) Regular</db-icon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<db-icon>(Default) Regular</db-icon>"),navigator.clipboard.writeText("<db-icon>(Default) Regular</db-icon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<span aria-hidden="true" class="db-icon">\n  (Default) Regular\n</span>'})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<span aria-hidden="true" class="db-icon">\n  (Default) Regular\n</span>'===n?"done":"copy",variant:"ghost",onClick:()=>{e('<span aria-hidden="true" class="db-icon">\n  (Default) Regular\n</span>'),navigator.clipboard.writeText('<span aria-hidden="true" class="db-icon">\n  (Default) Regular\n</span>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>(Default) Regular</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBIcon>(Default) Regular</DBIcon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<DBIcon>(Default) Regular</DBIcon>"),navigator.clipboard.writeText("<DBIcon>(Default) Regular</DBIcon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>(Default) Regular</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBIcon>(Default) Regular</DBIcon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<DBIcon>(Default) Regular</DBIcon>"),navigator.clipboard.writeText("<DBIcon>(Default) Regular</DBIcon>")},children:"Copy"})]})]})}),(0,c.jsx)(o.Z,{className:"tab-container",children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(l.Z,{children:[(0,c.jsx)(r.Z,{children:"Angular"}),(0,c.jsx)(r.Z,{children:"HTML"}),(0,c.jsx)(r.Z,{children:"React"}),(0,c.jsx)(r.Z,{children:"Vue"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"<db-icon>Expressive</db-icon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-icon>Expressive</db-icon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<db-icon>Expressive</db-icon>"),navigator.clipboard.writeText("<db-icon>Expressive</db-icon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<span aria-hidden="true" class="db-icon">\n  Expressive\n</span>'})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<span aria-hidden="true" class="db-icon">\n  Expressive\n</span>'===n?"done":"copy",variant:"ghost",onClick:()=>{e('<span aria-hidden="true" class="db-icon">\n  Expressive\n</span>'),navigator.clipboard.writeText('<span aria-hidden="true" class="db-icon">\n  Expressive\n</span>')},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>Expressive</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBIcon>Expressive</DBIcon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<DBIcon>Expressive</DBIcon>"),navigator.clipboard.writeText("<DBIcon>Expressive</DBIcon>")},children:"Copy"})]}),(0,c.jsxs)(t.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:"<DBIcon>Expressive</DBIcon>"})}),(0,c.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBIcon>Expressive</DBIcon>"===n?"done":"copy",variant:"ghost",onClick:()=>{e("<DBIcon>Expressive</DBIcon>"),navigator.clipboard.writeText("<DBIcon>Expressive</DBIcon>")},children:"Copy"})]})]})})]})}},42302:function(n){n.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]}]')}}]);