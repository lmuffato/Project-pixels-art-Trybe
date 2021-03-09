// Requirement 1;

function createh1() {
  const createH1 = document.createElement('h1');
  const selectorBody = document.querySelector('body');
  createH1.id = 'title';
  createH1.innerHTML = 'Paleta de Cores';
  selectorBody.appendChild(createH1);
}
createh1();

// Requirement 2;

function createCollorPalette() {
  const selectorBody = document.querySelector('body');
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  selectorBody.appendChild(createDiv);
}
createCollorPalette();

function createCollorsIntoPallete() {
  for (let index = 1; index <= 4; index += 1) {
    let createDiv = document.createElement('div');
    let selectorH1 = document.querySelector('#color-palette');
    createDiv.className = 'color';
    createDiv.style.display = 'inline-block';
    if (index === 1) {
      createDiv.style.backgroundColor = 'blue';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    } if (index === 2) {
      createDiv.style.backgroundColor = 'red';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    } if (index === 3) {
      createDiv.style.backgroundColor = 'green';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    } if (index === 4) {
      createDiv.style.backgroundColor = 'blue';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    }
    selectorH1.appendChild(createDiv);
  }
}
createCollorsIntoPallete();

// Requirement 3;

function changeFirstCollorPalette() {
  const firstElementDivPalette = document.querySelectorAll('.color')[0];
  firstElementDivPalette.style.backgroundColor = 'black';
}
changeFirstCollorPalette();

// Requirement 4 and 5;

function createPixelTable() {
  const selectorBody = document.querySelector('body');
  const createDiv = document.createElement('div');
  createDiv.id = 'pixel-board';
  createDiv.style.border = 'solid 1px black';
  createDiv.style.display = 'block';
  createDiv.style.maxWidth = '210px';
  createDiv.style.display = 'inline-block';
  selectorBody.appendChild(createDiv);
}
createPixelTable();

function createPixelTableLineElements() {
  for (let index = 1; index <= 5; index += 1) {
    for (let index2 = 1; index2 <= 5; index2 += 1) {
      const selectorDivPixelBoard = document.querySelector('#pixel-board');// div pai
      const createDiv = document.createElement('div');
      createDiv.className = 'pixel';
      createDiv.style.backgroundColor = 'white';
      createDiv.style.height = '40px';
      createDiv.style.width = '40px';
      createDiv.style.border = 'solid 1px black';
      createDiv.style.display = 'inline-block';
      selectorDivPixelBoard.appendChild(createDiv);
    }
  }
}
createPixelTableLineElements();

// Requirement 6;

function firstElementClassSelected() {
  const selectorFirstColor = document.querySelectorAll('div')[1];
  selectorFirstColor.className += ' selected';
}
firstElementClassSelected();

// Requirement 7;

function selectElement() {
  let selectDivColorPaletteBlack = document.querySelectorAll('.color')[0];
  let selectDivColorPaletteRed = document.querySelectorAll('.color')[1];
  let selectDivColorPaletteGreen = document.querySelectorAll('.color')[2];
  let selectDivColorPaletteBlue = document.querySelectorAll('.color')[3];
  selectDivColorPaletteBlack.addEventListener('click', function () {
    if (selectDivColorPaletteBlack.className === 'color') {
      selectDivColorPaletteBlack.className += ' selected';
      selectDivColorPaletteRed.className = 'color';
      selectDivColorPaletteGreen.className = 'color';
      selectDivColorPaletteBlue.className = 'color';
    } else {
      selectDivColorPaletteBlack.className = 'color';
    }
  });
  selectDivColorPaletteRed.addEventListener('click', function () {
    if (selectDivColorPaletteRed.className === 'color') {
      selectDivColorPaletteRed.className += ' selected';
      selectDivColorPaletteBlack.className = 'color';
      selectDivColorPaletteGreen.className = 'color';
      selectDivColorPaletteBlue.className = 'color';
    } else {
      selectDivColorPaletteRed.className = 'color';
    }
  });
  selectDivColorPaletteGreen.addEventListener('click', function () {
    if (selectDivColorPaletteGreen.className === 'color') {
      selectDivColorPaletteGreen.className += ' selected';
      selectDivColorPaletteRed.className = 'color';
      selectDivColorPaletteBlack.className = 'color';
      selectDivColorPaletteBlue.className = 'color';
    } else {
      selectDivColorPaletteGreen.className = 'color';
    }
  });
  selectDivColorPaletteBlue.addEventListener('click', function () {
    if (selectDivColorPaletteBlue.className === 'color') {
      selectDivColorPaletteBlue.className += ' selected';
      selectDivColorPaletteRed.className = 'color';
      selectDivColorPaletteBlack.className = 'color';
      selectDivColorPaletteGreen.className = 'color';
    } else {
      selectDivColorPaletteBlue.className = 'color';
    }
  });
}
selectElement();

// Requirement 8;

function colorPixel() {
  let selectDivColorPaletteBlack = document.querySelectorAll('.color')[0];
  let selectDivColorPaletteRed = document.querySelectorAll('.color')[1];
  let selectDivColorPaletteGreen = document.querySelectorAll('.color')[2];
  let selectDivColorPaletteBlue = document.querySelectorAll('.color')[3];
  let pixelArray = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelArray.length; index += 1) {
    let pixelArray = document.getElementsByClassName('pixel');

    function paintPixel() {
      if (selectDivColorPaletteBlack.className === 'color selected') {
        pixelArray[index].style.backgroundColor = 'black';
      } if (selectDivColorPaletteRed.className === 'color selected') {
        pixelArray[index].style.backgroundColor = 'red';
      } if (selectDivColorPaletteGreen.className === 'color selected') {
        pixelArray[index].style.backgroundColor = 'green';
      } if (selectDivColorPaletteBlue.className === 'color selected') {
        pixelArray[index].style.backgroundColor = 'blue';
      }
    }
    pixelArray[index].addEventListener('click', paintPixel);
  }
}
colorPixel();

// Requirement 9;

function creatButton() {
  const selectDivPaletteColors = document.querySelector('#color-palette');
  const createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerHTML = 'Limpar Quadro';
  selectDivPaletteColors.appendChild(createButton);
}
creatButton();

function clearPixels() {
  const selectButton = document.querySelector('#clear-board');
  function clearPixelArray() {
    const pixelArray = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelArray.length; index += 1) {
      pixelArray[index].style.backgroundColor = 'white';
    }
  }
  selectButton.addEventListener('click', clearPixelArray);
}
clearPixels();
