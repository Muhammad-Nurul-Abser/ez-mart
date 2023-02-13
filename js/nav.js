// nav menu
const hamburger = document.querySelector(".hamburger");
let menuOpen = false;
const navBar = document.querySelector(".nav-bar");
const carousel1 = document.querySelector(".main-carousel");
carousel1.style.display = 'block';


var delayInMilliseconds = 300; //3 milisecond


hamburger.addEventListener("click", () => {
    if (!menuOpen) {
        hamburger.classList.add("open");
        menuOpen = true;
        carousel1.style.display = 'none';
    } else {
        hamburger.classList.remove("open");
        menuOpen = false;
        setTimeout(function() {
            carousel1.style.display = 'block';
          }, delayInMilliseconds);

    }
    navBar.classList.toggle("active");
});


