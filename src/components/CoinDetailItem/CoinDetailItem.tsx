import { View } from 'react-native';
import { Text } from "@rneui/themed"
import styles from './CoinDetailItemStyle';
import { formatNumber } from "@/utils";

interface CoinDetailItemProps {
    title: string;
    value: string;
}

const CoinDetailItem = ({ title, value }: CoinDetailItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.value}>
                {formatNumber(value)}
            </Text>
        </View>
    );
}

export default CoinDetailItem;