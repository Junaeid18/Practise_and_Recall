const element = document.querySelector("#imgFix img");
new simpleParallax(element, {
    scale: 1.2,
    transition: "cubic-bezier(0,0,0,1)",
    overflow: true,
});
