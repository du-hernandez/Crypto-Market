import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { apiService } from '@services/.';

export const useGetCoins = (limit = 100) => {
    return useInfiniteQuery({
        queryKey: ['coins', limit],
        queryFn: ({ pageParam = 0 }) => apiService.getCoins(pageParam, limit),
        getNextPageParam: (lastPage, allPages) => {
            const currentDataCount = allPages.reduce((acc, page) => acc + page.data.length, 0);
            const totalCoins = lastPage.info?.coins_num || 100;

            if (currentDataCount >= totalCoins) {
                return undefined; // No hay más páginas
            }

            // Devolvemos el índice de inicio para la siguiente página
            return currentDataCount;
        },
        initialPageParam: 0,
    });
};

export const useGetCoinDetail = (id: string) => {
    return useQuery({
        queryKey: ['coin-detail', JSON.stringify(id)],
        queryFn: async () => await apiService.getCoinDetails(id),
        enabled: id != ''
    });
}

export const useGetMultipleCoinDetail = (ids: string[]) => {
    return useQuery({
        queryKey: ['coin-multiple-detail', JSON.stringify(ids)],
        queryFn: async () => await apiService.getCoinDetails(ids.join(',')),
        enabled: ids.length > 0
    });
}
