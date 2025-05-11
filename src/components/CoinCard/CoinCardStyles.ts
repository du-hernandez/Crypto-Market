import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    coinHeader: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    symbol: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    priceInfo: {
        flex: 2,
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    change: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    positiveChange: {
        color: '#4CAF50',
    },
    negativeChange: {
        color: '#F44336',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
    },
    statValue: {
        fontWeight: 'bold',
        color: '#333',
    },
});

export default styles;