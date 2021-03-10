function renameSelected() {
  const color = document.getElementsByName('color');
  let counter = 0;
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].classList.contains('selected')) {
      counter += 1;
    }
    if (counter > 1) {
      color[index].className = 'color';
    }
  }
}
function greenColor() {
  const greenColorElement = document.getElementById('verde');
  greenColorElement.addEventListener('click', () => {
    greenColorElement.className += ' selected';
    renameSelected();
  });
}
function blueColor() {
  const greenColorElement = document.getElementById('azul');
  greenColorElement.addEventListener('click', () => {
    greenColorElement.className += ' selected';
    renameSelected();
  });
}
function yellowColor() {
  const greenColorElement = document.getElementById('amarelo');
  greenColorElement.addEventListener('click', () => {
    greenColorElement.className += ' selected';
    renameSelected();
  });
}
function blackColor() {
  const greenColorElement = document.getElementById('preto');
  greenColorElement.addEventListener('click', () => {
    greenColorElement.className += ' selected';
    renameSelected();
  });
}
window.onload = function onload() {
  document.getElementById('preto').className += ' selected';
  greenColor();
  blueColor();
  yellowColor();
  blackColor();
};
