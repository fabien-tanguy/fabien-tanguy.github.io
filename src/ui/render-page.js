function linkAttributes(href) {
  return href.startsWith('http')
    ? ' target="_blank" rel="noopener noreferrer"'
    : '';
}

function analyticsAttributes(analytics) {
  if (!analytics) return '';

  return Object.entries(analytics)
    .map(([key, value]) => ` data-analytics-${key}="${value}"`)
    .join('');
}

const linkIcons = {
  linkedin: `<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M5.2 7.8H1.6V22h3.6V7.8ZM3.4 2A2.1 2.1 0 1 0 3.4 6.2 2.1 2.1 0 0 0 3.4 2Zm18.9 11.9c0-4.3-2.3-6.3-5.4-6.3a4.7 4.7 0 0 0-4.3 2.4V7.8H9V22h3.6v-7c0-1.8.4-3.6 2.7-3.6s2.4 2.1 2.4 3.7V22h3.6l1-8.1Z"/></svg>`,
  mail: `<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 5h18v14H3V5Zm0 1 9 7 9-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  github: `<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5v-2.2c-2.7.6-3.3-1.1-3.3-1.1-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.7.4-1.1.6-1.3-2.1-.2-4.4-1.1-4.4-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.4 4.9.4.3.7.9.7 1.7v3.2A10 10 0 0 0 12 2Z"/></svg>`,
  external: `<svg class="link-icon link-icon-external" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 16 16 8m-6 0h6v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function iconForLink(link) {
  if (link.label === 'LinkedIn') return { icon: linkIcons.linkedin };
  if (link.label === 'Email' || link.label === 'Me contacter') {
    return { icon: linkIcons.mail };
  }
  if (link.label === 'GitHub') return { icon: linkIcons.github };
  if (link.label === 'Voir BoatClarity') {
    return { icon: linkIcons.external, after: true };
  }
  return null;
}

function renderLink(link, className = '', includeIcon = true) {
  const icon = includeIcon ? iconForLink(link) : null;
  const classes = `${className}${icon ? ' inline-icon-link' : ''}`;
  const content = icon?.after
    ? `${link.label}${icon.icon}`
    : `${icon?.icon ?? ''}${link.label}`;
  return `<a class="${classes}" href="${link.href}"${linkAttributes(link.href)}${analyticsAttributes(link.analytics)}>${content}</a>`;
}

function renderHeader({ identity, navigation, actions, labels }) {
  return `
    <header class="site-header">
      <div class="shell header-inner">
        <a class="identity" href="#accueil" aria-label="${labels.home}">
          <strong>${identity.name}</strong>
          <span>${identity.role}</span>
        </a>
        <nav class="main-nav" aria-label="${labels.mainNavigation}">
          ${navigation.map((item) => renderLink(item)).join('')}
        </nav>
        <div class="header-actions">
          ${renderLink(actions.linkedin, 'text-link')}
          ${renderLink(actions.contact, 'button button-small')}
        </div>
      </div>
    </header>`;
}

function renderHero(hero) {
  return `
    <section class="hero shell" id="accueil" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">${hero.eyebrow}</p>
        <h1 id="hero-title">${hero.title}</h1>
        <p class="hero-text">${hero.text}</p>
        <p class="supporting">${hero.supporting}</p>
        <div class="link-group">
          ${renderLink(hero.links[0], 'button hero-primary-action', false)}
          ${renderLink(hero.links[1], 'text-link')}
        </div>
      </div>
    </section>`;
}

function renderCareer(career) {
  return `
    <section class="section shell" id="parcours" aria-labelledby="career-title">
      <div class="section-heading">
        <p class="section-number">01</p>
        <div>
          <h2 id="career-title">${career.title}</h2>
          <p class="career-introduction">${career.introduction}</p>
        </div>
      </div>
      <ol class="timeline">
        ${career.entries
          .map(
            (entry) => `<li>
              <p class="period">${entry.period}</p>
              <div><h3>${entry.company}</h3><p>${entry.context}</p></div>
            </li>`
          )
          .join('')}
      </ol>
    </section>`;
}

function renderWork(work, labels) {
  return `
    <section class="section shell" id="realisations" aria-labelledby="work-title">
      <div class="section-heading"><p class="section-number">02</p><h2 id="work-title">${work.title}</h2></div>
      <div class="work-grid">
        ${work.items
          .map(
            (
              item
            ) => `<article class="work-card${item.featured ? ' work-card-featured' : ''}${item.image ? ' work-card-with-media' : ''}">
              <div class="work-card-content">
                <p class="card-label">${item.label}</p>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <ul class="tag-list" aria-label="${labels.technologies}">${item.tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
                ${item.link ? renderLink(item.link, 'card-link arrow-link') : ''}
              </div>
              ${item.image ? `<figure class="work-card-media"><img src="${item.image.src}" alt="${item.image.alt}" width="${item.image.width}" height="${item.image.height}" loading="lazy"></figure>` : ''}
            </article>`
          )
          .join('')}
      </div>
    </section>`;
}

function renderServices(services) {
  return `
    <section class="section shell" id="intervention" aria-labelledby="services-title">
      <div class="section-heading"><p class="section-number">03</p><h2 id="services-title">${services.title}</h2></div>
      <div class="services-grid">
        ${services.items.map((item, index) => `<article><span>0${index + 1}</span><h3>${item.title}</h3><p>${item.description}</p></article>`).join('')}
      </div>
    </section>`;
}

function renderPerspective(perspective, labels) {
  return `
    <section class="perspective" aria-labelledby="perspective-title">
      <div class="shell perspective-inner">
        <p class="eyebrow">${labels.perspective}</p>
        <h2 id="perspective-title">${perspective.title}</h2>
        <p>${perspective.text}</p>
      </div>
    </section>`;
}

function renderContact(contact, footer, labels) {
  return `
    <section class="contact shell" id="contact" aria-labelledby="contact-title">
      <p class="section-number">04</p>
      <h2 id="contact-title">${contact.title}</h2>
      <p>${contact.text}</p>
      <div class="contact-links">${contact.links.map((link) => renderLink(link, 'text-link arrow-link')).join('')}</div>
    </section>
    <footer class="site-footer"><div class="shell"><p>${footer.text}</p><div class="footer-links">${renderLink(footer.link)}<a href="./privacy.html">Politique de confidentialité</a><button type="button" data-cookie-preferences>Préférences de confidentialité</button><a href="#accueil">${labels.backToTop}</a></div></div></footer>`;
}

export function renderPage(root, content) {
  root.innerHTML = `
    ${renderHeader(content)}
    <main>
      ${renderHero(content.hero)}
      ${renderCareer(content.career)}
      ${renderWork(content.work, content.labels)}
      ${renderServices(content.services)}
      ${renderPerspective(content.perspective, content.labels)}
      ${renderContact(content.contact, content.footer, content.labels)}
    </main>`;
}
