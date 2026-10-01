import './styles/base.css';
import './styles/sections.css';
import { notesPage, sharedSite } from './content/site.js';
import { renderNotesPage } from './ui/render-page.js';

renderNotesPage(document.querySelector('#app'), sharedSite, notesPage);
