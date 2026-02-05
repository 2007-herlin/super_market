import { UI } from './ui.js';

// Estado global de la App
const State = {
    products: [],
    cart: []
};

// Configuración Supabase
const URL = 'https://yvyrbmlzlfrqatxwfemm.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eXJibWx6bGZycWF0eHdmZW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4ODU5NDMsImV4cCI6MjA4NDQ2MTk0M30.a3P3tvZPOLki21cmthcWMtHU5kXvjdqpflM7ws8wzOs';
const supabaseClient = supabase.createClient(URL, KEY);

// Cargar productos al iniciar
async function init() {
    const { data, error } = await supabaseClient.from('productos').select('*');
    if (error) return console.error("Error Supabase:", error);
    
    State.products = data;
    UI.renderProducts(data);
}

// BUSCADOR INTELIGENTE
window.ejecutarBusqueda = () => {
    const query = document.getElementById('buscador').value.toLowerCase();
    const filtrados = State.products.filter(p => 
        p.nombre.toLowerCase().includes(query) || 
        p.categoria.toLowerCase().includes(query)
    );
    UI.renderProducts(filtrados);
};

// FILTRO POR CATEGORÍA (Dropdown)
window.filtrarPorCat = (cat) => {
    const filtrados = (cat === 'Todos') 
        ? State.products 
        : State.products.filter(p => p.categoria.includes(cat));
    UI.renderProducts(filtrados);
};

// LÓGICA DEL CARRITO
window.addToCart = (id) => {
    const p = State.products.find(x => x.id === id);
    State.cart.push(p);
    const total = State.cart.reduce((acc, p) => acc + p.precio, 0);
    UI.renderCart(State.cart, total);
};

window.toggleCart = () => document.getElementById('cart-modal').classList.toggle('hidden');

window.enviarWhatsApp = () => {
    if (State.cart.length === 0) return alert("El carrito está vacío");
    let msg = "*NUEVO PEDIDO - THIAGO MARKET*\n\n";
    State.cart.forEach(i => msg += `• ${i.nombre} - S/ ${i.precio}\n`);
    const total = State.cart.reduce((a, b) => a + b.precio, 0);
    msg += `\n*TOTAL: S/ ${total.toFixed(2)}*`;
    window.open(`https://wa.me/51958845531?text=${encodeURIComponent(msg)}`);
};

// Eventos de teclado
document.getElementById('buscador')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') window.ejecutarBusqueda();
});

document.addEventListener('DOMContentLoaded', init);