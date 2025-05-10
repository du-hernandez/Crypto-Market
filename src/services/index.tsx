import { apiConfig as api } from './config';

export const apiService = {
    getCoins: async (start = 0, limit = 100) => {
        try {
            const response = await api.get(`/tickers/?start=${start}&limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching coins:', error);
            throw error;
        }
    },

    getCoinDetails: async (id: string) => {
        try {
            const response = await api.get(`/ticker/?id=${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching coin details:', error);
            throw error;
        }
    },

    getCoinMarkets: async (id: string) => {
        try {
            const response = await api.get(`/coin/markets/?id=${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching coin markets:', error);
            throw error;
        }
    },

    getGlobalInfo: async () => {
        const response = await api.get('/global/');
        return response.data
    }
}