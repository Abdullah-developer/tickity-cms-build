"use strict";(self["webpackChunktickity_frontend"]=self["webpackChunktickity_frontend"]||[]).push([[51],{8646:function(e,t,o){o.d(t,{Z:function(){return g}});var s=o(6252),a=o(3577),n=o(9963);const d=["aria-hidden"],i=["aria-hidden"];function l(e,t,o,l,r,c){return(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["modal fade",[{"show d-block":o.show},{"d-none":!o.show},{"modal-mini":"mini"===o.type}]]),onClick:t[1]||(t[1]=(0,n.iM)(((...e)=>c.closeModal&&c.closeModal(...e)),["self"])),tabindex:"-1",role:"dialog","aria-hidden":!o.show},[(0,s._)("div",{class:(0,a.C_)(["modal-dialog modal-dialog-centered",[{"modal-notice":"notice"===o.type},o.modalClasses]])},[(0,s._)("div",{class:(0,a.C_)(["modal-content",[o.gradient?`bg-gradient-${o.gradient}`:"",o.modalContentClasses]])},[e.$slots.header?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,a.C_)(["modal-header",[o.headerClasses]])},[(0,s.WI)(e.$slots,"header"),(0,s.WI)(e.$slots,"close-button",{},(()=>[o.showClose?((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",class:"close",onClick:t[0]||(t[0]=(...e)=>c.closeModal&&c.closeModal(...e)),"data-dismiss":"modal","aria-label":"Close"},[(0,s._)("span",{"aria-hidden":!o.show},"×",8,i)])):(0,s.kq)("",!0)]))],2)):(0,s.kq)("",!0),(0,s._)("div",{class:(0,a.C_)(["modal-body",o.bodyClasses])},[(0,s.WI)(e.$slots,"default")],2),e.$slots.footer?((0,s.wg)(),(0,s.iD)("div",{key:1,class:(0,a.C_)(["modal-footer",o.footerClasses])},[(0,s.WI)(e.$slots,"footer")],2)):(0,s.kq)("",!0)],2)],2)],10,d)),[[n.F8,o.show]])}var r={name:"modal-dialog",props:{show:Boolean,showClose:{type:Boolean,default:!0},type:{type:String,default:"",validator(e){let t=["","notice","mini"];return-1!==t.indexOf(e)},description:'Modal type (notice|mini|"") '},modalClasses:{type:[Object,String],description:"Modal dialog css classes"},modalContentClasses:{type:[Object,String],description:"Modal dialog content css classes"},gradient:{type:String,description:"Modal gradient type (danger, primary etc)"},headerClasses:{type:[Object,String],description:"Modal Header css classes"},bodyClasses:{type:[Object,String],description:"Modal Body css classes"},footerClasses:{type:[Object,String],description:"Modal Footer css classes"},animationDuration:{type:Number,default:500,description:"Modal transition duration"}},methods:{closeModal(){this.$emit("update:show",!1),this.$emit("close")}},watch:{show(e){let t=document.body.classList;e?t.add("modal-open"):t.remove("modal-open")}}},c=o(3744);const m=(0,c.Z)(r,[["render",l]]);var g=m},7051:function(e,t,o){o.r(t),o.d(t,{default:function(){return h}});var s=o(6252);const a={class:"row"},n=(0,s._)("h6",{class:"modal-title",id:"modal-title-default"},"Delete Admin",-1),d=(0,s._)("p",{class:"mt-4"},"Be aware when deleting the admin, he will be removed from the system and can't be returned on",-1),i=(0,s._)("div",{class:"d-flex flex-column gap-4"},null,-1),l={class:"d-flex justify-content-between gap-1"};function r(e,t,o,r,c,m){const g=(0,s.up)("button-component"),u=(0,s.up)("modal");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(u,{show:m.modalStatus},{default:(0,s.w5)((()=>[n,d,i,(0,s._)("div",l,[(0,s.Wm)(g,{class:"mt-4",variant:"gradient",color:"danger",size:"sm",isLoading:m.actionInProgress.loading,onClick:t[0]||(t[0]=e=>m.deleteAdmin())},{default:(0,s.w5)((()=>[(0,s.Uk)(" Delete ")])),_:1},8,["isLoading"]),(0,s.Wm)(g,{class:"mt-4",variant:"gradient",color:"primary",size:"sm",onClick:t[1]||(t[1]=e=>m.toggleModal())},{default:(0,s.w5)((()=>[(0,s.Uk)(" Close ")])),_:1})])])),_:1},8,["show"])])}var c=o(8646),m=o(4891),g={name:"delete-organizer",components:{Modal:c.Z,ButtonComponent:m.Z},computed:{modalStatus(){return this.$store.state.OrganizersStore.modals.deleteOrganizer},organizerId(){return this.$store.state.OrganizersStore.organizerId},actionInProgress(){return this.$store.state.OrganizersStore.progress.deleteOrganizers}},methods:{toggleModal(){this.$store.commit("OrganizersStore/TOGGLE_DELETE_ORGANIZER_MODAL")},deleteAdmin(){this.$store.dispatch("OrganizersStore/deleteOrganizer",this.organizerId)}}},u=o(3744);const p=(0,u.Z)(g,[["render",r]]);var h=p}}]);
//# sourceMappingURL=51.19c86c5d.js.map