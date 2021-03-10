const pixelBoard = document.getElementById('pixel-board'); // variaveis

for (let index = 0; index < 5; index += 1) { // aqui esta sendo gerada a tabela de 5x5
  const line = document.createElement('div');
  line.className = 'line';
  pixelBoard.appendChild(line);
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const lineInside = document.createElement('div');
    lineInside.className = 'pixel';
    line.appendChild(lineInside);
  }
}
