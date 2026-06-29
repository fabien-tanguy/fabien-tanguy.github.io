const MEASUREMENT_ID = 'G-NBLK22JJSC';
const CONSENT_KEY = 'fabien-portfolio.analytics-consent';
const CONSENT_DURATION = 180 * 24 * 60 * 60 * 1000;

const allowedEvents = {
  contact_click: { key: 'channel', values: ['linkedin', 'email'] },
  cv_download: { key: 'language', values: ['fr'] },
  project_open: { key: 'project', values: ['boatclarity'] },
  profile_link_click: { key: 'channel', values: ['github'] },
};

let initialized = false;

export function getAnalyticsConsent() {
  try {
    const storedConsent = JSON.parse(localStorage.getItem(CONSENT_KEY));
    const choiceIsValid = ['accepted', 'refused'].includes(
      storedConsent?.choice
    );
    const choiceDate = Date.parse(storedConsent?.date);
    const dateIsValid = Number.isFinite(choiceDate) && choiceDate <= Date.now();
    const isExpired = Date.now() - choiceDate >= CONSENT_DURATION;

    return choiceIsValid && dateIsValid && !isExpired
      ? storedConsent.choice
      : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(choice) {
  if (!['accepted', 'refused'].includes(choice)) return false;

  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ choice, date: new Date().toISOString() })
    );
    return true;
  } catch {
    return false;
  }
}

export function enableAnalytics() {
  if (getAnalyticsConsent() !== 'accepted') return;

  window[`ga-disable-${MEASUREMENT_ID}`] = false;
  if (initialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: 34128000,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.append(script);
  initialized = true;
}

function cookieDomains() {
  const { hostname } = window.location;
  const domains = ['', hostname];
  const isIpAddress = /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname);

  if (hostname.includes('.') && !isIpAddress) domains.push(`.${hostname}`);
  return domains;
}

export function disableAnalytics() {
  window[`ga-disable-${MEASUREMENT_ID}`] = true;

  document.cookie
    .split(';')
    .map((cookie) => cookie.trim().split('=')[0])
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
    .forEach((name) => {
      cookieDomains().forEach((domain) => {
        const domainAttribute = domain ? `; domain=${domain}` : '';
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttribute}; SameSite=Lax`;
      });
    });
}

export function trackEvent(name, params = {}) {
  if (getAnalyticsConsent() !== 'accepted') return;
  if (window[`ga-disable-${MEASUREMENT_ID}`] || !initialized) return;

  const rule = allowedEvents[name];
  if (!rule || !rule.values.includes(params[rule.key])) return;

  window.gtag?.('event', name, { [rule.key]: params[rule.key] });
}
