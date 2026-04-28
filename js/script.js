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
        speakingMenu: "Speaking",
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
        metricAI: "Evaluation workflows",
        metricUI: "Accessible interfaces",
        scrollCue: "Scroll",
        scrollCueMobile: "Swipe",
        currentEyebrow: "Current Mission",
        currentTitle: "Building reliable AI evaluation systems",
        experienceEyebrow: "Career Timeline",
        experienceTitle: "Experiences",
        speakingEyebrow: "Community & Teaching",
        speakingTitle: "Speaking",
        technologiesEyebrow: "Toolbox",
        contactEyebrow: "Let’s build",
        contactTitle: "Reliable systems. Beautiful interfaces. Useful AI.",
        contactText:
            "I enjoy building products that feel good, work reliably, and solve real problems.",
        scaleai:
            "Design and evaluate complex AI-driven workflows by building high-quality scenarios, structured prompts, and robust validation frameworks. I develop evaluation criteria and validation systems to assess model reasoning, accuracy, and multi-step decision-making. My work focuses on uncovering failure patterns, improving consistency, and strengthening the reliability of AI systems at scale.",
        agsoftware:
            "Contracted by AG Software to contribute to internal platforms for Classical Conversations, a global organization that supports homeschooling communities. I develop and maintain scalable web applications and APIs. My responsibilities also include writing unit and integration tests to ensure code reliability and maintainability across services used by thousands of families and educators worldwide.",
        sicsa:
            "Led a team in transforming an online ordering platform that facilitates the dropshipping business model for clients, enabling the management of supplier data and the generation of sales orders for electronic components. Oversaw the unification of inconsistent UI elements, the development of new components, and the implementation of real-time notifications for product actions.",
        logacode:
            "Contributed to building new, visually appealing and user-friendly components for the project. Focused on improving the user interface and ensuring seamless interaction for a better user experience.",
        nicasource:
            "Built, styled, and delivered high-quality websites, web apps, Alexa skills, chatbots and digital experiences for a diverse array of projects for clients including iHeartMedia, Skilled Creative, Big spaceship, Studio IVL, and Struck.",
        speakingText:
            "As a Software Engineer, I've had the opportunity to share my knowledge at various speaking engagements. I collaborated with ISOC SIGHT Nicaragua to establish a telecenter aimed at teaching technology, where I was responsible for teaching participants how to create video games without code using Scratch. In 2023, I taught a course called 'Minecraft Hour of Code' at the Kids Camp within WordCamp. Additionally, I've made outstanding contributions to CS50x as a member of the teaching staff at CS50x.ni.",
    },

    sp: {
        experienceMenu: "Experiencias",
        speakingMenu: "Ponencias",
        heroKicker: "Disponible para producto, frontend y evaluación de IA",
        heroRole: "Ingeniero Fullstack",
        heroRoleSecond: "Especialista en Frontend",
        heroRoleThird: "Evaluación de IA",
        about:
            "Me especializo en crear experiencias digitales precisas, atractivas y accesibles, aprovechando mi experiencia y conocimientos. Con un enfoque en innovación y calidad, disfruto enfrentar desafíos y entregar resultados sólidos.",
        downloadCv: "Descargar CV",
        metricYears: "Desde 2017",
        metricSinceLabel: "Construyendo software",
        AI: "IA",
        metricAI: "Flujos de evaluación",
        metricUI: "Interfaces accesibles",
        scrollCue: "Scroll",
        scrollCueMobile: "Desliza",
        currentEyebrow: "Misión actual",
        currentTitle: "Construyendo sistemas confiables de evaluación de IA",
        experienceEyebrow: "Trayectoria profesional",
        experienceTitle: "Experiencias",
        speakingEyebrow: "Comunidad y enseñanza",
        speakingTitle: "Ponencias",
        technologiesEyebrow: "Herramientas",
        contactEyebrow: "Construyamos",
        contactTitle: "Sistemas confiables. Interfaces hermosas. IA útil.",
        contactText:
            "Disfruto construir productos que se sienten bien, funcionan de forma confiable y resuelven problemas reales.",
        scaleai:
            "Diseño y evalúo flujos complejos impulsados por IA mediante la creación de escenarios de alta calidad, prompts estructurados y marcos de validación robustos. Desarrollo criterios de evaluación y sistemas de validación para analizar el razonamiento, la precisión y la toma de decisiones en múltiples pasos.",
        agsoftware:
            "Contratado por AG Software para contribuir en plataformas internas de Classical Conversations, una organización global que apoya comunidades de educación en el hogar. Desarrollo y mantengo aplicaciones web escalables y APIs, además de escribir pruebas unitarias e integración.",
        sicsa:
            "Lideré un equipo en la transformación de una plataforma de pedidos en línea orientada al modelo de dropshipping, permitiendo la gestión de proveedores y generación de órdenes de venta. Supervisé la unificación de la interfaz, nuevos componentes y notificaciones en tiempo real.",
        logacode:
            "Contribuí a construir componentes visualmente atractivos y fáciles de usar. Me enfoqué en mejorar la interfaz y asegurar una interacción fluida para una mejor experiencia de usuario.",
        nicasource:
            "Construí, diseñé y entregué sitios web, aplicaciones web, habilidades de Alexa, chatbots y experiencias digitales para diversos clientes. Como líder de equipo, colaboré de cerca con el equipo y lideré herramientas internas para mejorar eficiencia y calidad.",
        speakingText:
            "Como Ingeniero de Software, he tenido la oportunidad de compartir mis conocimientos en distintas presentaciones. Colaboré con ISOC SIGHT Nicaragua para establecer un telecentro enfocado en enseñar tecnología. En 2023 impartí 'Minecraft Hour of Code' en Kids Camp dentro de WordCamp. También he contribuido a CS50x como parte del equipo docente en CS50x.ni.",
    },
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

function initPhotoParallax() {
    gsap.utils.toArray(".speaking-floating-card").forEach((photo, index) => {
        gsap.to(photo, {
            scrollTrigger: {
                trigger: ".speaking-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            y: index % 2 === 0 ? -60 : 70,
            ease: "none",
        });
    });

    gsap.to(".speaking-hero-image img", {
        scrollTrigger: {
            trigger: ".speaking-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        scale: 1.08,
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
    ScrollTrigger.refresh();
});

window.addEventListener("resize", () => {
    updateScrollCueText();

    gsap.set(".scroll-cue", { autoAlpha: 1 });
});
