"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26347],{45016:function(a,e,i){i.d(e,{P:function(){return n}});let n=(a,e,i)=>a.map((a,n)=>{var t;return{...a,slotCode:null!==(t=null==i?void 0:i.at(n))&&void 0!==t?t:"No code available",examples:a.examples.map(a=>{var i,n,t,s;return{...a,example:e({...a.props,id:null!==(t=null===(i=a.props)||void 0===i?void 0:i.id)&&void 0!==t?t:a.name,children:null!==(s=null===(n=a.props)||void 0===n?void 0:n.children)&&void 0!==s?s:a.name})}})}})},47439:function(a,e,i){var n=i(52322),t=i(5632),s=i(2784),l=i(55216),o=i(3673);let c=a=>{let{examples:e,slotCode:i}=a,[t,l]=(0,s.useState)();return(0,n.jsxs)(o.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:e.map((a,e)=>(0,n.jsx)("div",{style:a.style,className:a.className,children:a.example},"".concat(a.name,"-").concat(e)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{l(!t)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:t?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(o.f,{className:"code",spacing:"small",children:i})]})]})]})},d=a=>{let{variants:e,componentName:i}=a,t=(a,e)=>{if(!window.location.origin||!window.location.href)return"";let i=window.location.href.split("?")[0],n="?page=".concat(a.name.toLowerCase());return e?"".concat(i.split("components")[0],"/components/").concat(e).concat(n):"".concat(i).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==e?void 0:e.map((a,e)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(o.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(o.vB,{content:"external",target:"_blank",href:t(a,i),children:a.name})}),(0,n.jsx)(c,{...a})]},"".concat(a.name,"-").concat(e)))})};e.Z=a=>{let{title:e,variants:i,subComponent:o,isSubComponent:r,componentName:u}=a,[m,v]=(0,s.useState)(),g=(0,t.useRouter)();return(0,s.useEffect)(()=>{if(g.query){var a;let e=null===(a=g.query.page)||void 0===a?void 0:a.toString();e&&v(i.find(a=>a.name.toLowerCase()===e))}},[g]),(0,n.jsxs)(n.Fragment,{children:[m&&(0,n.jsx)("div",{children:(0,n.jsx)(c,{...m})}),!m&&!r&&(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)(d,{variants:i,componentName:u})]}),o]}),!m&&r&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:e}),(0,n.jsx)(d,{variants:i,componentName:u})]})]})}},66248:function(a,e,i){i.r(e);var n=i(52322),t=i(2784),s=i(70741),l=i(57092),o=i(57884),c=i(57284),d=i(49953),r=i(10326);e.default=()=>{let[a,e]=(0,t.useState)();return(0,t.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>"),navigator.clipboard.writeText("<db-navigation-item>Enabled (Default)/Hover/Pressed</db-navigation-item>")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===a?"check":"copy",variant:"ghost",onClick:()=>{e("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>Enabled (Default)/Hover/Pressed</DBNavigationItem>")},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [active]="true">Active</db-navigation-item>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item [active]="true">Active</db-navigation-item>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<db-navigation-item [active]="true">Active</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item [active]="true">Active</db-navigation-item>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===a?"check":"copy",variant:"ghost",onClick:()=>{e("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem active>Active</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem active>Active</DBNavigationItem>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem active>Active</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem active>Active</DBNavigationItem>")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :active="true">Active</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem :active="true">Active</DBNavigationItem>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem :active="true">Active</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem :active="true">Active</DBNavigationItem>')},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [disabled]="true">Disabled</db-navigation-item>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item [disabled]="true">Disabled</db-navigation-item>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<db-navigation-item [disabled]="true">Disabled</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item [disabled]="true">Disabled</db-navigation-item>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===a?"check":"copy",variant:"ghost",onClick:()=>{e("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem disabled>Disabled</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem disabled>Disabled</DBNavigationItem>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem disabled>Disabled</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem disabled>Disabled</DBNavigationItem>")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem :disabled="true">Disabled</DBNavigationItem>')},children:"Copy"})]})]})})]})}},43570:function(a,e,i){i.r(e);var n=i(52322),t=i(2784),s=i(70741),l=i(57092),o=i(57884),c=i(57284),d=i(49953),r=i(10326);e.default=()=>{let[a,e]=(0,t.useState)();return(0,t.useEffect)(()=>{a&&setTimeout(()=>e(""),1500)},[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-navigation-item>(Default) Auto</db-navigation-item>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-navigation-item>(Default) Auto</db-navigation-item>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<db-navigation-item>(Default) Auto</db-navigation-item>"),navigator.clipboard.writeText("<db-navigation-item>(Default) Auto</db-navigation-item>")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-15506118743451935"></menu>\n</li>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-15506118743451935"></menu>\n</li>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-15506118743451935"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-15506118743451935"></menu>\n</li>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===a?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item width="full">Full</db-navigation-item>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item width="full">Full</db-navigation-item>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<db-navigation-item width="full">Full</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item width="full">Full</db-navigation-item>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-3919450405676559"></menu>\n</li>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-3919450405676559"></menu>\n</li>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-3919450405676559"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-3919450405676559"></menu>\n</li>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===a?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy"})]})]})})]})}},89267:function(a){a.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}}]},{"name":"Interaction-States","examples":[{"name":"Enabled (Default)/Hover/Pressed","props":{}},{"name":"Active","props":{"active":true}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"areaPopup":false}},{"name":"Text - Icon (Leading)","props":{"icon":"user"}},{"name":"Text - Icons (Leading, Chevron)","props":{"icon":"user","areaPopup":true}},{"name":"Text - Icon (Chevron)","props":{"areaPopup":true}}]},{"name":"Width","examples":[{"name":"(Default) Auto","style":{"width":"400px"},"props":{}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full"}}]}]')}}]);