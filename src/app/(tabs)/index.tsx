import {
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { Text } from "@rneui/themed";
import { useGetGlobalCoinInfo } from "@/hooks/useApi";
import { Colors } from "@/utils/colors";
import { formatNumber } from "@/utils";
import CoinListOverview from "@/components/CoinListOverview/CoinListOverview";

const HomeScreen = () => {

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetGlobalCoinInfo();

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <Text style={{ fontSize: 30 }}>
                    Loading coin info...
                </Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.centered}>
                <Text style={{ fontSize: 30 }}>
                    {error.message}
                </Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <Text style={styles.titleStyles}>Crypto Market Overview</Text>
            <View
                style={{
                    marginHorizontal: 0,
                    marginBottom: 20,
                }}
            >
                <CoinListOverview />
            </View>
            <ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                <View style={{ flexDirection: 'column', marginHorizontal: 20, marginBottom: 20 }}>
                    <View style={styles.containerCard50}>
                        <View style={styles.cardStyles50}>
                            <Text style={styles.subtitleText}>
                                Total Coins
                            </Text>
                            <Text style={styles.numberText}>
                                {formatNumber(data.coins_count)}
                            </Text>
                        </View>
                        <View style={styles.cardStyles50}>
                            <Text style={styles.subtitleText}>Active Markets</Text>
                            <Text style={styles.numberText}>
                                {formatNumber(data.active_markets)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardStyles100}>
                        <View style={[styles.cardStyles50, { backgroundColor: 'transparent', padding: 0 }]}>
                            <Text style={styles.subtitleText}>Market Cap</Text>
                            <Text style={styles.numberText}>
                                ${formatNumber(data.total_mcap)}
                            </Text>
                        </View>
                        <View style={[styles.cardStyles50, { backgroundColor: 'transparent' }]}>
                            <View style={styles.badgeStyles}>
                                <Text style={{ color: data.mcap_change > 0 ? 'green' : 'red' }}>
                                    {data.mcap_change > 0 ? '▲  ' : '▼  '}
                                    {formatNumber(data.mcap_change)}%
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardStyles100}>
                        <View style={[styles.cardStyles50, { backgroundColor: 'transparent', padding: 0 }]}>
                            <Text style={styles.subtitleText}>24h Volume</Text>
                            <Text style={styles.numberText}>
                                ${formatNumber(data.total_volume)}
                            </Text>
                        </View>
                        <View style={[styles.cardStyles50, { backgroundColor: 'transparent' }]}>
                            <View style={styles.badgeStyles}>
                                <Text style={{ color: data.volume_change > 0 ? 'green' : 'red' }}>
                                    {data.volume_change > 0 ? '▲  ' : '▼  '}
                                    {data.volume_change}%
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerCard50}>
                        <View style={styles.cardStyles50}>
                            <Text style={styles.subtitleText}>
                                BTC Dominance
                            </Text>
                            <Text style={styles.numberText}>
                                {formatNumber(data.btc_d)}%
                            </Text>
                        </View>
                        <View style={styles.cardStyles50}>
                            <Text style={styles.subtitleText}>
                                ETH Dominance
                            </Text>
                            <Text style={styles.numberText}>
                                {formatNumber(data.eth_d)}%
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    subtitleText: {
        fontWeight: '600',
        fontSize: 20,
        color: '#898995'
    },
    numberText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    cardStyles50: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        padding: 15,
        borderRadius: 10,
        width: '48%'
    },
    cardStyles100: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        width: '100%',
    },
    containerCard50: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.primary
    },
    badgeStyles: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
    },
    titleStyles: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
})

export default HomeScreen;