//Aplica cores na paleta;
function toPaintbox() {
    const box = document.querySelectorAll('.color');
    box[0].style.backgroundColor = 'black';
    box[1].style.backgroundColor = 'blue';
    box[2].style.backgroundColor = 'red';
    box[3].style.backgroundColor = 'yellow';
}
toPaintbox();

function colorSelect(x) {
    const box = document.querySelectorAll('.color')
    box[x].classList.add('selected');
}
window.onload = colorSelect(0);
