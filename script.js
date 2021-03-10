function renameSelected(selectedElement) {
  const color = document.getElementsByName('color');
  for (let index = 0; index < color.length; index += 1) {
    if (selectedElement !== color[index]) {
      color[index].className = 'color';
    }
  }
}
function greenColor() {
  const greenColorElement = document.getElementById('verde');
  greenColorElement.addEventListener('click', () => {
    greenColorElement.className += ' selected';
    renameSelected(greenColorElement);
  });
}
function blueColor() {
  const blueColorElement = document.getElementById('azul');
  blueColorElement.addEventListener('click', () => {
    blueColorElement.className += ' selected';
    renameSelected(blueColorElement);
  });
}
function yellowColor() {
  const yellowColorElement = document.getElementById('amarelo');
  yellowColorElement.addEventListener('click', () => {
    yellowColorElement.className += ' selected';
    renameSelected(yellowColorElement);
  });
}
function blackColor() {
  const blackColorElement = document.getElementById('preto');
  blackColorElement.addEventListener('click', () => {
    blackColorElement.className += ' selected';
    renameSelected(blackColorElement);
  });
}
window.onload = function onload() {
  if (document.getElementsByClassName('selected').length === 0) {
    document.getElementById('preto').className += ' selected';
  }
  greenColor();
  blueColor();
  yellowColor();
  blackColor();
};
