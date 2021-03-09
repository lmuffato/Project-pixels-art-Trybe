
/* window.onload = function () {
    selecionaCor ();
    colocaCor ();
    resetaCor ();
  }; */




 function selecionaCor (){

    let CorPreta = document.getElementsByClassName('selected');
    
    let paletaCor = document.querySelectorAll('.color');

    for (let index = 0; index < paletaCor.length; index += 1) {
        paletaCor[index].addEventListener('click', function(){
        paletaCor[index].className = '.selected'; 
        CorPreta.className = '.color'
        });
    }

    let selecionado = document.querySelector('.selected');
    return selecionado;
 }


 function colocaCor (){

    let pixel =

 }


function resetaCor (){

 } 
