
let color;
let elementoTd = document.getElementsByClassName('pixel');
window.onload = function () {
  document.getElementsByClassName('color')[0].classList.add('select');
  color = "black";
  for (let index = 0; index < elementoTd.length; index++) {
  elementoTd[index].onclick = function (event) { addColor(event)};
  }
}

function addColor (elemento) {
  elemento.target.classList.add(color);
}

function limpar() {
  for (let index = 0; index < elementoTd.length; index++) {
    elementoTd[index].classList.remove('black');
    elementoTd[index].classList.remove('pink');
    elementoTd[index].classList.remove('yellow');
    elementoTd[index].classList.remove('grey');        
  }
}

let colorSelect = document.getElementsByClassName('color');
  for (let index = 0; index < colorSelect.length; index++) {
colorSelect[index].onclick = function (event) { selectElementoCor(event)};   
}
let classes;
  function selectElementoCor (evento) {
  for (let index = 0; index < colorSelect.length; index ++ ) {
  let classes = colorSelect[index].classList;
  classes.remove("select");      
}
  evento.target.classList.add("select");
  color = evento.target.id;
}
