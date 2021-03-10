
let element1 = document.getElementById("palette-black");
let element2 = document.getElementById("palette-green");
let element3 = document.getElementById("palette-yellow");
let element4 = document.getElementById("palette-blue");

function addSelectedGreen(){
element1.classList.remove('selected');
element2.classList.add('selected');
element3.classList.remove('selected');
element4.classList.remove('selected');
}
element2.addEventListener('click',addSelectedGreen);

function addSelectedYellow(){
element1.classList.remove('selected');
element2.classList.remove('selected');
element3.classList.add('selected');
element4.classList.remove('selected');
}
element3.addEventListener('click',addSelectedYellow);

function addSelectedBlue(){
element1.classList.remove('selected');
element2.classList.remove('selected');
element3.classList.remove('selected');
element4.classList.add('selected');
}
element4.addEventListener('click',addSelectedBlue);

function addSelectedBlack(){
element1.classList.add('selected');
element2.classList.remove('selected');
element3.classList.remove('selected');
element4.classList.remove('selected');
}
element1.addEventListener('click',addSelectedBlack);
