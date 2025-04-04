document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart');
    const cartCount = document.querySelector('.cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.style.display = 'flex';
            itemElement.style.alignItems = 'center';
            itemElement.style.gap = '20px';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                <p style="flex-grow: 1; font-weight: 400;">${item.name}</p>
                <p>${item.price} грн</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = totalPrice;
    }

    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        cart = [];
        cartCount.textContent = '0';
        renderCart();
    });

    renderCart();
});