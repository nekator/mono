(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1859],{98863:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/overview",function(){return t(36348)}])},50115:function(e,a,t){"use strict";t.d(a,{Z:function(){return R}});var r=t(52322),n=t(5632),i=t(25237),s=t.n(i),o=t(2784),c=t(61183),l=t(39097),d=t.n(l),u=t(98072);let h=(0,o.forwardRef)(function(e,a){let t=a||(0,o.useRef)(a),[n,i]=(0,o.useState)(()=>!1),s=(0,o.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,o.useEffect)(()=>{i(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":n,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var _=t(68908),p=t(48483),m=t(90434),f=t(97689),g=t(85803),b=t(72288),v=t(76460),w=t(40245),x=t(29469);let j=(e,a,t)=>{if(!t.query.slug)return a.path===t.pathname;let{slug:r}=t.query,n=Array.isArray(r)?r:[r];return a.path==="/components/".concat(n.join("/"))},k=e=>{var a;let{navItem:t}=e,i=(0,n.useRouter)(),s=j(i.pathname,t,i);return(0,r.jsx)(x.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,r.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,r.jsx)(d(),{href:null!==(a=t.path)&&void 0!==a?a:"","aria-current":s?"page":void 0,children:t.label},"router-path-".concat(t.path))})};var y=()=>(0,r.jsx)(w.Z,{children:v.Z6.map(e=>(0,r.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),Z=t(35368),N=t(9842);let q=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},S="db-ui",E="mono";var I=()=>{let e=(0,n.useRouter)(),[a,t]=(0,o.useState)(),[i,s]=(0,o.useState)(),c=a=>{let t=e.basePath,r=a.find(e=>t.includes(e));r&&s(r)},l=(e,a)=>{let r=[],n=[],i=[],s=[],o=[],c=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?n.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?c.push(e):r.push(e);t({others:r,features:n,docs:c,refactors:s,issues:o,bugfixes:i,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(S,"/").concat(E,"/branches")),a=(await q("https://api.github.com/repos/".concat(S,"/").concat(E,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(a),l(a,t)})().catch(e=>{console.error(e)})},[]);let d=a=>{let t=e.asPath,r=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(S,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(a).concat(t)))};return a?(0,r.jsx)(N.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:i,onChange:e=>{d(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,r.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,r.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let z=e=>{var a,t;let{children:i,noNavigation:s}=e,[l,u]=(0,o.useState)(!1),[w,x]=(0,o.useState)(!1),[j,k]=(0,o.useState)(!1),[Z,N]=(0,o.useState)(!1),[q,S]=(0,o.useState)(),[E,z]=(0,o.useState)(),[R,W]=(0,o.useState)(),[A,C]=(0,o.useState)(),O=(0,n.useRouter)();return(0,o.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,o.useEffect)(()=>{if(O.query&&(O.query.fullscreen&&u("true"===O.query.fullscreen),O.query.page&&u(!0),O.query.noh1&&x("true"===O.query.noh1),O.query.properties&&k("true"===O.query.properties),O.query.current)){let a=Array.isArray(O.query.current)?O.query.current[0]:O.query.current;if(q!==a){var e;S(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=O.asPath.split("?")[0],{previous:t,next:r}=(0,v.vn)(a);z(t),W(r),C((0,v.kn)(a))},[O]),(0,r.jsxs)(r.Fragment,{children:[O.isReady&&l&&(0,r.jsx)("div",{className:"".concat(w?"noh1":""," ").concat(j?"is-properties":""),children:i}),O.isReady&&!l&&(0,r.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(_.Z,{drawerOpen:Z,onToggle:N,brand:(0,r.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(I,{}),children:(0,r.jsx)(y,{})}),children:[A&&A.length>1&&(0,r.jsx)(f.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==A?void 0:A.map(e=>{var a;return(0,r.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,r.jsx)(g.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(f.Z,{spacing:"none",width:"large",children:i}),!s&&(null!=E?E:R)&&(0,r.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(a=E.path)&&void 0!==a?a:"/",children:(0,r.jsxs)(b.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),R&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(t=R.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(b.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:R.label})]})})]})]})]})};var R=s()(async()=>z,{ssr:!1})},36348:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var r=t(52322),n=t(2784),i=t(50115),s=t(81893),o=t(9842),c=t(72288),l=t(85803),d=t(70938);let u=["ear","ear_disabled","person_with_blind_cane","person_with_rollator","person_with_wheelchair","support_dog","arrow_down","arrow_left","arrow_right","arrow_up","arrow_up_right","arrows_horizontal","arrows_vertical","chevron_down","chevron_left","chevron_right","chevron_up","circular_arrows","sort_down","sort_up","undo","fast_backward_10","fast_backward","fast_backward_30","fast_backward_empty","fast_forward_10","fast_forward","fast_forward_30","fast_forward_empty","microphone","pause","play","skip_backward","skip_forward","stop","subtitles","volume_disabled","volume_down","volume_silent","volume_up","house","market","train_station","cash","credit_card","discount","generic_card","gift","paragraph_mark","sepa","shopping_bag","shopping_basket","shopping_basket_disabled","shopping_cart","shopping_cart_disabled","ticket","tickets","voucher","chat","envelope","paper_plane","speech_bubble","speech_bubble_exclamation_mark","speech_bubble_question_mark","speech_bubbles","translation","alarm_clock","alarm_clock_plus","calendar","clock","camera","fax_machine","mobile_phone","mobile_phone_disabled","printer","telephone","bin","block","check","copy","cross","dots_drag_and_drop","minus","pen","pin","plus","save","cloud","globe","leaf","moon","snow_flake","sun","water_drop","cloud_download","cloud_upload","document","document_check","download","folder","folder_open","image","link_chain","notebook","paper_clip","upload","beverage","breakfast","cup","knife_and_fork","cigarette_disabled","clothes_hanger","hand_washing","person","persons","restricted_mobility_toilet","shower","shower_men","shower_women","stroller","toilet_men","toilet_women","toilets","toys","wc_sign","fullscreen","fullscreen_exit","grid","list","resize","resize_handle_corner","sliders_horizontal","zoom_in","zoom_out","db","s_bahn","subway","compass","location_arrow","location_arrow_north","location_crosshairs","location_pin","map","map_pin","navigation_straight","navigation_to_left","navigation_to_right","navigation_u_turn","parking","road_sign","station","mask","medical_cross","gear_wheel","log_in","log_out","magnifying_glass","menu","more_horizontal","more_vertical","bell","bell_disabled","check_circle","cross_circle","exclamation_mark_circle","exclamation_mark_triangle","information_circle","question_mark_circle","eye","eye_disabled","fingerprint","key","lock_closed","lock_open","shield_check","crown","face_delighted","face_disappointed","face_neutral","face_sad","face_smiling","heart","share","star","thumbs_down","thumbs_up","artificial_intelligence","augmented_reality","bug","database","light_bulb","power_socket","qr_code","qr_code_scan","speedometer","wifi","wifi_disabled","wrench","airplane","bike","bike_trailer","boat","bus","car","electric_car","electric_scooter","handcart","pedestrian","scooter","ship","taxi","train","train_and_car"];var h=()=>{let[e,a]=(0,n.useState)("24"),[t,h]=(0,n.useState)("default"),[_,p]=(0,n.useState)("");return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:"Icon overview"}),(0,r.jsxs)("p",{children:["We don't provide all icons with family ",(0,r.jsx)("code",{children:"filled"})]}),(0,r.jsx)("div",{className:"icons-filter-container",children:(0,r.jsxs)("search",{children:[(0,r.jsx)(s.Z,{label:"Search",type:"search",onChange:e=>{p(e.target.value)}}),(0,r.jsx)(o.Z,{label:"Icon weight",value:e,onChange:e=>{a(e.target.value)},children:[16,20,24,32].map(e=>(0,r.jsx)("option",{value:e,children:e}))}),(0,r.jsx)(o.Z,{label:"Icon family",value:t,onChange:e=>{h(e.target.value)},children:["default","filled"].map(e=>(0,r.jsx)("option",{value:e,children:e}))})]})}),(0,r.jsx)("div",{className:"icons-overview-container",style:{"--db-icon-font-family":"db-ux-".concat(t),"--db-icon-font-weight":e,"--db-icon-font-size":"".concat(e,"px")},children:u.filter(e=>e.includes(_)).map(e=>(0,r.jsxs)(c.Z,{spacing:"small",children:[(0,r.jsx)(l.Z,{icon:e,children:e}),(0,r.jsx)(d.Z,{semantic:"informational",icon:"none",children:e})]}))})]})}}},function(e){e.O(0,[6061,1954,4540,6460,2888,9774,179],function(){return e(e.s=98863)}),_N_E=e.O()}]);