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

black.addEventListener('click',chooseColor)
red.addEventListener('click',chooseColor)
green.addEventListener('click',chooseColor)
blue.addEventListener('click',chooseColor)



function chooseColor(e){
    if(e.target.id == "black"){
        black.classList.add("selected")
        blue.classList.remove("selected")
        red.classList.remove("selected")
        green.classList.remove("selected")
    }
    else if(e.target.id == "blue"){
        blue.classList.add("selected")
        black.classList.remove("selected")
        red.classList.remove("selected")
        green.classList.remove("selected")
    }else if(e.target.id == "red"){
        red.classList.add("selected")
        black.classList.remove("selected")
        blue.classList.remove("selected")
        green.classList.remove("selected")
    }else if(e.target.id == "green"){
        green.classList.add("selected")
        black.classList.remove("selected")
        blue.classList.remove("selected")
        red.classList.remove("selected")
    }


}