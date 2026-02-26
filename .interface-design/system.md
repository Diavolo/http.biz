# http.biz — System (Interface Design)

## Direction & intent

- **Product:** Referencia HTTP (códigos de estado, métodos, headers). Herramienta de consulta para desarrolladores.
- **Feel:** Synthwave / cyberpunk / vaporwave / retro tech. Frío, preciso, terminal. **Vaporwave:** gradiente horizonte tipo atardecer (cyan → naranja → rosa), paleta que evoca 80s/90s; presente en hero y en degradado inferior de body. **Hacker:** mono predominante, precisión técnica, datos y códigos como protagonistas; sin decoración blanda. **Neon:** acentos en colores neón (cyan, pink, purple, green, orange); glow contenido en marca, hero y refuerzo sutil en datos/códigos. No marketing: interfaz de herramienta.
- **Signature:** Cuadrícula cyan sutil + línea de horizonte (gradiente cyan → naranja → rosa) en hero; tipografía Orbitron + Share Tech Mono; acento principal cyan, secundario pink.

## Depth strategy

- **Borders-only + surface elevation.** Modo oscuro: sin sombras llamativas; jerarquía por bordes (baja opacidad) y por superficies ligeramente más claras que el canvas.
- **Border progression:** `--border-subtle` (separación suave), `--border-default` (estándar), `--border-strong` (énfasis), `--border-focus` (focus ring).

## Spacing

- **Base unit:** 8px.
- **Scale:** `--space-1` (4px) a `--space-8` (48px). Usar siempre múltiplos; padding simétrico.

## Token architecture

- **Surfaces:** `--surface-0` (canvas), `--surface-1` (nav/footer), `--surface-2` (cards/secciones), `--surface-3`, `--surface-inset` (bloques de código, inputs).
- **Foreground:** `--fg-primary`, `--fg-secondary`, `--fg-tertiary`, `--fg-muted` (4 niveles de texto).
- **Borders:** ver Depth strategy.
- **Brand:** `--accent` (cyan), `--accent-hover` (pink). Semánticos por clase de código: 1xx `--neon-cyan`, 2xx `--semantic-success` (verde neon), 3xx `--sun-orange`, 4xx `--neon-pink`, 5xx `--neon-purple`.
- **Glow:** uso restringido a marca (brand) y títulos hero; refuerzo muy sutil (whisper) en etiquetas de código/dato para reforzar feel neon sin abusar.

## Typography

- **Headings:** Orbitron, weight 600, letter-spacing 0.05–0.12em.
- **Body / UI:** Share Tech Mono. Códigos y datos: mismo mono, tabular cuando haga falta.
- **Scale (tokens):** Usar variables en todo el sitio; no valores sueltos. Escala afinada para legibilidad (body 1rem).
  - `--text-display`: hero principal (clamp 2rem–4rem).
  - `--text-title`: títulos de página/sección (clamp 1.75rem–2.5rem).
  - `--text-brand`: marca en nav (1.25rem).
  - `--text-lead`: intro de sección, destacado (1.125rem).
  - `--text-body`: párrafos y contenido principal (1rem).
  - `--text-caption`: títulos de sección en mayúsculas (0.9375rem).
  - `--text-small`: nav, botones, UI secundaria (0.875rem).
  - `--text-label`: etiquetas, metadata (0.8125rem).

## Components

- **Nav:** Mismo fondo que canvas (`--surface-1`), borde inferior `--border-default`. Links: `--fg-secondary`, hover `--accent`.
- **Cards / sections:** `--surface-2`, borde `--border-default`. Bloques de código: `--surface-inset` + cabecera con `--surface-inset`, borde `--border-subtle`.
- **Buttons / links:** Estado focus con `outline: 1px solid var(--border-focus); outline-offset: 2px`. Transiciones 0.15s ease.

## Consistency checks

- Espaciado siempre con variables `--space-*`.
- Bordes: no hex opaco; usar `--border-*` (rgba baja opacidad).
- Texto: no grises aleatorios; usar `--fg-primary | secondary | tertiary | muted`.
- Tamaños de fuente: usar tokens `--text-*`; no valores rem/px sueltos (salvo tamaños relativos tipo 0.38em).
- No mezclar estrategias de profundidad (solo bordes + elevación por superficie).
