import { SafeAreaProvider } from "react-native-safe-area-context";
import EntryPoint from "./src/presentation/screens";

// Import NativeWind styles
import 'nativewind';

export default function App() {
  return (
    <SafeAreaProvider>
      <EntryPoint />
    </SafeAreaProvider>
  );
}
