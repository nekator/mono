(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5846],{10199:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/overview",function(){return t(83500)}])},44496:function(e,a,t){"use strict";t.d(a,{P:function(){return getVariants}});let getVariants=(e,a,t)=>e.map((e,n)=>{var c;return{...e,slotCode:null!==(c=null==t?void 0:t.at(n))&&void 0!==c?c:"No code available",examples:e.examples.map(e=>{var t,n;return{...e,example:a({...e.props,id:null!==(t=e.props.id)&&void 0!==t?t:e.name,children:null!==(n=e.props.children)&&void 0!==n?n:e.name})}})}})},2670:function(e,a,t){"use strict";var n=t(52322),c=t(5632),o=t(2784),i=t(2087),r=t(34636);let VariantList=e=>{let{examples:a,slotCode:t}=e;return(0,n.jsx)(r.wq,{className:"variants-card",slotCode:t,children:(0,n.jsx)("div",{className:"variants-list",children:a.map((e,a)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(a)))})})};a.Z=e=>{let{title:a,variants:t}=e,[d,l]=(0,o.useState)(),b=(0,c.useRouter)();(0,o.useEffect)(()=>{if(b.query){var e;let a=null===(e=b.query.page)||void 0===e?void 0:e.toString();if(a){let e=t.find(e=>e.name.toLowerCase()===a);l(e)}}},[b]);let getHref=e=>{var a,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(a=t.location)||void 0===a?void 0:a.href,"?page=").concat(e.name.toLowerCase()):""};return(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)("div",{children:(0,n.jsx)(VariantList,{...d})}),!d&&(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,n.jsx)("h1",{children:a}),null==t?void 0:t.map((e,a)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(r.vB,{content:"external",target:"_blank",href:getHref(e),children:e.name})}),(0,n.jsx)(VariantList,{...e})]},"".concat(e.name,"-").concat(a)))]})})]})}},83500:function(e,a,t){"use strict";t.r(a);var n=t(52322),c=t(45316),o=t(40641),i=t(63191),r=t(84948),d=t(22770),l=t(27992),b=t(77092),s=t(76151),h=t(2784),u=t(34636),v=t(2670),p=t(47837),m=t(44496);let getTag=e=>{let{variant:a,disabled:t,children:c,icon:o,overflow:i,noText:r,behaviour:d,emphasis:l,removeButton:b,checked:s,component:v}=e,[p,m]=(0,h.useState)(null!=s&&s);return(0,n.jsxs)(u.k8,{variant:a,disabled:t,icon:o,noText:r,behaviour:d,emphasis:l,overflow:i,removeButton:b,onRemove:()=>{alert(c.toString())},children:["button"===v&&(0,n.jsx)(u.Y1,{children:c}),"link"===v&&(0,n.jsx)(u.vB,{href:"#",children:c}),"checkbox"===v&&(0,n.jsx)(u.I3,{checked:p,onChange:e=>{m(e.target.checked)},children:c}),"radio"===v&&(0,n.jsx)(u.an,{checked:s,name:"radio",children:c}),!v&&!i&&(0,n.jsx)(n.Fragment,{children:c}),!v&&i&&(0,n.jsx)("span",{children:c})]})};a.default=()=>(0,n.jsx)(v.Z,{title:"DBTag",variants:(0,m.P)(p,getTag,[(0,n.jsx)(c.default,{}),(0,n.jsx)(o.default,{}),(0,n.jsx)(i.default,{}),(0,n.jsx)(r.default,{}),(0,n.jsx)(d.default,{}),(0,n.jsx)(l.default,{}),(0,n.jsx)(b.default,{}),(0,n.jsx)(s.default,{})])})},47837:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Emphasis","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"emphasis":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"emphasis":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","emphasis":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","emphasis":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","emphasis":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","emphasis":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive Button","props":{"component":"button"},"code":{"angular":"<db-tab><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tab\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Link","props":{"component":"link"},"code":{"angular":"<db-tab><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tab\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Checkbox","props":{"component":"checkbox"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Radio 1","props":{"component":"radio"},"code":{"angular":"<db-tab><db-radio>Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Radio 2","props":{"component":"radio","code":{"angular":"<db-tab><db-radio>Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>"}}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"component":"checkbox"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Checked","props":{"component":"checkbox","checked":true},"code":{"angular":"<db-tab><db-checkbox [checked]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input checked=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Disabled","props":{"component":"checkbox","checked":true,"disabled":true},"code":{"angular":"<db-tab><db-checkbox [checked]=\\"true\\" [disabled]=\\"true\\">Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input checked=\\"true\\" disabled=\\"true\\" type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox checked disabled>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox :checked=\\"true\\" :disabled=\\"true\\">Interactive Checkbox</DBCheckbox></DBTag>"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]},{"name":"Example","examples":[{"name":"Interactive Strong Button with Icon","props":{"component":"button","emphasis":"strong","icon":"account","behaviour":"removable"},"code":{"angular":"<db-tab><db-button>Interactive Button</db-button></db-tag>","html":"<div class=\\"db-tab\\"><button class=\\"db-button\\">Interactive Button</button></div>","react":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>","vue":"<DBTag><DBButton>Interactive Button</DBButton></DBTag>"}},{"name":"Interactive Strong Link with Icon","props":{"component":"link","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tab><db-link>Interactive Link</db-link></db-tag>","html":"<div class=\\"db-tab\\"><a class=\\"db-link\\">Interactive Link</a></div>","react":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>","vue":"<DBTag><DBLink>Interactive Link</DBLink></DBTag>"}},{"name":"Interactive Strong Checkbox with Icon","props":{"component":"checkbox","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tab><db-checkbox>Interactive Checkbox</db-checkbox></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"checkbox\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Checkbox</label></div>","react":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>","vue":"<DBTag><DBCheckbox>Interactive Checkbox</DBCheckbox></DBTag>"}},{"name":"Interactive Strong Radio 1 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account"},"code":{"angular":"<db-tab><db-radio>Interactive Radio 1</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 1</label></div>","react":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 1</DBRadio></DBTag>"}},{"name":"Interactive Strong Radio 2 with Icon","props":{"component":"radio","emphasis":"strong","icon":"account","code":{"angular":"<db-tab><db-radio>Interactive Radio 2</db-radio></db-tag>","html":"<div class=\\"db-tab\\"><input type=\\"radio\\" class=\\"db-checkbox\\" id=\\"checkbox-element\\" /><label for=\\"checkbox-element\\">Interactive Radio 2</label></div>","react":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>","vue":"<DBTag><DBRadio>Interactive Radio 2</DBRadio></DBTag>"}}}]}]')}},function(e){e.O(0,[64996,84375,2087,34636,63191,84948,76151,22770,27992,45316,40641,77092,49774,92888,40179],function(){return e(e.s=10199)}),_N_E=e.O()}]);