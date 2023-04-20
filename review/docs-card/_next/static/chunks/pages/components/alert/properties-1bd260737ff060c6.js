(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5587],{83876:function(e,t,r){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return r.e(t[1]).then(function(){return r(i)})}i.keys=function(){return Object.keys(n)},i.id=83876,e.exports=i},99644:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/properties",function(){return r(4048)}])},70969:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(52322),i=r(77900),s=r(2784);let a=()=>{let e=(0,s.useRef)(null),[t,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var t;let n=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";n&&r(!0)},[]),[t,e]},o=e=>{let{children:t,element:r="div",...n}=e,[i,o]=a();return i?(0,s.createElement)(r,{...n,children:t}):(0,s.createElement)(r,{...n,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/docs-card").concat(e.link)});r(60586);var c=r(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>d(e)):[],b=e=>{let{children:t}=e,[r,a]=(0,s.useState)(!1),[d,b]=(0,s.useState)(!1),[_,j]=(0,s.useState)(!1),p=(0,c.useRouter)();return(0,s.useEffect)(()=>{p.query&&(a("true"===p.query.fullscreen),b("true"===p.query.noh1),j("true"===p.query.properties))},[p]),(0,n.jsxs)(o,{children:[p.isReady&&r&&(0,n.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(_?"is-properties":""),children:t}),p.isReady&&!r&&(0,n.jsxs)(i.rG,{children:[(0,n.jsxs)(i.ff,{slot:"header",children:[(0,n.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(i.Pm,{data:JSON.stringify(h(l,p.pathname))}),(0,n.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:t}),(0,n.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var _=b},4048:function(e,t,r){"use strict";r.r(t);var n=r(52322),i=r(45392),s=r(70969);let a=e=>{let{children:t}=e;return(0,n.jsx)(s.Z,{children:t})};function o(e){let t=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code",em:"em"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"DBAlert"}),"\n",(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Options"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ariaLive"}),(0,n.jsxs)(t.td,{children:["The arialive attribute will lead to that the screenreader interrupts immediately",(0,n.jsx)("br",{}),'and reads out the notification if set to "assertive", while it will wait for the',(0,n.jsx)("br",{}),'user\'s idleness when set to "polite", compare to ',(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",children:"aria-live"})]}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'assertive' | 'polite' | 'off' | "})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"behaviour"}),(0,n.jsx)(t.td,{children:"The behaviour attribute shows/hides the close button on the top right."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'closable' | 'permanent'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"closeButtonText"}),(0,n.jsx)(t.td,{children:'The closeButtonText attribute changes the text inside the close button (only visible with behaviour="closeable").'}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headline"}),(0,n.jsx)(t.td,{children:"The headline attribute changes the text of the bold headline."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"link"}),(0,n.jsx)(t.td,{children:"The link attribute changes the props of the link (only available when using slotLink)."}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsxs)("code",{className:"code-pre-wrap",children:["{",(0,n.jsx)("br",{})," current?:",(0,n.jsx)("br",{}),"  | boolean",(0,n.jsx)("br",{}),"  | 'time'",(0,n.jsx)("br",{}),"  | 'true'",(0,n.jsx)("br",{}),"  | 'false'",(0,n.jsx)("br",{}),"  | 'date'",(0,n.jsx)("br",{}),"  | 'page'",(0,n.jsx)("br",{}),"  | 'step'",(0,n.jsx)("br",{}),"  | 'location'",(0,n.jsx)("br",{}),"  | undefined;",(0,n.jsx)("br",{})," disabled?: boolean;",(0,n.jsx)("br",{})," href?: string;",(0,n.jsx)("br",{})," hreflang?: string;",(0,n.jsx)("br",{})," label?: string;",(0,n.jsx)("br",{})," target?: '_self' | '_blank' | '_parent' | '_top';",(0,n.jsx)("br",{})," rel?: string;",(0,n.jsx)("br",{})," role?: string;",(0,n.jsx)("br",{})," referrerpolicy?:",(0,n.jsx)("br",{}),"  | 'no-referrer'",(0,n.jsx)("br",{}),"  | 'no-referrer-when-downgrade'",(0,n.jsx)("br",{}),"  | 'origin'",(0,n.jsx)("br",{}),"  | 'origin-when-cross-origin'",(0,n.jsx)("br",{}),"  | 'same-origin'",(0,n.jsx)("br",{}),"  | 'strict-origin'",(0,n.jsx)("br",{}),"  | 'strict-origin-when-cross-origin'",(0,n.jsx)("br",{}),"  | 'unsafe-url';",(0,n.jsx)("br",{})," selected?: boolean;",(0,n.jsx)("br",{}),"}"]})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"slotLink"}),(0,n.jsxs)(t.td,{children:["React specific to pass in any content to the DBLink.",(0,n.jsx)("br",{}),"Default will be a simple text, but it could be a framework specific router link or something similar."]}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsxs)(t.td,{children:["The type attribute changes the styling of the alert.",(0,n.jsx)("br",{}),"The inline alert has a box-shadow and rounded corners (similar to card)."]}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'alert' | 'inline'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"children"}),(0,n.jsx)(t.td,{children:"default slot"}),(0,n.jsx)(t.td,{children:"any"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"className"}),(0,n.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"key"}),(0,n.jsx)(t.td,{children:"React specific for render process."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"describedbyid"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,n.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stylePath"}),(0,n.jsx)(t.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title"}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"onClick"}),(0,n.jsx)(t.td,{children:"React specific onClick to pass to forward ref."}),(0,n.jsx)(t.td,{children:"function"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"icon"}),(0,n.jsxs)(t.td,{children:["Define an icon by it's identifier (like e.g. ",(0,n.jsx)(t.em,{children:"account"}),", compare to ",(0,n.jsx)(t.a,{href:"https://db-ui.github.io/mono/review/main/foundations/icons",children:"Icons"})," to get displayed in front of the elements content."]}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:" | 'account' | 'add' | 'add_circle' | 'add_link' | 'alarm' | 'alarm_add' | 'alert' | 'alert_off' | 'attachment' | 'augmented_reality' | 'block' | 'bookmark' | 'bug' | 'build' | 'calendar' | 'camera' | 'cash' | 'check_circle' | 'cloud' | 'cloud_download' | 'cloud_upload' | 'compass' | 'copy' | 'credit_card' | 'dashboard' | 'delete' | 'discount' | 'document' | 'done' | 'download' | 'drag_and_drop' | 'edit' | 'face_neutral' | 'face_sad' | 'face_smiling' | 'filter' | 'fingerprint' | 'folder' | 'folder_open' | 'generic_card' | 'giftcard' | 'hearing' | 'hearing_disabled' | 'heart' | 'help' | 'image' | 'info' | 'key' | 'legal' | 'lightbulb' | 'lock_close' | 'lock_open' | 'logbook' | 'log_out' | 'minus' | 'pin' | 'print' | 'remove' | 'resize' | 'save' | 'schedule' | 'search' | 'send' | 'sepa' | 'settings' | 'share' | 'shopping_bag' | 'shopping_basket' | 'shopping_basket_disabled' | 'shopping_cart' | 'shopping_cart_disabled' | 'sort_down' | 'sort_up' | 'star' | 'swap_horizontal' | 'swap_vertical' | 'thumb_up' | 'thumb_up_down' | 'translation' | 'undo' | 'upload' | 'visibility' | 'visibility_off' | 'voucher' | 'website' | 'zoom_in' | 'zoom_out' | 'fast_backward_10' | 'fast_backward_30' | 'fast_backward_empty' | 'fast_forward_10' | 'fast_forward_30' | 'fast_forward_empty' | 'microphone' | 'pause' | 'play' | 'skip_backward' | 'skip_forward' | 'stop' | 'subtitles' | 'volume_down' | 'volume_mute' | 'volume_off' | 'volume_up' | 'logo' | 'call' | 'chat' | 'conversation' | 'fax' | 'feedback' | 'mail' | 'mobile_off' | 'mobile_phone' | 'question' | 'receive_item' | 'share_item' | 'wifi' | 'wifi_off' | 'mask' | 'playground' | 'restricted_mobility_toilet' | 'shower' | 'shower_men' | 'shower_women' | 'sink' | 'wc' | 'wc_men' | 'wc_sign' | 'wc_women' | 'air_condition' | 'buggy' | 'clothing_hanger' | 'day' | 'entry_aid' | 'environmental_mobility_check' | 'hydrogen' | 'luggage_compartment' | 'luggage_rack' | 'marketplace' | 'medical' | 'night' | 'no_smoking' | 'person_with_cane' | 'person_with_rollator' | 'platform' | 'power_outlet' | 'reservation' | 'standing_room' | 'support_dog' | 'breakfast' | 'coffee_cup' | 'drink' | 'restaurant' | 'database' | '1st_class' | '2nd_class' | 'alternative_connection' | 'booking' | 'capacity_indicator' | 'capacity_indicator_fully_booked' | 'capacity_indicator_high' | 'capacity_indicator_low' | 'destination' | 'intermediary_stop' | 'mixed_class' | 'monochrome_capacity_indicator_high' | 'monochrome_capacity_indicator_low' | 'monochrome_capacity_indicator_moderate' | 'round_trip' | 'single_trip' | 'start' | 'gps' | 'gps_north' | 'home' | 'map' | 'parking' | 'place' | 'set_position' | 'station' | 'stop_sign' | 'train_station' | 'arrow_back' | 'arrow_down' | 'arrow_forward' | 'arrow_up' | 'cancel' | 'chevron_left' | 'chevron_right' | 'close' | 'expand_less' | 'expand_more' | 'fullscreen' | 'fullscreen_exit' | 'grid_view' | 'link' | 'link_external' | 'list' | 'menu' | 'more_horizontal' | 'more_vertical' | 'refresh' | 'error' | 'notify' | 'notify_cutoff' | 'warning' | 'aisle' | 'aisle_not_available' | 'bed' | 'childrens_compartment' | 'couchette' | 'elderly' | 'handicapped' | 'parent_child_compartment' | 'priority' | 'quiet_zone' | 'table' | 'window' | 'bahnbonus' | 'bahnbonus_card' | 'bahncard' | 'best_price' | 'commuter_ticket' | 'komfort_check_in' | 'komfort_check_in_check' | 'komfort_check_in_circle' | 'multiple_cards' | 'multiple_passenger' | 'my_travel' | 'outward_journey' | 'qr_code' | 'return_journey' | 'ticket' | 'ticket_discount' | 'ticket_multiple' | 'timetable' | 'time_outward_journey' | 'time_return_journey' | 'travel_insurance' | 'airplane_inverted' | 'bicycle_inverted' | 'bicycle_trailer_inverted' | 'call_a_bike_inverted' | 'carsharing_inverted' | 'car_inverted' | 'electric_locomotive_inverted' | 'electric_scooter_inverted' | 'ev_car_inverted' | 'ferry_inverted' | 'handcart_inverted' | 'ice_inverted' | 'intercity_train_inverted' | 'local_bus_inverted' | 'local_train_inverted' | 'long_distance_bus_inverted' | 'scooter_inverted' | 'speedboat_inverted' | 'subway_inverted' | 's_bahn_inverted' | 'taxi_inverted' | 'train_and_car_inverted' | 'tram_inverted' | 'walking_inverted' | 'airplane' | 'bicycle' | 'bicycle_trailer' | 'call_a_bike' | 'carsharing' | 'car' | 'car_sequence' | 'electric_locomotive' | 'electric_scooter' | 'ev_car' | 'ferry' | 'handcart' | 'ice' | 'ice_side_view' | 'intercity_train' | 'local_bus' | 'local_train' | 'long_distance_bus' | 'railroad_car' | 'rail_and_fly' | 'scooter' | 'sev' | 'speedboat' | 'sprinter' | 'subway' | 's_bahn' | 'taxi' | 'train_and_car' | 'tram' | 'walking'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"elevation"}),(0,n.jsx)(t.td,{children:"The elevation attribute changes the style of the card (box-shadow)."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'default' | 'none'"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"variant"}),(0,n.jsx)(t.td,{children:"The variant defines the default variants for most components."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:"'adaptive' | 'critical' | 'informational' | 'warning' | 'successful'"})})})]})]})]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(o,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=99644)}),_N_E=e.O()}]);