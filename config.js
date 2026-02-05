export const CONFIG = {
    URL: 'https://yvyrbmlzlfrqatxwfemm.supabase.co',
    KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2eXJibWx6bGZycWF0eHdmZW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4ODU5NDMsImV4cCI6MjA4NDQ2MTk0M30.a3P3tvZPOLki21cmthcWMtHU5kXvjdqpflM7ws8wzOs',
    WHATSAPP: '51958845531'
};

// Inicializamos el cliente aquí una sola vez
export const supabase = window.supabase.createClient(CONFIG.URL, CONFIG.KEY);