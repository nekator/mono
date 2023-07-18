(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5581],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function d(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],d=n[0];return t.e(n[1]).then(function(){return t(d)})}d.keys=function(){return Object.keys(r)},d.id=83876,e.exports=d},39622:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/properties",function(){return t(18572)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(52322),d=t(77900),s=t(2784);let i=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var l=e=>{let{children:n,element:t="div",...r}=e,[d,l]=i();return d?(0,s.createElement)(t,{...r,children:n}):(0,s.createElement)(t,{...r,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],a=e=>({...e,link:"".concat("/mono/review/fix-npm-run-clean").concat(e.link)});t(60586);var o=t(5632);let h=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?h(e.children,n):[]})).map(e=>a(e)):[];var j=e=>{let{children:n}=e,[t,i]=(0,s.useState)(!1),[a,j]=(0,s.useState)(!1),[x,b]=(0,s.useState)(!1),u=(0,o.useRouter)();return(0,s.useEffect)(()=>{u.query&&(i("true"===u.query.fullscreen),j("true"===u.query.noh1),b("true"===u.query.properties))},[u]),(0,r.jsxs)(l,{children:[u.isReady&&t&&(0,r.jsx)("div",{className:"".concat(a?"noh1":""," ").concat(x?"is-properties":""),children:n}),u.isReady&&!t&&(0,r.jsxs)(d.rG,{children:[(0,r.jsxs)(d.ff,{slot:"header",children:[(0,r.jsx)(d.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(d.Pm,{data:JSON.stringify(h(c,u.pathname))}),(0,r.jsx)(d.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(d.fw,{slot:"footer",copyright:!0})]})]})}},18572:function(e,n,t){"use strict";t.r(n);var r=t(52322),d=t(45392),s=t(70969);let i=e=>{let{children:n}=e;return(0,r.jsx)(s.Z,{children:n})};function l(e){let n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"DBRadio"}),"\n",(0,r.jsx)(n.h2,{children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Options"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"describedbyid"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,r.jsx)(n.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"literal"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"'small'"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"children"}),(0,r.jsx)(n.td,{children:"default slot"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"className"}),(0,r.jsx)(n.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"key"}),(0,r.jsx)(n.td,{children:"React specific for render process."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stylePath"}),(0,r.jsx)(n.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabIndex"}),(0,r.jsxs)(n.td,{children:["The default tabindex (",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de"}),")."]}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"title"}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"placeholder"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxLength"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minLength"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"min"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pattern"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"change"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onChange"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blur"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onBlur"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"focus"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onFocus"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"validityChange"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{children:"function"}),(0,r.jsx)(n.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(valid: boolean) => void"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"defaultValue"}),(0,r.jsx)(n.td,{children:"React specific attribute to set default value."}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"disabled"}),(0,r.jsx)(n.td,{children:"The disabled attribute can be set to keep a user from clicking on the form element."}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"label"}),(0,r.jsx)(n.td,{children:"The label attribute specifies the caption of the form element."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"required"}),(0,r.jsx)(n.td,{children:"When the required attribute specified, the user will be required to fill the form element before submitting the form."}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"The value property is to receive results from the native form element."}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"invalid"}),(0,r.jsx)(n.td,{children:"Marks an input element as invalid."}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"checked"}),(0,r.jsx)(n.td,{children:"Define the radio or checkbox elements checked state"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(l,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=39622)}),_N_E=e.O()}]);