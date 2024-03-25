const cart_wrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', (event)=>{
    if (event.target.hasAttribute('data-cart')) {
       const card = event.target.closest('.card');

       const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerHTML,
        itemsInBox: card.querySelector('[data-items-in-box]').innerHTML,
        weight: card.querySelector('.price__weight').innerHTML,
        price: card.querySelector('.price__currency').innerHTML,
        counter: card.querySelector('[data-counter]').innerHTML,
       }
       console.log(productInfo);

       const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
       <div class="cart-item__top">
           <div class="cart-item__img">
               <img src="${productInfo.imgSrc}" alt="">
           </div>
           <div class="cart-item__desc">
               <div class="cart-item__title">${productInfo.title}</div>
               <div class="cart-item__weight">${productInfo.itemsInBox}/${productInfo.price}</div>

               <!-- cart-item__details -->
               <div class="cart-item__details">

                   <div class="items items--small counter-wrapper">
                       <div class="items__control" data-action="minus">-</div>
                       <div class="items__current" data-counter="">${productInfo.counter}</div>
                       <div class="items__control" data-action="plus">+</div>
                   </div>

                   <div class="price">
                       <div class="price__currency">${productInfo.price}</div>
                   </div>

               </div>
               <!-- // cart-item__details -->

           </div>
       </div>
   </div>`;

   cart_wrapper.insertAdjacentHTML('beforeend', cartItemHtml);
    }
})