!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.createElement("div");e.style.cssText="font-size: 22px",document.body.addEventListener("submit",(function(n){n.preventDefault(),n.target.appendChild(e),e.textContent="Идёт отправка, ожидайте";var o=new FormData(n.target);t(o).then((function(t){if(200!==t.status)throw new Error("Status network not 200");e.textContent="Отправлено"})).then((function(){return n.target.querySelectorAll("input").forEach((function(e){e.value=""}))})).catch((function(){return e.textContent="Извините, что-то пошло не так"}))})),document.body.addEventListener("input",(function(e){var t=e.target;t.classList.contains("phone-user")&&(t.value=t.value.replace(/[^0-9]/,"")),"user_name"===t.getAttribute("name")&&(t.value=t.value.replace(/[^А-яЁё]/,""))}));var t=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e,credentials:"include"})}},r=function(){var e=document.querySelector(".slideInDown"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".collapse");console.log(t);e.addEventListener("click",(function(e){var o=e.target;e.preventDefault(),(o=o.closest(".panel-heading"))&&t.forEach((function(e,t){var r;e===o&&(r=t,n.forEach((function(e,t){e.style.cssText=r===t?"display: block":"display: none"})))}))}))},c=function(){},l=function(){},a=function(){},u=function(){var e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.body.addEventListener("click",(function(n){var o=n.target;if(o.closest(".check-btn"))n.preventDefault(),document.documentElement.clientWidth>=750?(e.style.cssText="display: block",t.animate([{transform:"translateX(1000px)"},{transform:"translateX(-200px)"}],{duration:750,iterations:1})):e.style.cssText="display: block";else if(o.classList.contains("popup-close"))e.style.cssText="display: none";else{o.closest(".popup-content")||(e.style.cssText="display: none")}}))},i=function(){};(function(){var e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.body.addEventListener("click",(function(n){var o=n.target;if(o.closest(".call-btn"))n.preventDefault(),document.documentElement.clientWidth>=750?(e.style.display="block",t.animate([{transform:"translateX(-1000px)"},{transform:"translateX(-200px)"}],{duration:750,iterations:1})):e.style.display="block";else if(o.classList.contains("popup-close"))e.style.display="none";else{o.closest(".popup-content")||(e.style.display="none")}}))})(),o(),r(),c(),l(),a(),u(),i()}]);