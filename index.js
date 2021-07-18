import menuItem from './template/menu-item.hbs'; // функция - Шаблон разметки одного элемента
import allMenu from './template/menu.json'; // Файл с динамическими данными


//=====================================================================
const allMenuMarkup = createMenuItems(allMenu); 

const containerMenu = document.querySelector('.js-menu');

containerMenu.insertAdjacentHTML('beforeend', allMenuMarkup);// добавляет разметку в ДОМ


function createMenuItems(allMenu) {
  return allMenu.map(menuItem).join('');
}
//=============================





