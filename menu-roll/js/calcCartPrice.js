function calcCartPrice() {
    const cart_item = document.querySelectorAll('.cart-item');
    const totalPriceEnd = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')
    const datakoment = document.querySelector('[data-koment]')

    let totalPrice = 0;

    cart_item.forEach((item)=>{
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
 
    const currentPrice = parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML);
    console.log(calcCartPrice);
    totalPrice += currentPrice;
})
console.log(totalPrice);
totalPriceEnd.innerHTML = totalPrice;


if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
    datakoment.classList.remove("none")
} else {
    cartDelivery.classList.add('none');
    datakoment.classList.add("none")
}


    if(totalPriceEnd.innerHTML >= 900 ) {

    deliveryCost.classList.add('free')
    deliveryCost.innerHTML = "бесплатно"

} else {
    deliveryCost.classList.remove('free')
    deliveryCost.innerHTML = "350$"
}
}