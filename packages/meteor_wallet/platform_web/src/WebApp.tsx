import { Root, tamaguiAppConfig, TamaguiProvider } from "@meteorwallet/meteor-app";

export default function WebApp() {
  return (
    <TamaguiProvider config={tamaguiAppConfig} defaultTheme={"dark"}>
      <Root />
    </TamaguiProvider>
  );
}
