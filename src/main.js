import './styles/base.css';
import './styles/sections.css';
import { site } from './content/site.js';
import {
  enableAnalytics,
  getAnalyticsConsent,
  trackEvent,
} from './lib/analytics.js';
import {
  initializeCookieConsent,
  openCookiePreferences,
} from './ui/cookie-consent.js';
import { renderPage } from './ui/render-page.js';

renderPage(document.querySelector('#app'), site);
initializeCookieConsent();

if (getAnalyticsConsent() === 'accepted') enableAnalytics();

document.addEventListener('click', (event) => {
  const preferencesButton = event.target.closest('[data-cookie-preferences]');
  if (preferencesButton) {
    openCookiePreferences();
    return;
  }

  const analyticsLink = event.target.closest('[data-analytics-event]');
  if (!analyticsLink) return;

  const {
    analyticsEvent,
    analyticsChannel,
    analyticsLanguage,
    analyticsProject,
  } = analyticsLink.dataset;
  const controlledParams = {
    channel: analyticsChannel,
    language: analyticsLanguage,
    project: analyticsProject,
  };

  trackEvent(analyticsEvent, controlledParams);
});
