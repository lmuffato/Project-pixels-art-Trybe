function createColorPalette(colors) {
  const headBox = document.querySelectorAll('.color'); // Busca as caixas de cores no html

  for (let index = 0; index < headBox.length; index += 1) {
    headBox[index].style.backgroundColor = colors[index];
  }
}
createColorPalette(['black', 'blue', 'red', 'yellow']);

// const paletteColors = document.getElementsByClassName('color');
// for (let index = 0; index < paletteColors.length; index += 1) {
//   paletteColors[index].addEventListener('click', (event) => {
//     if (event.target.className === 'color') {
//       setColor(paletteColors[index]);
//     }
//   })
// };
// function setColor(color) {
//   const selectedColor = document.getElementsByClassName('selected');
//   selectedColor.className = 'color';
//   color.className = 'color selected';
// }

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
box1.addEventListener('click', function () {
  box1.classList.add('selected');
  box2.classList.remove('selected');
  box3.classList.remove('selected');
  box4.classList.remove('selected');
});
box2.addEventListener('click', function () {
  box1.classList.remove('selected');
  box2.classList.add('selected');
  box3.classList.remove('selected');
  box4.classList.remove('selected');
});
box3.addEventListener('click', function () {
  box1.classList.remove('selected');
  box2.classList.remove('selected');
  box3.classList.add('selected');
  box4.classList.remove('selected');
});
box4.addEventListener('click', function () {
  box1.classList.remove('selected');
  box2.classList.remove('selected');
  box3.classList.remove('selected');
  box4.classList.add('selected');
});

const button = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
button.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
})
 
// function setColor() {
//   const paletteColor = document.('.color');
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
