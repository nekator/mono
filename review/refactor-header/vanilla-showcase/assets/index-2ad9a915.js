(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();class A extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/icon/icon-web-component.css"},this.props||(this.props={}),this.componentProps=["className","icntxt","icon","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <span aria-hidden="true" data-el="span-db-icon-1">
        <template data-el="show-db-icon">
          <link rel="stylesheet" data-el="link-db-icon-1" />
        </template>
      
        <slot></slot>
      </span>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return["icon","icntxt"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='span-db-icon-1']").forEach(t=>{t.className="db-icon"+(this.props.className?" "+this.props.className:"")+(this.props.icntxt?"":" is-icon-text-replace"),this.props.icon&&t.setAttribute("data-icon",this.props.icon)}),this._root.querySelectorAll("[data-el='show-db-icon']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-icon-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-icon",A);const w=()=>{var i;return((i=window==null?void 0:window.crypto)==null?void 0:i.randomUUID())||Math.random().toString()},E="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND";var c;(function(i){i.FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive"})(c||(c={}));Object.entries(c).map(([,i])=>i);var d;(function(i){i.NEUTRAL_0="neutral-0",i.NEUTRAL_1="neutral-1",i.NEUTRAL_2="neutral-2",i.NEUTRAL_3="neutral-3",i.NEUTRAL_4="neutral-4",i.NEUTRAL_5="neutral-5",i.NEUTRAL_6="neutral-6",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.PRIMARY="primary",i.PRIMARY_LIGHT="primary-light",i.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",i.SECONDARY="secondary",i.SECONDARY_LIGHT="secondary-light",i.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",i.SUCCESS="success",i.SUCCESS_LIGHT="success-light",i.SUCCESS_TRANSPARENT_SEMI="success-transparent-semi",i.CRITICAL="critical",i.CRITICAL_LIGHT="critical-light",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.WARNING="warning",i.WARNING_LIGHT="warning-light",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.INFORMATION="information",i.INFORMATION_LIGHT="information-light",i.INFORMATION_TRANSPARENT_SEMI="information-transparent-semi"})(d||(d={}));Object.entries(d).map(([,i])=>i);d.PRIMARY,d.SECONDARY,d.SUCCESS,d.WARNING,d.CRITICAL,d.INFORMATION;const N={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"};class x extends HTMLElement{get _textInputRef(){return this._root.querySelector("[data-ref='DBInput-textInputRef']")}get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/input/input.css",mId:E,_isValid:void 0,_value:"",_placeholder:" ",_label:"LABEL SHOULD BE SET",getIcon(e){return e?N[e]:""},handleChange(e){var s,o,n,r,a,p;t.props.onChange&&t.props.onChange(e),t.props.change&&t.props.change(e),t.state._value=e.target.value,t.update(),((o=(s=t._textInputRef)==null?void 0:s.validity)==null?void 0:o.valid)!=t.state._isValid&&(t.state._isValid=(r=(n=t._textInputRef)==null?void 0:n.validity)==null?void 0:r.valid,t.update(),t.props.validityChange&&typeof t.props.validityChange=="function"&&t.props.validityChange(!!((p=(a=t._textInputRef)==null?void 0:a.validity)!=null&&p.valid)))},handleBlur(e){t.props.onBlur&&t.props.onBlur(e),t.props.blur&&t.props.blur(e)},handleFocus(e){t.props.onFocus&&t.props.onFocus(e),t.props.focus&&t.props.focus(e)}},this.props||(this.props={}),this.componentProps=["onChange","change","validityChange","onBlur","blur","onFocus","focus","className","variant","iconBefore","name","type","disabled","required","maxLength","minLength","pattern","description","iconAfter","id","value","stylePath","placeholder","label"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onInputDbInput1Input=e=>{this.state.handleChange(e)},this.onInputDbInput1Blur=e=>{this.state.handleBlur(e)},this.onInputDbInput1Focus=e=>{this.state.handleFocus(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
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
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return[]}onMount(){this.state.mId=this.props.id?this.props.id:"input-"+w(),this.update(),this.props.value&&(this.state._value=this.props.value,this.update()),this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update()),this.props.placeholder&&(this.state._placeholder=this.props.placeholder,this.update()),this.props.label&&(this.state._label=this.props.label,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){const t=this.getStateful(this._root),e=this.prepareHydrate(t);if(this.destroyAnyNodes(),this.updateBindings(),e.length){const s=this.getStateful(this._root);this.hydrateDom(e,s)}}getStateful(t){const e=t.querySelectorAll("[data-dom-state]");return e?Array.from(e):[]}prepareHydrate(t){return t.map(e=>({id:e.dataset.domState,value:e.value,active:document.activeElement===e,selectionStart:e.selectionStart}))}hydrateDom(t,e){return e.map((s,o)=>{const n=t.find(r=>s.dataset.domState===r.id);n&&(s.value=n.value,n.active&&(s.focus(),s.selectionStart=n.selectionStart))})}updateBindings(){this._root.querySelectorAll("[data-el='div-db-input-1']").forEach(t=>{t.className="db-input "+(this.props.className||""),this.props.variant&&t.setAttribute("data-variant",this.props.variant)}),this._root.querySelectorAll("[data-el='show-db-input']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-input-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='show-db-input-2']").forEach(t=>{this.props.iconBefore&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input']").forEach(t=>{this.props.iconBefore&&t.setAttribute("icon",this.props.iconBefore)}),this._root.querySelectorAll("[data-el='input-db-input-1']").forEach(t=>{t.setAttribute("id",this.state.mId),this.props.name&&t.setAttribute("name",this.props.name),this.props.type,t.setAttribute("type",this.props.type||"text"),t.setAttribute("placeholder",this.state._placeholder),t.setAttribute("aria-labelledby",this.state.mId+"-label"),this.props.disabled&&t.setAttribute("disabled",this.props.disabled),this.props.required&&t.setAttribute("required",this.props.required),t.value=this.state._value,this.props.maxLength&&t.setAttribute("maxLength",this.props.maxLength),this.props.minLength&&t.setAttribute("minLength",this.props.minLength),this.props.pattern&&t.setAttribute("pattern",this.props.pattern),t.removeEventListener("input",this.onInputDbInput1Input),t.addEventListener("input",this.onInputDbInput1Input),t.removeEventListener("blur",this.onInputDbInput1Blur),t.addEventListener("blur",this.onInputDbInput1Blur),t.removeEventListener("focus",this.onInputDbInput1Focus),t.addEventListener("focus",this.onInputDbInput1Focus)}),this._root.querySelectorAll("[data-el='label-db-input-1']").forEach(t=>{t.setAttribute("for",this.state.mId),t.setAttribute("id",this.state.mId+"-label")}),this._root.querySelectorAll("[data-el='div-db-input-2']").forEach(t=>{this.renderTextNode(t,this.state._label)}),this._root.querySelectorAll("[data-el='show-db-input-3']").forEach(t=>{this.props.description&&this.showContent(t)}),this._root.querySelectorAll("[data-el='div-db-input-3']").forEach(t=>{this.renderTextNode(t,this.props.description)}),this._root.querySelectorAll("[data-el='show-db-input-4']").forEach(t=>{(this.props.variant||this.props.required||this.props.pattern)&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input-2']").forEach(t=>{t.setAttribute("icon",this.state.getIcon(this.props.variant))}),this._root.querySelectorAll("[data-el='show-db-input-5']").forEach(t=>{this.props.iconAfter&&this.showContent(t)}),this._root.querySelectorAll("[data-el='db-icon-db-input-3']").forEach(t=>{this.props.iconAfter&&t.setAttribute("icon",this.props.iconAfter)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-input",x);class T extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/button/button.css",handleClick(e){t.props.onClick&&t.props.onClick(e)}},this.props||(this.props={}),this.componentProps=["onClick","type","disabled","text","className","icon","icntxt","size","state","width","variant","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onButtonDbButton1Click=e=>{this.state.handleClick(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <button data-el="button-db-button-1">
        <template data-el="show-db-button">
          <link rel="stylesheet" data-el="link-db-button-1" />
        </template>
      
        <db-icon data-el="db-icon-db-button"></db-icon>
      
        <slot></slot>
      </button>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return["text","variant","icon","icntxt"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='button-db-button-1']").forEach(t=>{this.props.type&&t.setAttribute("type",this.props.type),this.props.disabled&&t.setAttribute("disabled",this.props.disabled),this.props.text&&t.setAttribute("aria-label",this.props.text),t.className="db-button"+(this.props.className?" "+this.props.className:"")+(this.props.icon&&!this.props.icntxt?" is-icon-text-replace":""),this.props.size&&t.setAttribute("data-size",this.props.size),this.props.state&&t.setAttribute("data-state",this.props.state),this.props.width&&t.setAttribute("data-width",this.props.width),this.props.variant&&t.setAttribute("data-variant",this.props.variant),t.removeEventListener("click",this.onButtonDbButton1Click),t.addEventListener("click",this.onButtonDbButton1Click)}),this._root.querySelectorAll("[data-el='show-db-button']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-button-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='db-icon-db-button']").forEach(t=>{this.props.icon&&t.setAttribute("icon",this.props.icon),this.props.icntxt&&t.setAttribute("icntxt",this.props.icntxt)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-button",T);const _=()=>(window.addEventListener("load",()=>{const i=document.querySelector("#db-input"),t=document.querySelector("#db-button"),e=document.querySelector("#db-input-container");i&&(i.props.onChange=s=>{e.innerHTML=s.target.value}),t&&(t.props.onClick=()=>{alert(JSON.stringify({input:i.state._value}))})}),`
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
	`),S=()=>(window.addEventListener("load",()=>{const i=document.querySelector("#select-variant"),t=Array.from(document.querySelectorAll("db-button"));i&&i.addEventListener("change",e=>{for(const s of t)s.setAttribute("variant",e.target.value)})}),`
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
	</div>`),y=()=>document.location.search.slice(1).split("&").filter(i=>(i==null?void 0:i.length)>0).reduce((i,t)=>{const e=t.split("=");return{...i,[e[0]]:e[1]}},{}),C=()=>(window.addEventListener("load",()=>{const i=y();["primary","secondary","success","critical","warning","information"].some(t=>t.includes(i.color??""))?document.querySelector("#backgroundWarning").style.display="block":document.querySelector("#backgroundWarning").style.display="none"}),`
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
	</div>`),u={button:"/button",input:"/input"},l=[{path:"/",label:"Home",component:_},{path:u.button,label:"Button",component:S},{path:u.input,label:"Input",component:C}];class D extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/page/page.css"},this.props||(this.props={}),this.componentProps=["className","type","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <div data-el="div-db-page-1">
        <template data-el="show-db-page">
          <link rel="stylesheet" data-el="link-db-page-1" />
        </template>
      
        <slot name="header"></slot>
      
        <main class="db-main"><slot></slot></main>
      
        <slot name="footer"></slot>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-page-1']").forEach(t=>{t.className="db-page"+(this.props.className?" "+this.props.className:"")+(this.props.type==="fixedHeaderFooter"?" fixed-header-footer":"")}),this._root.querySelectorAll("[data-el='show-db-page']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-page-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-page",D);class P extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/divider/divider-web-component.css"},this.props||(this.props={}),this.componentProps=["margin","variant","className","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <div data-el="div-db-divider-1">
        <template data-el="show-db-divider">
          <link rel="stylesheet" data-el="link-db-divider-1" />
        </template>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return["variant","margin"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-divider-1']").forEach(t=>{this.props.margin&&t.setAttribute("data-margin",this.props.margin),this.props.variant&&t.setAttribute("data-variant",this.props.variant),t.className="db-divider"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-divider']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-divider-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-divider",P);class I extends HTMLElement{get _dialogRef(){return this._root.querySelector("[data-ref='DBDrawer-dialogRef']")}get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/drawer/drawer-web-component.css",handleClose(e){(e==="close"||e.target.nodeName==="DIALOG")&&t.props.onClose&&t.props.onClose()},handleDialogOpen(){t._dialogRef&&(t.props.open&&!t._dialogRef.open&&t._dialogRef.showModal(),!t.props.open&&t._dialogRef.open&&t._dialogRef.close())}},this.props||(this.props={}),this.componentProps=["onClose","open","className","children","stylePath"],this.updateDeps=[[this.props.open]],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onDialogDbDrawer1Click=e=>{this.state.handleClose(e)},this.onDbButtonDbDrawerClick=e=>{this.state.handleClose("close")},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <dialog
        class="db-drawer"
        data-el="dialog-db-drawer-1"
        data-ref="DBDrawer-dialogRef"
      >
        <template data-el="show-db-drawer">
          <link rel="stylesheet" data-el="link-db-drawer-1" />
        </template>
      
        <div data-el="div-db-drawer-1">
          <div class="db-drawer-header">
            <db-button
              id="button-close-drawer"
              icon="close"
              variant="ghost"
              data-el="db-button-db-drawer"
            >
              Burger Menu
            </db-button>
          </div>
      
          <div class="db-drawer-content"><slot></slot></div>
        </div>
      </dialog>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return["open"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update()),this.state.handleDialogOpen()}onUpdate(){const t=this;(function(e,s){!!e.find((n,r)=>n!==s[r])!==void 0&&(t.state.handleDialogOpen(),t.updateDeps[0]=s)})(t.updateDeps[0],[t.props.open])}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='dialog-db-drawer-1']").forEach(t=>{t.removeEventListener("click",this.onDialogDbDrawer1Click),t.addEventListener("click",this.onDialogDbDrawer1Click)}),this._root.querySelectorAll("[data-el='show-db-drawer']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-drawer-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='div-db-drawer-1']").forEach(t=>{t.className="db-drawer-container"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='db-button-db-drawer']").forEach(t=>{t.removeEventListener("click",this.onDbButtonDbDrawerClick),t.addEventListener("click",this.onDbButtonDbDrawerClick)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-drawer",I);class U extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/header/header-web-component.css",toggle(){t.props.onToggle&&t.props.onToggle(!t.props.drawerOpen)}},this.props||(this.props={}),this.componentProps=["onToggle","drawerOpen","className","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onDbDrawerDbHeaderClose=e=>{this.state.toggle()},this.onDbButtonDbHeaderClick=e=>{this.state.toggle()},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <header role="banner" data-el="header-db-header-1">
        <template data-el="show-db-header">
          <link rel="stylesheet" data-el="link-db-header-1" />
        </template>
      
        <db-drawer class="db-header-hide-on-desktop" data-el="db-drawer-db-header">
          <div class="db-header-drawer-navigation">
            <div class="db-header-navigation"><slot name="navigation-mobile"></slot></div>
      
            <div class="db-header-meta-navigation">
              <slot name="meta-navigation-mobile"></slot>
            </div>
          </div>
      
          <div class="db-header-action-bar">
            <slot name="action-bar-mobile"></slot>
          </div>
        </db-drawer>
      
        <div class="db-header-meta-navigation db-header-hide-on-mobile">
          <slot name="meta-navigation"></slot>
        </div>
      
        <div class="db-header-navigation-bar">
          <div class="db-header-brand-container">
            <slot name="brand"></slot>
      
            <db-divider
              variant="vertical"
              class="db-header-divider db-header-hide-on-mobile"
            ></db-divider>
          </div>
      
          <div class="db-header-navigation-container">
            <div class="db-header-navigation db-header-hide-on-mobile">
              <slot></slot>
            </div>
      
            <div class="db-header-call-to-action">
              <slot name="call-to-action"></slot>
            </div>
          </div>
      
          <div class="db-header-action-container">
            <db-divider
              variant="vertical"
              margin="none"
              class="db-header-divider"
            ></db-divider>
      
            <db-button
              id="button-burger-menu"
              icon="menu"
              variant="ghost"
              class="db-header-hide-on-desktop"
              data-el="db-button-db-header"
            >
              Burger Menu
            </db-button>
      
            <div class="db-header-action-bar db-header-hide-on-mobile">
              <slot name="action-bar"></slot>
            </div>
          </div>
        </div>
      </header>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return["draweropen"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='header-db-header-1']").forEach(t=>{t.className="db-header"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-header']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-header-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='db-drawer-db-header']").forEach(t=>{t.setAttribute("open",Boolean(this.props.drawerOpen)),t.props.onClose=this.onDbDrawerDbHeaderClose}),this._root.querySelectorAll("[data-el='db-button-db-header']").forEach(t=>{t.removeEventListener("click",this.onDbButtonDbHeaderClick),t.addEventListener("click",this.onDbButtonDbHeaderClick)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-header",U);const h={anchorRef:"/",src:"./assets/images/db_logo.svg"};class k extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/brand/brand.css"},this.props||(this.props={}),this.componentProps=["className","anchorRef","anchorTitle","anchorRelation","hideDefaultAsset","imgSrc","imgAlt","imgHeight","imgWidth","anchorChildren","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <div data-el="div-db-brand-1">
        <template data-el="show-db-brand">
          <link rel="stylesheet" data-el="link-db-brand-1" />
        </template>
      
        <a data-el="a-db-brand-1">
          <template data-el="show-db-brand-2">
            <img class="db-logo" data-el="img-db-brand-1" />
          </template>
      
          <template data-el="show-db-brand-3">
            <strong class="db-brand-title"><slot></slot></strong>
          </template>
        </a>
      
        <template data-el="show-db-brand-4">
          <strong class="db-brand-title"><slot></slot></strong>
        </template>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){const o=this.componentProps.find(n=>n.toLowerCase()===t);s==="false"?delete this.props[o]:this.props[o]=s,this.update()}static get observedAttributes(){return[]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-brand-1']").forEach(t=>{t.className="db-brand"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-brand']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-brand-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='a-db-brand-1']").forEach(t=>{(this.props.anchorRef??h.anchorRef)&&t.setAttribute("href",this.props.anchorRef??h.anchorRef),this.props.anchorTitle&&t.setAttribute("title",this.props.anchorTitle),this.props.anchorRelation&&t.setAttribute("rel",this.props.anchorRelation)}),this._root.querySelectorAll("[data-el='show-db-brand-2']").forEach(t=>{!this.props.hideDefaultAsset&&this.showContent(t)}),this._root.querySelectorAll("[data-el='img-db-brand-1']").forEach(t=>{(this.props.imgSrc??h.src)&&t.setAttribute("src",this.props.imgSrc??h.src),this.props.imgAlt&&t.setAttribute("alt",this.props.imgAlt),this.props.imgHeight&&t.setAttribute("height",this.props.imgHeight),this.props.imgWidth&&t.setAttribute("width",this.props.imgWidth)}),this._root.querySelectorAll("[data-el='show-db-brand-3']").forEach(t=>{this.props.anchorChildren&&this.showContent(t)}),this._root.querySelectorAll("[data-el='show-db-brand-4']").forEach(t=>{!this.props.anchorChildren&&this.showContent(t)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-brand",k);const b=i=>`<div slot="action-bar${i?"-mobile":""}">
				<db-button variant="ghost" icon="account">Profile</db-button>
				<db-button variant="ghost" icon="alert">Notification</db-button>
				<db-button variant="ghost" icon="help">Help</db-button>
			</div>`,f=i=>`<nav class="desktop-navigation" ${i&&'slot="navigation-mobile"'}>
				<ul>
					${l.map(t=>`<li><a href=".${t.path}">${t.label}</a></li>`).join("")}
				</ul>
			</nav>`,v=(i,t)=>`db-ui-${i} db-bg-${t}`,m=(i,t,e)=>{t=encodeURIComponent(t),e=encodeURIComponent(e),i[t]=e;const s=Object.keys(i).map(o=>`${o}=${i[o]}`);document.location.search=s.join("&")};onload=()=>{const i=Array.from(document.querySelectorAll("#select-tonality")),t=Array.from(document.querySelectorAll("#select-color")),e=document.querySelector("#content"),s=document.querySelector("#db-header"),o=y(),n=o.tonality??"regular",r=o.color??"neutral-0";if(e.className=v(n,r),i.length>0)for(const a of i)a.value=n,a.addEventListener("change",p=>{m(o,"tonality",p.target.value)});if(t.length>0)for(const a of t)a.value=r,a.addEventListener("change",p=>{m(o,"color",p.target.value)});s&&(s.props.onToggle=a=>{s.setAttribute("drawerOpen",a)})};const g=i=>`
			<div slot="meta-navigation${i?"-mobile":""}">
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
			</div>`,R=i=>`
	<db-page type="fixedHeaderFooter">
		<db-header id="db-header" slot="header">
			<db-brand slot="brand" anchorChildren="true" insideHeader="true">Vanilla Showcase</db-brand>
			${f(!0)}
			${f(!1)}
			<db-button slot="call-to-action" variant="ghost" icon="search">Search</db-button>
			${b(!0)}
			${b(!1)}
			${g(!0)}
			${g(!1)}
		</db-header>
			<div id="content" class="${v()}">
				${i}
			</div>
		<div slot="footer">Footer</div>
	</db-page>
`,q=()=>{const i=l.filter(t=>t.path!=="/").find(t=>window.location.href.includes(t.path));return i?i.component():l[0].component()};document.querySelector("#app").innerHTML=R(q());
