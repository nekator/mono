"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26370],{37395:function(o,e,n){n.d(e,{P:function(){return t}});let t=(o,e,n)=>o.map((o,t)=>{var p;return{...o,slotCode:null!==(p=null==n?void 0:n.at(t))&&void 0!==p?p:"No code available",examples:o.examples.map(o=>{var n,t,p,r;return{...o,example:e({...o.props,id:null!==(p=null===(n=o.props)||void 0===n?void 0:n.id)&&void 0!==p?p:o.name,children:null!==(r=null===(t=o.props)||void 0===t?void 0:t.children)&&void 0!==r?r:o.name})}})}})},99341:function(o,e,n){var t=n(52322),p=n(5632),r=n(2784),i=n(11803),a=n(28148);let s=o=>{let{examples:e,slotCode:n}=o,[p,i]=(0,r.useState)();return(0,t.jsxs)(a.f,{className:"variants-card db-code-docs",children:[(0,t.jsx)("div",{className:"variants-list",children:e.map((o,e)=>(0,t.jsx)("div",{style:o.style,className:o.className,children:o.example},"".concat(o.name,"-").concat(e)))}),(0,t.jsxs)("details",{className:"code-details",onToggle:()=>{i(!p)},children:[(0,t.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:p?"Hide code":"Show code"}),(0,t.jsxs)("div",{className:"db-density-functional",children:[(0,t.jsx)("div",{className:"backdrop"}),(0,t.jsx)(a.f,{className:"code",spacing:"small",children:n})]})]})]})};e.Z=o=>{let{title:e,variants:n}=o,[d,c]=(0,r.useState)(),l=(0,p.useRouter)();(0,r.useEffect)(()=>{if(l.query){var o;let e=null===(o=l.query.page)||void 0===o?void 0:o.toString();e&&c(n.find(o=>o.name.toLowerCase()===e))}},[l]);let v=o=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(o.name.toLowerCase()):"";return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(s,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container",children:[(0,t.jsx)("h1",{children:e}),null==n?void 0:n.map((o,e)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(a.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(a.vB,{content:"external",target:"_blank",href:v(o),children:o.name})}),(0,t.jsx)(s,{...o})]},"".concat(o.name,"-").concat(e)))]})})]})}},28133:function(o,e,n){n.r(e);var t=n(52322),p=n(2784),r=n(9513),i=n(33878),a=n(95696),s=n(79041),d=n(16909),c=n(16134);e.default=()=>{let[o,e]=(0,p.useState)();return(0,p.useEffect)(()=>{o&&setTimeout(()=>e(""),1500)},[o]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{className:"tab-container",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{children:"Angular"}),(0,t.jsx)(s.Z,{children:"HTML"}),(0,t.jsx)(s.Z,{children:"React"}),(0,t.jsx)(s.Z,{children:"Vue"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<db-popover content="Popover" id="popover-11">\n  No gap (Default)\n</db-popover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-popover content="Popover" id="popover-11">\n  No gap (Default)\n</db-popover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<db-popover content="Popover" id="popover-11">\n  No gap (Default)\n</db-popover>'),navigator.clipboard.writeText('<db-popover content="Popover" id="popover-11">\n  No gap (Default)\n</db-popover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<i id="popover-11" class="db-popover">\n  No gap (Default)\n</i>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i id="popover-11" class="db-popover">\n  No gap (Default)\n</i>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<i id="popover-11" class="db-popover">\n  No gap (Default)\n</i>'),navigator.clipboard.writeText('<i id="popover-11" class="db-popover">\n  No gap (Default)\n</i>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover content="Popover" id="popover-11">\n  No gap (Default)\n</DBPopover>')},children:"Copy"})]})]})}),(0,t.jsx)(r.Z,{className:"tab-container",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{children:"Angular"}),(0,t.jsx)(s.Z,{children:"HTML"}),(0,t.jsx)(s.Z,{children:"React"}),(0,t.jsx)(s.Z,{children:"Vue"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<db-popover content="Popover" [gap]="true" id="popover-12">With gap</db-popover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-popover content="Popover" [gap]="true" id="popover-12">With gap</db-popover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<db-popover content="Popover" [gap]="true" id="popover-12">With gap</db-popover>'),navigator.clipboard.writeText('<db-popover content="Popover" [gap]="true" id="popover-12">With gap</db-popover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<i id="popover-12" class="db-popover" data-gap="true">\n  With gap\n</i>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i id="popover-12" class="db-popover" data-gap="true">\n  With gap\n</i>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<i id="popover-12" class="db-popover" data-gap="true">\n  With gap\n</i>'),navigator.clipboard.writeText('<i id="popover-12" class="db-popover" data-gap="true">\n  With gap\n</i>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover content="Popover" gap id="popover-12">\n  With gap\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover content="Popover" gap id="popover-12">\n  With gap\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover content="Popover" gap id="popover-12">\n  With gap\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover content="Popover" gap id="popover-12">\n  With gap\n</DBPopover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover content="Popover" :gap="true" id="popover-12">With gap</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover content="Popover" :gap="true" id="popover-12">With gap</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover content="Popover" :gap="true" id="popover-12">With gap</DBPopover>'),navigator.clipboard.writeText('<DBPopover content="Popover" :gap="true" id="popover-12">With gap</DBPopover>')},children:"Copy"})]})]})})]})}},17587:function(o,e,n){n.r(e);var t=n(52322),p=n(2784),r=n(9513),i=n(33878),a=n(95696),s=n(79041),d=n(16909),c=n(16134);e.default=()=>{let[o,e]=(0,p.useState)();return(0,p.useEffect)(()=>{o&&setTimeout(()=>e(""),1500)},[o]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{className:"tab-container",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{children:"Angular"}),(0,t.jsx)(s.Z,{children:"HTML"}),(0,t.jsx)(s.Z,{children:"React"}),(0,t.jsx)(s.Z,{children:"Vue"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</db-popover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</db-popover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</db-popover>'),navigator.clipboard.writeText('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</db-popover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<i id="popover-17" class="db-popover">\n  Auto (Default)\n</i>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i id="popover-17" class="db-popover">\n  Auto (Default)\n</i>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<i id="popover-17" class="db-popover">\n  Auto (Default)\n</i>'),navigator.clipboard.writeText('<i id="popover-17" class="db-popover">\n  Auto (Default)\n</i>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  Auto (Default)\n</DBPopover>')},children:"Copy"})]})]})}),(0,t.jsx)(r.Z,{className:"tab-container",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{children:"Angular"}),(0,t.jsx)(s.Z,{children:"HTML"}),(0,t.jsx)(s.Z,{children:"React"}),(0,t.jsx)(s.Z,{children:"Vue"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'),navigator.clipboard.writeText('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<i id="popover-18" class="db-popover" data-width="fixed">\n  Fixed\n</i>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<i id="popover-18" class="db-popover" data-width="fixed">\n  Fixed\n</i>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<i id="popover-18" class="db-popover" data-width="fixed">\n  Fixed\n</i>'),navigator.clipboard.writeText('<i id="popover-18" class="db-popover" data-width="fixed">\n  Fixed\n</i>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>')},children:"Copy"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'})}),(0,t.jsx)(c.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'===o?"done":"copy",variant:"ghost",onClick:()=>{e('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>')},children:"Copy"})]})]})})]})}},69780:function(o){o.exports=JSON.parse('[{"name":"Density","examples":[{"name":"functional","className":"db-density-functional","props":{"content":"Popover","id":"popover-01"}},{"name":"regular (Default)","className":"db-density-regular","props":{"content":"Popover","id":"popover-02"}},{"name":"expressive","className":"db-density-expressive","props":{"content":"Popover","id":"popover-03"}}]},{"name":"Spacing","examples":[{"name":"Small (Default)","props":{"content":"Popover","spacing":"small","id":"popover-04"}},{"name":"Medium","props":{"content":"Popover","spacing":"medium","id":"popover-05"}},{"name":"None","props":{"content":"Popover","spacing":"none","id":"popover-06"}}]},{"name":"Placement","examples":[{"name":"bottom-start","props":{"content":"Popover","placement":"bottom-start","id":"popover-07-start"}},{"name":"bottom (Default)","props":{"content":"Popover","placement":"bottom","id":"popover-07"}},{"name":"bottom-end","props":{"content":"Popover","placement":"bottom-end","id":"popover-07-end"}},{"name":"left-start","props":{"content":"Popover","placement":"left-start","id":"popover-09-start"}},{"name":"left","props":{"content":"Popover","placement":"left","id":"popover-09"}},{"name":"left-end","props":{"content":"Popover","placement":"left-end","id":"popover-09-end"}},{"name":"right-start","props":{"content":"Popover","placement":"right-start","id":"popover-10-start"}},{"name":"right","props":{"content":"Popover","placement":"right","id":"popover-10"}},{"name":"right-end","props":{"content":"Popover","placement":"right-end","id":"popover-10-end"}},{"name":"top-start","props":{"content":"Popover","placement":"top-start","id":"popover-08-start"}},{"name":"top","props":{"content":"Popover","placement":"top","id":"popover-08"}},{"name":"top-end","props":{"content":"Popover","placement":"top-end","id":"popover-08-end"}}]},{"name":"Gap","examples":[{"name":"No gap (Default)","props":{"content":"Popover","id":"popover-11"}},{"name":"With gap","props":{"content":"Popover","gap":true,"id":"popover-12"}}]},{"name":"Animations","examples":[{"name":"Animation no delay (Default)","props":{"content":"Popover","id":"popover-13"}},{"name":"Delay slow","props":{"content":"Popover","delay":"slow","id":"popover-14"}},{"name":"Delay fast","props":{"content":"Popover","delay":"fast","id":"popover-15"}},{"name":"No animation","props":{"content":"Popover","animation":"disabled","id":"popover-16"}}]},{"name":"Width","examples":[{"name":"Auto (Default)","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","id":"popover-17"}},{"name":"Fixed","props":{"content":"Max width, lorem ipsum dolor sit amet, consetetur sadipscing","width":"fixed","id":"popover-18"}}]}]')}}]);