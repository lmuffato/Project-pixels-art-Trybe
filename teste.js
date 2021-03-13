function pixelSelected() {
  const colorPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < colorPixel.length; index += 1) {
    colorPixel[index].addEventListener('click', printPixel)
    }
  function printPixel() {
    const lookPixel = document.querySelectorAll('td');
    for (let index2 = 0; index2 < lookPixel.length; index2 += 1) {
      if (lookPixel[index2].className === 'color selected') {
        for (let index3 = 0; index3 < colorPixel.length; index3 += 1) {
          this.style.backgroundColor = lookPixel[index2].style.backgroundColor;
        }
      }
    }
  }
}