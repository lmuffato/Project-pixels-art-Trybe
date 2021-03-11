window.onload = function kickoff() {
  const blackBox = document.querySelector('.blackBox');
  blackBox.classList.add('selected');
};
// para cumprir o requisito de a cor preta ter .selected
const allBox = document.querySelectorAll('.class');
//  Resolvi o problema usando essa ref: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/

//  Aqui onde entra o raciocínio para entrar no DOM eu me basiei no trablho de Vitor Canto - turma 10A
function pickColor() {
  allBox.forEach((color) => {
    color.addEventListener('click', (_event) => {
      for (let index = 0; index < allBox.length; index += 1) {
        allBox[index].classList.remove('selected');
      }
      color.classList.add('selected');
    });
  });
}
pickColor();
