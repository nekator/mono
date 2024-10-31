(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7672],{68088:(e,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/drawer/docs/Vue",function(){return r(27599)}])},27599:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>s});var o=r(52322),a=r(45392);function t(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,o.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,o.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,o.jsxs)(n.p,{children:["If you use ",(0,o.jsx)(n.code,{children:"width !== full"})," you are able to overwrite the ",(0,o.jsx)(n.code,{children:"max-width"})," with ",(0,o.jsx)(n.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,o.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { DBDrawer } from "@db-ui/v-components";\n\nconst openDrawer = ref<boolean>(false);\n\nconst toggleDrawer = (open: boolean) => {\n	openDrawer.value = open;\n};\n</script>\n\n<template>\n	<DBButton @click="toggleDrawer(true)">Open me</DBButton>\n	<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">\n		<span v-slot:drawer-header>Optional drawer header</span>\n		My Drawer content\n	</DBDrawer>\n</template>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}}},e=>{var n=n=>e(e.s=n);e.O(0,[2888,9774,179],()=>n(68088)),_N_E=e.O()}]);