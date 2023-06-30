const navbar = document.querySelector("#mobile-nav");
const toggle = document.querySelector(".mobile-nav-toggle");

toggle.addEventListener('click', () => {
    const visibility = navbar.getAttribute('data-visible');
    if(visibility === "false") {
        navbar.setAttribute('data-visible', true);
        toggle.setAttribute('aria-expanded', true);
    } else {
        navbar.setAttribute('data-visible', false);
        toggle.setAttribute('aria-expanded', false);
    }
})