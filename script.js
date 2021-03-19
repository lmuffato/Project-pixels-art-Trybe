function addSelect(){
Const addSelect = document.querySelectorAll('.color');

for (let index = 0; index < addSelect.length; index += 1){
    addSelect[index].addEventListener('click', removeSelect);
}

function removeSelect () {
  for (let index = 0; index < addSelect.length; index += 1){
    addSelect[index].classList.remove('select');
}
this.classList.add('select');
}
}
addSelect();