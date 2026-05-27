window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-CXDB014HWL");

gsap.registerPlugin(ScrollTrigger, SplitText);

const body = document.getElementById("body");
const themeButton = document.getElementById("sun-button");
const themeIcon = document.getElementById("themeIcon");
const languageButton = document.getElementById("lang-button");
const backToTopButton = document.getElementById("btn_back-to-top");
const cursorGlow = document.getElementById("cursorGlow");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLangButton = document.getElementById("mobile-lang-button");
const mobileSunButton = document.getElementById("mobile-sun-button");
const mobileThemeIcon = document.getElementById("mobileThemeIcon");

let currentLanguage = "en";

const texts = {
    en: {
        experienceMenu: "Experiences",
        speakingMenu: "Teaching",
        heroKicker: "Available for product, frontend and AI evaluation work",
        heroRole: "Fullstack Engineer",
        heroRoleSecond: "Frontend Specialist",
        heroRoleThird: "AI Evaluation",
        about:
            "I specialize in crafting pixel-perfect, engaging and accessible digital experiences, leveraging my wealth of experience and expertise. With a focus on innovation and quality, I thrive on tackling challenges and delivering outstanding results.",
        downloadCv: "Download CV",
        metricYears: "Since 2017",
        metricSinceLabel: "Building software",
        AI: "AI",
        metricAI: "Quality review workflows",
        metricUI: "Accessible interfaces",
        scrollCue: "Scroll",
        scrollCueMobile: "Swipe",
        currentEyebrow: "Current Mission",
        currentTitle: "Reviewing AI evaluation quality at scale",
        currentVideoEyebrow: "Data in use",
        currentVideoTitle: "Turning AI signals into stronger systems",
        currentVideoText:
            "A visual reference for the kind of evaluation work I support: reviewing complex model behavior, identifying patterns, reducing ambiguity, and turning feedback into clearer, more reliable AI systems.",
        experienceEyebrow: "Career Timeline",
        experienceTitle: "Experiences",
        speakingEyebrow: "Community",
        speakingTitle: "Teaching",
        technologiesEyebrow: "Tech",
        contactEyebrow: "Let’s build",
        contactTitle: "Reliable systems. Beautiful interfaces. Useful AI.",
        contactText:
            "I enjoy building products that feel good, work reliably, and solve real problems.",
        scaleai:
            "I review complex AI evaluation workflows to ensure quality, consistency, and alignment with internal standards. My work focuses on assessing model behavior, identifying evaluation issues, improving feedback quality, and helping strengthen the reliability of AI systems across multi-step tasks.",
        scaleaiTimeline:
            "Review AI evaluation workflows for quality, consistency, and alignment with internal standards. I assess model behavior across complex tasks, identify evaluation issues, and provide feedback that helps improve reliability, clarity, and reviewer alignment at scale.",
        agsoftware:
            "Contracted by AG Software to contribute to internal platforms for Classical Conversations, a global organization that supports homeschooling communities. I develop and maintain scalable web applications and APIs. My responsibilities also include writing unit and integration tests to ensure code reliability and maintainability across services used by thousands of families and educators worldwide.",
        sicsa:
            "Led a team in transforming an online ordering platform that facilitates the dropshipping business model for clients, enabling the management of supplier data and the generation of sales orders for electronic components. Oversaw the unification of inconsistent UI elements, the development of new components, and the implementation of real-time notifications for product actions.",
        logacode:
            "Contributed to building new, visually appealing and user-friendly components for the project. Focused on improving the user interface and ensuring seamless interaction for a better user experience.",
        nicasource:
            "Contributed to the development and evolution of voice-driven products across multiple platforms, working on both user-facing experiences and supporting systems. Improved reliability and scalability by modernizing legacy components, introducing frontend solutions, and supporting deployment workflows in cloud and serverless environments. Collaborated on high-traffic integrations, optimizing data handling and request flows. As Team Lead, guided a voice-focused team, ensuring consistent delivery, technical quality, and collaboration across projects.",
        atlas:
            "Contributed to Atlas Primer, a voice-enabled learning experience available through Alexa and Google Assistant. Implemented fixes and new features for the product, helping improve stability, functionality, and the overall experience of interacting with learning content through voice.",
        inss:
            "Owned quality assurance for the pensions module, validating both business rules and system behavior through unit and integration testing. Built automated testing workflows by integrating Selenium with Java-based test suites, improving reliability and coverage. Led a QA team to ensure full validation of the module, including complex financial calculations. Leveraged SQL to extract and prepare test data, transforming it into structured inputs for automated tests. Increased test coverage to over 85%, significantly improving system stability.",
        atomic:
            "Led frontend development as a freelancer, defining the visual architecture of applications and ensuring consistency across the entire interface. Implemented reusable component systems based on Atomic Design, maintaining coherence between layouts, styles, and UI behavior. Focused on building clean, aligned, and scalable user experiences, using tools like Adobe XD to design and validate interfaces before implementation.",
        inssRole1: "Programmer · Feb 2021 — Jun 2021",
        inssRole2: "System Integrator · Apr 2018 — Jan 2021",
        inssRole3: "Digitalization Operator · Apr 2017 — Mar 2018",
        speakingText:
            "As a Software Engineer, I've had the opportunity to share my knowledge through teaching. I collaborated with ISOC SIGHT Nicaragua to establish a telecenter aimed at teaching technology, where I was responsible for teaching participants how to create video games without code using Scratch. In 2023, I taught a course called 'Minecraft Hour of Code' at the Kids Camp within WordCamp. Additionally, I've made outstanding contributions to CS50x as a member of the teaching staff at CS50x.ni.",
        cs50Role: "CS50 Certificate",
        cs50Title: "A foundation built through teaching.",
        cs50Text:
            "This recognition represents more than a certificate. It reflects my experience helping learners understand programming fundamentals, supporting a rigorous computer science learning environment, and turning technical concepts into clear, approachable lessons.",
        cs50ValueOneTitle: "Teaching support",
        cs50ValueOneText: "Guided students through programming fundamentals and problem-solving.",
        cs50ValueTwoTitle: "Clear communication",
        cs50ValueTwoText: "Translated complex concepts into practical and accessible explanations.",
        cs50ValueThreeTitle: "Community learning",
        cs50ValueThreeText: "Contributed to a local learning experience connected to a global program.",
        cs50Org: "Harvard University",
    },

    sp: {
        experienceMenu: "Experiencia",
        speakingMenu: "Enseñanza",
        heroKicker: "Disponible para desarrollo frontend, producto y evaluación de IA",
        heroRole: "Ingeniero Fullstack",
        heroRoleSecond: "Especialista Frontend",
        heroRoleThird: "Evaluación de IA",
        about:
            "Me especializo en construir interfaces modernas, accesibles y de alto impacto. Combino diseño, desarrollo y pensamiento crítico para crear productos digitales confiables, escalables y centrados en el usuario.",
        downloadCv: "Descargar CV",
        metricYears: "Desde 2017",
        metricSinceLabel: "Construyendo software",
        AI: "IA",
        metricAI: "Revisión de calidad",
        metricUI: "Interfaces accesibles",
        scrollCue: "Scroll",
        scrollCueMobile: "Desliza",
        currentEyebrow: "Enfoque actual",
        currentTitle: "Revisando la calidad de evaluaciones de IA a escala",
        currentVideoEyebrow: "Datos en uso",
        currentVideoTitle: "Convirtiendo señales de IA en sistemas más confiables",
        currentVideoText:
            "Una referencia visual del tipo de evaluación que apoyo: revisar comportamientos complejos de modelos, identificar patrones, reducir ambigüedad y convertir feedback en sistemas de IA más claros y confiables.",
        experienceEyebrow: "Trayectoria profesional",
        experienceTitle: "Experiencia",
        speakingEyebrow: "Comunidad",
        speakingTitle: "Enseñanza",
        technologiesEyebrow: "Tecnologías",
        contactEyebrow: "Construyamos",
        contactTitle: "Sistemas confiables. Interfaces de alto nivel. IA útil.",
        contactText:
            "Disfruto crear productos que se ven bien, funcionan mejor y resuelven problemas reales.",
        scaleai:
            "Reviso flujos complejos de evaluación de IA para asegurar calidad, consistencia y alineación con estándares internos. Mi trabajo se enfoca en evaluar el comportamiento de modelos, identificar problemas de evaluación, mejorar la calidad del feedback y fortalecer la confiabilidad de sistemas de IA en tareas de múltiples pasos.",
        scaleaiTimeline:
            "Reviso flujos de evaluación de IA para asegurar calidad, consistencia y alineación con estándares internos. Evalúo el comportamiento de modelos en tareas complejas, identifico problemas de evaluación y doy feedback que ayuda a mejorar la confiabilidad, claridad y alineación entre reviewers a escala.",
        agsoftware:
            "Colaboré en el desarrollo de plataformas internas para Classical Conversations, una organización global enfocada en educación. Construí y mantuve aplicaciones web y APIs escalables, además de implementar pruebas unitarias e integración para garantizar confiabilidad y mantenibilidad en sistemas utilizados por miles de usuarios.",
        sicsa:
            "Lideré la transformación de una plataforma de pedidos orientada al modelo de dropshipping. Supervisé la unificación de la interfaz, el desarrollo de nuevos componentes y la implementación de notificaciones en tiempo real, logrando una experiencia más coherente, eficiente y escalable.",
        logacode:
            "Desarrollé componentes modernos, visualmente atractivos y centrados en la experiencia del usuario. Me enfoqué en mejorar la interfaz y garantizar interacciones fluidas dentro de la aplicación.",
        nicasource:
            "Contribuí al desarrollo y evolución de productos basados en voz en múltiples plataformas, trabajando tanto en experiencias de usuario como en sistemas de soporte. Mejoré la confiabilidad y escalabilidad mediante la modernización de componentes legacy, la implementación de soluciones frontend y el apoyo a procesos de despliegue en entornos cloud y serverless. Colaboré en integraciones de alto tráfico, optimizando el manejo de datos y los flujos de solicitudes. Como Team Lead, guié a un equipo enfocado en voice, asegurando entregas consistentes, calidad técnica y colaboración entre proyectos.",
        atlas:
            "Contribuí en Atlas Primer, una experiencia de aprendizaje basada en voz disponible mediante Alexa y Google Assistant. Implementé correcciones y nuevas funcionalidades para el producto, ayudando a mejorar la estabilidad, funcionalidad y experiencia general al interactuar con contenido educativo mediante voz.",
        inss:
            "Estuve a cargo del aseguramiento de calidad del módulo de pensiones, validando tanto las reglas de negocio como el comportamiento del sistema mediante pruebas unitarias e integraciones. Construí flujos de pruebas automatizadas integrando Selenium con suites de pruebas en Java, mejorando la confiabilidad y cobertura del sistema. Lideré un equipo de QA para asegurar la validación completa del módulo, incluyendo cálculos financieros complejos. Utilicé SQL para extraer y preparar datos de prueba, transformándolos en entradas estructuradas para pruebas automatizadas. Logramos aumentar el coverage a más del 85%, elevando significativamente la estabilidad del sistema.",
        atomic:
            "Lideré el desarrollo frontend como freelancer, definiendo la arquitectura visual de las aplicaciones y asegurando consistencia en toda la interfaz. Implementé sistemas de componentes reutilizables basados en Atomic Design, manteniendo coherencia entre layouts, estilos y comportamiento de la UI. Me enfoqué en construir experiencias de usuario limpias, alineadas y escalables, utilizando herramientas como Adobe XD para diseñar y validar interfaces antes de su implementación.",
        inssRole1: "Programador · Feb 2021 — Jun 2021",
        inssRole2: "Integrador de Sistemas · Abr 2018 — Ene 2021",
        inssRole3: "Digitalizador · Abr 2017 — Mar 2018",
        speakingText:
            "He compartido conocimientos a través de distintas iniciativas educativas y tecnológicas. Colaboré con ISOC SIGHT Nicaragua en la creación de un telecentro enfocado en enseñanza tecnológica, donde impartí formación en desarrollo de videojuegos sin código usando Scratch. En 2023, fui instructor en 'Minecraft Hour of Code' durante el Kids Camp de WordCamp. También formé parte del equipo docente de CS50x en Nicaragua.",
        cs50Role: "Certificado CS50",
        cs50Title: "Una base construida desde la enseñanza.",
        cs50Text:
            "Este reconocimiento representa más que un certificado. Refleja mi experiencia ayudando a estudiantes a comprender fundamentos de programación, apoyando un entorno riguroso de aprendizaje en ciencias de la computación y convirtiendo conceptos técnicos en explicaciones claras y accesibles.",
        cs50ValueOneTitle: "Apoyo docente",
        cs50ValueOneText: "Guié a estudiantes en fundamentos de programación y resolución de problemas.",
        cs50ValueTwoTitle: "Comunicación clara",
        cs50ValueTwoText: "Convertí conceptos complejos en explicaciones prácticas y accesibles.",
        cs50ValueThreeTitle: "Aprendizaje comunitario",
        cs50ValueThreeText: "Contribuí a una experiencia local conectada con un programa global.",
        cs50Org: "Universidad de Harvard",
    }
};

