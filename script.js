function setbkColor() {
  const colorsBlock = document.querySelectorAll('.color');
  const bkColor = ['black', 'midnightblue', 'gold', 'darkred'];
  for (const index in colorsBlock) {
    colorsBlock[index].style.backgroundColor = bkColor[index];
  }
}
setbkColor();
