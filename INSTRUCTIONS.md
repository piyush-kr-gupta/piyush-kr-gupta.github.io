# Portfolio Website — Comprehensive Instructions & Maintenance Guide

This document provides complete, step-by-step instructions for running, customizing, testing, and deploying the developer portfolio website for **Piyush Kumar Gupta** (Senior Android & Flutter Engineer).

---

## Table of Contents

1. [Quick Start & Prerequisites](#1-quick-start--prerequisites)
2. [CLI Commands Reference](#2-cli-commands-reference)
3. [Architecture & Content Configuration](#3-architecture--content-configuration)
4. [How to Add or Update Applications](#4-how-to-add-or-update-applications)
5. [Automatic Business Domain System](#5-automatic-business-domain-system)
6. [Updating Professional Experience & Education](#6-updating-professional-experience--education)
7. [Updating Technical Skills](#7-updating-technical-skills)
8. [Managing the Resume PDF](#8-managing-the-resume-pdf)
9. [Adding Custom App Icons & Screenshots](#9-adding-custom-app-icons--screenshots)
10. [Updating Contact & Social Media Links](#10-updating-contact--social-media-links)
11. [Theme & Version Management System (Zero-Distraction Public Release)](#11-theme--version-management-system-zero-distraction-public-release)
12. [Customizing Themes, Colors & SEO Metadata](#12-customizing-themes-colors--seo-metadata)
13. [Deploying to GitHub Pages](#13-deploying-to-github-pages)
14. [Deploying to Vercel](#14-deploying-to-vercel)
15. [Deploying to Cloudflare Pages](#15-deploying-to-cloudflare-pages)
16. [Custom Domain Configuration](#16-custom-domain-configuration)
17. [Automated Testing & Quality Checks](#17-automated-testing--quality-checks)
18. [Troubleshooting Guide](#18-troubleshooting-guide)

---

## 1. Quick Start & Prerequisites

### Prerequisites
- **Node.js**: `v20.0.0` or higher (`v22+` recommended).
- **npm**: `v10.0.0` or higher.
- A modern web browser.

### Clone and Run in 3 Steps:
```bash
# 1. Install all dependencies
npm install

# 2. Launch the local development server with hot-reload
npm run dev

# 3. Open in your browser
# http://localhost:4321
```

---

## 2. CLI Commands Reference

All commands must be executed from the root project directory:

| Command | Description | Output / Destination |
| :--- | :--- | :--- |
| `npm install` | Installs project dependencies securely from npm registry | `node_modules/` |
| `npm run dev` | Starts local development server at `http://localhost:4321` with HMR | In-memory dev server |
| `npm run check` | Runs Astro and TypeScript type-checking diagnostics | Terminal diagnostics |
| `npm test` | Runs the automated data integrity and regression test suite | 7 unit & integration tests |
| `npm run build` | Compiles production static website HTML, CSS, and JS | `./dist/` |
| `npm run preview` | Starts a local HTTP server serving the compiled production `./dist/` bundle | `http://localhost:4321` |
| `npm audit` | Audits dependencies for known security vulnerabilities | Vulnerability report (0 found) |

---

## 3. Architecture & Content Configuration

The website is architected with a strict separation of **content** and **presentation**:

- **Presentation & Components**: `src/components/` and `src/layouts/`
- **Global Styles & CSS Tokens**: `src/styles/global.css`
- **Static Assets (Resume, Favicon, Images)**: `public/`
- **Data Source of Truth**: `src/data/portfolio.ts`

To change any profile details, apps, experiences, skills, or links, you **only** need to edit `src/data/portfolio.ts`. You do not need to touch Astro components.

---

## 4. How to Add or Update Applications

Open `src/data/portfolio.ts` and locate the `applications` array.

### Schema:
```typescript
export interface Application {
  id: string;               // Unique kebab-case ID (e.g. 'my-app')
  name: string;             // Display name
  domain: string;           // Industry domain (e.g. 'FinTech', 'Quick Commerce')
  businessModel: 'B2C' | 'B2B' | 'Enterprise' | 'Unspecified';
  playStoreUrl: string;     // Exact Google Play Store URL
  description: string;      // Concise application description
  highlights: string[];     // Bullet points of engineering achievements
  technologies: string[];   // Tech stack tags
  company?: string;         // Company or client name (optional)
  featured?: boolean;       // Set true if featured (optional)
  iconPath?: string;        // Local asset path (e.g. '/images/apps/my-app.png')
  initials: string;         // 2-letter fallback badge monogram (e.g. 'MA')
  domainCategory: 'quick-commerce' | 'logistics' | 'healthcare' | 'entertainment' | 'social';
}
```

### Example: Adding a New Project
```typescript
{
  id: 'payflow',
  name: 'PayFlow Merchant',
  domain: 'FinTech',
  businessModel: 'B2B',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.payflow.merchant',
  description: 'Merchant payment acceptance and real-time ledger settlement platform.',
  highlights: [
    'Engineered offline-capable settlement ledger using Room and Kotlin Coroutines.',
    'Designed reactive payment status polling with Kotlin Flow and Retrofit.'
  ],
  technologies: ['Kotlin', 'Android Jetpack', 'Room', 'Coroutines', 'Hilt'],
  company: 'PayFlow Tech Ltd.',
  initials: 'PF',
  domainCategory: 'quick-commerce'
}
```

---

## 5. Automatic Business Domain System

The website features an **intelligent dynamic domain derivation engine**:

1. When you add a new project with a new `domain` (such as `'FinTech'` or `'EdTech'`), the helper function `getDerivedDomains()` automatically:
   - Groups all projects in that domain.
   - Calculates the exact project count.
   - Generates a dedicated domain card in the **Domain Expertise** section.
   - Adds the new domain to the **Domain Filter dropdown** in the Application Showcase.
2. Optional custom description:
   In `src/data/portfolio.ts`, you can optionally add a tailored description in `domainDescriptions`:
   ```typescript
   domainDescriptions: {
     'FinTech': 'High-security transaction processing platforms, digital wallets, and merchant ledger applications.'
   }
   ```
3. Clicking **"View filtered applications"** on any domain card will automatically scroll to the application grid and activate the corresponding domain filter.

---

## 6. Updating Professional Experience & Education

In `src/data/portfolio.ts`, locate the `experiences` array:

```typescript
experiences: [
  {
    company: 'Company Name',
    client: 'Client Name (optional)',
    role: 'Senior Software Engineer (Flutter, Kotlin)',
    period: 'May 2025 – Present',
    location: 'Bengaluru, India',
    summary: 'Concise summary of team and scope.',
    achievements: [
      'Spearheaded feature X resulting in Y.',
      'Led migration from Java to Kotlin across core modules.'
    ],
    technologies: ['Kotlin', 'Flutter', 'BLoC', 'Coroutines'],
    associatedAppIds: ['bigbasket']
  },
  // ...
]
```

### Updating Education
In `src/data/portfolio.ts`, locate the `education` array:

```typescript
education: [
  {
    degree: 'B. Tech in Electronics & Communication Engineering (ECE)',
    institution: 'MCKV Institute of Engineering',
    period: '2014 – 2018',
    grade: '8.07 DGPA',
    location: 'Kolkata, India',
  }
]
```

---

## 7. Updating Technical Skills

In `src/data/portfolio.ts`, locate the `skillCategories` array. You can rename existing categories, add new categories, or add/remove skills:

```typescript
skillCategories: [
  {
    title: 'Languages & Frameworks',
    skills: ['Kotlin', 'Flutter', 'Dart', 'Java', 'Swift'],
  },
  {
    title: 'Android Development',
    skills: ['Android SDK', 'Jetpack Compose', 'Coroutines', 'Flow', 'Room', 'WorkManager'],
  },
  {
    title: 'Architecture & Engineering',
    skills: ['MVVM', 'Clean Architecture', 'Modularization', 'System Design', 'BLoC'],
  },
  {
    title: 'Testing',
    skills: ['Unit Testing', 'MockK', 'Espresso'],
  }
]
```

---

## 8. Managing the Resume PDF

The downloadable resume is served statically from `public/`.

### Replacing the Resume:
1. Save your updated PDF into `public/Piyush_Kumar_Gupta_Resume.pdf`.
2. (Optional) Also keep a copy as `public/resume.pdf` for backward compatibility:
   ```bash
   cp "path/to/Your_New_Resume.pdf" public/Piyush_Kumar_Gupta_Resume.pdf
   cp "path/to/Your_New_Resume.pdf" public/resume.pdf
   ```
3. To change the downloaded file's name or display text, update `resume` in `src/data/portfolio.ts`:
   ```typescript
   resume: {
     available: true,
     downloadPath: '/Piyush_Kumar_Gupta_Resume.pdf',
     downloadFilename: 'Piyush_Kumar_Gupta_Resume.pdf',
     label: 'Download Resume',
   }
   ```
4. **Resilience**: If `resume.available` is set to `false`, the website will automatically hide all resume download buttons without rendering broken links.

---

## 9. Adding Custom App Icons & Screenshots

By default, every card renders a clean, minimal typography badge with the application initials (`BB`, `VH`, `CP`, etc.).

All 8 applications in the showcase are configured with high-resolution WebP icons from `portfolio_app_icons/` (stored in `public/images/apps/`):

- **BigBasket**: `/images/apps/bigbasket.webp`
- **BigBasket Delivery Partner App**: `/images/apps/bbdelivery.webp`
- **Vahak**: `/images/apps/vahak_logo.webp`
- **CrelioHealth for Patients**: `/images/apps/creliopatients.webp`
- **CrelioHealth for Doctors**: `/images/apps/creliodoctors.webp`
- **CrelioHealth Inventory**: `/images/apps/crelioinventory.webp`
- **TV Lens / OTT Watch**: `/images/apps/ottwatch.webp`
- **MyMandir**: `/images/apps/mymandir.webp`

To add an icon for a new app:
1. Place the image file in `public/images/apps/` (e.g. `public/images/apps/newapp.webp`).
2. Add the `iconPath` property to the application entry in `src/data/portfolio.ts`:
   ```typescript
   {
     id: 'newapp',
     name: 'New App',
     iconPath: '/images/apps/newapp.webp',
     // ...
   }
   ```
If `iconPath` is omitted, the application card automatically falls back to clean typography initials.

---

## 10. Updating Contact & Social Media Links

In `src/data/portfolio.ts`, locate the `contact` configuration:

```typescript
contact: {
  email: 'piyush.kr.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/piyush-gupta-0a2354103/',
  github: 'https://github.com/piyush-kr-gupta',
  website: 'https://yourpersonalwebsite.com' // Optional
}
```

- If any link is removed or set to `undefined`, its corresponding button is automatically omitted from the UI.
- The email button uses a native `mailto:` link, requiring no external server or backend.

---

## 11. Theme & Version Management System (Zero-Distraction Public Release)

The website features a dedicated **Version Management System** allowing you to test, compare, and finalize design themes locally without showing any switches, experimental badges, or distractions to public visitors or recruiters.

### How It Works
1. **Public Visitors See ONE Cohesive Portfolio**:
   When visitors browse to your main URL (`/`), they see only the single theme you have designated as active (currently set to **Engineering Bento Showcase**).
2. **Dev-Only Switcher Toolbar**:
   During local development (`npm run dev`), a subtle floating preview toolbar appears at the bottom-right corner of the screen with 1-click pills: `[Bento | Craft | Minimal | Modern | Parallax]`.
   - **Production Stripping**: When you run `npm run build`, Astro's compiler uses `import.meta.env.DEV` to **100% strip the toolbar** from the production build. It never appears on your live site.
3. **1-Line Theme Finalization**:
   In `src/config/theme.ts`, you control which theme is published to the public at `/`:
   ```typescript
   export const siteThemeConfig = {
     activeTheme: 'bento', // Set to 'bento' (default), 'craft', 'minimal', 'modern', or 'parallax'
   };
   ```
4. **Private Preview Routes**:
   You can inspect each design variant directly at any time:
   - `/` (or `/preview/bento`): **Engineering Bento Showcase** — Asymmetric bento grid spotlighting BigBasket at scale, architecture benchmarks, and mobile craft.
   - `/preview/craft`: **Linear Dark Craft** — Raycast/Linear aesthetic, razor-sharp 1px hairline borders, micro-glows, and interactive Cmd+K command palette.
   - `/preview/minimal`: **Clean Minimalist** — Understated, high-contrast, editorial engineering portfolio.
   - `/preview/modern`: **Modern Interactive** — Glassmorphic cards, subtle gradient accents, and segmented filter controls.
   - `/preview/parallax`: **Parallax & Motion** — Spatial depth layers, 3D interactive card perspective tilt, and motion layers.
5. **Adding Future Design Ideas**:
   To test any new design in the future, simply create a new folder under `src/components/themes/`, add it to `siteThemeConfig.availableThemes`, and preview it privately without touching your live portfolio!

---

## 12. Customizing Themes, Colors & SEO Metadata

### Accent Color Customization
The site uses Tailwind's calibrated `sky` palette (Sky 600 in light mode, Sky 400 in dark mode).
To switch to an Emerald, Indigo, or Violet accent:
1. In `src/styles/global.css`, adjust `:focus-visible` or selection colors.
2. In the components (`Navbar.astro`, `Hero.astro`, `Applications.astro`, `DomainExpertise.astro`, `Experience.astro`, `Skills.astro`, `Contact.astro`), replace `text-sky-600` / `dark:text-sky-400` with `text-emerald-600` / `dark:text-emerald-400` or your desired color.

### Theme Persistence & FOUC Prevention
The theme switcher persists preferences in `localStorage` under the key `'theme'`. An inline script inside `<head>` in `src/layouts/Layout.astro` evaluates the theme before HTML rendering, ensuring zero screen flicker or flash of unstyled theme.

### SEO & OpenGraph Metadata
SEO title, description, and canonical URLs are configured in `src/layouts/Layout.astro`.
Default values are automatically populated from `portfolioData.profile`.

---

## 13. Deploying to GitHub Pages

An automated GitHub Actions workflow is preconfigured at:
`.github/workflows/deploy.yml`

### Step-by-Step GitHub Pages Deployment:
1. Initialize a git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a GitHub repository and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub, go to your repository **Settings** &rarr; **Pages**.
4. Under **Build and deployment**, select:
   - **Source**: `GitHub Actions`
5. The deployment workflow will run automatically on push.
6. **Subpath Handling (Important)**:
   If hosting at `https://<username>.github.io/<repo-name>/` (a project repository rather than user site `<username>.github.io`):
   - In your repository, go to **Settings** &rarr; **Secrets and variables** &rarr; **Actions** &rarr; **Variables**.
   - Click **New repository variable**.
   - Name: `ASTRO_BASE_URL`
   - Value: `/<repo-name>/` (with leading and trailing slash).
   - Re-run the deployment action.

---

## 14. Deploying to Vercel

Vercel provides automatic zero-configuration static hosting for Astro projects.

### Step-by-Step Vercel Deployment:
1. Push your repository to GitHub.
2. Sign in to [Vercel Dashboard](https://vercel.com).
3. Click **Add New...** &rarr; **Project**.
4. Import your GitHub repository.
5. In **Project Configuration**:
   - **Framework Preset**: `Astro` (auto-detected).
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.
7. The included `vercel.json` ensures clean URLs without trailing slashes.

---

## 15. Deploying to Cloudflare Pages

Cloudflare Pages delivers instant builds and edge caching.

### Step-by-Step Cloudflare Pages Deployment:
1. Push your repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com), go to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
3. Select your repository.
4. Set the build parameters:
   - **Framework Preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
5. Under **Environment variables**, add:
   - Variable name: `NODE_VERSION`
   - Value: `22`
6. Click **Save and Deploy**.
7. The included `public/_headers` file will automatically configure HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`) and caching for static assets.

---

## 16. Custom Domain Configuration

If you own a custom domain (e.g. `piyushgupta.dev` or `piyushkr.com`):

1. **Base Path**: Keep `ASTRO_BASE_URL` set to `/` (default).
2. **Site URL**: In `astro.config.mjs`, update `site`:
   ```javascript
   site: 'https://yourcustomdomain.com',
   ```
3. **DNS Configuration**:
   - For **Vercel**: Add domain in Vercel Project Settings &rarr; Domains &rarr; Follow CNAME/A record prompts.
   - For **Cloudflare Pages**: Add domain in Pages Project Settings &rarr; Custom domains &rarr; Follow DNS setup.
   - For **GitHub Pages**: Add domain in Repository Settings &rarr; Pages &rarr; Custom domain &rarr; Check "Enforce HTTPS".

---

## 17. Automated Testing & Quality Checks

Run the automated test suite before committing changes to ensure data and build integrity:

```bash
# 1. Type check all Astro components and TypeScript files
npm run check

# 2. Run the 11 regression and validation tests
npm test

# 3. Build static output
npm run build
```

### What the test suite checks:
- Verification of all 8 application names and exact Google Play Store URLs across all routes.
- Verification that all 8 WebP application icons exist in public and dist.
- External links possess `rel="noopener noreferrer"`.
- Verification that static resume files exist and are not empty.
- Verification of semantic landmark tags (`<header>`, `<main>`, `<footer>`, `<nav>`).
- Verification that `dist/404.html` exists and includes home navigation links.
- Verification of SEO meta tags and Schema.org `Person` JSON-LD structured data.
- Unit testing of `getDerivedDomains()` and `getUniqueDomains()` dynamic calculation logic.
- Verification that all 3 preview routes (`preview/minimal`, `preview/modern`, `preview/parallax`) compile with full data integrity.
- Verification that `DevVersionToolbar` is 100% stripped from production build.
- Verification that `siteThemeConfig.activeTheme` is valid.

---

## 18. Troubleshooting Guide

| Issue | Root Cause | Solution |
| :--- | :--- | :--- |
| **Styles/Assets 404 on GitHub Pages** | Subpath mismatch when deployed to `user.github.io/repo/` | Set `ASTRO_BASE_URL` to `/<repo-name>/` in GitHub Repository Variables. |
| **Node.js engine error on build** | Build environment using Node < 20 | Ensure Node.js 20 or 22 is selected in your CI/CD settings (`NODE_VERSION=22`). |
| **Theme flashes wrong mode on page load** | Async theme script execution | Theme is initialized synchronously in `<head>` via an inline script in `src/layouts/Layout.astro`. Keep this script inline. |
| **Play Store link does not open** | Malformed URL or missing security attributes | Links use exact URLs with `target="_blank" rel="noopener noreferrer"`. Ensure URLs in `src/data/portfolio.ts` begin with `https://`. |
| **Resume download doesn't download** | Browser inline PDF viewing default | Anchor tags include HTML5 `download` attribute with filename `Piyush_Kumar_Gupta_Resume.pdf`. |
| **Filter returns 0 results** | Search query or domain combination has no matches | Click the "Reset" or "Reset All Filters" button to restore all 8 applications. |
