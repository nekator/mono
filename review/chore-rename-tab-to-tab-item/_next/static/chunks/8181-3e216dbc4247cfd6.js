"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8181],{45016:function(e,t,l){l.d(t,{P:function(){return a}});let a=(e,t,l)=>e.map((e,a)=>{var n;return{...e,slotCode:null!==(n=null==l?void 0:l.at(a))&&void 0!==n?n:"No code available",examples:e.examples.map(e=>{var l,a,n,i;return{...e,example:t({...e.props,id:null!==(n=null===(l=e.props)||void 0===l?void 0:l.id)&&void 0!==n?n:e.name,children:null!==(i=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==i?i:e.name})}})}})},47439:function(e,t,l){var a=l(52322),n=l(5632),i=l(2784),d=l(55216),s=l(18297);let o=e=>{let{examples:t,slotCode:l}=e,[n,d]=(0,i.useState)();return(0,a.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,a.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))}),(0,a.jsxs)("details",{className:"code-details",onToggle:()=>{d(!n)},children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:n?"Hide code":"Show code"}),(0,a.jsxs)("div",{className:"db-density-functional",children:[(0,a.jsx)("div",{className:"backdrop"}),(0,a.jsx)(s.f,{className:"code",spacing:"small",children:l})]})]})]})},r=e=>{let{variants:t,componentName:l}=e,n=(e,t)=>{if(!window.location.origin||!window.location.href)return"";let l=window.location.href.split("?")[0],a="?page=".concat(e.name.toLowerCase());return t?"".concat(l.split("components")[0],"/components/").concat(t).concat(a):"".concat(l).concat(a)};return(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:n(e,l),children:e.name})}),(0,a.jsx)(o,{...e})]},"".concat(e.name,"-").concat(t)))})};t.Z=e=>{let{title:t,variants:l,subComponent:s,isSubComponent:c,componentName:b}=e,[h,u]=(0,i.useState)(),m=(0,n.useRouter)();return(0,i.useEffect)(()=>{if(m.query){var e;let t=null===(e=m.query.page)||void 0===e?void 0:e.toString();t&&u(l.find(e=>e.name.toLowerCase()===t))}},[m]),(0,a.jsxs)(a.Fragment,{children:[h&&(0,a.jsx)("div",{children:(0,a.jsx)(o,{...h})}),!h&&!c&&(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)(r,{variants:l,componentName:b})]}),s]}),!h&&c&&(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h2",{children:t}),(0,a.jsx)(r,{variants:l,componentName:b})]})]})}},29879:function(e,t,l){l.r(t);var a=l(52322),n=l(2784),i=l(70741),d=l(57092),s=l(57884),o=l(57284),r=l(49953),c=l(10326);t.default=()=>{let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{children:"Angular"}),(0,a.jsx)(o.Z,{children:"HTML"}),(0,a.jsx)(o.Z,{children:"React"}),(0,a.jsx)(o.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-tab-item label="(Default) Auto Width">(Default) Auto Width</db-tab-item>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tab-item label="(Default) Auto Width">(Default) Auto Width</db-tab-item>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<db-tab-item label="(Default) Auto Width">(Default) Auto Width</db-tab-item>'),navigator.clipboard.writeText('<db-tab-item label="(Default) Auto Width">(Default) Auto Width</db-tab-item>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>(Default) Auto Width<!-- -->(Default) Auto Width</label></li>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>(Default) Auto Width<!-- -->(Default) Auto Width</label></li>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>(Default) Auto Width<!-- -->(Default) Auto Width</label></li>'),navigator.clipboard.writeText('<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>(Default) Auto Width<!-- -->(Default) Auto Width</label></li>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="(Default) Auto Width">(Default) Auto Width</DBTabItem>')},children:"Copy"})]})]})}),(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{children:"Angular"}),(0,a.jsx)(o.Z,{children:"HTML"}),(0,a.jsx)(o.Z,{children:"React"}),(0,a.jsx)(o.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-tab-item label="Width full" width="full">\n  Width full\n</db-tab-item>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tab-item label="Width full" width="full">\n  Width full\n</db-tab-item>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<db-tab-item label="Width full" width="full">\n  Width full\n</db-tab-item>'),navigator.clipboard.writeText('<db-tab-item label="Width full" width="full">\n  Width full\n</db-tab-item>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>Width full<!-- -->Width full</label></li>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>Width full<!-- -->Width full</label></li>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>Width full<!-- -->Width full</label></li>'),navigator.clipboard.writeText('<li role="tab" class="db-tab-item"><label for="OVERWRITE_DEFAULT_ID"><input type="radio" role="tab" id="OVERWRITE_DEFAULT_ID"/>Width full<!-- -->Width full</label></li>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="Width full" width="full">\n  Width full\n</DBTabItem>')},children:"Copy"})]})]})})]})}},92992:function(e,t,l){l.r(t);var a=l(52322),n=l(2784),i=l(70741),d=l(57092),s=l(57884),o=l(57284),r=l(49953),c=l(10326);t.default=()=>{let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{children:"Angular"}),(0,a.jsx)(o.Z,{children:"HTML"}),(0,a.jsx)(o.Z,{children:"React"}),(0,a.jsx)(o.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-tab-item label="Left" width="full">\n  Left\n</db-tab-item>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tab-item label="Left" width="full">\n  Left\n</db-tab-item>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<db-tab-item label="Left" width="full">\n  Left\n</db-tab-item>'),navigator.clipboard.writeText('<db-tab-item label="Left" width="full">\n  Left\n</db-tab-item>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="Left" width="full">\n  Left\n</DBTabItem>')},children:"Copy"})]})]})}),(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(d.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{children:"Angular"}),(0,a.jsx)(o.Z,{children:"HTML"}),(0,a.jsx)(o.Z,{children:"React"}),(0,a.jsx)(o.Z,{children:"Vue"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-tab-item label="Centered" width="full" alignment="center">\n  Centered\n</db-tab-item>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tab-item label="Centered" width="full" alignment="center">\n  Centered\n</db-tab-item>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<db-tab-item label="Centered" width="full" alignment="center">\n  Centered\n</db-tab-item>'),navigator.clipboard.writeText('<db-tab-item label="Centered" width="full" alignment="center">\n  Centered\n</db-tab-item>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>')},children:"Copy"})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>'})}),(0,a.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>'===e?"done":"copy",variant:"ghost",onClick:()=>{t('<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>'),navigator.clipboard.writeText('<DBTabItem label="Centered" width="full" alignment="center">\n  Centered\n</DBTabItem>')},children:"Copy"})]})]})})]})}},58358:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional tab-hide-article","props":{"label":"functional"}},{"name":"(Default) Regular","className":"db-density-regular tab-hide-article","props":{"label":"(Default) Regular"}},{"name":"Expressive","className":"db-density-expressive tab-hide-article","props":{"label":"expressive"}}]},{"name":"States","examples":[{"name":"(Default) Enabled","props":{"label":"(Default) Enabled"}},{"name":"active","props":{"label":"active","active":true}},{"name":"disabled","props":{"label":"active","disabled":true}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"(Default) Text"}},{"name":"Text - Icon (Leading)","props":{"label":"Text - Icon (Leading)","icon":"x_placeholder"}},{"name":"Text - Icon (Trailing)","props":{"label":"Text - Icon (Trailing)","iconAfter":"x_placeholder"}},{"name":"Icon","props":{"icon":"x_placeholder","noText":true}}]},{"name":"Behaviour","examples":[{"name":"(Default) Auto Width","props":{"label":"(Default) Auto Width"}},{"name":"Width full","style":{"width":"500px"},"props":{"label":"Width full","width":"full"}}]},{"name":"Content Alignment Full Width","examples":[{"name":"Left","style":{"width":"500px"},"props":{"label":"Left","width":"full"}},{"name":"Centered","style":{"width":"500px"},"props":{"label":"Centered","width":"full","alignment":"center"}}]}]')}}]);