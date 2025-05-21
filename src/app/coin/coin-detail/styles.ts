import { Colors } from '@/utils/colors';
import { StyleSheet, Dimensions } from 'react-native';

const winDimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
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
        backgroundColor: Colors.primary
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
    favoriteContainer: {
        position: 'absolute',
        top: 170,
        left: (winDimensions.width / 2) - 20,
    }
})

export default styles;