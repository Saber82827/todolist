(function(){"use strict";var e={5586:function(e,t,o){var n=o(9242),s=o(3396);function a(e,t,o,a,i,l){const d=(0,s.up)("Navbar"),r=(0,s.up)("Notes"),c=(0,s.up)("Modal"),h=(0,s.up)("AddButton");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(d,{onChangeInput:t[0]||(t[0]=e=>i.search=e)}),(0,s.Wm)(r,{search:i.search,notes:l.filterNotes,onDelNote:l.delNote,onChangeNote:l.changeNote},null,8,["search","notes","onDelNote","onChangeNote"]),(0,s.wy)((0,s.Wm)(c,{edit:i.edit,editNote:i.editNote,onCloseModal:l.closeModal,onAddNote:l.addNote,onEditedNote:l.editedNote},null,8,["edit","editNote","onCloseModal","onAddNote","onEditedNote"]),[[n.F8,i.modalOpen]]),(0,s.Wm)(h,{onOpenModal:l.openModal},null,8,["onOpenModal"])],64)}o(560);var i=o(7139),l=o.p+"img/search.7bf44ec5.svg",d=o.p+"img/back.a1821e6b.svg",r=o.p+"img/clear.e9281049.svg";const c={class:"header"},h={class:"header__nav"},u={class:"header__title"},_=(0,s._)("img",{src:l,alt:""},null,-1),g=[_],p={class:"header__form"},m=(0,s._)("img",{src:d,alt:""},null,-1),f=[m],N={class:"container"},v=["placeholder"],w=(0,s._)("img",{src:r,alt:""},null,-1),b=[w];function k(e,t,o,a,l,d){return(0,s.wg)(),(0,s.iD)("header",c,[(0,s.Wm)(n.uT,{name:"header__nav"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("nav",h,[(0,s._)("button",{class:"header__leng",onClick:t[0]||(t[0]=(...e)=>d.switchLang&&d.switchLang(...e))},(0,i.zw)(e.$i18n.locale),1),(0,s._)("h1",u,(0,i.zw)(e.$t("notes")),1),(0,s._)("button",{class:"header__search",onClick:t[1]||(t[1]=e=>l.header=!1)},g)],512),[[n.F8,l.header]])])),_:1}),(0,s.Wm)(n.uT,{name:"header__form"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("nav",p,[(0,s._)("button",{class:"header__back",onClick:t[2]||(t[2]=e=>(l.header=!0,l.search=""))},f),(0,s._)("div",N,[(0,s.wy)((0,s._)("input",{type:"text",class:"header__input",placeholder:e.$t("search"),"onUpdate:modelValue":t[3]||(t[3]=e=>l.search=e)},null,8,v),[[n.nr,l.search]])]),(0,s._)("button",{class:"header__clear",onClick:t[4]||(t[4]=e=>l.search="")},b)],512),[[n.F8,!l.header]])])),_:1})])}var y={data(){return{header:!0,search:""}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}},watch:{search(e){this.$emit("changeInput",e)}}},$=o(89);const C=(0,$.Z)(y,[["render",k]]);var O=C,D=o.p+"img/list.4bf38f66.svg",M=o.p+"img/grid.e2c63407.svg";const z={class:"notes"},S={class:"container"},T={class:"notes__top"},j={key:0,class:"notes__title"},x={key:1,class:"notes__title"},E={src:D,alt:""},Z={src:M,alt:""};function I(e,t,o,a,l,d){const r=(0,s.up)("NotesItem");return(0,s.wg)(),(0,s.iD)("div",z,[(0,s._)("div",S,[(0,s._)("div",T,[o.search.length>0?((0,s.wg)(),(0,s.iD)("h2",j,(0,i.zw)(e.$t("searchTitle")),1)):((0,s.wg)(),(0,s.iD)("h2",x,(0,i.zw)(o.notes.length>0?e.$t("allNotes"):e.$t("noNotes")),1)),(0,s._)("button",{class:"notes__btn",onClick:t[0]||(t[0]=e=>l.grid=!l.grid)},[(0,s.wy)((0,s._)("img",E,null,512),[[n.F8,l.grid]]),(0,s.wy)((0,s._)("img",Z,null,512),[[n.F8,!l.grid]]),(0,s._)("span",null,(0,i.zw)(l.grid?e.$t("list"):e.$t("grid")),1)])]),(0,s._)("div",{class:(0,i.C_)(["notes__list",{active:!l.grid}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.notes,(t=>((0,s.wg)(),(0,s.j4)(r,{grid:l.grid,key:t.id,note:t,onDelNote:o=>e.$emit("delNote",t.id),onClick:o=>e.$emit("changeNote",t.id)},null,8,["grid","note","onDelNote","onClick"])))),128))],2)])])}var L=o.p+"img/edit.10842793.svg",A=o.p+"img/del.f2533121.svg";const B={class:"notes__item"},F={class:"notes__item-title"},W={class:"notes__item__date"},q={class:"notes__item-desc"},J={class:"notes__item-btns"},H=(0,s._)("img",{src:L,alt:""},null,-1),Q=(0,s._)("img",{src:A,alt:""},null,-1);function R(e,t,o,n,a,l){return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",{class:(0,i.C_)(["notes__item-top",{between:!o.grid}])},[(0,s._)("h2",F,(0,i.zw)(o.note.title),1),(0,s._)("p",W,(0,i.zw)(o.note.date),1)],2),(0,s._)("p",q,(0,i.zw)(o.note.desc),1),(0,s._)("div",J,[(0,s._)("button",{class:"notes__item-btn edit",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",o.note.id))},[H,(0,s._)("span",null,(0,i.zw)(e.$t("edit")),1)]),(0,s._)("button",{class:"notes__item-btn del",onClick:t[1]||(t[1]=t=>e.$emit("delNote",o.note.id))},[Q,(0,s._)("span",null,(0,i.zw)(e.$t("del")),1)])])])}var U={props:{grid:Boolean,note:Object}};const V=(0,$.Z)(U,[["render",R]]);var P=V,Y={props:{notes:{typeof:Array,require:!0},search:String},components:{NotesItem:P},data(){return{grid:!0}}};const G=(0,$.Z)(Y,[["render",I]]);var K=G;const X={class:"modal__title"},ee={class:"modal__inputs"},te=(0,s._)("span",null,"Title",-1),oe=(0,s._)("span",null,"Content",-1),ne={class:"modal__btns"},se={class:"modal__btn cancel"};function ae(e,t,o,a,l,d){return(0,s.wg)(),(0,s.j4)(n.uT,{name:"modal"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"modal",onClick:t[5]||(t[5]=(...e)=>d.closeModal&&d.closeModal(...e))},[(0,s._)("div",{class:"modal__block",onClick:t[4]||(t[4]=(0,n.iM)((()=>{}),["stop"]))},[(0,s._)("h2",X,(0,i.zw)(o.edit?e.$t("changeNote"):e.$t("addNote")),1),(0,s._)("div",ee,[(0,s._)("label",null,[te,(0,s.wy)((0,s._)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e)},null,512),[[n.nr,l.title]])]),(0,s._)("label",null,[oe,(0,s.wy)((0,s._)("textarea",{placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[n.nr,l.desc]])])]),(0,s._)("div",ne,[(0,s._)("button",se,(0,i.zw)(e.$t("cansel")),1),o.edit?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"modal__btn add",onClick:t[3]||(t[3]=(...e)=>d.changeNote&&d.changeNote(...e))},(0,i.zw)(e.$t("change")),1)):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"modal__btn add",onClick:t[2]||(t[2]=(...e)=>d.addNote&&d.addNote(...e))},(0,i.zw)(e.$t("add")),1))])])])])),_:1})}var ie=o(3029),le={props:{edit:Boolean,editNote:Object},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){const e={id:(0,ie.Z)(),title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",e),this.title="",this.desc=""}},changeNote(){if(""!=this.title&&""!=this.desc){const e={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",e),this.closeModal()}}},data(){return{title:"",desc:""}}};const de=(0,$.Z)(le,[["render",ae]]);var re=de;const ce=(0,s._)("img",{src:L,alt:""},null,-1),he=[ce];function ue(e,t,o,n,a,i){return(0,s.wg)(),(0,s.iD)("button",{class:"add__btn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},he)}var _e={};const ge=(0,$.Z)(_e,[["render",ue]]);var pe=ge,me={components:{Navbar:O,Notes:K,Modal:re,AddButton:pe},data(){return{modalOpen:!1,notes:[],editNote:{},edit:!1,search:""}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().trim().includes(this.search.toLowerCase()))):this.notes}},methods:{openModal(){this.modalOpen=!0,this.edit=!1},closeModal(e){this.modalOpen=e},addNote(e){this.notes.push(e),this.modalOpen=!1},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},getNotes(){let e=localStorage.notes;e&&(this.notes=JSON.parse(e))},changeNote(e){this.modalOpen=this.edit=!0;let t=this.notes.find((t=>t.id==e));this.editNote=t},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))}},watch:{notes:{handler(e){localStorage.notes=JSON.stringify(e)},deep:!0}},created(){this.getNotes()}};const fe=(0,$.Z)(me,[["render",a]]);var Ne=fe,ve=JSON.parse('{"notes":"Eslatmalar","allNotes":"Barcha eslatmalar","noNotes":"Eslatmalar yoq","list":"Roʻyxat","grid":"Setka","edit":"O\'ZGARTIRISH","del":"o\'chirish","addNote":"Eslatma qo’shish","add":"Qo’shish","cansel":"Bekor qilish","changeNote":"Eslatma qo’shish","change":"o\'zgartirish","searchTitle":"Qidirish","search":"Qidirish..."}'),we=JSON.parse('{"notes":"Заметки","allNotes":"Все заметки","noNotes":"Заметки нет","list":"Список","grid":"Сетка","edit":"РЕДАКТИРОВАТЬ","del":"Удалить","eddNote":"Добавить заметку","add":"Добавить","cansel":"Отмена","changeNote":"Изменить заметку","change":"изменить","searhcTitle":"Поиск","search":"Поиск..."}');const be={uz:ve,ru:we};var ke=o(7853);const ye=localStorage.lang,$e=(0,ke.o)({legacy:!0,locale:ye||"ru",messages:be}),Ce=(0,n.ri)(Ne);Ce.use($e),Ce.mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var l=!0,d=0;d<n.length;d++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var r=s();void 0!==r&&(t=r)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/todolist/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,i=n[0],l=n[1],d=n[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)o.o(l,s)&&(o.m[s]=l[s]);if(d)var c=d(o)}for(t&&t(n);r<i.length;r++)a=i[r],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunktodolost"]=self["webpackChunktodolost"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5586)}));n=o.O(n)})();
//# sourceMappingURL=app.477b29f9.js.map