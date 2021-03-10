function createColorPalette(colors) {
  const headBox = document.querySelectorAll('.color'); // Busca as caixas de cores no html

  for (let index = 0; index < headBox.length; index += 1) {
    headBox[index].style.backgroundColor = colors[index];
  }
}
createColorPalette(['black', 'blue', 'red', 'yellow']);

function setColor() {
  const paletteColor = document.getElementsByClassName('color');

  for (let index = 0; index < paletteColor.length; index += 1) {
    paletteColor[index].addEventListener('click', () => {
      for (let index2 = 0; index2 < paletteColor.length; index2 += 1) {
        paletteColor[index2].classList.remove('selected');
      }
      paletteColor[index].classList.add('selected');
    });
  }
}
setColor();

function paintBoard() {
  const pixelsList = document.querySelector('#pixel-board');

  pixelsList.addEventListener('click', function(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  })
}
paintBoard();

// function paintBoard() {
//   const pixelsList = document.querySelectorAll('.pixel');
//   const selectedPixel = document.querySelectorAll('selected');

//   for (let index = 0; index < pixelsList.length; index += 1) {
//     pixelsList[index].addEventListener('click', () => {
//       pixelsList[index].style.backgroundColor = selectedPixel.style.backgroundColor;
      
//       if (selectedPixel.classList.contains('box1')) {
//         pixelsList[index].style.backgroundColor = 'black';
//       } else if (selectedPixel.classList.contains('box2')) {
//         pixelsList[index].style.backgroundColor = 'blue';
//       } else if (selectedPixel.classList.contains('box3')) {
//         pixelsList[index].style.backgroundColor = 'red';
//       } else if (selectedPixel.classList.contains('box4')) {
//         pixelsList[index].style.backgroundColor = 'yellow';
//       }
//     })
//   }
// }
// paintBoard();

// Requisito 9
const button = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');
button.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