function changeLanguage(lang) {
    currentLanguage = lang;
    languageButton.textContent = lang === "en" ? "EN" : "ES";

    if (mobileLangButton) {
        mobileLangButton.querySelector("span").textContent = lang === "en" ? "EN" : "ES";
    }

    document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");

        if (texts[lang][key]) {
            element.textContent = texts[lang][key];
        }
    });

    updateScrollCueText();
}

function initLenis() {
    if (!window.Lenis) return;

    const lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.25,
    });

    window.lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

function initTheme() {
    function toggleTheme() {
        body.classList.toggle("light-mode");
        const isLightMode = body.classList.contains("light-mode");

        themeIcon.className = isLightMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";

        if (mobileThemeIcon) {
            mobileThemeIcon.className = isLightMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
        }
    }

    themeButton.addEventListener("click", toggleTheme);

    if (mobileSunButton) {
        mobileSunButton.addEventListener("click", toggleTheme);
    }
}

function initCursorGlow() {
    if (!cursorGlow) return;

    window.addEventListener("mousemove", (event) => {
        gsap.to(cursorGlow, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.7,
            ease: "power3.out",
        });
    });
}

function initHeaderActiveState() {
    const desktopLinks = document.querySelectorAll("[data-section-link]");
    const mobileLinks = document.querySelectorAll(".mobile-menu-link");
    const sections = document.querySelectorAll("main section[id]");

    function setActiveLink() {
        let currentId = "home";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= window.innerHeight * 0.35) {
                currentId = section.id;
            }
        });

        desktopLinks.forEach((link) => {
            link.classList.toggle("active", link.dataset.sectionLink === currentId);
        });

        mobileLinks.forEach((link) => {
            link.classList.toggle(
                "is-active",
                link.getAttribute("href") === `#${currentId}`
            );
        });
    }

    setActiveLink();
    window.addEventListener("scroll", setActiveLink);
}

