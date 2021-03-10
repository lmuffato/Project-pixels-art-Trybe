let selectedPalette = 'black';

function clickedPixelElement(event) {
  event.target.style.setProperty('background-color', selectedPalette);
}

const pixels = document.getElementsByClassName('pixel');

function createPixelsListeners() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', clickedPixelElement);
  }
}

window.onload = createPixelsListeners;

const colorPalettes = document.getElementsByClassName('color');

function removeSelected(value) {
  for (let index = 0; index < colorPalettes.length; index += 1) {
    if (value !== colorPalettes[index]) {
      colorPalettes[index].classList.remove('selected');
    }
  }
}

function clickedPaletteElement() {
  this.classList.add('selected');
  selectedPalette = window
    .getComputedStyle(this)
    .getPropertyValue('background-color');
  removeSelected(this);
}

for (let index = 0; index < colorPalettes.length; index += 1) {
  colorPalettes[index].addEventListener('click', clickedPaletteElement);
}

function inputValidation() {
  let inputValue = document.getElementById('board-size').value;
  if (inputValue === '') {
    alert('Board inválido!');
    inputValue = 5;
  }
  if (inputValue > 50) {
    inputValue = 50;
  }
  if (inputValue < 5) {
    inputValue = 5;
  }
  return inputValue;
}

function generateBoard() {
  const inputValue = inputValidation();
  const pixelBoard = document.getElementById('board-body');
  pixelBoard.innerHTML = '';

  for (let indexRow = 0; indexRow < inputValue; indexRow += 1) {
    const boardRow = document.createElement('tr');
    boardRow.classList.add('pixel-row');
    pixelBoard.appendChild(boardRow);
    for (let indexColumn = 0; indexColumn < inputValue; indexColumn += 1) {
      const boardItem = document.createElement('td');
      boardItem.classList.add('pixel');
      boardRow.appendChild(boardItem);
    }
  }
  createPixelsListeners();
}

const vqvButtom = document.getElementById('generate-board');
vqvButtom.addEventListener('click', generateBoard);

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);

// - Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input;

// - O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

// - O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

// - O botão deve conter o texto "VQV";

// - O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

// - O botão deve estar posicionado ao lado do input;

// - Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

// - O novo quadro deve ter todos os pixels preenchidos com a cor branca.
