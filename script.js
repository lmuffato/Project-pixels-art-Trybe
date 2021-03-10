
 window.onload = function () {
    selecionaCor ();
  }; 


 function selecionaCor (){

    let SelecionadoAntes = document.querySelector('.selected');
    
    let paletaCor = document.querySelectorAll('.color'); //array da paletaCor

    for (let index = 0; index < paletaCor.length; index += 1) {
        paletaCor[index].addEventListener('click', function(){
        paletaCor[index].classList.add = 'selected';  //Adicio uma classe em um elemento que já tem outra classe
        });
        if(paletaCor[index].classList.add = 'selected'){
            SelecionadoAntes.classList.remove = 'selected';
            SelecionadoAntes.className = 'color';    
        }
    }

    let selecionado = document.getElementsByClassName('selected');
    return selecionado;
 }

/*
 function colocaCor (){

    let pixelArray = document.querySelectorAll('.pixel');

    for (let index = 0; index < pixelArray.length; index += 1) {
        pixelArray[index].addEventListener('click', function(event){
            pixelArray[index] = event.target;
        });
    }
}
 


function resetaCor (){

 } 
*/