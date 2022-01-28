function wrapChildren(e,t){for(;e.hasChildNodes();)t.appendChild(e.removeChild(e.firstChild))}function elementFromString(e){const t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function addToPageSvg(e){let t=document.getElementById("page-svg-icons");t?t.appendChild(e):(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.setAttributeNS(null,"id","page-svg-icons"),t.setAttributeNS(null,"style","position:absolute;height:0;width:0;"),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild))}function createPageIcon(e,t,n="0 0 32 32"){const o=svgName(function(e){return e.substring(e.lastIndexOf("/svg/")+5,e.lastIndexOf(".")).replace(/\//g,"_")}(e));if(!t){const e=elementFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t='<g>\n    <path d="M 11 4 L 11 6 L 15 6 L 15 4 Z M 17 4 L 17 6 L 21 6 L 21 4 Z M 9 4.09375 C 6.496094 4.523438 4.523438 6.5 4.09375 9 L 6.15625 9 C 6.527344 7.609375 7.605469 6.523438 9 6.15625 Z M 23 4.09375 L 23 6.15625 C 24.394531 6.523438 25.472656 7.609375 25.84375 9 L 27.90625 9 C 27.476563 6.5 25.503906 4.523438 23 4.09375 Z M 4 11 L 4 15 L 6 15 L 6 11 Z M 26 11 L 26 15 L 28 15 L 28 11 Z M 4 17 L 4 21 L 6 21 L 6 17 Z M 26 17 L 26 21 L 28 21 L 28 17 Z M 4.09375 23 C 4.523438 25.5 6.5 27.476563 9 27.90625 L 9 25.84375 C 7.605469 25.476563 6.527344 24.390625 6.15625 23 Z M 25.84375 23 C 25.472656 24.390625 24.394531 25.476563 23 25.84375 L 23 27.90625 C 25.503906 27.476563 27.476563 25.5 27.90625 23 Z M 11 26 L 11 28 L 15 28 L 15 26 Z M 17 26 L 17 28 L 21 28 L 21 26 Z "/>\n    </g>'}</svg>`),s=document.createElementNS("http://www.w3.org/2000/svg","symbol");s.setAttributeNS(null,"id",o.substring(1)),s.setAttributeNS(null,"viewBox",n),wrapChildren(e,s),addToPageSvg(s)}if(!function(e){const t=document.getElementById("page-svg-icons");return!!t&&null!=t.querySelector(e)}(o)){const e=elementFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`),s=document.createElementNS("http://www.w3.org/2000/svg","symbol");s.setAttributeNS(null,"id",o.substring(1)),s.setAttributeNS(null,"viewBox",n),wrapChildren(e,s),addToPageSvg(s)}}function svgName(e){return`#mosaicjs_icon_${e}`}function getLoadIconPromise(e){if(window._mosaicJsComponents_.icons[e]&&window._mosaicJsComponents_.icons[e].promise)return window._mosaicJsComponents_.icons[e].promise;{const t=new Promise(((t,n)=>{window.fetch(e).then((e=>e.text())).then((function(n){const o=n.match(/<svg.*?viewBox="([^"]+)".*?>/im),s=n.match(/<svg.*?>([\s\S]+?)<\/svg>/m);if(s&&2===s.length){const n=s[1];let i="0 0 32 32";2===o.length&&(i=o[1]),createPageIcon(e,n,i),t()}else createPageIcon(e),console.warn(`Icon ${e} is not found`),t()})).catch((t=>{console.error(`Loading icon ${e} failed`,t),window._mosaicJsComponents_.icons[e].error=t}))}));return window._mosaicJsComponents_.icons[e]={hasLoaded:!1,promise:t,error:null},t}}const e="mcc-icon",t={create({createComponent:t,svg:n}){t(e,function(e){return{props:{name:{type:String},width:{type:Number,default:24},height:{type:Number,default:24},iconSet:{type:String}},state:()=>({loaded:!1,error:null}),created(){window._mosaicJsComponents_=window._mosaicJsComponents_||{},window._mosaicJsComponents_.icons=window._mosaicJsComponents_.icons||{}},mounted(){this.classList.add("mcc-icon"),getLoadIconPromise(this.get.resourceUrl).then((()=>this.state.loaded=!0)).catch((e=>this.state.error=e))},didRender(){getLoadIconPromise(this.get.resourceUrl)},get:{svgName(){return svgName(this.props.iconSet?`${this.props.iconSet}_${this.props.name}`:this.props.name)},resourceUrl(){return`https://cdn.svc.oneadvanced.com/mosaic-icons/svg/${this.props.iconSet?`${this.props.iconSet}/`:""}${this.props.name}.svg`}},render(){return e`<svg width="${this.props.width}" height="${this.props.height}"><use href="${this.get.svgName}"></use></svg>`}}}(n))}};export{t as icon};
