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

	function createTable(height, weight){
		let table = document.querySelector('#pixel-board');
		for(let index = 0; index < height; index += 1){
			let tr = document.createElement('tr');
			tr.classList.add('main')
			table.appendChild(tr)
			for(let index = 0; index < weight; index += 1){
				let td = document.createElement('td');
				td.classList.add("pixel");
				tr.appendChild(td)
			}
		}
	}
	createTable(5, 5);
}
