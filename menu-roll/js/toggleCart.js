

function toggleCart() {
    const cardEmpty = document.querySelector('[data-cart-empty]')
    const cart_wrapper = document.querySelector('.cart-wrapper');
    const orderPage = document.querySelector('#order-form');
    if(cart_wrapper.children.length > 0){
        // console.log('full');
        cardEmpty.classList.add('none');
        orderPage.classList.remove('none');
    } else {
        // console.log('empty');
        cardEmpty.classList.remove('none');
        orderPage.classList.add('none');
    }
}