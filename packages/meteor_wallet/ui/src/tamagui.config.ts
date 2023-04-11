import { createTamagui } from "tamagui";
import { commonUiConfigInput } from "@meteorwallet/common-ui";

export const meteorUiConfigInput = {
  ...commonUiConfigInput,
  // themes: {
  //   ...commonUiConfigInput.themes,
  //   dark: {
  //     background: "#0d0e4b",
  //     color: "#e0a8bf",
  //   },
  //   light: {
  //     background: "#dcec4d",
  //   },
  // },
};

export const meteorUiConfig = createTamagui(meteorUiConfigInput);
