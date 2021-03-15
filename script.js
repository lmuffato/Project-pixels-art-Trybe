function creatingTitle () {
  const tit = document.querySelector('#title');
  tit.innerHTML = 'Paleta de Cores';
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

function pixelBoard (vertical, horizontal) {
  const sectionMain = document.querySelector('#pixel-board');
  for (let i = 0; i < vertical; i += 1) {
    const createSection = document.createElement('section');
    for (let j = 0; j < horizontal; j +=1) {
      const createDiv = document.createElement('div');
      createDiv.className = 'pixel';
      createSection.appendChild(createDiv);
      sectionMain.appendChild(createSection);
    }
  }
}
pixelBoard(5, 5);