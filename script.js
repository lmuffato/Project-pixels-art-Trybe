window.onload = function() {
  function createH1(h1Txt, h1Id) {
    const h1Container = document.body;
    const newH1 = document.createElement('h1');
    const newH1Id = h1Id;

    newH1.innerText = h1Txt;
    newH1.id = newH1Id;
    h1Container.appendChild(newH1);
  }

  createH1('Paleta de Cores', 'title');
};
