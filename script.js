window.onload = function () {
  const lines = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < lines.length; index += 1) {
    for (let column = 1; column <= 5; column += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      lines[index].appendChild(div);
    }
  }
  const blackPalette = document.getElementById('black-palette');
  blackPalette.className += ' selected';
};
