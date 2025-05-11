import { View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, RefreshControl } from "react-native";
import { useGetCoins } from "@/hooks/useApi";
import { Text } from "@rneui/themed";
import { useMemo, useState } from "react";
import CoinCard from "@/components/CoinCard/CoinCard";



const HomeScreen = () => {

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

    const renderItem = ({ item }: any) => <CoinCard coin={item} />;

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
                <ActivityIndicator size="large" color="#000" />
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

    return (
        <View style={{ backgroundColor: '#252836' }}>
            <FlatList
                data={coins}
                renderItem={renderItem}
                keyExtractor={() => String(Math.floor(Math.random() * 500000))}
                contentContainerStyle={{ padding: 10 }}
                refreshControl={
                    <RefreshControl tintColor='#FFF' refreshing={isLoading} />
                }
                onRefresh={handleRefresh}
                refreshing={isLoading}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.3}
                // ListHeaderComponent={() => <View> <Text>Header</Text> </View>}
                ListFooterComponent={renderFooter}
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
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
    }
})

export default HomeScreen;