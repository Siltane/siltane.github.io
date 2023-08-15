// script.js
document.addEventListener("DOMContentLoaded", function() {
    var themeButton = document.getElementById("theme-toggle");

    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark-mode") {
        document.body.classList.add("dark-mode");
    }

    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        
        // Save theme preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark-mode");
        } else {
            localStorage.removeItem("theme");
        }
    });
});
