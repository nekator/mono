(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32945],{35504:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/validation",function(){return n(37910)}])},37910:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return u}});var d=n(52322),s=n(97335),o=n(45392);function l(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.h1,{id:"validation",children:"Validation"}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:["The form components ",(0,d.jsx)(i.code,{children:"checkbox"}),", ",(0,d.jsx)(i.code,{children:"radio"}),", ",(0,d.jsx)(i.code,{children:"input"}),", ",(0,d.jsx)(i.code,{children:"textarea"})," & ",(0,d.jsx)(i.code,{children:"select"}),' have some sort of "auto-validation"']}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.code,{children:"radio"})," do have a color change if you use the ",(0,d.jsx)(i.code,{children:"required"})," attribute. If you use ",(0,d.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation",children:(0,d.jsx)(i.code,{children:"required"})})," they will be highlighted directly"]}),"\n",(0,d.jsxs)(i.li,{children:["If you use ",(0,d.jsx)(i.code,{children:"required"})," on ",(0,d.jsx)(i.code,{children:"input"}),", ",(0,d.jsx)(i.code,{children:"textarea"})," or ",(0,d.jsx)(i.code,{children:"select"})," you will see invalid/valid states only on submitting or ",(0,d.jsx)(i.code,{children:"onchange"})]}),"\n",(0,d.jsxs)(i.li,{children:["There are some other attributes for ",(0,d.jsx)(i.code,{children:"input"})," (",(0,d.jsx)(i.code,{children:"type"}),",",(0,d.jsx)(i.code,{children:"minlength"}),",",(0,d.jsx)(i.code,{children:"maxlength"}),",",(0,d.jsx)(i.code,{children:"pattern"}),") and ",(0,d.jsx)(i.code,{children:"textarea"}),"(",(0,d.jsx)(i.code,{children:"minlength"}),",",(0,d.jsx)(i.code,{children:"maxlength"}),") which can be used for ",(0,d.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation",children:"validation"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"Note:"})," When you use some validation like ",(0,d.jsx)(i.code,{children:"required"})," for ",(0,d.jsx)(i.code,{children:"input"}),", ",(0,d.jsx)(i.code,{children:"textarea"})," or ",(0,d.jsx)(i.code,{children:"select"})," you need to provide a ",(0,d.jsx)(i.code,{children:"invalidMessage"})," (if needed, elsewhere we use the localized browser defaults, which might be fine on most cases) and a ",(0,d.jsx)(i.code,{children:"validMessage"}),". Otherwise, you will see a ",(0,d.jsx)(i.code,{children:"TODO"})," message to inform you that an additional property should be provided."]}),"\n"]}),"\n",(0,d.jsx)(i.h2,{id:"validinvalid-messages",children:"Valid/Invalid Messages"}),"\n",(0,d.jsxs)(i.p,{children:["If you use some framework you can pass the props ",(0,d.jsx)(i.code,{children:"invalidMessage"})," and ",(0,d.jsx)(i.code,{children:"validMessage"})," to the component. If you use plain html you need to add 2 ",(0,d.jsx)(i.code,{children:".db-infotext"})," with ",(0,d.jsx)(i.code,{children:'[data-semantic="successful"]'})," &",(0,d.jsx)(i.code,{children:'[data-semantic="critical"]'})," inside your form-element."]}),"\n",(0,d.jsx)(i.h2,{id:"programmatically-set--handle-validation-by-yourself",children:"Programmatically set / handle validation by yourself"}),"\n",(0,d.jsxs)(i.p,{children:["You can use ",(0,d.jsx)(i.code,{children:"data-custom-validity|customValidity=\"'invalid' | 'valid' | 'no-validation'\""})," to disable ",(0,d.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid",children:(0,d.jsx)(i.code,{children:":user-valid"})}),"."]}),"\n",(0,d.jsxs)(i.blockquote,{children:["\n",(0,d.jsxs)(i.p,{children:[(0,d.jsx)(i.strong,{children:"Note:"})," This may lead to problems and inconsistency, only use it if you know what you do, and have specific validation conditions that aren't possible to get defined by the huge range of already existing ",(0,d.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation",children:"validation conditions and patterns through attributs"}),"."]}),"\n"]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var a=n(12480),c=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:"Example"}),(0,d.jsxs)("div",{className:"validity-container",children:[(0,d.jsxs)(a.f,{children:[(0,d.jsx)("h4",{children:"No customValidity"}),(0,d.jsx)(a.EZ,{semantic:"informational",children:(0,d.jsx)("span",{children:"default browser behaviour with auto changing colors"})}),(0,d.jsxs)("form",{children:[(0,d.jsx)(a.aq,{label:"Required",placeholder:"Required",invalidMessage:"This is required",validMessage:"Success",required:!0}),(0,d.jsx)(a.Y1,{children:"Send"})]})]}),(0,d.jsxs)(a.f,{children:[(0,d.jsx)("h4",{children:"With customValidity (valid)"}),(0,d.jsx)(a.EZ,{semantic:"informational",children:(0,d.jsx)("span",{children:"fixed customValidity, no auto changing of colors and bad UX"})}),(0,d.jsxs)("form",{children:[(0,d.jsx)(a.aq,{label:"Required",placeholder:"Required",invalidMessage:"This is required",validMessage:"Success",required:!0,customValidity:"valid"}),(0,d.jsx)(a.Y1,{children:"Send"})]})]})]})]});let t=e=>{let{children:i}=e;return(0,d.jsx)(s.Z,{children:i})};function h(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{}),"\n",(0,d.jsx)(c,{})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})})}}},function(e){e.O(0,[49710,97335,92888,49774,40179],function(){return e(e.s=35504)}),_N_E=e.O()}]);