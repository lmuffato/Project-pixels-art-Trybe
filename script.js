function changeColor1() {
  const color1 = document.getElementById('color1');
  color1.style.backgroundColor = 'black';  
}
changeColor1();

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');

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
