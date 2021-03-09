const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  let node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
}

const addEvListenerNElements = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  let nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index++) {
    nodes[index].addEventListener(event, fn);
  }
}

const changeColorPixel = (ev) => {
  let el = document.querySelector('.selected');
  let newColor = el.style.backgroundColor;
  let pixel = ev.target;
  pixel.style.backgroundColor = newColor;
}

const toggleClassInit = (elementNode, className) => {
  let element = document.querySelector(elementNode);
  element.classList.toggle(className);
}

const toggleClassEvent = (elementNode, className) => {
  let eventNode = elementNode.target;
  let colorListEl = document.getElementsByClassName('color');
  for (const key of colorListEl) { //A prova de falhas;
    let el = key;
    if (el.classList.value.includes(className)) {
      el.classList.toggle(className);;
    }
  }
  if (!eventNode.classList.value.includes(className))
    eventNode.classList.toggle(className);
}

const setColorsPalette = () => {
  let black = document.querySelector('.black');
  let red = document.querySelector('.red');
  let green = document.querySelector('.green');
  let blue = document.querySelector('.blue');
  black.style.backgroundColor = 'black';
  red.style.backgroundColor = 'red';
  green.style.backgroundColor = 'green';
  blue.style.backgroundColor = 'blue';
}

const changeBackgroundColorPixels = () => {
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((el) => {
    el.style.backgroundColor = 'white';
  });
}

window.onload = () => {
  setColorsPalette();
  toggleClassInit('.color', 'selected');
  changeBackgroundColorPixels();
  addEvListener('#clear-board', 'click', changeBackgroundColorPixels);
  addEvListener('#color-palette', 'click', function (e) { toggleClassEvent(e, 'selected') });
  addEvListenerNElements('.pixel', 'click', changeColorPixel)
};
