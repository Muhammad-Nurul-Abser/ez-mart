// nav menu
const hamburger = document.querySelector(".hamburger");
let menuOpen = false;
const navBar = document.querySelector(".nav-bar");
const carousel = document.querySelector(".carousel");
carousel.style.display = 'block';


var delayInMilliseconds = 300; //1 second


hamburger.addEventListener("click", () => {
    if (!menuOpen) {
        hamburger.classList.add("open");
        menuOpen = true;
        carousel.style.display = 'none';
    } else {
        hamburger.classList.remove("open");
        menuOpen = false;
        setTimeout(function() {
            //your code to be executed after 1 second
            carousel.style.display = 'block';
          }, delayInMilliseconds);

    }
    navBar.classList.toggle("active");
});


