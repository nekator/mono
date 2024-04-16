"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88582],{45016:function(e,a,l){l.d(a,{P:function(){return n}});let n=(e,a,l)=>e.map((e,n)=>{var t;return{...e,slotCode:null!==(t=null==l?void 0:l.at(n))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var l,n,t,s;return{...e,example:a({...e.props,id:null!==(t=null===(l=e.props)||void 0===l?void 0:l.id)&&void 0!==t?t:e.name,children:null!==(s=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==s?s:e.name})}})}})},47439:function(e,a,l){var n=l(52322),t=l(5632),s=l(2784),i=l(55216),r=l(3673);let d=e=>{let{examples:a,slotCode:l}=e,[t,i]=(0,s.useState)();return(0,n.jsxs)(r.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{i(!t)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:t?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(r.f,{className:"code",spacing:"small",children:l})]})]})]})},c=e=>{let{variants:a,componentName:l}=e,t=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let l=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return a?"".concat(l.split("components")[0],"/components/").concat(a).concat(n):"".concat(l).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:t(e,l),children:e.name})}),(0,n.jsx)(d,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:l,subComponent:r,isSubComponent:o,componentName:x}=e,[b,p]=(0,s.useState)(),u=(0,t.useRouter)();return(0,s.useEffect)(()=>{if(u.query){var e;let a=null===(e=u.query.page)||void 0===e?void 0:e.toString();a&&p(l.find(e=>e.name.toLowerCase()===a))}},[u]),(0,n.jsxs)(n.Fragment,{children:[b&&(0,n.jsx)("div",{children:(0,n.jsx)(d,{...b})}),!b&&!o&&(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:a}),(0,n.jsx)(c,{variants:l,componentName:x})]}),r]}),!b&&o&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:a}),(0,n.jsx)(c,{variants:l,componentName:x})]})]})}},89190:function(e,a,l){l.r(a);var n=l(52322),t=l(2784),s=l(70741),i=l(57092),r=l(57884),d=l(57284),c=l(49953),o=l(10326);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label">(Default) Optional</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label">(Default) Optional</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label">(Default) Optional</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label">(Default) Optional</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label">(Default) Optional</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label">(Default) Optional</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label">(Default) Optional</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label">(Default) Optional</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label">(Default) Optional</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label">(Default) Optional</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label">(Default) Optional</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label">(Default) Optional</DBTextarea>')},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label" [required]="true">Required</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label" [required]="true">Required</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label" [required]="true">Required</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label" [required]="true">Required</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    required=""\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    required=""\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    required=""\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div class="db-textarea">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label>\n  <textarea\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    required=""\n    placeholder=" "\n    rows="4"\n  ></textarea>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" required>\n  Required\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" required>\n  Required\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" required>\n  Required\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" required>\n  Required\n</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" :required="true">Required</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" :required="true">Required</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" :required="true">Required</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" :required="true">Required</DBTextarea>')},children:"Copy"})]})]})})]})}},6759:function(e,a,l){l.r(a);var n=l(52322),t=l(2784),s=l(70741),i=l(57092),r=l(57884),d=l(57284),c=l(49953),o=l(10326);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label">(Default) Basic</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label">(Default) Basic</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label">(Default) Basic</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label">(Default) Basic</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label">(Default) Basic</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label">(Default) Basic</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label">(Default) Basic</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label">(Default) Basic</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label">(Default) Basic</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label">(Default) Basic</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label">(Default) Basic</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label">(Default) Basic</DBTextarea>')},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label" message="Helper Message">\n  Helper Message\n</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label" message="Helper Message">\n  Helper Message\n</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label" message="Helper Message">\n  Helper Message\n</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label" message="Helper Message">\n  Helper Message\n</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" message="Helper Message">\n  Helper Message\n</DBTextarea>')},children:"Copy"})]})]})})]})}},98269:function(e,a,l){l.r(a);var n=l(52322),t=l(2784),s=l(70741),i=l(57092),r=l(57884),d=l(57284),c=l(49953),o=l(10326);a.default=()=>{let[e,a]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label">(Default) Label Above</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label">(Default) Label Above</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label">(Default) Label Above</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label">(Default) Label Above</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label">(Default) Label Above</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label">(Default) Label Above</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label">(Default) Label Above</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label">(Default) Label Above</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label">(Default) Label Above</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label">(Default) Label Above</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label">(Default) Label Above</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label">(Default) Label Above</DBTextarea>')},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" variant="floating" value="Floating Label">\n  Floating Label\n</DBTextarea>')},children:"Copy"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(d.Z,{children:"Angular"}),(0,n.jsx)(d.Z,{children:"HTML"}),(0,n.jsx)(d.Z,{children:"React"}),(0,n.jsx)(d.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-textarea label="Label" variant="hidden">\n  Hidden Label\n</db-textarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-textarea label="Label" variant="hidden">\n  Hidden Label\n</db-textarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<db-textarea label="Label" variant="hidden">\n  Hidden Label\n</db-textarea>'),navigator.clipboard.writeText('<db-textarea label="Label" variant="hidden">\n  Hidden Label\n</db-textarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"done":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>')},children:"Copy"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>'})}),(0,n.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>'===e?"done":"copy",variant:"ghost",onClick:()=>{a('<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>'),navigator.clipboard.writeText('<DBTextarea label="Label" variant="hidden">\n  Hidden Label\n</DBTextarea>')},children:"Copy"})]})]})})]})}},92829:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{"label":"Label"}},{"name":"(Default) Regular","className":"db-density-regular","props":{"label":"Label"}},{"name":"Expressive","className":"db-density-expressive","props":{"label":"Label"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label Above","props":{"label":"Label"}},{"name":"Floating Label","props":{"label":"Label","variant":"floating","value":"Floating Label"}},{"name":"Hidden Label","props":{"label":"Label","variant":"hidden"}}]},{"name":"Variant Helper Message","examples":[{"name":"(Default) Basic","props":{"label":"Label"}},{"name":"Helper Message","props":{"label":"Label","message":"Helper Message"}}]},{"name":"States Label Above","examples":[{"name":"(Default) Empty","props":{"label":"Label"}},{"name":"Filled","props":{"label":"Label","value":"Filled"}},{"name":"Disabled","props":{"label":"Label","disabled":true}},{"name":"Readonly - Filled","props":{"label":"Label","value":"Readonly - Filled","readOnly":true}}]},{"name":"States Floating Label","examples":[{"name":"(Default) Empty","props":{"label":"Label","variant":"floating"}},{"name":"Filled","props":{"label":"Label","value":"Filled","variant":"floating"}},{"name":"Disabled","props":{"label":"Label","disabled":true,"variant":"floating"}},{"name":"Readonly - Filled","props":{"label":"Label","value":"Readonly - Filled","readOnly":true,"variant":"floating"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"label":"Label"}},{"name":"Required","props":{"label":"Label","required":true}}]},{"name":"Rows","examples":[{"name":"(Default) 4 Rows","style":{"width":"328px"},"props":{"label":"(Default) 4 Rows","value":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{"name":"Custom","style":{"width":"328px"},"props":{"label":"Custom Example 8 Rows","rows":8,"value":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}}]}]')}}]);