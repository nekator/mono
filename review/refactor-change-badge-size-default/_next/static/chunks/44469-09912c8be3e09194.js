"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44469],{37395:function(e,a,n){n.d(a,{P:function(){return i}});let i=(e,a,n)=>e.map((e,i)=>{var l;return{...e,slotCode:null!==(l=null==n?void 0:n.at(i))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var n,i,l,r;return{...e,example:a({...e.props,id:null!==(l=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==l?l:e.name,children:null!==(r=null===(i=e.props)||void 0===i?void 0:i.children)&&void 0!==r?r:e.name})}})}})},99341:function(e,a,n){var i=n(52322),l=n(5632),r=n(2784),d=n(11803),t=n(86095);let o=e=>{let{examples:a,slotCode:n}=e,[l,d]=(0,r.useState)();return(0,i.jsxs)(t.f,{className:"variants-card db-code-docs",children:[(0,i.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,i.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,i.jsxs)("details",{className:"code-details",onToggle:()=>{d(!l)},children:[(0,i.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:l?"Hide code":"Show code"}),(0,i.jsxs)("div",{className:"db-ui-functional",children:[(0,i.jsx)("div",{className:"backdrop"}),(0,i.jsx)(t.f,{className:"code",spacing:"small",children:n})]})]})]})};a.Z=e=>{let{title:a,variants:n}=e,[s,c]=(0,r.useState)(),x=(0,l.useRouter)();(0,r.useEffect)(()=>{if(x.query){var e;let a=null===(e=x.query.page)||void 0===e?void 0:e.toString();a&&c(n.find(e=>e.name.toLowerCase()===a))}},[x]);let h=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsx)("div",{children:(0,i.jsx)(o,{...s})}),!s&&(0,i.jsx)(d.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:a}),null==n?void 0:n.map((e,a)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(t.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(t.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,i.jsx)(o,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},25619:function(e,a,n){n.r(a);var i=n(52322),l=n(2784),r=n(9513),d=n(33878),t=n(95696),o=n(79041),s=n(16909),c=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Requirement">(Default) Optional</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Requirement">(Default) Optional</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="Requirement" />\n  (Default) Optional\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="Requirement" />\n  (Default) Optional\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Requirement">(Default) Optional</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Requirement">(Default) Optional</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Requirement">(Default) Optional</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Requirement">(Default) Optional</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Requirement" [required]="true" [invalid]="true">Required</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Requirement" [required]="true" [invalid]="true">Required</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Requirement"\n    aria-invalid="true"\n    required=""\n  />\n  Required\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Requirement"\n    aria-invalid="true"\n    required=""\n  />\n  Required\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Requirement" required invalid>\n  Required\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Requirement" required invalid>\n  Required\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Requirement" :required="true" :invalid="true">Required</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Requirement" :required="true" :invalid="true">Required</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Requirement" [required]="true" [checked]="true">Required - Checked</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Requirement" [required]="true" [checked]="true">Required - Checked</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Requirement"\n    required=""\n    checked=""\n  />\n  Required - Checked\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Requirement"\n    required=""\n    checked=""\n  />\n  Required - Checked\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Requirement" required checked>\n  Required - Checked\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Requirement" required checked>\n  Required - Checked\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Requirement" :required="true" :checked="true">Required - Checked</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Requirement" :required="true" :checked="true">Required - Checked</DBRadio>')},children:"Copy"})]})]})})]})}},26328:function(e,a,n){n.r(a);var i=n(52322),l=n(2784),r=n(9513),d=n(33878),t=n(95696),o=n(79041),s=n(16909),c=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Size">Default</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Size">Default</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="Size" />\n  Default\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="Size" />\n  Default\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Size">Default</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Size">Default</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Size">Default</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Size">Default</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Size" size="small">\n  Small\n</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Size" size="small">\n  Small\n</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label data-size="small" class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="Size" />\n  Small\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label data-size="small" class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="Size" />\n  Small\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Size" size="small">\n  Small\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Size" size="small">\n  Small\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Size" size="small">\n  Small\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Size" size="small">\n  Small\n</DBRadio>')},children:"Copy"})]})]})})]})}},81581:function(e,a,n){n.r(a);var i=n(52322),l=n(2784),r=n(9513),d=n(33878),t=n(95696),o=n(79041),s=n(16909),c=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="States">Default</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="States">Default</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="States" />\n  Default\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="States" />\n  Default\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="States">Default</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="States">Default</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="States">Default</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="States">Default</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="States" [checked]="true">Checked</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="States" [checked]="true">Checked</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="States" checked="" />\n  Checked\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="States" checked="" />\n  Checked\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="States" checked>\n  Checked\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="States" checked>\n  Checked\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="States" :checked="true">Checked</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="States" :checked="true">Checked</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="States" [disabled]="true">Disabled</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="States" [disabled]="true">Disabled</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="States" disabled="" />\n  Disabled\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input type="radio" id="OVERWRITE_DEFAULT_ID" name="States" disabled="" />\n  Disabled\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="States" disabled>\n  Disabled\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="States" disabled>\n  Disabled\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="States" :disabled="true">Disabled</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="States" :disabled="true">Disabled</DBRadio>')},children:"Copy"})]})]})})]})}},79174:function(e,a,n){n.r(a);var i=n(52322),l=n(2784),r=n(9513),d=n(33878),t=n(95696),o=n(79041),s=n(16909),c=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Tonality" value="functional">\n  functional\n</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Tonality" value="functional">\n  functional\n</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Tonality"\n    value="functional"\n  />\n  functional\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Tonality"\n    value="functional"\n  />\n  functional\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Tonality" value="functional">\n  functional\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Tonality" value="functional">\n  functional\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Tonality" value="functional">\n  functional\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Tonality" value="functional">\n  functional\n</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Tonality" value="regular">\n  regular (Default)\n</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Tonality" value="regular">\n  regular (Default)\n</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Tonality"\n    value="regular"\n  />\n  regular (Default)\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Tonality"\n    value="regular"\n  />\n  regular (Default)\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Tonality" value="regular">\n  regular (Default)\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Tonality" value="regular">\n  regular (Default)\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Tonality" value="regular">\n  regular (Default)\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Tonality" value="regular">\n  regular (Default)\n</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Tonality" value="expressive">\n  expressive\n</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Tonality" value="expressive">\n  expressive\n</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Tonality"\n    value="expressive"\n  />\n  expressive\n</label>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<label class="db-radio" for="OVERWRITE_DEFAULT_ID">\n  <input\n    type="radio"\n    id="OVERWRITE_DEFAULT_ID"\n    name="Tonality"\n    value="expressive"\n  />\n  expressive\n</label>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Tonality" value="expressive">\n  expressive\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Tonality" value="expressive">\n  expressive\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Tonality" value="expressive">\n  expressive\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Tonality" value="expressive">\n  expressive\n</DBRadio>')},children:"Copy"})]})]})})]})}},91120:function(e,a,n){n.r(a);var i=n(52322),l=n(2784),r=n(9513),d=n(33878),t=n(95696),o=n(79041),s=n(16909),c=n(16134);a.default=()=>{let[e,a]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>a(!1),1500)},[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Content">(Default) Label</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Content">(Default) Label</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Content">(Default) Label</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Content">(Default) Label</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Content">(Default) Label</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Content">(Default) Label</DBRadio>')},children:"Copy"})]})]})}),(0,i.jsx)(r.Z,{className:"tab-container",children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(t.Z,{children:[(0,i.jsx)(o.Z,{children:"Angular"}),(0,i.jsx)(o.Z,{children:"HTML"}),(0,i.jsx)(o.Z,{children:"React"}),(0,i.jsx)(o.Z,{children:"Vue"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Content" labelVariant="hidden">\n  Hidden Label\n</db-radio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<db-radio name="Content" labelVariant="hidden">\n  Hidden Label\n</db-radio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Content" labelVariant="hidden">\n  Hidden Label\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Content" labelVariant="hidden">\n  Hidden Label\n</DBRadio>')},children:"Copy"})]}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Content" labelVariant="hidden">\n  Hidden Label\n</DBRadio>'})}),(0,i.jsx)(c.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{a(!0),navigator.clipboard.writeText('<DBRadio name="Content" labelVariant="hidden">\n  Hidden Label\n</DBRadio>')},children:"Copy"})]})]})})]})}},81566:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"name":"Tonality","value":"functional"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"name":"Tonality","value":"regular"}},{"name":"expressive","className":"db-ui-expressive","props":{"name":"Tonality","value":"expressive"}}]},{"name":"States","examples":[{"name":"Default","props":{"name":"States"}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Disabled","props":{"name":"States","disabled":true}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"name":"Requirement"}},{"name":"Required","props":{"name":"Requirement","required":true,"invalid":true}},{"name":"Required - Checked","props":{"name":"Requirement","required":true,"checked":true}}]},{"name":"Size","examples":[{"name":"Default","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label","props":{"name":"Content"}},{"name":"Hidden Label","props":{"name":"Content","labelVariant":"hidden"}}]}]')}}]);