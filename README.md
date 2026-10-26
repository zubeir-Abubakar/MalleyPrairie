# MalleyPrairie Childcare Centre

A responsive, multilingual React website prototype inspired by the MalleyPrairie childcare centre. It presents centre information, childcare settings, practical resources and contact details in French, English, German and Italian.

> **Independent prototype:** This project is not an official website and is not operated by CVE MalleyPrairie. Information and links are provided for demonstration purposes. Contact-form messages are routed to the prototype creator, not to the centre.

## Features

- Responsive layout with compact mobile navigation and homepage and section-specific hero imagery, checked at 320–430 px.
- Navigation for centre information, childcare settings, practical information, documents, FAQs, jobs and contact.
- Four language options: French, English, German and Italian. The selected language is saved in browser storage and retained after reload.
- Local image assets for the logo, childcare settings and page banners.
- Contact form connected to Formspree, with validation, sending/error feedback and a confirmation state after successful submission.
- Links to relevant centre and public-service resources.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal (typically `http://localhost:5173`).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the project and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run typecheck` | Run the TypeScript project checks. |

## Contact form configuration

By default, the contact form submits to the Formspree endpoint configured in `src/site.ts`. To use another endpoint, create a `.env.local` file in the project root:

```dotenv
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Restart the Vite server after changing environment variables. The form is part of an independent prototype; submissions are not delivered to CVE MalleyPrairie unless the configured Formspree account routes them there.

## Project structure

```text
src/
  App.tsx          Application shell, routes, shared layout and pages
  i18n.ts          Language initialization and saved language preference
  images.ts        Page and childcare-setting image mappings
  locales/         French, English, German and Italian page content
  site.ts          Formspree endpoint and external resource links
  styles.css       Global styles, components and responsive layouts
  ui.ts            Shared translated interface labels and messages
public/
  images/          Logo and user-provided childcare centre photographs
```

## Build

Create and validate a production bundle with:

```bash
npm run build
```

The generated static files are written to `dist/`.
