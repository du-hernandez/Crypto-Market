import {
    View,
} from "react-native";
import { Text, Button } from "@rneui/themed";
import { useRouter } from "expo-router";

const HomeScreen = () => {

    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: '#252836' }}>

            <Button
                title="Basic Button"
                buttonStyle={{
                    backgroundColor: 'rgba(78, 116, 289, 1)',
                    borderRadius: 3,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                onPress={() => router.push('coin/coin-list')}
            />
        </View >
    );
}

export default HomeScreen;