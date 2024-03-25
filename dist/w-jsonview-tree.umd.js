/*!
 * w-jsonview-tree v1.0.31
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-jsonview-tree"]=n()}(this,(function(){"use strict";return function(e,n){void 0===n&&(n={});var r=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".CompCssDJsonViewTree .w-caret-right {\r\n    transform: rotate(-90deg);\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVEhL7ZC9CYBADEbP2iEEp7JxAPdwBZex02EcQ/0iBCzC/ZlTkDx4RYrLC+cMwzB+QQ1bRRtYwSAbPJQdoRe6bIbS41x32MEg9NULlJakStEBRqMRT44yFF+htDRkdpTJiT+OMilxtSgTE1ePMr54sSgjxYtHmXv8tShD8Qn212QYxnc4dwKskJKEHrOFUQAAAABJRU5ErkJggg==')\r\n}\r\n\r\n.CompCssDJsonViewTree .w-caret-down {\r\n    display: inline-block;\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVEhL7ZC9CYBADEbP2iEEp7JxAPdwBZex02EcQ/0iBCzC/ZlTkDx4RYrLC+cMwzB+QQ1bRRtYwSAbPJQdoRe6bIbS41x32MEg9NULlJakStEBRqMRT44yFF+htDRkdpTJiT+OMilxtSgTE1ePMr54sSgjxYtHmXv8tShD8Qn212QYxnc4dwKskJKEHrOFUQAAAABJRU5ErkJggg==')\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-line {\r\n    margin: 4px 0;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-caret-icon {\r\n    width: 18px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-empty-icon {\r\n    /* width: 18px; */\r\n    padding: 0px 9px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-type {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-key {\r\n    color: #616161;\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-index {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-separator {\r\n    color: #bdbdbd;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-value {\r\n    margin-left: 8px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-number {\r\n    color: #536dfe;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-boolean {\r\n    color: #9ccc65;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-string {\r\n    color: #ffab40;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-function {\r\n    color: #e040fb;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-size {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-hide {\r\n    display: none;\r\n}"),function(e,n){let r=!1;function t(e,n){let r=document.createElement(e);return void 0===n||(n.className&&(r.className=n.className),n.content&&(r.textContent=n.content),n.children&&n.children.forEach((e=>{null!==e&&r.appendChild(e)}))),r}function i(e){let n=t("i");e.expanded?n.className="wicon w-caret-down":n.className="wicon w-caret-right";let r=t("div",{className:"wjv-caret-icon",children:[n]}),i=e.toggle.bind(e);r.addEventListener("click",i);let s,o=t("div",{className:"wjv-json-index",content:e.key}),l=t("div",{className:"wjv-json-type",content:e.type}),a=t("div",{className:"wjv-json-key",content:e.key}),d=t("div",{className:"wjv-json-size"});"array"===e.type?d.innerText="["+e.children.length+"]":"object"===e.type&&(d.innerText="{"+e.children.length+"}"),s=null===e.key?[r,l,d]:"array"===e.parent.type?[r,o,d]:[r,a,d];let c=t("div",{className:"wjv-line",children:s});return e.depth>0&&c.setAttribute("style","margin-left: "+24*e.depth+"px;"),c}function s(e){let n=t("div",{className:"wjv-empty-icon"}),r=t("div",{className:"wjv-json-key",content:e.key}),i=t("div",{className:"wjv-json-separator",content:":"}),s=t("div",{className:"wjv-json-value"+(" wjv-json-"+typeof e.value),content:String(e.value)}),o=t("div",{className:"wjv-line",children:[n,r,i,s]});return e.depth>0&&o.setAttribute("style","margin-left: "+24*e.depth+"px;"),o}function o(){return{key:null,parent:null,value:null,expanded:r,type:null,children:null,elem:null,depth:0,setCaretIconRight(){this.elem.querySelector(".wicon").classList.replace("w-caret-down","w-caret-right")},setCaretIconDown(){this.elem.querySelector(".wicon").classList.replace("w-caret-right","w-caret-down")},hideChildren(){null!==this.children&&this.children.forEach((e=>{e.elem.classList.add("wjv-json-hide"),e.expanded&&e.hideChildren()}))},showChildren(){null!==this.children&&this.children.forEach((e=>{e.elem.classList.remove("wjv-json-hide"),e.expanded&&e.showChildren()}))},toggle:function(){this.expanded?(this.expanded=!1,this.hideChildren(),this.setCaretIconRight()):(this.expanded=!0,this.showChildren(),this.setCaretIconDown())}}}function l(e){let n=typeof e;return Array.isArray(e)?n="array":null===e&&(n="null"),n}function a(e,n){for(let t in e){let d=o();d.parent=n,d.key=t,d.type=l(e[t]),d.depth=n.depth+1,d.expanded=r,"object"==typeof e[t]?(d.children=[],n.children.push(d),a(e[t],d),d.elem=i(d)):(d.value=e[t],d.elem=s(d),n.children.push(d))}}function d(e,n){n(e),null!==e.children&&e.children.forEach((e=>{d(e,n)}))}!function(e,n,t){t&&(r=!0===t.expanded);n.innerHTML="",n.classList.add("CompCssDJsonViewTree");let s=function(e){let n=o();return n.type=l(e),n.children=[],n.expanded=r,a(e,n),n.elem=i(n),n}(e);!function(e,n){d(e,(e=>{e.expanded||e.hideChildren(),n.appendChild(e.elem)}))}(s,n)}(e,n,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}}));
//# sourceMappingURL=w-jsonview-tree.umd.js.map
