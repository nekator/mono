!function(){"use strict";var e,t,n,r,a,c,o,u={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var n=d[e]={exports:{}},r=!0;try{u[e](n,n.exports,f),r=!1}finally{r&&delete d[e]}return n.exports}f.m=u,e=[],f.O=function(t,n,r,a){if(n){a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a];return}for(var o=1/0,c=0;c<e.length;c++){for(var n=e[c][0],r=e[c][1],a=e[c][2],u=!0,d=0;d<n.length;d++)o>=a&&Object.keys(f.O).every(function(e){return f.O[e](n[d])})?n.splice(d--,1):(u=!1,a<o&&(o=a));if(u){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce(function(t,n){return f.f[n](e,t),t},[]))},f.u=function(e){return"static/chunks/"+e+"."+({195:"4d891393a10bb61a",211:"b129d5643c2549f7",214:"bc5cd6a9c3ea63b2",679:"245fedfc0b5b5f47",1042:"ee5850fd64ee7dc9",2164:"b0c4a1180b6c92ea",2574:"f88fc343f294cc10",2884:"e1fe9e1460b44405",3436:"3d55dcf1e07c564b",3473:"1ec1a55787c8cf5d",3565:"663c1f3ecc148195",3573:"41d276a984a44e5b",3643:"cc8ea4018ba2226b",3681:"6f995fd8cd8449b3",3870:"84e3a248c5c3a3a6",4002:"24b753429a5ce53e",4414:"e5a1a88754b40fd6",4540:"e6bbed7fd086eb78",5463:"9928b925bada0819",6039:"62243babcb89193c",6148:"5755cfb481dd6b9e",6339:"fb0cdd2e0bd00e63",6713:"23cfff704a356d4f",6846:"6086ba6aa38e1493",6900:"b1835b114aa5fccf",6934:"8d821540bba87039",7111:"f742ae37f830a395",7136:"857867fcd57d9241",7182:"9ff3c4c285538d3e",7542:"e6824cb1fa7c98f5",7635:"bb58a7723d4530ba",7645:"17157e7ba7d38f65",7669:"65cd227efa3d97c2",8308:"450d62f0485cf819",8695:"e6dc09f1c1210b83",9583:"47c5f5d704bd2e56",9631:"4d53cb4f7efd7394"})[e]+".js"},f.miniCssF=function(e){return"static/css/"+({2888:"5702b309bb182638",9883:"30750eb1989411ce"})[e]+".css"},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="_N_E:",f.l=function(e,r,a,c){if(t[e]){t[e].push(r);return}if(void 0!==a)for(var o,u,d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var b=d[i];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+a){o=b;break}}o||(u=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,f.nc&&o.setAttribute("nonce",f.nc),o.setAttribute("data-webpack",n+a),o.src=f.tu(e)),t[e]=[r];var s=function(n,r){o.onerror=o.onload=null,clearTimeout(l);var a=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach(function(e){return e(r)}),n)return n(r)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=s.bind(null,o.onerror),o.onload=s.bind(null,o.onload),u&&document.head.appendChild(o)},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},f.tu=function(e){return f.tt().createScriptURL(e)},f.p="/mono/version/v0.0.8/_next/",a={2272:0},f.f.j=function(e,t){var n=f.o(a,e)?a[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var c=f.p+f.u(e),o=Error();f.l(c,function(t){if(f.o(a,e)&&(0!==(n=a[e])&&(a[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",o.name="ChunkLoadError",o.type=r,o.request=c,n[1](o)}},"chunk-"+e,e)}else a[e]=0}},f.O.j=function(e){return 0===a[e]},c=function(e,t){var n,r,c=t[0],o=t[1],u=t[2],d=0;if(c.some(function(e){return 0!==a[e]})){for(n in o)f.o(o,n)&&(f.m[n]=o[n]);if(u)var i=u(f)}for(e&&e(t);d<c.length;d++)r=c[d],f.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return f.O(i)},(o=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(c.bind(null,0)),o.push=c.bind(null,o.push.bind(o))}();