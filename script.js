function renameSelected() {
  const color = document.getElementsByClassName('selected');
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
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
  const blueColorElement = document.getElementById('azul');
  blueColorElement.addEventListener('click', () => {
    renameSelected();
    blueColorElement.className += ' selected';
  });
}
function yellowColor() {
  const yellowColorElement = document.getElementById('amarelo');
  yellowColorElement.addEventListener('click', () => {
    renameSelected();
    yellowColorElement.className += ' selected';
  });
}
function blackColor() {
  const blackColorElement = document.getElementById('preto');
  blackColorElement.addEventListener('click', () => {
    renameSelected();
    blackColorElement.className += ' selected';
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
