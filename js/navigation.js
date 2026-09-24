/* =========================================
   NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector(".site-header");

    /* =========================================
       MOBILE MENU
    ========================================= */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });

        });

    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    if (header) {

        const handleHeaderScroll = () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        };

        window.addEventListener("scroll", handleHeaderScroll);

        handleHeaderScroll();

    }

});