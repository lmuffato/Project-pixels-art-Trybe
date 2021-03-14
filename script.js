function addColor() {
  const colors = document.getElementsByClassName('color')[0].classList.add('selected');
  return colors;
}

addColor();

function removeAndAddSelectedClass() {
  const pai = document.getElementById('dad'); // encontro o meu pai através do getElement
  pai.addEventListener('click', (e) => { // comunico ao pai o recebimento de um vento
    const targetReceiver = e.target; // ocorrência dos eventos nos filhos individualmente td
    const colorContainer = document.querySelectorAll('.color'); // então atribua à constante a classe color
    for (let index = 0; index < colorContainer.length; index += 1) { // loop percorre o tamanho 
      colorContainer[index].classList.remove('selected'); // 
    }
    if (targetReceiver.classList.contains('color')) { // se os elementos filhos possuam a classe color, faça:
      targetReceiver.classList.add('selected');
    }
  })
  
}

removeAndAddSelectedClass();

// agradecimentos ao Anderson e ao William pelo auxílio através do Slack