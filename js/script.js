window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
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
        sicsa: "Led a team in transforming an online ordering platform that facilitates the dropshipping business model for clients, enabling the management of supplier data and the generation of sales orders for electronic components. Oversaw the unification of inconsistent UI elements, the development of new components, and the implementation of real-time notifications for product actions. Leveraged AJAX to optimize page interactions and significantly reduced code redundancy, achieving a cohesive, scalable, and visually consistent frontend architecture while fostering collaboration and maintaining high development standards.",
        logacode: "Contributed to building new, visually appealing and user-friendly components for the project. Focused on improving the user interface and ensuring seamless interaction for a better user experience.",
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
        sicsa: "Lideré un equipo en la transformación de una plataforma de pedidos en línea que facilita el modelo de negocio de dropshipping para los clientes, permitiendo la gestión de datos de proveedores y la generación de órdenes de venta de componentes electrónicos. Supervisé la unificación de elementos inconsistentes de la interfaz de usuario, el desarrollo de nuevos componentes y la implementación de notificaciones en tiempo real para las acciones de productos. Utilicé AJAX para optimizar las interacciones en las páginas y reduje significativamente la redundancia del código, logrando una arquitectura frontend cohesiva, escalable y visualmente consistente, mientras fomentaba la colaboración y mantenía altos estándares de desarrollo.",
        logacode: "Contribuí a la construcción de nuevos componentes visualmente atractivos y fáciles de usar para el proyecto. Me enfoqué en mejorar la interfaz de usuario y asegurar una interacción fluida para una mejor experiencia del usuario.",
        nicasource: "Construí, diseñé y entregué sitios web, aplicaciones web, habilidades de Alexa, chatbots y experiencias digitales de alta calidad para una variedad diversa de proyectos para clientes como iHeartMedia, Skilled Creative, Big spaceship, Studio IVL y Struck. Como Líder de Equipo en el departamento de desarrollo conversacional, proporciono liderazgo a través de una estrecha colaboración con el equipo, intercambio de conocimientos y liderazgo en la creación de herramientas internas para mejorar la eficiencia y la calidad del trabajo.",
        atlas: "Construí y mantuve componentes críticos utilizados para mejorar la habilidad de Atlas Primer. Colaboré estrechamente con equipos multifuncionales, incluidos desarrolladores y partes interesadas clave, para aplicar las mejores prácticas y mejorar la habilidad. Este esfuerzo colaborativo asegura la alineación con los objetivos estratégicos y fomenta una cultura de innovación y excelencia en toda la organización.",
        inss: "Dirigí el equipo de control de calidad, supervisando el diseño, la codificación y la implantación de un conjunto de herramientas y programas de pruebas, que abarcaban impactos en bases de datos, escenarios de software, pruebas unitarias, pruebas de extremo a extremo, repetición de pruebas de errores y fallos, y mejoras de la usabilidad. Además, empleé patrones de diseño para optimizar los flujos de trabajo de los algoritmos, aumentando significativamente la eficiencia general.",
        atomic: "Dirigí el desarrollo de experiencias de usuario enriquecidas e interacciones dinámicas, empleando metodologías avanzadas de animación para elevar el compromiso a nuevos niveles. Encabecé la creación de elementos front-end, refiné la estética del diseño visual y prototipé para una integración fluida en plataformas responsivas.",
        speakingTitle: "Ponencias.",
        speakingText: "Como Ingeniero de Software, he tenido la oportunidad de compartir mis conocimientos en diversas presentaciones. Colaboré con ISOC SIGHT Nicaragua para establecer un telecentro destinado a enseñar tecnología, donde fui responsable de enseñar a los participantes cómo crear videojuegos sin código utilizando Scratch. En 2023, impartí un curso llamado 'Minecraft Hour of Code' en el campamento infantil dentro de WordCamp. Además, he realizado contribuciones destacadas a CS50x como miembro del equipo docente en CS50x.ni."
    }
};

window.addEventListener('load', function() {
    const hero = document.getElementById('hero');
    
    function updateMousePosition(event) {
        hero.style.setProperty('--x', `${event.clientX}px`);
        hero.style.setProperty('--y', `${event.clientY}px`);
    }
    
    window.addEventListener('mousemove', updateMousePosition);
});

sunButton.addEventListener('click', () => {
    const isLightMode = sunIcon.src.includes('img/theme-light.svg');
    sunIcon.src = isLightMode ? 'img/theme-dark.svg' : 'img/theme-light.svg';
    body.classList.toggle('dark-mode', isLightMode);
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-link');
    const sections = document.querySelectorAll('section');
    
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
            link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
        });
    }
    
    highlightActiveLink();
    document.addEventListener('scroll', highlightActiveLink);
});

const backToTopButton = document.getElementById('btn_back-to-top');

window.addEventListener('scroll', () => {
    backToTopButton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

languageButton.addEventListener('click', () => {
    const newLanguage = currentLanguage === 'en' ? 'sp' : 'en';
    changeLanguage(newLanguage);
});

function changeLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = texts[lang][key];
    });
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('ul.header-menu');
    const nameSectionTop = document.getElementById('name').getBoundingClientRect().top;
    header.classList.toggle('blur', nameSectionTop <= 0);
});
