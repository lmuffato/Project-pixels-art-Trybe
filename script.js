function quadrado() {
  const elementDiv = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'pixel';
    elementDiv.appendChild(elementsDiv);
  }
}

quadrado();

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
// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta, faz com que o pixel seja preenchido com a cor selecionada.
function pixelColor() {
  const pixel = document.querySelectorAll('.pixel');
  // console.log(pixel);
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (e) => {
      const color = document.querySelector('.selected');
      e.target.style.backgroundColor = color.style.backgroundColor;
    });
  }
}
pixelColor();
