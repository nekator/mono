(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38164],{61523:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion/overview",function(){return e(74254)}])},37395:function(t,n,e){"use strict";e.d(n,{P:function(){return o}});let o=(t,n,e)=>t.map((t,o)=>{var c;return{...t,slotCode:null!==(c=null==e?void 0:e.at(o))&&void 0!==c?c:"No code available",examples:t.examples.map(t=>{var e,o,c,i;return{...t,example:n({...t.props,id:null!==(c=null===(e=t.props)||void 0===e?void 0:e.id)&&void 0!==c?c:t.name,children:null!==(i=null===(o=t.props)||void 0===o?void 0:o.children)&&void 0!==i?i:t.name})}})}})},99341:function(t,n,e){"use strict";var o=e(52322),c=e(5632),i=e(2784),d=e(23075),a=e(8674);let r=t=>{let{examples:n,slotCode:e}=t;return(0,o.jsx)(a.wq,{className:"variants-card",slotCode:e,children:(0,o.jsx)("div",{className:"variants-list",children:n.map((t,n)=>(0,o.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(n)))})})};n.Z=t=>{let{title:n,variants:e}=t,[m,l]=(0,i.useState)(),s=(0,c.useRouter)();(0,i.useEffect)(()=>{if(s.query){var t;let n=null===(t=s.query.page)||void 0===t?void 0:t.toString();n&&l(e.find(t=>t.name.toLowerCase()===n))}},[s]);let h=t=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(t.name.toLowerCase()):"";return(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)("div",{children:(0,o.jsx)(r,{...m})}),!m&&(0,o.jsx)(d.Z,{children:(0,o.jsxs)("div",{className:"default-container",children:[(0,o.jsx)("h1",{children:n}),null==e?void 0:e.map((t,n)=>(0,o.jsxs)("div",{children:[(0,o.jsx)(a.oH,{}),(0,o.jsx)("h2",{children:(0,o.jsx)(a.vB,{content:"external",target:"_blank",href:h(t),children:t.name})}),(0,o.jsx)(r,{...t})]},"".concat(t.name,"-").concat(n)))]})})]})}},74254:function(t,n,e){"use strict";e.r(n);var o=e(52322),c=e(62326),i=e(70798),d=e(8674),a=e(99341),r=e(7716),m=e(37395);let l=t=>{let{behaviour:n,children:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.EZ,{size:"small",variant:"informational",icon:"none",children:e}),(0,o.jsxs)(d.aw,{behaviour:n,children:[(0,o.jsx)(d.kC,{headline:"Item 1",content:"Content 1"}),(0,o.jsx)(d.kC,{headline:"Item 2",content:"Content 2"}),(0,o.jsx)(d.kC,{headline:"Item 3",content:"Content 3"})]})]})};n.default=()=>(0,o.jsx)(a.Z,{title:"DBAccordion",variants:(0,m.P)(r,l,[(0,o.jsx)(c.default,{}),(0,o.jsx)(i.default,{})])})},7716:function(t){"use strict";t.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{},"code":{"html":"The accordion is a pure JS Component","angular":"<db-accordion>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 1\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 1\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 2\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 2\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 3\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 3\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t</db-accordion>","react":"<DBAccordion>\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t</DBAccordion>","vue":"<DBAccordion>\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t\\t</DBAccordion>"}},{"name":"regular (Default)","className":"db-ui-regular","props":{},"code":{"html":"The accordion is a pure JS Component","angular":"<db-accordion>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 1\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 1\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 2\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 2\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 3\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 3\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t</db-accordion>","react":"<DBAccordion>\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t</DBAccordion>","vue":"<DBAccordion>\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t\\t</DBAccordion>"}},{"name":"expressive","className":"db-ui-expressive","props":{},"code":{"html":"The accordion is a pure JS Component","angular":"<db-accordion>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 1\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 1\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 2\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 2\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 3\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 3\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t</db-accordion>","react":"<DBAccordion>\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t</DBAccordion>","vue":"<DBAccordion>\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t\\t</DBAccordion>"}}]},{"name":"Behaviour","examples":[{"name":"Multiple (Default)","props":{"behaviour":"multiple"},"code":{"html":"The accordion is a pure JS Component","angular":"<db-accordion>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 1\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 1\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 2\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 2\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 3\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 3\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t</db-accordion>","react":"<DBAccordion>\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t</DBAccordion>","vue":"<DBAccordion>\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t\\t</DBAccordion>"}},{"name":"Single","props":{"behaviour":"single"},"code":{"html":"The accordion is a pure JS Component","angular":"<db-accordion behaviour=\\"single\\">\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 1\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 1\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 2\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 2\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t\\t<db-accordion-item\\n\\t\\t\\t\\t\\theadline=\\"Item 3\\"\\n\\t\\t\\t\\t\\tcontent=\\"Content 3\\"\\n\\t\\t\\t\\t></db-accordion-item>\\n\\t\\t\\t</db-accordion>","react":"<DBAccordion behaviour=\\"single\\">\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t</DBAccordion>","vue":"<DBAccordion behaviour=\\"single\\">\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 1\\" content=\\"Content 1\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 2\\" content=\\"Content 2\\" />\\n\\t\\t\\t\\t<DBAccordionItem headline=\\"Item 3\\" content=\\"Content 3\\" />\\n\\t\\t\\t</DBAccordion>"}}]}]')}},function(t){t.O(0,[64996,64037,23075,62326,70798,92888,49774,40179],function(){return t(t.s=61523)}),_N_E=t.O()}]);