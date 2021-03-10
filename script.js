function selectColor() {
  let colorList = document.querySelectorAll('.color')
  let colorSelectList = document.querySelector('.selected');
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].addEventListener('click', () => {
      if (colorSelectList === 'black') {
				colorSelectList.classList.remove = 'selected';
			} else {
				colorSelectList.classList.add = 'selected';
			}});
  }
}
selectColor ()

