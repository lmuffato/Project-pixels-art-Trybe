const PIXEL_BOARD = 'pixel-board';
const COLOR_PALETTE = 'color-palette';
const COLOR_COUNT = 4;
const CANVAS_SIZE = { x: 5, y: 5 };
const CLEAR_BOARD = 'clear-board';
const BTN_CONTAINER = 'btn-container';

function clearPixelBoard() {
  const pixels = document.getElementById(PIXEL_BOARD).children;
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
function createButtonListener() {
  const btnClearPixelBoard = document.getElementById(CLEAR_BOARD);
  btnClearPixelBoard.addEventListener('click', clearPixelBoard, false);
}
function createClearButton() {
  const btnContainer = document.getElementById(BTN_CONTAINER);
  const btnClearPixelBoard = document.createElement('button');
  btnClearPixelBoard.id = 'clear-board';
  btnClearPixelBoard.innerText = 'Limpar';
  btnContainer.appendChild(btnClearPixelBoard);
}
function initializeClearButton() {
  createClearButton();
  createButtonListener();
}
function setInitialColor() {
  const firstColor = document.getElementById(COLOR_PALETTE).firstElementChild;
  firstColor.classList.toggle('selected');
}
function changePaletteColor(e) {
  // Only changes something if the event was fired from the correct place
  if (e.target.classList.contains('color')) {
    const lastSelected = document.querySelector(
      `#${COLOR_PALETTE} > .selected`,
    );
    lastSelected.classList.toggle('selected');
    e.target.classList.toggle('selected');
  }
}
function createColorPaletteListener() {
  const colorPalette = document.getElementById(COLOR_PALETTE);
  colorPalette.addEventListener('click', changePaletteColor, false);
}
function createColors(n) {
  const colorPalette = document.getElementById(COLOR_PALETTE);
  for (let index = 0; index < n; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.innerText = getComputedStyle(color).backgroundColor;
    colorPalette.appendChild(color);
  }
}
function initializeColorPalette() {
  createColors(COLOR_COUNT);
  createColorPaletteListener();
  setInitialColor();
}
function changePixelColor(e) {
  if (e.target.classList.contains('pixel')) {
    const selectedPaletteColor = document.querySelector(
      `#${COLOR_PALETTE} > .selected`,
    );
    const newColor = getComputedStyle(selectedPaletteColor).backgroundColor;
    e.target.style.backgroundColor = newColor;
  }
}
function createPixelsListener() {
  const pixelBoard = document.getElementById(PIXEL_BOARD);
  pixelBoard.addEventListener('click', changePixelColor, false);
}
function createPixels(n) {
  const pixelBoard = document.getElementById(PIXEL_BOARD);
  for (let index = 0; index < n; index += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    pixelBoard.appendChild(row);
  }
}
function initializePixelBoard(x, y) {
  createPixels(x * y);
  createPixelsListener();
  // Everything else is done 'automagically' by display flex config
}
window.onload = function init() {
  initializePixelBoard(CANVAS_SIZE.x, CANVAS_SIZE.y);
  initializeColorPalette();
  initializeClearButton();
};
