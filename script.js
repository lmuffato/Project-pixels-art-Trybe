function colorSelected() {
  let colorBlock = document.querySelectorAll('.color');
	
  for (let index = 0; index < colorBlock.length; index += 1) {
    switch (index) {
			case 0:
				colorBlock[index].style.backgroundColor = 'red';
				break;
			case 1:
				colorBlock[index].style.backgroundColor = 'black';
				break;
			case 2:
				colorBlock[index].style.backgroundColor = 'yellow';
				break;
			case 3:
				colorBlock[index].style.backgroundColor = 'orange';
				break;
    }
  }
}
colorSelected();