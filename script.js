// window.onload = ?

const btnPaletteBlack = document.querySelector('.selected');
const pixelBox = document.getElementsByClassName('pixel');
console.log(pixelBox);

function selectColor() {

  document.getElementsByClassName('selected');

  // btnPaletteBlack.addEventListener('click', function () {

  // });
}
// Retorna a cor selecionada Black
function selectColorBlack() {
  const paletteBlack = document.querySelector('.palette-black');
  paletteBlack.addEventListener('click', function(evento) {
    if (evento.target) {
      colorPixel('black')
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
      colorPixel('red')
    }
  });
}
selectColorRed();

// Retorna a cor selecionada blue
function selectColorBlue() {
  const paletteBlue = document.querySelector('.palette-blue');
  paletteBlue.addEventListener('click', function(evento) { 
    if (evento.target) {
      colorPixel('blue')
    }
  });
}
selectColorBlue();

// Retorna a cor selecionada green
function selectColorGreen() {
  const paletteGreen = document.querySelector('.palette-green');
  paletteGreen.addEventListener('click', function(evento) {
    if (evento.target) {
      colorPixel('green')
    }
  });
}
selectColorGreen();


function colorPixel(color) {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', function () {
      pixelBox[index].style.backgroundColor = color;
    });
  }
}

colorPixel();

function clearPixel() {
  const btnClearPixel = document.getElementById('clear-board');
  btnClearPixel.addEventListener('click', function() {
    for (let index = 0; index < pixelBox.length; index += 1) {
      pixelBox[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }); 
}

clearPixel();