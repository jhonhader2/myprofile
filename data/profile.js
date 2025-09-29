/**
 * Datos del perfil - Configuración centralizada
 * Principio: Responsabilidad Única - solo datos
 * Principio: DRY - datos reutilizables
 */
const PROFILE_DATA = {
    name: "Jhon Hader Rodriguez Perdomo",
    title: "Desarrollador Frontend",
    description: "Apasionado por la accesibilidad, el rendimiento y el diseño centrado en las personas. +2 años construyendo interfaces limpias con HTML, CSS y JavaScript.",
    image: "assets/images/profile.jpg",
    skills: [
        { name: "HTML5", logo: "H" },
        { name: "CSS3", logo: "C" },
        { name: "JavaScript (ES6+)", logo: "JS" },
        { name: "Git & GitHub", logo: "G" }
    ],
    projects: [
        {
            title: "Página de cafetería local",
            description: "Sitio web responsivo con menú dinámico y formulario de reservas.",
            tags: ["HTML", "CSS Grid", "JS"]
        },
        {
            title: "Panel de control de hábitos",
            description: "Componentes reutilizables, almacenamiento local y modo oscuro.",
            tags: ["Flexbox", "ARIA", "Vanilla JS"]
        },
        {
            title: "Pokédex minimalista",
            description: "Listado paginado, buscador y tarjetas accesibles.",
            tags: ["Fetch", "SPA básica", "Rendimiento"]
        }
    ],
    recommendations: [
        {
            message: "Demostró excelente criterio de diseño y calidad de código.",
            author: "Ana M., Tech Lead"
        },
        {
            message: "Entrega constante y comunicación efectiva con stakeholders.",
            author: "Carlos R., PM"
        },
        {
            message: "Aprendizaje rápido y proactividad para resolver problemas.",
            author: "Silvia L., QA"
        }
    ]
};

// Exportar para uso modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROFILE_DATA;
}
