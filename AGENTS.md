<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Proyecto: negocio

## Stack técnico
- Next.js (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui para componentes
- TanStack Query (react-query) para manejo de estado de datos remotos

## Convenciones de backend / datos
- **No usar Server Actions** para lógica de backend (mutaciones, lógica de negocio) → usar **API Routes** (`app/api/.../route.ts`).
- Para **consultas de lectura** en páginas, priorizar lógica de servidor (`"use server"` / Server Components) en vez de hacer fetch desde el cliente.
- **Nunca usar el tipo `any`** en TypeScript. Tipar explícitamente o usar `unknown` + narrowing cuando el tipo no se conoce de antemano.

## Convenciones de componentes
- **Index file pattern**: cada componente vive en su propia carpeta, con `index.tsx` como archivo de entrada.
  Ejemplo: `components/Sidebar/index.tsx` (no `components/Sidebar.tsx`).
- Generar **archivos barril** (`index.ts`) en carpetas de módulos/features para agrupar exports y reducir imports largos.
- Usar **shadcn/ui** como base de componentes de UI (no reinventar primitivos ya cubiertos por shadcn).

## Estado
- Usar **TanStack Query (react-query)** para manejo de estado de datos del servidor (fetching, cache, mutaciones desde el cliente hacia API routes).
