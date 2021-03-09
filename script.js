function squareColors() {
  const square1 = document.getElementById('color-black');
  square1.style.backgroundColor = 'black';

  const square2 = document.getElementById('color-red');
  square2.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square3 = document.getElementById('color-green');
  square3.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square4 = document.getElementById('color-blue');
  square4.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;
}

function listenPaletteSection() {
  const colorPalette = document.querySelector('#color-palette');

  colorPalette.addEventListener('click', (event) => {
    const colorDivsList = document.querySelectorAll('.color');

    for (let i = 0; i < colorDivsList.length; i += 1) {
      colorDivsList[i].classList.remove('selected');
    }

    event.target.classList.add('selected');
  });
}

function selectColor() {
  const pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.color.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
  });
}

function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function clearBtnFunction() {
  const clearBtn = document.getElementById('clear-board');

  clearBtn.addEventListener('click', limpar);
}

window.onload = function () {
  squareColors();
  listenPaletteSection();
  selectColor();
  clearBtnFunction();
};
