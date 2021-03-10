// André Jaques - Turma 10 - Tribo A me ajudou muito a entender o event.target

 function selecionaCor (){

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
 }

 selecionaCor ();


 function colocaCor (){

    let pixelArray = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixelArray.length; index += 1) {
        pixelArray[index].addEventListener('click', function(event){
            let selecionaPixel = event.target; // como o André Jaques me disse, aqui estou dizendo que o alvo é o alvo do evento em questão.
            let CorSelecionada = document.querySelector('.selected').style.backgroundColor; //aqui estou "pegando" o background-color da div que está com a classe selected
            selectPixel.style.backgroundColor = CorSelecionada; 
        });
    }
}
 


function resetaCor (){

    let reseta = document.querySelector('#resetar');

    reseta.addEventListener('click', function() {
        document.querySelectorAll('.pixel').style.backgroundColor = 'white';
    });
 } 
