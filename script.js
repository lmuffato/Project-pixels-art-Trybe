function verifyBoardSize(number) {
  if (number < 5) {
    const newNumber = 5;
    return newNumber;
  }
  if (number > 50) {
    const newNumber = 50;
    return newNumber;
  }
  return number;
}

function setPixels(number) {
  const newNumber = verifyBoardSize(number);
  for (let index = 1; index <= newNumber; index += 1) {
    const divLine = document.createElement('div');
    const line = document.getElementById('pixel-board');
    divLine.className = 'pixel-line';
    line.appendChild(divLine);
    for (let column = 1; column <= newNumber; column += 1) {
      const divColumn = document.createElement('div');
      divColumn.className = 'pixel';
      divLine.appendChild(divColumn);
    }
  }
}

function setBlackSelected() {
  const blackPalette = document.getElementById('black-palette');
  blackPalette.className += ' selected';
}

function setSelectedTask() {
  const paletteColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', (event) => {
      if (event.target.className === 'color') {
        const selectedTask = document.querySelector('.selected');
        selectedTask.className = 'color';
        paletteColors[index].className = 'color selected';
      }
    });
  }
}

function setPixelColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const selectedTask = document.querySelector('.selected');
      const color = window.getComputedStyle(selectedTask).backgroundColor;
      pixels[index].style.backgroundColor = color;
    });
  }
}

function deleteBoard() {
  const board = document.getElementById('pixel-board');
  document.body.removeChild(board);
  const section = document.createElement('section');
  section.id = 'pixel-board';
  document.body.appendChild(section);
}

function createInputText() {
  const header = document.querySelector('#header');
  const input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = 1;
  input.style.padding = '5px';
  input.placeholder = 'Escolha o número de pixels';
  input.style.marginLeft = '550px';
  input.style.marginBottom = '15px';
  header.appendChild(input);
}

function createInputBtn() {
  const header = document.querySelector('#header');
  const btnInput = document.createElement('button');
  btnInput.id = 'generate-board';
  btnInput.innerText = 'VQV';
  header.appendChild(btnInput);
  btnInput.style.marginLeft = '20px';
  btnInput.style.padding = '10px';
}

function createBoardSize() {
  createInputText();
  createInputBtn();
  const btn = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  btn.addEventListener('click', () => {
    if (input.value.length === 0) {
      alert('Board inválido!');
    } else {
      const number = input.value;
      deleteBoard();
      setPixels(number);
      input.value = '';
    }
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.length > 0) {
     const number = input.value;   
     deleteBoard();
     setPixels(number); 
     input.value = '';
    }
  });
}

function createClearBtn() {
  const header = document.querySelector('#header');
  const btnClear = document.createElement('button');
  btnClear.id = 'clear-board';
  btnClear.innerText = 'Limpar';
  header.appendChild(btnClear);
}

function clearBoard() {
  const btn = document.getElementById('clear-board');
  btn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

function generateRandomColors() {
  const section = document.getElementById('color-palette');
  for (let index = 1; index <= 3 ; index += 1) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);  
    const span = document.createElement('span');
    span.className = 'color';
    span.style.backgroundColor = 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')';
    section.appendChild(span);
  }
}

window.onload = () => {
  generateRandomColors();
  setPixels(5);
  setBlackSelected();
  setSelectedTask();
  setPixelColor();
  createBoardSize();
  createClearBtn();
  clearBoard();
};
