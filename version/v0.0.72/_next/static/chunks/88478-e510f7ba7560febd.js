"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88478],{37395:function(e,l,a){a.d(l,{P:function(){return n}});let n=(e,l,a)=>e.map((e,n)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(n))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,n,t,i;return{...e,example:l({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(i=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,l,a){var n=a(52322),t=a(5632),i=a(2784),o=a(12156),s=a(53752);let c=e=>{let{examples:l,slotCode:a}=e,[t,o]=(0,i.useState)();return(0,n.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:l.map((e,l)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(l)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{o(!t)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:t?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-ui-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(s.f,{className:"code",spacing:"small",children:a})]})]})]})},p=e=>{let{variants:l,componentName:a}=e,t=(e,l)=>{if(!window.location.origin||!window.location.href)return"";let a=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return l?"".concat(a.split("components")[0],"/components/").concat(l).concat(n):"".concat(a).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==l?void 0:l.map((e,l)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(s.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(s.vB,{content:"external",target:"_blank",href:t(e,a),children:e.name})}),(0,n.jsx)(c,{...e})]},"".concat(e.name,"-").concat(l)))})};l.Z=e=>{let{title:l,variants:a,subComponent:s,isSubComponent:d,componentName:r}=e,[x,u]=(0,i.useState)(),b=(0,t.useRouter)();return(0,i.useEffect)(()=>{if(b.query){var e;let l=null===(e=b.query.page)||void 0===e?void 0:e.toString();l&&u(a.find(e=>e.name.toLowerCase()===l))}},[b]),(0,n.jsxs)(n.Fragment,{children:[x&&(0,n.jsx)("div",{children:(0,n.jsx)(c,{...x})}),!x&&!d&&(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:l}),(0,n.jsx)(p,{variants:a,componentName:r})]}),s]}),!x&&d&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:l}),(0,n.jsx)(p,{variants:a,componentName:r})]})]})}},7825:function(e,l,a){a.r(l);var n=a(52322),t=a(2784),i=a(9513),o=a(33878),s=a(95696),c=a(79041),p=a(16909),d=a(16134);l.default=()=>{let[e,l]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>l(!1),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Text</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Text</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <select\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>(Default) Text\n  </select>\n  <span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span>\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <select\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>(Default) Text\n  </select>\n  <span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span>\n</div>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Text\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Text\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Text</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Text</DBSelect>")},children:"Copy"})]})]})}),(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" icon=\"x_placeholder\">Text - Leading Icon</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" icon=\"x_placeholder\">Text - Leading Icon</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-select" data-icon="x_placeholder">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <select\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>Text - Leading Icon\n  </select>\n  <span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span>\n</div>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<div class="db-select" data-icon="x_placeholder">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <select\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>Text - Leading Icon\n  </select>\n  <span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span>\n</div>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  icon="x_placeholder"\n>\n  Text - Leading Icon\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  icon="x_placeholder"\n>\n  Text - Leading Icon\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" icon=\"x_placeholder\">Text - Leading Icon</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" icon=\"x_placeholder\">Text - Leading Icon</DBSelect>")},children:"Copy"})]})]})})]})}},77414:function(e,l,a){a.r(l);var n=a(52322),t=a(2784),i=a(9513),o=a(33878),s=a(95696),c=a(79041),p=a(16909),d=a(16134);l.default=()=>{let[e,l]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>l(!1),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Basic\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Basic\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</DBSelect>")},children:"Copy"})]})]})}),(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  message="Helper Message"\n>\n  Helper Message\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  message="Helper Message"\n>\n  Helper Message\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</DBSelect>")},children:"Copy"})]})]})})]})}},59657:function(e,l,a){a.r(l);var n=a(52322),t=a(2784),i=a(9513),o=a(33878),s=a(95696),c=a(79041),p=a(16909),d=a(16134);l.default=()=>{let[e,l]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>l(!1),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Label Above</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Label Above</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Label Above\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Label Above\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Label Above</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Label Above</DBSelect>")},children:"Copy"})]})]})}),(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Floating Label'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"floating\" value=\"Floating Label\">Floating Label</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Floating Label'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"floating\" value=\"Floating Label\">Floating Label</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Floating Label" }, { value: "Option 2" }]}\n  label="Label"\n  labelVariant="floating"\n  value="Floating Label"\n>\n  Floating Label\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Floating Label" }, { value: "Option 2" }]}\n  label="Label"\n  labelVariant="floating"\n  value="Floating Label"\n>\n  Floating Label\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Floating Label'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"floating\" value=\"Floating Label\">Floating Label</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Floating Label'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"floating\" value=\"Floating Label\">Floating Label</DBSelect>")},children:"Copy"})]})]})}),(0,n.jsx)(i.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"hidden\">Hidden Label</db-select>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"hidden\">Hidden Label</db-select>")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  labelVariant="hidden"\n>\n  Hidden Label\n</DBSelect>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  labelVariant="hidden"\n>\n  Hidden Label\n</DBSelect>')},children:"Copy"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"hidden\">Hidden Label</DBSelect>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{l(!0),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" labelVariant=\"hidden\">Hidden Label</DBSelect>")},children:"Copy"})]})]})})]})}},28213:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"Functional","className":"db-ui-functional","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"(Default) Regular","className":"db-ui-regular","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Expressive","className":"db-ui-expressive","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label Above","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Floating Label","style":{"width":"300px"},"props":{"options":[{"value":"Floating Label"},{"value":"Option 2"}],"label":"Label","labelVariant":"floating","value":"Floating Label"}},{"name":"Hidden Label","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","labelVariant":"hidden"}}]},{"name":"Variant Helper Message","examples":[{"name":"(Default) Basic","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Helper Message","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","message":"Helper Message"}}]},{"name":"Semantic","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","message":"Helper Message"}},{"name":"Critical","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"critical","message":"Critical Message"}},{"name":"Informational","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"informational","message":"Informational Message"}},{"name":"Successful","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"successful","message":"Successful Message"}},{"name":"Warning","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"warning","message":"Warning Message"}}]},{"name":"States Label Above","examples":[{"name":"(Default) Empty","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Filled","style":{"width":"300px"},"props":{"options":[{"value":"Filled"},{"value":"Option 2"}],"label":"Label","value":"Filled"}},{"name":"Filled - Invalid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Invalid"},{"value":"Option 2"}],"label":"Label","value":"Filled - Invalid","invalid":true}},{"name":"Filled - Valid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Valid"},{"value":"Option 2"}],"label":"Label","value":"Filled - Valid","invalid":false}},{"name":"Disabled","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","disabled":true}}]},{"name":"States Floating Label","examples":[{"name":"(Default) Empty","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","labelVariant":"floating"}},{"name":"Filled","style":{"width":"300px"},"props":{"options":[{"value":"Filled"},{"value":"Option 2"}],"label":"Label","value":"Filled","labelVariant":"floating"}},{"name":"Filled - Invalid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Invalid"},{"value":"Option 2"}],"label":"Label","invalid":true,"value":"Filled - Invalid","labelVariant":"floating"}},{"name":"Filled - Valid","style":{"width":"300px"},"props":{"options":[{"value":"Filled - Valid"},{"value":"Option 2"}],"label":"Label","value":"Filled - Valid","invalid":false,"labelVariant":"floating"}},{"name":"Disabled","style":{"width":"300px"},"props":{"options":[{"value":"Disabled"},{"value":"Option 2"}],"label":"Label","disabled":true,"labelVariant":"floating","value":"Disabled"}}]},{"name":"Content","examples":[{"name":"(Default) Text","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Text - Leading Icon","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","icon":"x_placeholder"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Required","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","required":true}},{"name":"Required - Filled","style":{"width":"300px"},"props":{"options":[{"value":"Required - Filled"},{"value":"Option 2"}],"label":"Label","value":"Required - Filled","required":true}}]}]')}}]);