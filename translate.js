window.addEventListener('DOMContentLoaded', (event) => {
    const currentLanguage = document.documentElement.lang;
    
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');

    if(currentLanguage === 'pt-br') {
        if(inputName && inputEmail && inputMessage) {
            inputName.placeholder = 'Informe seu nome';
            inputEmail.placeholder = 'Informe seu E-mail';
            inputMessage.placeholder = 'Informe sua mensagem';
        }
    }
    else {
        if(inputName && inputEmail && inputMessage) {
            inputName.placeholder = 'Enter your name here...';
            inputEmail.placeholder = 'Enter your email here...';
            inputMessage.placeholder = 'Enter your message here...';
        }
    }
  });

document.addEventListener('DOMContentLoaded', function () {
  // Verifica se há uma escolha de idioma salva no localStorage
  const savedLanguage = localStorage.getItem('language');

  // Se houver, define o atributo lang de acordo com a escolha salva
  if (savedLanguage) {
      document.documentElement.lang = savedLanguage;
      document.body.classList.add(savedLanguage); // Adiciona a classe do idioma ao corpo
  }

  // Adiciona um ouvinte de evento ao botão para trocar o idioma
  document.getElementById('btnToggleLanguage').addEventListener('click', function () {
      // Obtém o idioma atual
      const currentLanguage = document.documentElement.lang;

      // Troca o idioma e salva no localStorage
      if (currentLanguage === 'pt-br') {
          document.documentElement.lang = 'en';
          localStorage.setItem('language', 'en');
      } else {
          document.documentElement.lang = 'pt-br';
          localStorage.setItem('language', 'pt-br');
      }

      // Remove a classe do idioma anterior e adiciona a classe do novo idioma ao corpo
      document.body.classList.remove(currentLanguage);
      document.body.classList.add(document.documentElement.lang);

      // Recarrega a página
      location.reload();
  });
});