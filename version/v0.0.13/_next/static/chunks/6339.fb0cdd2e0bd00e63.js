"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6339],{36339:function(e,t,i){i.r(t),i.d(t,{db_linklist:function(){return r}});var n=i(97647),o=i(64096);let r=class{get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=(0,o.p)(this.data):(this._children=Array.from(this.host.children),this.children.find(e=>"li"===e.tagName.toLowerCase())?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return(0,n.h)(n.H,null,this.compData&&(0,n.h)("ul",{class:"cmp-link-list",innerHTML:(0,o.g)(this.compData)}),!this.compData&&(0,n.h)("ul",{class:"cmp-link-list"},!this.hasItemsWrapper&&this._children.map((e,t)=>(0,n.h)("li",{key:"cmp-link-list-item-".concat(t),innerHTML:e.outerHTML})),this.hasItemsWrapper&&(0,n.h)("slot",null)))}get host(){return(0,n.g)(this)}constructor(e){(0,n.r)(this,e),this.data=void 0}};r.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-link-list{list-style:none;padding-left:0}.cmp-link-list li .elm-link,.cmp-link-list li a{font-weight:700;text-decoration:none}.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{--icon-font-family:"icons-24-outline",\n  	"missing-icons" !important;font-size:var(--icon-font-size-before, var(--icon-font-size, 1.5rem));margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:">";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none;speak:never}@supports (content: ""/""){.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{content:var(--icon-glyph)/""}}@media aural{.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{content:none}}@media speech{.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{content:none}}.cmp-link-list li .elm-link:hover,.cmp-link-list li a:hover,.cmp-link-list li .elm-link:active,.cmp-link-list li a:active{text-decoration:underline}.cmp-link-list li .elm-link::before,.cmp-link-list li a::before{color:#ec0016;display:inline-block;font-size:0.75rem;font-weight:700;margin-top:-0.125rem;vertical-align:middle}:host{display:block}'},64096:function(e,t,i){i.d(t,{a:function(){return r},g:function(){return o},p:function(){return l},u:function(){return n}});let n=()=>{var e;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID())||Math.random().toString()},o=e=>e?e.map(e=>'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")).join("\n"):"",r=(e,t)=>{e.children&&Array.from(e.children).forEach(e=>{"db-link"===e.tagName.toLowerCase()&&e.setAttribute("icon-variant",t),e.children&&r(e,t)})},l=e=>{try{if("string"==typeof e)return JSON.parse(e);if("object"==typeof e||e instanceof Array)return e}catch(e){return!1}}}}]);