function parentTester(e){return e&&e.classList&&e.classList.contains("mcc-sheet")&&e.classList.contains("mcc-sheet--in-view")}function hideSheetHandler(e){Array.from(document.querySelectorAll(".mcc-sheet--in-view")).forEach((t=>{(function(e,t){if(t(e))return e;for(;e.parentNode;)if(t(e=e.parentNode))return e;return null})(e.target,parentTester)||(e.preventDefault(),e.stopPropagation(),t.closest("mcc-sheet").hide(),window.removeEventListener("click",hideSheetHandler))}))}const e="mcc-sheet",t={create({createComponent:t,html:s}){t(e,function(e){return{props:{modal:{type:Boolean,default:!1},contentClasses:{type:String},scrim:{type:Boolean,default:!0}},state:()=>({hasScrim:!0}),methods:{show(){this.classList.add("mcc-sheet--in-view"),this.methods.handleBodyShift()},hide(){this.classList.remove("mcc-sheet--in-view"),this.methods.handleBodyShift(!1)},handleBodyShift(e=!0){const t=document.body;t.offsetHeight>window.innerHeight&&this.state.hasScrim&&(t.style.paddingRight=e?window.innerWidth-t.clientWidth+"px":"unset",t.style.overflow=e?"hidden":"auto")},addScrim(){if(this.props.scrim&&this.parentNode){const e=document.createElement("div");e.classList.add("mcc-sheet-scrim"),function(e,t){const s=t.parentNode;t.nextSibling?s.insertBefore(e,t.nextSibling):s.appendChild(e)}(e,this)}}},mounted(){this.classList.add("mcc-sheet"),this.eventAdded||this.addEventListener("transitionend",(e=>{e.target===this&&(e.target===this&&this.classList.contains("mcc-sheet--in-view")?this.emit("show",{instance:this,originalEvent:e},setTimeout((()=>{this.props.modal||window.addEventListener("click",hideSheetHandler)}))):this.emit("hide",{instance:this,originalEvent:e},setTimeout((()=>{this.props.modal||window.removeEventListener("click",hideSheetHandler)}))),this.eventAdded=!0)})),this.show=this.methods.show,this.hide=this.methods.hide},didRender(){this.nextElementSibling&&this.nextElementSibling.classList.contains("mcc-sheet-scrim")||this.methods.addScrim()},removed(){this.methods.handleBodyShift(!1)},render(){return e`<div class="${"mcc-sheet__content "+(this.props.contentClasses?`${this.props.contentClasses}`:"")}">${this.slots.default}</div>`}}}(s))}};export{t as sheet};
