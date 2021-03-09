function createColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}
function setColors() {
  const getDivs = document.getElementsByClassName('color');
  for (let index = 0; index < getDivs.length; index += 1) {
    getDivs[index].style.backgroundColor = createColor();
  }
}

/* function getDivs() {
  const getColor = document.getElementsByClassName('color');
  for (let index = 0; index < getColor.length; index += 1) {
    getColor[0].style.backgroudColor = 'black';
  }
  return getColor;
}
getDivs(); */

window.onload = function() {
  setColors();
}