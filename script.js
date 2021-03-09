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

const setColorsPalette = () => {
  const black = document.querySelector('.black');
  const red = document.querySelector('.red');
  const green = document.querySelector('.green');
  const blue = document.querySelector('.blue');
  black.style.backgroundColor = 'black';
  red.style.backgroundColor = 'red';
  green.style.backgroundColor = 'green';
  blue.style.backgroundColor = 'blue';
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
};
