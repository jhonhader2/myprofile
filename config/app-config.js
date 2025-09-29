/**
 * Configuración de la aplicación
 * Principio: Responsabilidad Única - solo configuración
 * Principio: DRY - configuración centralizada
 */
const APP_CONFIG = {
    // Configuración de la aplicación
    appName: "Portafolio Personal",
    version: "2.0.0",

    // Configuración de rutas
    paths: {
        css: "assets/css/",
        js: "assets/js/",
        components: "components/",
        data: "data/",
        images: "assets/images/"
    },

    // Configuración de breakpoints
    breakpoints: {
        mobile: 480,
        tablet: 768,
        desktop: 1024,
        large: 1200
    },

    // Configuración de animaciones
    animations: {
        duration: 200,
        easing: "ease"
    },

    // Configuración de accesibilidad
    accessibility: {
        focusVisible: true,
        skipLinks: true,
        ariaLabels: true
    }
};

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