function initHeroAnimation() {
    const split = SplitText.create(".split-title", {
        type: "chars",
        charsClass: "char",
    });

    const tl = gsap.timeline({
        defaults: {
            ease: "power4.out",
            duration: 1.1,
        },
    });

    tl.from(split.chars, {
        yPercent: 120,
        rotation: 8,
        autoAlpha: 0,
        stagger: {
            each: 0.025,
            from: "center",
        },
    })
        .from(
            ".reveal-text",
            {
                y: 28,
                autoAlpha: 0,
                stagger: 0.08,
            },
            "-=0.75"
        )
        .from(
            ".floating-code",
            {
                y: 24,
                autoAlpha: 0,
                scale: 0.92,
                stagger: 0.12,
            },
            "-=0.8"
        )
        .from(
            ".site-header",
            {
                y: -30,
                autoAlpha: 0,
            },
            "-=0.9"
        );

    gsap.to(".orb-one", {
        x: 80,
        y: 40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    gsap.to(".orb-two", {
        x: -80,
        y: 50,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    gsap.to(".orb-three", {
        y: -80,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    gsap.to(".floating-code", {
        y: (index) => (index % 2 === 0 ? -18 : 18),
        x: (index) => (index % 2 === 0 ? 12 : -12),
        rotation: (index) => (index % 2 === 0 ? 2 : -2),
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
    });
}

function initHeroScrollScene() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        },
    });

    tl.to(
        ".hero-title",
        {
            yPercent: -18,
            scale: 0.92,
            ease: "none",
        },
        0
    )
        .to(
            ".hero-bg",
            {
                yPercent: 18,
                ease: "none",
            },
            0
        )
        .to(
            ".floating-code",
            {
                yPercent: -55,
                opacity: 0.85,
                ease: "none",
            },
            0
        );
}

function initRevealAnimations() {
    gsap.utils.toArray(".reveal-card").forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 82%",
                once: true,
            },
            y: 54,
            autoAlpha: 0,
            scale: 0.98,
            duration: 0.9,
            ease: "power3.out",
        });
    });

    gsap.utils.toArray(".section-heading").forEach((heading) => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true,
            },
            y: 40,
            autoAlpha: 0,
            duration: 0.85,
            ease: "power3.out",
        });
    });
}

