import { useMemo, useRef, useState } from "react";
import {
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    RefreshControl,
} from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Text } from "@rneui/themed";
import { useRouter } from "expo-router";
import { useGetCoins } from "@/hooks/useApi";
import CoinCard from "@/components/CoinCard/CoinCard";
import Filter from "@components/Filter/Filter";

const CoinList = () => {

    const [dataFilter, setDataFilter] = useState<any[]>([]);
    const [isFiltering, setIsFiltering] = useState(false);
    const [headerHeiht, setHeaderHeight] = useState(0);

    const scrollYRef = useRef(0)
    const top = useSharedValue(0);
    const headerStyle = useAnimatedStyle(() => ({
        top: top.value
    }));
    const HEIGHT_VISIBILITY_THRESHOLD = 35;

    const router = useRouter();

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

    const handleRefresh = async () => await refetch();

    // Carga datos por demanda
    const handleEndReached = () => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    // Convierte el objeto pages a un arreglo
    const coins = useMemo(() => {
        if (!data) return [];
        return data.pages.flatMap(page => page.data || []);
    }, [data]);

    const renderItem = ({ item }: any) => {
        return (
            <CoinCard
                coin={item}
                onPress={() => router.navigate(`coin/coin-detail/${item.id}`)}
            />
        );
    };

    const renderFooter = () => {
        if (!isFetchingNextPage) return null;
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 16,
            }}>
                <ActivityIndicator size="small" color="#FFF" />
                <Text style={styles.footerText}>Cargando más criptomonedas...</Text>
            </View>
        );
    };

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#FFF" />
                <Text style={styles.loadingText}>Cargando criptomonedas...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.centered}>
                <Text>Error: {error.message}</Text>
                <TouchableOpacity>
                    <Text>Reintentar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const onFilter = (valueToSearch: string, paramFilter: string) => {
        if (valueToSearch == '') {
            setIsFiltering(false);
            setDataFilter([]);
            return;
        }

        const result = coins.filter((coin: any) => {
            return coin[paramFilter].toLowerCase().includes(valueToSearch.toLowerCase());
        });
        setIsFiltering(true);
        setDataFilter(result);
    }

    const dataToRender = isFiltering ? dataFilter : coins;

    return (
        <View style={{ flex: 1, backgroundColor: '#252836' }}>
            <View style={{ position: 'relative' }}>
                <Animated.View
                    onLayout={e => setHeaderHeight(e.nativeEvent.layout.height)}
                    style={[{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        zIndex: 1
                    }, headerStyle]}
                >
                    <Filter onFilter={onFilter} numResults={dataFilter.length} />
                </Animated.View>
            </View>
            <FlatList
                data={dataToRender}
                renderItem={renderItem}
                keyExtractor={() => String(Math.random() * Math.random())}
                contentContainerStyle={{ padding: 10, paddingTop: headerHeiht + 16 }}
                refreshControl={
                    <RefreshControl tintColor='#FFF' refreshing={isLoading} />
                }
                onRefresh={handleRefresh}
                refreshing={isLoading}
                onEndReached={() => isFiltering ? null : handleEndReached()}
                onEndReachedThreshold={0.3}
                // ListHeaderComponent={() => <Filter onFilter={onFilter} />}
                ListFooterComponent={renderFooter}
                scrollEventThrottle={10}
                onScroll={e => {
                    const y = e.nativeEvent.contentOffset.y;

                    const scrollingDOwn = y > scrollYRef.current;

                    if (scrollingDOwn && y > HEIGHT_VISIBILITY_THRESHOLD) {
                        top.value = withSpring(-headerHeiht, { damping: 16 })
                    } else if (!scrollingDOwn && y < (HEIGHT_VISIBILITY_THRESHOLD)) {
                        top.value = withSpring(0, { damping: 16 })
                    }

                }}

            />
        </View>
    );
}

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

export default CoinList;