(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5303],{83876:function(e,t,n){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],i=t[0];return n.e(t[1]).then(function(){return n(i)})}i.keys=function(){return Object.keys(r)},i.id=83876,e.exports=i},87551:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input/properties",function(){return n(55118)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(52322),i=n(77900),d=n(2784);let s=()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{var t;let r=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";r&&n(!0)},[]),[t,e]},l=e=>{let{children:t,element:n="div",...r}=e,[i,l]=s();return i?(0,d.createElement)(n,{...r,children:t}):(0,d.createElement)(n,{...r,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],a=e=>({...e,link:"".concat("/mono/review/596-tag").concat(e.link)});n(60586);var o=n(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>a(e)):[],j=e=>{let{children:t}=e,[n,s]=(0,d.useState)(!1),[a,j]=(0,d.useState)(!1),[x,_]=(0,d.useState)(!1),p=(0,o.useRouter)();return(0,d.useEffect)(()=>{p.query&&(s("true"===p.query.fullscreen),j("true"===p.query.noh1),_("true"===p.query.properties))},[p]),(0,r.jsxs)(l,{children:[p.isReady&&n&&(0,r.jsx)("div",{className:"".concat(a?"noh1":""," ").concat(x?"is-properties":""),children:t}),p.isReady&&!n&&(0,r.jsxs)(i.rG,{children:[(0,r.jsxs)(i.ff,{slot:"header",children:[(0,r.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(i.Pm,{data:JSON.stringify(h(c,p.pathname))}),(0,r.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:t}),(0,r.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var x=j},55118:function(e,t,n){"use strict";n.r(t);var r=n(52322),i=n(45392),d=n(70969);let s=e=>{let{children:t}=e;return(0,r.jsx)(d.Z,{children:t})};function l(e){let t=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code",em:"em"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"DBInput"}),"\n",(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Options"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dataList"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"Array"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsxs)("code",{className:"code-pre-wrap",children:["const array:KeyValueType[] = [{",(0,r.jsx)("br",{})," key: string;",(0,r.jsx)("br",{})," value?: string;",(0,r.jsx)("br",{}),"}]"]})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dataListId"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"description"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"iconAfter"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"'text' | 'search' | 'number' | 'tel' | 'url' | 'email' | 'password' | 'hidden' | 'date' | 'datetime-local' | 'week'"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"value"}),(0,r.jsx)(t.td,{children:"The value property is to receive results from the native form element."}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"variant"}),(0,r.jsx)(t.td,{children:"The variant defines the default variants for most components."}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"'adaptive' | 'critical' | 'informational' | 'warning' | 'successful'"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:"default slot"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"className"}),(0,r.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"describedbyid"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,r.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"React specific for render process."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stylePath"}),(0,r.jsx)(t.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tabIndex"}),(0,r.jsxs)(t.td,{children:["The default tabindex (",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de"}),")."]}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"placeholder"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maxLength"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"minLength"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pattern"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onChange"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"blur"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onBlur"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"focus"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"onFocus"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"validityChange"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"function"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"(valid: boolean) => void"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"defaultValue"}),(0,r.jsx)(t.td,{children:"React specific attribute to set default value."}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"disabled"}),(0,r.jsx)(t.td,{children:"The disabled attribute can be set to keep a user from clicking on the form element."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"label"}),(0,r.jsx)(t.td,{children:"The label attribute specifies the caption of the form element."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"required"}),(0,r.jsx)(t.td,{children:"When the required attribute specified, the user will be required to fill the form element before submitting the form."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"invalid"}),(0,r.jsx)(t.td,{children:"Marks an input element as invalid."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"icon"}),(0,r.jsxs)(t.td,{children:["Define an icon by it's identifier (like e.g. ",(0,r.jsx)(t.em,{children:"account"}),", compare to ",(0,r.jsx)(t.a,{href:"https://db-ui.github.io/mono/review/main/foundations/icons",children:"Icons"})," to get displayed in front of the elements content."]}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:" | 'account' | 'add' | 'add_circle' | 'add_link' | 'alarm' | 'alarm_add' | 'alert' | 'alert_off' | 'attachment' | 'augmented_reality' | 'block' | 'bookmark' | 'bug' | 'build' | 'calendar' | 'camera' | 'cash' | 'check_circle' | 'cloud' | 'cloud_download' | 'cloud_upload' | 'compass' | 'copy' | 'credit_card' | 'dashboard' | 'delete' | 'discount' | 'document' | 'done' | 'download' | 'drag_and_drop' | 'edit' | 'face_neutral' | 'face_sad' | 'face_smiling' | 'filter' | 'fingerprint' | 'folder' | 'folder_open' | 'generic_card' | 'giftcard' | 'hearing' | 'hearing_disabled' | 'heart' | 'help' | 'image' | 'info' | 'key' | 'legal' | 'lightbulb' | 'lock_close' | 'lock_open' | 'logbook' | 'log_out' | 'minus' | 'pin' | 'print' | 'remove' | 'resize' | 'save' | 'schedule' | 'search' | 'send' | 'sepa' | 'settings' | 'share' | 'shopping_bag' | 'shopping_basket' | 'shopping_basket_disabled' | 'shopping_cart' | 'shopping_cart_disabled' | 'sort_down' | 'sort_up' | 'star' | 'swap_horizontal' | 'swap_vertical' | 'thumb_up' | 'thumb_up_down' | 'translation' | 'undo' | 'upload' | 'visibility' | 'visibility_off' | 'voucher' | 'website' | 'zoom_in' | 'zoom_out' | 'fast_backward_10' | 'fast_backward_30' | 'fast_backward_empty' | 'fast_forward_10' | 'fast_forward_30' | 'fast_forward_empty' | 'microphone' | 'pause' | 'play' | 'skip_backward' | 'skip_forward' | 'stop' | 'subtitles' | 'volume_down' | 'volume_mute' | 'volume_off' | 'volume_up' | 'logo' | 'call' | 'chat' | 'conversation' | 'fax' | 'feedback' | 'mail' | 'mobile_off' | 'mobile_phone' | 'question' | 'receive_item' | 'share_item' | 'wifi' | 'wifi_off' | 'mask' | 'playground' | 'restricted_mobility_toilet' | 'shower' | 'shower_men' | 'shower_women' | 'sink' | 'wc' | 'wc_men' | 'wc_sign' | 'wc_women' | 'air_condition' | 'buggy' | 'clothing_hanger' | 'day' | 'entry_aid' | 'environmental_mobility_check' | 'hydrogen' | 'luggage_compartment' | 'luggage_rack' | 'marketplace' | 'medical' | 'night' | 'no_smoking' | 'person_with_cane' | 'person_with_rollator' | 'platform' | 'power_outlet' | 'reservation' | 'standing_room' | 'support_dog' | 'breakfast' | 'coffee_cup' | 'drink' | 'restaurant' | 'database' | '1st_class' | '2nd_class' | 'alternative_connection' | 'booking' | 'capacity_indicator' | 'capacity_indicator_fully_booked' | 'capacity_indicator_high' | 'capacity_indicator_low' | 'destination' | 'intermediary_stop' | 'mixed_class' | 'monochrome_capacity_indicator_high' | 'monochrome_capacity_indicator_low' | 'monochrome_capacity_indicator_moderate' | 'round_trip' | 'single_trip' | 'start' | 'gps' | 'gps_north' | 'home' | 'map' | 'parking' | 'place' | 'set_position' | 'station' | 'stop_sign' | 'train_station' | 'arrow_back' | 'arrow_down' | 'arrow_forward' | 'arrow_up' | 'cancel' | 'chevron_left' | 'chevron_right' | 'close' | 'expand_less' | 'expand_more' | 'fullscreen' | 'fullscreen_exit' | 'grid_view' | 'link' | 'link_external' | 'list' | 'menu' | 'more_horizontal' | 'more_vertical' | 'refresh' | 'error' | 'notify' | 'notify_cutoff' | 'warning' | 'aisle' | 'aisle_not_available' | 'bed' | 'childrens_compartment' | 'couchette' | 'elderly' | 'handicapped' | 'parent_child_compartment' | 'priority' | 'quiet_zone' | 'table' | 'window' | 'bahnbonus' | 'bahnbonus_card' | 'bahncard' | 'best_price' | 'commuter_ticket' | 'komfort_check_in' | 'komfort_check_in_check' | 'komfort_check_in_circle' | 'multiple_cards' | 'multiple_passenger' | 'my_travel' | 'outward_journey' | 'qr_code' | 'return_journey' | 'ticket' | 'ticket_discount' | 'ticket_multiple' | 'timetable' | 'time_outward_journey' | 'time_return_journey' | 'travel_insurance' | 'airplane_inverted' | 'bicycle_inverted' | 'bicycle_trailer_inverted' | 'call_a_bike_inverted' | 'carsharing_inverted' | 'car_inverted' | 'electric_locomotive_inverted' | 'electric_scooter_inverted' | 'ev_car_inverted' | 'ferry_inverted' | 'handcart_inverted' | 'ice_inverted' | 'intercity_train_inverted' | 'local_bus_inverted' | 'local_train_inverted' | 'long_distance_bus_inverted' | 'scooter_inverted' | 'speedboat_inverted' | 'subway_inverted' | 's_bahn_inverted' | 'taxi_inverted' | 'train_and_car_inverted' | 'tram_inverted' | 'walking_inverted' | 'airplane' | 'bicycle' | 'bicycle_trailer' | 'call_a_bike' | 'carsharing' | 'car' | 'car_sequence' | 'electric_locomotive' | 'electric_scooter' | 'ev_car' | 'ferry' | 'handcart' | 'ice' | 'ice_side_view' | 'intercity_train' | 'local_bus' | 'local_train' | 'long_distance_bus' | 'railroad_car' | 'rail_and_fly' | 'scooter' | 'sev' | 'speedboat' | 'sprinter' | 'subway' | 's_bahn' | 'taxi' | 'train_and_car' | 'tram' | 'walking'"})})})]})]})]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=87551)}),_N_E=e.O()}]);