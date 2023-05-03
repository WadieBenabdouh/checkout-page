// FIRST ITEM
let count = 0;

document.getElementById("decreaseBtn1").onclick = function () {
  // count -= 1;
  if (count >= 1) count--;
  // count = (count < 10) ? + count : count;
  document.getElementById("countoneLabel").innerHTML = count;
};

document.getElementById("increaseBtn1").onclick = function () {
  count += 1;
  document.getElementById("countoneLabel").innerHTML = count;
};

//// SECOND ITEM ////
let countTwo = 0;

document.getElementById("decreaseBtn2").onclick = function () {
  // countTwo -= 1;
  if (countTwo >= 1) countTwo--;
  // count = (count < 10) ? + count : count;
  document.getElementById("counttwoLabel").innerHTML = countTwo;
};

document.getElementById("increaseBtn2").onclick = function () {
  countTwo += 1;
  document.getElementById("counttwoLabel").innerHTML = countTwo;
};

// PRICING MATH
const product1Price = 24.00;
const product2Price = 34.00;

const product1QuantityElement = document.querySelectorAll("countoneLabel");
const product2QuantityElement = document.querySelectorAll("counttwoLabel");
const totalPriceElement = document.getElementById("totalPrice");

let product1Quantity = 0;
let product2Quantity = 0;

function updateTotalPrice() {
  const totalPrice = (product1Price * product1Quantity) + (product2Price * product2Quantity);
  totalPriceElement.textContent = ` $${totalPrice.toFixed(2)}`;
}

function updateProductQuantity(productId, delta) {
  if (productId === "product1") {
    product1Quantity += delta;
    if (product1Quantity < 0) {
      product1Quantity = 0;
    } else if (product1Quantity > 50) {
      product1Quantity = 50;
    }
    product1QuantityElement.textContent = product1Quantity;
  } else if (productId === "product2") {
    product2Quantity += delta;
    if (product2Quantity < 0) {
      product2Quantity = 0;
    } else if (product2Quantity > 50) {
      product2Quantity = 50;
    }
    product2QuantityElement.textContent = product2Quantity;
  }
  updateTotalPrice();
}


// Update the product quantity and total price whenever a quantity icon is clicked
document.getElementById("decreaseBtn1").addEventListener("click", () => updateProductQuantity("product1", -1));
document.getElementById("increaseBtn1").addEventListener("click", () => updateProductQuantity("product1", 1));

document.getElementById("decreaseBtn2").addEventListener("click", () => updateProductQuantity("product2", -1));
document.getElementById("increaseBtn2").addEventListener("click", () => updateProductQuantity("product2", 1));
