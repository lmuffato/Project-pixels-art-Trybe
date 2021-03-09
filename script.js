const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const addEvListenerNElements = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    nodes[index].addEventListener(event, fn);
  }
};

const changeColorPixel = (ev) => {
  const el = document.querySelector('.selected');
  const newColor = el.style.backgroundColor;
  const pixel = ev.target;
  pixel.style.backgroundColor = newColor;
};

const toggleClassInit = (elementNode, className) => {
  const element = document.querySelector(elementNode);
  element.classList.toggle(className);
};

const toggleClassEvent = (elementNode, className) => {
  const eventNode = elementNode.target;
  const colorListEl = document.getElementsByClassName('color');
  for (let index = 0; index < colorListEl.length; index += 1) {
    const el = colorListEl[index];
    if (el.classList.value.includes(className)) {
      el.classList.toggle(className);
    }
  }
  if (!eventNode.classList.value.includes(className)) {
    eventNode.classList.toggle(className);
  }
};

const randomColor = () => {
  return Math.round(Math.random() * 255);
};

const generateRandomColor = () => {
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
};

const setColorsPalette = () => {
  const black = document.querySelector('.black');
  const color1 = document.querySelector('.color1');
  const color2 = document.querySelector('.color2');
  const color3 = document.querySelector('.color3');
  black.style.backgroundColor = 'black';
  color1.style.backgroundColor = generateRandomColor();
  color2.style.backgroundColor = generateRandomColor();
  color3.style.backgroundColor = generateRandomColor();
};

const checkBoardSizeLimite = (boardSize, min, max) => {
  if (boardSize < min) {
    boardSize = min;
  } else if (boardSize > max) {
    boardSize = max;
  }
  return boardSize;
};

const createPixelBoard = () => {
  let boardSize = document.querySelector('#board-size');
  boardSize = boardSize.value;
  boardSize = checkBoardSizeLimite(boardSize, 5, 50);
  const pixelBoard = document.querySelector('#pixel-board');

  if (boardSize === '') {
    alert('Board inválido!');
    return;
  }
  resetBoard();
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    for (let index = 0; index < boardSize; index += 1) {
      const colum = document.createElement('div');
      colum.classList.add('pixel');
      line.appendChild(colum);
    }
    pixelBoard.appendChild(line);
  }
  changeBackgroundColorPixels();
  configureEventsListeners();
};

const resetBoard = () => {
  const reset = document.querySelector('#pixel-board');
  reset.innerHTML = '';
};

const configureEventsListeners = () => {
  addEvListenerNElements('.pixel', 'click', changeColorPixel);
};

const changeBackgroundColorPixels = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((el) => {
    el.style.backgroundColor = 'white';
  });
};

window.onload = () => {
  setColorsPalette();
  toggleClassInit('.color', 'selected');
  changeBackgroundColorPixels();
  
  addEvListener('#clear-board', 'click', changeBackgroundColorPixels);
  addEvListener('#color-palette', 'click', function (e) { toggleClassEvent(e, 'selected') });
  addEvListenerNElements('.pixel', 'click', changeColorPixel);
  addEvListener('#generate-board', 'click', createPixelBoard)
};
