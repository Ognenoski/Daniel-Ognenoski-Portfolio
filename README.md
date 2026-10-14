# Daniel Ognenoski — Midnight Portfolio

A responsive bilingual English/German portfolio built with React and Vite. Includes the original CV, extracted portrait, source files, and a production build.

## Run locally
Requires Node.js 20.19+ or 22.12+ (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build and preview:

```sh
npm run build
npm run preview
```

To regenerate the GitHub Pages deployment folder from source:

```sh
npm run build -- --outDir docs
```

## Deploy
Upload the contents of `dist/` to any static web host. Vite uses a relative base for subdirectory hosting. Serve over HTTP; opening `dist/index.html` directly via file:// is unsupported.

## Edit content
English and German text are in `src/main.jsx`, in the `copy` object. Design and breakpoints are in `src/style.css`. Replace `public/daniel.jpg` to update the photo. Replace `public/Daniel-Ognenoski-CV.pdf` to update the CV. Run `npm run build` after changes.

## Content integrity
Education, training, employment, technologies, languages, location, and email come from the supplied CV. Semos training is listed as in progress for March 2026–March 2027. React describes the implementation of this website; it is not presented as a verified CV skill. The three project cards illustrate training areas mentioned in the CV. They are not claims of completed, deployed projects and have no invented repository URLs. To add verified projects, update both language entries and add real links to the project card markup. GitHub and LinkedIn profile links were supplied by the owner.

The original CV contains personal contact information and is included with the requested download. Review it before publishing publicly. The portrait is the higher-resolution original photograph supplied by the owner, replacing the low-resolution CV extraction.

## Features
- Persistent EN/DE switch and translated content/navigation
- Mobile navigation with accessible expanded state
- Responsive sections, keyboard focus indicators, skip link
- Scroll reveals, blue accents and subtle violet glows, hover effects
- Reduced-motion support
- Functional email, GitHub, LinkedIn, and CV download links
- No contact backend or analytics

Google Fonts is optional: system fonts provide a fallback if offline. No API keys are needed. Dependencies are pinned through package-lock.json. node_modules is intentionally excluded from the ZIP.

## Included folders
`src/`: editable React source. `public/`: original assets. `dist/`: prebuilt site. `docs/`: generated GitHub Pages build. Always edit source and rebuild; do not edit the generated assets.

## Stylesheet maintenance

The numbered comments identify foundations, navigation, hero, sections, project cards, journey, contact, and accessibility. Responsive overrides retain their cascade order; repeated selectors in different breakpoints are intentional. Color tokens are defined once in `:root`. Use `CHANGES.md` for the refactor and validation report.
