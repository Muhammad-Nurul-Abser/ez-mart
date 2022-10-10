
const hamburger = document.querySelector(".hamburger");
let menuOpen = false;
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    if(!menuOpen){
        hamburger.classList.add("open");
        menuOpen = true;
    } else{
        hamburger.classList.remove("open");
        menuOpen = false;
    }
    navBar.classList.toggle("active");
});