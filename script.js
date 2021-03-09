const box = document.querySelectorAll('.color');

window.onload = function(){
  toPaintbox(box);
  colorSelect(box[0]);
  box[0].addEventListener('click', reselect);
  box[1].addEventListener('click', reselect);
  box[2].addEventListener('click', reselect);
  box[3].addEventListener('click', reselect);
}
//Aplica cores na paleta;
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
  console.log(e)
  for (let index = 0; index < box.length; index += 1) {
      box[index].classList.remove('selected');
    }
  e.target.classList.add('selected');
}
