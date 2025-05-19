import { TouchableOpacity, View } from 'react-native';
import { memo } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from './FavoriteCoinStyle';

interface FavoriteCoinProps {
    isFavorite: boolean;
    setFavoritesCoins: (coinId: string) => void;
    coinId: string;
    iconSize?: number;
}

const FavoriteCoin = ({ isFavorite, setFavoritesCoins, coinId, iconSize = 30, }: FavoriteCoinProps) => {

    // const isFavorite = favoriteCoins.includes(coinId);

    return (
        <TouchableOpacity onPress={() => setFavoritesCoins(coinId)}>
            <LinearGradient
                colors={isFavorite ? ['yellow', '#E24224'] : ['#F4F4F4', '#B0B0B2']}
                style={styles.star}
            >
                <AntDesign name={isFavorite ? 'heart' : 'hearto'} size={iconSize} color={isFavorite ? '#E24224' : 'gray'} />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default memo(FavoriteCoin);