!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=(e,t,n,o)=>{const r=e.querySelectorAll("input");let l,c=0;const s=document.createElement("div");s.style.cssText="font-size: 2rem;";const u=()=>{setTimeout(()=>{s.textContent=""},5e3)};e.addEventListener("submit",a=>{a.preventDefault(),e.appendChild(s),s.textContent="Загрузка...";const d=new FormData(e);if(l={},d.forEach((e,t)=>{l[t]=e}),(()=>{c=0;let e=[/[а-я].|ё/i,/[0-9]./];for(let t=0;t<r.length;t++)1===r.length&&(e=e.reverse()),e[t].test(`/${r[t].value}/`)||(r[t].value="",r[t].style.borderColor="red",c++)})(),t&&(l=Object.assign(l,t)),c>0)return s.textContent="Данные введены некорректно!",void u();(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(l).then(e=>{if(200!==e.status)throw new Error("status not 200");s.textContent="Готово!"}).catch(e=>{s.textContent="Что-то пошло не так",console.error(e)}).then(()=>{for(let e=0;e<r.length;e++)r[e].style.borderColor="";u(),r.forEach(e=>{e.value=""}),o&&(o.forEach(e=>e.selectedIndex=0),document.getElementById("calc-result").value=""),n&&n.forEach(e=>{"checkbox"===e.type?e.checked=!0:e.value=""})})})};var r=(e,t,n=null,r=null,l=null)=>{let c=document.querySelectorAll([".contacts>.call-btn",".discount-btn",".gauging-button",".panel-body .call-btn",".director-btn"][t]),s=document.querySelector(".popup-"+e),u=0;c.forEach(e=>{e.addEventListener("click",()=>{event.preventDefault(),s.style.display="block",s.addEventListener("click",e=>{const t=s.querySelector(".popup-close"),n=e.target;n!==t&&n!==s||(s.style.display="none")}),0===u&&(o(s.querySelector("form"),n,r,l),u++)})})};var l=(e="")=>{const t=["collapseOne"+e,"collapseTwo"+e,"collapseThree"+e];""===e&&t.push("collapseFour");let n=[],o=[],r=[];t.forEach((e,t)=>{n[t]=document.getElementById(e),o[t]=document.querySelector(`[aria-controls = ${e}]`),r[t]=document.querySelectorAll(".next-step")[t]}),r=r.filter(e=>void 0!==e);o.forEach((t,o)=>{t.addEventListener("click",()=>{event.preventDefault();const t=n.find(e=>e.matches(".in"));n[o].classList.toggle("in"),""!==e&&t&&t.classList.remove("in")})}),r.forEach((e,t)=>{e.addEventListener("click",()=>{event.preventDefault(),n[t+1].classList.add("in")})})};var c=()=>{const e=document.querySelector(".director-form input");e.addEventListener("change",()=>{event.preventDefault(),r("consultation",4,{user_quest:e.value})})};var s=()=>{const e=document.querySelector("#collapseOne input"),t=document.querySelectorAll("#collapseTwo .select-box"),n=Array.from(document.querySelectorAll(".panel-group input")),o=Array.from(document.querySelectorAll(".panel-group select")),l=document.getElementById("calc-result"),c=o.concat(n);let s=1.5;(()=>{const n=collapseTwo.querySelectorAll("#collapseTwo .title-text")[1];e.checked=!1,e.addEventListener("click",()=>{for(let o=2;o<t.length;o++)e.checked?(s=1,t[o].style.display="none",n.style.display="none",t[o].querySelector("select").options[0].selected=!0):(s=1.5,t[o].style.display="inline-block",n.style.display="inline-block")})})(),(()=>{const n=document.getElementById("collapseThree").querySelector("input");c.forEach(o=>o.addEventListener("change",()=>{const o=Array.from(t).map(e=>e.querySelector("select").options[e.querySelector("select").selectedIndex].value).reduce((e,t)=>e*t);let r=Math.round(1e4*s*o+(()=>{let t=0;return n.checked&&(t=1e3,e.checked||(t*=2)),t})());l.value=r}))})(),r("discount",3,(()=>{let e=o.map(e=>e.options[e.selectedIndex].textContent);return{camera_two:n[0].checked,diameters:[e[0],e[2]],rings_number:[e[1],e[3]],bottom:n[1].checked,distance:n[2].value,calc_result:l.value}})(),n,o)};var u=()=>{const e=document.querySelectorAll(".hidden"),t=document.querySelector(".visible-sm-block"),n=document.querySelector(".add-sentence-btn");n.addEventListener("click",()=>{e.forEach(e=>{e.classList.remove("hidden")}),t.classList.remove("visible-sm-block"),n.style.display="none"})};r("call",0),r("discount",1),r("check",2),o(document.querySelector(".section-form .capture-form")),o(document.querySelector(".main-form")),l("-two"),l(),c(),s(),u()}]);