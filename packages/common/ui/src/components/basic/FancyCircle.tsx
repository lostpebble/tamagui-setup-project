import { GetProps, YStack, styled } from "tamagui";

export const FancyCircle = styled(YStack, {
  name: "FancyCircle",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 100_000_000,
  overflow: "hidden",
  // alignSelf: "center",

  variants: {
    size: {
      "...size": (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        };
      },
    },
  },
});

export type FancyCircleProps = GetProps<typeof FancyCircle>;
