function creatingTitle () {
  const tit = document.querySelector('#title');
  const txt = tit.innerHTML = 'Paleta de Cores';
}
creatingTitle();

function creatingPalleteColors (qtd) {
  for (let i = 0; i < qtd; i += 1) {
    const sectionMain = document.querySelector('section');
    const createDiv = document.createElement('div');
    createDiv.className = 'color';
    // cor aleatoria: https://qastack.com.br/programming/1484506/random-color-generator
    const color = '#' + Math.floor (Math.random () * 16777215) .toString (16);
    if (i == 0) {
      createDiv.style.backgroundColor = 'Black';
      sectionMain.appendChild(createDiv);
    } else {
      createDiv.style.backgroundColor = color;
      sectionMain.appendChild(createDiv);
    }
  }
}
creatingPalleteColors(4);

