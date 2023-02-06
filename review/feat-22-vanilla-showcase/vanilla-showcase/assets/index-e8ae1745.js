(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();class y extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/icon/icon.css"},this.props||(this.props={}),this.componentProps=["icon","className","withText","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <span aria-hidden="true" data-el="span-db-icon-1">
        <template data-el="show-db-icon">
          <link rel="stylesheet" data-el="link-db-icon-1" />
        </template>
      
        <slot></slot>
      </span>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){this.props[t]=s,this.update()}static get observedAttributes(){return["icon"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='span-db-icon-1']").forEach(t=>{t.setAttribute("data-icon",this.props.icon),t.className="db-icon"+(this.props.className?" "+this.props.className:"")+(this.props.withText?"":" is-icon-text-replace")}),this._root.querySelectorAll("[data-el='show-db-icon']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-icon-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-icon",y);class m extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super();const t=this;this.state={stylePath:"components/button/button.css",handleClick(e){t.props.onClick&&t.props.onClick(e)}},this.props||(this.props={}),this.componentProps=["onClick","text","size","state","width","variant","className","onlyIcon","icon","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.onButtonDbButton1Click=e=>{this.state.handleClick(e)},this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <button data-el="button-db-button-1">
        <template data-el="show-db-button">
          <link rel="stylesheet" data-el="link-db-button-1" />
        </template>
      
        <db-icon data-el="db-icon-db-button">
          <slot></slot>
        </db-icon>
      
        <template data-el="show-db-button-2">
          <template data-el="div-db-button-2"><!-- props.text --></template>
        </template>
      </button>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){this.props[t]=s,this.update()}static get observedAttributes(){return["text","variant","icon"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='button-db-button-1']").forEach(t=>{t.setAttribute("aria-label",this.props.text),t.setAttribute("data-size",this.props.size),t.setAttribute("data-state",this.props.state),t.setAttribute("data-width",this.props.width),t.setAttribute("data-variant",this.props.variant),t.removeEventListener("click",this.onButtonDbButton1Click),t.addEventListener("click",this.onButtonDbButton1Click),t.className="db-button"+(this.props.className?" "+this.props.className:"")+(this.props.onlyIcon?" is-icon-text-replace":"")}),this._root.querySelectorAll("[data-el='show-db-button']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-button-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='db-icon-db-button']").forEach(t=>{t.setAttribute("icon",this.props.icon),t.setAttribute("withText",!this.props.onlyIcon)}),this._root.querySelectorAll("[data-el='show-db-button-2']").forEach(t=>{this.props.text&&!this.props.onlyIcon&&this.showContent(t)}),this._root.querySelectorAll("[data-el='div-db-button-2']").forEach(t=>{this.renderTextNode(t,this.props.text)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-button",m);const g=()=>{var i;return((i=window==null?void 0:window.crypto)==null?void 0:i.randomUUID())||Math.random().toString()},x="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARE_ARENT_INITIALIZING_IT_IN_THE_FRONTEND";class A extends HTMLElement{get _inputRef(){return this._root.querySelector("[data-ref='DBTab-inputRef']")}get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/tab/tab.css",mId:x},this.props||(this.props={}),this.componentProps=["className","name","label","content","children","stylePath","active"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <div data-el="div-db-tab-1">
        <template data-el="show-db-tab">
          <link rel="stylesheet" data-el="link-db-tab-1" />
        </template>
      
        <input
          type="radio"
          data-el="input-db-tab-1"
          data-dom-state="DBTab-input-db-tab-1"
          data-ref="DBTab-inputRef"
        />
      
        <label role="tab" data-el="label-db-tab-1">
          <template data-el="div-db-tab-2"><!-- props.label --></template>
        </label>
      
        <section role="tabpanel" data-el="section-db-tab-1">
          <template data-el="show-db-tab-2">
            <template data-el="div-db-tab-3"><!-- props.content --></template>
          </template>
      
          <slot></slot>
        </section>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){this.props[t]=s,this.update()}static get observedAttributes(){return["name","label","active"]}onMount(){var t;this.state.mId=g(),this.update(),this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update()),this.props.active&&((t=self._inputRef)==null||t.click())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){const t=this.getStateful(this._root),e=this.prepareHydrate(t);if(this.destroyAnyNodes(),this.updateBindings(),e.length){const s=this.getStateful(this._root);this.hydrateDom(e,s)}}getStateful(t){const e=t.querySelectorAll("[data-dom-state]");return e?Array.from(e):[]}prepareHydrate(t){return t.map(e=>({id:e.dataset.domState,value:e.value,active:document.activeElement===e,selectionStart:e.selectionStart}))}hydrateDom(t,e){return e.map((s,o)=>{const n=t.find(a=>s.dataset.domState===a.id);n&&(s.value=n.value,n.active&&(s.focus(),s.selectionStart=n.selectionStart))})}updateBindings(){this._root.querySelectorAll("[data-el='div-db-tab-1']").forEach(t=>{t.className="db-tab"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-tab']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-tab-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='input-db-tab-1']").forEach(t=>{t.setAttribute("name",this.props.name),t.setAttribute("id",this.state.mId)}),this._root.querySelectorAll("[data-el='label-db-tab-1']").forEach(t=>{t.setAttribute("for",this.state.mId)}),this._root.querySelectorAll("[data-el='div-db-tab-2']").forEach(t=>{this.renderTextNode(t,this.props.label)}),this._root.querySelectorAll("[data-el='section-db-tab-1']").forEach(t=>{t.setAttribute("id","content-"+this.state.mId)}),this._root.querySelectorAll("[data-el='show-db-tab-2']").forEach(t=>{this.props.content&&this.showContent(t)}),this._root.querySelectorAll("[data-el='div-db-tab-3']").forEach(t=>{this.renderTextNode(t,this.props.content)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}}customElements.define("db-tab",A);class N extends HTMLElement{get _root(){return this.shadowRoot||this}constructor(){super(),this.state={stylePath:"components/tab-bar/tab-bar.css",convertTabs(t){try{return typeof t=="string"?JSON.parse(t):t}catch(e){console.error(e)}}},this.props||(this.props={}),this.componentProps=["className","tabs","children","stylePath"],this.nodesToDestroy=[],this.pendingUpdate=!1,this.attachShadow({mode:"open"})}destroyAnyNodes(){this.nodesToDestroy.forEach(t=>t.remove()),this.nodesToDestroy=[]}connectedCallback(){this.getAttributeNames().forEach(t=>{const e=t.replace(/-/g,""),s=new RegExp(e,"i");this.componentProps.forEach(o=>{if(s.test(o)){const n=this.getAttribute(t);this.props[o]!==n&&(this.props[o]=n)}})}),this._root.innerHTML=`
      <div role="tablist" data-el="div-db-tab-bar-1">
        <template data-el="show-db-tab-bar">
          <link rel="stylesheet" data-el="link-db-tab-bar-1" />
        </template>
      
        <template data-el="show-db-tab-bar-2">
          <template data-el="for-db-tab-bar">
            <db-tab data-el="db-tab-db-tab-bar">
              <template data-el="div-db-tab-bar-2"><!-- tab.children --></template>
            </db-tab>
          </template>
        </template>
      
        <slot></slot>
      </div>`,this.pendingUpdate=!0,this.render(),this.onMount(),this.pendingUpdate=!1,this.update()}showContent(t){const e=t.content.cloneNode(!0);Array.from(e.childNodes).forEach(o=>{t!=null&&t.scope&&(o.scope=t.scope),t!=null&&t.context&&(o.context=t.context),this.nodesToDestroy.push(o)}),t.after(e)}attributeChangedCallback(t,e,s){this.props[t]=s,this.update()}static get observedAttributes(){return["name","tabs"]}onMount(){this.props.stylePath&&(this.state.stylePath=this.props.stylePath,this.update())}onUpdate(){}update(){this.pendingUpdate!==!0&&(this.pendingUpdate=!0,this.render(),this.onUpdate(),this.pendingUpdate=!1)}render(){this.destroyAnyNodes(),this.updateBindings()}updateBindings(){this._root.querySelectorAll("[data-el='div-db-tab-bar-1']").forEach(t=>{t.className="cmp-tab-bar"+(this.props.className?" "+this.props.className:"")}),this._root.querySelectorAll("[data-el='show-db-tab-bar']").forEach(t=>{this.state.stylePath&&this.showContent(t)}),this._root.querySelectorAll("[data-el='link-db-tab-bar-1']").forEach(t=>{t.setAttribute("href",this.state.stylePath)}),this._root.querySelectorAll("[data-el='show-db-tab-bar-2']").forEach(t=>{this.props.tabs&&this.showContent(t)}),this._root.querySelectorAll("[data-el='for-db-tab-bar']").forEach(t=>{let e=this.state.convertTabs(this.props.tabs);this.renderLoop(t,e,"tab")}),this._root.querySelectorAll("[data-el='db-tab-db-tab-bar']").forEach(t=>{const e=this.getScope(t,"tab");t.key=e.name,t.setAttribute("name",e.name),t.setAttribute("active",e.active),t.setAttribute("label",e.label),t.setAttribute("content",e.content)}),this._root.querySelectorAll("[data-el='div-db-tab-bar-2']").forEach(t=>{const e=this.getScope(t,"tab");this.renderTextNode(t,e.children)})}renderTextNode(t,e){const s=document.createTextNode(e);t!=null&&t.scope&&(s.scope=t.scope),t!=null&&t.context&&(s.context=t.context),t.after(s),this.nodesToDestroy.push(t.nextSibling)}getScope(t,e){var s;do{let o=(s=t==null?void 0:t.scope)==null?void 0:s[e];if(o!==void 0)return o}while(t=t.parentNode)}renderLoop(t,e,s,o,n){const a=[];for(let[c,b]of e.entries()){const u=t.content.cloneNode(!0),f=Array.from(u.childNodes),l={};let d=l;if(t!=null&&t.scope){const r={get(p,h,E){return h in p?p[h]:h in t.scope?t.scope[h]:p[h]}};d=new Proxy(l,r)}f.forEach(r=>{s!==void 0&&(d[s]=b),o!==void 0&&(d[o]=c),n!==void 0&&(d[n]=e),r.scope=d,t.context&&(r.context=context),this.nodesToDestroy.push(r),a.unshift(r)})}a.forEach(c=>t.after(c))}}customElements.define("db-tab-bar",N);const T=[{name:"tab-bar-2",label:"2-Tab1",active:!0,children:"Content 2-1"},{name:"tab-bar-2",label:"2-Tab2",content:"Content 2-2"}];document.querySelector("#app").innerHTML=`
  <main>
      <h1>Vanilla</h1>
      <div style="display: flex; gap: 4px; align-items: center">
        <db-button variant="secondary">Test</db-button>
        <db-button variant="primary" text="Test" icon="account"></db-button>
        <db-icon icon="account"></db-icon>
      </div>

        <h2>TabBar</h2>
      <div style="display: flex; gap: 4px; flex-direction: column">
        <db-tab-bar>
          <db-tab name="tab-bar-1" label="Tab1">
            <strong>Content 1-1</strong>
          </db-tab>
          <db-tab name="tab-bar-1" label="Tab2" active={true}>
            Content 1-2
          </db-tab>
        </db-tab-bar>

        <db-tab-bar
          tabs="${JSON.stringify(T).replace(/"/g,"&quot;")}"
        />
      </div>
  </main>
`;
