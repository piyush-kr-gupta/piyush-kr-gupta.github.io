# Piyush Kumar Gupta — Senior Android & Flutter Engineer Portfolio

A modern, fast, accessible, and responsive developer portfolio website built for a **Senior Mobile Engineer (Android & Flutter)** with extensive commercial experience across Quick Commerce, Healthcare, Transport Logistics, and Social Entertainment.

Built with **Astro**, **Tailwind CSS v4**, and **TypeScript**, generating 100% static HTML at build time with zero server or runtime database dependencies.

---

## Table of Contents

1. [Prerequisites and Local Development](#1-prerequisites-and-local-development)
2. [Installation and Build Commands](#2-installation-and-build-commands)
3. [How to Edit the Portfolio Configuration](#3-how-to-edit-the-portfolio-configuration)
4. [How to Add a New Application and Business Domain](#4-how-to-add-a-new-application-and-business-domain)
5. [How to Modify Skills and Professional Experience](#5-how-to-modify-skills-and-professional-experience)
6. [How to Replace the Resume PDF](#6-how-to-replace-the-resume-pdf)
7. [How to Add or Replace Local Application Images](#7-how-to-add-or-replace-local-application-images)
8. [How to Update LinkedIn, GitHub, and Email Links](#8-how-to-update-linkedin-github-and-email-links)
9. [How to Change Site Title, Description, Accent Color, and Theme Defaults](#9-how-to-change-site-title-description-accent-color-and-theme-defaults)
10. [Version Management & Design Themes](#10-version-management--design-themes)
11. [Deployment to GitHub Pages](#11-deployment-to-github-pages)
12. [Deployment to Vercel](#12-deployment-to-vercel)
13. [Deployment to Cloudflare Pages](#13-deployment-to-cloudflare-pages)
14. [Custom-Domain Configuration and Base-Path Considerations](#14-custom-domain-configuration-and-base-path-considerations)
15. [Troubleshooting Common Deployment Issues](#15-troubleshooting-common-deployment-issues)

---

## 1. Prerequisites and Local Development

- **Node.js**: `v20.0.0` or higher (`v22+` recommended).
- **npm**: `v10.0.0` or higher.
- A modern browser with ES6 support.

---

## 2. Installation and Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (starts at http://localhost:4321)
npm run dev

# 3. Type check and validate code
npm run check

# 4. Run automated test suite
npm test

# 5. Build production static site (outputs to ./dist)
npm run build

# 6. Preview the production build locally
npm run preview
```

---

## 3. How to Edit the Portfolio Configuration

All portfolio content is decoupled from presentation and stored in a single, strongly-typed source of truth:

📁 `src/data/portfolio.ts`

This file contains:
- **`profile`**: Name, headline, short summary, extended bio, primary role, experience years, and core highlights.
- **`contact`**: Email, LinkedIn URL, GitHub URL, and optional personal links.
- **`resume`**: Availability flag, file download path, and download filename.
- **`applications`**: Verified commercial projects, metadata, technologies, and Play Store links.
- **`domainDescriptions`**: Overview text for each business domain.
- **`experiences`**: Verified career history, achievements, and tech stacks.
- **`education`**: Verified degrees, institutions, GPA, and locations.
- **`skillCategories`**: Categorized technical competencies.

---

## 4. How to Add a New Application and Business Domain

To add an application, open `src/data/portfolio.ts` and append a new object to the `applications` array:

```typescript
{
  id: 'my-new-app',
  name: 'My New App',
  domain: 'FinTech', // Any domain name
  businessModel: 'B2C', // 'B2C' | 'B2B' | 'Enterprise' | 'Unspecified'
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.app',
  description: 'A concise summary of what this application does.',
  highlights: [
    'Engineered core transaction flows using Kotlin Coroutines and Jetpack Compose.',
    'Optimized SQLite database queries reducing query latency by 40%.'
  ],
  technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt'],
  company: 'Company Name', // Optional
  initials: 'MN', // 2-letter fallback badge monogram
  domainCategory: 'quick-commerce' // Icon category: 'quick-commerce' | 'logistics' | 'healthcare' | 'entertainment' | 'social'
}
```

### Automatic Domain Derivation
You **do not need to modify any UI component or filter code**. 
- The **Domain Expertise** section automatically detects `'FinTech'`, counts its applications, and creates a domain card.
- The **Domain Filter** dropdown in the Applications section automatically adds `'FinTech'` to its list of selectable options.
- If desired, you can add a custom description for the domain in `portfolioData.domainDescriptions` in `src/data/portfolio.ts`.

---

## 5. How to Modify Skills and Professional Experience

### Modifying Skills
In `src/data/portfolio.ts`, locate `skillCategories`. You can edit existing categories or add new ones:

```typescript
skillCategories: [
  {
    title: 'Languages & Frameworks',
    skills: ['Kotlin', 'Flutter', 'Dart', 'Java', 'Swift'],
  },
  {
    title: 'Cloud & DevOps', // New category
    skills: ['Docker', 'GitHub Actions', 'Fastlane'],
  },
  // ...
]
```

### Modifying Experience Entries
In `src/data/portfolio.ts`, locate `experiences`. Add or edit entries following this schema:

```typescript
{
  company: 'Company Name',
  client: 'Client Name (optional)',
  role: 'Senior Software Engineer',
  period: 'Jan 2026 – Present',
  location: 'Bengaluru, India',
  summary: 'Concise summary of team and scope.',
  achievements: [
    'Engineered feature X resulting in Y.',
    'Modernized module Z to Kotlin.'
  ],
  technologies: ['Kotlin', 'Compose', 'Coroutines'],
  associatedAppIds: ['app-id']
}
```

---

## 6. How to Replace the Resume PDF

The downloadable resume is served statically from the `public/` directory:

1. Place your new resume PDF at:
   `public/Piyush_Kumar_Gupta_Resume.pdf` (or `public/resume.pdf`).
2. If your filename is different, update the filename in `src/data/portfolio.ts`:
   ```typescript
   resume: {
     available: true,
     downloadPath: '/My_Updated_Resume.pdf',
     downloadFilename: 'Piyush_Kumar_Gupta_Resume.pdf',
     label: 'Download Resume',
   }
   ```
3. Run `npm run build`. The file will automatically be copied to `dist/` and served as a direct static download with clean filename attributes.

> **Resilience note**: If `resume.available` is set to `false`, the website cleanly hides resume download actions without rendering broken links.

---

## 7. How to Add or Replace Local Application Images

By default, every project card displays a clean, minimal typography badge with its initials (e.g. `BB` for BigBasket, `VH` for Vahak).

To use a custom image/icon for an application:
1. Place the icon image in `public/images/apps/` (e.g. `public/images/apps/bigbasket.png`).
2. In `src/data/portfolio.ts`, specify the `iconPath`:
   ```typescript
   {
     id: 'bigbasket',
     name: 'BigBasket',
     iconPath: '/images/apps/bigbasket.png',
     // ...
   }
   ```

---

## 8. How to Update LinkedIn, GitHub, and Email Links

In `src/data/portfolio.ts`, locate `contact`:

```typescript
contact: {
  email: 'piyush.kr.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/piyush-gupta-0a2354103/',
  github: 'https://github.com/piyush-kr-gupta',
  website: 'https://yourwebsite.com' // Optional
}
```

- If you delete or leave a field `undefined` (for example, removing `website`), the site will automatically omit the corresponding button or link without broken layouts or empty tags.
- The email action uses a clean `mailto:` link without requiring any backend services.

---

## 9. How to Change Site Title, Description, Accent Color, and Theme Defaults

### Site Title & SEO Description
In `src/layouts/Layout.astro` and `src/data/portfolio.ts`, modify `profile.name`, `profile.headline`, or pass custom props to `<Layout title="..." description="...">`.

### Accent Color
The accent color uses Tailwind's `sky` palette (Sky 500 / 600 in light mode, Sky 400 in dark mode).
To switch to an emerald, indigo, or violet accent:
- Replace `sky-` class names across components with `emerald-`, `indigo-`, or your preferred Tailwind color.
- Update `--accent` in `src/styles/global.css`.

### Theme Defaults
The theme system:
1. Checks `localStorage.getItem('theme')`.
2. Falls back to the visitor's system preference via `window.matchMedia('(prefers-color-scheme: dark)')`.
3. To force dark mode by default, modify the inline script in `src/layouts/Layout.astro`.

---

## 10. Version Management & Design Themes

The codebase includes an integrated **Theme & Version Management System** so you can develop, preview, and test multiple styles without showing toggles or distractions to recruiters.

### How It Works:
- **Zero Distraction for Recruiters**: In production builds, the dev toolbar is **100% stripped** by Astro's compiler (`import.meta.env.DEV`). Public visitors only see the single finalized theme you designate.
- **1-Line Theme Finalization**: Change the active live theme in `src/config/theme.ts`:
  ```typescript
  export const siteThemeConfig = {
    activeTheme: 'bento', // Set to 'bento' (default), 'craft', 'minimal', 'modern', or 'parallax'
  };
  ```
- **Preview Routes**:
  - `/` (or `/preview/bento`): **Engineering Bento Showcase** — Asymmetric bento grid spotlighting BigBasket at scale, architecture benchmarks, and mobile craft.
  - `/preview/craft`: **Linear Dark Craft** — Raycast/Linear aesthetic, razor-sharp 1px hairline borders, micro-glows, and interactive Cmd+K command palette.
  - `/preview/minimal`: **Clean Minimalist** — Understated, high-contrast, editorial engineering portfolio.
  - `/preview/modern`: **Modern Interactive** — Glassmorphic cards, subtle gradient accents, and segmented filter controls.
  - `/preview/parallax`: **Parallax & Motion** — Spatial depth layers, 3D interactive card perspective tilt, and motion layers.
- **Dev-Only Switcher Toolbar**: While running `npm run dev`, a floating preview toolbar appears at the bottom-right corner for 1-click previewing between designs.

---

## 11. Deployment to GitHub Pages

A ready-to-use GitHub Actions workflow is provided at:
`.github/workflows/deploy.yml`

### Steps to enable GitHub Pages:
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, select **Source: GitHub Actions**.
4. Push a commit to `main` (or trigger the workflow manually in the **Actions** tab).

### Project Pages Base Path (`username.github.io/repo-name/`)
If deploying to a repository subpath rather than a custom domain or root domain:
1. In your GitHub repository, go to **Settings** &rarr; **Secrets and variables** &rarr; **Actions** &rarr; **Variables**.
2. Add a variable named `ASTRO_BASE_URL` with value `/<your-repo-name>/` (with leading and trailing slashes).
3. The workflow and helper `getAssetUrl()` will automatically route assets and URLs through `/<your-repo-name>/`.

---

## 12. Deployment to Vercel

Vercel provides automatic detection and zero-config deployment for Astro.

### Using the Vercel Dashboard:
1. Push the code to GitHub/GitLab.
2. Import the repository in the Vercel dashboard.
3. Framework Preset: **Astro** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

A `vercel.json` file is already included in the root with `cleanUrls: true` for clean static routing.

---

## 13. Deployment to Cloudflare Pages

Cloudflare Pages provides global CDN edge hosting with fast TTFB.

### Using Cloudflare Pages Dashboard:
1. Log in to Cloudflare Dashboard &rarr; **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
2. Select your repository.
3. Build configuration:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Environment Variables**: Add `NODE_VERSION: 22`
4. Click **Save and Deploy**.

A `public/_headers` file is already included in the project to automatically apply security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`) and long-term caching for immutable assets (`/_astro/*`).

---

## 14. Custom-Domain Configuration and Base-Path Considerations

When using a custom domain (e.g. `piyushgupta.dev`):
- Ensure `ASTRO_BASE_URL` is set to `/` (the default).
- In `astro.config.mjs`, you can set `site: 'https://yourdomain.com'`.
- For GitHub Pages with a custom domain:
  - Add your custom domain in **Repository Settings** &rarr; **Pages** &rarr; **Custom domain**.
  - GitHub will automatically generate a `CNAME` record.

---

## 15. Troubleshooting Common Deployment Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **404 on CSS/JS or Assets on GitHub Pages** | Base path mismatch on subpath repositories (e.g. `username.github.io/my-repo`) | Ensure `ASTRO_BASE_URL` is set to `/<repo-name>/` in your environment or repository variables. |
| **Node.js version build error on CI/CD** | Outdated Node version in CI runner | Ensure Node.js is set to `20+` or `22` in your build environment. |
| **Theme flashes wrong color on load (FOUC)** | Theme check executing after rendering | The inline script in `src/layouts/Layout.astro` executes synchronously in `<head>` before HTML rendering to eliminate any flash. |
| **PDF download opens in browser instead of saving** | Browser default PDF behavior | The download links specify the HTML5 `download="Piyush_Kumar_Gupta_Resume.pdf"` attribute. |
| **Play Store links not opening properly** | Blocked popups or referrer issues | All external Play Store links include `target="_blank" rel="noopener noreferrer"` for security and cross-origin compatibility. |

---

## Security & Package Integrity

This project strictly adheres to minimal, verified, zero-untrusted dependency requirements:
- Direct dependencies: `astro`, `tailwindcss`, `@tailwindcss/vite`.
- Dev dependencies: `typescript`, `@astrojs/check`, `@types/node`.
- Audit status: `0 vulnerabilities` via `npm audit`.
- Client-side data: 100% static, local, zero cookies, zero third-party trackers.
