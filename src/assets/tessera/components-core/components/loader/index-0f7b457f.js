import{g as t}from"./generate-id-9607ce72.js";const e="mcc-tabs",a="mcc-tab-pane",s={create({createComponent:s,html:i}){s(e,function(e){return{props:{card:{type:Boolean,default:!1},id:{type:String}},state:()=>({name:null}),get:{tabs(){return this.slots.default.filter((t=>t instanceof Node&&t.nodeType===Node.ELEMENT_NODE&&"mcc-tab-pane"===t.tagName.toLowerCase())).map(((t,e)=>({id:t.getAttribute("id"),label:t.getAttribute("label"),disabled:t.hasAttribute("disabled")&&"true"===t.getAttribute("disabled"),node:t})))}},mounted(){this.classList.add("mcc-tabs"),this.state.name=t("name")},didRender(){this.methods.setupEvents()},methods:{setupEvents(){Array.from(this.querySelectorAll("input[type=radio]")).forEach((t=>{t.hasAttribute("mcc-event-listener")||(t.addEventListener("change",(t=>{t.preventDefault(),t.stopPropagation(),this.emit("change",{instance:this,value:t.target.value})})),t.setAttribute("mcc-event-listener",""))}))},setActive(t){Array.from(this.querySelectorAll(".mcc-tabs__tabs label")).filter((e=>e.innerText===t))[0].click()}},created(){this.id=this.props.id?this.props.id:t("tab"),this.setActive=t=>this.methods.setActive(t)},render(){return e`<style>${`\n            ${this.get.tabs.map(((t,e)=>`\n              .mcc-tabs#${this.id} input[type=radio]:nth-of-type(${e+1}):checked ~ mcc-tab-pane:nth-of-type(${e+1}) { display: block; }\n            `)).join("")}\n          `}</style>${this.classList.contains("mcc-card")?e`${this.get.tabs.map(((t,a)=>e`<input type="radio" id="${t.id}" value="${t.label}" name="${this.state.name}" .checked="${0===a}" .disabled="${t.disabled}">`))}<div class="mcc-card__header mu-pb-00"><div class="mu-d-flex mu-justify-content-between">${this.slots.cardHeader}<ul class="mcc-tabs__tabs" role="tablist">${this.get.tabs.map(((t,a)=>e`<li role="tab"><label for="${t.id}" tabindex="0" class="${!0===t.disabled?"mu-is-disabled":""}"><span>${t.label}</span></label></li>`))}</ul></div></div>${this.get.tabs.map((t=>t.node))}`:e`${this.get.tabs.map(((t,a)=>e`<input type="radio" id="${t.id}" value="${t.label}" name="${this.state.name}" .checked="${0===a}" .disabled="${t.disabled}">`))}<ul class="mcc-tabs__tabs" role="tablist">${this.get.tabs.map(((t,a)=>e`<li role="tab"><label for="${t.id}" onkeyup="${t=>{13!==t.keyCode&&32!==t.keyCode||(t.preventDefault(),t.currentTarget.click())}}" tabindex="0" class="${!0===t.disabled?"mu-is-disabled":""}"><span>${t.label}</span></label></li>`))}</ul>${this.get.tabs.map((t=>t.node))}`}`}}}(i)),s(a,function(e){return{props:{label:{type:String},disabled:{type:Boolean,default:!1},paneClass:{type:String,default:null}},mounted(){const e=t("tab-pane");this.setAttribute("id",e),this.setAttribute("aria-labelledby",`${e}-tab`)},styles:()=>"\n        mcc-tab-pane {\n          display: none;\n        }\n      ",render(){return e`<div class="${this.props.paneClass}" class="mcc-tabs__pane" role="tabpanel">${this.slots.default}</div>`}}}(i))}};export{s as tabs};
