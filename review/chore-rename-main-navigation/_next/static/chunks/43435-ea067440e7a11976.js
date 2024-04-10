"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43435],{37395:function(t,o,i){i.d(o,{P:function(){return n}});let n=(t,o,i)=>t.map((t,n)=>{var e;return{...t,slotCode:null!==(e=null==i?void 0:i.at(n))&&void 0!==e?e:"No code available",examples:t.examples.map(t=>{var i,n,e,l;return{...t,example:o({...t.props,id:null!==(e=null===(i=t.props)||void 0===i?void 0:i.id)&&void 0!==e?e:t.name,children:null!==(l=null===(n=t.props)||void 0===n?void 0:n.children)&&void 0!==l?l:t.name})}})}})},99341:function(t,o,i){var n=i(52322),e=i(5632),l=i(2784),a=i(10851),s=i(66703);let p=t=>{let{examples:o,slotCode:i}=t,[e,a]=(0,l.useState)();return(0,n.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:o.map((t,o)=>(0,n.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(o)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{a(!e)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:e?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(s.f,{className:"code",spacing:"small",children:i})]})]})]})};o.Z=t=>{let{title:o,variants:i}=t,[d,c]=(0,l.useState)(),r=(0,e.useRouter)();(0,l.useEffect)(()=>{if(r.query){var t;let o=null===(t=r.query.page)||void 0===t?void 0:t.toString();o&&c(i.find(t=>t.name.toLowerCase()===o))}},[r]);let h=t=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(t.name.toLowerCase()):"";return(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)("div",{children:(0,n.jsx)(p,{...d})}),!d&&(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:o}),null==i?void 0:i.map((t,o)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(s.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(s.vB,{content:"external",target:"_blank",href:h(t),children:t.name})}),(0,n.jsx)(p,{...t})]},"".concat(t.name,"-").concat(o)))]})})]})}},4575:function(t,o,i){i.r(o);var n=i(52322),e=i(2784),l=i(9513),a=i(33878),s=i(95696),p=i(79041),d=i(16909),c=i(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(""),1500)},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z,{children:"Angular"}),(0,n.jsx)(p.Z,{children:"HTML"}),(0,n.jsx)(p.Z,{children:"React"}),(0,n.jsx)(p.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-06" class="db-tooltip">\n  (Default) Weak\n</i>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i role="tooltip" data-gap="true" id="tooltip-06" class="db-tooltip">\n  (Default) Weak\n</i>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<i role="tooltip" data-gap="true" id="tooltip-06" class="db-tooltip">\n  (Default) Weak\n</i>'),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-06" class="db-tooltip">\n  (Default) Weak\n</i>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>')},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z,{children:"Angular"}),(0,n.jsx)(p.Z,{children:"HTML"}),(0,n.jsx)(p.Z,{children:"React"}),(0,n.jsx)(p.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>')},children:"Copy"})]})]})})]})}},97794:function(t,o,i){i.r(o);var n=i(52322),e=i(2784),l=i(9513),a=i(33878),s=i(95696),p=i(79041),d=i(16909),c=i(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(""),1500)},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z,{children:"Angular"}),(0,n.jsx)(p.Z,{children:"HTML"}),(0,n.jsx)(p.Z,{children:"React"}),(0,n.jsx)(p.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</db-tooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</db-tooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<db-tooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</db-tooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-04" class="db-tooltip">\n  (Default) With arrow\n</i>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i role="tooltip" data-gap="true" id="tooltip-04" class="db-tooltip">\n  (Default) With arrow\n</i>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<i role="tooltip" data-gap="true" id="tooltip-04" class="db-tooltip">\n  (Default) With arrow\n</i>'),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-04" class="db-tooltip">\n  (Default) With arrow\n</i>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>')},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z,{children:"Angular"}),(0,n.jsx)(p.Z,{children:"HTML"}),(0,n.jsx)(p.Z,{children:"React"}),(0,n.jsx)(p.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</db-tooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</db-tooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<db-tooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</db-tooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-05"\n  data-variant="basic"\n  class="db-tooltip"\n>\n  Basic\n</i>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-05"\n  data-variant="basic"\n  class="db-tooltip"\n>\n  Basic\n</i>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-05"\n  data-variant="basic"\n  class="db-tooltip"\n>\n  Basic\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-05"\n  data-variant="basic"\n  class="db-tooltip"\n>\n  Basic\n</i>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>')},children:"Copy"})]})]})})]})}},33010:function(t,o,i){i.r(o);var n=i(52322),e=i(2784),l=i(9513),a=i(33878),s=i(95696),p=i(79041),d=i(16909),c=i(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(""),1500)},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z,{children:"Angular"}),(0,n.jsx)(p.Z,{children:"HTML"}),(0,n.jsx)(p.Z,{children:"React"}),(0,n.jsx)(p.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-12" class="db-tooltip">\n  (Default) Auto\n</i>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i role="tooltip" data-gap="true" id="tooltip-12" class="db-tooltip">\n  (Default) Auto\n</i>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<i role="tooltip" data-gap="true" id="tooltip-12" class="db-tooltip">\n  (Default) Auto\n</i>'),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-12" class="db-tooltip">\n  (Default) Auto\n</i>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>')},children:"Copy"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z,{children:"Angular"}),(0,n.jsx)(p.Z,{children:"HTML"}),(0,n.jsx)(p.Z,{children:"React"}),(0,n.jsx)(p.Z,{children:"Vue"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>')},children:"Copy"})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'})}),(0,n.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'===t?"done":"copy",variant:"ghost",onClick:()=>{o('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>')},children:"Copy"})]})]})})]})}},10171:function(t){t.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{"content":"Tooltip","id":"tooltip-01"}},{"name":"(Default) Regular","className":"db-density-regular","props":{"content":"Tooltip","id":"tooltip-02"}},{"name":"Expressive","className":"db-density-expressive","props":{"content":"Tooltip","id":"tooltip-03"}}]},{"name":"Variant","examples":[{"name":"(Default) With arrow","props":{"content":"Tooltip","id":"tooltip-04"}},{"name":"Basic","props":{"content":"Tooltip","variant":"basic","id":"tooltip-05"}}]},{"name":"Emphasis","examples":[{"name":"(Default) Weak","props":{"content":"Tooltip","id":"tooltip-06"}},{"name":"Strong","props":{"content":"Tooltip","emphasis":"strong","id":"tooltip-07"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"content":"Tooltip","placement":"bottom-start","id":"tooltip-08-start"}},{"name":"(Default) bottom","props":{"content":"Tooltip","placement":"bottom","id":"tooltip-08"}},{"name":"bottom-end","props":{"content":"Tooltip","placement":"bottom-end","id":"tooltip-08-end"}},{"name":"left-start","props":{"content":"Tooltip","placement":"left-start","id":"tooltip-10-start"}},{"name":"left","props":{"content":"Tooltip","placement":"left","id":"tooltip-10"}},{"name":"left-end","props":{"content":"Tooltip","placement":"left-end","id":"tooltip-10-end"}},{"name":"right-start","props":{"content":"Tooltip","placement":"right-start","id":"tooltip-11-start"}},{"name":"right","props":{"content":"Tooltip","placement":"right","id":"tooltip-11"}},{"name":"right-end","props":{"content":"Tooltip","placement":"right-end","id":"tooltip-11-end"}},{"name":"top-start","props":{"content":"Tooltip","placement":"top-start","id":"tooltip-09-start"}},{"name":"top","props":{"content":"Tooltip","placement":"top","id":"tooltip-09"}},{"name":"top-end","props":{"content":"Tooltip","placement":"top-end","id":"tooltip-09-end"}}]},{"name":"Width","examples":[{"name":"(Default) Auto","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"tooltip-12"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"tooltip-13"}}]},{"name":"Animations","examples":[{"name":"(Default) Animation no delay","props":{"content":"Tooltip","id":"tooltip-14"}},{"name":"Delay slow","props":{"content":"Tooltip","delay":"slow","id":"tooltip-15"}},{"name":"Delay fast","props":{"content":"Tooltip","delay":"fast","id":"tooltip-16"}},{"name":"No animation","props":{"content":"Tooltip","animation":"disabled","id":"tooltip-17"}}]}]')}}]);