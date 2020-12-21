function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimationScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
    const windowEightyPercent = window.innerHeight * 0.8;

    function animationScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            const isSectionVisible = (sectionTop - windowEightyPercent) < 0; 
            if(isSectionVisible){
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        });
    }

    window.addEventListener('scroll', animationScroll);
    }    
}
initAnimationScroll();

function initResponsiveness(){
    const navbar = document.querySelector('.navbar-items');
    const menuMobile = document.querySelector('.btn-menu-mobile');

    menuMobile.addEventListener('click', () =>{
        navbar.classList.toggle('open');
    });

    // Remover o menu ao clicar em uma opção
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach((link) => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
        });
    });
};

initResponsiveness();


function initButtonToTop(){
    const buttonToTop = document.querySelector('.toTop');

    function initMillenniumFalcon(event) {
        event.preventDefault();
        home.scrollIntoView({
            behavior: 'smooth'
        });
    }

    buttonToTop.addEventListener('click', initMillenniumFalcon);
}
initButtonToTop();

function initAnimationButtonToTopScroll(){
    function animationScroll(){
        const buttonToTop = document.querySelector('.toTop');
        const home = document.querySelector('.home')
        const homeTop = home.getBoundingClientRect().top;
        const windowEightyPercent = window.innerHeight * 0.3;
        //soma pois os valores depois de homeTop são negativos pois ele é a primeira sessão e tudo vem depois dele.
        const millenniumVisible = (homeTop + windowEightyPercent) < 0;

        if(millenniumVisible){
            buttonToTop.classList.add('ativo');
        } else {
            buttonToTop.classList.remove('ativo');
        }
    }
    window.addEventListener('scroll', animationScroll);
}