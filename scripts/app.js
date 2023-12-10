const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav_items");

hamburger.addEventListener("click", ()=>{
    navlinks.classList.toggle("change");
});