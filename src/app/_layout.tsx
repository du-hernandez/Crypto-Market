import { useEffect } from 'react';
import { Stack } from "expo-router";
import { Nosifer_400Regular, useFonts } from '@expo-google-fonts/nosifer';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@rneui/themed";
import { FavoriteCoinsProvider } from '@/context/FavoriteCoins';
import { Colors } from '@/utils/colors';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const queryClient = new QueryClient();

    const [loaded, error] = useFonts({
        Nosifer_400Regular,
        Nunito_400Regular
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
                <ThemeProvider theme={theme}>
                    <FavoriteCoinsProvider>
                        <StatusBar style="light"/>
                        <Stack screenOptions={{
                            headerStyle: { backgroundColor: Colors.primary },
                            headerTintColor: "#FFF",
                        }}>
                            <Stack.Screen
                                name="(tabs)"
                                options={{
                                    headerShown: false,
                                    headerTitle: "Home",
                                }}
                            />
                            <Stack.Screen
                                name="coin/coin-detail/[id]"
                                options={{
                                    headerShown: true,
                                    headerTitle: "Coin Detail",
                                }}
                            />
                            <Stack.Screen
                                name="coin/coin-list"
                                options={{
                                    headerTitle: "Coin List",
                                    headerShown: true
                                }}
                            />
                        </Stack>
                    </FavoriteCoinsProvider>
                </ThemeProvider>
            </SafeAreaView>
        </QueryClientProvider>
    )
}

export default RootLayout;