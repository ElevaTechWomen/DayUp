import "../global.css";
import { useEffect } from "react";
import { testFirebaseConnection } from "../config/firebase.test";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { AuthProvider } from "../context/AuthContext";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  useEffect(() => {
    testFirebaseConnection();
  }, []);
  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="auth/register" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