function initTimelineAnimation() {
    gsap.utils.toArray(".timeline-item").forEach((item) => {
        const index = item.querySelector(".timeline-index");

        if (!index) return;

        gsap.fromTo(
            index,
            {
                scale: 0.9,
                opacity: 0.75,
            },
            {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 55%",
                    scrub: true,
                },
                scale: 1,
                opacity: 1,
                ease: "none",
            }
        );
    });
}

function initTechAnimation() {
    gsap.from(".tech-box", {
        scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 80%",
            once: true,
        },
        y: 40,
        autoAlpha: 0,
        scale: 0.92,
        duration: 0.8,
        ease: "back.out(1.4)",
        stagger: {
            amount: 0.9,
            from: "center",
        },
    });
}

function initMagneticHover() {
    const magneticItems = document.querySelectorAll(".magnetic");

    magneticItems.forEach((item) => {
        item.addEventListener("mousemove", (event) => {
            const rect = item.getBoundingClientRect();
            const relX = event.clientX - rect.left - rect.width / 2;
            const relY = event.clientY - rect.top - rect.height / 2;

            gsap.to(item, {
                x: relX * 0.12,
                y: relY * 0.12,
                rotationX: -relY * 0.04,
                rotationY: relX * 0.04,
                scale: 1.04,
                duration: 0.35,
                ease: "power3.out",
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.35)",
            });
        });
    });
}

