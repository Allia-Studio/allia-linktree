# 🔗 Linktree Personal

Un linktree minimalista y moderno para centralizar todos tus enlaces de redes sociales en un solo lugar. Diseñado con HTML, CSS y JavaScript vanilla, optimizado para GitHub Pages.

![Preview](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Características

- 🎨 **Diseño Minimalista Moderno** - Inspirado en allia.dev con paleta de colores personalizada
- 🌓 **Modo Claro/Oscuro** - Toggle automático con persistencia en localStorage
- 📱 **Totalmente Responsive** - Optimizado para móviles, tablets y desktop
- ⚡ **Performance Optimizado** - Carga rápida, sin dependencias externas
- 🎯 **Google Analytics Ready** - Sistema de tracking preparado
- ♿ **Accesible** - Siguiendo mejores prácticas de accesibilidad web
- 🎭 **Animaciones Suaves** - Efectos visuales elegantes y no invasivos
- 📊 **SEO Optimizado** - Meta tags completos y Open Graph

## 🎨 Paleta de Colores

- **Primary (Oscuro):** `#272822`
- **Accent (Naranja):** `#f18661`
- **Hover:** `#ff9a75`

## 🚀 Inicio Rápido

### 1️⃣ Personalizar tu Información

Abre `index.html` y actualiza los siguientes campos:

```html
<!-- Actualizar el título y meta tags (líneas 8-19) -->
<title>Tu Nombre - Links</title>
<meta property="og:title" content="Tu Nombre - Links">
<meta name="author" content="Tu Nombre">

<!-- Actualizar la sección de perfil (líneas 60-67) -->
<h1 class="profile-name">Tu Nombre</h1>
<p class="profile-bio">
    Tu descripción personalizada aquí...
</p>

<!-- Actualizar el footer (línea 195) -->
<p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
```

### 2️⃣ Configurar Enlaces de Redes Sociales

Actualiza los `href` de cada botón con tus URLs personales:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/TU-USUARIO">

<!-- Instagram -->
<a href="https://instagram.com/TU-USUARIO">

<!-- TikTok -->
<a href="https://tiktok.com/@TU-USUARIO">

<!-- Twitter/X -->
<a href="https://twitter.com/TU-USUARIO">

<!-- YouTube -->
<a href="https://youtube.com/@TU-CANAL">

<!-- GitHub -->
<a href="https://github.com/TU-USUARIO">

<!-- Facebook -->
<a href="https://facebook.com/TU-USUARIO">

<!-- WhatsApp (reemplaza con tu número internacional) -->
<a href="https://wa.me/1234567890">
```

### 3️⃣ Cambiar Foto de Perfil

Reemplaza `assets/profile-placeholder.svg` con tu propia imagen:

1. Añade tu foto en la carpeta `assets/` (formatos recomendados: `.jpg`, `.png`, `.webp`)
2. Actualiza la referencia en `index.html` (línea 61):

```html
<img src="assets/tu-foto.jpg" alt="Tu Nombre" class="profile-image">
```

**Recomendaciones:**
- Tamaño: 400x400px mínimo
- Formato cuadrado
- Peso: <500KB para mejor rendimiento

## 📊 Configurar Google Analytics

### Paso 1: Obtener tu ID de Medición

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva propiedad o usa una existente
3. Copia tu ID de medición (formato: `G-XXXXXXXXXX`)

### Paso 2: Activar Analytics en tu Sitio

Abre `index.html` y descomenta las líneas 23-30:

```html
<!-- Elimina los comentarios de estas líneas -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); <!-- Reemplaza con tu ID -->
</script>
```

### Eventos Trackeados Automáticamente:

- ✅ Page views
- ✅ Clicks en cada botón de red social
- ✅ Cambios de tema (claro/oscuro)

## 🌐 Deploy en GitHub Pages

### Opción 1: Deploy Directo desde GitHub

1. **Crear Repositorio:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Linktree setup"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` → Folder: `/root`
   - Click "Save"

3. **Esperar Deploy:**
   - El sitio estará disponible en: `https://TU-USUARIO.github.io/TU-REPO/`
   - El proceso tarda 1-3 minutos

### Opción 2: Custom Domain (Namecheap)

Si ya tienes un dominio en Namecheap y quieres usarlo:

#### En GitHub:

1. Ve a Settings → Pages
2. En "Custom domain" ingresa: `tudominio.com` (o `links.tudominio.com`)
3. Click "Save"
4. Crea un archivo `CNAME` en la raíz del proyecto:
   ```bash
   echo "tudominio.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

#### En Namecheap:

1. Inicia sesión en Namecheap
2. Domain List → Manage → Advanced DNS
3. Agrega estos registros:

**Para dominio raíz (`tudominio.com`):**
```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic
```

**Para subdominio (`links.tudominio.com`):**
```
Type: CNAME Record
Host: links
Value: TU-USUARIO.github.io.
TTL: Automatic
```

5. Espera 10-30 minutos para propagación DNS
6. Verifica tu dominio en GitHub Pages (Settings → Pages)

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita `css/styles.css` (líneas 5-20):

```css
:root {
    --bg-primary: #272822;      /* Color de fondo oscuro */
    --bg-secondary: #3a3a3a;    /* Color de botones */
    --accent: #f18661;          /* Color de acento */
    --accent-hover: #ff9a75;    /* Color hover */
}

