window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-CXDB014HWL');

const sunButton = document.getElementById('sun-button');
const sunIcon = document.getElementById('sun-icon');
const body = document.getElementById('body');
const languageButton = document.getElementById('lang-button');
let currentLanguage = 'en';

const texts = {
    en: {
        experienceMenu: "Experiences",
        speakingMenu: "Speaking",
        about: "I specialize in crafting pixel-perfect, engaging and accessible digital experiences, leveraging my wealth of experience and expertise. With a focus on innovation and quality, I thrive on tackling challenges and delivering outstanding results. My commitment to excellence drives me to continually improve and push boundaries in the field of software development.",
        downloadCv: "Download CV",
        experienceTitle: "Experiences.",
        nicasource: "Built, styled, and delivered high-quality websites, web apps, Alexa skills, chatbots and digital experiences for a diverse array of projects for clients including iHeartMedia, Skilled Creative, Big spaceship, Studio IVL, and Struck. As a Team Leader in the conversational development department, I provide leadership through close collaboration with the team, knowledge sharing, and spearheading the creation of internal tools to improve efficiency and work quality.",
        atlas: "Built and maintained critical components used to improve Atlas Primer skill. Collaborated closely with cross-functional teams, including developers and key stakeholders, to implement best practices and enhance the skill. This collaborative effort ensures alignment with strategic objectives and fosters a culture of innovation and excellence throughout the organization.",
        inss: "Led the QA team, overseeing the design, coding and implementation of a suite of testing tools and programs, covering database impacts, software scenarios, unit testing, end-to-end testing, error/bug retesting, and usability enhancements. Moreover, I employed design patterns to optimize algorithm workflows, significantly boosting overall efficiency.",
        atomic: "Led the development of enriched user experiences and dynamic interactions, employing advanced animation methodologies to elevate engagement to new heights. Spearheaded the creation of front-end elements, refined visual design aesthetics, and prototyped for seamless integration across responsive platforms.",
        speakingTitle: "Speaking.",
        speakingText: "As a Software Engineer, I've had the opportunity to share my knowledge at various speaking engagements. I collaborated with ISOC SIGHT Nicaragua to establish a telecenter aimed at teaching technology, where I was responsible for teaching participants how to create video games without code using Scratch. In 2023, I taught a course called 'Minecraft Hour of Code' at the Kids Camp within WordCamp. Additionally, I've made outstanding constributions to CS50x as a member of the teaching staff at CS50x.ni."
    },
    sp: {
        experienceMenu: "Experiencias",
        speakingMenu: "Ponencias",
        about: "Me especializo en crear experiencias digitales precisas, atractivas y accesibles, aprovechando mi experiencia y conocimientos. Con un enfoque en la innovación y la calidad, prospero enfrentando desafíos y entregando resultados sobresalientes. Mi compromiso con la excelencia me impulsa a mejorar continuamente y a romper límites en el campo del desarrollo de software.",
        downloadCv: "Descargar CV",
        experienceTitle: "Experiencias.",
        nicasource: "Construí, diseñé y entregué sitios web, aplicaciones web, habilidades de Alexa, chatbots y experiencias digitales de alta calidad para una variedad diversa de proyectos para clientes como iHeartMedia, Skilled Creative, Big spaceship, Studio IVL y Struck. omo Líder de Equipo en el departamento de desarrollo conversacional, proporciono liderazgo a través de una estrecha colaboración con el equipo, intercambio de conocimientos y liderazgo en la creación de herramientas internas para mejorar la eficiencia y la calidad del trabajo.",
        atlas: "Construí y mantuve componentes críticos utilizados para mejorar la habilidad de Atlas Primer. Colaboré estrechamente con equipos multifuncionales, incluidos desarrolladores y partes interesadas clave, para aplicar las mejores prácticas y mejorar la habilidad. Este esfuerzo colaborativo asegura la alineación con los objetivos estratégicos y fomenta una cultura de innovación y excelencia en toda la organización.",
        inss: "Dirigí el equipo de control de calidad, supervisando el diseño, la codificación y la implantación de un conjunto de herramientas y programas de pruebas, que abarcaban impactos en bases de datos, escenarios de software, pruebas unitarias, pruebas de extremo a extremo, repetición de pruebas de errores y fallos, y mejoras de la usabilidad. Además, empleé patrones de diseño para optimizar los flujos de trabajo de los algoritmos, aumentando significativamente la eficiencia general.",
        atomic: "Dirigí el desarrollo de experiencias de usuario enriquecidas e interacciones dinámicas, empleando metodologías avanzadas de animación para elevar el compromiso a nuevos niveles. Encabecé la creación de elementos front-end, refiné la estética del diseño visual y prototipé para una integración fluida en plataformas responsivas.",
        speakingTitle: "Ponencias.",
        speakingText: "Como Ingeniero de Software, he tenido la oportunidad de compartir mis conocimientos en diversas presentaciones. Colaboré con ISOC SIGHT Nicaragua para establecer un telecentro destinado a enseñar tecnología, donde fui responsable de enseñar a los participantes cómo crear videojuegos sin código utilizando Scratch. En 2023, impartí un curso llamado 'Minecraft Hour of Code' en el campamento infantil dentro de WordCamp. Además, he realizado contribuciones destacadas a CS50x como miembro del equipo docente en CS50x.ni."
    }
};

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


let mybutton = document.getElementById("btn_back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

languageButton.addEventListener('click', () => {
    if (currentLanguage === 'en') {
        changeLanguage('sp');
    } else {
        changeLanguage('en');
    }
});

function changeLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = texts[lang][key];
    });
}