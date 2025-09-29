/**
 * Aplicación principal - Inicialización y configuración
 * Principio: Responsabilidad Única - solo inicialización
 * Principio: DRY - centraliza la configuración de la aplicación
 */
class PortfolioApp {
    constructor() {
        this.modal = null;
        this.recommendationManager = null;
        this.profileImageManager = null;
        this.scrollSpy = null;
        this.init();
    }

    /**
     * Inicializa la aplicación
     * Principio: KISS - inicialización simple y clara
     */
    init() {
        this.initializeModal();
        this.initializeRecommendations();
        this.initializeProfileImage();
        this.initializeScrollSpy();
    }

    /**
     * Inicializa el modal
     */
    initializeModal() {
        const modalElement = document.getElementById('modal');
        if (modalElement) {
            this.modal = new Modal(modalElement);
        }
    }

    /**
     * Inicializa el manejo de recomendaciones
     */
    initializeRecommendations() {
        const listEl = document.getElementById('recs');
        const formEl = document.getElementById('recoForm');

        if (listEl && formEl && this.modal) {
            this.recommendationManager = new RecommendationManager({
                listEl,
                formEl,
                modal: this.modal
            });
        }
    }

    /**
     * Inicializa el manejo de imagen de perfil
     */
    initializeProfileImage() {
        const profileImg = document.getElementById('profileImg');
        const fullName = document.getElementById('fullName');

        if (profileImg && fullName) {
            this.profileImageManager = new ProfileImageManager(profileImg, fullName);
        }
    }

    /**
     * Inicializa el scroll spy para navegación activa
     */
    initializeScrollSpy() {
        this.scrollSpy = new ScrollSpy();
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
