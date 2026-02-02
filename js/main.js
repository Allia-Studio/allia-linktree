// ========================================
// Theme Toggle Functionality
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Función para obtener el tema inicial
function getInitialTheme() {
    // Primero verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    
    // Si no hay tema guardado, usar la preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
    }
    
    // Por defecto, usar tema oscuro
    return 'dark';
}

// Función para aplicar el tema
function applyTheme(theme) {
    if (theme === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
    } else {
        htmlElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
}

// Aplicar el tema inicial
const currentTheme = getInitialTheme();
applyTheme(currentTheme);

// Toggle theme al hacer click
themeToggle.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    
    // Track theme change in analytics if available
    trackEvent('theme_toggle', {
        theme: newTheme
    });
});

// Detectar cambios en la preferencia del sistema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        // Solo aplicar si el usuario no ha establecido una preferencia manual
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'light' : 'dark');
        }
    });
}

// ========================================
// Analytics Tracking
// ========================================

/**
 * Función para rastrear eventos en Google Analytics
 * Si GA no está configurado, esta función no hace nada
 */
function trackEvent(eventName, eventParams = {}) {
    // Verificar si gtag está disponible
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
    } else {
        // Opcional: Log para debugging durante desarrollo
        console.log('Analytics event:', eventName, eventParams);
    }
}

// Track clicks en los botones de redes sociales
const linkButtons = document.querySelectorAll('.link-button');

linkButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const network = button.getAttribute('data-network');
        const url = button.getAttribute('href');
        
        trackEvent('social_link_click', {
            network: network,
            url: url,
            event_category: 'engagement',
            event_label: network
        });
    });
});

// ========================================
// Intersection Observer para animaciones
// ========================================

// Detectar cuando los elementos entran en viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos con animación (opcional, ya tienen animación CSS)
// Este código es útil si quieres animaciones más complejas
document.querySelectorAll('.link-button').forEach(link => {
    // observer.observe(link);
});

// ========================================
// Smooth Scroll Enhancement
// ========================================

// Ya está habilitado en CSS, pero podemos agregar comportamiento adicional si es necesario
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Page Load Analytics
// ========================================

// Track page view
window.addEventListener('load', () => {
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
});

// ========================================
// Keyboard Navigation Enhancement
// ========================================

// Mejorar la navegación con teclado
document.addEventListener('keydown', (e) => {
    // Alt + T para toggle theme
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
});

// ========================================
// Performance: Preload images on hover
// ========================================

// Opcional: Precargar imágenes de perfil si son externas
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('error', () => {
        // Si falla la carga de la imagen, usar placeholder
        profileImage.src = 'assets/profile-placeholder.svg';
    });
}

// ========================================
// Copy to Clipboard (opcional)
// ========================================

/**
 * Función para copiar URLs al portapapeles
 * Puedes agregar un botón de "share" más adelante
 */
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copiado al portapapeles:', text);
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    }
}

// ========================================
// Service Worker (opcional para PWA)
// ========================================

/**
 * Descomenta este código si quieres convertir el sitio en una PWA
 */
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registrado:', registration);
        }).catch(error => {
            console.log('Error al registrar Service Worker:', error);
        });
    });
}
*/

// ========================================
// Debug Mode (solo en desarrollo)
// ========================================

// Detectar si estamos en localhost
const isLocalhost = window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname === '';

if (isLocalhost) {
    console.log('🔧 Modo desarrollo activado');
    console.log('Tema actual:', currentTheme);
    console.log('Total de links:', linkButtons.length);
}

// ========================================
// Easter Egg (opcional - comentado)
// ========================================

/*
// Konami Code easter egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Activar algo especial
            document.body.style.animation = 'rainbow 2s infinite';
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
*/

// ========================================
// Exportar funciones para uso global
// ========================================

window.linktreeApp = {
    trackEvent,
    copyToClipboard,
    applyTheme
};
