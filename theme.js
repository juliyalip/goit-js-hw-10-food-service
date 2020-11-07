export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEL = document.querySelector('body');

const themeSwitch = document.querySelector('#theme-switch-toggle')

console.log(themeSwitch);

themeSwitch.addEventListener('change', changeTheme);

export function changeTheme(event) {
  if (event.target.checked) {
    bodyEL.classList.remove(Theme.LIGHT);
    bodyEL.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark')
  }
  else {
    bodyEL.classList.add(Theme.LIGHT);
    bodyEL.classList.remove(Theme.DARK);
    localStorage.setItem('theme', 'ligth');
  }
}

document.addEventListener('DOMContentLoaded', checkTheme);

export function checkTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    bodyEL.classList.add(Theme.Dark);
    themeSwitch.checked === true;
  }
  else {
    bodyEL.classList.add(Theme.LIGHT);
    themeSwitch.checked === false;
  }
}