/**
 * Clase RecommendationManager - Manejo de recomendaciones
 * Principio: Principio de Responsabilidad Única (SRP)
 */
class RecommendationManager {
    constructor({ listEl, formEl, modal }) {
        this.listEl = listEl;
        this.formEl = formEl;
        this.modal = modal;
        this.bind();
    }

    /**
     * Vincula los event listeners
     */
    bind() {
        this.formEl.addEventListener('submit', (e) => this.onSubmit(e));
    }

    /**
     * Maneja el envío del formulario
     * Principio: DRY - centraliza la lógica de validación
     * @param {Event} e - Evento de submit
     */
    onSubmit(e) {
        e.preventDefault();
        const name = this.formEl.querySelector('#recoName').value.trim();
        const msg = this.formEl.querySelector('#recoMsg').value.trim();

        if (!this.validateInput(name, msg)) return;

        this.addRecommendation(msg, name);
        this.formEl.reset();
        this.modal.open();
    }

    /**
     * Valida los inputs del formulario
     * Principio: Single Responsibility - validación separada
     * @param {string} name - Nombre del recomendador
     * @param {string} msg - Mensaje de recomendación
     * @returns {boolean} - True si es válido
     */
    validateInput(name, msg) {
        return name && msg && name.length > 0 && msg.length > 0;
    }

    /**
     * Añade una nueva recomendación a la lista
     * Principio: KISS - lógica simple
     * @param {string} message - Mensaje de recomendación
     * @param {string} author - Autor de la recomendación
     */
    addRecommendation(message, author) {
        const block = document.createElement('blockquote');
        block.className = 'rec';
        block.setAttribute('role', 'listitem');
        block.innerHTML = `"${this.escape(message)}"<cite>— ${this.escape(author)}</cite>`;
        this.listEl.appendChild(block);
    }

    /**
     * Escapa caracteres HTML para prevenir XSS
     * Principio: Security - sanitización de datos
     * @param {string} str - String a escapar
     * @returns {string} - String escapado
     */
    escape(str) {
        return str.replace(/[&<>"']/g, (ch) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        }[ch]));
    }
}

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RecommendationManager;
}
