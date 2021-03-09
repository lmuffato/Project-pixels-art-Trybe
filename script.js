function createColorsPallete(amount) {
  let divColors = document.querySelector('#color-palette');
  console.log(divColors);
  for (let index = 1; index <= amount; index += 1) {
    let colors = document.createElement('div');
    colors.className = 'color';
    console.log(colors);
    divColors.appendChild(colors);
  }
}
createColorsPallete(4);

function assignColors() {
  let colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'green';
  colors[2].style.backgroundColor = 'yellow';
  colors[3].style.backgroundColor = 'purple';
}
assignColors();