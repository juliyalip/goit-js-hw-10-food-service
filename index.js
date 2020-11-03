import theme from './theme';
import menuItem from './template/menu-item.hbs'; // vernet function 1 elemenl
import menuItems from './template/menu-items.hbs'; // vernet function allMenu
import cartFoods from './template/menu.json';


const allMenuMarkup = createMenuItems(cartFoods); // razmetka html
console.log(allMenuMarkup);

const containerMenu = document.querySelector('.js-menu');
console.log(typeof(allMenuMarkup))
containerMenu.insertAdjacentHTML('beforeend', allMenuMarkup);


function createMenuItems(cartFoods) {
  return menuItems(cartFoods);
}