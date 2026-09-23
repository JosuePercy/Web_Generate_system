---
version: 1
slug: "home"
primary_target: "home"
related_targets: []
---

## Scope

Home page hero + full landing flow (Persuade mode). Primary CTA everywhere: Agendar proyecto (`/agendar-proyecto`). Audiencia: dueños/responsables de pymes en LatAm que gestionan ventas/leads a mano (WhatsApp, Excel, papel) y quieren automatizarlo con IA. No inventar testimonios, logos ni cifras — el usuario tiene evidencia real pero aún no la compartió.

## Direction contract (revisado — reemplaza el rolled "letrero de mercado")

El usuario canceló la dirección asignada por el sorteo (letrero de mercado pintado a mano) y fijó como referencia directa la estructura y estética de `codinglatam.dev`. Un brief/referencia pinneada por el usuario gana siempre sobre el sorteo.

**THESIS:** El sitio se presenta como una herramienta/dev-tool seria de automatización con IA, no como una agencia de diseño genérica ni un letrero artesanal: fondo casi negro, tarjeta de terminal mostrando el agente trabajando en vivo, un solo acento ámbar.

**OWN-WORLD:** Fondo `--brand-bg` (#0a0e14) con textura de grilla sutil (`.bg-grid-fade`, enmascarada con vignette). Superficie de tarjetas `--brand-surface` (#10161f) con borde `--brand-border` (#232b38). Acento único `--brand-accent` ámbar (#f2a93c) para énfasis de texto y CTA primario; CTA secundario en outline. Texto principal `--brand-ink` casi blanco, texto secundario `--brand-muted` gris azulado (nunca gris neutro puro). Tipografía: Public Sans bold para headline/body, JetBrains Mono para el eyebrow `//` y la tarjeta de terminal (uso legítimo de mono: es código/CLI real, no costume).

**STORY:** El visitante ve de inmediato una prueba concreta del mecanismo (un agente de IA ejecutando una tarea de ventas/reportes en una terminal), entiende que esto es automatización real y no una promesa vaga, y agenda un proyecto.

**FIRST VIEWPORT:** Dos columnas en desktop (una en mobile): izquierda = eyebrow mono + headline con frase clave en ámbar + subtítulo + CTA primario (ámbar, ícono calendario) + CTA secundario (outline) + micro-copy de baja fricción. Derecha = tarjeta de terminal con barra de tres puntos de color, título `claude — automatización de ventas`, prompt `$ claude`, comando entre comillas, línea de resultado en verde con `✓`. Contenido de la demo es ilustrativo del mecanismo (no una cifra o cliente real), consistente con Evidence on Hand de PRODUCT.md.

**FORM:** Dirección pinneada por el usuario sobre una referencia externa real (`codinglatam.dev`), no derivada del catálogo de impeccable. Pendiente: recolorear el Header (actualmente sigue el tema neutro de shadcn, no el nuevo mundo oscuro) — próxima parte a construir. Falta también número de WhatsApp real del negocio para añadir el micro-link de contacto alterno que usa la referencia.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
