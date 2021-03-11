let paletteColors = document.getElementById('color-palette');

function changeClassColors (event){
let colorsDiv = document.getElementsByClassName('color');
for(let index= 0; index < colorsDiv.length; index+=1) {
 colorsDiv[index].classList.remove('selected');
}
let colorClass = event.target.classList.add('selected');
}
paletteColors.addEventListener("click",changeClassColors);


