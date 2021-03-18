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

document.getElementsByClassName('color')[0].classList.add('selected');

let selected = document.getElementsByClassName('color');

for (let index = 0; index < selected.length; index += 1) {
  document.getElementsByClassName('selected')[index].classList.remove('selected');
}
// Adicionando o evento para cada elemento da lista https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
for (let index = 0; index < selected.length; index += 1) {
  selected[index].addEventListener('click', receiveClick);
}

function receiveClick (event) {
  // Removendo a classe de seleção do elemento anterior https://www.w3schools.com/howto/howto_js_remove_class.asp
//  document.getElementsByClassName('selected')[0].classList.remove('selected');
  event.target.classList.add('selected');
}