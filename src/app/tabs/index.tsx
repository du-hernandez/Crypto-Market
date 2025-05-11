import { useGetCoins } from "@/hooks/useApi";
import { Text } from "@rneui/themed";
import { View } from "react-native";



const HomeScreen = () => {

    // Consumimos el hook para obtener las criptomonedas con paginación infinita
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
        refetch
    } = useGetCoins(10);

    console.log('data', JSON.stringify(data, null, 2));

    return (
        <View style={{ flex: 1, backgroundColor: '#252836' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;