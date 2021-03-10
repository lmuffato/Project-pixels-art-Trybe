// cria os elementos na forma de div
const quadroPixels = document.getElementById('pixel-board');
for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  quadroPixels.appendChild(pixel);
  pixel.className = 'pixel';
}

// adiciona classe selected à cor preta
document.getElementById('color-palette').firstElementChild.classList.add('selected');

// recupera os pixels e a paleta de cores
let selectedPixel = document.querySelectorAll('.pixel');
const element = document.querySelectorAll('.color');
let currentColor;

for (let index = 0; index < 4; index += 1) {
  element[index].addEventListener('click', function () {
    document.querySelector('.selected').classList.remove('selected');
    element[index].classList.add('selected');
    currentColor = window.getComputedStyle(document.querySelector('.selected'),null).getPropertyValue("background-color");
  })
}

for (let indexPixel = 0; indexPixel < 25; indexPixel += 1) {
  selectedPixel[indexPixel].addEventListener('click', function () {
    selectedPixel[indexPixel].style.backgroundColor = currentColor;
  })
}


  /* if (element[index].className === 'selected') {
      pixel[2].style.backgroundColor = element[index].style.backgroundColor;
    }
 // }


pixel[x].addEventListener('click', function () {

}
console.log(element);
element[2].classList.add('selected');
element[2].addEventListener('click', selectColor);


  }

let corTeste = 'black';
if (corTeste === element[0].style.backgroundColor) {
  document.querySelectorAll('.pixel')[1].style.backgroundColor = 'black';
} else {
  console.log(false);
} */