const btnMenu = document.getElementById('btn-menu');

function toggleMenu(event) {
  if(event.type === 'touchstart') {
    event.preventDefault();
  }

  const nav = document.getElementById('nav');
  nav.classList.toggle('ativo');

  //! ACESSIIBILIDADE
  const menuAtivado = nav.classList.contains('ativo');
  if(menuAtivado){
    event.currentTarget.setAttribute('aria-label', 'Fechar menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
  }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);