# FreelanceHub Portfolio

A modern, responsive portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), designed for deployment to GitHub Pages.

## Features

- 15 static pages: homepage, about, contact, services index, and 11 individual service pages
- Dark mode design with brand color system
- Fully responsive (mobile-first)
- Scroll animations
- Accessible markup (WCAG 2.1 AA targeted)
- SEO-friendly with Open Graph meta tags
- Contact form via Formspree
- Automated GitHub Actions deployment

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Customization

### 1. Update your details

Replace placeholder content across the project:

| Placeholder | Replace with |
|---|---|
| `[Your Company Name]` | Your name or company |
| `contact@example.com` | Your email address |
| `[username]` | Your GitHub/LinkedIn username |
| `[YOUR_FORM_ID]` | Your Formspree form ID |

### 2. Configure GitHub Pages deployment

Edit `astro.config.mjs` and set your actual GitHub Pages URL:

```js
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name',   // omit if deploying to root
  ...
});
```

### 3. Set up Formspree (contact form)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the form ID
3. In `src/pages/contact.astro`, replace `[YOUR_FORM_ID]` in the form action:
   ```html
   action="https://formspree.io/f/YOUR_ACTUAL_ID"
   ```

### 4. Update service content

All service data lives in `src/data/services.ts`. Edit the `services` array to customize titles, descriptions, features, tools, and use cases.

### 5. Update stats

In `src/components/HeroSection.astro`, update the stats array with your real numbers.

## Deployment to GitHub Pages

### Automatic (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

### Manual

```bash
pnpm build
# Upload the ./dist folder to your hosting provider
```

## Project Structure

```
src/
├── components/       # Header, Footer, ServiceCard, HeroSection, CTASection
├── data/
│   └── services.ts   # All 11 service definitions (single source of truth)
├── layouts/
│   ├── BaseLayout.astro    # HTML shell, SEO meta, scroll animations
│   └── ServiceLayout.astro # Shared layout for all service pages
├── pages/
│   ├── index.astro         # Homepage
│   ├── about.astro         # About page
│   ├── contact.astro       # Contact form
│   └── services/           # 11 service pages + index
└── styles/
    └── global.css          # Tailwind base + custom component classes
```

## Tech Stack

- **Framework**: Astro 4
- **Styling**: Tailwind CSS 3
- **Package Manager**: pnpm
- **Deployment**: GitHub Actions → GitHub Pages
- **Forms**: Formspree
