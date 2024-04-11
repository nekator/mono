"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16288],{37395:function(e,a,n){n.d(a,{P:function(){return i}});let i=(e,a,n)=>e.map((e,i)=>{var t;return{...e,slotCode:null!==(t=null==n?void 0:n.at(i))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var n,i,t,o;return{...e,example:a({...e.props,id:null!==(t=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==t?t:e.name,children:null!==(o=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==o?o:e.name})}})}})},99341:function(e,a,n){var i=n(52322),t=n(5632),o=n(2784),s=n(11803),l=n(86095);let r=e=>{let{examples:a,slotCode:n}=e,[t,s]=(0,o.useState)();return(0,i.jsxs)(l.f,{className:"variants-card db-code-docs",children:[(0,i.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,i.jsxs)("details",{className:"code-details",onToggle:()=>{s(!t)},children:[(0,i.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:t?"Hide code":"Show code"}),(0,i.jsxs)("div",{className:"db-ui-functional",children:[(0,i.jsx)("div",{className:"backdrop"}),(0,i.jsx)(l.f,{className:"code",spacing:"small",children:n})]})]})]})},c=e=>{let{variants:a,componentName:n}=e,t=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],i="?page=".concat(e.name.toLowerCase());return a?"".concat(n.split("components")[0],"/components/").concat(a).concat(i):"".concat(n).concat(i)};return(0,i.jsx)(i.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(l.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(l.vB,{content:"external",target:"_blank",href:t(e,n),children:e.name})}),(0,i.jsx)(r,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:n,subComponent:l,isSubComponent:d,componentName:u}=e,[p,x]=(0,o.useState)(),m=(0,t.useRouter)();return(0,o.useEffect)(()=>{if(m.query){var e;let a=null===(e=m.query.page)||void 0===e?void 0:e.toString();a&&x(n.find(e=>e.name.toLowerCase()===a))}},[m]),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)("div",{children:(0,i.jsx)(r,{...p})}),!p&&!d&&(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:a}),(0,i.jsx)(c,{variants:n,componentName:u})]}),l]}),!p&&d&&(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)(c,{variants:n,componentName:u})]})]})}},18986:function(e,a,n){n.r(a);var i=n(52322),t=n(2784),o=n(9513),s=n(33878),l=n(95696),r=n(79041),c=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [areaPopup]="true">Enabled (Default)/Hover/Pressed</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [areaPopup]="true">Enabled (Default)/Hover/Pressed</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem areaPopup>Enabled (Default)/Hover/Pressed</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem areaPopup>Enabled (Default)/Hover/Pressed</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :areaPopup="true">Enabled (Default)/Hover/Pressed</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :areaPopup="true">Enabled (Default)/Hover/Pressed</DBNavigationItem>')},children:"Copy"})]})]})}),(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [active]="true" [areaPopup]="true">Active</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [active]="true" [areaPopup]="true">Active</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem active areaPopup>\n  Active\n</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem active areaPopup>\n  Active\n</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :active="true" :areaPopup="true">Active</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :active="true" :areaPopup="true">Active</DBNavigationItem>')},children:"Copy"})]})]})}),(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [disabled]="true" [areaPopup]="true">Disabled</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [disabled]="true" [areaPopup]="true">Disabled</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem disabled areaPopup>\n  Disabled\n</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem disabled areaPopup>\n  Disabled\n</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :disabled="true" :areaPopup="true">Disabled</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :disabled="true" :areaPopup="true">Disabled</DBNavigationItem>')},children:"Copy"})]})]})})]})}},25060:function(e,a,n){n.r(a);var i=n(52322),t=n(2784),o=n(9513),s=n(33878),l=n(95696),r=n(79041),c=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [areaPopup]="true">Functional</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [areaPopup]="true">Functional</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Functional\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-5423556333731294"></menu>\n</li>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Functional\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-5423556333731294"></menu>\n</li>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem areaPopup>Functional</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem areaPopup>Functional</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :areaPopup="true">Functional</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :areaPopup="true">Functional</DBNavigationItem>')},children:"Copy"})]})]})}),(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [areaPopup]="true">(Default) Regular</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [areaPopup]="true">(Default) Regular</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Regular\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-7506964570887065"></menu>\n</li>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Regular\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-7506964570887065"></menu>\n</li>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem areaPopup>(Default) Regular</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem areaPopup>(Default) Regular</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :areaPopup="true">(Default) Regular</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :areaPopup="true">(Default) Regular</DBNavigationItem>')},children:"Copy"})]})]})}),(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [areaPopup]="true">Expressive</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [areaPopup]="true">Expressive</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Expressive\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-8035677109379353"></menu>\n</li>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Expressive\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-8035677109379353"></menu>\n</li>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem areaPopup>Expressive</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem areaPopup>Expressive</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :areaPopup="true">Expressive</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :areaPopup="true">Expressive</DBNavigationItem>')},children:"Copy"})]})]})})]})}},39805:function(e,a,n){n.r(a);var i=n(52322),t=n(2784),o=n(9513),s=n(33878),l=n(95696),r=n(79041),c=n(16909),d=n(16134);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item [areaPopup]="true">(Default) Auto</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item [areaPopup]="true">(Default) Auto</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-20358679097729526"></menu>\n</li>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-20358679097729526"></menu>\n</li>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem areaPopup>(Default) Auto</DBNavigationItem>"})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("<DBNavigationItem areaPopup>(Default) Auto</DBNavigationItem>")},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem :areaPopup="true">(Default) Auto</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem :areaPopup="true">(Default) Auto</DBNavigationItem>')},children:"Copy"})]})]})}),(0,i.jsx)(o.Z,{className:"tab-container",children:(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item width="full" [areaPopup]="true">Full</db-navigation-item>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-navigation-item width="full" [areaPopup]="true">Full</db-navigation-item>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-4544281696364887"></menu>\n</li>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-4544281696364887"></menu>\n</li>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full" areaPopup>\n  Full\n</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem width="full" areaPopup>\n  Full\n</DBNavigationItem>')},children:"Copy"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full" :areaPopup="true">Full</DBNavigationItem>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBNavigationItem width="full" :areaPopup="true">Full</DBNavigationItem>')},children:"Copy"})]})]})})]})}},89267:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"areaPopup":true}},{"name":"(Default) Regular","className":"db-ui-regular","props":{"areaPopup":true}},{"name":"Expressive","className":"db-ui-expressive","props":{"areaPopup":true}}]},{"name":"Interaction-States","examples":[{"name":"Enabled (Default)/Hover/Pressed","props":{"areaPopup":true}},{"name":"Active","props":{"active":true,"areaPopup":true}},{"name":"Disabled","props":{"disabled":true,"areaPopup":true}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"areaPopup":false}},{"name":"Text - Icon (Leading)","props":{"icon":"account","areaPopup":false}},{"name":"Text - Icons (Leading, Chevron)","props":{"icon":"account","areaPopup":true}},{"name":"Text - Icon (Chevron)","props":{"areaPopup":true}}]},{"name":"Width","examples":[{"name":"(Default) Auto","style":{"width":"400px"},"props":{"areaPopup":true}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","areaPopup":true}}]}]')}}]);