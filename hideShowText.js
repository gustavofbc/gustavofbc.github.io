function showFullText(card) {
  const textFull = card.querySelector('.text-full');
  const btnShowMore = card.querySelector('.summary');
  const btnShowLess = card.querySelector('#btn-summary');

  textFull.classList.remove('hidden');
  btnShowMore.style.display = 'none';
  btnShowLess.style.display = 'flex';
}

function hideFullText(card) {
  const textFull = card.querySelector('.text-full');
  const btnShowMore = card.querySelector('.summary');
  const btnShowLess = card.querySelector('#btn-summary');

  textFull.classList.add('hidden');
  btnShowMore.style.display = 'inline';
  btnShowLess.style.display = 'none';
}