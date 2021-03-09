
// gerando o quadrado 5x5
function lineSquareCreator (lineLength) {
  for (let i = 0; i < lineLength; i += 1) {
    let lineSquare = document.createElement('div');
    document.getElementById('pixel-board').appendChild(lineSquare);
    lineSquare.className = 'pixel-line';
  }
  return document.getElementById('pixel-board');
}
function fillLines (lineLength) {
  for (let i = 0; i < lineLength; i += 1) {
    for (let k = 0; k < lineLength; k += 1) {
      let square = document.createElement('div');
      square.className = 'pixel';
      let line = document.querySelectorAll('.pixel-line')[i].appendChild(square);
    }
  }
  return document.querySelectorAll('.pixel-line');
}
function boardGenerator (lineLength) {
  let square = document.getElementById('pixel-board');
  lineSquareCreator (lineLength);
  fillLines (lineLength);
  return square
}
let board = boardGenerator (5)
console.log(board) 
// eu acho que deu certo



