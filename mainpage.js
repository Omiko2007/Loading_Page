let menu_icon = document.querySelector(".menu_icon");
let box = document.querySelector(".navbar");

// Toggle active classes on menu icon and navbar
menu_icon.onclick = function() {
    menu_icon.classList.toggle("active");
    box.classList.toggle("active_navbar");
};
