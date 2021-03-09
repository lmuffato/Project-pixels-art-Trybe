let colorPallet = document.querySelector('#pixel-board');

function adicionaPixel(number) {
  for (let i = 0; i < number; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block'
    colorPallet.appendChild(pixel);
  }
}
adicionaPixel(25);
