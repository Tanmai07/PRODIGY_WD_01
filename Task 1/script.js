// Script for navigation hover effects and scrolling
function hover(x) {
    x.style.color = "#ff6347";
    x.style.backgroundColor = "#333";
    x.style.textDecoration = "underline";
    x.style.cursor = "pointer";
}

function noHover(x) {
    x.style.color = "#fff";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}

function myHome(x) {
    location.href = "#home";
}

function myAbout(x) {
    location.href = '#about';
}

function myServices(x) {
    location.href = '#services';
}

function myContact(x) {
    location.href = "#contact";
}

// Scroll functionality for smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function mailOver(x) {
    x.style.textDecoration = "underline";
    x.style.color = "#ff6347";
}

function mailOut(x) {
    x.style.textDecoration = "none";
    x.style.color = "#19312d";
}

// Responsive menu functionality
function closeNav() {
    document.getElementById("menu").style.width = "0%";
}

function openNav() {
    document.getElementById("menu").style.width = "100%";
}
