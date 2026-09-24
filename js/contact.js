/* =========================================
   CONTACT PAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("contactFormMessage");



    /* =========================================
       CONTACT ACTION TRACKING
    ========================================== */

    const contactActions =
        document.querySelectorAll("[data-contact-action]");

    contactActions.forEach(action => {

        action.addEventListener("click", () => {

            const actionType =
                action.dataset.contactAction;

            /*
             * Meta Pixel will only run if the Pixel ID
             * has been configured in meta-pixel.js.
             */

            if (typeof fbq === "function") {

                fbq("track", "Contact", {
                    contact_method: actionType
                });

            }

        });

    });



    /* =========================================
       CONTACT FORM
    ========================================== */

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();


            if (!formMessage) {
                return;
            }


            const name =
                document.getElementById("contactName")?.value.trim();


            /*
             * The form is currently frontend-only.
             *
             * No information is being sent to a server yet.
             * A form service/backend can be connected later.
             */


            formMessage.className =
                "contact-form-message success";


            formMessage.textContent =
                `Thank you${name ? `, ${name}` : ""}. ` +
                "Your enquiry has been received on this demo form. " +
                "Message delivery will be connected once the final " +
                "form service is selected.";


            contactForm.reset();


            /* Track the enquiry event */

            if (typeof fbq === "function") {

                fbq("track", "Lead");

            }

        });

    }

});