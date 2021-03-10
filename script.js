const colorPallet = document.querySelector('#pixel-board');
function adicionaPixel(number) {
  for (let i = 0; i < number; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    colorPallet.appendChild(pixel);
  }
}
// Requisitos 6 e 7
function modifyColorToColorSelected(colorSelected) {
  const color = document.querySelectorAll('.color');
  if (colorSelected === undefined) {
    color[0].className = `${color[0].className} selected`;
  } else {
    const selecionada = document.querySelector(`.${colorSelected}`);
    selecionada.className = `${selecionada.className} selected`;
  }
}

function removeColorSelectedBerfore() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].className = color[i].className.replace(/ selected/, '');
  }
}

function sendColorString(evento) {
  removeColorSelectedBerfore();
  modifyColorToColorSelected(evento.target.className.split(' ')[1]);
}

function selectColor() {
  const color = document.querySelectorAll('.color');
  color.forEach(function (item) {
    item.addEventListener('click', sendColorString);
  });
}

function getColor() {
  const colors = document.querySelector('.selected');
  return colors.className.split(' ')[1];
}

function preenche() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function (event) {
      const evento = event.target;
      evento.style.backgroundColor = getColor();
    });
  }
}

function clear() {
  const button = document.querySelector('#clear');
  const pixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', function () {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

adicionaPixel(25);
modifyColorToColorSelected();
selectColor();
preenche();
clear();
