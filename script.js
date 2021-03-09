window.onload = function pixelsArt() {
  const pixelLine = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const pixel = document.createElement('tr');
    pixelLine.appendChild(pixel);
  }

  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    let indexColumn = 0;
    for (indexColumn; indexColumn < 5; indexColumn += 1) {
      const pixel = document.createElement('td');
      pixelLine.children[indexColumn].appendChild(pixel).className = 'pixel';
    }
  }
};
