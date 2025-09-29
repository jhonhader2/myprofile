# Portafolio Personal - Estructura SRA

Este proyecto ha sido reorganizado siguiendo principios de **Aplicación de Responsabilidad Única (SRA)**, **POO**, **SOLID**, **DRY** y **KISS**.

## 📁 Estructura de Carpetas

```
myprofile/
├── assets/
│   ├── css/
│   │   ├── main.css              # Archivo principal CSS
│   │   ├── variables.css         # Variables CSS centralizadas
│   │   ├── base.css             # Estilos base y reset
│   │   ├── header.css           # Estilos del encabezado
│   │   ├── about.css            # Estilos de la sección Acerca de
│   │   ├── skills.css           # Estilos de la sección Habilidades
│   │   ├── projects.css         # Estilos de la sección Proyectos
│   │   ├── recommendations.css  # Estilos de la sección Recomendaciones
│   │   ├── modal.css            # Estilos del modal
│   │   ├── fab.css              # Estilos del botón flotante
│   │   └── responsive.css       # Consultas de medios responsivas
│   └── js/
│       ├── app.js               # Aplicación principal
│       └── classes/
│           ├── Modal.js         # Clase para manejo de modales
│           ├── ProfileImageManager.js  # Clase para imagen de perfil
│           └── RecommendationManager.js # Clase para recomendaciones
├── components/                  # Componentes HTML reutilizables
│   ├── header.html
│   ├── about-section.html
│   ├── skills-section.html
│   ├── projects-section.html
│   ├── recommendations-section.html
│   ├── fab.html
│   └── modal.html
├── config/
│   └── app-config.js           # Configuración de la aplicación
├── data/
│   └── profile.js              # Datos del perfil
└── index.html                  # Archivo principal
```

## 🎯 Principios Aplicados

### **SRA (Aplicación de Responsabilidad Única)**
- Cada archivo tiene una responsabilidad específica
- Separación clara entre CSS, JS, HTML y configuración
- Modularidad total del código

### **POO (Programación Orientada a Objetos)**
- Clases encapsuladas: `Modal`, `ProfileImageManager`, `RecommendationManager`
- Herencia y polimorfismo aplicables
- Encapsulación de funcionalidades

### **SOLID**
- **S** - Responsabilidad Única: Cada clase tiene una sola responsabilidad
- **O** - Abierto/Cerrado: Extensible sin modificar código existente
- **L** - Sustitución de Liskov: Clases intercambiables
- **I** - Segregación de Interfaces: Interfaces específicas
- **D** - Inversión de Dependencias: Dependencias inyectadas

### **DRY (No Te Repitas)**
- Variables CSS centralizadas
- Funciones reutilizables
- Componentes modulares

### **KISS (Manténlo Simple)**
- Código simple y legible
- Lógica clara y directa
- Sin complejidad innecesaria

## 🚀 Uso

1. Abrir `index.html` en el navegador
2. El archivo principal importa automáticamente todos los módulos CSS y JS
3. Cada componente es independiente y reutilizable

## 🔧 Personalización

- **Datos del perfil**: Editar `data/profile.js`
- **Configuración**: Modificar `config/app-config.js`
- **Estilos**: Ajustar archivos CSS específicos en `assets/css/`
- **Funcionalidad**: Extender clases en `assets/js/classes/`

## 📱 Características

- ✅ Diseño Responsivo
- ✅ Accesibilidad (ARIA)
- ✅ Modo Oscuro
- ✅ Componentes Modulares
- ✅ JavaScript POO
- ✅ CSS Modular
- ✅ Configuración Centralizada
- ✅ Interfaz en Español

## 🌟 Funcionalidades Principales

### **Navegación**
- Menú de navegación responsivo con enlaces suaves
- Botón flotante para volver al inicio
- Icono de casa en la marca personal

### **Sección Acerca de**
- Imagen de perfil con fallback a iniciales
- Información personal y profesional
- Diseño responsive adaptativo

### **Habilidades**
- Grid de habilidades con iconos tipográficos
- Diseño responsive con breakpoints optimizados
- Preparado para iconos reales

### **Proyectos**
- Tres proyectos destacados
- Sistema de etiquetas por tecnología
- Tarjetas con información detallada

### **Recomendaciones**
- Lista de recomendaciones existentes
- Formulario para agregar nuevas recomendaciones
- Modal de confirmación con feedback visual
- Validación de entrada y sanitización XSS

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares y responsivos
- **JavaScript ES6+** - Programación orientada a objetos
- **Git** - Control de versiones

## 📝 Notas de Desarrollo

- El proyecto está completamente en español
- Sigue estándares de accesibilidad web
- Código limpio y bien documentado
- Fácil de mantener y extender
- Preparado para producción