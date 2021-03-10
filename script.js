function selectColor() {
  let colorList = document.querySelectorAll('.color')
  let colorSelectList = document.querySelector('.selected');
  for (let index = 0; index < colorList.length; index += 1) {
    colorList[index].addEventListener('click', function () {
			document.querySelector('.selected').classList.remove('selected');
			colorList[index].classList.add('selected');
	});
 }
}
selectColor ()

