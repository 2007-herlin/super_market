import { State } from './state.js';
import { UI } from './ui.js';

export const CartLogic = {
    add(productId) {
        const product = State.products.find(p => p.id === productId);
        let qty = 1;

        // Si es categoría Frutas, pedimos peso
        if (product.categoria.toLowerCase().includes('fruta')) {
            const input = prompt(`¿Cuántos kilos de ${product.nombre} desea? (Ej: 0.250 para 250g)`, "1");
            qty = parseFloat(input) || 0;
        }

        if (qty <= 0) return;

        const existing = State.cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += qty;
        } else {
            State.cart.push({ ...product, quantity: qty });
        }
        this.updateUI();
    },

    updateUI() {
        const count = document.getElementById('cart-count');
        const total = document.getElementById('cart-total');
        if (count) count.innerText = State.cart.length;
        
        const sum = State.cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
        if (total) total.innerText = `S/ ${sum.toFixed(2)}`;
    }
};