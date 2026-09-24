/* =========================================
   PROJECTS PAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".project-filter");
    const projectCards = document.querySelectorAll(".project-page-card");
    const emptyMessage = document.getElementById("projectsEmpty");


    if (!filterButtons.length || !projectCards.length) {
        return;
    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter = button.dataset.filter;


            /* -----------------------------
               UPDATE ACTIVE BUTTON
            ----------------------------- */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* -----------------------------
               FILTER PROJECTS
            ----------------------------- */

            let visibleProjects = 0;


            projectCards.forEach(card => {

                const category = card.dataset.category;

                const shouldShow =
                    selectedFilter === "all" ||
                    category === selectedFilter;


                if (shouldShow) {

                    card.classList.remove("project-hidden");

                    visibleProjects++;

                } else {

                    card.classList.add("project-hidden");

                }

            });


            /* -----------------------------
               EMPTY MESSAGE
            ----------------------------- */

            if (emptyMessage) {

                if (visibleProjects === 0) {

                    emptyMessage.classList.add("show");

                } else {

                    emptyMessage.classList.remove("show");

                }

            }

        });

    });


    /* =====================================
       PROJECT VIEW LINKS
    ===================================== */

    const projectLinks =
        document.querySelectorAll(".project-view-link");


    projectLinks.forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const projectId = link.dataset.project;

            /*
             * Project detail pages will be connected
             * after the client's actual project information
             * and media have been provided.
             */

            console.log(
                `Project selected: ${projectId}`
            );

        });

    });

});