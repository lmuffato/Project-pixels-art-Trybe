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
  for (index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', onClicktoChange);
  }
  function onClicktoChange(event) {
    let selectedPixel = event.target;
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
    selectedPixel.style.backgroundColor = selectedColor;
  }
}
changePixelsColor();

/*function clearButton() {
  for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = 'white';
  }
}
let clearBtn = document.getElementsByTagName('button');
clearBtn.addEventListener('click', clearButton);*/ 