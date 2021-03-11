//color[length] para alterar a cor nas paletas

window.onload = function bemVindo() {
    console.log("teste testando");

}
//lets //
let Palette = document.getElementById('color-palette');
let Color = document.querySelectorAll('.color');
let Board = document.getElementById('pixel-board');
let Clear = document.getElementById('clear-board');
let palleteColorBasic = ['black', randomColor(), randomColor(), randomColor()];


// Gerador de Cores Automaticas by Vinicius13 //
// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj //

function randomColor() {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}



// Coloca as cores nas Divs //
window.onload = function palleteColor(){
  for (let index = 0; index < palleteColorBasic.length; index += 1)
  Color[index].style.backgroundColor = palleteColorBasic[index];
}

// Seleciona cor na palette //
function setColor(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'color-palette') {
    Color.forEach((element) => {
      element.classList.remove('selected');
      elementTarget.classList.add('selected');
    });
  }
}

// Salva cor //
function getColor() {
  const elementSelected = document.querySelector('.selected');
  const color = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
  return color;
}

// Pinta pixel //
function changePixels(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'pixel-board') {
    elementTarget.style.backgroundColor = getColor();
  }
}

// Botão clear //
// Teve um menino que bolou essa solução sem precisar de For nem nada,
// procurei nos Code-Review e não achei ele, então se alguem saber quem é
// me avise para creditá-lo da forma correta!
function clearBoard() {
  window.location.reload();
}


// Clicks //
Palette.addEventListener('click', setColor);
Board.addEventListener('click', changePixels);
Clear.addEventListener('click', clearBoard);




