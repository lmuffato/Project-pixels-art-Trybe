function selectColor() {
  let colorList = document.querySelectorAll('.color')
  let colorSelectList = document.querySelector('.selected');
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].addEventListener('click', () => {
      if (colorSelectList[index] === 'black') {
				colorSelectList[index].classList.remove = 'selected';
			} else {
				colorSelectList[index].classList.add = 'selected';
			}});
  }
}
selectColor ()

