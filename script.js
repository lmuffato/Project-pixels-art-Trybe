window.onload = initialColor;

function initialColor(){
    sessionStorage.setItem("cor", "black");
}

function palette() {
    let paleta = document.querySelectorAll(".color")
    let cores = ["black", "blue", "yellow", "purple"];
    for (let index = 0; index < paleta.length; index += 1){
        paleta[index].style.backgroundColor = cores[index];
    }
}

palette();

function getColor(obj) {
    sessionStorage.setItem("cor", obj.style.backgroundColor)
}

function setColor(obj) {
    let selectedColor = sessionStorage.getItem("cor")
    obj.style.backgroundColor = selectedColor;
}

function clearBoard() {
    let quadro = document.querySelectorAll(".pixel")
    for (let index = 0; index < quadro.length; index += 1) {
        quadro[index].style.backgroundColor = "white";
    }
}