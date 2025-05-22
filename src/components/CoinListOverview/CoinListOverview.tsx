import { memo } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styles from './CoinListOverviewStyles';
import { useGetOverviewCoins } from '@/hooks/useApi';
import { Text } from '@rneui/themed';
import { formatNumber } from '@/utils';
import { Colors } from '@/utils/colors';
import { useRouter } from 'expo-router';
import FavoriteCoin from '@components/FavoriteCoin/FavoriteCoin';
import { useFavoriteCoins } from '@/context/FavoriteCoins';

const CoinListOverview = ({ }) => {

    const router = useRouter();

    const { favoriteCoins, setFavoritesCoins } = useFavoriteCoins();

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetOverviewCoins(5);

    const renderItem = ({ item }: any) => {
        const isFavorite = favoriteCoins.includes(item.id);
        return (
            <TouchableOpacity
                onPress={() => router.push('coin/coin-list')}
                style={styles.itemStyles}
            >
                <Text style={{
                    fontFamily: 'Nosifer_400Regular',
                    fontSize: 14,
                    textAlign: 'center'
                }}>
                    {item.name} ({item.symbol})
                </Text>
                <Text>{formatNumber(item.price_usd)} USD</Text>
                <Text style={{ color: item.percent_change_24h > 0 ? 'green' : 'red' }}>
                    {item.percent_change_24h > 0 ? '▲  ' : '▼  '}
                    {formatNumber(item.percent_change_24h)}%
                </Text>
                {favoriteCoins.includes(item.id) && (
                    <View>
                        <FavoriteCoin
                            coinId={item.id}
                            iconSize={20}
                            isFavorite={isFavorite}
                            setFavoritesCoins={setFavoritesCoins}
                        />
                    </View>
                )}
            </TouchableOpacity>
        );
    }

    if (isLoading) {
        return (
            <View style={{}}>
                <Text style={{ fontSize: 30 }}>
                    Loading coin list...
                </Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={{}}>
                <Text style={{ fontSize: 30 }}>
                    {error.message}
                </Text>
            </View>
        );
    }

    return (
        <View style={{ height: 120 }}>
            <FlatList
                data={data.data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={
                    <TouchableOpacity
                        onPress={() => router.push('coin/coin-list')}
                        style={[
                            styles.itemStyles,
                            {
                                height: '100%',
                                justifyContent: 'center',
                                backgroundColor: Colors.primary
                            }
                        ]}>
                        <Text style={{
                            fontSize: 25,
                            textAlign: 'center'
                        }}>
                            View Coin List...
                        </Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

export default memo(CoinListOverview);