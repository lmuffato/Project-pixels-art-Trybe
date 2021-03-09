window.onload = function firstColor(){ // REQUISITO 6 - PARA QUE A PAGINA SEJA CARREGADA NA COR PRETA//
    let colorPage = document.getElementById('firstColor');
    colorPage.className = 'selected';
}
colorPage();    

function colorSelected () { // REQUISITO 7 //
    for (let index = 0; index < colorSelected.lengh; index += 1) {
        selected[index].className = 'color';
    }    
    let selected = document.getElementsByClassName('color selected');
    let color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
        color[index].addEventListener('click');    
    }
    }
}
