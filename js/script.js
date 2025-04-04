document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const name = product.dataset.name;
            const price = parseInt(product.dataset.price);
            const image = product.dataset.image;
            
            cart.push({ name, price, image });
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        });
    });
    
    updateCartCount();
});