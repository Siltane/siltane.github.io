// script.js
document.addEventListener("DOMContentLoaded", function() {
    var themeButton = document.getElementById("theme-toggle");

    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});