window.onload = function() {
  function setPalette(color1, color2, color3) {
    let getPalette = document.getElementsByClassName('color');
    getPalette[0].style.backgroundColor = 'black';
    getPalette[1].style.backgroundColor = color1;
    getPalette[2].style.backgroundColor = color2;
    getPalette[3].style.backgroundColor = color3;
  }

  setPalette('red', 'green', 'blue');
}