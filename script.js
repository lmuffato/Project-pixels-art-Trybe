window.onload = function() {
  document.querySelector('#color-palette').addEventListener('click', classChange);
  function classChange(event) {
    const paletteColors = document.querySelectorAll('.color');
    for (let index = 0; index < paletteColors.length; index += 1) {
      paletteColors[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
};
