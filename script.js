function colorSelect() {
  let defaultColors = document.querySelectorAll('.color');
  for (let index = 0; index < defaultColors.length; index += 1){
    defaultColors[index].addEventListener('click', onClick);
  }
  function onClick(event) {
    let selectedColor = event.target;
    let defaultColorBlack = document.querySelector('.selected');
    defaultColorBlack.classList.remove('selected');
    selectedColor.classList.add('selected');
  }
}
colorSelect(); 

function changePixelsColor() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let selectedPixel = event.target;
      let selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor;
      selectedPixel.style.backgroundColor = selectedColor;
    });  
  }
}
changePixelsColor();

function clearButton() {
  let pixels = document.querySelectorAll('.pixels');
  let clearBtn = document.getElementById('clear-board');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
    clearBtn.addEventListener('click', clearButton); 
  }
}
clearButton();
