(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6450],{32701:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/validation",function(){return t(12944)}])},12944:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var a=t(31085),i=t(83952),s=t(71184);function r(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"validation",children:"Validation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The form components ",(0,a.jsx)(n.code,{children:"checkbox"}),", ",(0,a.jsx)(n.code,{children:"radio"}),", ",(0,a.jsx)(n.code,{children:"input"}),", ",(0,a.jsx)(n.code,{children:"textarea"})," & ",(0,a.jsx)(n.code,{children:"select"}),' have some sort of "auto-validation"']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"radio"})," do have a color change if you use the ",(0,a.jsx)(n.code,{children:"required"})," attribute. If you use ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation",children:(0,a.jsx)(n.code,{children:"required"})})," they will be highlighted directly"]}),"\n",(0,a.jsxs)(n.li,{children:["If you use ",(0,a.jsx)(n.code,{children:"required"})," on ",(0,a.jsx)(n.code,{children:"input"}),", ",(0,a.jsx)(n.code,{children:"textarea"})," or ",(0,a.jsx)(n.code,{children:"select"})," you will see invalid/valid states only on submitting or ",(0,a.jsx)(n.code,{children:"onchange"})]}),"\n",(0,a.jsxs)(n.li,{children:["There are some other attributes for ",(0,a.jsx)(n.code,{children:"input"})," (",(0,a.jsx)(n.code,{children:"type"}),",",(0,a.jsx)(n.code,{children:"minlength"}),",",(0,a.jsx)(n.code,{children:"maxlength"}),",",(0,a.jsx)(n.code,{children:"pattern"}),") and ",(0,a.jsx)(n.code,{children:"textarea"}),"(",(0,a.jsx)(n.code,{children:"minlength"}),",",(0,a.jsx)(n.code,{children:"maxlength"}),") which can be used for ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation",children:"validation"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," When you use some validation like ",(0,a.jsx)(n.code,{children:"required"})," for ",(0,a.jsx)(n.code,{children:"input"}),", ",(0,a.jsx)(n.code,{children:"textarea"})," or ",(0,a.jsx)(n.code,{children:"select"})," you need to provide a ",(0,a.jsx)(n.code,{children:"invalidMessage"})," (if needed, elsewhere we use the localized browser defaults, which might be fine on most cases) and a ",(0,a.jsx)(n.code,{children:"validMessage"}),". Otherwise, you will see a ",(0,a.jsx)(n.code,{children:"TODO"})," message to inform you that an additional property should be provided."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"validinvalid-messages",children:"Valid/Invalid Messages"}),"\n",(0,a.jsxs)(n.p,{children:["If you use some framework you can pass the props ",(0,a.jsx)(n.code,{children:"invalidMessage"})," and ",(0,a.jsx)(n.code,{children:"validMessage"})," to the component. If you use plain html you need to add 2 ",(0,a.jsx)(n.code,{children:".db-infotext"})," with ",(0,a.jsx)(n.code,{children:'[data-semantic="successful"]'})," &",(0,a.jsx)(n.code,{children:'[data-semantic="critical"]'})," inside your form-element."]}),"\n",(0,a.jsx)(n.h2,{id:"programmatically-set--handle-validation-by-yourself",children:"Programmatically set / handle validation by yourself"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"data-custom-validity|customValidity=\"'invalid' | 'valid' | 'no-validation'\""})," to disable ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid",children:(0,a.jsx)(n.code,{children:":user-valid"})}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," This may lead to problems and inconsistency, only use it if you know what you do, and have specific validation conditions that aren't possible to get defined by the huge range of already existing ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation",children:"validation conditions and patterns through attributs"}),"."]}),"\n"]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}var o=t(64286),c=t(64140),d=t(59916),h=t(95374);let u=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Example"}),(0,a.jsxs)("div",{className:"validity-container",children:[(0,a.jsxs)(o.A,{children:[(0,a.jsx)("h4",{children:"No customValidity"}),(0,a.jsx)(c.A,{semantic:"informational",children:(0,a.jsx)("span",{children:"default browser behaviour with auto changing colors"})}),(0,a.jsxs)("form",{children:[(0,a.jsx)(d.A,{label:"Required",placeholder:"Required",invalidMessage:"This is required",validMessage:"Success",required:!0}),(0,a.jsx)(h.A,{children:"Send"})]})]}),(0,a.jsxs)(o.A,{children:[(0,a.jsx)("h4",{children:"With customValidity (valid)"}),(0,a.jsx)(c.A,{semantic:"informational",children:(0,a.jsx)("span",{children:"fixed customValidity, no auto changing of colors and bad UX"})}),(0,a.jsxs)("form",{children:[(0,a.jsx)(d.A,{label:"Required",placeholder:"Required",invalidMessage:"This is required",validMessage:"Success",required:!0,customValidity:"valid"}),(0,a.jsx)(h.A,{children:"Send"})]})]})]})]}),x=e=>{let{children:n}=e;return(0,a.jsx)(i.A,{children:n})};function j(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{}),"\n",(0,a.jsx)(u,{})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(x,{...e,children:(0,a.jsx)(j,{...e})})}},83952:(e,n,t)=>{"use strict";t.d(n,{A:()=>I});var a=t(31085),i=t(31242),s=t(83894),r=t.n(s),l=t(14041),o=t(30127),c=t(34747),d=t.n(c),h=t(5188);let u=(0,l.forwardRef)(function(e,n){let t=n||(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>!1),r=(0,l.useRef)(!1);return r.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),r.current=!0),(0,l.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,l.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(i),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var x=t(23116),j=t(23944),m=t(95374),p=t(12764),v=t(80692),f=t(64286),g=t(42372),b=t(61338),y=t(6900);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,i=Array.isArray(a)?a:[a];return n.path==="/components/".concat(i.join("/"))},q=e=>{var n;let{navItem:t}=e,s=(0,i.useRouter)(),r=w(s.pathname,t,s);return(0,a.jsx)(y.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(q,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":r?"page":void 0,children:t.label},"router-path-".concat(t.path))})},A=()=>(0,a.jsx)(b.A,{children:g.bw.map(e=>(0,a.jsx)(q,{navItem:e},"router-path-".concat(e.path)))});var N=t(71651),_=t(47982);let S=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},k="db-ui",E="mono",R=()=>{let e=(0,i.useRouter)(),[n,t]=(0,l.useState)(),[s,r]=(0,l.useState)(),o=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&r(a)},c=(e,n)=>{let a=[],i=[],s=[],r=[],l=[],o=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?l.push(e):e.startsWith("docs")?o.push(e):a.push(e);t({others:a,features:i,docs:o,refactors:r,issues:l,bugfixes:s,versions:e})};(0,l.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(k,"/").concat(E,"/branches")),n=(await S("https://api.github.com/repos/".concat(k,"/").concat(E,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));n.push("latest"),o(t),o(n),c(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace((0,N.sanitize)("https://".concat(k,".github.io/").concat(E).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},F=e=>{var n,t;let{children:s,noNavigation:r}=e,[c,h]=(0,l.useState)(!1),[b,y]=(0,l.useState)(!1),[w,q]=(0,l.useState)(!1),[N,_]=(0,l.useState)(!1),[S,k]=(0,l.useState)(),[E,F]=(0,l.useState)(),[I,T]=(0,l.useState)(),[M,W]=(0,l.useState)(),O=(0,i.useRouter)();return(0,l.useEffect)(()=>{o.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),o.A.highlightAll()},[]),(0,l.useEffect)(()=>{if(O.query&&(O.query.fullscreen&&h("true"===O.query.fullscreen),O.query.page&&h(!0),O.query.noh1&&y("true"===O.query.noh1),O.query.properties&&q("true"===O.query.properties),O.query.current)){let n=Array.isArray(O.query.current)?O.query.current[0]:O.query.current;if(S!==n){var e;k(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=O.asPath.split("?")[0],{previous:t,next:a}=(0,g.Pb)(n);F(t),T(a),W((0,g.Oj)(n))},[O]),(0,a.jsxs)(a.Fragment,{children:[O.isReady&&c&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),O.isReady&&!c&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(x.A,{drawerOpen:N,onToggle:_,brand:(0,a.jsx)(j.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(m.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(R,{}),children:(0,a.jsx)(A,{})}),children:[M&&M.length>1&&(0,a.jsx)(p.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==M?void 0:M.map(e=>{var n;return(0,a.jsxs)(l.Fragment,{children:["/"!==e.path&&(0,a.jsx)(v.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(p.A,{spacing:"none",width:"large",children:s}),!r&&(null!=E?E:I)&&(0,a.jsxs)(p.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=E.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(f.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),I&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=I.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(f.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=r()(async()=>F,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>n(32701)),_N_E=e.O()}]);