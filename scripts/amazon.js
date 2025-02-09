import {products} from '../data/products.js';
import {cart} from '../data/cart.js';
let productHtml = '';
products.forEach((product) => {
    productHtml += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}"
          >
            Add to Cart
          </button>
        </div>`
})
document.querySelector('.js-products-grid').innerHTML = productHtml;

function checkExistItem(id) {
  for(let item of cart) {
    if(item.id === id) {
      item.quantity += 1;
      return true;
    } 
  }
  return false;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
  button.addEventListener('click', () => {
    let check = checkExistItem(button.dataset.productId);
    if(!check) {
      cart.push({
        id: button.dataset.productId, 
        quantity: 1
    })
    }
  console.log(cart)
  })
});
