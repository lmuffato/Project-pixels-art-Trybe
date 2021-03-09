window.onload = function() {
  let initialColor = document.querySelector('.color');
  initialColor.className += ' selected';
}

function changeColor() {
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

changeColor();