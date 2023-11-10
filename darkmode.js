document.addEventListener('DOMContentLoaded', () => {
  const preferenceMode = localStorage.getItem('mode');
  const bodySelector = document.querySelector('body');

  if (preferenceMode === 'dark') {
    bodySelector.classList.add('dark-mode');
  } else {
    bodySelector.classList.remove('dark-mode');
  }
});

function toggleDarkMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
}

const btnMode = document.querySelector('#btn-mode');
btnMode.addEventListener('click', toggleDarkMode);
