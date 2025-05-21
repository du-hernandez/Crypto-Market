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

export const useGetMultipleCoinDetail = (ids: string[], shouldFetch: boolean = true) => {
    return useQuery({
        queryKey: ['coin-multiple-detail', ids.join(',')],
        queryFn: async () => {
            const result = await apiService.getMultipleCoinDetails(ids.join(','));

            if (!result) {
              return [];
            }

            return result;
        },
        enabled: ids.length > 0 && shouldFetch,
        // 5 minutes of cache (1000 ms * 60 s * 5 min)
    });
}

export const useGetGlobalCoinInfo = () => {
    return useQuery({
        queryKey: ['coin-global'],
        queryFn: async () => await apiService.getGlobalCoinInfo(),
        enabled: true,
        staleTime: 1000 * 60 * 1
    });
}
