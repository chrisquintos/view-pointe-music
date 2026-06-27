"use strict";

const toggleButton = document.getElementById("theme-toggle");
const iconCart = document.querySelector(".icon-cart");
const body = document.body;
const closeCart = document.querySelector(".close");

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

