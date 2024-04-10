"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82991],{37395:function(t,o,n){n.d(o,{P:function(){return i}});let i=(t,o,n)=>t.map((t,i)=>{var e;return{...t,slotCode:null!==(e=null==n?void 0:n.at(i))&&void 0!==e?e:"No code available",examples:t.examples.map(t=>{var n,i,e,l;return{...t,example:o({...t.props,id:null!==(e=null===(n=t.props)||void 0===n?void 0:n.id)&&void 0!==e?e:t.name,children:null!==(l=null===(i=t.props)||void 0===i?void 0:i.children)&&void 0!==l?l:t.name})}})}})},99341:function(t,o,n){var i=n(52322),e=n(5632),l=n(2784),a=n(12156),s=n(53752);let c=t=>{let{examples:o,slotCode:n}=t,[e,a]=(0,l.useState)();return(0,i.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,i.jsx)("div",{className:"variants-list",children:o.map((t,o)=>(0,i.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(o)))}),(0,i.jsxs)("details",{className:"code-details",onToggle:()=>{a(!e)},children:[(0,i.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:e?"Hide code":"Show code"}),(0,i.jsxs)("div",{className:"db-ui-functional",children:[(0,i.jsx)("div",{className:"backdrop"}),(0,i.jsx)(s.f,{className:"code",spacing:"small",children:n})]})]})]})},r=t=>{let{variants:o,componentName:n}=t,e=(t,o)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],i="?page=".concat(t.name.toLowerCase());return o?"".concat(n.split("components")[0],"/components/").concat(o).concat(i):"".concat(n).concat(i)};return(0,i.jsx)(i.Fragment,{children:null==o?void 0:o.map((t,o)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(s.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(s.vB,{content:"external",target:"_blank",href:e(t,n),children:t.name})}),(0,i.jsx)(c,{...t})]},"".concat(t.name,"-").concat(o)))})};o.Z=t=>{let{title:o,variants:n,subComponent:s,isSubComponent:d,componentName:p}=t,[x,h]=(0,l.useState)(),j=(0,e.useRouter)();return(0,l.useEffect)(()=>{if(j.query){var t;let o=null===(t=j.query.page)||void 0===t?void 0:t.toString();o&&h(n.find(t=>t.name.toLowerCase()===o))}},[j]),(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)("div",{children:(0,i.jsx)(c,{...x})}),!x&&!d&&(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:o}),(0,i.jsx)(r,{variants:n,componentName:p})]}),s]}),!x&&d&&(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h2",{children:o}),(0,i.jsx)(r,{variants:n,componentName:p})]})]})}},4575:function(t,o,n){n.r(o);var i=n(52322),e=n(2784),l=n(9513),a=n(33878),s=n(95696),c=n(79041),r=n(16909),d=n(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(!1),1500)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-06" class="db-tooltip">\n  (Default) Weak\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-06" class="db-tooltip">\n  (Default) Weak\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>')},children:"Copy"})]})]})}),(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>')},children:"Copy"})]})]})})]})}},12283:function(t,o,n){n.r(o);var i=n(52322),e=n(2784),l=n(9513),a=n(33878),s=n(95696),c=n(79041),r=n(16909),d=n(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(!1),1500)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-01">\n  Functional\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-01">\n  Functional\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-01" class="db-tooltip">\n  Functional\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-01" class="db-tooltip">\n  Functional\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-01">\n  Functional\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-01">\n  Functional\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-01">\n  Functional\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-01">\n  Functional\n</DBTooltip>')},children:"Copy"})]})]})}),(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-02">\n  (Default) Regular\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-02">\n  (Default) Regular\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-02" class="db-tooltip">\n  (Default) Regular\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-02" class="db-tooltip">\n  (Default) Regular\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-02">\n  (Default) Regular\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-02">\n  (Default) Regular\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-02">\n  (Default) Regular\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-02">\n  (Default) Regular\n</DBTooltip>')},children:"Copy"})]})]})}),(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-03">\n  Expressive\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-03">\n  Expressive\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-03" class="db-tooltip">\n  Expressive\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-03" class="db-tooltip">\n  Expressive\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-03">\n  Expressive\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-03">\n  Expressive\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-03">\n  Expressive\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-03">\n  Expressive\n</DBTooltip>')},children:"Copy"})]})]})})]})}},97794:function(t,o,n){n.r(o);var i=n(52322),e=n(2784),l=n(9513),a=n(33878),s=n(95696),c=n(79041),r=n(16909),d=n(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(!1),1500)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-04" class="db-tooltip">\n  (Default) With arrow\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-04" class="db-tooltip">\n  (Default) With arrow\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-04">\n  (Default) With arrow\n</DBTooltip>')},children:"Copy"})]})]})}),(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-05"\n  data-variant="basic"\n  class="db-tooltip"\n>\n  Basic\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-05"\n  data-variant="basic"\n  class="db-tooltip"\n>\n  Basic\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip content="Tooltip" variant="basic" id="tooltip-05">\n  Basic\n</DBTooltip>')},children:"Copy"})]})]})})]})}},33010:function(t,o,n){n.r(o);var i=n(52322),e=n(2784),l=n(9513),a=n(33878),s=n(95696),c=n(79041),r=n(16909),d=n(16134);o.default=()=>{let[t,o]=(0,e.useState)();return(0,e.useEffect)(()=>{t&&setTimeout(()=>o(!1),1500)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i role="tooltip" data-gap="true" id="tooltip-12" class="db-tooltip">\n  (Default) Auto\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i role="tooltip" data-gap="true" id="tooltip-12" class="db-tooltip">\n  (Default) Auto\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>')},children:"Copy"})]})]})}),(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{children:"Angular"}),(0,i.jsx)(c.Z,{children:"HTML"}),(0,i.jsx)(c.Z,{children:"React"}),(0,i.jsx)(c.Z,{children:"Vue"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>')},children:"Copy"})]}),(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:t?"done":"copy",variant:"text",onClick:()=>{o(!0),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>')},children:"Copy"})]})]})})]})}},10171:function(t){t.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","props":{"content":"Tooltip","id":"tooltip-01"}},{"name":"(Default) Regular","className":"db-ui-regular","props":{"content":"Tooltip","id":"tooltip-02"}},{"name":"Expressive","className":"db-ui-expressive","props":{"content":"Tooltip","id":"tooltip-03"}}]},{"name":"Variant","examples":[{"name":"(Default) With arrow","props":{"content":"Tooltip","id":"tooltip-04"}},{"name":"Basic","props":{"content":"Tooltip","variant":"basic","id":"tooltip-05"}}]},{"name":"Emphasis","examples":[{"name":"(Default) Weak","props":{"content":"Tooltip","id":"tooltip-06"}},{"name":"Strong","props":{"content":"Tooltip","emphasis":"strong","id":"tooltip-07"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"content":"Tooltip","placement":"bottom-start","id":"tooltip-08-start"}},{"name":"(Default) bottom","props":{"content":"Tooltip","placement":"bottom","id":"tooltip-08"}},{"name":"bottom-end","props":{"content":"Tooltip","placement":"bottom-end","id":"tooltip-08-end"}},{"name":"left-start","props":{"content":"Tooltip","placement":"left-start","id":"tooltip-10-start"}},{"name":"left","props":{"content":"Tooltip","placement":"left","id":"tooltip-10"}},{"name":"left-end","props":{"content":"Tooltip","placement":"left-end","id":"tooltip-10-end"}},{"name":"right-start","props":{"content":"Tooltip","placement":"right-start","id":"tooltip-11-start"}},{"name":"right","props":{"content":"Tooltip","placement":"right","id":"tooltip-11"}},{"name":"right-end","props":{"content":"Tooltip","placement":"right-end","id":"tooltip-11-end"}},{"name":"top-start","props":{"content":"Tooltip","placement":"top-start","id":"tooltip-09-start"}},{"name":"top","props":{"content":"Tooltip","placement":"top","id":"tooltip-09"}},{"name":"top-end","props":{"content":"Tooltip","placement":"top-end","id":"tooltip-09-end"}}]},{"name":"Width","examples":[{"name":"(Default) Auto","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"tooltip-12"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"tooltip-13"}}]},{"name":"Animations","examples":[{"name":"(Default) Animation no delay","props":{"content":"Tooltip","id":"tooltip-14"}},{"name":"Delay slow","props":{"content":"Tooltip","delay":"slow","id":"tooltip-15"}},{"name":"Delay fast","props":{"content":"Tooltip","delay":"fast","id":"tooltip-16"}},{"name":"No animation","props":{"content":"Tooltip","animation":"disabled","id":"tooltip-17"}}]}]')}}]);