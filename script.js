window.onload = function(){
// pratica 3
function setColor (){
    let color = document.getElementsByClassName('color')
        color[0] = document.querySelector('#black')
}
setColor();

// pratica 7
function changeClass (){
let click = document.querySelector('#color-palette');
click.addEventListener('click', function (event) {
    let color = event.target;
    document.querySelector('.selected').className = 'color';
    color.className += '.selected';
    });
}
changeClass();

}


