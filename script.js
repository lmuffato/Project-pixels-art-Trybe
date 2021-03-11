function selectedColor() {
    const selected1 = document.querySelector('#color-palette');

    selected1.addEventListener('click',function(event) {
        limpaSelected();
        event.target.classList.add('selected') 
    })
}

function limpaSelected() {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
}

selectedColor();


function box25 (){
    const boxGrande = document.querySelector('#pixel-board');
    boxGrande.addEventListener('click',function(event){
        event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    })
    }

box25();

function salveColor () {
    let corDeFundo = document.querySelector('.selected').style.backgroundColor;
    corDeFundo.addEventListener('click',function(){
        corDeFundo.style.backgroundColor.remove;
    } )
}
salveColor();