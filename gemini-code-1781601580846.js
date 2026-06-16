// Connects the dynamic item addition logic to the Shopify Store AJAX engine
function addItemToShopifyCart(variantId) {
  let formData = {
   'items': [{
    'id': variantId,
    'quantity': 1
   }]
  };

  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    // Updates UI elements like layout indicators dynamically
    if(document.getElementById('cartBadgeCount')) {
      fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
         document.getElementById('cartBadgeCount').textContent = cart.item_count;
      });
    }
    
    // Triggers your custom Toast layout notification element
    const toast = document.getElementById('cartToast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => { toast.classList.remove('show'); }, 3000);
    }
  })
  .catch((error) => {
    console.error('Error adding product to cart:', error);
  });
}