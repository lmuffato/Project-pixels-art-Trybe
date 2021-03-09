window.onload = () => {
  function colorPalette() {
    const colors = ['black', 'red', 'green', 'blue'];
    const colorsFather = document.querySelector('#color-palette');

    for (let index = 0; index < colors.length; index += 1) {
      const elementColor = document.createElement('li');

      elementColor.classList.add('color');
      elementColor.style.backgroundColor = `${colors[index]}`;
      colorsFather.appendChild(elementColor);
    }
  }
  colorPalette();
};
