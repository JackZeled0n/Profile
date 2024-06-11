window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-CXDB014HWL');

const sunButton = document.getElementById('sun-button');
const sunIcon = document.getElementById('sun-icon');
const body = document.getElementById('body');


window.addEventListener("load", function() {
    const hero = document.getElementById("hero");

    function updateMousePosition(ev) {
        const { clientX, clientY } = ev;
        hero.style.setProperty("--x", `${clientX}px`);
        hero.style.setProperty("--y", `${clientY}px`);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return function cleanup() {
        window.removeEventListener("mousemove", updateMousePosition);
    };
});

sunButton.addEventListener('click', function() {
    if (sunIcon.src.includes('img/theme-light.svg')) {
        sunIcon.src = 'img/theme-dark.svg';
        body.classList.add('dark-mode');
    } else {
        sunIcon.src = 'img/theme-light.svg'; 
        body.classList.remove('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-link');
    const sections = document.querySelectorAll('section');

    // Function to highlight the active link based on the section in view
    function highlightActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Initial call to highlight the active link
    highlightActiveLink();

    // Event listener for scroll to update the active link
    document.addEventListener('scroll', highlightActiveLink);
});
