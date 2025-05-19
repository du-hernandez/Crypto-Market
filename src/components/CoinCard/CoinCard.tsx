import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { formatNumber } from "@/utils";
import styles from "./CoinCardStyles";
import FavoriteCoin from "../FavoriteCoin/FavoriteCoin";


interface CoinCardProps {
    isFavorite: boolean;
    setFavoritesCoins: (coinId: string) => void;
    coin: any;
    onPress: (coinId: string) => void;
}

const CoinCard = React.memo(({ isFavorite, setFavoritesCoins, coin, onPress }: CoinCardProps) => {

    let isPositiveChange = null;

    useEffect(() => {
        // Check if the 24h change is positive or negative
        isPositiveChange = parseFloat(coin.percent_change_24h) >= 0;
    }, []);

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => onPress(coin.id)}
        >
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F1F3F5',
                    borderRadius: 8,
                    paddingHorizontal: 5
                }}>
                    <FavoriteCoin
                        coinId={coin.id}
                        iconSize={20}
                        isFavorite={isFavorite}
                        setFavoritesCoins={setFavoritesCoins}
                    />
                </View>
                <View style={styles.coinHeader}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 2, }}>
                            <Text style={styles.symbol}>{coin.symbol}</Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#666',
                            }} numberOfLines={1}>{coin.name}</Text>
                        </View>
                        <View style={styles.priceInfo}>
                            <Text style={styles.price}>USD ${parseFloat(coin.price_usd).toFixed(2)}</Text>
                            <Text
                                style={[
                                    styles.change,
                                    isPositiveChange
                                        ? { color: '#4CAF50' }
                                        : { color: '#F44336' }
                                ]}
                            >
                                {isPositiveChange ? '+' : ''}
                                {coin.percent_change_24h}%
                            </Text>
                        </View>
                    </View>
                    <View style={styles.statsRow}>
                        <Text style={styles.statLabel}>Rank: <Text style={styles.statValue}>{coin.rank}</Text></Text>
                        <Text style={styles.statLabel}>Vol 24h: <Text style={styles.statValue}>${formatNumber(coin.volume24)}</Text></Text>
                        <Text style={styles.statLabel}>MCap: <Text style={styles.statValue}>${formatNumber(coin.market_cap_usd)}</Text></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
})

export default CoinCard;