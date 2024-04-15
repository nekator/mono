"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81109],{45016:function(e,a,n){n.d(a,{P:function(){return i}});let i=(e,a,n)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==n?void 0:n.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var n,i,t,o;return{...e,example:a({...e.props,id:null!==(t=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==t?t:e.name,children:null!==(o=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==o?o:e.name})}})}})},47439:function(e,a,n){var i=n(52322),t=n(5632),o=n(2784),l=n(55216),s=n(18297);let r=e=>{let{examples:a,slotCode:n}=e,[t,l]=(0,o.useState)();return(0,i.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,i.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,i.jsxs)("details",{className:"code-details",onToggle:()=>{l(!t)},children:[(0,i.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:t?"Hide code":"Show code"}),(0,i.jsxs)("div",{className:"db-density-functional",children:[(0,i.jsx)("div",{className:"backdrop"}),(0,i.jsx)(s.f,{className:"code",spacing:"small",children:n})]})]})]})},c=e=>{let{variants:a,componentName:n}=e,t=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],i="?page=".concat(e.name.toLowerCase());return a?"".concat(n.split("components")[0],"/components/").concat(a).concat(i):"".concat(n).concat(i)};return(0,i.jsx)(i.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(s.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(s.vB,{content:"external",target:"_blank",href:t(e,n),children:e.name})}),(0,i.jsx)(r,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:n,subComponent:s,isSubComponent:d,componentName:p}=e,[h,m]=(0,o.useState)(),u=(0,t.useRouter)();return(0,o.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&m(n.find(e=>e.name.toLowerCase()===a))}},[u]),(0,i.jsxs)(i.Fragment,{children:[h&&(0,i.jsx)("div",{children:(0,i.jsx)(r,{...h})}),!h&&!d&&(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:a}),(0,i.jsx)(c,{variants:n,componentName:p})]}),s]}),!h&&d&&(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)(c,{variants:n,componentName:p})]})]})}},75812:function(e,a,n){n.r(a);var i=n(52322),t=n(2784),o=n(70741),l=n(57092),s=n(57884),r=n(57284),c=n(49953),d=n(10326);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-notification behaviour="permanent">(Default) Permanent</db-notification>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-notification behaviour="permanent">(Default) Permanent</db-notification>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-notification behaviour="permanent">(Default) Permanent</db-notification>'),navigator.clipboard.writeText('<db-notification behaviour="permanent">(Default) Permanent</db-notification>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<div class="db-notification">\n  <p>(Default) Permanent</p>\n</div>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-notification">\n  <p>(Default) Permanent</p>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-notification">\n  <p>(Default) Permanent</p>\n</div>'),navigator.clipboard.writeText('<div class="db-notification">\n  <p>(Default) Permanent</p>\n</div>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>'),navigator.clipboard.writeText('<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>'),navigator.clipboard.writeText('<DBNotification behaviour="permanent">(Default) Permanent</DBNotification>')},children:"Copy"})]})]})}),(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-notification behaviour="closable">Closeable</db-notification>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-notification behaviour="closable">Closeable</db-notification>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-notification behaviour="closable">Closeable</db-notification>'),navigator.clipboard.writeText('<db-notification behaviour="closable">Closeable</db-notification>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<div class="db-notification">\n  <p>Closeable</p>\n  <button\n    class="db-button"\n    data-icon="close"\n    data-size="small"\n    data-variant="ghost"\n    data-no-text="true"\n  >\n    Close Button\n  </button>\n</div>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div class="db-notification">\n  <p>Closeable</p>\n  <button\n    class="db-button"\n    data-icon="close"\n    data-size="small"\n    data-variant="ghost"\n    data-no-text="true"\n  >\n    Close Button\n  </button>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-notification">\n  <p>Closeable</p>\n  <button\n    class="db-button"\n    data-icon="close"\n    data-size="small"\n    data-variant="ghost"\n    data-no-text="true"\n  >\n    Close Button\n  </button>\n</div>'),navigator.clipboard.writeText('<div class="db-notification">\n  <p>Closeable</p>\n  <button\n    class="db-button"\n    data-icon="close"\n    data-size="small"\n    data-variant="ghost"\n    data-no-text="true"\n  >\n    Close Button\n  </button>\n</div>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNotification behaviour="closable">Closeable</DBNotification>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBNotification behaviour="closable">Closeable</DBNotification>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBNotification behaviour="closable">Closeable</DBNotification>'),navigator.clipboard.writeText('<DBNotification behaviour="closable">Closeable</DBNotification>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNotification behaviour="closable">Closeable</DBNotification>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBNotification behaviour="closable">Closeable</DBNotification>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBNotification behaviour="closable">Closeable</DBNotification>'),navigator.clipboard.writeText('<DBNotification behaviour="closable">Closeable</DBNotification>')},children:"Copy"})]})]})})]})}},79587:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-density-functional","props":{"headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-density-regular","props":{"headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"expressive","style":{"width":"300px"},"className":"db-density-expressive","props":{"headline":"Headline","icon":"information","behaviour":"closable"}}]},{"name":"Variant","examples":[{"name":"(Default) Docked","style":{"width":"300px"},"props":{"variant":"docked","headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"Standalone","style":{"width":"300px"},"props":{"variant":"standalone","headline":"Headline","icon":"information","behaviour":"closable"}},{"name":"Overlay","style":{"width":"300px"},"props":{"variant":"overlay","headline":"Headline","icon":"information","behaviour":"closable","timestamp":"10 min ago"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","behaviour":"closable"}},{"name":"Neutral","style":{"width":"300px"},"props":{"type":"alert","semantic":"neutral","headline":"Headline","behaviour":"closable"}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","semantic":"critical","headline":"Headline","behaviour":"closable"}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","semantic":"informational","headline":"Headline","behaviour":"closable"}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","semantic":"successful","headline":"Headline","behaviour":"closable"}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","semantic":"warning","headline":"Headline","behaviour":"closable"}}]},{"name":"Behaviour","examples":[{"name":"(Default) Permanent","style":{"width":"300px"},"props":{"behaviour":"permanent"}},{"name":"Closeable","style":{"width":"300px"},"props":{"behaviour":"closable"}}]},{"name":"Content - Variant:Docked","examples":[{"name":"Text","style":{"width":"300px"},"props":{"behaviour":"permanent"}},{"name":"Text & Icon","style":{"width":"300px"},"props":{"icon":"information","behaviour":"permanent"}},{"name":"Text & Preview Image","style":{"width":"300px"},"props":{"img":true,"behaviour":"permanent"}},{"name":"Text & Headline","style":{"width":"300px"},"props":{"headline":"Headline","behaviour":"permanent"}},{"name":"Text & Textlink Block","style":{"width":"300px"},"props":{"link":true,"behaviour":"permanent"}},{"name":"Text & Textlink Inline","style":{"width":"300px"},"props":{"link":true,"linkVariant":"inline","behaviour":"permanent"}},{"name":"Text & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"headline":"Headline","link":true,"linkVariant":"inline"}},{"name":"Text & Icon & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"icon":"information","headline":"Headline","link":true,"linkVariant":"inline"}}]},{"name":"Content - Variant:Standalone","examples":[{"name":"Text","style":{"width":"300px"},"props":{"variant":"standalone","behaviour":"permanent"}},{"name":"Text & Icon","style":{"width":"300px"},"props":{"icon":"information","variant":"standalone","behaviour":"permanent"}},{"name":"Text & Preview Image","style":{"width":"300px"},"props":{"img":true,"variant":"standalone","behaviour":"permanent"}},{"name":"Text & Headline","style":{"width":"300px"},"props":{"headline":"Headline","variant":"standalone","behaviour":"permanent"}},{"name":"Text & Textlink Block","style":{"width":"300px"},"props":{"link":true,"variant":"standalone","behaviour":"permanent"}},{"name":"Text & Textlink Inline","style":{"width":"300px"},"props":{"link":true,"linkVariant":"inline","variant":"standalone","behaviour":"permanent"}},{"name":"Text & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"headline":"Headline","link":true,"linkVariant":"inline","variant":"standalone"}},{"name":"Text & Icon & Headline & Textlink Inline & Cloaseable","style":{"width":"300px"},"props":{"icon":"information","headline":"Headline","link":true,"linkVariant":"inline","variant":"standalone"}}]},{"name":"Content - Variant:Overlay","examples":[{"name":"Text","style":{"width":"300px"},"props":{"variant":"overlay","behaviour":"permanent"}},{"name":"Text & Icon","style":{"width":"300px"},"props":{"icon":"information","variant":"overlay","behaviour":"permanent"}},{"name":"Text & Preview Image","style":{"width":"300px"},"props":{"img":true,"variant":"overlay","behaviour":"permanent"}},{"name":"Text & Headline","style":{"width":"300px"},"props":{"headline":"Headline","variant":"overlay","behaviour":"permanent"}},{"name":"Text & Timed","style":{"width":"300px"},"props":{"timestamp":"10 min ago","variant":"overlay","behaviour":"permanent"}},{"name":"Text & Timed & Cloaseable","style":{"width":"300px"},"props":{"timestamp":"10 min ago","variant":"overlay"}},{"name":"Text & Headline & Timed & Cloaseable","style":{"width":"300px"},"props":{"headline":"Headline","timestamp":"10 min ago","variant":"overlay"}},{"name":"Text & Icon & Headline & Timed & Cloaseable","style":{"width":"300px"},"props":{"icon":"information","headline":"Headline","timestamp":"10 min ago","variant":"overlay"}}]}]')}}]);