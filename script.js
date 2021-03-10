// window.onload = function () {



// }

const pixelBox = document.getElementsByClassName('pixel');
const paletasDeCor = document.querySelectorAll('#color-palette div')
const paletteBlack = document.querySelector('.palette-black');
const paletteRed = document.querySelector('.palette-red');
const paletteBlue = document.querySelector('.palette-blue');
const paletteGreen = document.querySelector('.palette-green');

function classColor() {
  for (let index = 0; index < paletasDeCor.length; index += 1) {
    paletasDeCor[index].classList.add('color');
    if (index === 0) {
      paletasDeCor[index].classList.add('paletteBlack', 'selected')
      paletasDeCor[index].style.backgroundColor = 'black'
    } else if (index === 1) {
      paletasDeCor[index].classList.add('paletteRed')
      paletasDeCor[index].style.backgroundColor = 'red'
    } else if (index === 2) {
      paletasDeCor[index].classList.add('paletteGreen')
      paletasDeCor[index].style.backgroundColor = 'green'
    } else {
      paletasDeCor[index].classList.add('paletteBlue')
      paletasDeCor[index].style.backgroundColor = 'blue'
    }
  }
}
classColor();

// // Retorna a cor selecionada Black
// function selectColorBlack() {
//   const paletteBlack = document.querySelector('.palette-black');
//   paletteBlack.addEventListener('click', function(evento) {
//     if (evento.target) {
//       colorPixel('black');
//       console.log('click no Preto');
//     }
//   });
// }
// selectColorBlack();

// // Retorna a cor selecionada red
// function selectColorRed() {
//   const paletteRed = document.querySelector('.palette-red');
//   paletteRed.addEventListener('click', function(evento) {
//     if (evento.target) {
//       colorPixel('red');
//       console.log('click no Vermelho');
//     }
//   });
// }
// selectColorRed();

// // Retorna a cor selecionada blue
// function selectColorBlue() {
//   const paletteBlue = document.querySelector('.palette-blue');
//   paletteBlue.addEventListener('click', function(evento) { 
//     if (evento.target) {
//       colorPixel('blue');
//       console.log('click no Azul');
//     }
//   });
// }
// selectColorBlue();

// // Retorna a cor selecionada green
// function selectColorGreen() {
//   const paletteGreen = document.querySelector('.palette-green');
//   paletteGreen.addEventListener('click', function(evento) {
//     if (evento.target) {
//       colorPixel('green');
//       console.log('click no Verde');
//     }
//   });
// }
// selectColorGreen();

// Função que vai selecionar todas paletas num For
function selectColorsPalette() {
  for (let index = 0; index < paletasDeCor.length; index += 1) {
    paletasDeCor[index].addEventListener('click', function () {
      if (index === 0) {
        colorPixel('black');
        paletasDeCor[0].classList.add('selected');
        paletasDeCor[1].classList.remove('selected');
        paletasDeCor[2].classList.remove('selected');
        paletasDeCor[3].classList.remove('selected');
      } else if (index === 1) {
        colorPixel('red');
        paletasDeCor[0].classList.remove('selected');
        paletasDeCor[1].classList.add('selected');
        paletasDeCor[2].classList.remove('selected');
        paletasDeCor[3].classList.remove('selected');
      } else if (index === 2) {
        colorPixel('green');
        paletasDeCor[0].classList.remove('selected');
        paletasDeCor[1].classList.remove('selected');
        paletasDeCor[2].classList.add('selected');
        paletasDeCor[3].classList.remove('selected');
      } else {
        colorPixel('blue');
        paletasDeCor[0].classList.remove('selected');
        paletasDeCor[1].classList.remove('selected');
        paletasDeCor[2].classList.remove('selected');
        paletasDeCor[3].classList.add('selected');
      }
    });
  }
}
selectColorsPalette();


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