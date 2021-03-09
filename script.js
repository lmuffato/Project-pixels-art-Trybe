const colorFirst = document.querySelector('.first');
const colorSecond = document.querySelector('.second');
const colorThird = document.querySelector('.third');
const colorFourth = document.querySelector('.fourth');

/* Randomizador de cores estudado e reproduzido daqui: https://stackoverflow.com/questions/1484506/random-color-generator  */

function randomizeColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function injectColors() {
  colorFirst.style.backgroundColor = 'black';
  colorSecond.style.backgroundColor = randomizeColor();
  colorThird.style.backgroundColor = randomizeColor();
  colorFourth.style.backgroundColor = randomizeColor();
}

injectColors();