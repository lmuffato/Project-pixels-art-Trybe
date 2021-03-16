// Define a cor de background das paletas
document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.blue').style.backgroundColor = 'blue';
document.querySelector('.red').style.backgroundColor = 'green';
document.querySelector('.yellow').style.backgroundColor = 'red';

// Define a cor 'selected' ao clicar na paleta de cores

function colorSelection() {
  const listElements = document.getElementsByClassName('color');

  for (let i = 0; i <= listElements.length; i += 1) {
    listElements[i].addEventListener('click', () => {
      for (let i2 = 0; i2 < listElements.length; i2 += 1) {
        listElements[i2].classList.remove('selected');
      }

      listElements[i].classList.add('selected');
    });
  }
}

colorSelection();
