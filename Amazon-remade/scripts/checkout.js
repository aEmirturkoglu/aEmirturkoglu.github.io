import { cart, removeFromCart, calculateCartQuantity, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


let cartSummaryHTML = ``;
cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach(product => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML +=
  `<div class="cart-item-container 
  js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            ${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary
            js-update-link
            " data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input-${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save-link"
            data-product-id="${matchingProduct.id}">
            Save
            </span>
            <span class="delete-quantity-link link-primary js-delete-link
            " data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    
    
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      console.log(productId);
      
      const container = document.querySelector(`.js-cart-item-container-${productId}`)
      container.remove();
      console.log(container);


    })
  })

  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    })

    document.querySelector('.js-return-to-home-link')
      .innerHTML = `${cartQuantity} items`; 
  }
  const cartQuantity = calculateCartQuantity()

  updateCartQuantity()

  document.querySelectorAll('.js-update-link')
    .forEach(link => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        //console.log(productId);
        //const container = document.querySelector(`.js-cart-item-container-${productId}`)
        try {
          const container = document.querySelector(`.js-cart-item-container-${productId}`);
          container.classList.add('is-editing-quantity');
        } catch (error) {
          console.log(error);
        }
        //container.classList.add('is-editing-quantity')

      })
    })

  document.querySelectorAll('.js-save-link')
    .forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      //console.log(productId);
      //const container = document.querySelector(`.js-cart-item-container-${productId}`)
      try {
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.classList.remove('is-editing-quantity');
        const quantityInput = document.querySelector(`.js-quantity-input-${productId}`)
        let newQuantity = Number(quantityInput.value)
        // const oldInput = document.querySelector(`.js-quantity-label-${productId}`).Number(value)
        // oldInput = newQuantity

        if (newQuantity < 0) {
          alert("Quantity cannot be negative");
          newQuantity = 0;
        }
    
        if (newQuantity > 1000) {
           alert("Quantity cannot exceed 1000");
           newQuantity = 1000;
        }

      //   // Here's an example of a feature we can add: validation.
      // // Note: we need to move the quantity-related code up
      // // because if the new quantity is not valid, we should
      // // return early and NOT run the rest of the code. This
      // // technique is called an "early return".
      // // const quantityInput = document.querySelector(
      // //   `.js-quantity-input-${productId}`
      // // );
      // // const newQuantity = Number(quantityInput.value);

      // if (newQuantity < 0 || newQuantity >= 1000) {
      //   alert('Quantity must be at least 0 and less than 1000');
      //   return;
      // }
      // updateQuantity(productId, newQuantity);

      // const container = document.querySelector(  we remove const container
      //   `.js-cart-item-container-${productId}` part from top and add it
      // );
      // container.classList.remove('is-editing-quantity');

        updateQuantity(productId, newQuantity)
        // add it after the updatequantity part and before quantitylabel
        const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`)
        quantityLabel.innerText = newQuantity

      } catch (error) {
        console.log(error);
      }
      //container.classList.add('is-editing-quantity')

    })
  })