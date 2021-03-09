function createPixels(n) {
  const container = document.getElementById('pixels-board');
  for (let index = 0; index < n; index += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    container.appendChild(row);
  }
}
function createCanvas(x, y) {
  console.log('Hi');

  createPixels(x * y);
}

window.onload = function init() {
  createCanvas(5, 5);
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.classList.toggle('selected');
};
