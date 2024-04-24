"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13260],{45016:function(e,l,a){a.d(l,{P:function(){return n}});let n=(e,l,a)=>e.map((e,n)=>{var t;return{...e,slotCode:null!==(t=null==a?void 0:a.at(n))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a,n,t,s;return{...e,example:l({...e.props,id:null!==(t=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==t?t:e.name,children:null!==(s=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==s?s:e.name})}})}})},47439:function(e,l,a){var n=a(52322),t=a(5632),s=a(2784),i=a(55216),o=a(3673);let c=e=>{let{examples:l,slotCode:a}=e,[t,i]=(0,s.useState)();return(0,n.jsxs)(o.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:l.map((e,l)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(l)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{i(!t)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:t?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(o.f,{className:"code",spacing:"small",children:a})]})]})]})},p=e=>{let{variants:l,componentName:a}=e,t=(e,l)=>{if(!window.location.origin||!window.location.href)return"";let a=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return l?"".concat(a.split("components")[0],"/components/").concat(l).concat(n):"".concat(a).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==l?void 0:l.map((e,l)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(o.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(o.vB,{content:"external",target:"_blank",href:t(e,a),children:e.name})}),(0,n.jsx)(c,{...e})]},"".concat(e.name,"-").concat(l)))})};l.Z=e=>{let{title:l,variants:a,subComponent:o,isSubComponent:r,componentName:d}=e,[u,b]=(0,s.useState)(),v=(0,t.useRouter)();return(0,s.useEffect)(()=>{if(v.query){var e;let l=null===(e=v.query.page)||void 0===e?void 0:e.toString();l&&b(a.find(e=>e.name.toLowerCase()===l))}},[v]),(0,n.jsxs)(n.Fragment,{children:[u&&(0,n.jsx)("div",{children:(0,n.jsx)(c,{...u})}),!u&&!r&&(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:l}),(0,n.jsx)(p,{variants:a,componentName:d})]}),o]}),!u&&r&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:l}),(0,n.jsx)(p,{variants:a,componentName:d})]})]})}},61276:function(e,l,a){a.r(l);var n=a(52322),t=a(2784),s=a(70741),i=a(57092),o=a(57884),c=a(57284),p=a(49953),r=a(10326);l.default=()=>{let[e,l]=(0,t.useState)();return(0,t.useEffect)(()=>{e&&setTimeout(()=>l(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</db-select>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</db-select>"===e?"check":"copy",variant:"ghost",onClick:()=>{l("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</db-select>"),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</db-select>")},children:"Copy code"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{l("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Basic\n</DBSelect>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Basic\n</DBSelect>'===e?"check":"copy",variant:"ghost",onClick:()=>{l('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Basic\n</DBSelect>'),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n>\n  (Default) Basic\n</DBSelect>')},children:"Copy code"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</DBSelect>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</DBSelect>"===e?"check":"copy",variant:"ghost",onClick:()=>{l("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</DBSelect>"),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\">(Default) Basic</DBSelect>")},children:"Copy code"})]})]})}),(0,n.jsx)(s.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</db-select>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</db-select>"===e?"check":"copy",variant:"ghost",onClick:()=>{l("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</db-select>"),navigator.clipboard.writeText("<db-select [options]=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</db-select>")},children:"Copy code"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{l("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  message="Helper Message"\n>\n  Helper Message\n</DBSelect>'})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:'<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  message="Helper Message"\n>\n  Helper Message\n</DBSelect>'===e?"check":"copy",variant:"ghost",onClick:()=>{l('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  message="Helper Message"\n>\n  Helper Message\n</DBSelect>'),navigator.clipboard.writeText('<DBSelect\n  options={[{ value: "Option 1" }, { value: "Option 2" }]}\n  label="Label"\n  message="Helper Message"\n>\n  Helper Message\n</DBSelect>')},children:"Copy code"})]}),(0,n.jsxs)(p.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</DBSelect>"})}),(0,n.jsx)(r.Z,{className:"copy-button",noText:!0,icon:"<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</DBSelect>"===e?"check":"copy",variant:"ghost",onClick:()=>{l("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</DBSelect>"),navigator.clipboard.writeText("<DBSelect :options=\"[{'value':'Option 1'},{'value':'Option 2'}]\" label=\"Label\" message=\"Helper Message\">Helper Message</DBSelect>")},children:"Copy code"})]})]})})]})}},28213:function(e){e.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"(Default) Regular","className":"db-density-regular","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Expressive","className":"db-density-expressive","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}}]},{"name":"Variant Label","examples":[{"name":"(Default) Label Above","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Floating Label","style":{"width":"300px"},"props":{"options":[{"value":"Floating Label"},{"value":"Option 2"}],"label":"Label","variant":"floating","value":"Floating Label"}},{"name":"Hidden Label","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"hidden"}}]},{"name":"Variant Helper Message","examples":[{"name":"(Default) Basic","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Helper Message","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","message":"Helper Message"}}]},{"name":"States Label Above","examples":[{"name":"(Default) Empty","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Filled","style":{"width":"300px"},"props":{"options":[{"value":"Filled"},{"value":"Option 2"}],"label":"Label","value":"Filled"}},{"name":"Disabled","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","disabled":true}}]},{"name":"States Floating Label","examples":[{"name":"(Default) Empty","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","variant":"floating"}},{"name":"Filled","style":{"width":"300px"},"props":{"options":[{"value":"Filled"},{"value":"Option 2"}],"label":"Label","value":"Filled","variant":"floating"}},{"name":"Disabled","style":{"width":"300px"},"props":{"options":[{"value":"Disabled"},{"value":"Option 2"}],"label":"Label","disabled":true,"variant":"floating","value":"Disabled"}}]},{"name":"Content","examples":[{"name":"(Default) Text","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Text - Leading Icon","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","icon":"x_placeholder"}}]},{"name":"Requirement","examples":[{"name":"(Default) Optional","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label"}},{"name":"Required","style":{"width":"300px"},"props":{"options":[{"value":"Option 1"},{"value":"Option 2"}],"label":"Label","required":true}}]}]')}}]);