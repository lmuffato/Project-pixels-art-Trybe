function creatingTitle () {
  const tit = document.querySelector('#title');
  tit.innerHTML = 'Paleta de Cores';
}
creatingTitle();

function creatingPalleteColors (qtd) {
  for (let i = 0; i < qtd; i += 1) {
    const sectionMain = document.querySelector('section');
    const createDiv = document.createElement('span');
    // cor aleatoria: https://qastack.com.br/programming/1484506/random-color-generator
    const color = '#' + Math.floor (Math.random () * 16777215) .toString (16);
    if (i === 0) {
      createDiv.style.backgroundColor = 'black';
      createDiv.className = 'selected';
      sectionMain.appendChild(createDiv);
    } else {
      createDiv.style.backgroundColor = color;
      createDiv.className = 'color';
      sectionMain.appendChild(createDiv);
    }
  }
}
creatingPalleteColors(4);

function pixelBoard (vertical, horizontal) {
  const sectionMain = document.querySelector('#pixel-board');
  for (let i = 0; i < vertical; i += 1) {
    const createSection = document.createElement('section');
    for (let j = 0; j < horizontal; j += 1) {
      const createDiv = document.createElement('div');
      createDiv.className = 'pixel';
      createSection.appendChild(createDiv);
      sectionMain.appendChild(createSection);
    }
  }
}
pixelBoard(5, 5);


function gettingColorPixel (qtd) {
  const colorSection = document.querySelector('.color');
  const colorSelected = document.querySelector('.selected');
  colorSection.addEventListener('click', function(event) {
    const colorClass = event.target.className;
    if (colorClass.className === 'color') {
      event.target.className = 'selected';
    } else {
      alert('Escolha outra cor para continuar o jogo!');
    }
  })
}
gettingColorPixel(4);