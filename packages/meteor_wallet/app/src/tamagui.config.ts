import { meteorUiConfigInput } from "@meteorwallet/meteor-ui";
import { createTamagui } from "tamagui";

export const tamaguiAppConfig = createTamagui(meteorUiConfigInput);

export type TMeteorAppTamaguiConfig = typeof tamaguiAppConfig;

declare module "@meteorwallet/meteor-ui" {
  // rome-ignore lint: Need an interface here for types to work
  interface TamaguiCustomConfig extends TMeteorAppTamaguiConfig {}
}
