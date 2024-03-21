"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64282],{37395:function(t,e,n){n.d(e,{P:function(){return a}});let a=(t,e,n)=>t.map((t,a)=>{var r;return{...t,slotCode:null!==(r=null==n?void 0:n.at(a))&&void 0!==r?r:"No code available",examples:t.examples.map(t=>{var n,a,r,o;return{...t,example:e({...t.props,id:null!==(r=null===(n=t.props)||void 0===n?void 0:n.id)&&void 0!==r?r:t.name,children:null!==(o=null===(a=t.props)||void 0===a?void 0:a.children)&&void 0!==o?o:t.name})}})}})},99341:function(t,e,n){var a=n(52322),r=n(5632),o=n(2784),l=n(23075),d=n(86095);let s=t=>{let{examples:e,slotCode:n}=t,[r,l]=(0,o.useState)();return(0,a.jsxs)(d.f,{className:"variants-card db-code-docs",children:[(0,a.jsx)("div",{className:"variants-list",children:e.map((t,e)=>(0,a.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(e)))}),(0,a.jsxs)("details",{className:"code-details",onToggle:()=>{l(!r)},children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:r?"Hide code":"Show code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:n})]})]})};e.Z=t=>{let{title:e,variants:n}=t,[c,i]=(0,o.useState)(),w=(0,r.useRouter)();(0,o.useEffect)(()=>{if(w.query){var t;let e=null===(t=w.query.page)||void 0===t?void 0:t.toString();e&&i(n.find(t=>t.name.toLowerCase()===e))}},[w]);let u=t=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(t.name.toLowerCase()):"";return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(s,{...c})}),!c&&(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{className:"default-container",children:[(0,a.jsx)("h1",{children:e}),null==n?void 0:n.map((t,e)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(d.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(d.vB,{content:"external",target:"_blank",href:u(t),children:t.name})}),(0,a.jsx)(s,{...t})]},"".concat(t.name,"-").concat(e)))]})})]})}},95067:function(t){t.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">functional</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tfunctional\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tfunctional\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">\\n\\t\\tfunctional\\n\\t</DBDrawer>"}},{"name":"regular (Default)","className":"db-ui-regular","props":{},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">regular (Default)</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tregular (Default)\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tregular (Default)\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">\\n\\t\\tregular (Default)\\n\\t</DBDrawer>"}},{"name":"expressive","className":"db-ui-expressive","props":{},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">expressive</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\texpressive\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\texpressive\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">\\n\\t\\texpressive\\n\\t</DBDrawer>"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">With padding (Default)</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tWith padding (Default)\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tWith padding (Default)\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">With padding (Default)</DBDrawer>"}},{"name":"Full","props":{"withCloseButton":true,"width":"full"},"code":{"html":"<dialog class=\\"db-drawer\\" width=\\"full\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Full</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [withCloseButton]=\\"true\\" width=\\"full\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tFull\\n</db-drawer>","react":"\\t\\t\\t<DBDrawer\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\twidth=\\"full\\"\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tFull\\n\\t\\t\\t</DBDrawer>","vue":"\\t<DBDrawer :withCloseButton=\\"true\\" width=\\"full\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">\\n\\t\\tFull\\n\\t</DBDrawer>"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">No rounding (Default)</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tNo rounding (Default)\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tNo rounding (Default)\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">No rounding (Default)</DBDrawer>"}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-rounded=\\"true\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Rounded</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [rounded]=\\"true\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tRounded\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\trounded\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tRounded\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :rounded=\\"true\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Rounded</DBDrawer>"}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Medium (Default)</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tMedium (Default)\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tMedium (Default)\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Medium (Default)</DBDrawer>"}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-spacing=\\"small\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Small</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer spacing=\\"small\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tSmall\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tspacing=\\"small\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tSmall\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer spacing=\\"small\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Small</DBDrawer>"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-spacing=\\"large\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Large</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer spacing=\\"large\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tLarge\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tspacing=\\"large\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tLarge\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer spacing=\\"large\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Large</DBDrawer>"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-spacing=\\"none\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">None</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer spacing=\\"none\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tNone\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tspacing=\\"none\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tNone\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer spacing=\\"none\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">None</DBDrawer>"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">With Backdrop (Default)</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tWith Backdrop (Default)\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tWith Backdrop (Default)\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">With Backdrop (Default)</DBDrawer>"}},{"name":"Backdrop-weak","props":{"withCloseButton":true,"backdrop":"weak"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"weak\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Backdrop-weak</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer backdrop=\\"weak\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tBackdrop-weak\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tbackdrop=\\"weak\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tBackdrop-weak\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer backdrop=\\"weak\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Backdrop-weak</DBDrawer>"}},{"name":"No Backdrop","props":{"withCloseButton":true,"backdrop":"none"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"none\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">No Backdrop</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer backdrop=\\"none\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tNo Backdrop\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tbackdrop=\\"none\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tNo Backdrop\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer backdrop=\\"none\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">No Backdrop</DBDrawer>"}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Right (Default)</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tRight (Default)\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tRight (Default)\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Right (Default)</DBDrawer>"}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-direction=\\"left\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Left</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer direction=\\"left\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tLeft\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tdirection=\\"left\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tLeft\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer direction=\\"left\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Left</DBDrawer>"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-direction=\\"up\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Up</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer direction=\\"left\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tUp\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tdirection=\\"left\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tUp\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer direction=\\"left\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Up</DBDrawer>"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"},"code":{"html":"<dialog class=\\"db-drawer\\" data-backdrop=\\"strong\\" open>\\n\\t\\t<article class=\\"db-drawer-container\\" data-direction=\\"down\\">\\n\\t\\t\\t<header class=\\"db-drawer-header\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-button button-close-drawer is-icon-text-replace\\"\\n\\t\\t\\t\\t\\tdata-icon=\\"close\\"\\n\\t\\t\\t\\t\\tdata-variant=\\"text\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tClose Button\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</header>\\n\\t\\t\\t<div class=\\"db-drawer-content\\">Down</div>\\n\\t\\t</article>\\n\\t</dialog>","angular":"<db-drawer direction=\\"left\\" [withCloseButton]=\\"true\\" [open]=\\"openDrawer\\" (onClose)=\\"toggleDrawer(false)\\">\\n\\tDown\\n</db-drawer>","react":"<DBDrawer\\n\\t\\t\\t\\tdirection=\\"left\\"\\n\\t\\t\\t\\twithCloseButton\\n\\t\\t\\t\\topen={open}\\n\\t\\t\\t\\tonClose={() => {\\n\\t\\t\\t\\t\\tsetOpen(false);\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\tDown\\n\\t\\t\\t</DBDrawer>","vue":"<DBDrawer direction=\\"left\\" :withCloseButton=\\"true\\" :open=\\"openDrawer\\" @close=\\"toggleDrawer(false)\\">Down</DBDrawer>"}}]}]')}}]);