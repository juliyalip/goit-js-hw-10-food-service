import theme from './theme';
import menuItem from './template/menu-item.hbs'; // функция - Шаблон разметки одного элемента
import menuItems from './template/menu-items.hbs'; // функция - Шаблон всего меню
import cartFoods from './template/menu.json'; // Файл с динамическими данными


const themeSwitch = document.querySelector('#theme-switch-toggle')// чекбокс

console.log(menuItems({ cartFoods }));


//=====================================================================
const allMenuMarkup = createMenuItems(cartFoods); // результат работы функции разметки одного элемента
console.log(allMenuMarkup);

const containerMenu = document.querySelector('.js-menu');

containerMenu.insertAdjacentHTML('beforeend', allMenuMarkup);// добавляет разметку в ДОМ


function createMenuItems(cartFoods) {
  return menuItems(cartFoods)// ili - cartFoods.map(menuItem).join('');
}
//=============================
const body = document.querySelector('body')



//function pp() {
 // if (themeSwitch.checked === true)

//}

//const body = document.querySelector('body')
//body.classList.add('dark-theme')