const $colorPalette = document.getElementById('color-palette');
const $colorElements = document.querySelectorAll('.color');
const $pixelBoard = document.getElementById('pixel-board');
const $clearBoardBtn = document.getElementById('clear-board');

function selecElementPallete(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'color-palette') {
    $colorElements.forEach((element) => {
      element.classList.remove('selected');
      elementTarget.classList.add('selected');
    });
  }
}

function getColorElementPalette() {
  const $elementSelected = document.querySelector('.selected');
  const $color = window.getComputedStyle($elementSelected).getPropertyValue('background-color');
  return $color;
}

function changeColorPixels(event) {
  const $elementTarget = event.target;
  if ($elementTarget.id !== 'pixel-board') {
    $elementTarget.style.backgroundColor = getColorElementPalette();
  }
}

function clearBoardPixels() {
  const $pixelsTd = document.querySelectorAll('.pixel');
  $pixelsTd.forEach((pixel) => {
    const $pixeltd = pixel;
    $pixeltd.style.cssText = 'background-color: white; ';
  });
}

$colorPalette.addEventListener('click', selecElementPallete);
$pixelBoard.addEventListener('click', changeColorPixels);
$clearBoardBtn.addEventListener('click', clearBoardPixels);

/// Implementação criar board JavaScript

const $pixelsBoard = document.querySelector('#pixel-board');
$pixelsBoard.style.cssText = 'border-collapse: separate; border-spacing: 0px; ';
const $inputPixelsBoard = document.getElementById('board-size');
const $btnPixelsBoard = document.getElementById('generate-board');

function createPixels(number) {
  for (let indexLine = 1; indexLine <= number; indexLine += 1) {
    const $row = document.createElement('tr');
    $row.classList.add('pixels-row');
    $pixelsBoard.append($row);
  }
  const $pixelsLine = document.querySelectorAll('.pixels-row');
  $pixelsLine.forEach((line) => {
    for (let indexColumn = 1; indexColumn <= number; indexColumn += 1) {
      const $td = document.createElement('td');
      $td.classList.add('pixel');
      line.append($td);
    }
  });
}

function removePixels() {
  const $pixelsRow = document.querySelectorAll('.pixels-row');
  const $pixelsColumn = document.querySelectorAll('.pixel');
  $pixelsRow.forEach((elementRow) => elementRow.parentNode.removeChild(elementRow));
  $pixelsColumn.forEach((elementColumn) => elementColumn.parentNode.removeChild(elementColumn));
}

function createPixelsBoard() {
  const $pixelsRow = document.querySelectorAll('.pixels-row');
  if ($pixelsRow.length !== 0) {
    removePixels();
  }
  const { value } = $inputPixelsBoard;
  createPixels(value);
  $pixelBoard.style.cssText = 'display: table; ';
}

$btnPixelsBoard.addEventListener('click', createPixelsBoard);

createPixels(5);
