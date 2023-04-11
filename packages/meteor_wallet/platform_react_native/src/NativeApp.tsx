import "expo-dev-client";
import { useFonts } from "expo-font";
import { NativeNavigation } from "./navigation/NativeNavigation";
import { NavigationProvider } from "./navigation/NavigationProvider";
import { useColorScheme } from "react-native";
import { TamaguiProvider, tamaguiAppConfig, Root } from "@meteorwallet/meteor-app";

export default function NativeApp({ ...rest }) {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const scheme = useColorScheme();

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiAppConfig} defaultTheme={"dark"} {...rest}>
      <Root />
      {/*<NavigationProvider>
        <NativeNavigation />
      </NavigationProvider>*/}
    </TamaguiProvider>
  );
}
