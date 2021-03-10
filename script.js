window.onload = function (){ 

// pega os elementos da classe color
let runBgColors = document.getElementsByClassName('color');
 


// dar cor de fundo aos elementos base
runBgColors[0].style.backgroundColor = "black";
runBgColors[1].style.backgroundColor = "red";
runBgColors[2].style.backgroundColor = "gray";
runBgColors[3].style.backgroundColor = "yellow";

// Função para capturar a cor da class color
function changeBgColor() {
let bgColor = document.getElementsByClassName('color');
    for (index = 0; index < bgColor.length; index += 1) {
    let bgPoint = bgColor[index];
    bgPoint.addEventListener('click', colorClick); 
    function colorClick() {
    console.log(bgPoint.style.backgroundColor);
    }
}
}

function returnClickClass () {
    let clicar = document.getElementsByClassName('pixel');
        for (index = 0; index < clicar.length; index += 1) {
        let control = clicar[index];
        control.addEventListener('click', onlineClick); 
        function onlineClick() {
         control.style.backgroundColor = "black";
            }
        }
}
    

returnClickClass();
changeBgColor();

}