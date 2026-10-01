function linkAttributes(href) {
  return href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
}

function renderLink(link, className = '') {
  return `<a class="${className}" href="${link.href}"${linkAttributes(link.href)}>${link.label}</a>`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(date));
}

function renderHeader(shared, nav) {
  return `<header class="site-header"><a class="identity" href="${nav[0].href}"><span>${shared.identity.name}</span><small>${shared.identity.label}</small></a><nav class="primary-nav" aria-label="Primary navigation">${nav.map((item) => `<a href="${item.href}"${linkAttributes(item.href)}${item.current ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav></header>`;
}

function renderFooter(shared) {
  return `<footer class="site-footer"><p>${shared.footer.text}</p><nav class="footer-links" aria-label="Footer links">${shared.footer.links.map((link) => renderLink(link)).join('')}</nav></footer>`;
}

function renderIntro(intro) {
  return `<section class="intro"><p class="eyebrow">${intro.label}</p><h1>${intro.title}</h1><p class="intro-text">${intro.text}</p></section>`;
}

function renderNotes(notes) {
  const articles = [...notes.articles].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return `<section class="notes" aria-labelledby="notes-title"><h2 id="notes-title">${notes.title}</h2><div class="notes-list">${articles.map((article) => `<article class="note-row"><time datetime="${article.date}">${formatDate(article.date)}</time><div class="note-content"><ul class="topic-list" aria-label="Topics">${article.topics.slice(0, 4).map((topic) => `<li>${topic}</li>`).join('')}</ul><h3>${article.title}</h3><p>${article.description}</p></div>${renderLink(article.link, 'read-link')}</article>`).join('')}</div></section>`;
}

function renderConsultingBody(page) {
  return `<div class="consulting-grid"><section class="interventions" aria-labelledby="interventions-title"><h2 id="interventions-title">${page.interventions.title}</h2><div>${page.interventions.items.map((item) => `<article class="intervention"><span>${item.number}</span><div><h3>${item.title}</h3><p>${item.description}</p><p class="intervention-meta">${item.meta}</p></div></article>`).join('')}</div></section><section class="experience" aria-labelledby="experience-title"><h2 id="experience-title">${page.experience.title}</h2><p class="experience-intro">${page.experience.intro}</p><dl>${page.experience.items.map((item) => `<div><dt>${item.name}</dt><dd>${item.text}</dd></div>`).join('')}</dl></section></div><section class="contact" aria-labelledby="contact-title"><h2 id="contact-title">${page.contact.title}</h2><p>${page.contact.text}</p><div>${page.contact.links.map((link) => renderLink(link, 'contact-link')).join('')}</div></section>`;
}

export function renderNotesPage(root, shared, page) {
  root.innerHTML = `<div class="page-shell">${renderHeader(shared, page.nav)}<main>${renderIntro(page.intro)}${renderNotes(page.notes)}</main>${renderFooter(shared)}</div>`;
}

export function renderConsultingPage(root, shared, page) {
  root.innerHTML = `<div class="page-shell">${renderHeader(shared, page.nav)}<main>${renderIntro(page.intro)}${renderConsultingBody(page)}</main>${renderFooter(shared)}</div>`;
}
