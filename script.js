const colorOne = document.getElementsByClassName('color-one')[0];
const colorTwo = document.getElementsByClassName('color-two')[0];
const colorThree = document.getElementsByClassName('color-three')[0];
const colorFour = document.getElementsByClassName('color-four')[0];
const pixel = document.getElementsByClassName('pixel');

colorOne.addEventListener('click', () => {
  colorOne.classList.add('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.remove('selected');
  console.log('Cliquei no preto');
});

colorTwo.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.add('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.remove('selected');
  console.log('Cliquei no vermelho');
});

colorThree.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.add('selected');
  colorFour.classList.remove('selected');
  console.log('Cliquei no roxo');
});

colorFour.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.add('selected');
  console.log('Cliquei no verde');
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
