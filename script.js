const colors = ['black','blue','red','yellow'];
const pixels = document.querySelectorAll('.pixel');
const clearBtn = document.getElementById('clear-board');
const pixelPalette = document.getElementById('color-palette')
const pixelBoard = document.getElementById('pixel-board');
const colorSel = document.querySelector('.selected')
const paint = document.querySelector('.selected')
const allPixels =document.querySelectorAll('.pixel')


//Chamando a criação das paletas
window.onload = createPalette(colors),createBoard();
//Criacao da paleta
function createPalette(colors){
    for (let pos = 0; pos < 4;pos++){
        const pPixel = document.createElement('div');
        pPixel.className = 'color';
        if(colors[pos] === 'black'){
            pPixel.className = 'color selected';
        }
        //pPixel (pixels da paleta) vao receber no seu style a strintg de cores colors criada na linha 1
        pPixel.style.backgroundColor = colors[pos];
        //chama o container das paletas de cores e adiciona o pPixel (uma div que indica o pixels  da paleta)
        document.getElementById("color-palette").appendChild(pPixel);
        
    }
}
//Criacao do quadro
function createBoard(){
    for (let pos = 0; pos < 25;pos++){
        const pPixel = document.createElement('div');
        pPixel.className = 'pixel';
    document.getElementById("pixel-board").appendChild(pPixel); //Aqui eu tive que usar o getElementById pra localizar a tag que seri o pai ,dessa forma usei o append child pra dizer que "paletapixel" seria filha dessa

        
    }
}

clearBtn.addEventListener('click', function(){
    allPixels.forEach((pixel)=> {
        pixels.style.backgroundColor = 'white';
    });
});

pixelPalette.addEventListener('click',(event) => {
    let check = event.target.className;
        colorSel.className = check.className('color')
        event.target.className ='color selected';
});