const paleteColors = document.querySelector('#color-palette');

function generateColors() {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);
  const rgbColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  return rgbColor;
}

function createBox() {
  for (let i = 0; i < 4; i += 1) {
    const boxColor = document.createElement('div');
    boxColor.className = 'color';
    paleteColors.appendChild(boxColor);
    boxColor.style.backgroundColor = generateColors();
  }
}

createBox();
