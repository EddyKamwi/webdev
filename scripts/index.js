const crossBar = document.querySelector(".bars")
const menu = document.querySelector('nav')
const links = document.querySelectorAll('a')
var clicked = true;
crossBar.addEventListener("click", (event) => {
    if (clicked) {
        event.target.innerText = "⨉";
        menu.style.height = "200px"
        clicked = false
    } else {
        event.target.innerText = "≡";
        menu.style.height = "0px"
        clicked = true;
    }
})