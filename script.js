const colorOne = document.getElementsByClassName('color-one')[0];
const colorTwo = document.getElementsByClassName('color-two')[0];
const colorThree = document.getElementsByClassName('color-three')[0];
const colorFour = document.getElementsByClassName('color-four')[0];
const pixel = document.getElementsByClassName('pixel');
const btnLimpar = document.getElementById('clear-board');

colorOne.addEventListener('click', () => {
  colorOne.classList.add('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.remove('selected');
});

colorTwo.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.add('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.remove('selected');
});

colorThree.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.add('selected');
  colorFour.classList.remove('selected');
});

colorFour.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.add('selected');
});

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', (event) => {
    const paletteSelectedColor = document.getElementsByClassName('selected')[0];
    const backgroundColor = window.getComputedStyle(paletteSelectedColor, null)
      .getPropertyValue('background-color');
    const pixelColor = event.target;
    pixelColor.style.backgroundColor = backgroundColor;
  });
}

btnLimpar.addEventListener('click', () => {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});
