//Requisito 7
const colorClick = document.getElementById('color-palette');

  function changeColor(event) {
    const colorClass = document.getElementsByClassName('color');
    console.log(colorClass[0].classList);
    for (index = 0; index < colorClass.length; index += 1) {
      colorClass[index].classList.remove('selected');
    }
    //console.log(event);
    const addClass = event.target.classList.add('selected');
  }
  colorClick.addEventListener('click', changeColor);


// requisito 10 
const clearPixel = document.getElementById('clear-board')
const pixelWhite = document.querySelectorAll(".pixel");

function clear () {
  pixelWhite.style.backgroudColor = white;
}
clearPixel.addEventListener('click', clear);

