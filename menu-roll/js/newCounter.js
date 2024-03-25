window.addEventListener("click", (event)=>{
    //проверяем является ли элемент кнопкой плюс
if (event.target.dataset.action === 'plus') {
    const counterWrapper = event.target.closest('.counter-wrapper');

    const counter = counterWrapper.querySelector('[data-counter]')

    counter.innerHTML = ++counter.innerHTML
}
//проверяем является ли элемент кнопкой минус
if (event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter-wrapper');

    const counter = counterWrapper.querySelector('[data-counter]')
    if(parseInt(counter.innerHTML) > 1){
        counter.innerHTML = --counter.innerHTML
    } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerHTML) === 1) {
            event.target.closest('.cart-item').remove();
            toggleCart()
            calcCartPrice()
        }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPrice()
    }
})