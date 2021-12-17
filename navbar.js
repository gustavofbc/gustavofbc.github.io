const btnMenu = document.getElementById('btn-menu');

function toggleMenu(params) {
  const nav = document.getElementById('nav');
  nav.classList.toggle('ativo');
}

btnMenu.addEventListener('click', toggleMenu);