const color = '#fff';

function createColorCell(colorName) {
  const colorCell = document.createElement('li');

  colorCell.style.backgroundColor = colorName;
  colorCell.style.color = colorName;
  colorCell.style.border = '1px solid black';
  colorCell.addEventListener('click', selectColor);

  if (colorName === 'black') {
    colorCell.classList.add('color', 'selected');
  } else {
    colorCell.classList.add('color');
  }

  return colorCell;
}

function createColorPalette() {
  const colors = ['black', 'red', 'yellow', 'blue'];

  for (let colorUnit = 0; colorUnit < colors.length; colorUnit += 1) {
    const colorPallet = document.getElementById('color-palette');
    colorPallet.appendChild(createColorCell(colors[colorUnit]));
  }
}

createColorPalette();

function selectColor(Event) {
  const newColor = Event.target;
  const isSelected = newColor.className.includes('selected');

  if (!isSelected) {
    const selectedColor = document.querySelector('.selected');
    // referencia sobre classList https://www.w3schools.com/howto/howto_js_remove_class.asp
    selectedColor.classList.remove('selected');
    newColor.classList.add('selected');
  }
  console.log(newColor.style.backgroundColor);
}
