window.onload = function() {
  document.getElementById('black').classList.add('selected');
};

function cleanColor() {
  document.querySelector('.selected').classList.remove('selected');
}

function selectColorPaint(event) {
  const currentColor = event.target;
  cleanColor();

  currentColor.classList.add('selected');
}

document.getElementById('color-palette').addEventListener('click', selectColorPaint);
