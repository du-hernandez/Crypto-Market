import { theme } from "@/utils/theme";
import { ThemeProvider } from "@rneui/themed";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const RootLayout = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#252836', marginBottom: 0, paddingBottom: 0 }}>
                <ThemeProvider theme={theme}>
                    <Slot />
                </ThemeProvider>
            </SafeAreaView>
        </QueryClientProvider>
    )
}

export default RootLayout;