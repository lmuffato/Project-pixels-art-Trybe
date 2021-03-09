function populateRows(x) {
  const rows = document.getElementById('pixels-board').children;
  Array.from(rows).forEach((row) => {
    for (let index = 0; index < x; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      row.appendChild(pixel);
    }
  });
}
function createRows(y) {
  const container = document.getElementById('pixels-board');
  for (let index = 0; index < y; index += 1) {
    const row = document.createElement('div');
    container.appendChild(row);
  }
}
function createCanvas(x, y) {
  console.log('Hi');
  createRows(y);
  populateRows(x);
}

window.onload = function init() {
  createCanvas(5, 5);
};
