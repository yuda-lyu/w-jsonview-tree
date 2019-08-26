/*!
 * w-jsonview-tree v1.0.10
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-jsonview-tree"]=b())})(this,function(){'use strict';function a(b){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(b)}return function(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&"undefined"!=typeof document){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a))}}(".CompCssDJsonViewTree .w-caret-right {\r\n    transform: rotate(-90deg);\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVEhL7ZC9CYBADEbP2iEEp7JxAPdwBZex02EcQ/0iBCzC/ZlTkDx4RYrLC+cMwzB+QQ1bRRtYwSAbPJQdoRe6bIbS41x32MEg9NULlJakStEBRqMRT44yFF+htDRkdpTJiT+OMilxtSgTE1ePMr54sSgjxYtHmXv8tShD8Qn212QYxnc4dwKskJKEHrOFUQAAAABJRU5ErkJggg==')\r\n}\r\n\r\n.CompCssDJsonViewTree .w-caret-down {\r\n    display: inline-block;\r\n    width: 0.9rem;\r\n    height: 0.9rem;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    background-size: contain;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVEhL7ZC9CYBADEbP2iEEp7JxAPdwBZex02EcQ/0iBCzC/ZlTkDx4RYrLC+cMwzB+QQ1bRRtYwSAbPJQdoRe6bIbS41x32MEg9NULlJakStEBRqMRT44yFF+htDRkdpTJiT+OMilxtSgTE1ePMr54sSgjxYtHmXv8tShD8Qn212QYxnc4dwKskJKEHrOFUQAAAABJRU5ErkJggg==')\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-line {\r\n    margin: 4px 0;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-caret-icon {\r\n    width: 18px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-empty-icon {\r\n    width: 18px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-type {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-key {\r\n    color: #444;\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-index {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-separator {\r\n    color: #aaa;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-value {\r\n    margin-left: 8px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-number {\r\n    color: #f9ae58;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-boolean {\r\n    color: #ec5f66;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-string {\r\n    color: #86b25c;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-function {\r\n    color: #8060d0;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-size {\r\n    margin-right: 4px;\r\n    margin-left: 4px;\r\n}\r\n\r\n.CompCssDJsonViewTree .wjv-json-hide {\r\n    display: none;\r\n}"),function(b,c){function d(a,b){var c=document.createElement(a);return void 0===b?c:(b.className&&(c.className=b.className),b.content&&(c.textContent=b.content),b.children&&b.children.forEach(function(a){null!==a&&c.appendChild(a)}),c)}function e(a){var b=d("i");b.className=a.expanded?"wicon w-caret-down":"wicon w-caret-right";var c=d("div",{className:"wjv-caret-icon",children:[b]}),e=a.toggle.bind(a);c.addEventListener("click",e);var f=d("div",{className:"wjv-json-index",content:a.key}),g=d("div",{className:"wjv-json-type",content:a.type}),h=d("div",{className:"wjv-json-key",content:a.key}),i=d("div",{className:"wjv-json-size"});"array"===a.type?i.innerText="["+a.children.length+"]":"object"===a.type&&(i.innerText="{"+a.children.length+"}");var j=null===a.key?[c,g,i]:"array"===a.parent.type?[c,f,i]:[c,h,i];var k=d("div",{className:"wjv-line",children:j});return 0<a.depth&&k.setAttribute("style","margin-left: "+24*a.depth+"px;"),k}function f(b){var c=d("div",{className:"wjv-empty-icon"}),e=d("div",{className:"wjv-json-key",content:b.key}),f=d("div",{className:"wjv-json-separator",content:":"}),g=" wjv-json-"+a(b.value),h=b.value+"",i=d("div",{className:"wjv-json-value"+g,content:h}),j=d("div",{className:"wjv-line",children:[c,e,f,i]});return 0<b.depth&&j.setAttribute("style","margin-left: "+24*b.depth+"px;"),j}function g(){return{key:null,parent:null,value:null,expanded:n,type:null,children:null,elem:null,depth:0,setCaretIconRight:function(){var a=this.elem.querySelector(".wicon");a.classList.replace("w-caret-down","w-caret-right")},setCaretIconDown:function(){var a=this.elem.querySelector(".wicon");a.classList.replace("w-caret-right","w-caret-down")},hideChildren:function(){null!==this.children&&this.children.forEach(function(a){a.elem.classList.add("wjv-json-hide"),a.expanded&&a.hideChildren()})},showChildren:function(){null!==this.children&&this.children.forEach(function(a){a.elem.classList.remove("wjv-json-hide"),a.expanded&&a.showChildren()})},toggle:function(){this.expanded?(this.expanded=!1,this.hideChildren(),this.setCaretIconRight()):(this.expanded=!0,this.showChildren(),this.setCaretIconDown())}}}function h(b){var c=a(b);return Array.isArray(b)?c="array":null===b&&(c="null"),c}function i(b,c){for(var d in b){var j=g();j.parent=c,j.key=d,j.type=h(b[d]),j.depth=c.depth+1,j.expanded=n,"object"===a(b[d])?(j.children=[],c.children.push(j),i(b[d],j),j.elem=e(j)):(j.value=b[d],j.elem=f(j),c.children.push(j))}}function j(a){var b=g();return b.type=h(a),b.children=[],b.expanded=n,i(a,b),b.elem=e(b),b}function k(a,b){b(a),null!==a.children&&a.children.forEach(function(a){k(a,b)})}function l(a,b){k(a,function(a){a.expanded||a.hideChildren(),b.appendChild(a.elem)})}var m=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=!1;(function(a,b,c){c&&(n=!0===c.expanded),b.innerHTML="",b.classList.add("CompCssDJsonViewTree");var d=j(a);l(d,b)})(b,c,m)}});
//# sourceMappingURL=w-jsonview-tree.umd.js.map
