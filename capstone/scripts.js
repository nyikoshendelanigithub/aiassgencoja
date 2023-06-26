let cartItems = [];
let totalCost = 0;

function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").value);
  if (quantity > 0) {
    const itemCost = 10; // Replace with the actual cost of the product
    const itemTotalCost = itemCost * quantity;
    
    const item = {
      quantity: quantity,
      totalCost: itemTotalCost
    };
    
    cartItems.push(item);
    totalCost += itemTotalCost;
    
    updateCart();
  }
}

function clearCart() {
  cartItems = [];
  totalCost = 0;
  
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";
  
  cartItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `Quantity: ${item.quantity}, Total Cost: $${item.totalCost.toFixed(2)}`;
    cartItemsElement.appendChild(listItem);
  });
  
  const totalCostElement = document.getElementById("total-cost");
  totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}
