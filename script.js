function createPixels(n) {
  const container = document.getElementById('pixels-board');
  for (let index = 0; index < n; index += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    if (index % 2 === 0) {
      row.style.backgroundColor = 'black';
    }
    container.appendChild(row);
  }
}
function createCanvas(x, y) {
  console.log('Hi');

  createPixels(x * y);
}

window.onload = function init() {
  createCanvas(5, 5);
};
