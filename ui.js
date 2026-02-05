export const UI = {
    // Renderiza el grid de productos (Minimalista)
    renderProducts(products) {
        const grid = document.getElementById('products-region');
        if (!grid) return;
        
        grid.innerHTML = products.map(p => `
            <div class="bg-white p-3 flex flex-col border-b border-r border-gray-100 h-full">
                <div class="relative mb-2">
                    <img src="${p.imagen}" class="w-full aspect-square object-cover rounded-sm">
                    <span class="absolute top-0 left-0 bg-black text-white text-[9px] font-black px-2 py-0.5 italic">
                        S/ ${p.precio.toFixed(2)}
                    </span>
                </div>
                <h3 class="text-gray-900 text-[10px] font-black leading-tight uppercase mb-1 h-6 overflow-hidden">${p.nombre}</h3>
                <p class="text-[7px] text-gray-400 uppercase font-bold mb-3">${p.categoria}</p>
                <button onclick="window.addToCart(${p.id})" 
                    class="mt-auto border border-gray-200 text-gray-800 py-2 text-[9px] font-black uppercase active:bg-black active:text-white transition-all">
                    + Agregar
                </button>
            </div>
        `).join('');
    },

    // Actualiza el modal del carrito
    renderCart(cart, total) {
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartItems = document.getElementById('cart-items');

        if (cartCount) cartCount.innerText = cart.length;
        if (cartTotal) cartTotal.innerText = `S/ ${total.toFixed(2)}`;
        
        if (cartItems) {
            cartItems.innerHTML = cart.map((item) => `
                <div class="flex justify-between items-center text-xs border-b pb-2">
                    <p class="font-bold uppercase">${item.nombre}</p>
                    <p class="font-bold text-thiago">S/ ${item.precio.toFixed(2)}</p>
                </div>
            `).join('');
        }
    }
};