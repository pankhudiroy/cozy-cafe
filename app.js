document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");
    const navLinks = document.querySelectorAll(".side-menu a"); // Select links

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    menuToggle.addEventListener("click", () => {
        sideMenu.classList.add("active");
        overlay.classList.add("active");
    });

    const closeMenu = () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    };

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});