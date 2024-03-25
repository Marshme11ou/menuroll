const productsRender = document.querySelector('#product-container');

getProducts()

async function getProducts() {
    const response = await fetch('./js/product.json');
    console.log(response);

    const productArray = await response.json();
    console.log(productArray);

    renderProducts(productArray)
}


function renderProducts(arr) {
    arr.forEach((item) => {
      const itemBlock = `<div class="col-md-6">
      <div class="card mb-4" data-id="${item.id}">
          <img class="product-img" src="img/roll/${item.imgSrc}" alt="">
          <div class="card-body text-center">
              <h4 class="item-title">${item.title}</h4>
              <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

              <div class="details-wrapper">
                  <div class="items counter-wrapper">
                      <div class="items__control" data-action="minus">-</div>
                      <div class="items__current" data-counter>1</div>
                      <div class="items__control" data-action="plus">+</div>
                  </div>

                  <div class="price">
                      <div class="price__weight">${item.wieght}г.</div>
                      <div class="price__currency">${item.price} ₽</div>
                  </div>
              </div>

              <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

          </div>
      </div>
  </div>`;
  
  productsRender.insertAdjacentHTML('beforeend', itemBlock)
    })
}