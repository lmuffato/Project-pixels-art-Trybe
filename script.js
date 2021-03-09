// window.onload = ;

const pixelBox = document.getElementsByClassName('pixel');

// Retorna a cor selecionada Black
function selectColorBlack() {
  const paletteBlack = document.querySelector('.palette-black');
  paletteBlack.addEventListener('click', function(evento) {
    if (evento.target) {
      colorPixel('black');
    }
  });
  return 'black';
}
selectColorBlack();

// Retorna a cor selecionada red
function selectColorRed() {
  const paletteRed = document.querySelector('.palette-red');
  paletteRed.addEventListener('click', function(evento) {
    if (evento.target) {
      colorPixel('red');
    }
  });
}
selectColorRed();

// Retorna a cor selecionada blue
function selectColorBlue() {
  const paletteBlue = document.querySelector('.palette-blue');
  paletteBlue.addEventListener('click', function(evento) { 
    if (evento.target) {
      colorPixel('blue');
    }
  });
}
selectColorBlue();

// Retorna a cor selecionada green
function selectColorGreen() {
  const paletteGreen = document.querySelector('.palette-green');
  paletteGreen.addEventListener('click', function(evento) {
    if (evento.target) {
      colorPixel('green');
    }
  });
}
selectColorGreen();

// Colore os pixel com o determinado evento target
function colorPixel(color) {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', function () {
      pixelBox[index].style.backgroundColor = color;
    });
  }
}
colorPixel();

// Limpa os pixels e deixa todos branco
function clearPixel() {
  const btnClearPixel = document.getElementById('clear-board');
  btnClearPixel.addEventListener('click', function() {
    for (let index = 0; index < pixelBox.length; index += 1) {
      pixelBox[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }); 
}

clearPixel();