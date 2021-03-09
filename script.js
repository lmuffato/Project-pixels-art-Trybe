const colorBlack = document.querySelector('#black');
const colorPink = document.querySelector('#pink');
const colorGreen = document.querySelector('#green');
const colorOrange = document.querySelector('#orange');

function addClass(color) {
    color.classList.add('selected');
}

function removeClass(color) {
    color.classList.remove('selected');
}

colorBlack.addEventListener('click', function (){
    addClass(colorBlack);
    removeClass(colorPink);
    removeClass(colorGreen);
    removeClass(colorOrange);
    console.log(colorPink); 
})

colorPink.addEventListener('click', function () {
    addClass(colorPink);
    removeClass(colorBlack);
    removeClass(colorGreen);
    removeClass(colorOrange);
    console.log(colorPink);
})


colorGreen.addEventListener('click', function () {
    addClass(colorGreen);
    removeClass(colorBlack);
    removeClass(colorPink);
    removeClass(colorOrange);
})

colorOrange.addEventListener('click', function () {
    addClass(colorOrange);
    removeClass(colorBlack);
    removeClass(colorPink);
    removeClass(colorGreen);     
})