import theme from './theme';
import menuItem from './template/menu-item.hbs'; // функция - Шаблон разметки одного элемента
import menuItems from './template/menu-items.hbs'; // функция - Шаблон всего меню
import cartFoods from './template/menu.json'; // Файл с динамическими данными


const themeSwitch = document.querySelector('#theme-switch-toggle')// чекбокс


//=====================================================================
const allMenuMarkup = createMenuItems(cartFoods); // razmetka html
console.log(allMenuMarkup);

const containerMenu = document.querySelector('.js-menu');

containerMenu.insertAdjacentHTML('beforeend', allMenuMarkup);


function createMenuItems(cartFoods) {
  return cartFoods.map(cardFood =>  menuItem(cardFood)).join('');
}
//=============================
const body = document.querySelector('body')



//function pp() {
 // if (themeSwitch.checked === true)

//}

//const body = document.querySelector('body')
//body.classList.add('dark-theme')