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

const color_1 = document.getElementsByClassName('color')[0];
const color_2 = document.getElementsByClassName('color')[1];
const color_3 = document.getElementsByClassName('color')[2];
const color_4 = document.getElementsByClassName('color')[3];

color_1.addEventListener('click',chooseColor)
color_2.addEventListener('click',chooseColor)
color_3.addEventListener('click',chooseColor)
color_4.addEventListener('click',chooseColor)



function chooseColor(e){
    if(e.target.id == "black"){
        color_1.classList.add("selected")
        color_2.classList.remove("selected")
        color_3.classList.remove("selected")
        color_4.classList.remove("selected")
    }
    else if(e.target.id == "color_2"){
        color_2.classList.add("selected")
        color_1.classList.remove("selected")
        color_3.classList.remove("selected")
        color_4.classList.remove("selected")
    }else if(e.target.id == "red"){
        red.classList.add("selected")
        color_1.classList.remove("selected")
        color_2.classList.remove("selected")
        color_4.classList.remove("selected")
    }else if(e.target.id == "green"){
        color_4.classList.add("selected")
        color_1.classList.remove("selected")
        color_2.classList.remove("selected")
        color_3.classList.remove("selected")
    }


}