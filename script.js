const painting = document.querySelector('#pixel-board');

for (let index = 0; index < 5; index += 1) {
  const pixels = document.createElement('div');
  pixels.className = 'lines';
  painting.appendChild(pixels);
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const pixelLines = document.createElement('div');
    pixelLines.className = 'pixel';
    pixels.appendChild(pixelLines);
  }
}

let colorSave = document.getElementById('black');
colorSave = localStorage;
