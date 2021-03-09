function squareColors() {
  const square1 = document.getElementById('black');
  square1.style.backgroundColor = 'black';

  const square2 = document.getElementById('red');
  square2.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square3 = document.getElementById('green');
  square3.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square4 = document.getElementById('blue');
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

window.onload = function () {
  squareColors();
  listenPaletteSection();
};
