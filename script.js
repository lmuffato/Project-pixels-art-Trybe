const colorsObj = {
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

// Req. 01
function addColorsPalette(colors) {
  const colorPalette = document.getElementById('color-palette');

  Object.keys(colors).forEach((key) => {
    const newColor = document.createElement('div');
    newColor.className = 'color';
    newColor.style.backgroundColor = key;
    colorPalette.appendChild(newColor);
  });
}

// Req. 04
function makePixelBoard(grid) {
  const pixels = {};
  const containerPixelBoard = document.getElementById('pixel-board');
  containerPixelBoard.style.width = 'fit-content';
  containerPixelBoard.style.display = 'grid';
  containerPixelBoard.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;

  for (let line = 1; line <= grid; line += 1) {
    pixels[line] = {};
    for (let column = 1; column <= grid; column += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.width = '40px';
      newPixel.style.height = '40px';
      pixels[line][column] = 'white';
      containerPixelBoard.appendChild(newPixel);
    }
  }
  console.log(pixels);
}

window.onload = () => {
  addColorsPalette(colorsObj);
  makePixelBoard(5);
};
