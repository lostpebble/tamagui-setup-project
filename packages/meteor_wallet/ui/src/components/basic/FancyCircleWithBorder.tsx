import { FancyCircle, styled } from "@meteorwallet/common-ui";
import { GetProps } from "tamagui";

export const FancyCircleWithBorder = styled(FancyCircle, {
  name: "FancyCircleWithBorder",
  borderWidth: "$2",
  borderColor: "#af32cb",
  borderRadius: 1_000,
  alignSelf: "center",
});

export type FancyCircleWithBorderProps = GetProps<typeof FancyCircleWithBorder>;
