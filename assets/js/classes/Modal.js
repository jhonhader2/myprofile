/**
 * Clase Modal - Responsabilidad única: manejo de modales
 * Principio: Principio de Responsabilidad Única (SRP)
 */
class Modal {
    constructor(root) {
        this.root = root;
        this.closeBtn = root.querySelector('#closeModal');
        this.bind();
    }

    /**
     * Vincula los event listeners
     * Principio: DRY - centraliza la lógica de eventos
     */
    bind() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.root.addEventListener('click', (e) => {
            if (e.target === this.root) this.close();
        });
    }

    /**
     * Abre el modal
     */
    open() {
        this.root.classList.add('active');
        this.root.removeAttribute('aria-hidden');
    }

    /**
     * Cierra el modal
     */
    close() {
        this.root.classList.remove('active');
        this.root.setAttribute('aria-hidden', 'true');
    }
}

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Modal;
}
