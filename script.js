const colorsObj = {
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

// Req. 01
function addColorsPalette(colors) {
  const colorPalette = document.getElementById('color-palette');

  Object.keys(colors).forEach((key) => {
    const newColor = document.createElement('div');
    newColor.className = 'color';
    newColor.style.backgroundColor = key;
    colorPalette.appendChild(newColor);
  });
}

window.onload = () => {
  addColorsPalette(colorsObj);
};
