// requisito 6
function blackSelected() {
  const blackColor1 = document.getElementById('color1');
  blackColor1.className += ' selected';
}

// requisito 7
function selectedColors() {
  const setColors = document.getElementsByClassName('color');
  for (let index = 0; index < setColors.length; index += 1) {
    setColors[index].addEventListener('click', (event) => {
      if (event.target.className === 'color') {
        const firstSelected = document.querySelector('.selected');
        firstSelected.className = 'color';
        setColors[index].className = 'color selected';
      }
    });
  }
}

window.onload = () => {
  blackSelected();
  selectedColors();
};
