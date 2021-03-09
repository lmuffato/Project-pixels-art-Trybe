const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  let node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
}

const changeColor = (newColor, oldColor) => {
  let elements = document.querySelectorAll('.holiday');
  for (let index = 0; index < elements.length; index += 1) {
    let el = elements[index];

    if (el.style.backgroundColor === newColor) {
      el.style.backgroundColor = oldColor;
    } else {
      el.style.borderRadius = '15px';
      el.style.backgroundColor = newColor;
    }
  }
}

const toggleClass = (elementNode, className) => {
  let element = document.querySelector(elementNode);
  element.classList.toggle(className);
}
const toggleClassEvent = (elementNode, className) => {
  let eventNode = elementNode.target;
  let colorListEl = document.getElementsByClassName('color');
  for (const key of colorListEl) {
    let el = key;
    if (el.classList.value.includes(className)) {
      el.classList.toggle(className);;
    }
  }
  eventNode.classList.toggle(className);
}
//addEvListener('.task', 'click', function (e) { toggleClass('.task', 'selected') });

const getBackgroundColorPixel = (e) => {
  let event = e.target;
  return event.style.backgroundColor;
}
//addEvListener('.btn-holiday', 'click', function (e) { changeColor('black', 'rgb(238, 238, 238)') });
const changeBackgroundColorPixels = () => {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.backgroundColor = 'white';
  }
 /*  pixels.forEach((el) => {
    el.style.backgroundColor = 'white';
  }); */
}
window.onload = () => {
  
  changeBackgroundColorPixels();
  toggleClass('.color', 'selected');

  addEvListener('#color-palette', 'click', function (e) { toggleClassEvent(e, 'selected') });
};