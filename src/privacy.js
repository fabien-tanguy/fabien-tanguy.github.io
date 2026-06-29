import './styles/base.css';
import './styles/sections.css';
import { enableAnalytics, getAnalyticsConsent } from './lib/analytics.js';
import {
  initializeCookieConsent,
  openCookiePreferences,
} from './ui/cookie-consent.js';

initializeCookieConsent();
if (getAnalyticsConsent() === 'accepted') enableAnalytics();

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-cookie-preferences]')) {
    openCookiePreferences();
  }
});
