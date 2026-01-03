/* Typed headline - initialize only when the element exists and Typed.js is loaded */
const typedEl = document.querySelector("#typed");
if (typedEl && typeof Typed !== "undefined") {
  new Typed("#typed", {
    strings: ["Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
}
