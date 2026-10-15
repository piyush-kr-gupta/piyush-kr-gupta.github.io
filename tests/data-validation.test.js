import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

const EXPECTED_APPS = [
  {
    name: 'BigBasket',
    domain: 'Quick Commerce',
    businessModel: 'B2C',
    url: 'https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp&hl=en_IN',
  },
  {
    name: 'BigBasket Delivery Partner App',
    domain: 'Quick Commerce',
    businessModel: 'Unspecified',
    url: 'https://play.google.com/store/apps/details?id=com.bigbasket.dapp.activity&hl=en_IN',
  },
  {
    name: 'Vahak',
    domain: 'Transport Services',
    businessModel: 'B2B',
    url: 'https://play.google.com/store/apps/details?id=search.find.lorries.invite.transporter.add.lorries.deliveries.codenicely.search.vahak&hl=en_IN',
  },
  {
    name: 'CrelioHealth for Patients',
    domain: 'Healthcare',
    businessModel: 'B2C',
    url: 'https://play.google.com/store/apps/details?id=com.livehealth&hl=en_IN',
  },
  {
    name: 'CrelioHealth for Doctors',
    domain: 'Healthcare',
    businessModel: 'B2B',
    url: 'https://play.google.com/store/apps/details?id=com.livehealthdoctorapp&hl=en_IN',
  },
  {
    name: 'CrelioHealth Inventory',
    domain: 'Healthcare',
    businessModel: 'B2B',
    url: 'https://play.google.com/store/apps/details?id=com.creliohealth.inventorymanagement&hl=en_IN',
  },
  {
    name: 'TV Lens / OTT Watch',
    domain: 'Entertainment',
    businessModel: 'Unspecified',
    url: 'https://play.google.com/store/apps/details?id=movies.old.watched.free',
  },
  {
    name: 'MyMandir',
    domain: 'Devotional Social Media',
    businessModel: 'Unspecified',
    url: 'https://play.google.com/store/apps/details?id=com.mymandir&hl=en_IN',
  },
];

test('Portfolio Data Integrity: Built index.html contains all 8 required applications and exact URLs', () => {
  const htmlPath = path.resolve('dist/index.html');
  assert.ok(fs.existsSync(htmlPath), 'dist/index.html must exist');
  const html = fs.readFileSync(htmlPath, 'utf8');

  for (const app of EXPECTED_APPS) {
    assert.ok(html.includes(app.name), `dist/index.html must contain app name "${app.name}"`);
    assert.ok(
      html.includes(app.url) || html.includes(app.url.replace(/&/g, '&amp;')),
      `dist/index.html must contain exact Play Store URL for "${app.name}"`
    );
  }
});

test('Portfolio Data Integrity: Security attributes on external links', () => {
  const html = fs.readFileSync(path.resolve('dist/index.html'), 'utf8');
  assert.ok(html.includes('rel="noopener noreferrer"'), 'External links must have rel="noopener noreferrer"');
  assert.ok(!html.includes('http://'), 'No insecure http URLs should be present');
});

test('Resume Assets: Static resume files exist in public and dist directories', () => {
  const publicResume = path.resolve('public/Piyush_Kumar_Gupta_Resume.pdf');
  const distResume = path.resolve('dist/Piyush_Kumar_Gupta_Resume.pdf');
  const fallbackResume = path.resolve('public/resume.pdf');

  assert.ok(fs.existsSync(publicResume), 'public/Piyush_Kumar_Gupta_Resume.pdf must exist');
  assert.ok(fs.existsSync(distResume), 'dist/Piyush_Kumar_Gupta_Resume.pdf must exist');
  assert.ok(fs.existsSync(fallbackResume), 'public/resume.pdf must exist');

  const stats = fs.statSync(publicResume);
  assert.ok(stats.size > 1000, 'Resume file must not be empty');
});

