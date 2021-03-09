const paletteColor = document.querySelector('#color-palette');
const elementTable = document.querySelector('#pixel-board');

// adicionando cores a paleta de cores
function addColorQuadOne() {
  paletteColor.children[0].style.backgroundColor = 'black';
}

function addColorQuadTwo() {
  paletteColor.children[1].style.backgroundColor = 'blue';
}

function addColorQuadThree() {
  paletteColor.children[2].style.backgroundColor = 'brown';
}

function addColorQuadFour() {
  paletteColor.children[3].style.backgroundColor = 'aqua';
}

addColorQuadOne();
addColorQuadTwo();
addColorQuadThree();
addColorQuadFour();

// criando tabela
for (let index = 0; index < 25; index += 1) {
  const elementDiv = document.createElement('div');
  elementDiv.className = 'pixel';
  elementTable.appendChild(elementDiv);
}
