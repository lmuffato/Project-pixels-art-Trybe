function creatingTitle () {
  const tit = document.querySelector('#title');
const txt = tit.innerHTML = 'Paleta de Cores';
const bodymain = document.querySelector('body');
bodymain.appendChild(tit);
}
creatingTitle();

