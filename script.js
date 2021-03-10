let palette = document.getElementsByClassName('color');

let number = 25;

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

GenerateBoard(number);