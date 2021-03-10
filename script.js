function GenerateColor() {
  let red = parseInt(Math.random * 255);
  let green = parseInt(Math.random * 255);
  let blue = parseInt(Math.random * 255);
  let color = (red, green, blue);
  console.log(color);
}

// resolvido a partir da lógica do código da Beatriz Barbosa https://app.slack.com/client/TMDDFEPFU/C01L16B9XC7/thread/C01L16B9XC7-1615333261.329000
function SelectingColor(){
  let selectedColor = document.querySelector('selected');
  let palette = document.querySelectorAll('color');
  for (index = 0; index<palette.length; index += 1){
    palette[index].addEventListener('click', function(){
    palette[index].classList.add = 'selected';
    selectedColor.className = 'color';
    });
  }
  let selected = document.getElementsByClassName('selected');
  return selected;
}


function PaintingSquares() {
  let paint = Element.querySelector('.pixel');
  paint.style.backgroundColor = 'rgb(0, 0, 0)';
}

const square = document.getElementById('pixel-board');
square.addEventListener('click', PaintingSquares);

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
  for (let index = 0; index < 25; index+= 1){
  resetButton[index].style.backgroundColor = 'white';
  }
}

reset.addEventListener('click', ResetColors);

GenerateBoard(25);