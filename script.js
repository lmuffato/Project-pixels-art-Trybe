
let clean = document.querySelector('#clear-board');
clean.addEventListener('click', clearPixel);

function clearPixel() {
  let pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }  
}