[data-theme="light"] {
    --bg-primary: #ffffff;      /* Fondo claro */
    --accent: #f18661;          /* Mantener acento */
}
```

### Añadir/Quitar Redes Sociales

Para agregar una nueva red social:

1. Encuentra el icono SVG en [Simple Icons](https://simpleicons.org/)
2. Copia el código del botón en `index.html`
3. Actualiza los valores:
   - `href`: URL de tu perfil
   - `data-network`: nombre de la red
   - `aria-label`: descripción accesible

```html
<a href="https://nueva-red.com/tu-usuario" 
   class="link-button" 
   data-network="nueva-red"
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Visita mi perfil de Nueva Red">
    <svg class="link-icon"><!-- SVG del icono --></svg>
    <span>Nueva Red</span>
</a>
```

### Modificar Animaciones

Edita `css/styles.css`:

```css
/* Cambiar duración de animaciones */
.link-button {
    transition: all 0.3s ease; /* Cambiar a 0.5s para más lento */
}

/* Modificar escala del hover */
.link-button:hover {
    transform: translateY(-4px) scale(1.02); /* Aumentar scale a 1.05 */
}
```

### Cambiar Tipografía

Opción 1 - Usar Google Fonts:

```html
<!-- Agregar en <head> de index.html -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet">
```

```css
/* Actualizar en css/styles.css */
body {
    font-family: 'Poppins', sans-serif;
}
```

## 📁 Estructura del Proyecto

```
allia-linktree/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos con sistema de temas
├── js/
│   └── main.js            # Lógica de toggle y analytics
├── assets/
│   ├── favicon.svg        # Icono del sitio
│   └── profile-placeholder.svg  # Avatar placeholder
├── .gitignore             # Archivos ignorados por Git
├── CNAME                  # (Opcional) Para custom domain
└── README.md              # Esta documentación
```

## 🔧 Funcionalidades Técnicas

### Sistema de Temas

El sistema de temas utiliza:
- CSS Variables para cambio dinámico de colores
- localStorage para persistencia
- Detección automática de preferencia del sistema
- Smooth transitions

### Analytics Tracking

Eventos trackeados automáticamente:
```javascript
// Page view
gtag('event', 'page_view');

// Click en red social
gtag('event', 'social_link_click', {
    network: 'linkedin',
    event_category: 'engagement'
});

// Cambio de tema
gtag('event', 'theme_toggle', {
    theme: 'light'
});
```

### Atajos de Teclado

- `Alt + T`: Toggle tema claro/oscuro

## 🐛 Solución de Problemas

### El sitio no se muestra en GitHub Pages

1. Verifica que el repositorio sea público
2. Confirma que GitHub Pages esté activado en Settings
3. Revisa que la rama sea `main` y la carpeta `/root`
4. Espera 1-3 minutos después del push

### Las imágenes no cargan

1. Verifica que las rutas sean relativas: `assets/imagen.jpg`
2. Confirma que los archivos existan en la carpeta `assets/`
3. Revisa la consola del navegador (F12) para errores

### Analytics no funciona

1. Verifica que hayas descomentado el código de GA
2. Confirma que tu ID de medición sea correcto
3. Espera 24-48 horas para ver datos en Google Analytics
4. Usa Google Tag Assistant para debugging

### El tema no se guarda

1. Verifica que localStorage esté habilitado en tu navegador
2. Revisa la consola (F12) para errores de JavaScript
3. Prueba en modo incógnito para descartar extensiones

## 🚀 Mejoras Futuras (Opcional)

Ideas para expandir tu linktree:

- [ ] Modo PWA (Progressive Web App)
- [ ] Botón de compartir en redes sociales
- [ ] Contador de clicks en cada botón
- [ ] Integración con shorteners (bit.ly, etc.)
- [ ] QR Code generator
- [ ] Múltiples idiomas
- [ ] Modo de alto contraste
- [ ] Animaciones con GSAP o Framer Motion

## 📝 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo para tus necesidades.

## 🤝 Contribuciones

¿Encontraste un bug o tienes una sugerencia? 
- Abre un Issue en GitHub
- Envía un Pull Request
- Comparte tu feedback

## 📧 Contacto

Creado por **Tu Nombre** - [TuEmail@ejemplo.com](mailto:TuEmail@ejemplo.com)

---

⭐ **¿Te gustó este proyecto?** Dale una estrella en GitHub y compártelo con tus amigos!

**Hecho con ❤️ y ☕**
