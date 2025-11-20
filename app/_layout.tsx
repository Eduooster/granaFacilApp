// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "@/components/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Stack>
       
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        <Stack.Screen name="(wizard)" options={{ headerShown: false }} />

         <Stack.Screen name="(open-finance)" options={{ headerShown: false }} />

        
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
