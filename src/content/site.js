const profiles = {
  github: 'https://github.com/fabien-tanguy/',
  linkedin: 'https://www.linkedin.com/in/fabientanguy/',
  email: 'mailto:tanguyfab@gmail.com',
};

export const sharedSite = {
  identity: { name: 'Fabien Tanguy', label: 'Technical notes' },
  footer: {
    text: 'Fabien Tanguy',
    links: [
      { label: 'GitHub', href: profiles.github },
      { label: 'LinkedIn', href: profiles.linkedin },
      { label: 'Email', href: profiles.email },
    ],
  },
};

export const notesPage = {
  nav: [
    { label: 'Notes', href: './', current: true },
    { label: 'Consulting', href: './consulting/' },
    { label: 'LinkedIn', href: profiles.linkedin },
  ],
  intro: {
    label: 'Technical notes',
    title: 'A few notes on building and maintaining real web products.',
    text: 'React, Next.js, TypeScript, APIs, SQL, performance and the pragmatic trade-offs that come with existing code, business rules and production constraints.',
  },
  notes: {
    title: 'Notes',
    articles: [
      { title: 'Beyond The JSON Bloat: Mastering bitwise states in high-stakes PWAs', description: 'Compressing multi-flag state so a field PWA stays leaner and more resilient offline.', date: '2026-02-10', topics: ['PWA', 'Bitwise', 'Offline', 'State'], link: { label: 'Read →', href: 'https://medium.com/@tanguyfab/beyond-the-json-bloat-mastering-bitwise-states-in-high-stakes-pwas-f2acfa656c49' } },
      { title: 'Oracle Materialized Views: Stop killing your backend with expensive joins', description: 'Moving expensive joins to the right moment instead of rebuilding the same dashboard on every request.', date: '2026-02-10', topics: ['Oracle', 'SQL', 'Materialized Views', 'Backend'], link: { label: 'Read →', href: 'https://medium.com/@tanguyfab/oracle-materialized-views-stop-killing-your-backend-with-expensive-joins-8c2773c9cd73' } },
      { title: 'API Error handling Demystified: Don’t just fetch - handle in js & ts', description: 'Structuring JS/TS API errors so failed fetches stop pretending everything is fine.', date: '2025-09-23', topics: ['JavaScript', 'TypeScript', 'API', 'Error handling'], link: { label: 'Read →', href: 'https://medium.com/@tanguyfab/api-error-handling-demystified-dont-just-fetch-handle-in-js-ts-7938ee22afb9' } },
    ],
  },
};

export const consultingPage = {
  nav: [
    { label: 'Notes', href: '../' },
    { label: 'Consulting', href: './', current: true },
    { label: 'LinkedIn', href: profiles.linkedin },
  ],
  intro: {
    label: 'Consulting',
    title: 'I help teams modernise and stabilise existing web products without betting everything on a rewrite.',
    text: 'Senior software engineer working across React, Next.js and TypeScript on complex products, critical user journeys and progressive modernisation.',
  },
  interventions: {
    title: 'Focused interventions',
    items: [
      { number: '01', title: 'React / Next.js Health Check', description: 'Review your front-end architecture, rendering and data flows, performance, test coverage and production risks.', meta: '2–4 days · Prioritised findings + action plan' },
      { number: '02', title: 'Front-end Rescue & Stabilisation', description: 'Focus on critical bugs, performance regressions, state/API issues, missing safeguards and test gaps.', meta: '3–10 days · Fixes + remaining-risk handover' },
      { number: '03', title: 'Legacy → Modern Front', description: 'Map existing behaviour and business rules, identify safe boundaries and implement the first migration slice.', meta: 'Scoping · First increment' },
    ],
  },
  experience: {
    title: 'Products and environments I’ve worked on',
    intro: 'Selected examples from my experience over the years. They illustrate the kinds of products, teams and constraints I’ve worked with, not packaged engagements delivered in this format.',
    items: [
      { name: 'FDJ United', text: 'High-traffic web platform, progressive migration, performance and tracking.' },
      { name: 'AXA', text: 'Regulated customer journeys, complex business rules and progressive modernisation.' },
      { name: 'Accor', text: 'Internal product platform, personalisation and front-end scope.' },
      { name: 'Solera', text: 'Offline-first business PWA, dynamic forms and field usage.' },
      { name: 'BoatClarity', text: 'Current product work with Next.js, React and PostgreSQL, from design to production.' },
    ],
  },
  contact: {
    title: 'Have an existing product that needs to move forward without a rewrite?',
    text: 'Let’s discuss how I can help with your situation, pragmatically.',
    links: [
      { label: 'Email me', href: profiles.email },
    ],
  },
};