test('Semantic HTML and Accessibility: Landmark tags present', () => {
  const html = fs.readFileSync(path.resolve('dist/index.html'), 'utf8');
  assert.ok(html.includes('<header'), 'HTML must contain <header>');
  assert.ok(html.includes('<main'), 'HTML must contain <main>');
  assert.ok(html.includes('<footer'), 'HTML must contain <footer>');
  assert.ok(html.includes('<nav'), 'HTML must contain <nav>');
  assert.ok(html.includes('id="main-content"'), 'HTML must contain #main-content target for skip link');
  assert.ok(html.includes('aria-label="Toggle light and dark color theme"'), 'Theme toggle must have accessible aria-label');
  assert.ok(html.includes('aria-label="Toggle navigation menu"') || html.includes('aria-label="Open navigation menu"'), 'Mobile menu must have accessible aria-label');
});

test('404 Custom Error Page: dist/404.html generated and functional', () => {
  const notFoundPath = path.resolve('dist/404.html');
  assert.ok(fs.existsSync(notFoundPath), 'dist/404.html must exist');
  const notFoundHtml = fs.readFileSync(notFoundPath, 'utf8');
  assert.ok(notFoundHtml.includes('Page Not Found'), '404 page must have "Page Not Found" heading');
  assert.ok(notFoundHtml.includes('Return to Homepage'), '404 page must have link to return to homepage');
});

test('SEO & Structured Data: Metadata tags and JSON-LD schema', () => {
  const html = fs.readFileSync(path.resolve('dist/index.html'), 'utf8');
  assert.ok(html.includes('<meta name="description"'), 'Meta description must be present');
  assert.ok(html.includes('<meta property="og:title"'), 'OpenGraph title must be present');
  assert.ok(html.includes('<meta property="og:type" content="website"'), 'OpenGraph type must be website');
  assert.ok(html.includes('application/ld+json'), 'JSON-LD schema must be embedded');
  assert.ok(html.includes('"@type":"Person"'), 'JSON-LD schema must include Person type');
  assert.ok(html.includes('Piyush Kumar Gupta'), 'JSON-LD schema must include author name');
});

test('Domain Derivation Logic: Computes domain stats dynamically from applications dataset', async () => {
  const { getDerivedDomains, getUniqueDomains, portfolioData } = await import('../src/data/portfolio.ts');

  const domains = getUniqueDomains(portfolioData.applications);
  assert.deepStrictEqual(
    domains,
    ['Devotional Social Media', 'Entertainment', 'Healthcare', 'Quick Commerce', 'Transport Services'],
    'Must extract all unique domains in sorted order'
  );

  const derived = getDerivedDomains(portfolioData.applications);
  assert.strictEqual(derived.length, 5, 'Must have 5 business domains');

  const qc = derived.find((d) => d.name === 'Quick Commerce');
  assert.ok(qc, 'Quick commerce domain must exist');
  assert.strictEqual(qc.count, 2, 'Quick commerce must have 2 applications');
  assert.ok(qc.appNames.includes('BigBasket'));
  assert.ok(qc.appNames.includes('BigBasket Delivery Partner App'));

  const healthcare = derived.find((d) => d.name === 'Healthcare');
  assert.ok(healthcare, 'Healthcare domain must exist');
  assert.strictEqual(healthcare.count, 3, 'Healthcare must have 3 applications');

  // Verify that adding a project in a new domain automatically updates the derived domain list
  const mockNewApp = {
    id: 'fintech-app',
    name: 'FinFlow Pay',
    domain: 'FinTech',
    businessModel: 'B2B',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.finflow.pay',
    description: 'B2B payment processing application.',
    highlights: ['Built payment SDK integration.'],
    technologies: ['Kotlin', 'Compose'],
    initials: 'FF',
    domainCategory: 'logistics',
  };

  const updatedDerived = getDerivedDomains([...portfolioData.applications, mockNewApp]);
  assert.strictEqual(updatedDerived.length, 6, 'Must dynamically support new domain');
  const fintech = updatedDerived.find((d) => d.name === 'FinTech');
  assert.ok(fintech, 'New FinTech domain must be created automatically');
  assert.strictEqual(fintech.count, 1);
  assert.ok(fintech.appNames.includes('FinFlow Pay'));
});

