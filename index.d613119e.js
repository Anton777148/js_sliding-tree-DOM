document.querySelectorAll(".tree li").forEach(function(e){var t=e.querySelector("ul");if(t){var l=document.createElement("span");l.textContent=e.firstChild.textContent,e.firstChild.replaceWith(l),l.addEventListener("click",function(){"none"===t.style.display?t.style.display="block":t.style.display="none"})}});
//# sourceMappingURL=index.d613119e.js.map
