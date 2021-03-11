// clica na palete de cores
// retirar o selected da anterior
// inclui na selecionada

// 1.cria o click
let clickColor = document.getElementsByClassName('color');

// 2. adiciona o click
for(let index = 0; index < clickColor.length; index +=1) {
    clickColor[index].addEventListener('click', selectedRemove);
}

// remove a selected de todas as classes
function selectedRemove (evente) {
    let divClassRemove = document.getElementsByClassName('selected');
    divClassRemove[0].classList.remove('selected');

    let eventeTarget = evente.target;
    eventeTarget.classList.add('selected');
} 
