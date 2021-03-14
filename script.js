function colorsPalete(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    // Acessando cada coluna de uma tabela: https://www.w3schools.com/jsref/prop_html_style.asp
    document.getElementsByTagName('td')[index].style.backgroundColor = colors[index];
  }
}

const colors = ['black', 'blue', 'green', 'pink'];
colorsPalete(colors);

// Adicionando uma nova classe no elemento https://www.w3schools.com/howto/howto_js_add_class.asp
document.getElementsByClassName('color')[0].classList.add('selected');