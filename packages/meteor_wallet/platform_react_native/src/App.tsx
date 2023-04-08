import "expo-dev-client";
import { useFonts } from "expo-font";
import { NativeNavigation } from "./navigation/NativeNavigation";
import { NavigationProvider } from "./navigation/NavigationProvider";
import { TamaguiProvider, tamaguiAppConfig } from "@meteorwallet/meteor-app";
import { useColorScheme } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const scheme = useColorScheme();

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiAppConfig}>
      <NavigationProvider>
        <NativeNavigation />
      </NavigationProvider>
    </TamaguiProvider>
  );
}
