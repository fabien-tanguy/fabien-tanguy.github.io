import './style.css';

// Analytics helper
function trackEvent(path, title) {
  if (typeof window.goatcounter?.count === 'function') {
    window.goatcounter.count({ path, title, event: true });
  }
}

// Tab Navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.content-section');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => b.classList.remove('active'));
    sections.forEach((s) => s.classList.remove('active'));

    btn.classList.add('active');

    const tabName = btn.dataset.tab;
    const section = document.getElementById(tabName);
    if (section) {
      section.classList.add('active');
    }

    trackEvent(`tab-${tabName}`, `Tab: ${btn.textContent.trim()}`);
  });
});

// CV PDF click tracking
document.querySelectorAll('a[href$=".pdf"]').forEach((link) => {
  link.addEventListener('click', () => {
    const lang = link.href.includes('EN') ? 'en' : 'fr';
    trackEvent(`cv-download-${lang}`, `CV Download (${lang.toUpperCase()})`);
  });
});

// Medium Feed
const MEDIUM_USERNAME = 'tanguyfab';
const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

async function fetchMediumArticles() {
  const loadingEl = document.getElementById('loading-blog');
  const gridEl = document.getElementById('blog-grid');
  const fallbackEl = document.getElementById('blog-fallback');

  try {
    const response = await fetch(RSS_API);
    const data = await response.json();

    if (data.status === 'ok' && data.items.length > 0) {
      loadingEl.style.display = 'none';

      data.items.forEach((item) => {
        // Simple regex to find the first image in the content content
        const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
        const imgUrl = imgMatch
          ? imgMatch[1]
          : 'https://placehold.co/600x400/1e293b/94a3b8?text=Article';

        // Strip HTML tags for excerpt
        const plainText = item.description.replace(/<[^>]+>/g, '');
        const excerpt = plainText.substring(0, 150) + '...';

        // Format date
        const date = new Date(item.pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        const articleEl = document.createElement('a');
        articleEl.className = 'article-card';
        articleEl.href = item.link;
        articleEl.target = '_blank';
        articleEl.innerHTML = `
          <img src="${imgUrl}" alt="${item.title}" class="article-image" loading="lazy">
          <div class="article-content">
            <h3 class="article-title">${item.title}</h3>
            <div class="article-date">${date}</div>
            <p class="article-excerpt">${excerpt}</p>
          </div>
        `;

        gridEl.appendChild(articleEl);
      });
    } else {
      throw new Error('No items found');
    }
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    loadingEl.textContent = 'Unable to load feed directly.';
    fallbackEl.style.display = 'block';
  }
}

// Initialize
fetchMediumArticles();

// Email anti-spam: ROT13-encoded address decoded at runtime
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

const emailLink = document.getElementById('email-link');
if (emailLink) {
  const encoded = 'gnatnlsno@tznvy.pbz';
  emailLink.addEventListener('click', () => {
    window.location.href = 'mailto:' + rot13(encoded);
  });
  emailLink.style.cursor = 'pointer';
  emailLink.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
    <span>Contact</span>
  `;
}
