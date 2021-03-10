function colorDeselect() {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
}

function colorSelect(event) {
  colorDeselect();
  event.target.classList.add('selected');
}

function colorPalette() {
  const colors = ['black', 'red', 'green', 'blue'];
  const colorsFather = document.querySelector('#color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    const elementColor = document.createElement('li');

    elementColor.classList.add('color');
    if (index === 0) {
      elementColor.classList.add('selected');
    }
    // Usei uma das dicas como base para minha lógica
    elementColor.addEventListener('click', colorSelect);
    elementColor.style.backgroundColor = `${colors[index]}`;
    colorsFather.appendChild(elementColor);
  }
}
colorPalette();

function pixelColor(event) {
  const element = event.target;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const button = document.querySelector('#clear-board');

  button.style.visibility = 'visible';
  element.style.backgroundColor = selectedColor;
}

function pixelBoard() {
  const pixelsFather = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const pixelRow = document.createElement('tr');

    for (let column = 0; column < 5; column += 1) {
      const pixelColumn = document.createElement('td');

      pixelColumn.addEventListener('click', pixelColor);
      pixelColumn.classList.add('pixel');
      pixelRow.appendChild(pixelColumn);
    }

    pixelsFather.appendChild(pixelRow);
  }
}
pixelBoard();

function clearBoard(event) {
  const element = event.target;
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.backgroundColor = 'white';
  }
  element.style.visibility = 'hidden';
}

function clearButton() {
  const element = document.createElement('button');
  const elementFather = document.querySelector('#color-palette');

  element.id = 'clear-board';
  element.innerText = 'Limpar';
  element.addEventListener('click', clearBoard);
  elementFather.appendChild(element);
}
clearButton();
