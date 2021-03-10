
function selColor () {
  let changeColor = document.querySelector('#color-pallete');
  click.addEventListener('click', function(event) {
    let color = event.target;
    document.querySelector('.selected').className = 'color'
    color.className = ".selected";

  });

}
