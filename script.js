// André Jaques - Turma 10 - Tribo A me ajudou muito a entender o event.target

 /*function selecionaCor (){

    let SelecionadoAntes = document.querySelector('.selected');
    
    let paletaCor = document.querySelectorAll('.color'); //array da paletaCor

    for (let index = 0; index < paletaCor.length; index += 1) {
        paletaCor[index].addEventListener('click', function(){
        paletaCor[index].classList.add = 'selected';  //Adicio uma classe em um elemento que já tem outra classe
        });
        if(paletaCor[index] == document.querySelector('.selected')){
            SelecionadoAntes.classList.remove = 'selected';
            SelecionadoAntes.className = 'color';    
        }
    }

    let selecionado = document.querySelector('.selected');
    return selecionado;
 }*/

function selecionaCor (){

    let paletaCor = document.querySelectorAll('.color');

    for (let index = 0; index < paletaCor.length; index += 1) {
        paletaCor[index].addEventListener('click', clicar);
    }

    function clicar(event){
        let paletaCorSelecionada = event.target; // como o André Jaques me explicou, aqui estou dizendo que o alvo é o alvo do evento em questão (o paletacCor[index])
        let SelecionadoAntes = document.querySelector('.selected');
        SelecionadoAntes.classList.remove('selected');
        paletaCorSelecionada.classList.add('selected');
    }
 }

selecionaCor ()

function colocaCor (){

    let pixelArray = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixelArray.length; index += 1) {
        pixelArray[index].addEventListener('click', function(event){
            let selecionaPixel = event.target; // como o André Jaques me explicou, aqui estou dizendo que o alvo é o alvo do evento em questão.
            let CorSelecionada = document.querySelector('.selected').style.backgroundColor; //aqui estou "pegando" o background-color da div que está com a classe selected
            selecionaPixel.style.backgroundColor = CorSelecionada; 
        });
    }
}
 
colocaCor ()

function resetaCor (){

    let reseta = document.querySelector('#clear-board');
    let pixel = document.querySelectorAll('.pixel');


    reseta.addEventListener('click', function() {
        for (let index = 0; index < pixel.length; index += 1) {    
        pixel[index].style.backgroundColor = 'white';    
        }
    });
}

resetaCor ()