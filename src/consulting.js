import './styles/base.css';
import './styles/sections.css';
import { consultingPage, sharedSite } from './content/site.js';
import { renderConsultingPage } from './ui/render-page.js';

renderConsultingPage(document.querySelector('#app'), sharedSite, consultingPage);
