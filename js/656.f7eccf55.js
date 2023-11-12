"use strict";(self["webpackChunktickity_frontend"]=self["webpackChunktickity_frontend"]||[]).push([[656],{4891:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(6252),i=n(3577);const a=["disabled"],o={key:1,class:"spinner-border spinner-border-sm",role:"status"};function l(e,t,n,l,r,d){return(0,s.wg)(),(0,s.iD)("button",{disabled:n.isDisabled,class:(0,i.C_)(["btn mb-0",d.getClasses(n.variant,n.color,n.size,n.fullWidth,n.active)])},[n.isLoading?(0,s.kq)("",!0):(0,s.WI)(e.$slots,"default",{key:0}),n.isLoading?((0,s.wg)(),(0,s.iD)("div",o)):(0,s.kq)("",!0)],10,a)}var r={name:"component-button",props:{color:{type:String,default:"info"},size:{type:String,default:"md"},variant:{type:String,default:"fill"},fullWidth:{type:Boolean,default:!1},active:{type:Boolean,default:!1},isLoading:{Type:Boolean,default:!1},isDisabled:{Type:Boolean,default:!1}},methods:{getClasses:(e,t,n,s,i)=>{let a,o,l,r;switch(e){case"gradient":a=`bg-gradient-${t}`;break;case"outline":a=`btn-outline-${t}`;break;default:a=`btn-${t}`;break}return o=n?`btn-${n}`:null,l=s?"w-100":null,r=i?"active":null,`${a} ${o} ${l} ${r}`}}},d=n(3744);const c=(0,d.Z)(r,[["render",l]]);var u=c},5234:function(e,t,n){n.d(t,{Z:function(){return m}});var s=n(6252),i=n(3577);const a={class:"form-group"},o={key:0,class:"input-group-text"},l=["type","name","id","value","placeholder","required"],r={key:1,class:"invalid-feedback"},d={key:2,class:"input-group-text"};function c(e,t,n,c,u,p){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",{class:(0,i.C_)(p.hasIcon(n.icon))},["left"===n.iconDir?((0,s.wg)(),(0,s.iD)("span",o,[(0,s._)("i",{class:(0,i.C_)(p.getIcon(n.icon))},null,2)])):(0,s.kq)("",!0),(0,s._)("input",{type:n.type,class:(0,i.C_)(["form-control",(p.getClasses(n.size,n.valid),{"is-invalid":!n.valid&&(n.startValidate||u.inputBlured),"is-valid":n.valid})]),name:n.name,id:n.id,value:n.value,placeholder:n.placeholder,required:n.isRequired,onInput:t[0]||(t[0]=t=>e.$emit("input",t))},null,42,l),n.errorMessage?((0,s.wg)(),(0,s.iD)("div",r,(0,i.zw)(n.errorMessage),1)):(0,s.kq)("",!0),"right"===n.iconDir?((0,s.wg)(),(0,s.iD)("span",d,[(0,s._)("i",{class:(0,i.C_)(p.getIcon(n.icon))},null,2)])):(0,s.kq)("",!0)],2)])}var u={name:"component-input",props:{size:{type:String,default:"default"},valid:{type:Boolean,default:!1},startValidate:{type:Boolean,default:!1},errorMessage:String,icon:String,iconDir:String,name:String,id:String,value:String,placeholder:String,type:String,isRequired:Boolean},data(){return{inputBlured:!1}},methods:{getClasses:(e,t)=>{let n,s;return n=e?`form-control-${e}`:null,s=t?`${t}`:"invalid",`${n} ${s}`},getIcon:e=>e||null,hasIcon:e=>e?"input-group":null}},p=n(3744);const g=(0,p.Z)(u,[["render",c]]);var m=g},1656:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var s=n(6252),i=n(9963);const a={class:"mt-0 main-content"},o={class:"page-header min-vh-100"},l={class:"container"},r={class:"row"},d={class:"mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"},c={class:"card card-plain"},u=(0,s._)("div",{class:"pb-0 card-header text-start"},[(0,s._)("h4",{class:"font-weight-bolder"},"Sign In"),(0,s._)("p",{class:"mb-0"},"Enter your email and password to sign in")],-1),p={class:"card-body"},g={class:"mb-3"},m={class:"mb-3"},h={class:"text-center"},f=(0,s.uE)('<div class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"><div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style="background-image:url(&#39;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg&#39;);background-size:cover;"><span class="mask bg-gradient-success opacity-6"></span><h4 class="mt-5 text-white font-weight-bolder position-relative">&quot;Attention is the new currency&quot;</h4><p class="text-white position-relative"> The more effortless the writing looks, the more effort the writer actually put into the process. </p></div></div>',1);function v(e,t,n,v,b,w){const y=(0,s.up)("alert-component"),_=(0,s.up)("input-component"),k=(0,s.up)("button-component");return(0,s.wg)(),(0,s.iD)("main",a,[(0,s._)("section",null,[(0,s._)("div",o,[(0,s._)("div",l,[(0,s._)("div",r,[(0,s._)("div",d,[w.loginFailed?((0,s.wg)(),(0,s.j4)(y,{key:0,color:"danger"},{default:(0,s.w5)((()=>[(0,s.Uk)("Failed to login")])),_:1})):(0,s.kq)("",!0),(0,s._)("div",c,[u,(0,s._)("div",p,[(0,s._)("form",{onSubmit:t[0]||(t[0]=(0,i.iM)((e=>w.login()),["prevent"]))},[(0,s._)("div",g,[(0,s.Wm)(_,{onInput:w.emailOrPhoneUpdate,type:"text",placeholder:"email or Phone number",name:"emailOrPhone",size:"lg"},null,8,["onInput"])]),(0,s._)("div",m,[(0,s.Wm)(_,{type:"password",placeholder:"Password",name:"password",size:"lg",onInput:w.passwordUpdate},null,8,["onInput"])]),(0,s._)("div",h,[(0,s.Wm)(k,{class:"mt-4",variant:"gradient",color:"success",fullWidth:"",size:"lg",isLoading:w.loadingStatus},{default:(0,s.w5)((()=>[(0,s.Uk)(" Sign in ")])),_:1},8,["isLoading"])])],32)])])]),f])])])])])}var b=n(4891),w=n(5234),y=n(3577);const _={class:"alert-icon"},k={class:"alert-text"},$={key:0,type:"button",class:"btn-close d-flex justify-content-center align-items-center","data-bs-dismiss":"alert","aria-label":"Close"},S=(0,s._)("span",{"aria-hidden":"true",class:"text-lg font-weight-bold"},"×",-1),x=[S];function C(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",{class:(0,y.C_)(["alert text-white font-weight-bold",o.getClasses(n.color,n.dismissible)]),role:"alert"},[(0,s._)("span",_,[(0,s._)("i",{class:(0,y.C_)(o.getIcon(n.icon))},null,2)]),(0,s._)("span",k,[(0,s.Uk)("   "),(0,s.WI)(e.$slots,"default")]),n.dismissible?((0,s.wg)(),(0,s.iD)("button",$,x)):(0,s.kq)("",!0)],2)}var I={name:"component-alert",props:{color:{type:String,default:"success"},dismissible:{type:Boolean,default:!1},icon:String},methods:{getClasses:(e,t)=>{let n,s;return n=e?`alert-${e}`:null,s=t?"alert-dismissible fade show":null,`${n} ${s}`},getIcon:e=>e||null}},B=n(3744);const D=(0,B.Z)(I,[["render",C]]);var q=D,z=n(3907);const U=document.getElementsByTagName("body")[0];var W={name:"signin-component",components:{ButtonComponent:b.Z,InputComponent:w.Z,AlertComponent:q},data(){return{form:{emailOrPhone:"",password:""}}},created(){this.$store.state.hideConfigButton=!0,this.$store.state.showNavbar=!1,this.$store.state.showSidenav=!1,this.$store.state.showFooter=!1,U.classList.remove("bg-gray-100")},beforeUnmount(){this.$store.state.hideConfigButton=!0,this.$store.state.showNavbar=!1,this.$store.state.showSidenav=!0,this.$store.state.showFooter=!0,U.classList.add("bg-gray-100")},computed:{...(0,z.rn)(["AuthenticationStore"]),loadingStatus(){return this.$store.state.AuthenticationStore.loading},loginFailed(){return this.$store.state.AuthenticationStore.loginFailed}},methods:{login(){this.$store.dispatch("AuthenticationStore/login",this.form)},emailOrPhoneUpdate(e){this.form.emailOrPhone=e.target.value},passwordUpdate(e){this.form.password=e.target.value}}};const Z=(0,B.Z)(W,[["render",v]]);var L=Z}}]);
//# sourceMappingURL=656.f7eccf55.js.map