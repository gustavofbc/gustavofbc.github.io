function displayLogo(){
  const logoContainer = document.getElementById('logo-container');
  const myLogo = document.getElementById('my-logo');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  header.style.display = 'none';
  main.style.display = 'none';
  footer.style.display = 'none';

  setTimeout(() => {
    myLogo.style.opacity = '0';
  }, 3000);

  setTimeout(() => {
      logoContainer.style.display = 'none';
      header.style.display = 'flex';
      main.style.display = 'block';
      footer.style.display = 'flex';
  }, 4500);
}

window.onload = displayLogo;