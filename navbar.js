const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("nav");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }

  nav.classList.toggle("ativo");

  //! ACESSIIBILIDADE
  const menuAtivado = nav.classList.contains("ativo");
  if (menuAtivado) {
    event.currentTarget.setAttribute("aria-label", "Close menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Open menu");
  }
}

btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);

function initScrollSuave() {
  const menuItens = document.querySelectorAll('#menu a[href^="#"]');

  menuItens.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const toSection = getScrollTopByHref(event.currentTarget) - 50;

    scrollToPosition(toSection);
    //fechar o menu quando um item for selecionado
    nav.classList.remove("active");
  }

  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(toSection) {
    window.scroll({
      top: toSection,
      behavior: "smooth",
    });
  }
}

initScrollSuave();

function initAnimationToScroll() {
  const elementosAnimados = document.querySelectorAll("[data-anime]");

  const windowSeventyPercent = window.innerHeight * 0.7;

  function animeToScroll() {
    elementosAnimados.forEach((section) => {
      const sectionHeightTop = section.getBoundingClientRect().top;

      const isElementoVisible = sectionHeightTop - windowSeventyPercent < 0;
      if (isElementoVisible) {
        section.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", animeToScroll);
}

initAnimationToScroll();
