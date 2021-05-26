import '../src/styles.css';
import menu from '../src/menu.json';
import renderMenu from '../src/templates/card.hbs';
import switchTheme from './theme.js';
const ghpages = require('gh-pages');

const containerMenuCards = document.querySelector('.js-menu');

const cardMarkup = createCardMarcup(menu);

containerMenuCards.insertAdjacentHTML('beforeend', cardMarkup);

function createCardMarcup(menu) {
  return menu.map(renderMenu).join('');
}
