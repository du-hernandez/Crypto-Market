import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import { Platform } from "react-native";


const TabLayout = () => {

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#FFF",
            tabBarStyle: {
                backgroundColor: Platform.OS === "ios" ? "transparent" : "#252836",
                borderTopWidth: 0,
                paddingTop: 15,
            },
            tabBarIconStyle: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            },
        }}>
            <Tabs.Screen
                name="home/Home"
                options={{
                    title: "Home",
                    headerTitle: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={30} color={color} />
                    ),
                    tabBarIconStyle: {
                        width: 50,
                        height: 50,
                        borderRadius: 15,
                    },
                }}
            />
            <Tabs.Screen
                name="favorites/Favorites"
                options={{
                    title: "Favorites",
                    headerTitle: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="hearto" size={30} color={color} />
                    ),
                    tabBarIconStyle: {
                        width: 50,
                        height: 50,
                        borderRadius: 15,
                    },
                }}
            />
            <Tabs.Screen
                name="about/About"
                options={{
                    title: "About",
                    headerTitle: "About",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="infocirlceo" size={30} color={color} />
                    ),
                    tabBarIconStyle: {
                        width: 50,
                        height: 50,
                        borderRadius: 15,
                    },
                }}
            />
        </Tabs>
    );
};

export default TabLayout;