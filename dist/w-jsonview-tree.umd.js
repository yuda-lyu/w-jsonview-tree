/*!
 * w-jsonview-tree v1.0.24
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self)["w-jsonview-tree"]=n()}(this,(function(){"use strict";var e=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e){function n(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(r)}e.exports=n}));return function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".CompCssDJsonViewTree .w-caret-right {\r\n    transform: rotate(-90deg);\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVEhL7ZC9CYBADEbP2iEEp7JxAPdwBZex02EcQ/0iBCzC/ZlTkDx4RYrLC+cMwzB+QQ1bRRtYwSAbPJQdoRe6bIbS41x32MEg9NULlJakStEBRqMRT44yFF+htDRkdpTJiT+OMilxtSgTE1ePMr54sSgjxYtHmXv8tShD8Qn212QYxnc4dwKskJKEHrOFUQAAAABJRU5ErkJggg==')\r\n}\r\n\r\n.CompCssDJsonViewTree .w-caret-down {\r\n    display: inline-block;\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVEhL7ZC9CYBADEbP2iEEp7JxAPdwBZex02EcQ/0iBCzC/ZlTkDx4RYrLC+cMwzB+QQ1bRRtYwSAbPJQdoRe6bIbS41x32MEg9NULlJakStEBRqMRT44yFF+htDRkdpTJiT+OMilxtSgTE1ePMr54sSgjxYtHmXv8tShD8Qn212QYxnc4dwKskJKEHrOFUQAAAABJRU5ErkJggg==')\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-line {\r\n    margin: 4px 0;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-caret-icon {\r\n    width: 18px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-empty-icon {\r\n    /* width: 18px; */\r\n    padding: 0px 9px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-type {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-key {\r\n    color: #616161;\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-index {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-separator {\r\n    color: #bdbdbd;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-value {\r\n    margin-left: 8px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-number {\r\n    color: #536dfe;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-boolean {\r\n    color: #9ccc65;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-string {\r\n    color: #ffab40;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-function {\r\n    color: #e040fb;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-size {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-hide {\r\n    display: none;\r\n}"),function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!1;function o(e,n,r){r&&(i=!0===r.expanded),n.innerHTML="",n.classList.add("CompCssDJsonViewTree"),u(h(e),n)}function s(e,n){var r=document.createElement(e);return void 0===n||(n.className&&(r.className=n.className),n.content&&(r.textContent=n.content),n.children&&n.children.forEach((function(e){null!==e&&r.appendChild(e)}))),r}function c(e){var n=s("i");e.expanded?n.className="wicon w-caret-down":n.className="wicon w-caret-right";var r=s("div",{className:"wjv-caret-icon",children:[n]}),t=e.toggle.bind(e);r.addEventListener("click",t);var i=s("div",{className:"wjv-json-index",content:e.key}),o=s("div",{className:"wjv-json-type",content:e.type}),c=s("div",{className:"wjv-json-key",content:e.key}),a=s("div",{className:"wjv-json-size"});"array"===e.type?a.innerText="["+e.children.length+"]":"object"===e.type&&(a.innerText="{"+e.children.length+"}");var l=s("div",{className:"wjv-line",children:null===e.key?[r,o,a]:"array"===e.parent.type?[r,i,a]:[r,c,a]});return e.depth>0&&l.setAttribute("style","margin-left: "+24*e.depth+"px;"),l}function a(n){var r=s("div",{className:"wjv-empty-icon"}),t=s("div",{className:"wjv-json-key",content:n.key}),i=s("div",{className:"wjv-json-separator",content:":"}),o=s("div",{className:"wjv-json-value"+(" wjv-json-"+e(n.value)),content:String(n.value)}),c=s("div",{className:"wjv-line",children:[r,t,i,o]});return n.depth>0&&c.setAttribute("style","margin-left: "+24*n.depth+"px;"),c}function l(){return{key:null,parent:null,value:null,expanded:i,type:null,children:null,elem:null,depth:0,setCaretIconRight:function(){this.elem.querySelector(".wicon").classList.replace("w-caret-down","w-caret-right")},setCaretIconDown:function(){this.elem.querySelector(".wicon").classList.replace("w-caret-right","w-caret-down")},hideChildren:function(){null!==this.children&&this.children.forEach((function(e){e.elem.classList.add("wjv-json-hide"),e.expanded&&e.hideChildren()}))},showChildren:function(){null!==this.children&&this.children.forEach((function(e){e.elem.classList.remove("wjv-json-hide"),e.expanded&&e.showChildren()}))},toggle:function(){this.expanded?(this.expanded=!1,this.hideChildren(),this.setCaretIconRight()):(this.expanded=!0,this.showChildren(),this.setCaretIconDown())}}}function d(n){var r=e(n);return Array.isArray(n)?r="array":null===n&&(r="null"),r}function p(n,r){for(var t in n){var o=l();o.parent=r,o.key=t,o.type=d(n[t]),o.depth=r.depth+1,o.expanded=i,"object"===e(n[t])?(o.children=[],r.children.push(o),p(n[t],o),o.elem=c(o)):(o.value=n[t],o.elem=a(o),r.children.push(o))}}function h(e){var n=l();return n.type=d(e),n.children=[],n.expanded=i,p(e,n),n.elem=c(n),n}function A(e,n){n(e),null!==e.children&&e.children.forEach((function(e){A(e,n)}))}function u(e,n){A(e,(function(e){e.expanded||e.hideChildren(),n.appendChild(e.elem)}))}o(n,r,t)}}));
//# sourceMappingURL=w-jsonview-tree.umd.js.map
