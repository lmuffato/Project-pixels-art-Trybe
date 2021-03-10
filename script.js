// referência: Jodiel-Briesemeister. (https://github.com/tryber/sd-010-a-project-pixels-art/pull/119/files);
function palette() {
    const color = document.querySelectorAll('.color');
    const arrayColors = ['black', 'blue', 'yellow', 'green'];
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = arrayColors[index];
      if (arrayColors[index] === 'black') {
        color[index].className += ' selected';
      }
    }
  }
  
  window.onload = palette;