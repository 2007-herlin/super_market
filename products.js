export class ProductEntity {
    constructor(rawProduct) {
        this.id = rawProduct.id;
        this.name = rawProduct.nombre;
        this.price = parseFloat(rawProduct.precio);
        this.category = rawProduct.categoria;
        this.image = rawProduct.imagen;
        // Lógica de tipo: ¿Se vende por peso o unidad?
        this.isByWeight = rawProduct.categoria.toLowerCase().includes('fruta') || 
                          rawProduct.categoria.toLowerCase().includes('verdura');
    }

    calculateSubtotal(quantity) {
        return this.price * quantity;
    }
}