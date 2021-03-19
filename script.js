/*let selected = document.getElementsByClassName('color');

const color_1 = document.getElementsByClassName('color')[0];
const color_2 = document.getElementsByClassName('color')[1];
const color_3 = document.getElementsByClassName('color')[2];
const color_4 = document.getElementsByClassName('color')[3];

//for (let index = 0; index < selected.length; index += 1) {
  //if (selected[index].className === 'selected') {
    selected[0].classList.remove('selected');
  //}
//}

function selectColor_1() {
  color_1.className = 'color selected';
  color_2.className = 'color';
  color_3.className = 'color';
  color_4.className = 'color';
}

color_1.addEventListener('click', selectColor_1);

function selectColor_2() {
  color_1.className = 'color';
  color_2.className = 'color selected';
  color_3.className = 'color';
  color_4.className = 'color';
}

color_2.addEventListener('click', selectColor_2);

function selectColor_3() {
  color_1.className = 'color';
  color_2.className = 'color';
  color_3.className = 'color selected';
  color_4.className = 'color';
}

color_3.addEventListener('click', selectColor_3);

function selectColor_4() {
  color_1.className = 'color';
  color_2.className = 'color';
  color_3.className = 'color';
  color_4.className = 'color selected';
}

color_4.addEventListener('click', selectColor_4);
*/
let selected = document.getElementsByClassName('color');
if (selected[0].classList('selected')) {
  selected[0].classList.remove("selected");
}

const color_1 = document.getElementsByClassName('color')[0];
const color_2 = document.getElementsByClassName('color')[1];
const color_3 = document.getElementsByClassName('color')[2];
const color_4 = document.getElementsByClassName('color')[3];

function selectColor(e){
      if(e.target.id === "color_1"){
      color_1.classList = 'color selected';
    }
    else if(e.target.id === "color_2"){
      color_2.classList = 'color selected';
    }else if(e.target.id === "color_3"){
      color_3.classList = 'color selected';
    }else if(e.target.id === "color_4"){
      color_4.classList = 'color selected';
    }
}

color_1.addEventListener('click', selectColor);
color_2.addEventListener('click', selectColor);
color_3.addEventListener('click', selectColor);
color_4.addEventListener('click', selectColor);