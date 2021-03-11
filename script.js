let paletteColors = document.getElementById('color-palette');
console.log(paletteColors);

function changeClassColors (event){
let colorClass = event.target.classList.add('selected');
console.log(event.target);
}
paletteColors.addEventListener("click",changeClassColors);
