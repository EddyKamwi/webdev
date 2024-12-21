const crossBar = document.querySelector(".bars")
const menu = document.querySelector('.menu')
const links = document.querySelectorAll('a')
var clicked = true;
crossBar.addEventListener("click", (event) => {
    if (clicked) {
        event.target.parentElement.style.width = "300px"
        event.target.innerText = "⨉";
        menu.style.display = "flex"
        clicked=false
    } else {
        event.target.parentElement.style.width = "68px";
        event.target.innerText = "≡";
        menu.style.display = "none"
        clicked = true;
    }
})