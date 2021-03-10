const colorBlack = document.querySelector('#black');
const colorPink = document.querySelector('#pink');
const colorGreen = document.querySelector('#green');
const colorOrange = document.querySelector('#orange');

function addClass(color) {
  color.classList.add('selected');
}

function removeClass(color1, color2, color3) {
  color1.classList.remove('selected');
  color2.classList.remove('selected');
  color3.classList.remove('selected');
}

colorBlack.addEventListener('click', () => {
  addClass(colorBlack);
  removeClass(colorPink, colorGreen, colorOrange);
});

colorPink.addEventListener('click', () => {
  addClass(colorPink);
  removeClass(colorBlack, colorGreen, colorOrange);
});

colorGreen.addEventListener('click', () => {
  addClass(colorGreen);
  removeClass(colorBlack, colorPink, colorOrange);
});

colorOrange.addEventListener('click', () => {
  addClass(colorOrange);
  removeClass(colorBlack, colorPink, colorGreen);
});

const pixels = document.querySelectorAll('.pixel');

function getColorPalette(e) {
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

for (let index = 0; index < pixels.length; index += 1) {
  let eachPixel = pixels[index];
  eachPixel.addEventListener('click', getColorPalette);
}
