// Função que retorna uma cor aleatória
function randomColor() {
  const numbersAndLetters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += numbersAndLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

firstColor.style.backgroundColor = '#000000'; // A primeira cor da palleta é preta
secondColor.style.backgroundColor = randomColor();
thirdColor.style.backgroundColor = randomColor();
fourthColor.style.backgroundColor = randomColor();

// Função que ao clicar em uma das cores da paleta é adiconado uma nova classe (selected) para cor clicada.
function addColorSelected() {
  const colors = document.querySelectorAll('.color');
  const initialColorBlack = document.querySelectorAll('.color')[0];
  initialColorBlack.className = 'color selected';

  for (let j = 0; j < colors.length; j += 1) {
    colors[j].addEventListener('click', function (event) {
      for (let k = 0; k < colors.length; k += 1) {
        colors[k].className = 'color';
      }
      event.target.className = 'color selected';
    });
  }
}

addColorSelected();

// Função que ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta (class selected) faz com que o pixel seja preenchido com a cor selecionada
function addColorToPixel() {
  const selected = document.getElementsByClassName('selected');
  const colors = document.querySelectorAll('.color');
  const pixels = document.querySelector('#pixel-board');

  pixels.addEventListener('click', function (event) {
    const eventTargetColor = event.target.style.backgroundColor;
    for (let i = 0; i < colors.length; i += 1) {
      const colorPalette = colors[i].style.backgroundColor;
      if (selected.length > 0 && eventTargetColor !== colorPalette) {
        const pixelColor = selected[0].style.backgroundColor;
        event.target.style.backgroundColor = pixelColor;
      }
    }
  });
}

addColorToPixel();

// Função para limpar todos os quadro preenchidos;
function clearFrames() {
  const allPixels = document.querySelectorAll('.pixel');

  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

const clearButton = document.querySelector('#clear-board');
clearButton.addEventListener('click', clearFrames);
