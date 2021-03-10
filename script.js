function changeColor1() {
  const color1 = document.getElementById('color1');
  color1.style.backgroundColor = 'black';  
}
changeColor1();

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

function selectColor1 () {
  color2.className = 'color';
  color3.className = 'color';
  color4.className = 'color'; 
  color1.className = 'color selected'   
}

function selectColor2 () {
  color1.className = 'color';
  color3.className = 'color';
  color4.className = 'color';
  color2.className = 'color selected';    
}

function selectColor3 () {
  color1.className = 'color';
  color2.className = 'color';
  color4.className = 'color';
  color3.className = 'color selected';    
}

function selectColor4 () {
  color1.className = 'color';
  color2.className = 'color';
  color3.className = 'color';
  color4.className = 'color selected';    
}

color1.addEventListener('click', selectColor1);
color2.addEventListener('click', selectColor2);
color3.addEventListener('click', selectColor3);
color4.addEventListener('click', selectColor4);


function changePixelColor () {
  let pixelsToChange = document.getElementsByClassName('pixel');
  let selectedColor = document.querySelector('.selected');
  for (let index = 0; index < pixelsToChange.length; index += 1) {
  pixelsToChange[index].style.backgroundColor = selectedColor.backgroundColor;  
  }
}
changePixelColor();

function setPixelEvent () {
 let pixelsToChange = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelsToChange.length; index += 1) {
    pixelsToChange[index].addEventListener('click', changePixelColor);
  }
  return pixelsToChange;
}
setPixelEvent()

function clearButton () {
  let pixels = document.getElementsByClassName('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels.style.brackgroundColor = 'white';
  }
}
let clearBtn = document.getElementsByTagName('button')[0];
clearBtn.addEventListener('click', clearButton)
