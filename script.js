
// Getting the menu button and navigation menu

let menuBtn = document.getElementById("menuBtn");
let navMenu = document.getElementById("navMenu");

// Open and close menu when button is clicked

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

// Close menu after clicking a link

let links = navMenu.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show");
    });
});
