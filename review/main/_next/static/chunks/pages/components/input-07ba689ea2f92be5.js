(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58367],{33137:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input",function(){return n(32593)}])},91359:function(a,e,n){"use strict";var t=n(5632),o=n(2784),i=n(43313);e.Z=()=>{let a=(0,t.useRouter)();return(0,o.useEffect)(()=>{if(a){let e=a.pathname.replace("/","").split("/"),n=e.length>0&&"components"===e[0],t=e.length>1?e[1]:void 0,o=e.length>2?e[2]:void 0,l=e.length>3?e[3]:void 0,s=a.asPath.split("?"),u=2===s.length?"?".concat(s[1]):"";if(n&&t){let e=[];o&&l?e.push(o,l):e.push("overview");let n=(0,i.vY)().find(a=>{var e;return null===(e=a.path)||void 0===e?void 0:e.endsWith(t)});(null==n?void 0:n.path)?a.push("".concat(n.path,"/").concat(e.join("/")).concat(u)):a.push("/")}}},[a]),null}},43313:function(a,e,n){"use strict";n.d(e,{Z6:function(){return t},vY:function(){return i},kn:function(){return s},vn:function(){return l}});let t=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Font Sizes",path:"/foundations/font-sizes",subNavigation:[{label:"Readme",path:"/foundations/font-sizes/readme"},{label:"Overview",path:"/foundations/font-sizes/overview"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Densities",path:"/foundations/densities",subNavigation:[{label:"Readme",path:"/foundations/densities/readme"},{label:"Examples",path:"/foundations/densities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},{label:"Router usage",path:"/components/router-usage"},{label:"Validation",path:"/components/validation"},...JSON.parse('[{"label":"Action","name":"action","path":"/components/action","subNavigation":[{"label":"DBButton","name":"button"},{"label":"DBLink","name":"link"}]},{"label":"Data-Display","path":"/components/data-display","name":"data-display","subNavigation":[{"label":"DBBrand","name":"brand"},{"label":"DBTooltip","name":"tooltip"},{"label":"DBInfotext","name":"infotext"},{"label":"DBTag","name":"tag"},{"label":"DBAccordion","name":"accordion","subNavigation":[{"label":"DBAccordionItem Properties","path":"/components/accordion-item/properties"}]},{"label":"DBTabs","name":"tabs","subNavigation":[{"label":"DBTabItem Properties","path":"/components/tab-item/properties"}]}]},{"label":"Data-Input","path":"/components/data-input","name":"data-input","subNavigation":[{"label":"DBCheckbox","name":"checkbox"},{"label":"DBInput","name":"input"},{"label":"DBRadio","name":"radio"},{"label":"DBSelect","name":"select"},{"label":"DBSwitch","name":"switch"},{"label":"DBTextarea","name":"textarea"}]},{"label":"Feedback","path":"/components/feedback","name":"feedback","subNavigation":[{"label":"DBNotification","name":"notification"},{"label":"DBBadge","name":"badge"}]},{"label":"Layout","path":"/components/layout","name":"layout","subNavigation":[{"label":"DBCard","name":"card"},{"label":"DBDivider","name":"divider"},{"label":"DBDrawer","name":"drawer"},{"label":"DBHeader","name":"header"},{"label":"DBSection","name":"section"}]},{"label":"Navigation","path":"/components/navigation","name":"navigation","subNavigation":[{"label":"DBNavigation","name":"navigation","subNavigation":[{"label":"DBNavigationItem Properties","path":"/components/navigation-item/properties"}]}]},{"label":"Utilities","path":"/components/utilities","name":"utilities","subNavigation":[{"label":"DBPopover","name":"popover"}]}]').map(a=>{var e;return{...a,subNavigation:null==a?void 0:null===(e=a.subNavigation)||void 0===e?void 0:e.map(e=>{var n;return{label:e.label,path:"/components/".concat(a.name,"/").concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(a.name,"/").concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(a.name,"/").concat(e.name,"/properties")},{label:"How to use",path:"/components/".concat(a.name,"/").concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(a.name,"/").concat(e.name,"/migration")},...null!==(n=e.subNavigation)&&void 0!==n?n:[]]}})}})]}],o=(a,e,n,t)=>{for(let l of a){var i;e.push(n?l:{...l,label:t?"".concat(t,":").concat(l.label):l.label}),l.subNavigation&&(null===(i=l.subNavigation)||void 0===i?void 0:i.length)>0&&o(l.subNavigation,e,n,n?void 0:l.label)}},i=a=>{let e=[];return o(t,e,a),e},l=a=>{let e=i().filter(a=>!a.subNavigation),n=e.findIndex(e=>e.path===a);return{previous:0===n?void 0:e[n-1],next:n+1===e.length?void 0:e[n+1]}},s=a=>i(!0).filter(e=>{var n;return a.includes(null!==(n=e.path)&&void 0!==n?n:"")})},32593:function(a,e,n){"use strict";n.r(e);var t=n(52322),o=n(91359);e.default=()=>(0,t.jsx)(o.Z,{})},5632:function(a,e,n){a.exports=n(69442)}},function(a){a.O(0,[92888,49774,40179],function(){return a(a.s=33137)}),_N_E=a.O()}]);