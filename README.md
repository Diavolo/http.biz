## http.biz

Referencia HTTP en español para desarrolladores. Actualmente cubre **~70 códigos de estado** (1xx–5xx), incluyendo códigos no estándar como 444 y 499 (Nginx) o 599.

Sitio estático generado con Astro 5. Dominio: [http.biz](https://http.biz).

---

### Contenido

Los códigos se definen como Markdown en `src/content/codes/` con el siguiente frontmatter (schema en `src/content.config.ts`):

```yaml
set: 4            # Clase (1–5)
code: 404
title: Not Found
references:       # Opcional: constantes/símbolos por lenguaje/framework
  Go HTTP Status Constant: http.StatusNotFound
  Rails HTTP Status Symbol: ":not_found"
```

Cada archivo genera una ruta estática `/{code}/` (ej. `/404/`). El campo `references` se muestra como sección aparte en la página de detalle.

---

### Secciones previstas

La landing anuncia dos secciones futuras: **métodos HTTP** y **cabeceras**. Todavía no tienen contenido ni rutas.

---

### Detalles de configuración

- **Sitemap** generado automáticamente (`@astrojs/sitemap`).
- **Redirect** de `/status-codes/` → `/status/` (ruta legacy).
- **SEO**: Open Graph, Twitter Cards, Schema.org `WebPage`, canonical URLs.
- **88x31 badges** en `public/` — guiño retro que se usa en el footer.

---

### Contribuir

- Mejorar descripciones existentes o añadir matices sobre el uso de cada código.
- Agregar referencias a constantes/símbolos de distintos lenguajes en el campo `references`.
- Proponer nuevas secciones (métodos, cabeceras) vía issue o PR.
