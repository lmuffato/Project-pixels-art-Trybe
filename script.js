let quadroPixels = document.getElementById('pixel-board');
for (let index = 1; index <= 25; index += 1) {
  pixel = document.createElement('div');
  quadroPixels.appendChild(pixel);
  pixel.className = 'pixel';
}
