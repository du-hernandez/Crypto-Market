import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native"
import { useLocalSearchParams } from 'expo-router';
import { Text } from "@rneui/themed"
import { LinearGradient } from "expo-linear-gradient";
import { useGetCoinDetail } from "@/hooks/useApi";
import { formatNumber } from "@/utils";
import CoinDetailItem from "@/components/CoinDetailItem/CoinDetailItem";
import FavoriteCoin from "@/components/FavoriteCoin/FavoriteCoin";

import styles from "./styles";
import { useFavoriteCoins } from "@/context/FavoriteCoins";
import { Colors } from "@/utils/colors";

const CoinDetail = () => {

    const { id: coinId } = useLocalSearchParams();
    const { data, isLoading, isError, error } = useGetCoinDetail(String(coinId));

    const { favoriteCoins, setFavoritesCoins } = useFavoriteCoins();

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#FFF" />
                <Text style={styles.loadingText}>Cargando criptomoneda...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.centered}>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }

    if (typeof data === 'undefined') {
        return (
            <View style={styles.centered}>
                <Text>No hay detalles para esta moneda</Text>
            </View>
        );
    }

    const coin = data[0];

    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <ScrollView>
                <View
                // Background Linear Gradient
                // colors={['#E24224', Colors.primary]}
                // style={{ flex: 1 }}
                >

                    <LinearGradient
                        colors={[Colors.primary, '#E24224']}
                        style={{
                            // flex: 1,
                            // alignSelf: 'flex-start',
                            height: 200,
                            justifyContent: 'center',
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            paddingHorizontal: 20,

                        }}
                    // start={{ x: 0, y: 0 }}
                    // end={{ x: 1, y: 1 }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Nosifer_400Regular',
                                fontSize: 30,
                                color: 'orange',
                                textAlign: 'center',
                                // height: 100,
                                lineHeight: 54,
                                flexWrap: 'wrap'
                            }}>
                            {coin.name}
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Nunito_400Regular',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}> {coin.symbol} - ({coin.nameid})</Text>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'Nunito_400Regular',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>
                            {formatNumber(coin.price_usd)} USD
                        </Text>
                    </LinearGradient>
                    <View style={styles.favoriteContainer} >
                        <FavoriteCoin
                            setFavoritesCoins={setFavoritesCoins}
                            isFavorite={favoriteCoins.includes(String(coinId))}
                            coinId={String(coinId)}
                        />
                    </View>
                    <View style={{ flex: 3 }}>
                        <CoinDetailItem title='Posición en el mercado' value={coin.rank} />
                        <CoinDetailItem title='Capitalización (USD)' value={coin.market_cap_usd} />
                        <CoinDetailItem title='Precio (BTC)' value={coin.price_btc} />
                        <CoinDetailItem title='Suministro circulante' value={coin.csupply} />
                        <CoinDetailItem title='Suministro total' value={coin.tsupply} />
                        <CoinDetailItem title='Suministro máximo' value={coin.msupply} />
                        <CoinDetailItem title='Volúmen de negociación (24h)' value={coin.volume24} />
                        <CoinDetailItem title='Comercializadas' value={coin.volume24_native} />

                    </View>
                </View>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'white',
                borderTopWidth: StyleSheet.hairlineWidth,
                borderBottomWidth: StyleSheet.hairlineWidth,
                height: 50,
            }}>
                <View>
                    <Text style={styles.textDetail}>
                        1h
                    </Text>
                    <Text>
                        {formatNumber(coin.percent_change_1h)}%
                    </Text>
                </View>
                <View>
                    <Text style={styles.textDetail}>
                        24h
                    </Text>
                    <Text>
                        {formatNumber(coin.percent_change_24h)}%
                    </Text>
                </View>
                <View>
                    <Text style={styles.textDetail}>
                        7d
                    </Text>
                    <Text>
                        {formatNumber(coin.percent_change_7d)}%
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CoinDetail;