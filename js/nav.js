// nav menu
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

// dropdown
const dropdown = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
dropdown.addEventListener("mouseover", function(){
    dropdownContent.classList.add("expand");
});

document.addEventListener('click', function(event){
    const dropdownHiding = document.querySelector('.dropdown-content');
    if(!dropdownHiding.contains(event.target)) {
       dropdownContent.classList.remove("expand");
    }
 });

