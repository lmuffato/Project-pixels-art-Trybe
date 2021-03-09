let paletteColor = document.querySelector('#color-palette');
let elementTable = document.querySelector('#pixel-board');

// adicionando cores a paleta de cores
function addColorQuadOne() {
  return (paletteColor.children[0].style.backgroundColor = 'black');
}

function addColorQuadTwo() {
  return (paletteColor.children[1].style.backgroundColor = 'blue');
}

function addColorQuadThree() {
  return (paletteColor.children[2].style.backgroundColor = 'brown');
}

function addColorQuadFour() {
  return (paletteColor.children[3].style.backgroundColor = 'aqua');
}

addColorQuadOne();
addColorQuadTwo();
addColorQuadThree();
addColorQuadFour();

// criando tabela
for (let index = 0; index < 25; index += 1 ) {
	let elementDiv = document.createElement('div');
	elementDiv.className = 'pixel';
	elementTable.appendChild(elementDiv)
}


// sites refencia: 
