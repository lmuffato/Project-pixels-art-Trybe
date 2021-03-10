function GenerateColor() {
  let red = parseInt(Math.random * 255);
  let green = parseInt(Math.random * 255);
  let blue = parseInt(Math.random * 255);
  let color = (red, green, blue);
  console.log(color);
}

// resolvido a partir da lógica do código da Beatriz Barbosa https://app.slack.com/client/TMDDFEPFU/C01L16B9XC7/thread/C01L16B9XC7-1615333261.329000
function SelectingColor(){
  let selectedColor = document.querySelector('.selected');
  let palette = document.querySelectorAll('.color');
  for (index = 0; index<palette.length; index += 1){
    palette[index].addEventListener('click', function(){
    palette[index].classList.add = 'selected';
    });
    if(palette[index] == document.querySelector('.selected')){
      selectedColor.classList.remove = 'selected';
      selectedColor.className = 'color';
    }
  }
  let selected = document.querySelector('selected');
  return selected;
}

function GenerateBoard(number) {
  for (let index = 0; index < number; index += 1){
  let bigsquare = document.querySelector('#pixel-board');
  let squares = document.createElement('div');
  squares.className = 'pixel';
  bigsquare.appendChild(squares);
  }
}

// reorganização feita observando o código da Beatriz, já citado acima
function ResetColors(){
  let reset = document.getElementById('clear-board');
  let resetButton = document.querySelectorAll('.pixel');
  reset.addEventListener('click', function(){
  for (let index = 0; index < 25; index+= 1){
  resetButton[index].style.backgroundColor = 'white';
  }
});
}

GenerateBoard(25);
ResetColors();