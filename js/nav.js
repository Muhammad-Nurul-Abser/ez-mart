// nav menu
const hamburger = document.querySelector(".hamburger");
let menuOpen = false;
const navBar = document.querySelector(".nav-bar");
const carousel = document.querySelector(".carousel");
carousel.style.display = 'block';

hamburger.addEventListener("click", () => {
    if (!menuOpen) {
        hamburger.classList.add("open");
        menuOpen = true;
        carousel.style.display = 'none';
    } else {
        hamburger.classList.remove("open");
        menuOpen = false;
        carousel.style.display = 'block';
    }
    navBar.classList.toggle("active");
});


