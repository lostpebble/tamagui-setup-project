import { TamaguiProvider } from "@meteorwallet/common-ui";
import { Root } from "./pages";
import { TMeteorAppTamaguiConfig } from "./tamagui.config";

const scheme: "light" | "dark" = "light";

export function MeteorApp({ config }: { config: TMeteorAppTamaguiConfig }) {
  return (
    <TamaguiProvider
      config={config}
      // disableInjectCSS
      defaultTheme={scheme === "dark" ? "dark" : "light"}
    >
      <Root />
    </TamaguiProvider>
  );
}
