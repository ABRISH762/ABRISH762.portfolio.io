
/* =========================================================
   ABRAHAM ASHAGRE - PROFESSIONAL PORTFOLIO
   File: js/script.js
   ========================================================= */


/* =========================================================
   1. SELECT ELEMENTS
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-menu a");

const sections = document.querySelectorAll("main section");

const footerYear = document.querySelector(".footer");


/* =========================================================
   2. MOBILE NAVIGATION
   ========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        /*
         * Change the menu icon depending
         * on whether the menu is open.
         */

        if (navMenu.classList.contains("active")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =========================================================
   3. CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {

            navMenu.classList.remove("active");

        }

        if (menuToggle) {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* =========================================================
   4. ACTIVE NAVIGATION LINK
   ========================================================= */

function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* Run once when page loads */

updateActiveNavigation();


/* =========================================================
   5. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, " +
    ".achievement-card, " +
    ".document-card, " +
    ".contact-card, " +
    ".education-card, " +
    ".project-card"
);


/*
 * Add the hidden class through JavaScript.
 * The CSS file can then animate these elements.
 */

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


/*
 * Intersection Observer detects when
 * elements enter the screen.
 */

const revealObserver =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   6. SMOOTH SCROLL FOR INTERNAL LINKS
   ========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================================================
   7. CURRENT YEAR IN FOOTER
   ========================================================= */

if (footerYear) {

    const currentYear =
        new Date().getFullYear();


    const paragraphs =
        footerYear.querySelectorAll("p");


    if (paragraphs.length > 0) {

        paragraphs[0].innerHTML =
            "© " +
            currentYear +
            " Abraham Ashagre. All Rights Reserved.";

    }

}


/* =========================================================
   8. PREVENT EMPTY LINKS
   ========================================================= */

document.querySelectorAll(
    'a[href="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

        }
    );

});


/* =========================================================
   9. KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
         * Close mobile navigation
         * when the Escape key is pressed.
         */

        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");


            if (menuToggle) {

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }

    }
);
