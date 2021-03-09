const box = document.querySelectorAll('.color');
const dad = document.getElementById('color-palette');
const elementSelected = document.getElementsByClassName('selected');
const frame = document.getElementById('pixel-board');
window.onload = function(){
  toPaintbox(box);
  colorSelect(box[0]);
  dad.addEventListener('click', reselect);
  frame.addEventListener('click', paintFrame);
}

function toPaintbox(box) {
  box[0].style.backgroundColor = 'black';
  box[1].style.backgroundColor = 'blue';
  box[2].style.backgroundColor = 'red';
  box[3].style.backgroundColor = 'yellow';
}

function colorSelect(x) {
  x.classList.add('selected');
}

function reselect(e) {
  for (let index = 0; index < box.length; index += 1) {
      box[index].classList.remove('selected');
    }
  e.target.classList.add('selected');
}

function paintFrame(e){
  e.target.style.backgroundColor = elementSelected[0].style.backgroundColor;
}