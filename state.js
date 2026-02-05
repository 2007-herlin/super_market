export const State = {
    products: [],
    filteredProducts: [],
    cart: JSON.parse(localStorage.getItem('thiago_cart')) || [],
    activeFilters: { category: 'Todo', search: '' },
    isLoading: false,

    setState(key, value) {
        this[key] = value;
        // Notificar a la UI (Custom Events)
        window.dispatchEvent(new CustomEvent('stateChange', { detail: { key, value } }));
    },

    updateCart(newCart) {
        this.setState('cart', newCart);
        localStorage.setItem('thiago_cart', JSON.stringify(newCart));
    }
};