var toggle = document.querySelector(".nav__toggle");
var nav = document.querySelector(".nav__list");

function toggleNav(e) {
    e.preventDefault();
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");

        // adds the menu icon
        toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-toggle'/></svg>"; 
    } else {
        nav.classList.add("active");

        // adds the close icon
        toggle.querySelector("a").innerHTML = "<svg><use xlink:href='#icon-close'/></svg>";
    }
}

toggle.addEventListener("click", toggleNav, false);