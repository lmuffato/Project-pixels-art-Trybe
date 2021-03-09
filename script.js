window.onload = function() {
  let initialColor = document.querySelector('.color');
  initialColor.className += ' selected';

  document.getElementById('color1').style.backgroundColor = 'black';
  document.getElementById('color2').style.backgroundColor = '#14213d';
  document.getElementById('color3').style.backgroundColor = '#fca311';
  document.getElementById('color4').style.backgroundColor = '#e5e5e5';

}

function changeSelectedColor() {
  let currentColor = document.querySelector('.selected');
  let allColors = document.querySelector('#color-palette');
  let colors = allColors.children;
  allColors.addEventListener('click', function(event) {
    if (event.target.className === 'color') {
      document.querySelector('.selected').className = 'color';
      event.target.className += ' selected';
    } 
  })
}
changeSelectedColor();

function changeColor() {
  let board = document.querySelector('#pixel-board');
  board.addEventListener('click', function(event) {
    let currentColor = document.querySelector('.selected').style.backgroundColor;
    let pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      if (pixel[index] === event.target) {
        pixel[index].style.backgroundColor = currentColor;
      }
    }
  })
}
changeColor();