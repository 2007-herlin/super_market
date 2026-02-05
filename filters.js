import { State } from './state.js';

export const FilterEngine = {
    byCategory(category) {
        if (category === 'Todo') {
            State.filteredProducts = [...State.products];
        } else {
            State.filteredProducts = State.products.filter(p => 
                p.categoria.toLowerCase().includes(category.toLowerCase())
            );
        }
        window.dispatchEvent(new CustomEvent('filterChanged'));
    }
};