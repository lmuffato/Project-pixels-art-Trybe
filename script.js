const blackPalette = document.querySelector('.black-palette');
const redPalette = document.querySelector('.red-palette');
const bluePalette = document.querySelector('.blue-palette');
const greenPalette = document.querySelector('.green-palette');
blackPalette.style.backgroundColor = 'black';
redPalette.style.backgroundColor = '#ff6961';
bluePalette.style.backgroundColor = '#3065ac';
greenPalette.style.backgroundColor = '#7d7';

window.onload = () => {
  const blackPallet = document.querySelector('.black-palette');
  blackPallet.className = 'color black-palette selected';
};

// Cria uma div e recebe como parametro o nome da classe da div
function createPixel(className) {
  const pixel = document.createElement('div');
  pixel.className = className;
  return pixel;
}
// Cria uma quebra de linha
function createBreakLine() {
  const breakLine = document.createElement('br');
  return breakLine;
}

// Cria o pixel board dinamicamente
function createBoardPixel(amount) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let line = 0; line < amount; line += 1) {
    for (let index = 0; index < amount; index += 1) {
      const newPixel = createPixel('pixel');
      pixelBoard.appendChild(newPixel);
    }
    const breakLine = createBreakLine();
    pixelBoard.appendChild(breakLine);
  }
}

createBoardPixel(5);

// Pinta os pixels ao clicar neles
function paintPixels() {
  const pixelsBoard = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelsBoard.length; index += 1) {
    pixelsBoard[index].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    });
  }
}

paintPixels();

// Coloca a cor branca em todos o pixels
function clearBoard() {
  const pixelsBoard = document.querySelectorAll('.pixel');
  const erase = document.querySelector('#clear-board');

  for (let index = 0; index < pixelsBoard.length; index += 1) {
    erase.addEventListener('click', () => {
      pixelsBoard[index].style.backgroundColor = 'white';
    });
  }
}

clearBoard();

// Apaga todos os filhos da div pixel-board
function erasePixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
}

// Cria o pixel board com o valor q o usuário digita
function generateBoardPixel() {
  const generateBoard = document.querySelector('#generate-board');
  const boardSize = document.querySelector('#board-size');

  generateBoard.addEventListener('click', () => {
    const board = Number(boardSize.value);
    if (board <= 0 || board > 50) {
      window.alert('Board inválido!');
    } else {
      erasePixelBoard();
      createBoardPixel(board);
      paintPixels();
      clearBoard();
    }
  });
}

generateBoardPixel();

// Remove a classe selected de todos os elementos
function removeSelectedClass() {
  const colorPalette = document.querySelectorAll('.color');

  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].classList.remove('selected');
  }
}

// add a classe selected ao clicar nas em alguma color palette
function setClassSelected() {
  const colorPalette = document.querySelectorAll('.color');

  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (event) => {
      removeSelectedClass();
      event.target.classList.toggle('selected');
    });
  }
}

setClassSelected();
