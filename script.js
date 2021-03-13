function cores () {
    document.getElementsByClassName("color")[0].style.backgroundColor = 'black';
    document.getElementsByClassName("color")[1].style.backgroundColor = 'red';
    document.getElementsByClassName("color")[2].style.backgroundColor = 'blue';
    document.getElementsByClassName("color")[3].style.backgroundColor = 'green';
}
cores ()

// ou 
//function colorsPaddles() {
//    const adicionandoCores = document.getElementsByClassName('color');
//    adicionandoCores[0].style.backgroundColor = 'red';
//    adicionandoCores[1].style.backgroundColor = 'blue';
//    adicionandoCores[2].style.backgroundColor = 'purple';
//    adicionandoCores[3].style.backgroundColor = 'yellow';
//}
//colorsPaddles();