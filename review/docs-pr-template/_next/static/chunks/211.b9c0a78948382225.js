"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{70211:function(e,n,i){i.r(n),i.d(n,{db_sidenavi:function(){return r}});var o=i(97647),t=i(64096);let a=e=>e?e.map(e=>'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'" icon-variant="').concat(!!e.icon&&"32-outline",'" icon="').concat(e.icon,'" current="').concat(e.ariaCurrent,'">').concat(e.label,"</db-link></li>")).join("\n"):"",r=class{get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=(0,t.p)(this.data):((0,t.a)(this.host,"32-outline"),this._children=Array.from(this.host.children),this.children.find(e=>"li"===e.tagName.toLowerCase())?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return(0,o.h)("nav",{class:"cmp-sidenavi"},this.compData&&(0,o.h)("ol",{innerHTML:a(this.compData)}),!this.compData&&(0,o.h)("ol",null,!this.hasItemsWrapper&&this._children.map((e,n)=>(0,o.h)("li",{key:"sidenavi-item-".concat(n),innerHTML:e.outerHTML})),this.hasItemsWrapper&&(0,o.h)("slot",null)))}get host(){return(0,o.g)(this)}constructor(e){(0,o.r)(this,e),this.data=void 0}};r.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-sidenavi{background-color:#3c414b;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);display:inline-block}.cmp-sidenavi .elm-link,.cmp-sidenavi a{border-radius:initial;color:#d7dce1;display:block;padding:1.25rem 1rem;text-decoration:none}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus,.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{color:#3c414b}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus{background-color:#afb4bb}.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{background-color:#d7dce1;font-weight:700}.cmp-sidenavi .elm-link[rel],.cmp-sidenavi a[rel]{padding-left:1.3125rem}.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{--icon-font-family:"icons-32-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"⌂";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{--icon-font-family:"icons-32-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\uD83D\uDDB9";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{--icon-font-family:"icons-32-enterprise-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\uDB44\uDD64";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{--icon-font-family:"icons-32-enterprise-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"☁";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{--icon-font-family:"icons-32-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\uD83D\uDCC6";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{--icon-font-family:"icons-32-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 2rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"?";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}.cmp-sidenavi db-icon{margin-right:0.375rem}'},64096:function(e,n,i){i.d(n,{a:function(){return a},g:function(){return t},p:function(){return r},u:function(){return o}});let o=()=>{var e;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID())||Math.random().toString()},t=e=>e?e.map(e=>'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")).join("\n"):"",a=(e,n)=>{e.children&&Array.from(e.children).forEach(e=>{"db-link"===e.tagName.toLowerCase()&&e.setAttribute("icon-variant",n),e.children&&a(e,n)})},r=e=>{try{if("string"==typeof e)return JSON.parse(e);if("object"==typeof e||e instanceof Array)return e}catch(e){return!1}}}}]);