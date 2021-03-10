let palette = document.getElementsByClassName('color');
const blackPalette = palette[0];
let palette2 = palette[1];
let palette3 = palette[2];
let palette4 = palette[3];

function GenerateColor() {
  let red = parseInt(Math.random * 255);
  let green = parseInt(Math.random * 255);
  let blue = parseInt(Math.random * 255);
  let color = (red, green, blue);
  console.log(color);
}

function GenerateBoard(number) {
  for (let index = 0; index < number; index += 1){
  let bigsquare = document.querySelector('#pixel-board');
  let squares = document.createElement('div');
  squares.className = 'pixel';
  bigsquare.appendChild(squares);
  }
}

const reset = document.getElementById('clear-board');

function ResetColors(){
  let resetButton = document.querySelectorAll('.pixel');
  for (let index = 0; index < resetButton.length; index+= 1){
  resetButton[index].style.backgroundColor = 'white';
  }
}
reset.addEventListener('click', ResetColors);

GenerateBoard(25);