import menu from './menu.json';
import './styles.css';
import renderMenu from './templates/card.hbs';
import switchTheme from './theme.js';

const containerMenuCards = document.querySelector('.js-menu');

const cardMarkup = createCardMarcup(menu);

containerMenuCards.insertAdjacentHTML('beforeend', cardMarkup);

function createCardMarcup(menu) {
  return menu.map(renderMenu).join('');
}
