import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 80,
        marginVertical: 10,
        // backgroundColor: "rgba(23, 234, 54, 0.3)"
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    title: { fontSize: 20, textAlign: 'center' },
    value: { fontSize: 20, textAlign: 'center', fontWeight: 'bold' }
})

export default styles;