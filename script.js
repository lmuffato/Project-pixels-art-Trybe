/*function GenerateColor() {
  let red = parseInt(Math.random * 255);
  let green = parseInt(Math.random * 255);
  let blue = parseInt(Math.random * 255);
  let color = (red, green, blue);
  console.log(color);
}*/

// resolvido a partir da lógica do código da Beatriz Barbosa https://github.com/tryber/sd-010-a-project-pixels-art/pull/32/files
function SelectingColor(){
  let palette = document.querySelectorAll('.color');
  for (index = 0; index < palette.length; index += 1){
    palette[index].addEventListener('click', clicking);
  }
    function clicking(event){
    let BeforeSelectedColor = event.target;      
    let selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
      BeforeSelectedColor.classList.add('selected');
    }
  }
 
SelectingColor();

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