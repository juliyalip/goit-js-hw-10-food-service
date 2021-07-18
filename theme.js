
export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEL = document.querySelector('body');

const themeSwitch = document.querySelector('#theme-switch-toggle')


themeSwitch.addEventListener('change', changeTheme);



export function changeTheme(event) {
  if (event.target.checked) {
    bodyEL.classList.remove(Theme.LIGHT);
    bodyEL.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark');
    }
  else {
    bodyEL.classList.remove(Theme.DARK);
    bodyEL.classList.add(Theme.LIGHT);
   
    localStorage.setItem('theme', 'ligth');// записать пару ключ:значение
   
  }
}

document.addEventListener('DOMContentLoaded', checkTheme);


export function checkTheme() {
  
  if (localStorage.getItem('theme') === 'dark') {
    bodyEL.classList.add(Theme.DARK);
   themeSwitch.checked = true;
  }
  else {
    bodyEL.classList.add(Theme.LIGHT);
    themeSwitch.checked = false;
  }
}




