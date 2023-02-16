(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}})();class g extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/icon/icon-web-component.css"},this.props||(this.props={}),this.componentProps=["className","icntxt","icon","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),o=new RegExp(e,"i");this.componentProps.forEach(n=>{if(o.test(n)){const i=this.getAttribute(t);this.props[n]!==i&&(this.props[n]=i)}})}),this._root.innerHTML=`
      <span aria-hidden="true" data-el="span-db-icon-1">
        <template data-el="show-db-icon">
          <link rel="stylesheet" data-el="link-db-icon-1" />
        </template>
      
        <slot></slot>
      </span>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(n=>{t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),this.nodesToDestroy.push(n)}),t.after(e)}attributeChangedCallback(t,e,o){this.props[t]=o,this.update()}static get observedAttributes(){return["icon","icntxt"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='span-db-icon-1']").forEach(t=>{t.className="db-icon"+(this.props.className?" "+this.props.className:"")+(this.props.icntxt?"":" is-icon-text-replace"),this.props.icon&&t.setAttribute("data-icon",this.props.icon)}),this._root.querySelectorAll("[data-el='show-db-icon']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-icon-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const o=document.createTextNode(e);t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),t.after(o),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-icon",g);const y=()=>{var s;return((s=window==null?void 0:window.crypto)==null?void 0:s.randomUUID())||Math.random().toString()},A="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND";var p;(function(s){s.FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive"})(p||(p={}));Object.entries(p).map(([,s])=>s);var a;(function(s){s.NEUTRAL_0="neutral-0",s.NEUTRAL_1="neutral-1",s.NEUTRAL_2="neutral-2",s.NEUTRAL_3="neutral-3",s.NEUTRAL_4="neutral-4",s.NEUTRAL_5="neutral-5",s.NEUTRAL_6="neutral-6",s.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",s.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",s.PRIMARY="primary",s.PRIMARY_LIGHT="primary-light",s.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",s.SECONDARY="secondary",s.SECONDARY_LIGHT="secondary-light",s.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",s.SUCCESS="success",s.SUCCESS_LIGHT="success-light",s.SUCCESS_TRANSPARENT_SEMI="success-transparent-semi",s.CRITICAL="critical",s.CRITICAL_LIGHT="critical-light",s.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",s.WARNING="warning",s.WARNING_LIGHT="warning-light",s.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",s.INFORMATION="information",s.INFORMATION_LIGHT="information-light",s.INFORMATION_TRANSPARENT_SEMI="information-transparent-semi"})(a||(a={}));Object.entries(a).map(([,s])=>s);a.PRIMARY,a.SECONDARY,a.SUCCESS,a.WARNING,a.CRITICAL,a.INFORMATION;const v={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"};class E extends HTMLElement{get _textInputRef(){return this._root.querySelector("[data-ref='DBInput-textInputRef']")}get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/input/input-web-component.css",mId:A,_isValid:void 0,_value:"",_placeholder:" ",_label:"LABEL SHOULD BE SET",getIcon(e){return e?v[e]:""},handleChange(e){var o,n,i,r,c,l;t.props.onChange&&t.props.onChange(e),t.props.change&&t.props.change(e),t.state._value=e.target.value,t.update(),((n=(o=t._textInputRef)==null?void 0:o.validity)==null?void 0:n.valid)!=t.state._isValid&&(t.state._isValid=(r=(i=t._textInputRef)==null?void 0:i.validity)==null?void 0:r.valid,t.update(),t.props.validityChange&&typeof t.props.validityChange=="function"&&t.props.validityChange(!!((l=(c=t._textInputRef)==null?void 0:c.validity)!=null&&l.valid)))},handleBlur(e){t.props.onBlur&&t.props.onBlur(e),t.props.blur&&t.props.blur(e)},handleFocus(e){t.props.onFocus&&t.props.onFocus(e),t.props.focus&&t.props.focus(e)}},this.props||(this.props={}),this.componentProps=["onChange","change","validityChange","onBlur","blur","onFocus","focus","className","variant","iconBefore","name","type","disabled","required","maxLength","minLength","pattern","description","iconAfter","id","value","stylePath","placeholder","label"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onInputDbInput1Input=e=>{this.state.handleChange(e)},this.onInputDbInput1Blur=e=>{this.state.handleBlur(e)},this.onInputDbInput1Focus=e=>{this.state.handleFocus(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),o=new RegExp(e,"i");this.componentProps.forEach(n=>{if(o.test(n)){const i=this.getAttribute(t);this.props[n]!==i&&(this.props[n]=i)}})}),this._root.innerHTML=`
      <div data-el="div-db-input-1">
        <template data-el="show-db-input">
          <link rel="stylesheet" data-el="link-db-input-1" />
        </template>
      
        <template data-el="show-db-input-2">
          <db-icon class="icon-before" data-el="db-icon-db-input"></db-icon>
        </template>
      
        <input
          data-el="input-db-input-1"
          data-dom-state="DBInput-input-db-input-1"
          data-ref="DBInput-textInputRef"
        />
      
        <label aria-hidden="true" data-el="label-db-input-1">
          <span>
            <template data-el="div-db-input-2"><!-- state._label --></template>
          </span>
        </label>
      
        <template data-el="show-db-input-3">
          <p class="description">
            <template data-el="div-db-input-3"><!-- props.description --></template>
          </p>
        </template>
      
        <template data-el="show-db-input-4">
          <db-icon class="icon-input-state" data-el="db-icon-db-input-2"></db-icon>
        </template>
      
        <template data-el="show-db-input-5">
          <db-icon class="icon-after" data-el="db-icon-db-input-3"></db-icon>
        </template>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(n=>{t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),this.nodesToDestroy.push(n)}),t.after(e)}attributeChangedCallback(t,e,o){this.props[t]=o,this.update()}static get observedAttributes(){return[]}onMount(){this.state.mId=this.props.id?this.props.id:"input-"+y(),this.update(),this.props.value&&(this.state._value=this.props.value,this.update()),this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update()),this.props.placeholder&&(this.state._placeholder=this.props.placeholder,this.update()),this.props.label&&(this.state._label=this.props.label,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){const t=this.getStateful(this._root),e=this.prepareHydrate(t);if(this.destroyAnyNodes(),this.updateBindings(),e.length){const o=this.getStateful(this._root);this.hydrateDom(e,o)}}getStateful(t){const e=t.querySelectorAll("[data-dom-state]");return e?Array.from(e):[]}prepareHydrate(t){return t.map(e=>({id:e.dataset.domState,value:e.value,active:document.activeElement===e,selectionStart:e.selectionStart}))}hydrateDom(t,e){return e.map((o,n)=>{const i=t.find(r=>o.dataset.domState===r.id);i&&(o.value=i.value,i.active&&(o.focus(),o.selectionStart=i.selectionStart))})}updateBindings(){this._root.querySelectorAll("[data-el='div-db-input-1']").forEach(t=>{t.className="db-input "+(this.props.className||""),this.props.variant&&t.setAttribute("data-variant",this.props.variant)}),this._root.querySelectorAll("[data-el='show-db-input']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-input-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='show-db-input-2']").forEach(t=>{this.props.iconBefore&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input']").forEach(t=>{this.props.iconBefore&&t.setAttribute("icon",this.props.iconBefore)}),this._root.querySelectorAll("[data-el='input-db-input-1']").forEach(t=>{t.setAttribute("id",this.state.mId),this.props.name&&t.setAttribute("name",this.props.name),this.props.type,t.setAttribute("type",this.props.type||"text"),t.setAttribute("placeholder",this.state._placeholder),t.setAttribute("aria-labelledby",this.state.mId+"-label"),this.props.disabled&&t.setAttribute("disabled",this.props.disabled),this.props.required&&t.setAttribute("required",this.props.required),t.value=this.state._value,this.props.maxLength&&t.setAttribute("maxLength",this.props.maxLength),this.props.minLength&&t.setAttribute("minLength",this.props.minLength),this.props.pattern&&t.setAttribute("pattern",this.props.pattern),t.removeEventListener("input",this.onInputDbInput1Input),t.addEventListener("input",this.onInputDbInput1Input),t.removeEventListener("blur",this.onInputDbInput1Blur),t.addEventListener("blur",this.onInputDbInput1Blur),t.removeEventListener("focus",this.onInputDbInput1Focus),t.addEventListener("focus",this.onInputDbInput1Focus)}),this._root.querySelectorAll("[data-el='label-db-input-1']").forEach(t=>{t.setAttribute("for",this.state.mId),t.setAttribute("id",this.state.mId+"-label")}),this._root.querySelectorAll("[data-el='div-db-input-2']").forEach(t=>{this.renderTextNode(t,this.state._label)}),this._root.querySelectorAll("[data-el='show-db-input-3']").forEach(t=>{this.props.description&&this.showContent(t)}),this._root.querySelectorAll("[data-el='div-db-input-3']").forEach(t=>{this.renderTextNode(t,this.props.description)}),this._root.querySelectorAll("[data-el='show-db-input-4']").forEach(t=>{(this.props.variant||this.props.required||this.props.pattern)&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input-2']").forEach(t=>{t.setAttribute("icon",this.state.getIcon(this.props.variant))}),this._root.querySelectorAll("[data-el='show-db-input-5']").forEach(t=>{this.props.iconAfter&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input-3']").forEach(t=>{this.props.iconAfter&&t.setAttribute("icon",this.props.iconAfter)})}renderTextNode(t,e){const o=document.createTextNode(e);t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),t.after(o),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-input",E);class N extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/button/button-web-component.css",handleClick(e){t.props.onClick&&t.props.onClick(e)}},this.props||(this.props={}),this.componentProps=["onClick","type","disabled","text","className","icon","icntxt","size","state","width","variant","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onButtonDbButton1Click=e=>{this.state.handleClick(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),o=new RegExp(e,"i");this.componentProps.forEach(n=>{if(o.test(n)){const i=this.getAttribute(t);this.props[n]!==i&&(this.props[n]=i)}})}),this._root.innerHTML=`
      <button data-el="button-db-button-1">
        <template data-el="show-db-button">
          <link rel="stylesheet" data-el="link-db-button-1" />
        </template>
      
        <db-icon data-el="db-icon-db-button"></db-icon>
      
        <slot></slot>
      </button>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(n=>{t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),this.nodesToDestroy.push(n)}),t.after(e)}attributeChangedCallback(t,e,o){this.props[t]=o,this.update()}static get observedAttributes(){return["text","variant","icon","icntxt"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='button-db-button-1']").forEach(t=>{this.props.type&&t.setAttribute("type",this.props.type),this.props.disabled&&t.setAttribute("disabled",this.props.disabled),this.props.text&&t.setAttribute("aria-label",this.props.text),t.className="db-button"+(this.props.className?" "+this.props.className:"")+(this.props.icon&&!this.props.icntxt?" is-icon-text-replace":""),this.props.size&&t.setAttribute("data-size",this.props.size),this.props.state&&t.setAttribute("data-state",this.props.state),this.props.width&&t.setAttribute("data-width",this.props.width),this.props.variant&&t.setAttribute("data-variant",this.props.variant),t.removeEventListener("click",this.onButtonDbButton1Click),t.addEventListener("click",this.onButtonDbButton1Click)}),this._root.querySelectorAll("[data-el='show-db-button']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-button-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='db-icon-db-button']").forEach(t=>{this.props.icon&&t.setAttribute("icon",this.props.icon),this.props.icntxt&&t.setAttribute("icntxt",this.props.icntxt)})}renderTextNode(t,e){const o=document.createTextNode(e);t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),t.after(o),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-button",N);const w=()=>(window.addEventListener("load",()=>{const s=document.querySelector("#db-input"),t=document.querySelector("#db-button"),e=document.querySelector("#db-input-container");s&&(s.props.onChange=o=>{e.innerHTML=o.target.value}),t&&(t.props.onClick=()=>{alert(JSON.stringify({input:s.state._value}))})}),`
		<div class="form-container">
			<div>
				<form>
					<fieldset>
							<p>DbInput:</p>
							<db-input
								id="db-input"
								name="username"
								label="Textinput"
								placeholder="Placeholder"
								description="Description"
								iconBefore="edit"
							></db-input>
						<p>DbButton:</p>
						<db-button type="button" id="db-button" variant="primary">
							Hi from Showcase!
						</db-button>

					</fieldset>
				</form>
			</div>
			<div>
			<h2>Output</h2>
					<dl>
						<dt>inputs value</dt>
						<dd id="db-input-container">"No Input set"</dd>
					</dl>
			</div>
		</div>
	`),x=()=>(window.addEventListener("load",()=>{const s=document.querySelector("#select-variant"),t=Array.from(document.querySelectorAll("db-button"));s&&s.addEventListener("change",e=>{for(const o of t)o.setAttribute("variant",e.target.value)})}),`
	<div>
		<h1>Button</h1>
		<div class="button-container">
			<select id="select-variant">
				<option>primary</option>
				<option>secondary</option>
				<option>ghost</option>
				<option>tertiary</option>
			</select>

			<db-button>Test</db-button>
			<db-button disabled="true">Test</db-button>
			<db-button icon="account">Test</db-button>
			<db-button icon="account" disabled="true">Test</db-button>
			<db-button icon="account" icntxt="true">Test</db-button>
			<db-button
			icon="account"
			disabled="true"
			icntxt="true"
			>Test</db-button>
			<db-button state="loading">Test</db-button>
		</div>
	</div>`),f=()=>document.location.search.slice(1).split("&").filter(s=>(s==null?void 0:s.length)>0).reduce((s,t)=>{const e=t.split("=");return{...s,[e[0]]:e[1]}},{}),T=()=>(window.addEventListener("load",()=>{const s=f();["primary","secondary","success","critical","warning","information"].some(t=>t.includes(s.color??""))?document.querySelector("#backgroundWarning").style.display="block":document.querySelector("#backgroundWarning").style.display="none"}),`
	<div>
		<h1>Input</h1>

		<strong id="backgroundWarning">
			This background is not working with inputs! Please use light colors
			as background.
		</strong>
		<div class="input-container">
		<form>
			<db-input
			 description="This is a description"
			 label="Start train station"
			 placeholder="some text"
			 iconBefore="edit"
			 variant="critical"
			 value="hello"
			 name="testInput"
			></db-input>

			<db-input
			 description="Valid test"
			 label="With event"
			 placeholder="some text"
			 iconBefore="edit"
			 iconAfter="heart"
			 variant="warning"
			 id="input-expr-warning"
			 required="true"
			></db-input>
			<db-input
			 label="start date"
			 placeholder="some text"
			 type="datetime-local"
			 id="input-expr-date"
			></db-input>

			<db-input
			 label="Start train station"
			 placeholder="some text"
			 iconAfter="heart"
			 id="input-reg"
			 required="true"
			 minLength="5"
			></db-input>
			<db-input
			 label="Start date"
			 placeholder="some text"
			 type="week"
			 id="input-reg-date"
			></db-input>

			<db-input
			 id="db-input-functional-1"
			 label="Start train station"
			 placeholder="some text"
			></db-input>
			<db-input
			 id="db-input-functional-2"
			 label="Textinput disabled"
			 placeholder="some text"
			 variant="information"
			 disabled="true"
			></db-input>

			<db-input
			 label="start date"
			 placeholder="some text"
			 type="datetime-local"
			 id="input-func-date"
			></db-input>
			<db-button type="submit">Submit</db-button>
		</form>
		</div>
	</div>`),u={button:"/button",input:"/input"},h=[{path:"/",label:"Home",component:w},{path:u.button,label:"Button",component:x},{path:u.input,label:"Input",component:T}];class S extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/page/page-web-component.css"},this.props||(this.props={}),this.componentProps=["className","type","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),o=new RegExp(e,"i");this.componentProps.forEach(n=>{if(o.test(n)){const i=this.getAttribute(t);this.props[n]!==i&&(this.props[n]=i)}})}),this._root.innerHTML=`
      <div data-el="div-db-page-1">
        <template data-el="show-db-page">
          <link rel="stylesheet" data-el="link-db-page-1" />
        </template>
      
        <slot name="header"></slot>
      
        <main class="db-main"><slot></slot></main>
      
        <slot name="footer"></slot>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(n=>{t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),this.nodesToDestroy.push(n)}),t.after(e)}attributeChangedCallback(t,e,o){this.props[t]=o,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-page-1']").forEach(t=>{t.className="db-page"+(this.props.className?" "+this.props.className:"")+(this.props.type==="fixedHeaderFooter"?" fixed-header-footer":"")}),this._root.querySelectorAll("[data-el='show-db-page']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-page-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const o=document.createTextNode(e);t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),t.after(o),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-page",S);class _ extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/header/header-web-component.css"},this.props||(this.props={}),this.componentProps=["className","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),o=new RegExp(e,"i");this.componentProps.forEach(n=>{if(o.test(n)){const i=this.getAttribute(t);this.props[n]!==i&&(this.props[n]=i)}})}),this._root.innerHTML=`
      <header role="banner" data-el="header-db-header-1">
        <template data-el="show-db-header">
          <link rel="stylesheet" data-el="link-db-header-1" />
        </template>
      
        <slot name="brand"></slot>
      
        <div class="desktop-navigation">
          <slot name="desktop-navigation"></slot>
        </div>
      
        <div class="mobile-navigation">
          <slot name="mobile-navigation"></slot>
        </div>
      
        <div class="meta-navigation">
          <slot name="meta-navigation"></slot>
        </div>
      
        <slot></slot>
      </header>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(n=>{t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),this.nodesToDestroy.push(n)}),t.after(e)}attributeChangedCallback(t,e,o){this.props[t]=o,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='header-db-header-1']").forEach(t=>{t.className="db-header"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-header']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-header-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const o=document.createTextNode(e);t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),t.after(o),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-header",_);const d={anchorRef:"/",src:"./assets/images/db_logo.svg"};class I extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/brand/brand-web-component.css"},this.props||(this.props={}),this.componentProps=["className","anchorRef","anchorTitle","anchorRelation","hideDefaultAsset","imgSrc","imgAlt","imgHeight","imgWidth","anchorChildren","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),o=new RegExp(e,"i");this.componentProps.forEach(n=>{if(o.test(n)){const i=this.getAttribute(t);this.props[n]!==i&&(this.props[n]=i)}})}),this._root.innerHTML=`
      <div data-el="div-db-brand-1">
        <template data-el="show-db-brand">
          <link rel="stylesheet" data-el="link-db-brand-1" />
        </template>
      
        <a data-el="a-db-brand-1">
          <template data-el="show-db-brand-2">
            <img class="db-logo" data-el="img-db-brand-1" />
          </template>
      
          <template data-el="show-db-brand-3">
            <slot></slot>
          </template>
        </a>
      
        <template data-el="show-db-brand-4">
          <slot></slot>
        </template>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(n=>{t!=null&&t.scope&&(n.scope=t.scope),t!=null&&t.context&&(n.context=t.context),this.nodesToDestroy.push(n)}),t.after(e)}attributeChangedCallback(t,e,o){this.props[t]=o,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-brand-1']").forEach(t=>{t.className="db-brand"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-brand']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-brand-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='a-db-brand-1']").forEach(t=>{(this.props.anchorRef??d.anchorRef)&&t.setAttribute("href",this.props.anchorRef??d.anchorRef),this.props.anchorTitle&&t.setAttribute("title",this.props.anchorTitle),this.props.anchorRelation&&t.setAttribute("rel",this.props.anchorRelation)}),this._root.querySelectorAll("[data-el='show-db-brand-2']").forEach(t=>{!this.props.hideDefaultAsset&&this.showContent(t)}),this._root.querySelectorAll("[data-el='img-db-brand-1']").forEach(t=>{(this.props.imgSrc??d.src)&&t.setAttribute("src",this.props.imgSrc??d.src),this.props.imgAlt&&t.setAttribute("alt",this.props.imgAlt),this.props.imgHeight&&t.setAttribute("height",this.props.imgHeight),this.props.imgWidth&&t.setAttribute("width",this.props.imgWidth)}),this._root.querySelectorAll("[data-el='show-db-brand-3']").forEach(t=>{this.props.anchorChildren&&this.showContent(t)}),this._root.querySelectorAll("[data-el='show-db-brand-4']").forEach(t=>{!this.props.anchorChildren&&this.showContent(t)})}renderTextNode(t,e){const o=document.createTextNode(e);t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),t.after(o),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-brand",I);const m=(s,t)=>`db-ui-${s} db-bg-${t}`,b=(s,t,e)=>{t=encodeURIComponent(t),e=encodeURIComponent(e),s[t]=e;const o=Object.keys(s).map(n=>`${n}=${s[n]}`);document.location.search=o.join("&")};onload=()=>{const s=document.querySelector("#select-tonality"),t=document.querySelector("#select-color"),e=document.querySelector("#content"),o=f(),n=o.tonality??"regular",i=o.color??"neutral-0";e.className=m(n,i),s&&(s.value=n,s.addEventListener("change",r=>{b(o,"tonality",r.target.value)})),t&&(t.value=i,t.addEventListener("change",r=>{b(o,"color",r.target.value)}))};const C=s=>`
	<db-page type="fixedHeaderFooter">
		<db-header slot="header">
			<db-brand slot="brand" anchorChildren="true" insideHeader="true">Vanilla Showcase</db-brand>
			<nav slot="desktop-navigation" class="desktop-navigation">
				<ul>
					${h.map(t=>`<li><a href=".${t.path}">${t.label}</a></li>`).join("")}
				</ul>
			</nav>
			<div slot="meta-navigation">
			<select id="select-tonality">
				<option>functional</option>
				<option>regular</option>
				<option>expressive</option>
			</select>
			<select id="select-color">
				<option>neutral-0</option>
				<option>neutral-1</option>
				<option>neutral-2</option>
				<option>neutral-3</option>
				<option>neutral-4</option>
				<option>neutral-5</option>
				<option>neutral-6</option>
				<option>neutral-transparent-full</option>
				<option>neutral-transparent-semi</option>
				<option>primary</option>
				<option>primary-light</option>
				<option>primary-transparent-semi</option>
				<option>secondary</option>
				<option>secondary-light</option>
				<option>secondary-transparent-semi</option>
				<option>success</option>
				<option>success-light</option>
				<option>success-transparent-semi</option>
				<option>critical</option>
				<option>critical-light</option>
				<option>critical-transparent-semi</option>
				<option>warning</option>
				<option>warning-light</option>
				<option>warning-transparent-semi</option>
				<option>information</option>
				<option>information-light</option>
				<option>information-transparent-semi</option>
			</select>
			</div>
		</db-header>
			<div id="content" class="${m()}">
				${s}
			</div>
		<div slot="footer">Footer</div>
	</db-page>
`,P=()=>{const s=h.filter(t=>t.path!=="/").find(t=>window.location.href.includes(t.path));return s?s.component():h[0].component()};document.querySelector("#app").innerHTML=C(P());
