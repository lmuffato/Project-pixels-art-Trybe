// Requisito 1;

function createh1() {
  const createH1 = document.createElement('h1');
  const selectorBody = document.querySelector('body');
  createH1.id = 'title';
  createH1.innerHTML = 'Paleta de Cores';
  selectorBody.appendChild(createH1);
}
createh1();
