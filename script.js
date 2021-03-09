window.onload = function () {
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

  document.getElementById('black').classList.add('selected');
};
