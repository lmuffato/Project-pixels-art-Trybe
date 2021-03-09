function changeColor1() {
  const color1 = document.getElementById('color1');
  color1.style.backgroundColor = 'black';  
}
changeColor1();

 window.onload = function inicialColot() {
  const inicialColor = document.getElementById('color1');
  inicialColor.className = 'selected';     
}
inicialColor();
