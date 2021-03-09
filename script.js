for (let index = 0; index < 5; index += 1) {
  let tagLinha = document.createElement('div');
  tagLinha.className = 'line';
  document.querySelector('#pixel-board').appendChild(tagLinha);
  for (let i = 1; i <= 5; i += 1) {
    let tagPixel = document.createElement('div');
    tagPixel.className = 'pixel';
    tagPixel.style.backgroundColor = 'white';
    document.querySelectorAll('.line')[index].appendChild(tagPixel);
  }
}