function squareColors() {
  const square1 = document.getElementById('black');
  square1.style.backgroundColor = 'black';

  const square2 = document.getElementById('red');
  square2.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square3 = document.getElementById('green');
  square3.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;

  const square4 = document.getElementById('blue');
  square4.style.backgroundColor = `rgb(${Math.random() * 255}, 
  ${Math.random() * 255}, ${Math.random() * 255})`;
}

window.onload = function () {
  squareColors();
};
