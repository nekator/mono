(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5846],{10199:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/overview",function(){return t(15963)}])},56311:function(e,a,t){"use strict";t.d(a,{P:function(){return n}});let n=(e,a,t)=>e.map((e,n)=>{var o;return{...e,slotCode:null!==(o=null==t?void 0:t.at(n))&&void 0!==o?o:"No code available",examples:e.examples.map(e=>{var t,n;return{...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},60955:function(e,a,t){"use strict";var n=t(52322),o=t(5632),c=t(2784),i=t(64508),r=t(88451);let d=e=>{let{examples:a,slotCode:t}=e;return(0,n.jsx)(r.wq,{className:"variants-card",slotCode:t,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:t}=e,[l,s]=(0,c.useState)(),b=(0,o.useRouter)();(0,c.useEffect)(()=>{if(b.query){var e;let a=null===(e=b.query.page)||void 0===e?void 0:e.toString();a&&s(t.find(e=>e.name.toLowerCase()===a))}},[b]);let h=e=>{var a,t;if(window.location.origin&&(null===(t=window)||void 0===t?void 0:null===(a=t.location)||void 0===a?void 0:a.href)){let a=window.location.href.includes("?")?window.location.href.split("?")[0]:window.location.href;return"".concat(a,"?page=").concat(e.name.toLowerCase())}return""};return(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)("div",{children:(0,n.jsx)(d,{...l})}),!l&&(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:a}),null==t?void 0:t.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:h(e),children:e.name})}),(0,n.jsx)(d,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},15963:function(e,a,t){"use strict";t.r(a);var n=t(52322),o=t(21519),c=t(44736),i=t(85642),r=t(64355),d=t(94266),l=t(67064),s=t(95591),b=t(33329),h=t(2784),u=t(88451),v=t(60955),p=t(47837),m=t(56311);let x=e=>{let{variant:a,disabled:t,children:o,icon:c,overflow:i,noText:r,behaviour:d,emphasis:l,removeButton:s,checked:b,component:v}=e,[p,m]=(0,h.useState)(null!=b&&b);return(0,n.jsxs)(u.k8,{variant:a,disabled:t,icon:c,noText:r,behaviour:d,emphasis:l,overflow:i,removeButton:s,onRemove:()=>{alert(o.toString())},children:["button"===v&&(0,n.jsx)(u.Y1,{children:o}),"link"===v&&(0,n.jsx)(u.vB,{href:"#",children:o}),"checkbox"===v&&(0,n.jsx)(u.I3,{checked:p,onChange:e=>{m(e.target.checked)},children:o}),"radio"===v&&(0,n.jsx)(u.an,{checked:b,name:"radio",children:o}),!v&&!i&&(0,n.jsx)(n.Fragment,{children:o}),!v&&i&&(0,n.jsx)("span",{children:o})]})};a.default=()=>(0,n.jsx)(v.Z,{title:"DBTag",variants:(0,m.P)(p,x,[(0,n.jsx)(o.default,{}),(0,n.jsx)(c.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(d.default,{}),(0,n.jsx)(l.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(b.default,{})])})},47837:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Adaptive (Default)","props":{}},{"name":"Neutral Strong","props":{"variant":"neutral"}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Adaptive Strong","props":{"emphasis":"strong"}},{"name":"Neutral Strong","props":{"variant":"neutral","emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive Button","props":{"component":"button"},"code":{"angular":"<db-tab><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tab\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Link","props":{"component":"link"},"code":{"angular":"<db-tab><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tab\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Checkbox","props":{"component":"checkbox"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Radio 1","props":{"component":"radio"},"code":{"angular":"<db-tab><db-radio>Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Radio 2","props":{"component":"radio","code":{"angular":"<db-tab><db-radio>Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>"}}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"component":"checkbox"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Checked","props":{"component":"checkbox","checked":true},"code":{"angular":"<db-tab><db-checkbox [checked]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input checked=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Disabled","props":{"component":"checkbox","checked":true,"disabled":true},"code":{"angular":"<db-tab><db-checkbox [checked]=\\"true\\" [disabled]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input checked=\\"true\\" disabled=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked disabled>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\" :disabled=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]},{"name":"Example","examples":[{"name":"Interactive Strong Button with Icon","props":{"component":"button","emphasis":"strong","icon":"account","behaviour":"removable"},"code":{"angular":"<db-tab><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tab\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Strong Link with Icon","props":{"component":"link","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tab><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tab\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Strong Checkbox with Icon","props":{"component":"checkbox","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Strong Radio 1 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tab><db-radio>Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Strong Radio 2 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account","code":{"angular":"<db-tab><db-radio>Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>"}}}]}]')}},function(e){e.O(0,[64996,23019,88451,64508,85642,64355,33329,94266,67064,21519,44736,95591,49774,92888,40179],function(){return e(e.s=10199)}),_N_E=e.O()}]);