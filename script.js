function createPixBox(size) {
  const getPixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < size; index += 1) {
    const pixelLinha = document.createElement('tr');
    pixelLinha.className = 'linha';

    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelColuna = document.createElement('th');
      pixelColuna.className = 'pixel';
      pixelLinha.appendChild(pixelColuna);
      getPixelBoard.appendChild(pixelLinha);
    }
  }
}

createPixBox(5);