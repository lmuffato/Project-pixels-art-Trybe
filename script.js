const firstColor = document.querySelectorAll('.color')[0];
const secondColor = document.querySelectorAll('.color')[1];
const thirdColor = document.querySelectorAll('.color')[2];
const fourthColor = document.querySelectorAll('.color')[3];

function randomColor() {
  const numbersAndLetters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += numbersAndLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(randomColor());

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = randomColor();
thirdColor.style.backgroundColor = randomColor();
fourthColor.style.backgroundColor = randomColor();

sessionStorage.setItem('color', 'black');