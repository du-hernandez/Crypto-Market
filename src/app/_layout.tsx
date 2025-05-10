import { theme } from "@/utils/theme";
import { ThemeProvider } from "@rneui/themed";
import { Slot } from "expo-router";


const RootLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Slot />
        </ThemeProvider>
    )
}

export default RootLayout;