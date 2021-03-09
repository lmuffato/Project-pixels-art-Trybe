window.onload = function () {
  redColor();
  greenColor();
  paint();
}
   let chooseColor;
   function redColor() {
    const pixelRed = document.getElementById('vermelho');
    pixelRed.addEventListener('click', () => {
     chooseColor = pixelRed.style.backgroundColor;
      
    });
  }
  function greenColor() {
    const pixelGreen = document.getElementById('verde');
    pixelGreen.addEventListener('click', () => {
    chooseColor = pixelGreen.style.backgroundColor;
  });

  }
  function paint() {
    const pixel = document.getElementsByClassName('pixel');
    pixel.addEventListener('click', () => {
    pixel.style.backgroundColor = chooseColor;
  });
  }

 

