"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92101],{45016:function(n,e,t){t.d(e,{P:function(){return a}});let a=(n,e,t)=>n.map((n,a)=>{var i;return{...n,slotCode:null!==(i=null==t?void 0:t.at(a))&&void 0!==i?i:"No code available",examples:n.examples.map(n=>{var t,a,i,l;return{...n,example:e({...n.props,id:null!==(i=null===(t=n.props)||void 0===t?void 0:t.id)&&void 0!==i?i:n.name,children:null!==(l=null===(a=n.props)||void 0===a?void 0:a.children)&&void 0!==l?l:n.name})}})}})},47439:function(n,e,t){var a=t(52322),i=t(5632),l=t(2784),r=t(55216),s=t(12480);let c=n=>{let{examples:e,slotCode:t}=n,[i,r]=(0,l.useState)();return(0,a.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,a.jsx)("div",{className:"variants-list",children:e.map((n,e)=>(0,a.jsx)("div",{style:n.style,className:n.className,children:n.example},"".concat(n.name,"-").concat(e)))}),(0,a.jsxs)("details",{className:"code-details",onToggle:()=>{r(!i)},children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:i?"Hide code":"Show code"}),(0,a.jsxs)("div",{className:"db-density-functional",children:[(0,a.jsx)("div",{className:"backdrop"}),(0,a.jsx)(s.f,{className:"code",spacing:"small",children:t})]})]})]})},o=n=>{let{variants:e,componentName:t}=n,i=(n,e)=>{if(!window.location.origin||!window.location.href)return"";let t=window.location.href.split("?")[0],a="?page=".concat(n.name.toLowerCase());return e?"".concat(t.split("components")[0],"/components/").concat(e).concat(a):"".concat(t).concat(a)};return(0,a.jsx)(a.Fragment,{children:null==e?void 0:e.map((n,e)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:i(n,t),children:n.name})}),(0,a.jsx)(c,{...n})]},"".concat(n.name,"-").concat(e)))})};e.Z=n=>{let{title:e,variants:t,subComponent:s,isSubComponent:d,componentName:h}=n,[u,x]=(0,l.useState)(),k=(0,i.useRouter)();return(0,l.useEffect)(()=>{if(k.query){var n;let e=null===(n=k.query.page)||void 0===n?void 0:n.toString();e&&x(t.find(n=>n.name.toLowerCase()===e))}},[k]),(0,a.jsxs)(a.Fragment,{children:[u&&(0,a.jsx)("div",{children:(0,a.jsx)(c,{...u})}),!u&&!d&&(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:e}),(0,a.jsx)(o,{variants:t,componentName:h})]}),s]}),!u&&d&&(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h2",{children:e}),(0,a.jsx)(o,{variants:t,componentName:h})]})]})}},8538:function(n,e,t){t.r(e);var a=t(52322),i=t(2784),l=t(70741),r=t(57092),s=t(57884),c=t(57284),o=t(49953),d=t(50350),h=t(10326);e.default=()=>{let[n,e]=(0,i.useState)();return(0,i.useEffect)(()=>{n&&setTimeout(()=>e(""),1500)},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#">(Default) Internal</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#">(Default) Internal</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#">(Default) Internal</db-link>'),navigator.clipboard.writeText('<db-link href="#">(Default) Internal</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Internal\n</a>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Internal\n</a>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Internal\n</a>'),navigator.clipboard.writeText('<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Internal\n</a>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">(Default) Internal</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">(Default) Internal</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">(Default) Internal</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">(Default) Internal</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">(Default) Internal</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">(Default) Internal</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">(Default) Internal</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">(Default) Internal</DBLink>')},children:"Copy code"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#" content="external">\n  External\n</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#" content="external">\n  External\n</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#" content="external">\n  External\n</db-link>'),navigator.clipboard.writeText('<db-link href="#" content="external">\n  External\n</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<a\n  content="external"\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-content="external"\n>\n  External\n</a>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<a\n  content="external"\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-content="external"\n>\n  External\n</a>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<a\n  content="external"\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-content="external"\n>\n  External\n</a>'),navigator.clipboard.writeText('<a\n  content="external"\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-content="external"\n>\n  External\n</a>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" content="external">\n  External\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" content="external">\n  External\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" content="external">\n  External\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" content="external">\n  External\n</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" content="external">\n  External\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" content="external">\n  External\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" content="external">\n  External\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" content="external">\n  External\n</DBLink>')},children:"Copy code"})]})]})})]})}},40947:function(n,e,t){t.r(e);var a=t(52322),i=t(2784),l=t(70741),r=t(57092),s=t(57884),c=t(57284),o=t(49953),d=t(50350),h=t(10326);e.default=()=>{let[n,e]=(0,i.useState)();return(0,i.useEffect)(()=>{n&&setTimeout(()=>e(""),1500)},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#">Enabled (Default)/Hover/Pressed</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#">Enabled (Default)/Hover/Pressed</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#">Enabled (Default)/Hover/Pressed</db-link>'),navigator.clipboard.writeText('<db-link href="#">Enabled (Default)/Hover/Pressed</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:"undefined"===n?"check":"copy",variant:"ghost",onClick:()=>{e("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">Enabled (Default)/Hover/Pressed</DBLink>')},children:"Copy code"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#" [disabled]="true">Disabled</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#" [disabled]="true">Disabled</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#" [disabled]="true">Disabled</db-link>'),navigator.clipboard.writeText('<db-link href="#" [disabled]="true">Disabled</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:"undefined"===n?"check":"copy",variant:"ghost",onClick:()=>{e("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" disabled>\n  Disabled\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" disabled>\n  Disabled\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" disabled>\n  Disabled\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" disabled>\n  Disabled\n</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" :disabled="true">Disabled</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" :disabled="true">Disabled</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" :disabled="true">Disabled</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" :disabled="true">Disabled</DBLink>')},children:"Copy code"})]})]})})]})}},76781:function(n,e,t){t.r(e);var a=t(52322),i=t(2784),l=t(70741),r=t(57092),s=t(57884),c=t(57284),o=t(49953),d=t(50350),h=t(10326);e.default=()=>{let[n,e]=(0,i.useState)();return(0,i.useEffect)(()=>{n&&setTimeout(()=>e(""),1500)},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#">(Default) Adaptive</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#">(Default) Adaptive</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#">(Default) Adaptive</db-link>'),navigator.clipboard.writeText('<db-link href="#">(Default) Adaptive</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Adaptive\n</a>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Adaptive\n</a>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Adaptive\n</a>'),navigator.clipboard.writeText('<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Adaptive\n</a>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">(Default) Adaptive</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">(Default) Adaptive</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">(Default) Adaptive</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">(Default) Adaptive</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">(Default) Adaptive</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">(Default) Adaptive</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">(Default) Adaptive</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">(Default) Adaptive</DBLink>')},children:"Copy code"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#" variant="brand">\n  Brand\n</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#" variant="brand">\n  Brand\n</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#" variant="brand">\n  Brand\n</db-link>'),navigator.clipboard.writeText('<db-link href="#" variant="brand">\n  Brand\n</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-variant="brand"\n  data-content="internal"\n>\n  Brand\n</a>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-variant="brand"\n  data-content="internal"\n>\n  Brand\n</a>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-variant="brand"\n  data-content="internal"\n>\n  Brand\n</a>'),navigator.clipboard.writeText('<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-variant="brand"\n  data-content="internal"\n>\n  Brand\n</a>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" variant="brand">\n  Brand\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" variant="brand">\n  Brand\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" variant="brand">\n  Brand\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" variant="brand">\n  Brand\n</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" variant="brand">\n  Brand\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" variant="brand">\n  Brand\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" variant="brand">\n  Brand\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" variant="brand">\n  Brand\n</DBLink>')},children:"Copy code"})]})]})})]})}},20541:function(n,e,t){t.r(e);var a=t(52322),i=t(2784),l=t(70741),r=t(57092),s=t(57884),c=t(57284),o=t(49953),d=t(50350),h=t(10326);e.default=()=>{let[n,e]=(0,i.useState)();return(0,i.useEffect)(()=>{n&&setTimeout(()=>e(""),1500)},[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#">(Default) Medium</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#">(Default) Medium</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#">(Default) Medium</db-link>'),navigator.clipboard.writeText('<db-link href="#">(Default) Medium</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Medium\n</a>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Medium\n</a>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Medium\n</a>'),navigator.clipboard.writeText('<a class="db-link" href="#" tabindex="0" data-content="internal">\n  (Default) Medium\n</a>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">(Default) Medium</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">(Default) Medium</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">(Default) Medium</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">(Default) Medium</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#">(Default) Medium</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#">(Default) Medium</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#">(Default) Medium</DBLink>'),navigator.clipboard.writeText('<DBLink href="#">(Default) Medium</DBLink>')},children:"Copy code"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-link href="#" size="small">\n  Small\n</db-link>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-link href="#" size="small">\n  Small\n</db-link>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<db-link href="#" size="small">\n  Small\n</db-link>'),navigator.clipboard.writeText('<db-link href="#" size="small">\n  Small\n</db-link>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-size="small"\n  data-content="internal"\n>\n  Small\n</a>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-size="small"\n  data-content="internal"\n>\n  Small\n</a>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-size="small"\n  data-content="internal"\n>\n  Small\n</a>'),navigator.clipboard.writeText('<a\n  class="db-link"\n  href="#"\n  tabindex="0"\n  data-size="small"\n  data-content="internal"\n>\n  Small\n</a>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" size="small">\n  Small\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" size="small">\n  Small\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" size="small">\n  Small\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" size="small">\n  Small\n</DBLink>')},children:"Copy code"})]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/link/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBLink href="#" size="small">\n  Small\n</DBLink>'})}),(0,a.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBLink href="#" size="small">\n  Small\n</DBLink>'===n?"check":"copy",variant:"ghost",onClick:()=>{e('<DBLink href="#" size="small">\n  Small\n</DBLink>'),navigator.clipboard.writeText('<DBLink href="#" size="small">\n  Small\n</DBLink>')},children:"Copy code"})]})]})})]})}},18965:function(n){n.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{"href":"#"}},{"name":"(Default) Regular","className":"db-density-regular","props":{"href":"#"}},{"name":"Expressive","className":"db-density-expressive","props":{"href":"#"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","props":{"href":"#"}},{"name":"Brand","props":{"href":"#","variant":"brand"}}]},{"name":"Interaction-States","examples":[{"name":"Enabled (Default)/Hover/Pressed","props":{"href":"#"}},{"name":"Disabled","props":{"href":"#","disabled":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"href":"#"}},{"name":"Small","props":{"href":"#","size":"small"}}]},{"name":"Content","examples":[{"name":"(Default) Internal","props":{"href":"#"}},{"name":"External","props":{"href":"#","content":"external"}}]}]')}}]);