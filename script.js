// requisito 6
function blackSelected() {
  const blackColor1 = document.getElementById('color1');
  blackColor1.className += ' selected';
}

// requisito 7
function selectedColors() {
  const setColors = document.getElementsByClassName('color');
  for (let index = 0; index < setColors.length; index += 1) {
    setColors[index].addEventListener('click', (event) => {
      if (event.target.className === 'color') {
        const colorSelected = document.querySelector('.selected');
        colorSelected.className = 'color';
        setColors[index].className = 'color selected';
      }
    });
  }
}

// // requisito 8
// function colorizedPixel() {
//   const pixelArray = document.querySelectorAll('#pixel-board');
//   for (let index = 0; index < pixelArray.length; index += 1) {
//     pixelArray[index].addEventListener('click', (ev) => {
//       const clickPixel = ev.target;
//       const selecionaCor = document.querySelector('.color selected').style.backgroundColor;
//       clickPixel.style.backgroundColor = selecionaCor;
//     });
//   }
// }

// requisito 9
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  blackSelected();
  selectedColors();
  clearBoard();
};
