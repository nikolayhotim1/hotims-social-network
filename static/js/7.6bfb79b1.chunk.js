(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{223:function(t,r,e){t.exports={formControl:"FormsControls_formControl__80KjQ",error:"FormsControls_error__2lhvj",formSummaryError:"FormsControls_formSummaryError__1HBrY"}},224:function(t,r,e){"use strict";e.d(r,"b",(function(){return l})),e.d(r,"a",(function(){return m})),e.d(r,"c",(function(){return h}));var c=e(5),n=e(235),a=e(103),o=e(223),i=e.n(o),s=e(2),u=["input"],j=["input"],b=function(t){var r=t.meta,e=r.touched,c=r.error,n=t.children,a=e&&c;return Object(s.jsxs)("div",{className:"".concat(i.a.formControl," ").concat(a?i.a.error:""),children:[Object(s.jsx)("div",{children:n}),a&&Object(s.jsx)("span",{children:c})]})},l=function(t){var r=t.input,e=Object(n.a)(t,u);return Object(s.jsx)(b,Object(c.a)(Object(c.a)({},e),{},{children:Object(s.jsx)("textarea",Object(c.a)(Object(c.a)({},r),e))}))},m=function(t){var r=t.input,e=Object(n.a)(t,j);return Object(s.jsx)(b,Object(c.a)(Object(c.a)({},e),{},{children:Object(s.jsx)("input",Object(c.a)(Object(c.a)({},r),e))}))};function h(t,r,e,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a,Object(c.a)({component:t,name:r,placeholder:e,validate:n},o)),i]})}},226:function(t,r,e){"use strict";e.d(r,"b",(function(){return c})),e.d(r,"a",(function(){return n}));var c=function(t){if(!t)return"Field is required"},n=function(t){return function(r){if(r.length>t)return"Max length is ".concat(t," symbols")}}},302:function(t,r,e){"use strict";e.r(r);var c=e(18),n=e(104),a=e(226),o=e(224),i=e(223),s=e.n(i),u=e(2),j=function(t){var r=t.handleSubmit,e=t.error,c=t.captchaURL;return Object(u.jsxs)("form",{onSubmit:r,children:[Object(o.c)(o.a,"email","Email",[a.b]),Object(o.c)(o.a,"password","Password",[a.b],{type:"password"}),Object(o.c)(o.a,"rememberMe",null,[],{type:"checkbox"},"Remember me"),c&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:c,alt:"captcha-url"}),Object(o.c)(o.a,"captcha","Enter symbols from image",[a.b])]}),e&&Object(u.jsx)("div",{className:s.a.formSummaryError,children:e}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Login"})})]})},b=e(21),l=e(4),m=Object(n.a)({form:"login"})(j);r.default=Object(c.b)((function(t){return{captchaURL:t.auth.captchaURL,isAuth:t.auth.isAuth}}),{login:b.c})((function(t){var r=t.login,e=t.isAuth,c=t.captchaURL;return e?Object(u.jsx)(l.a,{to:"/profile"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)(m,{onSubmit:function(t){r(t.email,t.password,t.rememberMe,t.captcha)},captchaURL:c})]})}))}}]);
//# sourceMappingURL=7.6bfb79b1.chunk.js.map