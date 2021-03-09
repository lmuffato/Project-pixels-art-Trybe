
/* window.onload = function () {
    selecionaCor ();
    colocaCor ();
    resetaCor ();
  }; */



 function selecionaCor (){
     
    let paletaCor = document.querySelectorAll('.color');

    for (let index = 0; index < paleta.length; index += 1) {
        paletaCor[index].addEventListener('click', function(){
        paletaCor[index].className = '.selected'; 
        });
    }
    let selecionado = document.querySelector('.selected');
    return selecionado;
 }


 function colocaCor (){



 }


function resetaCor (){

 } 
