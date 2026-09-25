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

        /* OPEN / CLOSE MENU */
        menuToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            navLinks.classList.toggle("active");

        });


        /* CLOSE MENU WHEN A LINK IS CLICKED */
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });


        /* =========================================
           CLOSE MENU WHEN CLICKING OUTSIDE
        ========================================= */

        document.addEventListener("click", (event) => {

            const clickedInsideMenu =
                navLinks.contains(event.target);

            const clickedMenuButton =
                menuToggle.contains(event.target);

            if (
                navLinks.classList.contains("active") &&
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {

                navLinks.classList.remove("active");

            }

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