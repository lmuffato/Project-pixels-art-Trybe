window.onload = function () {

  function setColor() {
    const colorPalette = document.getElementById("color-palette");
    colorPalette.addEventListener('click', function (e) {
      const colorElement = e.target
      const colors = document.querySelectorAll(".color");
      for (let index = 0; index < colors.length; index += 1) {
        colors[index].classList.remove('selected');
      }
      if (colorElement.localName === 'div')
        colorElement.classList.add("selected");
    })
  }
  setColor();

  function setInicialColor () {
    const initialColor = document.querySelector("#black");
    initialColor.classList.add("selected")
  }

  setInicialColor();

}
