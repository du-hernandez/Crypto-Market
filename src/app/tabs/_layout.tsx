import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const TabLayout = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#252836', marginBottom: 0, paddingBottom: 0 }}>
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
                        name="index"
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
                        name="favorites"
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
                        name="about"
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
            </SafeAreaView>
        </QueryClientProvider>
    );
};

export default TabLayout;