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

const menuItens = document.querySelectorAll('#menu a[href^="#"]');


menuItens.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const toSection = getScrollTopByHref(event.currentTarget) - 50;

  scrollToPosition(toSection);
}

function scrollToPosition(toSection) {
  window.scroll({
    top: toSection,
    behavior: "smooth"
  });
}