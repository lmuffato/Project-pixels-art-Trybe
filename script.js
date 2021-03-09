let colorPalette = document.querySelector('#color-palette')
function createPalette (){
  for (let index = 0; index < 4; index += 1){
    let colorDiv = document.createElement('div')
    colorPalette.appendChild(colorDiv)
    if (index === 0){
      colorDiv.classList.add('color','black')
    } else if (index === 1){
      colorDiv.classList.add('color','red')
    } else if (index === 2){
      colorDiv.classList.add('color','blue')
    } else if (index === 3){
      colorDiv.classList.add('color','green')
    }
  }
} createPalette()
