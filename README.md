# Rohit Rana — Portfolio

Single-page developer portfolio built with React + Vite + Tailwind CSS. Dark (default)
with a mint-green accent, big bold hero headline, sidebar navigation with numbered
sections, and a "code editor" personality (terminal-typed intro, skills rendered as a
real JS object, project cards). Light/dark toggle included, defaults to dark.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Customize

Almost everything lives in **`src/data/portfolioData.js`** — name, bio, achievements,
certifications, experience, skills, and projects (including each project's GitHub link).
The project links currently point at your GitHub profile as a placeholder — swap each
`link` for the exact repo URL once you have them handy.

Your resume is at **`public/resume.pdf`** — replace that file to update the download.

## Contact form

The contact form posts to your Formspree endpoint (`https://formspree.io/f/xwlkqrwq`),
which is already configured to deliver to rohitrana2429@gmail.com. Two fields: name and
message. No server code needed — Formspree handles delivery.

## Deploy

Push to GitHub, import into Vercel or Netlify. Build command `npm run build`, output
directory `dist`.
