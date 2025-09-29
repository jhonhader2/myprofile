/**
 * Clase ProfileImageManager - Manejo de imagen de perfil e iniciales
 * Principio: Principio de Responsabilidad Única (SRP)
 */
class ProfileImageManager {
    constructor(imgElement, nameElement) {
        this.imgElement = imgElement;
        this.nameElement = nameElement;
        this.placeholderCreated = false;
        this.bind();
    }

    /**
     * Vincula los event listeners
     */
    bind() {
        // Manejar fallo de carga de imagen
        this.imgElement.addEventListener('error', () => this.showInitials());

        // Verificar si la imagen ya falló al cargar
        if (!this.imgElement.complete || this.imgElement.naturalHeight === 0) {
            this.showInitials();
        }
    }

    /**
     * Muestra las iniciales cuando la imagen falla
     * Principio: KISS - lógica simple y directa
     */
    showInitials() {
        // Evitar crear múltiples placeholders
        if (this.placeholderCreated) return;

        const name = this.nameElement.textContent.trim();
        const initials = this.generateInitials(name);

        // Crear placeholder con iniciales
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-placeholder';
        placeholder.textContent = initials;
        placeholder.setAttribute('aria-label', `Iniciales de ${name}`);

        // Reemplazar imagen con placeholder
        this.imgElement.style.display = 'none';
        this.imgElement.parentNode.insertBefore(placeholder, this.imgElement);
        this.placeholderCreated = true;
    }

    /**
     * Genera iniciales a partir del nombre
     * Principio: DRY - función reutilizable
     * @param {string} name - Nombre completo
     * @returns {string} - Iniciales generadas
     */
    generateInitials(name) {
        const words = name.trim().split(/\s+/);
        if (words.length === 0) return '?';

        // Tomar primera letra de cada palabra (máximo 2)
        const initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase());
        return initials.join('');
    }
}

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProfileImageManager;
}
