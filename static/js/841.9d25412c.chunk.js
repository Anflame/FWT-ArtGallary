"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[841],{2515:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(2791),s=t(4164),o=t(9448),i=t.n(o),l=t(4134),r=t(3277),u=t(4389),c=t(8152),d=t(4914),g=t(9190),h=t(5285),p=t(3130),f=t(7350),m=t(6508),_=t(8293),k=t(184),v=i().bind({validationForm:"styles_validationForm__iQiBV",link:"styles_link__jMqyN",linkMobile:"styles_linkMobile__8A7nR",goTo:"styles_goTo__bPcVM"}),y=function(e){var n=e.signUp,t=e.goTo,s=e.handleShowAuth,o=(0,d.T)(),i=(0,d.C)((function(e){return e.auth})).error,l=(0,a.useState)(""),r=(0,c.Z)(l,2),u=r[0],y=r[1],j=(0,a.useState)(""),x=(0,c.Z)(j,2),C=x[0],I=x[1],b=(0,a.useState)(!1),S=(0,c.Z)(b,2),w=S[0],N=S[1],T=(0,a.useState)(!0),Z=(0,c.Z)(T,2),M=Z[0],U=Z[1],F=(0,a.useState)("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),B=(0,c.Z)(F,2),D=B[0],A=B[1],H=(0,a.useState)(!1),P=(0,c.Z)(H,2),W=P[0],E=P[1],Q=(0,a.useState)(!0),V=(0,c.Z)(Q,2),G=V[0],q=V[1],L=(0,a.useState)("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),R=(0,c.Z)(L,2),Y=R[0],X=R[1],z=function(e,n){"email"===n&&(y(e.target.value),(0,g.V)("email",e.target.value,U,A)),"password"===n&&(I(e.target.value),(0,g.V)("password",e.target.value,q,X))},J=function(e,n){n.preventDefault(),o((0,h.M)({type:e,auth:{fingerprint:"string",username:u,password:C}})).then((function(e){"fulfilled"===e.meta.requestStatus?(o((0,p.s)(!0)),s(!1)):N(!0)}))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("form",{className:v("validationForm"),onSubmit:n?function(e){return J("register",e)}:function(e){return J("login",e)},children:[(0,k.jsx)(m.Z,{id:"emailInput",type:"email",label:"Email",value:u,onChange:function(e){return z(e,"email")},isError:M,errorMessage:D}),(0,k.jsx)(m.Z,{id:"passwordInput",type:W?"text":"password",handleChangeShowPassword:function(){return E(!W)},label:"Password",value:C,onChange:function(e){return z(e,"password")},isError:G,errorMessage:Y}),(0,k.jsx)(f.Z,{className:"defaultBtn",disabled:M||G,children:n?"sign up":"log in"}),(0,k.jsxs)("p",{className:v("link","linkMobile"),children:[n?"If you already have an account, please ":'If you don"t have an account yet, please ',(0,k.jsx)("button",{className:v("goTo"),onClick:n?function(e){return t(e,"logIn")}:function(e){return t(e,"signUp")},children:"log in"})]})]}),(0,k.jsx)(_.Z,{isShowToast:w,handleCloseToast:function(){return N(!1)},message:i})]})},j=t(979),x=t.p+"static/media/logInImg.8af190a2b12b96064383.jpg",C=t.p+"static/media/signUpImg.47e2484839c204499d5c.jpg",I=i().bind({auth:"styles_auth__WeaFG",authContent:"styles_authContent__QucYS",signUpBackgroundImg:"styles_signUpBackgroundImg__H4LQc",validationWrapp:"styles_validationWrapp__ouFuj",validationHeading:"styles_validationHeading__2iUD8",link:"styles_link__gRdnQ",linkMobile:"styles_linkMobile__lasXD",goTo:"styles_goTo__StDmY",closeIcon:"styles_closeIcon__GdLHa"}),b=function(e){var n=e.isShowAuth,t=e.handleShowAuth,o=(0,u.T)().theme,i=n.logIn,c=n.signUp,d=function(e,n){e.preventDefault(),t(n)};return(0,a.useEffect)((function(){(0,r.D)(t,i||c)}),[n]),(0,s.createPortal)((0,k.jsx)(k.Fragment,{children:(i||c)&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("section",{className:I("auth"),onClick:function(){return t(!1)},children:(0,k.jsxs)("div",{className:I("authContent"),onClick:function(e){return e.stopPropagation()},children:[(0,k.jsx)("img",{src:c?C:x,alt:"authBackGround",className:I("signUpBackgroundImg")}),(0,k.jsxs)("div",{className:I("validationWrapp"),children:[(0,k.jsx)("h2",{className:I("validationHeading"),children:c?"Create your profile":"Welcome Back"}),(0,k.jsxs)("p",{className:I("link"),children:[c?"If you already have an account, please ":'If you don"t have an account yet, please ',(0,k.jsx)("button",{className:I("goTo"),onClick:c?function(e){return d(e,"logIn")}:function(e){return d(e,"signUp")},children:c?"log in":"sign up"})]}),(0,k.jsx)(y,{signUp:c,goTo:d,handleShowAuth:t}),(0,k.jsx)(j.r,{onClick:function(){return t(!1)},fill:"dark"===o?"#575757":"#9C9C9C",className:I("closeIcon")})]})]})})})}),l.I4)}}}]);
//# sourceMappingURL=841.9d25412c.chunk.js.map