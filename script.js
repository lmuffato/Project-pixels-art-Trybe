function createPixelBoard () {
  const pixelBoard = document.getElementById('pixel-board');
  // Criando os pixels
  for (let boardRow = 1; boardRow <= 5; boardRow += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'pixel-row';
    pixelBoard.appendChild(newRow);
    for (let boardColumn = 1; boardColumn <= 5; boardColumn += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
      newPixel.style.width = '40px';
      newPixel.style.height = '40px';
      newPixel.style.border = '1px solid black';
      newPixel.style.display = 'inline-block';
      newRow.appendChild(newPixel);
    }
  }
}

function selectBlackOnload () {
  document.getElementById('black').classList.add('selected');
}

function addEventListenerToColorPalette () {
  const colorsInPalette = document.getElementsByClassName('color');
  for (color of colorsInPalette) {
    color.addEventListener('click', function (event) {
      // remove the selected class from previous color
      const currentColor = document.getElementsByClassName('selected')[0]
      currentColor.classList.remove('selected');
      const newColor = event.target;
      newColor.classList.add('selected');
    });
  }
}

window.onload = function () {
  createPixelBoard();
  selectBlackOnload();
  addEventListenerToColorPalette();
}
