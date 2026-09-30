/* =========================================
   PROJECT GALLERY
========================================= */

const projectGalleryModal = document.getElementById("projectGalleryModal");

const galleryClose = document.getElementById("galleryClose");

const galleryProjectClient =
    document.getElementById("galleryProjectClient");

const galleryProjectTitle =
    document.getElementById("galleryProjectTitle");

const galleryProjectDescription =
    document.getElementById("galleryProjectDescription");

const galleryProjectYear =
    document.getElementById("galleryProjectYear");

const galleryMainImage =
    document.getElementById("galleryMainImage");

const carouselPrev =
    document.getElementById("carouselPrev");

const carouselNext =
    document.getElementById("carouselNext");

const carouselCounter =
    document.getElementById("carouselCounter");

const carouselThumbnails =
    document.getElementById("carouselThumbnails");


/* =========================================
   PROJECT DATA
========================================= */

const projectData = {

    project1: {

        client: "HIS ROYAL HIGHNESS IGWE KON ORIZU III",

        title: "Dining Hall",

        description:
            "Construction of a dining hall for HIS ROYAL HIGHNESS IGWE KON ORIZU III.",

        year: "Completed: 2025",

        images: [
            "assets/images/projects/IGWE-ONE.webp",
            "assets/images/projects/IGWE-TWO.webp",
            "assets/images/projects/IGWE-THREE.webp"
        ]

    },


    project2: {

        client: "Roban Stores Limited",

        title: "Vicarage Building",

        description:
            "Construction of a vicarage building at St. Thomas Catholic Church, Nnewi.",

        year: "Completed: 2022",

        images: [
            "assets/images/projects/ROBAN-STORES-ONE.webp",
            "assets/images/projects/ROBAN-STORES-TWO.webp"
        ]

    },


    project3: {

        client: "Gods’ Wisdom International Schools",

        title: "Multipurpose Buildings",

        description:
            "Construction of 3 multipurpose buildings, classrooms and halls.",

        year: "Completed: 2021",

        images: [
            "assets/images/projects/GWIS-ONE.webp",
            "assets/images/projects/GWIS-TWO.webp",
            "assets/images/projects/GWIS-THREE.webp"
        ]

    },


    project4: {

        client: "Digital Global Associates",

        title: "Head Office Building",

        description:
            "Construction of the Digital Global Associates head office building.",

        year: "Completed: 2018",

        images: [
            "assets/images/projects/DGA-ONE.webp",
            "assets/images/projects/DGA-TWO.webp",
            "assets/images/projects/DGA-THREE.webp"
        ]

    }

};


/* =========================================
   CAROUSEL STATE
========================================= */

let currentProject = null;

let currentImageIndex = 0;



/* =========================================
   OPEN GALLERY
========================================= */

function openProjectGallery(projectId) {

    const project = projectData[projectId];

    if (!project) {
        return;
    }

    currentProject = project;

    currentImageIndex = 0;


    /* Project information */

    galleryProjectClient.textContent = project.client;

    galleryProjectTitle.textContent = project.title;

    galleryProjectDescription.textContent =
        project.description;

    galleryProjectYear.textContent = project.year;


    /* Load first image */

    updateGalleryImage();


    /* Open modal */

    projectGalleryModal.classList.add("active");

    projectGalleryModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";

}


/* =========================================
   UPDATE MAIN IMAGE
========================================= */

function updateGalleryImage() {

    if (!currentProject) {
        return;
    }

    const images = currentProject.images;

    const image =
        images[currentImageIndex];


    galleryMainImage.src = image;

    galleryMainImage.alt =
        `${currentProject.title} - Image ${currentImageIndex + 1}`;


    carouselCounter.textContent =
        `${currentImageIndex + 1} / ${images.length}`;


    updateThumbnails();

}


/* =========================================
   UPDATE THUMBNAILS
========================================= */

function updateThumbnails() {

    carouselThumbnails.innerHTML = "";

    if (!currentProject) {
        return;
    }

    currentProject.images.forEach(
        (image, index) => {

            const thumbnail =
                document.createElement("button");

            thumbnail.type = "button";

            thumbnail.className =
                "carousel-thumbnail";


            if (index === currentImageIndex) {

                thumbnail.classList.add("active");

            }


            thumbnail.setAttribute(
                "aria-label",
                `View image ${index + 1}`
            );


            thumbnail.innerHTML = `
                <img
                    src="${image}"
                    alt=""
                >
            `;


            thumbnail.addEventListener(
                "click",
                () => {

                    currentImageIndex = index;

                    updateGalleryImage();

                }
            );


            carouselThumbnails.appendChild(
                thumbnail
            );

        }
    );

}


/* =========================================
   NEXT IMAGE
========================================= */

function showNextImage() {

    if (!currentProject) {
        return;
    }

    currentImageIndex++;

    if (
        currentImageIndex >=
        currentProject.images.length
    ) {

        currentImageIndex = 0;

    }

    updateGalleryImage();

}


/* =========================================
   PREVIOUS IMAGE
========================================= */

function showPreviousImage() {

    if (!currentProject) {
        return;
    }

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            currentProject.images.length - 1;

    }

    updateGalleryImage();

}


/* =========================================
   CLOSE GALLERY
========================================= */

function closeProjectGallery() {

    /*
     * Remove focus from the button or element
     * currently focused inside the modal.
     */
    if (projectGalleryModal.contains(document.activeElement)) {
        document.activeElement.blur();
    }


    /*
     * Close the modal visually.
     */
    projectGalleryModal.classList.remove("active");


    /*
     * Restore accessibility state.
     */
    projectGalleryModal.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
     * Restore page scrolling.
     */
    document.body.style.overflow = "";


    /*
     * Clear current project state.
     */
    currentProject = null;

}


/* =========================================
   VIEW GALLERY BUTTONS
========================================= */

const galleryButtons =
    document.querySelectorAll(
        ".view-gallery-btn"
    );


galleryButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const projectId =
                    button.dataset.project;

                openProjectGallery(projectId);

            }
        );

    }
);


/* =========================================
   CAROUSEL CONTROLS
========================================= */

carouselNext.addEventListener(
    "click",
    showNextImage
);


carouselPrev.addEventListener(
    "click",
    showPreviousImage
);


/* =========================================
   CLOSE BUTTON
========================================= */

galleryClose.addEventListener(
    "click",
    closeProjectGallery
);


/* =========================================
   CLOSE WHEN CLICKING OVERLAY
========================================= */

document
    .querySelector("[data-close-gallery]")
    .addEventListener(
        "click",
        closeProjectGallery
    );


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !projectGalleryModal.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeProjectGallery();

        }


        if (event.key === "ArrowRight") {

            showNextImage();

        }


        if (event.key === "ArrowLeft") {

            showPreviousImage();

        }

    }
);