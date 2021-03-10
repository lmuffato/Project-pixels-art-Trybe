window.onload = function () {
  palleteColor(collorsPallete);
};

const board = document.querySelector('#pixel-board');
const collorsPallete = ['black', 'red', 'orange', 'yellow'];
const pallete = document.querySelector('#color-palette');
const clearBoard = document.querySelector('#clear-board');

function changeClass(elementTarget) {
  const element = document.getElementsByClassName('selected');
  for (let index = 0; index < element.length; index += 1) {
    element[index].setAttribute('class', 'color');
  }
  elementTarget.target.setAttribute('class', 'color selected');
}

function palleteColor(collors) {
  for (let index = 0; index < collors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    if (collors[index] === 'black') {
      color.className = 'color selected';
      color.style.background = 'black';
    } else {
      color.style.background = `rgb(${Math.floor(Math.random() * 255)},
       ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
    pallete.appendChild(color);
    color.addEventListener('click', changeClass);
  }
}

function changeColor(elementTarget) {
  const element = document.getElementsByClassName('selected');
  const color = element[0].getAttribute('style');
  const pixel = document.querySelectorAll('.pixel');
  console.log(pixel);
  elementTarget.target.setAttribute('style', `${color}`);
}

function creatBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const tableRow = document.createElement('tr');
    board.appendChild(tableRow);
    for (let index2 = 0; index2 < size; index2 += 1) {
      const rowCell = document.createElement('td');
      rowCell.className = 'pixel';
      tableRow.appendChild(rowCell);
      rowCell.addEventListener('click', changeColor);
    }
  }
}

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].removeAttribute('style');
    pixel[index].style.background = 'white';
  }
}

// function wipeOutBoard() {
//   document.getElementById('board-size').reset();
// }

function verifyBoardSize(boardSizeParameters) {
  let boardSize = boardSizeParameters;

  if (boardSize <= 5) {
    boardSize = 5;
    console.log(boardSize);
    creatBoard(boardSize);
  } else if (boardSize > 5) {
    console.log(boardSize);
    creatBoard(boardSize);
  } else if (boardSize > 50) {
    boardSize = 50;
    console.log(boardSize);
    creatBoard(boardSize);
  } else {
    alert('Board inválido');
  }
}

function boardGenerator() {
  const boardSize = document.querySelector('#board-size').value;
  verifyBoardSize(boardSize);
  // document.getElementById('board-size').reset();
}

const generateBoard = document.getElementById('generate-board');
generateBoard.addEventListener('click', boardGenerator);
clearBoard.addEventListener('click', clear);
