function createPixBox(size) {
  const getPixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < size; index += 1) {
    const pixelLinha = document.createElement('tr');
    pixelLinha.className = 'linha';

    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelColuna = document.createElement('th');
      pixelColuna.className = 'pixel';
      pixelLinha.appendChild(pixelColuna);
      getPixelBoard.appendChild(pixelLinha);
    }
  }
}
createPixBox(5);

function eventChangingColorsPalette() {
  let getClassSelected = document.getElementsByClassName('selected')[0];
  let colorBlack = document.getElementsByClassName('color')[0];
  let colorRed = document.getElementsByClassName('color')[1];
  let colorBlue = document.getElementsByClassName('color')[2];
  let colorGreen = document.getElementsByClassName('color')[3];

  colorBlack.addEventListener('click', function() {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorBlack.classList.add('selected');
  });
  colorRed.addEventListener('click', function() {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorRed.classList.add('selected');
  });
  colorBlue.addEventListener('click', function() {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorBlue.classList.add('selected');
  });
  colorGreen.addEventListener('click', function() {
    getClassSelected = document.getElementsByClassName('selected')[0];
    getClassSelected.classList.remove('selected');
    colorGreen.classList.add('selected');
  });
}
eventChangingColorsPalette();

// Window.getComputedStyle = retorna um objeto contendo os valores de todas as propriedades Css de um elemento
function PaintingPixel(event) {
  let getClassSelected = document.getElementsByClassName('selected') [0];
  const eventTarget = event.target;
  let setColorPixel = window.getComputedStyle(getClassSelected).getPropertyValue('background-color');
  eventTarget.style.backgroundColor = setColorPixel;
}

function eventpaintingPixel() {
  let getPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].addEventListener('click', PaintingPixel);
  }
}
eventpaintingPixel();
