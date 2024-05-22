"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27029],{45016:function(e,a,t){t.d(a,{P:function(){return n}});let n=(e,a,t)=>e.map((e,n)=>{var i;return{...e,slotCode:null!==(i=null==t?void 0:t.at(n))&&void 0!==i?i:"No code available",examples:e.examples.map(e=>{var t,n,i,r;return{...e,example:a({...e.props,id:null!==(i=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==i?i:e.name,children:null!==(r=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==r?r:e.name})}})}})},47439:function(e,a,t){var n=t(52322),i=t(5632),r=t(2784),c=t(55216),o=t(12480);let s=e=>{let{examples:a,slotCode:t}=e,[i,c]=(0,r.useState)();return(0,n.jsxs)(o.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{c(!i)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:i?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(o.f,{className:"code",spacing:"small",children:t})]})]})]})},l=e=>{let{variants:a,componentName:t}=e,i=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let t=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return a?"".concat(t.split("components")[0],"/components/").concat(a).concat(n):"".concat(t).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(o.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(o.vB,{content:"external",target:"_blank",href:i(e,t),children:e.name})}),(0,n.jsx)(s,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:t,subComponent:o,isSubComponent:d,componentName:h}=e,[v,u]=(0,r.useState)(),p=(0,i.useRouter)();return(0,r.useEffect)(()=>{if(p.query){var e;let a=null===(e=p.query.page)||void 0===e?void 0:e.toString();a&&u(t.find(e=>e.name.toLowerCase()===a))}},[p]),(0,n.jsxs)(n.Fragment,{children:[v&&(0,n.jsx)("div",{children:(0,n.jsx)(s,{...v})}),!v&&!d&&(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:a}),(0,n.jsx)(l,{variants:t,componentName:h})]}),o]}),!v&&d&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:a}),(0,n.jsx)(l,{variants:t,componentName:h})]})]})}},72968:function(e,a,t){t.r(a);var n=t(52322),i=t(2784),r=t(70741),c=t(57092),o=t(57884),s=t(57284),l=t(49953),d=t(50350),h=t(10326);a.default=()=>{let[e,a]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(s.Z,{children:"Angular"}),(0,n.jsx)(s.Z,{children:"HTML"}),(0,n.jsx)(s.Z,{children:"React"}),(0,n.jsx)(s.Z,{children:"Vue"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=angular",children:"How to use this in angular"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-card>(Default) Non interactive</db-card>"})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:"<db-card>(Default) Non interactive</db-card>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<db-card>(Default) Non interactive</db-card>"),navigator.clipboard.writeText("<db-card>(Default) Non interactive</db-card>")},children:"Copy code"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=html",children:"How to use this in html"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-card">(Default) Non interactive</div>'})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<div class="db-card">(Default) Non interactive</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<div class="db-card">(Default) Non interactive</div>'),navigator.clipboard.writeText('<div class="db-card">(Default) Non interactive</div>')},children:"Copy code"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=react",children:"How to use this in react"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBCard>(Default) Non interactive</DBCard>"})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:"<DBCard>(Default) Non interactive</DBCard>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBCard>(Default) Non interactive</DBCard>"),navigator.clipboard.writeText("<DBCard>(Default) Non interactive</DBCard>")},children:"Copy code"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=vue",children:"How to use this in vue"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBCard>(Default) Non interactive</DBCard>"})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:"<DBCard>(Default) Non interactive</DBCard>"===e?"check":"copy",variant:"ghost",onClick:()=>{a("<DBCard>(Default) Non interactive</DBCard>"),navigator.clipboard.writeText("<DBCard>(Default) Non interactive</DBCard>")},children:"Copy code"})]})]})}),(0,n.jsx)(r.Z,{className:"tab-container",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(s.Z,{children:"Angular"}),(0,n.jsx)(s.Z,{children:"HTML"}),(0,n.jsx)(s.Z,{children:"React"}),(0,n.jsx)(s.Z,{children:"Vue"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=angular",children:"How to use this in angular"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-card behaviour="interactive">Interactive</db-card>'})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<db-card behaviour="interactive">Interactive</db-card>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-card behaviour="interactive">Interactive</db-card>'),navigator.clipboard.writeText('<db-card behaviour="interactive">Interactive</db-card>')},children:"Copy code"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=html",children:"How to use this in html"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div data-behaviour="interactive" role="button" tabindex="0" class="db-card">\n  Interactive\n</div>'})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<div data-behaviour="interactive" role="button" tabindex="0" class="db-card">\n  Interactive\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<div data-behaviour="interactive" role="button" tabindex="0" class="db-card">\n  Interactive\n</div>'),navigator.clipboard.writeText('<div data-behaviour="interactive" role="button" tabindex="0" class="db-card">\n  Interactive\n</div>')},children:"Copy code"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=react",children:"How to use this in react"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBCard behaviour="interactive">Interactive</DBCard>'})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBCard behaviour="interactive">Interactive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCard behaviour="interactive">Interactive</DBCard>'),navigator.clipboard.writeText('<DBCard behaviour="interactive">Interactive</DBCard>')},children:"Copy code"})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/card/how-to-use?current=vue",children:"How to use this in vue"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBCard behaviour="interactive">Interactive</DBCard>'})}),(0,n.jsx)(h.Z,{className:"copy-button",noText:!0,icon:'<DBCard behaviour="interactive">Interactive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCard behaviour="interactive">Interactive</DBCard>'),navigator.clipboard.writeText('<DBCard behaviour="interactive">Interactive</DBCard>')},children:"Copy code"})]})]})})]})}},1304:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{}},{"name":"(Default) Regular","className":"db-density-regular","props":{}},{"name":"Expressive","className":"db-density-expressive","props":{}},{"name":"functional","className":"db-density-functional","props":{}}]},{"name":"Elevation Level","examples":[{"name":"(Default) Level 1 - Adaptive","props":{"elevationLevel":"1"}},{"name":"Level 2 - Adaptive","props":{"elevationLevel":"2"}},{"name":"Level 3 - Adaptive","props":{"elevationLevel":"3"}}]},{"name":"Spacing","examples":[{"name":"(Default) Small","props":{"spacing":"small"}},{"name":"No Spacing","props":{"spacing":"none"}},{"name":"Medium","props":{"spacing":"medium"}}]},{"name":"Behaviour","examples":[{"name":"(Default) Non interactive","props":{}},{"name":"Interactive","props":{"behaviour":"interactive"}}]},{"name":"Example","examples":[{"name":"Level 1 - Interactive","props":{"elevationLevel":"1","behaviour":"interactive"}},{"name":"Level 2 - Interactive","props":{"elevationLevel":"2","behaviour":"interactive"}},{"name":"Level 3 - Interactive","props":{"elevationLevel":"3","behaviour":"interactive"}}]}]')}}]);