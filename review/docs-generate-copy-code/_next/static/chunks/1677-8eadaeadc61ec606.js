"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1677],{1677:function(e,n,a){a.r(n);var l=a(52322),i=a(2784),t=a(70741),s=a(57092),o=a(57884),d=a(57284),c=a(49953),p=a(50350),r=a(10326);n.default=()=>{let[e,n]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>n(""),1500)},[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Z,{className:"tab-container",children:(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(d.Z,{children:"Angular"}),(0,l.jsx)(d.Z,{children:"HTML"}),(0,l.jsx)(d.Z,{children:"React"}),(0,l.jsx)(d.Z,{children:"Vue"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=angular",children:"How to use this in angular"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</db-select>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</db-select>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</db-select>'),navigator.clipboard.writeText('<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</db-select>')},children:"Copy code"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=html",children:"How to use this in html"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    (Default) Optional</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    (Default) Optional</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    (Default) Optional</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>'),navigator.clipboard.writeText('<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    (Default) Optional</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>')},children:"Copy code"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=react",children:"How to use this in react"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Optional\n</DBSelect>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Optional\n</DBSelect>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Optional\n</DBSelect>'),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Optional\n</DBSelect>')},children:"Copy code"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=vue",children:"How to use this in vue"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</DBSelect>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</DBSelect>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</DBSelect>'),navigator.clipboard.writeText('<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label">\n(Default) Optional\n</DBSelect>')},children:"Copy code"})]})]})}),(0,l.jsx)(t.Z,{className:"tab-container",children:(0,l.jsxs)(s.Z,{children:[(0,l.jsxs)(o.Z,{children:[(0,l.jsx)(d.Z,{children:"Angular"}),(0,l.jsx)(d.Z,{children:"HTML"}),(0,l.jsx)(d.Z,{children:"React"}),(0,l.jsx)(d.Z,{children:"Vue"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=angular",children:"How to use this in angular"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" [required]="true">\nRequired\n</db-select>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" [required]="true">\nRequired\n</db-select>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" [required]="true">\nRequired\n</db-select>'),navigator.clipboard.writeText('<db-select [options]="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" [required]="true">\nRequired\n</db-select>')},children:"Copy code"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=html",children:"How to use this in html"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    required=""\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    Required</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    required=""\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    Required</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    required=""\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    Required</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>'),navigator.clipboard.writeText('<div class="db-select">\n  <label for="OVERWRITE_DEFAULT_ID">Label</label\n  ><select\n    aria-invalid="false"\n    required=""\n    id="OVERWRITE_DEFAULT_ID"\n    aria-describedby="OVERWRITE_DEFAULT_ID-placeholder"\n  >\n    <option hidden=""></option>\n    <option value="Option 1">Option 1</option>\n    <option value="Option 2">Option 2</option>\n    Required</select\n  ><span id="OVERWRITE_DEFAULT_ID-placeholder">Label</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n    >TODO: Add a validMessage</span\n  ><span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n    >TODO: Add an invalidMessage</span\n  >\n</div>')},children:"Copy code"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=react",children:"How to use this in react"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  required\n>\n  Required\n</DBSelect>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  required\n>\n  Required\n</DBSelect>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  required\n>\n  Required\n</DBSelect>'),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  required\n>\n  Required\n</DBSelect>')},children:"Copy code"})]}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(p.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/select/how-to-use?current=vue",children:"How to use this in vue"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" :required="true">\nRequired\n</DBSelect>'})}),(0,l.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" :required="true">\nRequired\n</DBSelect>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" :required="true">\nRequired\n</DBSelect>'),navigator.clipboard.writeText('<DBSelect :options="[{"value":"Option 1"},{"value":"Option 2"}]" label="Label" :required="true">\nRequired\n</DBSelect>')},children:"Copy code"})]})]})})]})}}}]);