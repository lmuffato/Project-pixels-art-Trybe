window.onload = function script() {
  function setColor(colorsArray) {
    const boxColors = document.querySelectorAll('.color');
    const colors = colorsArray;

    for (let index = 0; index < boxColors.length; index += 1) {
      boxColors[index].style.backgroundColor = colors[index];
    }
  }

  setColor(['black', 'blue', 'green', 'yellow']);

  function pixelPaint() {
    let colorSelect = document.querySelector('#color-palette');
    let pixelBoard = document.querySelector('#pixel-board')

    colorSelect.addEventListener('click', function(event){
      let selectedColor = event.target;
      document.querySelector('.selected').className = 'boxes color';
      selectedColor.className += ' selected';
    });

    pixelBoard.addEventListener('click', function(event){
      let pixel = event.target;
      let color = document.querySelector('.selected');
      pixel.style.backgroundColor = color.style.backgroundColor;
    });
  }
  pixelPaint();
};
