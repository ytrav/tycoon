(function(){"use strict";var e={752:function(e,t,s){var a=s(963),o=s(252);const i={key:0,id:"popup-darkbg"};function n(e,t,s,n,r,l){const u=(0,o.up)("AppDialogWindow"),d=(0,o.up)("AppHeader");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[r.showPopup?((0,o.wg)(),(0,o.iD)("div",i)):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(a.uT,{name:"popup"},{default:(0,o.w5)((()=>[r.showPopup?((0,o.wg)(),(0,o.j4)(u,{key:0,title:r.title,message:r.message,buttons:r.buttons,input:r.inputBox,inputText:e.inputText,onInput:t[0]||(t[0]=e=>l.input(e)),onClose:l.close,onSave:l.saveProgress,onStartNew:l.startNew,onStartNewGame:l.startNewGame,onLoadFile:l.loadFile},null,8,["title","message","buttons","input","inputText","onClose","onSave","onStartNew","onStartNewGame","onLoadFile"])):(0,o.kq)("",!0)])),_:1}),r.gameActive?((0,o.wg)(),(0,o.j4)(d,{key:0,onMainMenu:l.goToMainMenu,onSave:l.saveDialog,onLoad:t[1]||(t[1]=e=>l.load(e)),dollars:r.formattedDollars,gold:r.gold},null,8,["onMainMenu","onSave","dollars","gold"])):(0,o.kq)("",!0),((0,o.wg)(),(0,o.j4)((0,o.LL)(r.currentScreen),{upgrades:r.upgrades,gameStarted:r.gameStarted,onMenuExecute:t[2]||(t[2]=e=>l.menuExecute(e)),onBuyUpgrade:t[3]||(t[3]=e=>l.buyUpgrade(e)),intervalTime:r.intervalTime,onMakeMoney:l.madeMoney,user:r.user},null,40,["upgrades","gameStarted","intervalTime","onMakeMoney","user"]))],64)}var r=s(577);const l=(0,o.Uk)(),u=(0,o.Uk)(),d=(0,o.Uk)(),p=(0,o.Uk)(),c=(0,o.Uk)();function g(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("h2",{onClick:t[0]||(t[0]=(...e)=>n.mainMenu&&n.mainMenu(...e))},"Tycoon.io"),l,(0,o._)("span",null,(0,r.zw)(s.dollars)+" dollars",1),u,(0,o._)("span",null,(0,r.zw)(s.gold)+" gold",1),d,(0,o._)("h3",{onClick:t[1]||(t[1]=(...e)=>n.save&&n.save(...e))},"Save"),p,(0,o._)("h3",{onClick:t[2]||(t[2]=(...e)=>n.load&&n.load(...e)),id:"load"},"Load"),c,i.loadVisible?((0,o.wg)(),(0,o.iD)("input",{key:0,type:"file",id:"file",onChange:t[3]||(t[3]=(...e)=>n.loadFile&&n.loadFile(...e))},null,32)):(0,o.kq)("",!0)])}var h={name:"AppHeader",data(){return{loadVisible:!1}},props:{dollars:Number,gold:Number},methods:{mainMenu(){this.$emit("main-menu")},save(){this.$emit("save")},load(){this.loadVisible=!this.loadVisible},loadFile(){let e=document.getElementById("file").files[0];this.$emit("load",e),document.getElementById("file").value="",this.loadVisible=!1}}},m=s(744);const v=(0,m.Z)(h,[["render",g],["__scopeId","data-v-0f88b223"]]);var w=v;const y={id:"game"};function f(e,t,s,i,n,r){const l=(0,o.up)("AppNav");return(0,o.wg)(),(0,o.iD)("div",y,[(0,o.Wm)(l,{onChangePage:r.changePage},null,8,["onChangePage"]),(0,o.Wm)(a.uT,{name:"slide",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(n.window),{user:s.user,onBuyUpgrade:t[0]||(t[0]=e=>r.buyUpgrade(e)),intervalTime:s.intervalTime,onMakeMoney:r.makeMoney,upgrades:s.upgrades},null,40,["user","intervalTime","onMakeMoney","upgrades"]))])),_:1})])}const b=["onClick"];function k(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("nav",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.nav,((e,t)=>((0,o.wg)(),(0,o.iD)("span",{onClick:e=>n.changePage(t),key:t},(0,r.zw)(e.name),9,b)))),128))])}var S={name:"AppNav",methods:{changePage(e){this.$emit("change-page",e)}},data(){return{nav:[{name:"Earn"},{name:"Upgrade"},{name:"Shop"},{name:"Settings"}]}}};const M=(0,m.Z)(S,[["render",k],["__scopeId","data-v-586c0d13"]]);var x=M;const C={class:"app-upgrade window"},I=["onClick","title"],T={class:"cost"};function A(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("div",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.upgrades,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"upgrade",onClick:e=>n.buyUpgrade(t),title:`Click to buy ${e.name} level ${e.lvl} for ${e.cost} dollars`},[(0,o._)("h3",null,(0,r.zw)(e.name),1),(0,o._)("h4",null,"Level "+(0,r.zw)(e.lvl),1),(0,o._)("p",null,(0,r.zw)(e.description),1),(0,o._)("p",T,(0,r.zw)(e.cost)+" dollars",1)],8,I)))),128))])}var D={name:"AppUpgrade",props:{upgrades:Array},data(){return{}},methods:{buyUpgrade(e){this.$emit("buy-upgrade",{number:e,cost:this.upgrades[e].cost})}}};const _=(0,m.Z)(D,[["render",A],["__scopeId","data-v-ba18ccd4"]]);var P=_;const N={class:"window"};function E(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("h2",null,"Welcome, "+(0,r.zw)(s.user),1),(0,o._)("button",{onMousedown:t[0]||(t[0]=(...e)=>n.makeMoney&&n.makeMoney(...e)),id:"big-button"},"Make Money",32)])}var $={name:"AppEarn",props:{user:String,intervalTime:Number},methods:{makeMoney(){this.$emit("make-money"),this.interval=setInterval((()=>{this.$emit("make-money")}),this.intervalTime),document.addEventListener("mouseup",(()=>{clearInterval(this.interval)}))}}};const F=(0,m.Z)($,[["render",E],["__scopeId","data-v-f0dce148"]]);var G=F,U={name:"AppGame",data(){return{page:0,window:"AppEarn"}},props:{user:String,intervalTime:Number,upgrades:Array},methods:{buyUpgrade(e){this.$emit("buy-upgrade",e)},makeMoney(){this.$emit("make-money")},changePage(e){switch(e){case 0:this.window="AppEarn";break;case 1:this.window="AppUpgrade";break;case 2:this.window="AppShop";break;case 3:this.window="AppSettings";break;default:this.window="AppEarn"}}},components:{AppNav:x,AppEarn:G,AppUpgrade:P}};const B=(0,m.Z)(U,[["render",f]]);var O=B;const V=e=>((0,o.dD)("data-v-2816874c"),e=e(),(0,o.Cn)(),e),L={id:"menu"},j=V((()=>(0,o._)("div",{id:"menu-title"},[(0,o._)("h1",null,"Tycoon.io")],-1))),z={id:"buttons"},Y=["onClick"];function R(e,t,s,a,i,n){return(0,o.wg)(),(0,o.iD)("div",L,[j,(0,o._)("div",z,[s.gameStarted?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:t[0]||(t[0]=e=>n.execute("continue"))},"Continue")):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.buttons,((e,t)=>((0,o.wg)(),(0,o.iD)("button",{key:t,onClick:t=>n.execute(e.action)},(0,r.zw)(e.text),9,Y)))),128))])])}var H={props:{gameStarted:Boolean},name:"AppMainMenu",methods:{execute(e){this.$emit("menuExecute",e)}},data(){return{buttons:[{text:"New Game",action:"newGame"},{text:"Load Game",action:"loadGame"},{text:"Settings",action:"settings"}]}}};const W=(0,m.Z)(H,[["render",R],["__scopeId","data-v-2816874c"]]);var Z=W;const q=["placeholder"],K={id:"buttons"},J=["onClick"];function Q(e,t,s,i,n,l){return(0,o.wg)(),(0,o.iD)("div",{id:"popup",onClick:t[2]||(t[2]=(...e)=>l.close&&l.close(...e))},[(0,o._)("div",{id:"popup-inner",onClick:t[1]||(t[1]=(0,a.iM)((()=>{}),["stop"]))},[(0,o._)("h2",null,(0,r.zw)(s.title),1),(0,o._)("p",null,(0,r.zw)(s.message),1),s.input?(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:0,autofocus:"",type:"name",placeholder:s.inputText,"onUpdate:modelValue":t[0]||(t[0]=e=>n.popupInputValue=e),ref:"input"},null,8,q)),[[a.nr,n.popupInputValue]]):(0,o.kq)("",!0),(0,o._)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.buttons,((e,t)=>((0,o.wg)(),(0,o.iD)("button",{class:(0,r.C_)(e.styleClass),key:t,onClick:t=>l.execute(e.action)},(0,r.zw)(e.text),11,J)))),128))])])])}var X={name:"AppDialogWindow",props:{title:String,message:String,buttons:Array,input:Boolean,inputText:String},data(){return{popupInputValue:""}},methods:{execute(e){"startNewGame"===e&&this.usernameInput(),this.$emit(e)},usernameInput(){this.$emit("input",this.popupInputValue)},close(){this.$emit("close")},save(){this.$emit("save")}}};const ee=(0,m.Z)(X,[["render",Q],["__scopeId","data-v-4bc38c58"]]);var te=ee,se=s(162),ae={name:"App",data(){return{showPopup:!1,gameActive:!1,gameStarted:!1,inputBox:!1,currentScreen:"AppMainMenu",user:"",inputValue:"",dollars:0,gold:0,multiplier:1,intervalTime:500,formattedDollars:0,secCode:"",title:"",message:"",buttons:[],dataReact:{},upgrades:[{name:"Bigger earnings",description:"Make more money per click!",cost:30,lvl:1},{name:"Faster earnings",description:"Make money faster!",cost:20,lvl:1},{name:"Buy gold",description:"Exchange dollars for gold!",cost:30,lvl:1}]}},created(){"true"===localStorage.getItem("gameStarted")&&(this.gameStarted=!0),localStorage.getItem("user")&&localStorage.getItem("dollars")&&localStorage.getItem("gold")&&localStorage.getItem("multiplier")&&localStorage.getItem("intervalTime")&&localStorage.getItem("upgrades")&&(this.user=localStorage.getItem("user"),this.dollars=parseInt(localStorage.getItem("dollars")),this.gold=parseInt(localStorage.getItem("gold")),this.multiplier=parseInt(localStorage.getItem("multiplier")),this.intervalTime=parseInt(localStorage.getItem("intervalTime")),this.upgrades=JSON.parse(localStorage.getItem("upgrades"))),this.displayMoney(),setInterval((()=>{this.localStrg()}),1e3)},methods:{input(e){this.inputValue=e},startNew(){this.showPopup=!1,setTimeout((()=>{this.showPopup=!0}),450),this.title="New Game",this.message="Please enter your name:",this.inputBox=!0,this.inputText="John Doe",this.buttons=[{text:"Start",action:"startNewGame",styleClass:"success"}],this.user=""},startNewGame(){""!==this.inputValue&&(this.inputBox=!1,this.showPopup=!1,this.dollars=0,this.formattedDollars=0,this.gold=0,this.multiplier=1,this.intervalTime=500,this.upgrades=[{name:"Bigger earnings",description:"Make more money per click!",cost:30,lvl:1},{name:"Faster earnings",description:"Make money faster!",cost:20,lvl:1},{name:"Buy gold",description:"Exchange dollars for gold!",cost:30,lvl:1}],this.gameStarted=!0,localStorage.setItem("gameStarted",!0),this.gameActive=!0,this.currentScreen="AppGame",this.user=this.inputValue)},goToMainMenu(){this.currentScreen="AppMainMenu",this.gameActive=!1},menuExecute(e){switch(e){case"newGame":this.showPopup=!0,this.title="New Game",this.message="Are you sure you want to start a new game? Your current progress will be lost.",this.buttons=[{text:"Cancel",action:"close",styleClass:"success"},{text:"Yes",action:"startNew",styleClass:"warning"}];break;case"continue":this.currentScreen="AppGame",this.gameActive=!0;break;case"loadGame":break;case"settings":break;default:break}},localStrg(){localStorage.setItem("user",this.user),localStorage.setItem("dollars",this.dollars),localStorage.setItem("gold",this.gold),localStorage.setItem("multiplier",this.multiplier),localStorage.setItem("intervalTime",this.intervalTime),localStorage.setItem("upgrades",JSON.stringify(this.upgrades))},buyUpgrade(e){switch(e.number){case 0:this.dollars>=e.cost?(this.upgrades[0].cost=e.cost,this.dollars-=this.upgrades[0].cost,this.upgrades[0].cost=2*this.upgrades[0].cost,this.multiplier*=2,this.upgrades[0].lvl++,this.displayMoney()):this.notEnoughMoney(0);break;case 1:this.dollars>=e.cost?(this.upgrades[1].cost=e.cost,this.dollars-=this.upgrades[1].cost,this.upgrades[1].cost=2*this.upgrades[1].cost,this.intervalTime-=100,this.upgrades[1].lvl++,this.displayMoney()):this.notEnoughMoney(1);break;case 2:this.dollars>=e.cost?(this.upgrades[2].cost=e.cost,this.dollars-=this.upgrades[2].cost,this.gold+=1,this.upgrades[2].lvl++,this.displayMoney()):this.notEnoughMoney(2);break;default:break}},notEnoughMoney(e){this.showPopup=!0,this.title="Not enough money",this.message=`You need $${this.upgrades[e].cost} to buy this upgrade. You only have $${this.dollars}.`,this.buttons=[{text:"Ok",action:"close",styleClass:"success"}]},saveDialog(){this.showPopup=!0,this.title="Save Progress",this.message="Do you want to save your progress?",this.buttons=[{text:"Cancel",action:"close",styleClass:"danger"},{text:"Save",action:"save",styleClass:"success important"}]},close(){this.inputBox=!1,this.showPopup=!1},saveProgress(){this.showPopup=!1,this.secCode=this.dollars+2*this.gold+this.multiplier+2453-this.intervalTime-this.upgrades[0].cost+14+this.upgrades[0].lvl+this.upgrades[1].cost+this.upgrades[1].lvl+this.upgrades[2].cost+this.upgrades[2].lvl;const e={user:this.user,dollars:this.dollars,gold:this.gold,multiplier:this.multiplier,intervalTime:this.intervalTime,upgrades:this.upgrades,secCode:this.secCode},t=new Blob([JSON.stringify(e)],{type:"application/json"});(0,se.saveAs)(t,"save.json")},load(e){const t=new FileReader;t.onload=e=>{const t=JSON.parse(e.target.result);t.secCode===t.dollars+2*t.gold+t.multiplier+2453-t.intervalTime-t.upgrades[0].cost+14+t.upgrades[0].lvl+t.upgrades[1].cost+t.upgrades[1].lvl+t.upgrades[2].cost+t.upgrades[2].lvl?(this.dataReact=t,this.showPopup=!0,this.title="Load Save File",this.message="Do you want to load a save file? Your current progress will be lost.",this.buttons=[{text:"Cancel",action:"close",styleClass:"danger"},{text:"Load",action:"loadFile",styleClass:"warning important"}]):(this.showPopup=!0,this.title="Error",this.message="The file you are trying to load is corrupted or might be modified. Please try again.",this.buttons=[{text:"OK",action:"close",styleClass:"success"}])},t.readAsText(e)},loadFile(){this.showPopup=!1,this.user=this.dataReact.user,this.dollars=this.dataReact.dollars,this.gold=this.dataReact.gold,this.multiplier=this.dataReact.multiplier,this.intervalTime=this.dataReact.intervalTime,this.upgrades=this.dataReact.upgrades,this.displayMoney()},displayMoney(){this.dollars>=1e15?this.formattedDollars=(this.dollars/1e15).toFixed(1)+"Q":this.dollars>=1e12?this.formattedDollars=(this.dollars/1e12).toFixed(1)+"T":this.dollars>=1e9?this.formattedDollars=(this.dollars/1e9).toFixed(1)+"B":this.dollars>=1e6?this.formattedDollars=(this.dollars/1e6).toFixed(1)+"M":this.dollars>=1e3?this.formattedDollars=(this.dollars/1e3).toFixed(1)+"K":this.formattedDollars=this.dollars,this.localStrg()},madeMoney(){this.dollars+=1*this.multiplier,this.displayMoney()}},components:{AppHeader:w,AppGame:O,AppMainMenu:Z,AppDialogWindow:te}};const oe=(0,m.Z)(ae,[["render",n]]);var ie=oe;(0,a.ri)(ie).mount("#app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,a,o,i){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],i=e[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||n>=i)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(r=!1,i<n&&(n=i));if(r){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,n=a[0],r=a[1],l=a[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var d=l(s)}for(t&&t(a);u<n.length;u++)i=n[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},a=self["webpackChunktycoon"]=self["webpackChunktycoon"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(752)}));a=s.O(a)})();
//# sourceMappingURL=app.dd90f0b1.js.map