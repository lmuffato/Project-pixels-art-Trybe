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
function selectColorBalck() {
  const paletteBlack = document.querySelector('.palette-black');
  paletteBlack.addEventListener('click', function() {
    console.log(paletteBlack);
  });
  return 'black';
}
selectColorBalck();

// Retorna a cor selecionada red
function selectColorRed() {
  const paletteRed = document.querySelector('.palette-red');
  paletteRed.addEventListener('click', function() {
    console.log(paletteRed)
  });
  return 'red';
}
selectColorRed();

// Retorna a cor selecionada blue
function selectColorBlue() {
  const paletteBlue = document.querySelector('.palette-blue');
  paletteBlue.addEventListener('click', function() {
    console.log(paletteBlue)
  });
  return 'blue';
}
selectColorBlue();

// Retorna a cor selecionada green
function selectColorGreen() {
  const paletteGreen = document.querySelector('.palette-green');
  paletteGreen.addEventListener('click', function() {
    console.log(paletteGreen)
  });
  return 'green';
}
selectColorGreen();


function colorPixel() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', function () {
      pixelBox[index].style.backgroundColor = 'blue';
    });
  }
}

colorPixel();

function clearPixel() {

}

clearPixel();