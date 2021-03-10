window.onload = function () {

  function setColor() {
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', function (e) {
      const colorElement = e.target
      const colors = document.querySelectorAll('.color');
      for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove('selected');
      }
      if (colorElement.localName === 'div')
        colorElement.classList.add("selected");
    })
  }
  setColor();

  function setInicialColor() {
    const initialColor = document.querySelector('#black');
    initialColor.classList.add('selected')

    setInicialColor();
  }

  function setPixelColor() {
    let board = document.getElementById('pixel-board');
    board.addEventListener('click', function (e) {

      const pixel = e.target

      let selectedColor = document.querySelector(".selected")
      console.log(selectedColor.id)


      if (pixel.localName === 'div') {
        pixel.style.backgroundColor = selectedColor.id
      }

    })
  }

  setPixelColor();

  function clearBoard() {
    let pixel = document.querySelectorAll('.pixel')
    let button = document.querySelector('#clear-board')
    button.addEventListener('click', function () {
      for (let index = 0; index < pixel.length; index += 1) {
        if (pixel[index].style.backgroundColor != "white")
          pixel[index].style.backgroundColor = "white"
      }
    })
  }

clearBoard()

}