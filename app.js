
function updateQuantity(increased){
    let mobileQuantity = document.getElementById('quantity');
    let showValue = mobileQuantity.value;

    if(increased){
        let increasedQuantity = parseInt(showValue) + 1;
        mobileQuantity.value = increasedQuantity;
    }else if(showValue>0){
        let decreasedQuantity = parseInt(showValue) - 1;
        mobileQuantity.value = decreasedQuantity;
    }   
}


document.getElementById('increaseBtn').addEventListener('click', function(){
    updateQuantity(true);
})

document.getElementById('decreaseBtn').addEventListener('click', function(){
    updateQuantity(false);
})