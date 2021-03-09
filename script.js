window.onload = function script() {
  function setColor(colorsArray) {
    const boxColors = document.querySelectorAll('.colors');
    const colors = colorsArray;

    for (let index = 0; index < boxColors.length; index += 1) {
      boxColors[index].style.backgroundColor = colors[index];
    }
  }

  setColor(['red', 'blue', 'green', 'yellow']);
};
