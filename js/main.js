/* =========================================
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );

    const revealOnScroll = () => {

        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});