function initBackToTop() {
    window.addEventListener("scroll", () => {
        const shouldShow = window.scrollY > 500;
        backToTopButton.classList.toggle("show", shouldShow);
    });

    backToTopButton.addEventListener("click", () => {
        if (window.lenis) {
            window.lenis.scrollTo(0);
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

function initLanguageToggle() {
    languageButton.addEventListener("click", () => {
        const newLanguage = currentLanguage === "en" ? "sp" : "en";
        changeLanguage(newLanguage);
    });

    if (mobileLangButton) {
        mobileLangButton.addEventListener("click", () => {
            const newLanguage = currentLanguage === "en" ? "sp" : "en";
            changeLanguage(newLanguage);
        });
    }

    changeLanguage(currentLanguage);
}

function updateScrollCueText() {
    const scrollText = document.querySelector("[data-key='scrollCue']");
    if (!scrollText) return;

    const isMobile = window.innerWidth <= 640;

    const key = isMobile ? "scrollCueMobile" : "scrollCue";

    if (texts[currentLanguage][key]) {
        scrollText.textContent = texts[currentLanguage][key];
    }
}

function initReducedMotionGuard() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.globalTimeline.clear();
    }
}

function initMobileMenu() {
    if (!mobileMenu || !mobileMenuButton || !mobileMenuClose) return;

    function openMenu() {
        mobileMenu.classList.add("is-open");
        mobileMenu.setAttribute("aria-hidden", "false");
        body.style.overflow = "hidden";
    }

    function closeMenu() {
        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
        body.style.overflow = "";
    }

    mobileMenuButton.addEventListener("click", openMenu);
    mobileMenuClose.addEventListener("click", closeMenu);

    document.querySelectorAll(".mobile-menu-link").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}

function initTypingCode() {
    const codeElement = document.getElementById("roleCode");

    if (!codeElement) return;

    const fullText = codeElement.textContent;

    codeElement.textContent = "";

    let index = 0;
    let started = false;

    const typeEffect = () => {
        if (index < fullText.length) {
            codeElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeEffect, 35);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !started) {
                started = true;
                typeEffect();
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(codeElement);
}

function initPhotoParallax() {
    const speakingSection = document.querySelector(".speaking-section");
    const heroImage = document.querySelector(".speaking-poster-image");
    const heroCopy = document.querySelector(".speaking-poster-copy");

    if (!speakingSection || !heroImage || !heroCopy) return;

    gsap.to(heroImage, {
        scrollTrigger: {
            trigger: speakingSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        yPercent: -8,
        scale: 1.08,
        ease: "none",
    });

    gsap.to(heroCopy, {
        scrollTrigger: {
            trigger: speakingSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        yPercent: -10,
        ease: "none",
    });
}

window.addEventListener("load", () => {
    initLenis();
    initTheme();
    initLanguageToggle();
    initCursorGlow();
    initHeaderActiveState();
    initHeroAnimation();
    initHeroScrollScene();
    initRevealAnimations();
    initTimelineAnimation();
    initTechAnimation();
    initMagneticHover();
    initPhotoParallax();
    initBackToTop();
    initReducedMotionGuard();
    updateScrollCueText();
    initMobileMenu();
    initTypingCode();
    ScrollTrigger.refresh();
});

window.addEventListener("resize", () => {
    updateScrollCueText();

    gsap.set(".scroll-cue", { autoAlpha: 1 });
});
