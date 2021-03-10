function colorSelector(elementId){
  let color  = '';
  if(elementId.id == "yellow") color = '#fae900';
  if(elementId.id == "black") color = 'black';
  if(elementId.id == "blue") color = '#0013c2';
  if(elementId.id == "green") color = '#00d41c';
//   console.log('inside function colorSelector, the current color is ' + color);
  return color;
}

function setClass(element){
  let currentSelected = document.getElementsByClassName('selected')[0];
  if(element.className == "color"){
  element.className = "color selected";
  currentSelected.className = "color";
  }
}

function pixelPainter(clickedElement,currentColor){
  clickedElement.style.backgroundColor = currentColor;
}
const colorBlack = document.getElementById('black');
colorBlack.addEventListener('click',() =>{
//    console.log('clicked '+colorBlack.id);
  setClass(colorBlack);
  currentColor = colorSelector(colorBlack);
})
const colorYellow = document.getElementById('yellow');
colorYellow.addEventListener('click',() =>{
//   console.log('clicked '+colorYellow.id);
  setClass(colorYellow);
  currentColor = colorSelector(colorYellow);
})
const colorBlue = document.getElementById('blue');
colorBlue.addEventListener('click',() =>{
//   console.log('clicked '+colorBlue.id);
  setClass(colorBlue);
  currentColor = colorSelector(colorBlue);
})
const colorGreen = document.getElementById('green');
colorGreen.addEventListener('click',() =>{
//    console.log('clicked '+colorGreen.id);
  setClass(colorGreen);
  currentColor = colorSelector(colorGreen);
})

let currentColor = colorSelector(colorBlack);

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click',()=>{
  let clickedElement = event.target;
  pixelPainter(clickedElement,currentColor);
});

