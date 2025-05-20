import {
  FlatList,
  StyleSheet,
  View
} from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { useGetMultipleCoinDetail } from "@/hooks/useApi";
import CoinCard from "@/components/CoinCard/CoinCard";
import { useFavoriteCoins } from "@/context/FavoriteCoins";
import { Text } from "@rneui/themed";
import { useCallback, useState } from "react";

const Favorites = () => {

  const [coinData, setCoinData] = useState([]);
  const [error, setError] = useState('');

  const router = useRouter();

  const { favoriteCoins, setFavoritesCoins } = useFavoriteCoins();

  const shouldFetch = favoriteCoins.length > 0;

  const { refetch } = useGetMultipleCoinDetail(favoriteCoins, shouldFetch);

  useFocusEffect(useCallback(() => {
    // Invoked whenever the route is focused.
    const fetchData = async () => {
      try {
        const result = await refetch();
        setCoinData(result.data)
      } catch (error) {
        setError(String(error));
      }
    };

    fetchData();
  }, []));

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (favoriteCoins.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>There are no favorite coins to list!</Text>
      </View>
    );
  }

  const handleCoinPress = (coinId: string) => {
    router.navigate(`coin/coin-detail/${coinId}`);
  }

  const renderItem = ({ item }: any) => {
    return (
      <CoinCard
        isFavorite={favoriteCoins.includes(item.id)}
        setFavoritesCoins={setFavoritesCoins}
        coin={item}
        onPress={handleCoinPress} // Pasamos la función memoizada
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#252836' }}>
      <FlatList
        data={coinData || []}
        renderItem={renderItem}
        keyExtractor={() => String(Math.random() * Math.random())}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#FFF',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#252836'
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFF',
  }
})

export default Favorites;