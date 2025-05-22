import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import { Colors } from "@/utils/colors";

const CryptoDetailAbout = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.primary }}>
            <Text style={styles.titleStyles}>Crypto Market About</Text>

            <View style={styles.section}>
                <Text>
                    This mobile app lets you view cryptocurrency data that's updated every 5 minutes.
                    Includes views such as:
                    {"\n"}- Home: Market Overview and Featured Prices.
                    {"\n"}- Detail: specific information for each cryptocurrency.
                    {"\n"}- Favorites: Custom coin tracking.
                    {"\n"}- About: details about the app and its development.
                    {"\n\n"}
                    Technologies used:
                    {"\n"}- React Native for the mobile interface.
                    {"\n"}- TypeScript for safe typing.
                    {"\n"}- @rneui/themed for UI Components.
                    {"\n"}- TansTack Query for API integration.
                </Text>
            </View>

            <Text style={styles.titleStyles}>Developer info</Text>

            <View style={styles.section}>
                <Text style={styles.personalInfo}>
                    Name:
                </Text>
                <Text style={{ marginBottom: 12 }}>
                    Duverney Hernandez Mora
                </Text>
                <Text style={styles.personalInfo}>
                    Email:
                </Text>
                <Text style={{ marginBottom: 12 }}>
                    comdujar@gmail.com
                </Text>
                <Text style={styles.personalInfo}>
                    Location:
                </Text>
                <Text style={{ marginBottom: 12 }}>
                    Neiva, Colombia
                </Text>
                <Text style={styles.personalInfo}>
                    About Me:
                </Text>
                <Text>
                    Passionate software developer focused on creating robust and intuitive mobile applications. Always eager to learn new technologies and contribute to industry and open source projects.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleStyles: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },
    section: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20
    },
    personalInfo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8
    }
})

export default CryptoDetailAbout;