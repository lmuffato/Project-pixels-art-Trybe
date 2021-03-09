function criaPaleta(numDePaleta) {
  for (let index = 0; index < numDePaleta; index +=1) {
    let pegaPaleta = document.getElementById("color-palette");
    let criaPaleta = document.createElement("div")
    criaPaleta.className = 'color';
    pegaPaleta.appendChild(criaPaleta);
  }
}

function criaQuadro(numberOfQuadros) {
  for (let index = 0; index < numberOfQuadros * numberOfQuadros; index += 1) {
    let criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    let pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
  }
}

criaPaleta(4);
criaQuadro(5);