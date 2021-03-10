// gerando o quadrado 5x5
function lineSquareCreator(lineLength) {
  const board = document.getElementById('pixel-board');
  for (let i = 0; i < lineLength; i += 1) {
    const lineSquare = document.createElement('div');
    board.appendChild(lineSquare);
    lineSquare.className = 'pixel-line';
  }
  return board;
}
function fillLines(lineLength) {
  for (let i = 0; i < lineLength; i += 1) {
    const line = document.querySelectorAll('.pixel-line');
    for (let k = 0; k < lineLength; k += 1) {
      const square = document.createElement('div');
      square.className = 'pixel';
      line[i].appendChild(square);
    }
  }
  return document.querySelectorAll('.pixel-line');
}
function boardGenerator(lineLength) {
  const square = document.getElementById('pixel-board');
  lineSquareCreator(lineLength);
  fillLines(lineLength);
  return square;
}
const board = boardGenerator(5);
console.log(board);
// eu acho que deu certo

// selecionando...
// consultei documentação https://www.w3schools.com/jsref/prop_element_classlist.asp

function selectClass(color) {
  const selectedElement = document.getElementById(color);
  return selectedElement.classList.add('selected');
}

// colocando o black como cor selecionada no window load
window.onload = selectClass('black');
console.log(document.getElementById('black').classList);
