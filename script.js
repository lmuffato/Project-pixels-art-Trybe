window.onload = function(){
  let colorSelectedString = document.querySelector('#color-select');
  colorSelectedString.innerText = 'black';

  let colorInfo = document.querySelector('#color-palette');

	colorInfo.addEventListener('click', function(event){
		let colorName = event.target.id;
		if(colorName === 'color-palette'){
			colorSelectedString.innerText = 'Nenhuma cor selecionada'
		}else{
      colorSelectedString.innerText = colorName
		}
	});
}