# Plan: Cambio Dinámico de Imagen de Perfil según Tema

## Objetivo
Implementar la funcionalidad para que la imagen de perfil cambie automáticamente entre `assets/favicon-white.png` (modo oscuro) y `assets/favicon-dark.png` (modo claro) cuando el usuario alterna el tema.

## Contexto
- **Archivo actual:** `index.html` línea 65 usa `assets/favicon-white.png`
- **Problema:** Al cambiar a modo claro, la imagen blanca se pierde en el fondo claro
- **Solución:** Modificar `js/main.js` para cambiar dinámicamente el `src` de la imagen según el tema activo

## Tareas

### Tarea 1: Modificar función applyTheme para cambiar imagen de perfil
- [x] **Descripción:** Actualizar la función `applyTheme()` en `js/main.js` (líneas 26-33) para incluir lógica que cambie el atributo `src` de la imagen de perfil
- **Archivo:** `js/main.js`
- **Líneas afectadas:** 26-33
- **Cambios específicos:**
  - Obtener referencia al elemento `.profile-image`
  - En modo `light`: establecer `src` a `assets/favicon-dark.png`
  - En modo `dark`: establecer `src` a `assets/favicon-white.png`
  - Verificar que el elemento exista antes de modificarlo
- **Resultado esperado:** 
  - ✅ La función `applyTheme('light')` cambia la imagen a `favicon-dark.png`
  - ✅ La función `applyTheme('dark')` cambia la imagen a `favicon-white.png`
  - ✅ No hay errores si el elemento no existe
- **Verificación manual:**
  ```bash
  # Abrir en navegador y verificar:
  # 1. Imagen inicial en modo oscuro = favicon-white.png
  # 2. Click en toggle → modo claro → imagen cambia a favicon-dark.png
  # 3. Click en toggle → modo oscuro → imagen vuelve a favicon-white.png
  ```
- **Paralelizable:** No (tarea única)
- **Dependencias:** Ninguna
- **Conflictos de archivos:** Ninguno

### Tarea 2: Verificar comportamiento con Playwright
- [x] **Descripción:** Crear y ejecutar test automatizado que verifique el cambio de imagen al alternar el tema
- **Herramientas requeridas:** playwright skill
- **Casos de prueba:**
  1. **Test inicial:** Cargar página y verificar que imagen es `favicon-white.png` (tema oscuro por defecto)
  2. **Test toggle a claro:** Click en botón theme-toggle y verificar que imagen cambia a `favicon-dark.png`
  3. **Test toggle a oscuro:** Click nuevamente y verificar que imagen vuelve a `favicon-white.png`
  4. **Test persistencia:** Recargar página en modo claro y verificar que mantiene `favicon-dark.png`
- **Resultado esperado:**
  - ✅ Todos los tests pasan
  - ✅ No hay errores de JavaScript en consola
  - ✅ La imagen cambia correctamente en cada toggle
  - ✅ El tema y la imagen persisten tras recarga
- **Verificación:**
  ```bash
  # El test debe validar:
  # - Selector: .profile-image
  # - Atributo: src
  # - Valores esperados según data-theme del html
  ```
- **Paralelizable:** No (depende de Tarea 1)
- **Dependencias:** Tarea 1 debe estar completa
- **Conflictos de archivos:** Ninguno

## Criterios de Éxito
1. ✅ La imagen de perfil cambia dinámicamente al alternar el tema
2. ✅ Modo oscuro muestra `favicon-white.png` (visible en fondo oscuro)
3. ✅ Modo claro muestra `favicon-dark.png` (visible en fondo claro)
4. ✅ La funcionalidad funciona al cargar la página (tema inicial)
5. ✅ La funcionalidad funciona al hacer toggle manual
6. ✅ No hay errores en consola del navegador
7. ✅ Tests automatizados validan el comportamiento

## Notas Técnicas
- **Selector CSS:** `.profile-image` (ya existe en HTML línea 65)
- **Función a modificar:** `applyTheme(theme)` en `js/main.js` líneas 26-33
- **Evento de cambio:** La función se llama desde:
  - Línea 37: Aplicación de tema inicial
  - Línea 42: Toggle manual del tema
  - Línea 55: Cambio en preferencia del sistema (opcional)
- **Ambos archivos de imagen ya existen:**
  - `assets/favicon-white.png` ✓
  - `assets/favicon-dark.png` ✓

## Posibles Edge Cases
1. ¿Qué pasa si una de las imágenes no existe? → El navegador mostrará broken image, pero no debe romper la funcionalidad
2. ¿Qué pasa si se llama `applyTheme()` antes de que el DOM esté listo? → Ya está protegido por la verificación `if (profileImage)`
3. ¿El cambio debe ser instantáneo o con transición? → Instantáneo (cambio de src), pero se puede añadir fade CSS si se desea

## Orden de Ejecución
1. Ejecutar Tarea 1 (modificación de código)
2. Ejecutar Tarea 2 (verificación con tests)
3. Validación manual en navegador (opcional pero recomendado)

## Estimación de Esfuerzo
- **Tarea 1:** 5 minutos (modificación simple de función)
- **Tarea 2:** 10 minutos (creación y ejecución de tests)
- **Total:** ~15 minutos

---

**Plan generado:** 2026-02-03
**Listo para ejecutar con:** `/start-work`
