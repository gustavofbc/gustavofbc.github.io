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
    const windowSeventyPercent = window.innerHeight * 0.7;

    function animationScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            const isSectionVisible = (sectionTop - windowSeventyPercent) < 0; 
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