window.onload {
    
}

function changeColor (){
    let colorInitial = document.querySelector('color');
    colorInitial.addEventListener('click',function (event){
        console.log(event)
    })
}

changeColor();