import { State } from './state.js';
import { CONFIG } from './config.js';

export const CheckoutService = {
    formatOrderMessage() {
        let message = `🛒 *PEDIDO - ${CONFIG.APP.NAME}*\n\n`;
        State.cart.forEach(item => {
            message += `• ${item.name} (${item.quantity} x S/ ${item.price}) = S/ ${(item.quantity * item.price).toFixed(2)}\n`;
        });
        message += `\n*TOTAL: S/ ${State.cart.reduce((a, b) => a + (b.price * b.quantity), 0).toFixed(2)}*`;
        return encodeURIComponent(message);
    },

    sendToWhatsApp() {
        const url = `https://wa.me/${CONFIG.CHANNELS.WHATSAPP}?text=${this.formatOrderMessage()}`;
        window.open(url, '_blank');
    }
};