import { useQuery, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
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
        initialPageParam: 0
    });
};