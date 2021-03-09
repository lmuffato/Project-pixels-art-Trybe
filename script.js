window.onload = function () {
let pixelBoard = document.getElementById('pixel-board');

  for (let boardRow = 1; boardRow <= 5; boardRow += 1) {
    let newRow = document.createElement('div');
    newRow.className = 'pixel-row'
    pixelBoard.appendChild(newRow);
    for (let boardColumn = 1; boardColumn <= 5; boardColumn += 1) {
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
      newPixel.style.width = '40px';
      newPixel.style.height = '40px';
      newPixel.style.border = '1px solid black'
      newPixel.style.display = 'inline-block';
      newRow.appendChild(newPixel);
    }
  }
}