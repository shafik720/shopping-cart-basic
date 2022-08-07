
function updateQuantity(isIncreased, priceValue){
    let mobileQuantity = document.getElementById('quantity');
    let showValue = mobileQuantity.value;
    let price = document.getElementById('price');
    let prices = parseFloat(price.innerText);

    if(isIncreased){
        let increasedQuantity = parseInt(showValue) + 1;
        mobileQuantity.value = increasedQuantity;
    }else if(showValue>0){
        let decreasedQuantity = parseInt(showValue) - 1;
        mobileQuantity.value = decreasedQuantity;
    }   
    let productPrice = (parseInt(mobileQuantity.value)*priceValue);
    price.innerText = productPrice;
    console.log(productPrice);
}


document.getElementById('increaseBtn').addEventListener('click', function(){
    updateQuantity(true, 59);
})

document.getElementById('decreaseBtn').addEventListener('click', function(){
    updateQuantity(false, 59);
})