function addPixel() {
    for (let index = 0; index < 25; index +=1){
        let pixelParent = document.getElementById('pixel-board');
        let divPixel = document.createElement('div');
        divPixel.className = "pixel"; // divPixel.classList.add('pixel') 
        pixelParent.appendChild(divPixel);
    }
}

addPixel();