function createColorPalette(colors) {
  const headBox = document.querySelectorAll('.color'); // Busca as caixas de cores no html

  for (let index = 0; index < headBox.length; index += 1) {
    headBox[index].style.backgroundColor = colors[index];
  }
}
createColorPalette(['black', 'blue', 'red', 'yellow']);


function setColor(box) {
  const selectedColor = document.getElementsByClassName('selected');
  selectedColor.className = 'color';
  box.className = 'color selected';
}
const paletteColors = document.getElementsByClassName('color');
for (let index = 0; index < paletteColors.length; index += 1) {
  paletteColors[index].addEventListener('click', (event) => {
    if (event.target.className === 'color') {
      setColor(paletteColors[index]);
    }
  })
}


function setButton() {
  let button = document.getElementById('clear-board');
  let pixels = document.getElementsByClassName('pixel');

  button.addEventListener('click', function() {
    pixels.style.backgroundColor = 'white';
  })
}


// function setColor() {
//   const paletteColor = document.querySelectorAll('.color');
//   const previousColor = document.getElementsByClassName('selected');

//   for (let index = 0; index < paletteColor.length; index += 1) {
//     paletteColor[index].addEventListener('click', function() {
//       paletteColor[index].classList.add = 'selected';
//       previousColor.className = 'color';
//     })
//   }
//   let selectedColor = document.getElementsByClassName('selected');
//   return selectedColor;
// }