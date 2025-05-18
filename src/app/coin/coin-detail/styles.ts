import { StyleSheet, Dimensions } from 'react-native';

const winDimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252836',
        flexDirection: 'column',
    },
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
    },
    textDetail: {
        textAlign: 'center',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        fontSize: 20,
    },
    changePercent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingVertical: 5,
    },
    star: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 170,
        left: (winDimensions.width / 2) - 20,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5
    }
})

export default styles;