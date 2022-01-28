var e=window.CustomEvent;function safeDispatchEvent(e,t){var o="on"+t.type.toLowerCase();return"function"==typeof e[o]&&e[o](t),e.dispatchEvent(t)}function findNearestDialog(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement?e.parentElement:e.parentNode?e.parentNode.host:null}return null}function safeBlur(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function inNodeList(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function isFormMethodDialog(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function findFocusableElementWithin(e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])');var o=e.querySelector(t.join(", "));if(!o&&"attachShadow"in Element.prototype)for(var i=e.querySelectorAll("*"),n=0;n<i.length&&!(i[n].tagName&&i[n].shadowRoot&&(o=findFocusableElementWithin(i[n].shadowRoot)));n++);return o}function isConnected(e){return e.isConnected||document.body.contains(e)}function findFormSubmitter(e){if(e.submitter)return e.submitter;var o=e.target;if(!(o instanceof HTMLFormElement))return null;var i=t.formSubmitter;if(!i){var n=e.target;i=("getRootNode"in n&&n.getRootNode()||document).activeElement}return i&&i.form===o?i:null}function maybeHandleSubmit(e){if(!e.defaultPrevented){var o=e.target,i=t.imagemapUseValue,n=findFormSubmitter(e);null===i&&n&&(i=n.value);var a=findNearestDialog(o);if(a)"dialog"===(n&&n.getAttribute("formmethod")||o.getAttribute("method"))&&(e.preventDefault(),null!=i?a.close(i):a.close())}}function dialogPolyfillInfo(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",maybeHandleSubmit,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,i=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),delayModel=function(n){if(n.target===e){var a="DOMNodeRemoved";o|=n.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,delayModel)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o}).prototype=window.Event.prototype),dialogPolyfillInfo.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&isConnected(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),t.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=findFocusableElementWithin(this.dialog_)),safeBlur(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!isConnected(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!t.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),invalid=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||invalid("zIndex","auto")||invalid("transform","none")||invalid("mixBlendMode","normal")||invalid("filter","none")||invalid("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,t.needsCentering(this.dialog_)?(t.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var o=new e("close",{bubbles:!1,cancelable:!1});safeDispatchEvent(this.dialog_,o)}};var t={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],i=null;try{i=o.cssRules}catch(e){}if(i)for(var n=0;n<i.length;++n){var a=i[n],r=null;try{r=document.querySelectorAll(a.selectorText)}catch(e){}if(r&&inNodeList(r,e)){var l=a.style.getPropertyValue("top"),s=a.style.getPropertyValue("bottom");if(l&&"auto"!==l||s&&"auto"!==s)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!t.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new dialogPolyfillInfo(e)},registerDialog:function(e){e.showModal||t.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var o=[];t.forEach((function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))})),o.length&&e(o)})))}};if(t.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},t.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},t.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];i?(i.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},t.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=findNearestDialog(e);){for(var t,o=0;t=this.pendingDialogStack[o];++o)if(t.dialog===e)return 0===o;e=e.parentElement}return!1},t.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),safeBlur(t),void 0!==this.forwardTab_)){var o=this.pendingDialogStack[0];return o.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?o.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},t.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var o=new e("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&safeDispatchEvent(i.dialog,o)&&i.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},t.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},t.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},t.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},t.dm=new t.DialogManager,t.formSubmitter=null,t.imagemapUseValue=null,void 0===window.HTMLDialogElement){var o=document.createElement("form");if(o.setAttribute("method","dialog"),"dialog"!==o.method){var i=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(i){var n=i.get;i.get=function(){return isFormMethodDialog(this)?"dialog":n.call(this)};var a=i.set;i.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):a.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",i)}}document.addEventListener("click",(function(e){if(t.formSubmitter=null,t.imagemapUseValue=null,!e.defaultPrevented){var o=e.target;if("composedPath"in e)o=e.composedPath().shift()||o;if(o&&isFormMethodDialog(o.form)){if(!("submit"===o.type&&["button","input"].indexOf(o.localName)>-1)){if("input"!==o.localName||"image"!==o.type)return;t.imagemapUseValue=e.offsetX+","+e.offsetY}findNearestDialog(o)&&(t.formSubmitter=o)}}}),!1),document.addEventListener("submit",(function(e){var t=e.target;if(!findNearestDialog(t)){var o=findFormSubmitter(e);"dialog"===(o&&o.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}}));var r=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!isFormMethodDialog(this))return r.call(this);var e=findNearestDialog(this);e&&e.close()}}export{t as dialogPolyfill};
