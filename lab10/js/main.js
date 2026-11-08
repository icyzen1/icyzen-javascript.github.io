document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartButton = document.getElementById('cartButton');
    const cartCounter = document.getElementById('cartCounter');
    const catalogSection = document.getElementById('catalogSection');
    const cartSection = document.getElementById('cartSection');
    
    const modalOverlay = document.getElementById('modalOverlay');
    const modalMessage = document.getElementById('modalMessage');
    const modalContent = document.getElementById('modalContent');
    const modalButtons = document.getElementById('modalButtons');

    const backToShopBtn = document.getElementById('backToShopBtn');
    const payBtn = document.getElementById('payBtn');

    function updateCartCounter() {
        cartCounter.textContent = cart.length;
    }
    updateCartCounter();

    function showModal(message, htmlContent = '', buttons = []) {
        modalMessage.textContent = message;
        modalContent.innerHTML = htmlContent;
        modalButtons.innerHTML = '';

        buttons.forEach(btnData => {
            const btn = document.createElement('button');
            btn.className = 'modal-btn';
            btn.textContent = btnData.text;
            btn.onclick = () => {
                closeModal();
                if (btnData.callback) btnData.callback();
            };
            modalButtons.appendChild(btn);
        });

        modalOverlay.style.display = 'flex';
    }

    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    cartButton.addEventListener('click', () => {
        if (cart.length === 0) {
            showModal("Корзина пуста", "", [
                { text: "OK", callback: () => {} }
            ]);
        } else {
            openCart();
        }
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            const id = card.dataset.id;
            const name = card.dataset.name;
            const price = parseFloat(card.dataset.price);

            showModal("Вкажіть кількість:", `
                <input type="number" id="popupQty" value="1" min="1" style="width: 60px; padding: 5px; font-size: 16px; text-align: center;">
            `, [
                {
                    text: "Додати",
                    callback: () => {
                        const qtyInput = document.getElementById('popupQty');
                        const quantity = parseInt(qtyInput.value) || 1;

                        const existing = cart.find(item => item.id === id);
                        if (existing) {
                            existing.quantity += quantity;
                        } else {
                            cart.push({ id, name, price, quantity });
                        }

                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCartCounter();

                        showModal("Товар додано", "", [
                            {
                                text: "Перейти у корзину",
                                callback: () => { openCart(); }
                            },
                            {
                                text: "Повернутись до покупок",
                                callback: () => {}
                            }
                        ]);
                    }
                }
            ]);
        });
    });

    function openCart() {
        catalogSection.style.display = 'none';
        cartSection.style.display = 'block';
        renderCart();
    }

    function closeCart() {
        cartSection.style.display = 'none';
        catalogSection.style.display = 'block';
    }

    function renderCart() {
        const tbody = document.getElementById('cartTableBody');
        const cartTotal = document.getElementById('cartTotal');
        tbody.innerHTML = '';

        let total = 0;

        cart.forEach((item, index) => {
            const sum = item.price * item.quantity;
            total += sum;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" class="qty-input item-qty" data-id="${item.id}" style="width: 50px; text-align: center;">
                </td>
                <td>${sum.toFixed(2)}</td>
                <td><button class="delete-btn" data-id="${item.id}" style="background:none; border:none; color:red; cursor:pointer; text-decoration:underline;">видалити</button></td>
            `;
            tbody.appendChild(tr);
        });

        cartTotal.textContent = `${total.toFixed(2)} грн.`;

        document.querySelectorAll('.item-qty').forEach(input => {
            input.addEventListener('change', (e) => {
                const id = e.target.dataset.id;
                const newQty = parseInt(e.target.value);
                if (newQty > 0) {
                    const item = cart.find(i => i.id === id);
                    if (item) {
                        item.quantity = newQty;
                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCartCounter();
                        renderCart();
                    }
                }
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCounter();

                if (cart.length === 0) {
                    closeCart();
                } else {
                    renderCart();
                }
            });
        });
    }

    backToShopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeCart();
    });

    payBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            showModal("Кошик порожній!");
            return;
        }
        showModal("Дякуємо за замовлення! Оплата успішна.", "", [
            {
                text: "OK",
                callback: () => {
                    cart = [];
                    localStorage.removeItem('cart');
                    updateCartCounter();
                    closeCart();
                }
            }
        ]);
    });
});