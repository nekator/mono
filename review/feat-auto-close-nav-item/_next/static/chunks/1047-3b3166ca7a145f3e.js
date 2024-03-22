"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1047],{37395:function(e,n,t){t.d(n,{P:function(){return a}});let a=(e,n,t)=>e.map((e,a)=>{var l;return{...e,slotCode:null!==(l=null==t?void 0:t.at(a))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var t,a,l,i;return{...e,example:n({...e.props,id:null!==(l=null===(t=e.props)||void 0===t?void 0:t.id)&&void 0!==l?l:e.name,children:null!==(i=null===(a=e.props)||void 0===a?void 0:a.children)&&void 0!==i?i:e.name})}})}})},99341:function(e,n,t){var a=t(52322),l=t(5632),i=t(2784),r=t(12156),s=t(53752);let d=e=>{let{examples:n,slotCode:t}=e,[l,r]=(0,i.useState)();return(0,a.jsxs)(s.f,{className:"variants-card db-code-docs",children:[(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))}),(0,a.jsxs)("details",{className:"code-details",onToggle:()=>{r(!l)},children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:l?"Hide code":"Show code"}),(0,a.jsxs)("div",{className:"db-ui-functional",children:[(0,a.jsx)("div",{className:"backdrop"}),(0,a.jsx)(s.f,{className:"code",spacing:"small",children:t})]})]})]})};n.Z=e=>{let{title:n,variants:t}=e,[c,o]=(0,i.useState)(),h=(0,l.useRouter)();(0,i.useEffect)(()=>{if(h.query){var e;let n=null===(e=h.query.page)||void 0===e?void 0:e.toString();n&&o(t.find(e=>e.name.toLowerCase()===n))}},[h]);let x=e=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(e.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(d,{...c})}),!c&&(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(s.vB,{content:"external",target:"_blank",href:x(e),children:e.name})}),(0,a.jsx)(d,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},87058:function(e,n,t){t.r(n);var a=t(52322),l=t(2784),i=t(9513),r=t(33878),s=t(95696),d=t(79041),c=t(16909),o=t(16134);n.default=()=>{let[e,n]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>n(!1),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(d.Z,{children:"Angular"}),(0,a.jsx)(d.Z,{children:"HTML"}),(0,a.jsx)(d.Z,{children:"React"}),(0,a.jsx)(d.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-alert type=\"alert\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\" [click]=\"()=>{alert('click close button')}\">Closable</db-alert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-alert type=\"alert\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\" [click]=\"()=>{alert('click close button')}\">Closable</db-alert>")},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div class="db-alert" data-type="alert">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">Closable</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n  <button\n    class="db-button db-alert-close is-icon-text-replace"\n    data-icon="close"\n    data-size="small"\n    data-variant="text"\n  >\n    Close Button\n  </button>\n</div>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<div class="db-alert" data-type="alert">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">Closable</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n  <button\n    class="db-button db-alert-close is-icon-text-replace"\n    data-icon="close"\n    data-size="small"\n    data-variant="text"\n  >\n    Close Button\n  </button>\n</div>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBAlert\n  type="alert"\n  headline="Headline"\n  link={{ href: "#", text: "Link" }}\n  onClick={() => {\n    alert("click close button")\n  }}\n>\n  Closable\n</DBAlert>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAlert\n  type="alert"\n  headline="Headline"\n  link={{ href: "#", text: "Link" }}\n  onClick={() => {\n    alert("click close button")\n  }}\n>\n  Closable\n</DBAlert>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBAlert type=\"alert\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\" :click=\"()=>{alert('click close button')}\">Closable</DBAlert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBAlert type=\"alert\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\" :click=\"()=>{alert('click close button')}\">Closable</DBAlert>")},children:"Copy"})]})]})}),(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(d.Z,{children:"Angular"}),(0,a.jsx)(d.Z,{children:"HTML"}),(0,a.jsx)(d.Z,{children:"React"}),(0,a.jsx)(d.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-alert type=\"alert\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\" behaviour=\"permanent\">Permanent</db-alert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-alert type=\"alert\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\" behaviour=\"permanent\">Permanent</db-alert>")},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div class="db-alert" data-type="alert">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">Permanent</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n</div>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<div class="db-alert" data-type="alert">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">Permanent</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n</div>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBAlert\n  type="alert"\n  headline="Headline"\n  link={{ href: "#", text: "Link" }}\n  behaviour="permanent"\n>\n  Permanent\n</DBAlert>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAlert\n  type="alert"\n  headline="Headline"\n  link={{ href: "#", text: "Link" }}\n  behaviour="permanent"\n>\n  Permanent\n</DBAlert>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBAlert type=\"alert\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\" behaviour=\"permanent\">Permanent</DBAlert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBAlert type=\"alert\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\" behaviour=\"permanent\">Permanent</DBAlert>")},children:"Copy"})]})]})})]})}},45169:function(e,n,t){t.r(n);var a=t(52322),l=t(2784),i=t(9513),r=t(33878),s=t(95696),d=t(79041),c=t(16909),o=t(16134);n.default=()=>{let[e,n]=(0,l.useState)();return(0,l.useEffect)(()=>{e&&setTimeout(()=>n(!1),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(d.Z,{children:"Angular"}),(0,a.jsx)(d.Z,{children:"HTML"}),(0,a.jsx)(d.Z,{children:"React"}),(0,a.jsx)(d.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-alert type=\"alert\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\">(Default) Alert</db-alert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-alert type=\"alert\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\">(Default) Alert</db-alert>")},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div class="db-alert" data-type="alert">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">(Default) Alert</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n  <button\n    class="db-button db-alert-close is-icon-text-replace"\n    data-icon="close"\n    data-size="small"\n    data-variant="text"\n  >\n    Close Button\n  </button>\n</div>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<div class="db-alert" data-type="alert">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">(Default) Alert</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n  <button\n    class="db-button db-alert-close is-icon-text-replace"\n    data-icon="close"\n    data-size="small"\n    data-variant="text"\n  >\n    Close Button\n  </button>\n</div>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBAlert type="alert" headline="Headline" link={{ href: "#", text: "Link" }}>\n  (Default) Alert\n</DBAlert>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAlert type="alert" headline="Headline" link={{ href: "#", text: "Link" }}>\n  (Default) Alert\n</DBAlert>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBAlert type=\"alert\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\">(Default) Alert</DBAlert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBAlert type=\"alert\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\">(Default) Alert</DBAlert>")},children:"Copy"})]})]})}),(0,a.jsx)(i.Z,{className:"tab-container",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(d.Z,{children:"Angular"}),(0,a.jsx)(d.Z,{children:"HTML"}),(0,a.jsx)(d.Z,{children:"React"}),(0,a.jsx)(d.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-alert type=\"inline\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\">Inline</db-alert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<db-alert type=\"inline\" headline=\"Headline\" [link]=\"{'href':'#','text':'Link'}\">Inline</db-alert>")},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div class="db-alert" data-type="inline">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">Inline</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n  <button\n    class="db-button db-alert-close is-icon-text-replace"\n    data-icon="close"\n    data-size="small"\n    data-variant="text"\n  >\n    Close Button\n  </button>\n</div>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<div class="db-alert" data-type="inline">\n  <strong class="db-alert-headline">Headline</strong>\n  <p class="db-alert-content">Inline</p>\n  <a\n    class="db-link db-alert-link"\n    href="#"\n    tabindex="0"\n    data-variant="inline"\n    data-content="internal"\n  >\n    <span>Link</span>\n  </a>\n  <button\n    class="db-button db-alert-close is-icon-text-replace"\n    data-icon="close"\n    data-size="small"\n    data-variant="text"\n  >\n    Close Button\n  </button>\n</div>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBAlert type="inline" headline="Headline" link={{ href: "#", text: "Link" }}>\n  Inline\n</DBAlert>'})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText('<DBAlert type="inline" headline="Headline" link={{ href: "#", text: "Link" }}>\n  Inline\n</DBAlert>')},children:"Copy"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBAlert type=\"inline\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\">Inline</DBAlert>"})}),(0,a.jsx)(o.Z,{className:"copy-button",noText:!0,icon:e?"done":"copy",variant:"text",onClick:()=>{n(!0),navigator.clipboard.writeText("<DBAlert type=\"inline\" headline=\"Headline\" :link=\"{'href':'#','text':'Link'}\">Inline</DBAlert>")},children:"Copy"})]})]})})]})}},86600:function(e){e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","style":{"width":"300px"},"className":"db-ui-functional","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"regular (Default)","style":{"width":"300px"},"className":"db-ui-regular","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"expressive","style":{"width":"300px"},"className":"db-ui-expressive","props":{"headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Type","examples":[{"name":"(Default) Alert","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Inline","style":{"width":"300px"},"props":{"type":"inline","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Variant","examples":[{"name":"(Default) Adaptive","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Neutral","style":{"width":"300px"},"props":{"type":"alert","variant":"neutral","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Critical","style":{"width":"300px"},"props":{"type":"alert","variant":"critical","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Informational","style":{"width":"300px"},"props":{"type":"alert","variant":"informational","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Successful","style":{"width":"300px"},"props":{"type":"alert","variant":"successful","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Warning","style":{"width":"300px"},"props":{"type":"alert","variant":"warning","headline":"Headline","link":{"href":"#","text":"Link"}}}]},{"name":"Content","examples":[{"name":"Headline & Text & Link & Icon","style":{"width":"300px"},"props":{"type":"alert","icon":"account","headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Headline & Text & Link","style":{"width":"300px"},"props":{"headline":"Headline","link":{"href":"#","text":"Link"}}},{"name":"Text & Link","style":{"width":"300px"},"props":{"link":{"href":"#","text":"Link"}}},{"name":"Text","style":{"width":"300px"},"props":{}}]},{"name":"Behaviour","examples":[{"name":"Closable","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"click":"()=>{alert(\\"click close button\\")}"}},{"name":"Permanent","style":{"width":"300px"},"props":{"type":"alert","headline":"Headline","link":{"href":"#","text":"Link"},"behaviour":"permanent"}}]}]')}}]);