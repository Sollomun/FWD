//turns a specified button into a toggle to collapse the following section

var toggleBt = document.getElementsByClassName("collapseBt");

for (var i = 0; i < toggleBt.length; i++) {
    toggleBt[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var collapseSec = this.nextElementSibling;
        if (collapseSec.style.display === "block") {
            collapseSec.style.display = "none";
        } else {
            collapseSec.style.display = "block";
        }
    });
}

// This snippet of code makes an array of all the section elements in the document 
// then uses a forEach method to add a nav list item for each one of them in the header menu

const navMenu = document.getElementById("navbar__list");
const pageSections = document.querySelectorAll("section");
function createListItem() {
    pageSections.forEach(function (pageSec) {
        navMenuItem = document.createElement("li");
        navMenuItem.innerHTML = `<a data-nav="${pageSec.id}" class="menu__link">${pageSec.dataset.nav}</a>`;
        navMenu.appendChild(navMenuItem);
    })
}
createListItem();

// Add class 'active' to section when in viewport
const [...sections] = document.querySelectorAll("section");


const onScreen = function (item) {
    const { top, bottom } = item.getBoundingClientRect();
    const screenArea = window.innerHeight

    return bottom >= 0 && top <= screenArea
};

const addClasses = function () {
    sections.map((portion) => {
        window.addEventListener("scroll", (event) => {
            if (onScreen(portion) == true) {
                portion.classList.add("activate")
            } else {
                portion.classList.remove("activate")
            }
        });
    });
};

addClasses()

// Scrolls to anchor data-nav attribute using scrollIntoView event

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(`#${this.getAttribute('data-nav')}`).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
