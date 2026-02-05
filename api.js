import { supabase } from './config.js';

export const ApiService = {
    async getProducts() {
        const { data, error } = await supabase
            .from('productos')
            .select('*');
        
        if (error) throw error;
        return data;
    }
};