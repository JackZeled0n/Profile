// window.addEventListener("load", function() {
//     const hero = document.getElementById("hero");

//     function updateMousePosition(ev) {
//         const { clientX, clientY } = ev;
//         hero.style.setProperty("--x", `${clientX}px`);
//         hero.style.setProperty("--y", `${clientY}px`);
//     }

//     window.addEventListener("mousemove", updateMousePosition);

//     return function cleanup() {
//         window.removeEventListener("mousemove", updateMousePosition);
//     };
// });

const sunButton = document.getElementById('sun-button');
const sunIcon = document.getElementById('sun-icon');
const body = document.getElementById('body');

sunButton.addEventListener('click', function() {
    if (sunIcon.src.includes('img/theme-light.svg')) {
        sunIcon.src = 'img/theme-dark.svg';
        body.classList.add('dark-mode');
    } else {
        sunIcon.src = 'img/theme-light.svg'; 
        body.classList.remove('dark-mode');
    }
});