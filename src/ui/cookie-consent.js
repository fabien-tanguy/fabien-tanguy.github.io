import {
  disableAnalytics,
  enableAnalytics,
  getAnalyticsConsent,
  setAnalyticsConsent,
} from '../lib/analytics.js';

let banner;

function closeBanner() {
  banner?.remove();
  banner = null;
}

function handleChoice(choice) {
  setAnalyticsConsent(choice);

  if (choice === 'accepted') enableAnalytics();
  else disableAnalytics();

  closeBanner();
}

function showBanner(shouldFocus = false) {
  closeBanner();
  banner = document.createElement('section');
  banner.className = 'cookie-consent';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-labelledby', 'cookie-consent-title');
  banner.setAttribute('aria-describedby', 'cookie-consent-description');
  banner.innerHTML = `
    <div class="cookie-consent-content">
      <div>
        <h2 id="cookie-consent-title">Vos préférences de confidentialité</h2>
        <p id="cookie-consent-description">Ce site utilise Google Analytics, uniquement avec votre accord, afin de mesurer sa fréquentation et d’améliorer son contenu. Aucun cookie de mesure n’est déposé avant votre choix.</p>
        <a href="./privacy.html">En savoir plus</a>
      </div>
      <div class="cookie-consent-actions">
        <button type="button" class="cookie-choice" data-consent-choice="refused">Refuser</button>
        <button type="button" class="cookie-choice" data-consent-choice="accepted">Accepter les statistiques</button>
      </div>
    </div>`;

  banner.addEventListener('click', (event) => {
    const button = event.target.closest('[data-consent-choice]');
    if (button) handleChoice(button.dataset.consentChoice);
  });

  document.body.append(banner);
  if (shouldFocus) banner.querySelector('button')?.focus();
}

export function initializeCookieConsent() {
  if (getAnalyticsConsent() === null) showBanner();
}

export function openCookiePreferences() {
  showBanner(true);
}
