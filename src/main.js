import './style.css';

// Tab Navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.content-section');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and sections
    tabBtns.forEach((b) => b.classList.remove('active'));
    sections.forEach((s) => s.classList.remove('active'));

    // Add active class to clicked button
    btn.classList.add('active');

    // Show corresponding section
    const tabName = btn.dataset.tab;
    const section = document.getElementById(tabName);
    if (section) {
      section.classList.add('active');
    }
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
