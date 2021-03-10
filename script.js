let pixelBoard = document.getElementById("pixel-board");
pixelBoard.style.display="inline"
window.onload=createPixelBlocks(25,5);
// every pixel are squares
function createPixelBlocks(size,lineSize){
    for (let index = 1; index < size+1; index++) {
        pixelSquare=document.createElement('div');
        pixelSquare.style.width="40px"
        pixelSquare.style.height="40px"
        pixelSquare.style.border="1px solid grey"
        pixelSquare.style.display="inline-block"
        pixelSquare.classList.add('pixelSquare');
        pixelBoard.appendChild(pixelSquare);
        if(index%lineSize==0&&index!=0){
        let breakLine =document.createElement("br")
        pixelBoard.appendChild(breakLine);
        }
    }
}
let pixelSquares = document.getElementsByClassName('pixelSquare');
pixelBoard.addEventListener('click',clickEvent);

function clickEvent(e){
    let event= e;
    event.target.style.backgroundColor="black";        
}