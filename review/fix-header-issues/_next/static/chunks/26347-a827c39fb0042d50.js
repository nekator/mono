"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26347],{45016:function(e,a,i){i.d(a,{P:function(){return n}});let n=(e,a,i)=>e.map((e,n)=>{var t;return{...e,slotCode:null!==(t=null==i?void 0:i.at(n))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var i,n,t,s;return{...e,example:a({...e.props,id:null!==(t=null===(i=e.props)||void 0===i?void 0:i.id)&&void 0!==t?t:e.name,children:null!==(s=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==s?s:e.name})}})}})},47439:function(e,a,i){var n=i(52322),t=i(5632),s=i(2784),o=i(55216),l=i(12480);let c=e=>{let{examples:a,slotCode:i}=e,[t,o]=(0,s.useState)();return(0,n.jsxs)(l.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{o(!t)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:t?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(l.f,{className:"code",spacing:"small",children:i})]})]})]})},d=e=>{let{variants:a,componentName:i}=e,t=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let i=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return a?"".concat(i.split("components")[0],"/components/").concat(a).concat(n):"".concat(i).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(l.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(l.vB,{content:"external",target:"_blank",href:t(e,i),children:e.name})}),(0,n.jsx)(c,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:i,subComponent:l,isSubComponent:r,componentName:u}=e,[m,v]=(0,s.useState)(),g=(0,t.useRouter)();return(0,s.useEffect)(()=>{if(g.query){var e;let a=null===(e=g.query.page)||void 0===e?void 0:e.toString();a&&v(i.find(e=>e.name.toLowerCase()===a))}},[g]),(0,n.jsxs)(n.Fragment,{children:[m&&(0,n.jsx)("div",{children:(0,n.jsx)(c,{...m})}),!m&&!r&&(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:a}),(0,n.jsx)(d,{variants:i,componentName:u})]}),l]}),!m&&r&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:a}),(0,n.jsx)(d,{variants:i,componentName:u})]})]})}},66248:function(e,a,i){i.r(a);var n=i(52322),t=i(2784),s=i(70741),o=i(57092),l=i(57884),c=i(57284),d=i(49953),r=i(10326);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>"),navigator.clipboard.writeText("<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>")},children:"Copy code"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [active]="true">Active</db-navigation-item>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item [active]="true">Active</db-navigation-item>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-navigation-item [active]="true">Active</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item [active]="true">Active</db-navigation-item>')},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem active>Active</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem active>Active</DBNavigationItem>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBNavigationItem active>Active</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem active>Active</DBNavigationItem>")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :active="true">Active</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem :active="true">Active</DBNavigationItem>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBNavigationItem :active="true">Active</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem :active="true">Active</DBNavigationItem>')},children:"Copy code"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [disabled]="true">Disabled</db-navigation-item>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item [disabled]="true">Disabled</db-navigation-item>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-navigation-item [disabled]="true">Disabled</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item [disabled]="true">Disabled</db-navigation-item>')},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem disabled>Disabled</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem disabled>Disabled</DBNavigationItem>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBNavigationItem disabled>Disabled</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem disabled>Disabled</DBNavigationItem>")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>')},children:"Copy code"})]})]})})]})}},43570:function(e,a,i){i.r(a);var n=i(52322),t=i(2784),s=i(70741),o=i(57092),l=i(57884),c=i(57284),d=i(49953),r=i(10326);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-navigation-item>(Default) Auto</db-navigation-item>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-navigation-item>(Default) Auto</db-navigation-item>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<db-navigation-item>(Default) Auto</db-navigation-item>"),navigator.clipboard.writeText("<db-navigation-item>(Default) Auto</db-navigation-item>")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-6134297502825619"></menu>\n</li>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-6134297502825619"></menu>\n</li>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-6134297502825619"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-6134297502825619"></menu>\n</li>')},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy code"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item width="full">Full</db-navigation-item>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item width="full">Full</db-navigation-item>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-navigation-item width="full">Full</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item width="full">Full</db-navigation-item>')},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-2500820463114388"></menu>\n</li>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-2500820463114388"></menu>\n</li>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-2500820463114388"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-2500820463114388"></menu>\n</li>')},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy code"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy code"})]})]})})]})}},89267:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Interaction-States","examples":[{"name":"Enabled (Default)/Hover/Pressed","props":{}},{"name":"Active","props":{"active":true}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"areaPopup":false}},{"name":"Text - Icon (Leading)","props":{"icon":"user"}},{"name":"Text - Icons (Leading, Chevron)","props":{"icon":"user","areaPopup":true}},{"name":"Text - Icon (Chevron)","props":{"areaPopup":true}}]},{"name":"Width","examples":[{"name":"(Default) Auto","style":{"width":"400px"},"props":{}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full"}}]}]')}}]);