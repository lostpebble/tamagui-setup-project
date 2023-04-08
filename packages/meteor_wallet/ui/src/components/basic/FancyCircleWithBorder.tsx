import { FancyCircle, styled } from "@meteorwallet/common-ui";
import { GetProps } from "tamagui";

export const FancyCircleWithBorder = styled(FancyCircle, {
  name: "FancyCircleWithBorder",
  borderWidth: "$2",
  borderColor: "$fancyBorderColor",
  alignSelf: "center",
});

export type FancyCircleWithBorderProps = GetProps<typeof FancyCircleWithBorder>;
