function quadrado() {
  const elementDiv = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'pixel';
    elementDiv.appendChild(elementsDiv);
  }
}

function paletteColor() {
  const colorPalette = document.querySelectorAll('.color');
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', (e) => {
      for (let indice = 0; indice < colorPalette.length; indice += 1) {
        colorPalette[indice].classList.remove('selected');
      }
      e.target.classList.add('selected');
    });
  }
}

paletteColor();

window.addEventListener('load', quadrado, paletteColor);
