import theme from './theme';
import saveLocalStorage from './theme';
import menuItem from './template/menu-item.hbs'; // функция - Шаблон разметки одного элемента
import menuItems from './template/menu-items.hbs'; // функция - Шаблон всего меню
import cartFoods from './template/menu.json'; // Файл с динамическими данными
import changeTheme from './theme';


//=====================================================================
const allMenuMarkup = createMenuItems(cartFoods); // результат работы функции разметки одного элемента
console.log(allMenuMarkup);

const containerMenu = document.querySelector('.js-menu');

containerMenu.insertAdjacentHTML('beforeend', allMenuMarkup);// добавляет разметку в ДОМ


function createMenuItems(cartFoods) {
  return cartFoods.map(menuItem).join('');// ili - menuItems(cartFoods);
}
//=============================





