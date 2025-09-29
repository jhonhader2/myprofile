/**
 * Clase ScrollSpy - Manejo de navegación activa basada en scroll
 * Principio: Responsabilidad Única - solo manejo de scroll spy
 * Principio: DRY - funcionalidad reutilizable
 */
class ScrollSpy {
    constructor() {
        this.navLinks = document.querySelectorAll('nav a[href^="#"]');
        this.sections = [];
        this.currentActive = null;
        this.init();
    }

    /**
     * Inicializa el scroll spy
     * Principio: KISS - inicialización simple
     */
    init() {
        this.setupSections();
        this.bindEvents();
        this.updateActiveSection(); // Verificar sección inicial
    }

    /**
     * Configura las secciones a observar
     */
    setupSections() {
        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const section = document.querySelector(href);
                if (section) {
                    this.sections.push({
                        id: href.substring(1),
                        element: section,
                        link: link
                    });
                }
            }
        });
    }

    /**
     * Vincula los event listeners
     */
    bindEvents() {
        // Scroll listener optimizado
        window.addEventListener('scroll', this.throttle(() => {
            this.updateActiveSection();
        }, 16)); // 60fps

        // Click en enlaces de navegación
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    this.smoothScrollTo(href);
                }
            });
        });
    }

    /**
     * Actualiza la sección activa basada en la posición del scroll
     */
    updateActiveSection() {
        const scrollPos = window.scrollY + 200; // Offset para activación
        let current = null;

        // Buscar la sección actual
        this.sections.forEach(section => {
            const top = section.element.offsetTop;
            const bottom = top + section.element.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                current = section;
            }
        });

        // Si estamos al final de la página, activar la última sección
        if (scrollPos + window.innerHeight >= document.documentElement.scrollHeight) {
            current = this.sections[this.sections.length - 1];
        }

        // Si no hay sección activa, usar la primera
        if (!current && this.sections.length > 0) {
            current = this.sections[0];
        }

        // Actualizar si cambió
        if (current && current !== this.currentActive) {
            this.setActiveSection(current);
        }
    }

    /**
     * Establece la sección activa
     */
    setActiveSection(section) {
        // Remover clase activa anterior
        if (this.currentActive) {
            this.currentActive.link.classList.remove('active');
        }

        // Agregar clase activa a la nueva sección
        section.link.classList.add('active');
        this.currentActive = section;
    }

    /**
     * Scroll suave a una sección específica
     */
    smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            const offsetTop = target.offsetTop - 120; // Ajustar por header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Throttle function para optimizar performance
     */
    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollSpy;
}