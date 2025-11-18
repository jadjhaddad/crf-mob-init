import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import EntryPoint from "./src/presentation/screens";

// Import NativeWind styles
import 'nativewind';

// Keep the splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Karla-Regular': require('./resources/font/karla/static/Karla-Regular.ttf'),
    'Karla-Medium': require('./resources/font/karla/static/Karla-Medium.ttf'),
    'Karla-SemiBold': require('./resources/font/karla/static/Karla-SemiBold.ttf'),
    'Karla-Bold': require('./resources/font/karla/static/Karla-Bold.ttf'),
    'Karla-Light': require('./resources/font/karla/static/Karla-Light.ttf'),
    'Karla-Italic': require('./resources/font/karla/static/Karla-Italic.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <EntryPoint />
    </SafeAreaProvider>
  );
}
