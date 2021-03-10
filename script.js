window.onload = () => {
  const colorPalette = document.getElementById('color-palette');
  const colorElements = document.querySelectorAll('.color');

  colorPalette.addEventListener('click', (event) => {
    if (event.target.id !== 'color-palette') {
      colorElements.forEach((element) => {
        element.classList.remove('selected');
        event.target.classList.add('selected');
      });
    }
  });
};
