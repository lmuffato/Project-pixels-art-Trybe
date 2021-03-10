let selectColorPalette = document.getElementById('color-palette');
let selectPixelBoard = document.getElementById('pixel-board');
let colors = ['black', 'red', 'blue', 'green'];
let tamPixel = 5;
let backUpTam = null;
window.onload = function () {
  let setSelected = selectColorPalette.firstElementChild;
  setSelected.className = 'color selected';
}

createPalette(); // cria os 4 quadrados(cores) e os adiciona como filho da div de id = 'color-palette'

createBoardPixel(tamPixel); //cria os nxn quadrados.
captureColor(); // seta a cor ao clicar no quadrado escolhido.
paintPixel(); // pinta os pixeis clicados
clearPixels(); // limpa pixels ao acionar o botão correspondente.
colectAndAltTam();

function colectAndAltTam() {
  let captureButtonVQV = document.getElementById('generate-board');
  let captureTextInput = document.querySelector('#board-size');

  captureButtonVQV.addEventListener('click', function () {
    let captureNumber = captureTextInput.value;
    if (captureNumber === '') {
      alert('Board inválido!');
      return;
    }
    captureNumber = parseInt(captureTextInput.value);
    if (captureNumber < 5) {
      tamPixel = 5;
    } else if (captureNumber > 50) {
      tamPixel = 50;
    } else {
      tamPixel = captureNumber;
    }
    deleteAllPixels();
    createBoardPixel();
    paintPixel(); // pinta os pixeis clicados
    clearPixels(); // limpa pixels ao acionar o botão correspondente.
  });
}

function deleteAllPixels() {
  while (selectPixelBoard.lastChild) { //enquanto a pixelboard tiver filho,
    selectPixelBoard.removeChild(selectPixelBoard.lastChild);
  }
}

function clearPixels() {
  let listPixels = document.querySelectorAll('.pixel');
  let getButton = document.getElementById('clear-board');
  getButton.addEventListener('click', function () {
    for (let i = 0; i < listPixels.length; i += 1) {
      listPixels[i].style.backgroundColor = 'white';
    }
  })
};

function paintPixel() {
  let listPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < listPixels.length; i += 1) {
    listPixels[i].addEventListener('click', function (event) {
      let setColorSelected = document.getElementsByClassName('selected');
      event.target.style.backgroundColor = setColorSelected[0].style.backgroundColor;
    });
  }
};

function captureColor() {
  let getElementsPalette = selectColorPalette.getElementsByClassName('color');
  for (let j = 0; j < 4; j += 1) {
    getElementsPalette[j].addEventListener('click', function (event) {
      for (let i = 0; i < 4; i += 1) {
        setColor(getElementsPalette, i, event); //acrescenta class selected ao elemento q provocou a função
      }
    });
  }

};

function setColor(getElementsPalette, i, event) {
  getElementsPalette[i].className = 'color'; //seta todas as classes das cores como apenas 'color';
  event.target.className = 'color selected';
};

function createBoardPixel() {
  for (let i = 0; i < tamPixel; i += 1) {
    for (let j = 0; j < tamPixel; j += 1) {
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      selectPixelBoard.appendChild(newPixel);
    }
    let breakLine = document.createElement('br');
    selectPixelBoard.appendChild(breakLine);
  }
};

function createPalette() { // cria os 4 quadrados e os adiciona como filho da div de id = 'color-palette'
  for (let i = 0; i < 4; i += 1) {
    let newColor = document.createElement('div');
    newColor.className = 'color';
    newColor.style.backgroundColor = colors[i];
    selectColorPalette.appendChild(newColor);
  }
};
