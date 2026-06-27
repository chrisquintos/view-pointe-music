"use strict";

const toggleButton = document.getElementById("theme-toggle");
const iconCart = document.querySelector(".icon-cart");
const body = document.body;
const closeCart = document.querySelector(".close");
const addItem = document.querySelectorAll(".add-to-cart");
const cart = [];


if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  });
}

if (iconCart) {
  iconCart.addEventListener("click", () => {
    body.classList.toggle("showCart");
  });
}

if (closeCart) {
  closeCart.addEventListener("click", () => {
    body.classList.toggle("showCart");
  });
}
const products =  [
    {
        name: "Black Logo Shirt",
        price: 20,
        id: 1,
        quantity: 1,

    },
    {
        name: "Black Cropped Shirt",
        price: 15,
        id: 2,
        quantity: 1,
    },
    {
        name: "EP",
        price: 10,
        id: 3,
        quantity: 1,
}
];
function addToCart(products, id) {
  const product = products.find((product) => product.id === id);
  if (!product) return;


  

  const cartItem = {
    product,
    quantity: 1,
  };

  cart.push(cartItem);
}


addItem.forEach((button) => {
  button.addEventListener("click", (event) => {
    const id = Number(event.target.dataset.id);
    addToCart(products, id);
  });
});
