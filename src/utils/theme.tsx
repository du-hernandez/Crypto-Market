import { createTheme, lightColors } from '@rneui/themed';
import { Platform } from 'react-native';

export const theme = createTheme({

    components: {
        Button: {
            titleStyle: {
                color: '#FFF',
            },
            buttonStyle: {
                backgroundColor: '#12CDD9',
                borderRadius: 50,
            },
        },
        Text: {
            style: {
                color: '#FFF',
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                lineHeight: 24,
            }
        },
    },

    lightColors: {
        ...Platform.select({
            default: lightColors.platform.android,
            ios: lightColors.platform.ios,
        }),
    },
    darkColors: {
        primary: '#000',
    },
    mode: 'light',
});