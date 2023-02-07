"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[825],{825:function(e,t,s){s.r(t),s.d(t,{github_version_switcher:function(){return h}});var r=s(4543);let h=class{constructor(e){(0,r.r)(this,e),this._defaultBranch="latest",this.stripString=e=>e.replace(/[^a-zA-Z0-9-]/g,""),this.fetchFromGitHubApi=async e=>{let t=await fetch(e);return await t.json()},this.setCurrentBranch=e=>{let t=window.location.href,s=e.find(e=>t.includes(e));s&&(this.currentBranch=s)},this.setBranches=e=>{let t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.forEach(e=>{let t=this.groups.find(t=>e.startsWith(t.prefix));t?t.branches.push(e):this.groups.at(-1).branches.push(e)}),this.setCurrentBranch(t)},this.setTags=e=>{let t=e.map(e=>e.name);t.forEach(e=>{this.groups[0].branches.push(e)}),this.setCurrentBranch(t)},this.owner=void 0,this.repo=void 0,this.groups=[{prefix:"v",name:"Versions",branches:[]},{prefix:"test",name:"Tests",branches:[]},{prefix:"feat",name:"Features",branches:[]},{prefix:"fix",name:"Bugfixes",branches:[]},{prefix:"chore",name:"Chore",branches:[]},{prefix:"docs",name:"Docs",branches:[]},{prefix:"refactor",name:"Refactors",branches:[]},{prefix:"style",name:"Styles",branches:[]},{prefix:"ci",name:"CI",branches:[]},{prefix:"perf",name:"Perf",branches:[]},{prefix:"",name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.cleanOwner=void 0,this.cleanRepo=void 0}get defaultBranch(){return this._defaultBranch}set defaultBranch(e){this._defaultBranch=e}async componentWillLoad(){let e=this.stripString(this.owner);this.cleanOwner=e;let t=this.stripString(this.repo);this.cleanRepo=t;let s=await this.fetchFromGitHubApi(`https://api.github.com/repos/${e}/${t}/branches`);this.setBranches(s);let r=await this.fetchFromGitHubApi(`https://api.github.com/repos/${e}/${t}/tags`);this.setTags(r)}handleChange(e,t,s){if(t&&s){let r=top.location.href,h=r.split("?"),a=h[h.length-1],n=3===e.split(".").length&&e.startsWith("v");top.location=`https://${t}.github.io/${s}${this._defaultBranch===e?"":`${n?"/version":"/review"}/${e}`}/?${a}`}}render(){var e;return(0,r.h)(r.H,null,(null===(e=this.groups)||void 0===e?void 0:e.length)>0&&(0,r.h)("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:e=>this.handleChange(e.target.value,this.cleanOwner,this.cleanRepo)},(0,r.h)("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter(e=>{var t;return(null===(t=e.branches)||void 0===t?void 0:t.length)>0}).map(e=>(0,r.h)("optgroup",{key:e.name,label:e.name},e.branches.map((t,s)=>(0,r.h)("option",{key:`${e.name}-${t}-${s}`,value:t,selected:this.currentBranch===t},t))))))}};h.style=".gh-version-switcher select{max-width:196px}"}}]);