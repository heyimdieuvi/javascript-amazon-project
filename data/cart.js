export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2,
}
];

function checkExistItem(id) {
  for(let item of cart) {
    if(item.productId === id) {
      item.quantity += 1;
      return true;
    } 
  }
  return false;
}
export function addToCart(id) {
  if (!checkExistItem(id)){
    cart.push({
      productId: id,
      quantity: 1
    })
  }
}
export function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerText = `${cartQuantity}`;
}