(this["webpackJsonpreact-app-template"]=this["webpackJsonpreact-app-template"]||[]).push([[6],{103:function(e,t,r){"use strict";function a(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return a}))},104:function(e,t,r){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return a}))},105:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));var a=/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=function(e){var t,r,a;return"string"===typeof(null===e||void 0===e?void 0:e.message)?null===e||void 0===e?void 0:e.message:(null===e||void 0===e||null===(t=e.message)||void 0===t?void 0:t.details[0])?null===e||void 0===e||null===(r=e.message)||void 0===r||null===(a=r.details[0])||void 0===a?void 0:a.message:""}},122:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return u}));var a=r(105),n=function(e){return e?a.b.test(e)?"":"emailInvalid":"emailRequire"},i=function(e){return e?e.length<4?"minPasswordInvalid":"":"passwordRequire"},s=function(e){return{email:n(e.email),password:i(e.password)}},c=function(e){return!e.email&&!e.password},o=function(e,t){if(t)return"";var r="";switch(e){case"name":r="Name Required";break;case"gender":r="Gender Required";break;case"region":r="Region Required";break;case"state":r="Sate Required"}return r},l=function(e){return{email:n(e.email),password:i(e.password),repeatPassword:(s=e.password,c=e.repeatPassword,c?s!==c?"Math Password Invalid":"":"Required RepeatPassword"),name:o("name",e.name),gender:(a=e.gender,a?"":"Required Gender"),region:(r=e.region,r?"":"Required Region"),state:(t=e.state,t?"":"Required State")};var t,r,a,s,c},u=function(e){return!e.email&&!e.password&&!e.repeatPassword&&!e.name&&!e.gender&&!e.region&&!e.state}},268:function(e,t,r){"use strict";r.r(t);var a=r(19),n=r.n(a),i=r(28),s=r(84),c=r(0),o=r.n(c),l=r(10),u=r(1),d=r(42),m=r(22);function b(e){var t=function(){var e=c.useContext(d.a);return Object(m.c)(e),e}(),r=t.formatMessage,a=t.textComponent,n=void 0===a?c.Fragment:a,i=e.id,s=e.description,o=e.defaultMessage,l=e.values,u=e.children,b=e.tagName,j=void 0===b?n:b,f=r({id:i,description:s,defaultMessage:o},l,{ignoreTag:e.ignoreTag});return"function"===typeof u?u(Array.isArray(f)?f:[f]):j?c.createElement(j,null,c.Children.toArray(f)):c.createElement(c.Fragment,null,f)}b.displayName="FormattedMessage";var j=c.memo(b,(function(e,t){var r=e.values,a=Object(u.c)(e,["values"]),n=t.values,i=Object(u.c)(t,["values"]);return Object(m.d)(n,r)&&Object(m.d)(a,i)}));j.displayName="MemoizedFormattedMessage";var f=j,p=r(122),v=r(2),g=function(e){var t=e.onLogin,r=e.loading,a=e.errorMessage,n=o.a.useState({email:"",password:"",rememberMe:!1}),i=Object(s.a)(n,2),c=i[0],u=i[1],d=o.a.useState(),m=Object(s.a)(d,2),b=m[0],j=m[1],g=o.a.useCallback((function(){var e=Object(p.c)(c);j(e),Object(p.a)(e)&&t(c)}),[c,t]);return Object(v.jsxs)("form",{style:{maxWidth:"560px",width:"100%"},noValidate:!0,onSubmit:function(e){e.preventDefault(),g()},className:"row g-3 needs-validation",children:[!!a&&Object(v.jsx)("div",{className:"alert alert-danger",role:"alert",style:{width:"100%"},children:a}),Object(v.jsxs)("div",{className:"col-md-12",children:[Object(v.jsx)("label",{htmlFor:"inputEmail",className:"form-label",children:Object(v.jsx)(f,{id:"email"})}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"inputEmail",value:c.email,onChange:function(e){return u(Object(l.a)(Object(l.a)({},c),{},{email:e.target.value}))}}),!!(null===b||void 0===b?void 0:b.email)&&Object(v.jsx)("small",{className:"text-danger",children:Object(v.jsx)(f,{id:null===b||void 0===b?void 0:b.email})})]}),Object(v.jsxs)("div",{className:"col-md-12",children:[Object(v.jsx)("label",{htmlFor:"inputPassword",className:"form-label",children:Object(v.jsx)(f,{id:"password"})}),Object(v.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",value:c.password,onChange:function(e){return u(Object(l.a)(Object(l.a)({},c),{},{password:e.target.value}))}}),!!(null===b||void 0===b?void 0:b.password)&&Object(v.jsx)("small",{className:"text-danger",children:Object(v.jsx)(f,{id:null===b||void 0===b?void 0:b.password})})]}),Object(v.jsx)("div",{className:"col-12",children:Object(v.jsxs)("div",{className:"form-check",children:[Object(v.jsx)("input",{className:"form-check-input",type:"checkbox",id:"invalidCheck",value:"",checked:c.rememberMe,onChange:function(e){return u(Object(l.a)(Object(l.a)({},c),{},{rememberMe:!!e.target.checked}))}}),Object(v.jsx)("label",{className:"form-check-label",htmlFor:"invalidCheck",children:Object(v.jsx)(f,{id:"rememberMe"})})]})}),Object(v.jsx)("div",{className:"row justify-content-md-center",style:{margin:"16px 0"},children:Object(v.jsx)("div",{className:"col-md-auto",children:Object(v.jsxs)("button",{className:"btn btn-primary",type:"submit",style:{minWidth:"160px",display:"flex",alignItems:"center",justifyContent:"center"},disabled:r,children:[r&&Object(v.jsx)("div",{className:"spinner-border spinner-border-sm text-light mr-2",role:"status"}),Object(v.jsx)(f,{id:"register"})]})})})]})},O=r.p+"static/media/logo-420-x-108.2f644c81.png",h=r(14),x=r(38),y=r(39),w=r(29),N=r(30),k=r(25),M=r.n(k),S=r(15),C=r(21),R=r(9),A=r(105);t.default=function(){var e=Object(h.d)(),t=Object(c.useState)(!1),r=Object(s.a)(t,2),a=r[0],l=r[1],u=Object(c.useState)(""),d=Object(s.a)(u,2),m=d[0],b=d[1],j=o.a.useCallback(function(){var t=Object(i.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(""),l(!0),t.next=4,e(Object(x.a)(y.a.signIn,"post",{email:r.email,password:r.password}));case 4:if(a=t.sent,l(!1),(null===a||void 0===a?void 0:a.code)!==w.a){t.next=11;break}return e(Object(N.b)(a.data)),M.a.set(S.a,a.data.token,{expires:r.rememberMe?7:void 0}),e(Object(R.d)(C.a.home)),t.abrupt("return");case 11:b(Object(A.a)(a));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(v.jsxs)("div",{className:"container",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(v.jsx)("img",{src:O,alt:"",style:{maxWidth:"250px",margin:"32px"}}),Object(v.jsx)(g,{onLogin:j,loading:a,errorMessage:m}),Object(v.jsx)("a",{href:"/sign-up",children:"Sign Up"})]})}},84:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(103);var n=r(98),i=r(104);function s(e,t){return Object(a.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(o){n=!0,i=o}finally{try{a||null==c.return||c.return()}finally{if(n)throw i}}return r}}(e,t)||Object(n.a)(e,t)||Object(i.a)()}},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(99);function n(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a.a)(e,t):void 0}}},99:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))}}]);