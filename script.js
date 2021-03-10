function blackSelected() {
  const blackColor1 = document.getElementById('color1');
  blackColor1.className += ' selected';
}

function selectedColors() {
  const setColors = document.getElementsByClassName('color');
  for (let index = 0; index < setColors.length; index += 1) {
      setColors[index].addEventListener('click', function (event) {
          if (event.target.className === 'color') {
              const firstSelected = document.querySelector('.selected');
              selected.className = 'color';
              setColors[index].className = 'color selected';
          }
      });      
  }
}

window.onload = () => {
  blackSelected();
  selectedColors();
};
