function parentTester(e){return e&&e.classList&&e.classList.contains("mcc-sheet")&&e.classList.contains("mcc-sheet--in-view")}function hideSheetHandler(e){Array.from(document.querySelectorAll(".mcc-sheet--in-view")).forEach((t=>{(function(e,t){if(t(e))return e;for(;e.parentNode;)if(t(e=e.parentNode))return e;return null})(e.target,parentTester)||(e.preventDefault(),e.stopPropagation(),t.closest("mcc-sheet").hide(),window.removeEventListener("click",hideSheetHandler))}))}const e="mcc-sheet",t={create({createComponent:t,html:s}){t(e,function(e){return{props:{modal:{type:Boolean,default:!1},scrim:{type:Boolean,default:!0}},get:{sheet(){return this.firstElementChild},hasScrim(){return this.props.scrim&&!this.get.sheet.classList.contains("mcc-sheet--absolute")}},methods:{show(){this.get.sheet.classList.add("mcc-sheet--in-view"),this.methods.handleBodyShift()},hide(){this.get.sheet.classList.remove("mcc-sheet--in-view"),this.methods.handleBodyShift(!1)},handleBodyShift(e=!0){const t=document.body;t.offsetHeight>window.innerHeight&&this.get.hasScrim&&(t.style.paddingRight=e?window.innerWidth-t.clientWidth+"px":"unset",t.style.overflow=e?"hidden":"auto")}},mounted(){this.querySelector(".mcc-sheet").classList.add(...Array.from(this.classList)),this.removeAttribute("class"),this.eventAdded||this.addEventListener("transitionend",(e=>{e.target===this.get.sheet&&(e.target===this.get.sheet&&this.get.sheet.classList.contains("mcc-sheet--in-view")?this.emit("show",{instance:this,originalEvent:e},setTimeout((()=>{this.props.modal||window.addEventListener("click",hideSheetHandler)}))):this.emit("hide",{instance:this,originalEvent:e},setTimeout((()=>{this.props.modal||window.removeEventListener("click",hideSheetHandler)}))),this.eventAdded=!0)})),this.show=this.methods.show,this.hide=this.methods.hide},removed(){this.methods.handleBodyShift(!1)},render(){return e`<div class="mcc-sheet">${this.slots.default}</div>${this.get.hasScrim?e`<div class="mcc-sheet-scrim"></div>`:""}`}}}(s))}};export{t as sheet};
