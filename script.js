function blackSelected() {
  const blackColor1 = document.getElementById('color1');
  blackColor1.className += ' selected';
}

window.onload = () => {
  blackSelected();
};
