import { apiConfig as api } from './config';

export const apiService = {
    getCoins: async (start = 0, limit = 100) => {
        try {
            const response = await api.get(`/tickers/?start=${start}&limit=${limit}`);
            return response.data || undefined;
        } catch (error) {
            console.error('Error fetching coins:', error);
            throw error;
        }
    },

    getCoinDetails: async (id: string) => {
        try {
            const response = await api.get(`/ticker/?id=${id}`);
            return response.data || undefined;
        } catch (error) {
            console.error('Error fetching coin details:', error);
            throw error;
        }
    },

    /**
     * Fetches details for multiple coins by their IDs.
     * @param ids A comma-separated string of coin IDs (e.g., "90,80,32,90").
     * @returns The details of the specified coins.
     */
    getMultipleCoinDetails: async (ids: string) => {
        try {
            const response = await api.get(`/ticker/?id=${ids}`);
            return response.data || [];
        } catch (error) {
            console.error('Error fetching coin details:', error);
            throw error;
        }
    },

    getCoinMarkets: async (id: string) => {
        try {
            const response = await api.get(`/coin/markets/?id=${id}`);
            return response.data || undefined;
        } catch (error) {
            console.error('Error fetching coin markets:', error);
            throw error;
        }
    },

    getGlobalCoinInfo: async () => {
        const response = await api.get('/global/');
        return response.data || undefined
    }
}