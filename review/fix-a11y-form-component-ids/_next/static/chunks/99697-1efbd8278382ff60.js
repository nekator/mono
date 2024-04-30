"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99697],{45016:function(e,a,n){n.d(a,{P:function(){return c}});let c=(e,a,n)=>e.map((e,c)=>{var s;return{...e,slotCode:null!==(s=null==n?void 0:n.at(c))&&void 0!==s?s:"No code available",examples:e.examples.map(e=>{var n,c,s,i;return{...e,example:a({...e.props,id:null!==(s=null===(n=e.props)||void 0===n?void 0:n.id)&&void 0!==s?s:e.name,children:null!==(i=null===(c=e.props)||void 0===c?void 0:c.children)&&void 0!==i?i:e.name})}})}})},47439:function(e,a,n){var c=n(52322),s=n(5632),i=n(2784),l=n(55216),d=n(12480);let t=e=>{let{examples:a,slotCode:n}=e,[s,l]=(0,i.useState)();return(0,c.jsxs)(d.f,{className:"variants-card db-code-docs",children:[(0,c.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,c.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))}),(0,c.jsxs)("details",{className:"code-details",onToggle:()=>{l(!s)},children:[(0,c.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:s?"Hide code":"Show code"}),(0,c.jsxs)("div",{className:"db-density-functional",children:[(0,c.jsx)("div",{className:"backdrop"}),(0,c.jsx)(d.f,{className:"code",spacing:"small",children:n})]})]})]})},o=e=>{let{variants:a,componentName:n}=e,s=(e,a)=>{if(!window.location.origin||!window.location.href)return"";let n=window.location.href.split("?")[0],c="?page=".concat(e.name.toLowerCase());return a?"".concat(n.split("components")[0],"/components/").concat(a).concat(c):"".concat(n).concat(c)};return(0,c.jsx)(c.Fragment,{children:null==a?void 0:a.map((e,a)=>(0,c.jsxs)("div",{children:[(0,c.jsx)(d.oH,{}),(0,c.jsx)("h2",{children:(0,c.jsx)(d.vB,{content:"external",target:"_blank",href:s(e,n),children:e.name})}),(0,c.jsx)(t,{...e})]},"".concat(e.name,"-").concat(a)))})};a.Z=e=>{let{title:a,variants:n,subComponent:d,isSubComponent:b,componentName:h}=e,[x,r]=(0,i.useState)(),m=(0,s.useRouter)();return(0,i.useEffect)(()=>{if(m.query){var e;let a=null===(e=m.query.page)||void 0===e?void 0:e.toString();a&&r(n.find(e=>e.name.toLowerCase()===a))}},[m]),(0,c.jsxs)(c.Fragment,{children:[x&&(0,c.jsx)("div",{children:(0,c.jsx)(t,{...x})}),!x&&!b&&(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h1",{children:a}),(0,c.jsx)(o,{variants:n,componentName:h})]}),d]}),!x&&b&&(0,c.jsxs)("div",{className:"default-container",children:[(0,c.jsx)("h2",{children:a}),(0,c.jsx)(o,{variants:n,componentName:h})]})]})}},22390:function(e,a,n){n.r(a);var c=n(52322),s=n(2784),i=n(70741),l=n(57092),d=n(57884),t=n(57284),o=n(49953),b=n(10326);a.default=()=>{let[e,a]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{className:"tab-container",children:(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Content">(Default) Label</db-checkbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Content">(Default) Label</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-checkbox name="Content">(Default) Label</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Content">(Default) Label</db-checkbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-checkbox">\n  <label for="checkbox-6170394044467069">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6170394044467069"\n      name="Content"\n      aria-describedby="checkbox-6170394044467069-message checkbox-6170394044467069-valid-message checkbox-6170394044467069-invalid-message"\n    />\n    (Default) Label\n  </label>\n  <span\n    id="checkbox-6170394044467069-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6170394044467069-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<div class="db-checkbox">\n  <label for="checkbox-6170394044467069">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6170394044467069"\n      name="Content"\n      aria-describedby="checkbox-6170394044467069-message checkbox-6170394044467069-valid-message checkbox-6170394044467069-invalid-message"\n    />\n    (Default) Label\n  </label>\n  <span\n    id="checkbox-6170394044467069-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6170394044467069-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<div class="db-checkbox">\n  <label for="checkbox-6170394044467069">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6170394044467069"\n      name="Content"\n      aria-describedby="checkbox-6170394044467069-message checkbox-6170394044467069-valid-message checkbox-6170394044467069-invalid-message"\n    />\n    (Default) Label\n  </label>\n  <span\n    id="checkbox-6170394044467069-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6170394044467069-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div class="db-checkbox">\n  <label for="checkbox-6170394044467069">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6170394044467069"\n      name="Content"\n      aria-describedby="checkbox-6170394044467069-message checkbox-6170394044467069-valid-message checkbox-6170394044467069-invalid-message"\n    />\n    (Default) Label\n  </label>\n  <span\n    id="checkbox-6170394044467069-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6170394044467069-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Content">(Default) Label</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Content">(Default) Label</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Content">(Default) Label</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Content">(Default) Label</DBCheckbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Content">(Default) Label</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Content">(Default) Label</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Content">(Default) Label</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Content">(Default) Label</DBCheckbox>')},children:"Copy code"})]})]})}),(0,c.jsx)(i.Z,{className:"tab-container",children:(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Content" variant="hidden">\n  No Label\n</db-checkbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Content" variant="hidden">\n  No Label\n</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-checkbox name="Content" variant="hidden">\n  No Label\n</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Content" variant="hidden">\n  No Label\n</db-checkbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div data-variant="hidden" class="db-checkbox">\n  <label for="checkbox-6775844443871915">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6775844443871915"\n      name="Content"\n      aria-describedby="checkbox-6775844443871915-message checkbox-6775844443871915-valid-message checkbox-6775844443871915-invalid-message"\n    />\n    No Label\n  </label>\n  <span\n    id="checkbox-6775844443871915-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6775844443871915-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<div data-variant="hidden" class="db-checkbox">\n  <label for="checkbox-6775844443871915">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6775844443871915"\n      name="Content"\n      aria-describedby="checkbox-6775844443871915-message checkbox-6775844443871915-valid-message checkbox-6775844443871915-invalid-message"\n    />\n    No Label\n  </label>\n  <span\n    id="checkbox-6775844443871915-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6775844443871915-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<div data-variant="hidden" class="db-checkbox">\n  <label for="checkbox-6775844443871915">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6775844443871915"\n      name="Content"\n      aria-describedby="checkbox-6775844443871915-message checkbox-6775844443871915-valid-message checkbox-6775844443871915-invalid-message"\n    />\n    No Label\n  </label>\n  <span\n    id="checkbox-6775844443871915-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6775844443871915-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div data-variant="hidden" class="db-checkbox">\n  <label for="checkbox-6775844443871915">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-6775844443871915"\n      name="Content"\n      aria-describedby="checkbox-6775844443871915-message checkbox-6775844443871915-valid-message checkbox-6775844443871915-invalid-message"\n    />\n    No Label\n  </label>\n  <span\n    id="checkbox-6775844443871915-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-6775844443871915-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Content" variant="hidden">\n  No Label\n</DBCheckbox>')},children:"Copy code"})]})]})})]})}},10168:function(e,a,n){n.r(a);var c=n(52322),s=n(2784),i=n(70741),l=n(57092),d=n(57884),t=n(57284),o=n(49953),b=n(10326);a.default=()=>{let[e,a]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{className:"tab-container",children:(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Interaction States">(Default) Enabled</db-checkbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Interaction States">(Default) Enabled</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-checkbox name="Interaction States">(Default) Enabled</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Interaction States">(Default) Enabled</db-checkbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Interaction States">(Default) Enabled</DBCheckbox>')},children:"Copy code"})]})]})}),(0,c.jsx)(i.Z,{className:"tab-container",children:(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Interaction States" [disabled]="true">Disabled</db-checkbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Interaction States" [disabled]="true">Disabled</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-checkbox name="Interaction States" [disabled]="true">Disabled</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Interaction States" [disabled]="true">Disabled</db-checkbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{a("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Interaction States" disabled>\n  Disabled\n</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Interaction States" disabled>\n  Disabled\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Interaction States" disabled>\n  Disabled\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Interaction States" disabled>\n  Disabled\n</DBCheckbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Interaction States" :disabled="true">Disabled</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Interaction States" :disabled="true">Disabled</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Interaction States" :disabled="true">Disabled</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Interaction States" :disabled="true">Disabled</DBCheckbox>')},children:"Copy code"})]})]})})]})}},96969:function(e,a,n){n.r(a);var c=n(52322),s=n(2784),i=n(70741),l=n(57092),d=n(57884),t=n(57284),o=n(49953),b=n(10326);a.default=()=>{let[e,a]=(0,s.useState)();return(0,s.useEffect)(()=>{e&&setTimeout(()=>a(""),1500)},[e]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{className:"tab-container",children:(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Size">(Default) Medium</db-checkbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Size">(Default) Medium</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-checkbox name="Size">(Default) Medium</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Size">(Default) Medium</db-checkbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div class="db-checkbox">\n  <label for="checkbox-10816309674928237">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-10816309674928237"\n      name="Size"\n      aria-describedby="checkbox-10816309674928237-message checkbox-10816309674928237-valid-message checkbox-10816309674928237-invalid-message"\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="checkbox-10816309674928237-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-10816309674928237-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<div class="db-checkbox">\n  <label for="checkbox-10816309674928237">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-10816309674928237"\n      name="Size"\n      aria-describedby="checkbox-10816309674928237-message checkbox-10816309674928237-valid-message checkbox-10816309674928237-invalid-message"\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="checkbox-10816309674928237-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-10816309674928237-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<div class="db-checkbox">\n  <label for="checkbox-10816309674928237">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-10816309674928237"\n      name="Size"\n      aria-describedby="checkbox-10816309674928237-message checkbox-10816309674928237-valid-message checkbox-10816309674928237-invalid-message"\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="checkbox-10816309674928237-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-10816309674928237-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div class="db-checkbox">\n  <label for="checkbox-10816309674928237">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-10816309674928237"\n      name="Size"\n      aria-describedby="checkbox-10816309674928237-message checkbox-10816309674928237-valid-message checkbox-10816309674928237-invalid-message"\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="checkbox-10816309674928237-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-10816309674928237-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>')},children:"Copy code"})]})]})}),(0,c.jsx)(i.Z,{className:"tab-container",children:(0,c.jsxs)(l.Z,{children:[(0,c.jsxs)(d.Z,{children:[(0,c.jsx)(t.Z,{children:"Angular"}),(0,c.jsx)(t.Z,{children:"HTML"}),(0,c.jsx)(t.Z,{children:"React"}),(0,c.jsx)(t.Z,{children:"Vue"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-html",children:'<div data-size="small" class="db-checkbox">\n  <label for="checkbox-06519039463302234">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-06519039463302234"\n      name="Size"\n      aria-describedby="checkbox-06519039463302234-message checkbox-06519039463302234-valid-message checkbox-06519039463302234-invalid-message"\n    />\n    Small\n  </label>\n  <span\n    id="checkbox-06519039463302234-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-06519039463302234-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<div data-size="small" class="db-checkbox">\n  <label for="checkbox-06519039463302234">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-06519039463302234"\n      name="Size"\n      aria-describedby="checkbox-06519039463302234-message checkbox-06519039463302234-valid-message checkbox-06519039463302234-invalid-message"\n    />\n    Small\n  </label>\n  <span\n    id="checkbox-06519039463302234-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-06519039463302234-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<div data-size="small" class="db-checkbox">\n  <label for="checkbox-06519039463302234">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-06519039463302234"\n      name="Size"\n      aria-describedby="checkbox-06519039463302234-message checkbox-06519039463302234-valid-message checkbox-06519039463302234-invalid-message"\n    />\n    Small\n  </label>\n  <span\n    id="checkbox-06519039463302234-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-06519039463302234-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div data-size="small" class="db-checkbox">\n  <label for="checkbox-06519039463302234">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="checkbox-06519039463302234"\n      name="Size"\n      aria-describedby="checkbox-06519039463302234-message checkbox-06519039463302234-valid-message checkbox-06519039463302234-invalid-message"\n    />\n    Small\n  </label>\n  <span\n    id="checkbox-06519039463302234-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="checkbox-06519039463302234-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>')},children:"Copy code"})]}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)("pre",{children:(0,c.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'})}),(0,c.jsx)(b.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{a('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>')},children:"Copy code"})]})]})})]})}},46810:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{"name":"Density"}},{"name":"(Default) Regular","className":"db-density-regular","props":{"name":"Density"}},{"name":"Expressive","className":"db-density-expressive","props":{"name":"Density"}}]},{"name":"Interaction States","examples":[{"name":"(Default) Enabled","props":{"name":"Interaction States"}},{"name":"Disabled","props":{"name":"Interaction States","disabled":true}}]},{"name":"States","examples":[{"name":"(Default) Unchecked","props":{"name":"States"}},{"name":"Unchecked - Invalid","props":{"name":"States","required":true}},{"name":"Checked","props":{"name":"States","checked":true}},{"name":"Checked - Valid","props":{"name":"States","required":true,"checked":true}},{"name":"Indeterminate","props":{"name":"States","indeterminate":true}},{"name":"Indeterminate - Invalid","props":{"name":"States","indeterminate":true,"required":true}},{"name":"Indeterminate - Valid","props":{"name":"States","indeterminate":true,"required":true,"checked":true}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{"name":"Size"}},{"name":"Small","props":{"name":"Size","size":"small"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","props":{"name":"Requirement"}},{"name":"Required","props":{"name":"Requirement","required":true}},{"name":"Required - Indeterminate","props":{"name":"Requirement","indeterminate":true}}]},{"name":"Content","examples":[{"name":"(Default) Label","props":{"name":"Content"}},{"name":"No Label","props":{"name":"Content","variant":"hidden"}}]}]')}}]);