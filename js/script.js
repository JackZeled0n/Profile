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
