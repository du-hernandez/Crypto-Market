import { TouchableOpacity, View } from 'react-native';
import { memo } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from './FavoriteCoinStyle';
import { Colors } from '@/utils/colors';

interface FavoriteCoinProps {
    isFavorite: boolean;
    setFavoritesCoins: (coinId: string) => void;
    coinId: string;
    iconSize?: number;
}

const FavoriteCoin = ({ isFavorite, setFavoritesCoins, coinId, iconSize = 30, }: FavoriteCoinProps) => {

    // const isFavorite = favoriteCoins.includes(coinId);

    return (
        <TouchableOpacity onPress={() => setFavoritesCoins(coinId)} style={{ width: iconSize + 5, height: iconSize + 5 }}>
            <LinearGradient
                colors={isFavorite ? ['yellow', Colors.secondary] : ['#F4F4F4', '#B0B0B2']}
                style={styles.star}
            >
                <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={iconSize - 5} color={isFavorite ? Colors.secondary : 'gray'} />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default memo(FavoriteCoin);