# Coroa Zen Retreat

Landing web para **Coroa Silence Apartments Valencia**, enfocada en apartamentos mid-stay para vivir, trabajar y descansar en Valencia.

## Demo

- Sitio publicado: [https://whiteks1.github.io/coroa-zen-retreat/](https://whiteks1.github.io/coroa-zen-retreat/)

## Caracteristicas

- Hero visual con imagen de Valencia.
- Secciones de apartamentos, experiencias, gestion inteligente, estancias medias y contacto.
- Tarjetas de apartamentos con imagen, descripcion y amenities.
- Formulario de contacto de muestra con toast de confirmacion.
- Bloque flotante de contacto con bot demo, telefono y boton de WhatsApp.
- Despliegue automatico en GitHub Pages mediante GitHub Actions.

## Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- React Router DOM
- shadcn/ui
- Lucide React

## Requisitos

- Node.js 20+
- npm 9+

## Instalacion

```bash
npm install
npm run dev
```

La app local queda disponible en:

```text
http://localhost:8080
```

## Scripts

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera el build de produccion en `dist/`.
- `npm run preview`: previsualiza el build localmente.
- `npm run lint`: ejecuta ESLint.

## Despliegue

El proyecto esta preparado para GitHub Pages.

- Workflow: `.github/workflows/deploy-pages.yml`
- Rama de despliegue: `main`
- Carpeta publicada: `dist/`
- Base de Vite: `/coroa-zen-retreat/`

Cada `push` a `main` ejecuta el build y publica la web automaticamente.

## Estructura

```text
.
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ hooks/
│  ├─ lib/
│  ├─ pages/
│  ├─ App.tsx
│  └─ main.tsx
├─ .github/workflows/
├─ index.html
├─ package.json
└─ vite.config.ts
```

## Personalizacion

- Contenido principal de la pagina: `src/pages/Index.tsx`
- Hero: `src/components/Hero.tsx`
- Apartamentos: `src/components/Apartments.tsx`
- Tarjetas de apartamentos: `src/components/ApartmentCard.tsx`
- Formulario de contacto: `src/components/Contact.tsx`
- Bot demo, telefono y WhatsApp: `src/components/WhatsAppButton.tsx`
- Estilos globales y tokens visuales: `src/index.css`
