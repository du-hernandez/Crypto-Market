import { Text } from "@rneui/themed";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./CoinCardStyles";
import { formatNumber } from "@/utils";

interface CoinCardProps {
    coin: any;
}

const CoinCard = ({ coin }: CoinCardProps) => {

    const isPositiveChange = parseFloat(coin.percent_change_24h) >= 0;

    return (
        <TouchableOpacity
            style={styles.card}
        // onPress={() => navigation.navigate('Detail', {
        //     id: item.id,
        //     title: item.name,
        //     symbol: item.symbol
        // })}
        >
            <View style={styles.coinHeader}>
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
        </TouchableOpacity>
    )
}

export default CoinCard;