function colorBlack (){
    let order = document.getElementsByClassName('color');
    let element = document.createElement('div');
    for (let i = 0; i < order.length; i += 1){
        if (order[0] !== document.getElementById('black')){
            order[0] = document.getElementById('black')
        }
        else{
            Math.floor(Math.random(order[i]));
        }
    }
    order.appendChild(element);
} 
colorBlack();