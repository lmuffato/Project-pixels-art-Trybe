function colorPalette() {
  const colors = ['black', 'red', 'green', 'blue'];
  const colorsFather = document.querySelector('#color-palette');

  for (let index = 0; index < colors.length; index += 1) {
    const elementColor = document.createElement('li');

    elementColor.classList.add('color');
    elementColor.style.backgroundColor = `${colors[index]}`;
    colorsFather.appendChild(elementColor);
  }
}
colorPalette();

function pixelBoard() {
  const pixelsFather = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const pixelRow = document.createElement('tr');

    for (let column = 0; column < 5; column += 1) {
      const pixelColumn = document.createElement('td');

      pixelColumn.classList.add('pixel');
      pixelRow.appendChild(pixelColumn);
    }

    pixelsFather.appendChild(pixelRow);
  }
}
pixelBoard();
