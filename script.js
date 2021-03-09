for (let index = 0; index < 5; index += 1) {
  const tagLinha = document.createElement('div');
  tagLinha.className = 'line';
  tagLinha.style.height = '42px';
  document.querySelector('#pixel-board').appendChild(tagLinha);
  for (let i = 1; i <= 5; i += 1) {
    const tagPixel = document.createElement('div');
    tagPixel.className = 'pixel';
    tagPixel.style.backgroundColor = 'white';
    tagPixel.style.width = '40px';
    tagPixel.style.height = '40px';
    tagPixel.style.display = 'inline-block';
    tagPixel.style.border = 'solid black 1px';
    document.querySelectorAll('.line')[index].appendChild(tagPixel);
  }
}
