const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

function randomColor() {
  const numbersAndLetters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += numbersAndLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// console.log(randomColor());

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = randomColor();
thirdColor.style.backgroundColor = randomColor();
fourthColor.style.backgroundColor = randomColor();

sessionStorage.setItem('color', 'black');

//Função que ao clicar em uma das cores da paleta é adiconado uma nova classe (selected) para cor clicada.

function addColorSelected() {
  const selected = document.getElementsByClassName('color selected');
  const colors = document.querySelectorAll('.color');

  for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function(event) {
    if (selected.length === 0) {
      event.target.className = 'color selected'
    } else {
      event.target.className = 'color'
    }
  });
  } 
};

addColorSelected();

function addColorToPixel() {
  const selected = document.getElementsByClassName('color selected');
  const colors = document.querySelectorAll('.color');
  const pixels = document.querySelector('#pixel-board');
  const colorPalette = colors[2].style.backgroundColor;

  pixels.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.backgroundColor;
    if (selected.length > 0 && eventTargetColor !== colorPalette) {
      let pixelColor = selected[0].style.backgroundColor;
      event.target.style.backgroundColor = pixelColor;
    } else if (eventTargetColor === colorPalette && selected.length !== 0) {
      event.target.style.color = 'white';
    }
  });
};

addColorToPixel();
