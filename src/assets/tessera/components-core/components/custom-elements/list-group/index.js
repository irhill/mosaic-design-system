const t="mcc-list-group",e={create({createComponent:e,html:i}){e(t,function(t){return{methods:{createListItem(e){const i=document.createElement("template");return t=e.trim(),i.innerHTML=t,i.content.firstChild},setData({data:t,filter:e}){if(this.methods.clearData(),!t||!Array.isArray(t))return void console.error("<mcc-list-group>",'Required parameter "data" invalid. List group will not be rendered.');const i=document.createElement("ul");if(i.classList.add("mcc-list-group"),t.forEach((t=>{if("string"!=typeof t)return;const e=document.createElement("li"),s=this.methods.createListItem(t);e.appendChild(s),i.appendChild(e)})),e){const t=document.createElement("div");t.classList.add("mcc-list-group-filter");const e=document.createElement("label");e.classList.add("mcc-list-group-filter__label"),e.textContent="Filter";const i=document.createElement("input");i.classList.add("mcc-list-group-filter__input"),i.setAttribute("type","text"),i.addEventListener("input",this.methods.filterItems),t.appendChild(e),t.appendChild(i),this.appendChild(t)}this.appendChild(i)},addItem(t){let e=this.querySelector("ul");e||(e=document.createElement("ul"),this.methods.clearData(),this.appendChild(e));const i=document.createElement("li"),s=this.methods.createListItem(t);i.appendChild(s),e.appendChild(i)},clearData(){for(;this.firstChild;)this.removeChild(this.firstChild)},filterItems(t){this.filterTimeout&&clearTimeout(this.filterTimeout),this.filterTimeout=setTimeout((()=>{const e=t.target.value.toLowerCase(),i=this.querySelectorAll("ul li");i.forEach((t=>t.classList.remove("hidden"))),i.forEach((t=>{t.innerText.toLowerCase().includes(e)||t.classList.add("hidden")}))}),250)}},mounted(){this.setData=this.methods.setData,this.addItem=this.methods.addItem,this.clearData=this.methods.clearData},styles:()=>"\n        mcc-list-group li.hidden {\n          display: none;\n        }\n      "}}(i))}};export{e as listGroup};
