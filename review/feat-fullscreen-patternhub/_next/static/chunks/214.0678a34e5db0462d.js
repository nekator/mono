"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{214:function(e,t,o){o.r(t),o.d(t,{db_breadcrumb:function(){return a}});var n=o(7647),r=o(4096);let i=e=>e?e.map(e=>'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")).join("\n"):"",a=class{get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=(0,r.p)(this.data):(this._children=Array.from(this.host.children),this.children.find(e=>"li"===e.tagName.toLowerCase())?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return(0,n.h)("nav",{class:"cmp-breadcrumb","aria-label":this.arialabel},this.compData&&(0,n.h)("ol",{innerHTML:i(this.compData)}),!this.compData&&(0,n.h)("ol",null,!this.hasItemsWrapper&&this._children.map((e,t)=>(0,n.h)("li",{key:"cmp-breadcrumb-item-".concat(t),innerHTML:e.outerHTML})),this.hasItemsWrapper&&(0,n.h)("slot",null)))}get host(){return(0,n.g)(this)}constructor(e){(0,n.r)(this,e),this.data=void 0,this.arialabel=void 0}};a.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-breadcrumb{color:#646973;font-size:0.75rem}.cmp-breadcrumb a{color:inherit}.cmp-breadcrumb ol{display:flex}.cmp-breadcrumb ol>*{align-items:center;display:inline-flex;margin-right:0.1875rem}.cmp-breadcrumb ol>* [aria-current=location],.cmp-breadcrumb ol>* [aria-current=page]{color:#282d37;font-size:0.875rem}.cmp-breadcrumb ol>* .elm-link,.cmp-breadcrumb ol>* li :where(button,a),li .cmp-breadcrumb ol>* :where(button,a){border-radius:0.25rem;padding:0.0625rem 0.1875rem 0.0625rem 0.25rem;text-decoration:none}.cmp-breadcrumb ol>* .elm-link:hover,.cmp-breadcrumb ol>* li :hover:where(button,a),li .cmp-breadcrumb ol>* :hover:where(button,a){background-color:rgba(40, 45, 55, 0.03)}.cmp-breadcrumb ol>* .elm-link:active,.cmp-breadcrumb ol>* li :active:where(button,a),li .cmp-breadcrumb ol>* :active:where(button,a){background-color:rgba(40, 45, 55, 0.06)}.cmp-breadcrumb ol>*:first-child::before{--icon-font-family:"icons-20-outline",\n  	"missing-icons" !important;--icon-font-size:1.25rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"⌂";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-breadcrumb ol>*:first-child::before{content:var(--icon-glyph)/""}}@media aural{.cmp-breadcrumb ol>*:first-child::before{content:none}}@media speech{.cmp-breadcrumb ol>*:first-child::before{content:none}}.cmp-breadcrumb ol>*:first-child::before{--icon-margin-after:0.1875rem}.cmp-breadcrumb ol>*:not(:first-child)::before{--icon-font-family:"icons-20-outline",\n  	"missing-icons" !important;--icon-font-size:1.25rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:">";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-breadcrumb ol>*:not(:first-child)::before{content:var(--icon-glyph)/""}}@media aural{.cmp-breadcrumb ol>*:not(:first-child)::before{content:none}}@media speech{.cmp-breadcrumb ol>*:not(:first-child)::before{content:none}}.cmp-breadcrumb ol>*:not(:first-child)::before{--icon-font-size:0.875rem;--icon-margin-after:0;color:#878c96;margin-left:-0.125rem}'},4096:function(e,t,o){o.d(t,{a:function(){return i},g:function(){return r},p:function(){return a},u:function(){return n}});let n=()=>{var e;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID())||Math.random().toString()},r=e=>e?e.map(e=>'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")).join("\n"):"",i=(e,t)=>{e.children&&Array.from(e.children).forEach(e=>{"db-link"===e.tagName.toLowerCase()&&e.setAttribute("icon-variant",t),e.children&&i(e,t)})},a=e=>{try{if("string"==typeof e)return JSON.parse(e);if("object"==typeof e||e instanceof Array)return e}catch(e){return!1}}}}]);