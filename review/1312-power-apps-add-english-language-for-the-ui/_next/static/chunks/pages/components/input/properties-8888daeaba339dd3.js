(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5303],{83876:function(e,t,r){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return r.e(t[1]).then(function(){return r(i)})}i.keys=function(){return Object.keys(n)},i.id=83876,e.exports=i},87551:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input/properties",function(){return r(18643)}])},70969:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(52322),i=r(77900),a=r(2784);let d=()=>{let e=(0,a.useRef)(null),[t,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var t;let n=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";n&&r(!0)},[]),[t,e]};var s=e=>{let{children:t,element:r="div",...n}=e,[i,s]=d();return i?(0,a.createElement)(r,{...n,children:t}):(0,a.createElement)(r,{...n,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/1312-power-apps-add-english-language-for-the-ui").concat(e.link)});r(60586);var l=r(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>o(e)):[];var p=e=>{let{children:t}=e,[r,d]=(0,a.useState)(!1),[o,p]=(0,a.useState)(!1),[m,u]=(0,a.useState)(!1),b=(0,l.useRouter)();return(0,a.useEffect)(()=>{b.query&&(d("true"===b.query.fullscreen),p("true"===b.query.noh1),u("true"===b.query.properties))},[b]),(0,n.jsxs)(s,{children:[b.isReady&&r&&(0,n.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(m?"is-properties":""),children:t}),b.isReady&&!r&&(0,n.jsxs)(i.rG,{children:[(0,n.jsxs)(i.ff,{slot:"header",children:[(0,n.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(i.Pm,{data:JSON.stringify(h(c,b.pathname))}),(0,n.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:t}),(0,n.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})}},18643:function(e,t,r){"use strict";r.r(t);var n=r(52322),i=r(45392),a=r(70969);let d=e=>{let{children:t}=e;return(0,n.jsx)(a.Z,{children:t})};function s(e){let t=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code",em:"em"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"DBInput"}),"\n",(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Options"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dataList"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"Array"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsxs)("code",{className:"code-pre-wrap",children:["const array:KeyValueType[] = [{",(0,n.jsx)("br",{})," key: string;",(0,n.jsx)("br",{})," value?: string;",(0,n.jsx)("br",{}),"}]"]})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dataListId"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'text' | 'search' | 'number' | 'tel' | 'url' | 'email' | 'password' | 'hidden' | 'date' | 'datetime-local' | 'week'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"The value property is to receive results from the native form element."}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variant"}),(0,n.jsx)(t.td,{children:"The variant defines the default variants for most components."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'adaptive' | 'critical' | 'informational' | 'warning' | 'successful'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"children"}),(0,n.jsx)(t.td,{children:"default slot"}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"className"}),(0,n.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"describedbyid"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,n.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"key"}),(0,n.jsx)(t.td,{children:"React specific for render process."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stylePath"}),(0,n.jsx)(t.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tabIndex"}),(0,n.jsxs)(t.td,{children:["The default tabindex (",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de"}),")."]}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title"}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"placeholder"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxLength"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"minLength"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pattern"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"onChange"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"blur"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"onBlur"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"focus"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"onFocus"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"validityChange"}),(0,n.jsx)(t.td,{children:"No description"}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(valid: boolean) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"defaultValue"}),(0,n.jsx)(t.td,{children:"React specific attribute to set default value."}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"disabled"}),(0,n.jsx)(t.td,{children:"The disabled attribute can be set to keep a user from clicking on the form element."}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsx)(t.td,{children:"The label attribute specifies the caption of the form element."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"required"}),(0,n.jsx)(t.td,{children:"When the required attribute specified, the user will be required to fill the form element before submitting the form."}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"invalid"}),(0,n.jsx)(t.td,{children:"Marks an input element as invalid."}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"icon"}),(0,n.jsxs)(t.td,{children:["Define an icon by it's identifier (like e.g. ",(0,n.jsx)(t.em,{children:"account"}),", compare to ",(0,n.jsx)(t.a,{href:"https://db-ui.github.io/mono/review/main/foundations/icons",children:"Icons"})," to get displayed in front of the elements content."]}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:" | 'account' | 'add' | 'add-circle' | 'add-link' | 'alarm' | 'alarm-add' | 'alert' | 'alert-off' | 'attachment' | 'augmented-reality' | 'block' | 'bookmark' | 'bug' | 'build' | 'calendar' | 'camera' | 'cash' | 'check-circle' | 'cloud' | 'cloud-download' | 'cloud-upload' | 'compass' | 'copy' | 'credit-card' | 'dashboard' | 'delete' | 'discount' | 'document' | 'done' | 'download' | 'drag-and-drop' | 'edit' | 'face-neutral' | 'face-sad' | 'face-smiling' | 'filter' | 'fingerprint' | 'folder' | 'folder-open' | 'generic-card' | 'giftcard' | 'hearing' | 'hearing-disabled' | 'heart' | 'help' | 'image' | 'info' | 'key' | 'legal' | 'lightbulb' | 'lock-close' | 'lock-open' | 'logbook' | 'log-out' | 'minus' | 'pin' | 'print' | 'remove' | 'resize' | 'save' | 'schedule' | 'search' | 'send' | 'sepa' | 'settings' | 'share' | 'shopping-bag' | 'shopping-basket' | 'shopping-basket-disabled' | 'shopping-cart' | 'shopping-cart-disabled' | 'sort-down' | 'sort-up' | 'star' | 'swap-horizontal' | 'swap-vertical' | 'thumb-up' | 'thumb-up-down' | 'translation' | 'undo' | 'upload' | 'visibility' | 'visibility-off' | 'voucher' | 'website' | 'zoom-in' | 'zoom-out' | 'fast-backward-10' | 'fast-backward-30' | 'fast-backward-empty' | 'fast-forward-10' | 'fast-forward-30' | 'fast-forward-empty' | 'microphone' | 'pause' | 'play' | 'skip-backward' | 'skip-forward' | 'stop' | 'subtitles' | 'volume-down' | 'volume-mute' | 'volume-off' | 'volume-up' | 'logo' | 'call' | 'chat' | 'conversation' | 'fax' | 'feedback' | 'mail' | 'mobile-off' | 'mobile-phone' | 'question' | 'receive-item' | 'share-item' | 'wifi' | 'wifi-off' | 'mask' | 'playground' | 'restricted-mobility-toilet' | 'shower' | 'shower-men' | 'shower-women' | 'sink' | 'wc' | 'wc-men' | 'wc-sign' | 'wc-women' | 'air-condition' | 'buggy' | 'clothing-hanger' | 'day' | 'entry-aid' | 'environmental-mobility-check' | 'hydrogen' | 'luggage-compartment' | 'luggage-rack' | 'marketplace' | 'medical' | 'night' | 'no-smoking' | 'person-with-cane' | 'person-with-rollator' | 'platform' | 'power-outlet' | 'reservation' | 'standing-room' | 'support-dog' | 'breakfast' | 'coffee-cup' | 'drink' | 'restaurant' | 'database' | '1st-class' | '2nd-class' | 'alternative-connection' | 'booking' | 'capacity-indicator' | 'capacity-indicator-fully-booked' | 'capacity-indicator-high' | 'capacity-indicator-low' | 'destination' | 'intermediary-stop' | 'mixed-class' | 'monochrome-capacity-indicator-high' | 'monochrome-capacity-indicator-low' | 'monochrome-capacity-indicator-moderate' | 'round-trip' | 'single-trip' | 'start' | 'gps' | 'gps-north' | 'home' | 'map' | 'parking' | 'place' | 'set-position' | 'station' | 'stop-sign' | 'trainstation' | 'arrow-back' | 'arrow-down' | 'arrow-forward' | 'arrow-up' | 'cancel' | 'chevron-left' | 'chevron-right' | 'close' | 'expand-less' | 'expand-more' | 'fullscreen' | 'fullscreen-exit' | 'grid-view' | 'link' | 'link-external' | 'list' | 'menu' | 'more-horizontal' | 'more-vertical' | 'refresh' | 'error' | 'notify' | 'notify-cutoff' | 'warning' | 'aisle' | 'aisle-not-available' | 'bed' | 'childrens-compartment' | 'couchette' | 'elderly' | 'handicapped' | 'parent-child-compartment' | 'priority' | 'quiet-zone' | 'table' | 'window' | 'bahnbonus' | 'bahnbonus-card' | 'bahncard' | 'best-price' | 'commuter-ticket' | 'komfort-check-in' | 'komfort-check-in-check' | 'komfort-check-in-circle' | 'multiple-cards' | 'multiple-passenger' | 'my-travel' | 'outward-journey' | 'qr-code' | 'return-journey' | 'ticket' | 'ticket-discount' | 'ticket-multiple' | 'timetable' | 'time-outward-journey' | 'time-return-journey' | 'travel-insurance' | 'airplane-inverted' | 'bicycle-inverted' | 'bicycle-trailer-inverted' | 'call-a-bike-inverted' | 'carsharing-inverted' | 'car-inverted' | 'electric-locomotive-inverted' | 'electric-scooter-inverted' | 'ev-car-inverted' | 'ferry-inverted' | 'handcart-inverted' | 'ice-inverted' | 'intercity-train-inverted' | 'local-bus-inverted' | 'local-train-inverted' | 'long-distance-bus-inverted' | 'scooter-inverted' | 'speedboat-inverted' | 'subway-inverted' | 's-bahn-inverted' | 'taxi-inverted' | 'train-and-car-inverted' | 'tram-inverted' | 'walking-inverted' | 'airplane' | 'bicycle' | 'bicycle-trailer' | 'call-a-bike' | 'carsharing' | 'car' | 'car-sequence' | 'electric-locomotive' | 'electric-scooter' | 'ev-car' | 'ferry' | 'handcart' | 'ice' | 'ice-side-view' | 'intercity-train' | 'local-bus' | 'local-train' | 'long-distance-bus' | 'railroad-car' | 'rail-and-fly' | 'scooter' | 'sev' | 'speedboat' | 'sprinter' | 'subway' | 's-bahn' | 'taxi' | 'train-and-car' | 'tram' | 'walking'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"iconAfter"}),(0,n.jsxs)(t.td,{children:["Define an icon by it's identifier (like e.g. ",(0,n.jsx)(t.em,{children:"account"}),", compare to ",(0,n.jsx)(t.a,{href:"https://db-ui.github.io/mono/review/main/foundations/icons",children:"Icons"})," to get displayed in front of the elements content."]}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:" | 'account' | 'add' | 'add-circle' | 'add-link' | 'alarm' | 'alarm-add' | 'alert' | 'alert-off' | 'attachment' | 'augmented-reality' | 'block' | 'bookmark' | 'bug' | 'build' | 'calendar' | 'camera' | 'cash' | 'check-circle' | 'cloud' | 'cloud-download' | 'cloud-upload' | 'compass' | 'copy' | 'credit-card' | 'dashboard' | 'delete' | 'discount' | 'document' | 'done' | 'download' | 'drag-and-drop' | 'edit' | 'face-neutral' | 'face-sad' | 'face-smiling' | 'filter' | 'fingerprint' | 'folder' | 'folder-open' | 'generic-card' | 'giftcard' | 'hearing' | 'hearing-disabled' | 'heart' | 'help' | 'image' | 'info' | 'key' | 'legal' | 'lightbulb' | 'lock-close' | 'lock-open' | 'logbook' | 'log-out' | 'minus' | 'pin' | 'print' | 'remove' | 'resize' | 'save' | 'schedule' | 'search' | 'send' | 'sepa' | 'settings' | 'share' | 'shopping-bag' | 'shopping-basket' | 'shopping-basket-disabled' | 'shopping-cart' | 'shopping-cart-disabled' | 'sort-down' | 'sort-up' | 'star' | 'swap-horizontal' | 'swap-vertical' | 'thumb-up' | 'thumb-up-down' | 'translation' | 'undo' | 'upload' | 'visibility' | 'visibility-off' | 'voucher' | 'website' | 'zoom-in' | 'zoom-out' | 'fast-backward-10' | 'fast-backward-30' | 'fast-backward-empty' | 'fast-forward-10' | 'fast-forward-30' | 'fast-forward-empty' | 'microphone' | 'pause' | 'play' | 'skip-backward' | 'skip-forward' | 'stop' | 'subtitles' | 'volume-down' | 'volume-mute' | 'volume-off' | 'volume-up' | 'logo' | 'call' | 'chat' | 'conversation' | 'fax' | 'feedback' | 'mail' | 'mobile-off' | 'mobile-phone' | 'question' | 'receive-item' | 'share-item' | 'wifi' | 'wifi-off' | 'mask' | 'playground' | 'restricted-mobility-toilet' | 'shower' | 'shower-men' | 'shower-women' | 'sink' | 'wc' | 'wc-men' | 'wc-sign' | 'wc-women' | 'air-condition' | 'buggy' | 'clothing-hanger' | 'day' | 'entry-aid' | 'environmental-mobility-check' | 'hydrogen' | 'luggage-compartment' | 'luggage-rack' | 'marketplace' | 'medical' | 'night' | 'no-smoking' | 'person-with-cane' | 'person-with-rollator' | 'platform' | 'power-outlet' | 'reservation' | 'standing-room' | 'support-dog' | 'breakfast' | 'coffee-cup' | 'drink' | 'restaurant' | 'database' | '1st-class' | '2nd-class' | 'alternative-connection' | 'booking' | 'capacity-indicator' | 'capacity-indicator-fully-booked' | 'capacity-indicator-high' | 'capacity-indicator-low' | 'destination' | 'intermediary-stop' | 'mixed-class' | 'monochrome-capacity-indicator-high' | 'monochrome-capacity-indicator-low' | 'monochrome-capacity-indicator-moderate' | 'round-trip' | 'single-trip' | 'start' | 'gps' | 'gps-north' | 'home' | 'map' | 'parking' | 'place' | 'set-position' | 'station' | 'stop-sign' | 'trainstation' | 'arrow-back' | 'arrow-down' | 'arrow-forward' | 'arrow-up' | 'cancel' | 'chevron-left' | 'chevron-right' | 'close' | 'expand-less' | 'expand-more' | 'fullscreen' | 'fullscreen-exit' | 'grid-view' | 'link' | 'link-external' | 'list' | 'menu' | 'more-horizontal' | 'more-vertical' | 'refresh' | 'error' | 'notify' | 'notify-cutoff' | 'warning' | 'aisle' | 'aisle-not-available' | 'bed' | 'childrens-compartment' | 'couchette' | 'elderly' | 'handicapped' | 'parent-child-compartment' | 'priority' | 'quiet-zone' | 'table' | 'window' | 'bahnbonus' | 'bahnbonus-card' | 'bahncard' | 'best-price' | 'commuter-ticket' | 'komfort-check-in' | 'komfort-check-in-check' | 'komfort-check-in-circle' | 'multiple-cards' | 'multiple-passenger' | 'my-travel' | 'outward-journey' | 'qr-code' | 'return-journey' | 'ticket' | 'ticket-discount' | 'ticket-multiple' | 'timetable' | 'time-outward-journey' | 'time-return-journey' | 'travel-insurance' | 'airplane-inverted' | 'bicycle-inverted' | 'bicycle-trailer-inverted' | 'call-a-bike-inverted' | 'carsharing-inverted' | 'car-inverted' | 'electric-locomotive-inverted' | 'electric-scooter-inverted' | 'ev-car-inverted' | 'ferry-inverted' | 'handcart-inverted' | 'ice-inverted' | 'intercity-train-inverted' | 'local-bus-inverted' | 'local-train-inverted' | 'long-distance-bus-inverted' | 'scooter-inverted' | 'speedboat-inverted' | 'subway-inverted' | 's-bahn-inverted' | 'taxi-inverted' | 'train-and-car-inverted' | 'tram-inverted' | 'walking-inverted' | 'airplane' | 'bicycle' | 'bicycle-trailer' | 'call-a-bike' | 'carsharing' | 'car' | 'car-sequence' | 'electric-locomotive' | 'electric-scooter' | 'ev-car' | 'ferry' | 'handcart' | 'ice' | 'ice-side-view' | 'intercity-train' | 'local-bus' | 'local-train' | 'long-distance-bus' | 'railroad-car' | 'rail-and-fly' | 'scooter' | 'sev' | 'speedboat' | 'sprinter' | 'subway' | 's-bahn' | 'taxi' | 'train-and-car' | 'tram' | 'walking'"})})})]})]})]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(d,Object.assign({},e,{children:(0,n.jsx)(s,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=87551)}),_N_E=e.O()}]);