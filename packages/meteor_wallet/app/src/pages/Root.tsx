import { useState } from "react";
import {
  Anchor,
  Button,
  FancyCircle,
  FancyCircleWithBorder,
  H1,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
} from "@meteorwallet/meteor-ui";

export function Root() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$6" maw={600}>
        <H1 ta="center">Welcome to :)</H1>
        <Paragraph ta="center" fontWeight={"600"}>
          !!!This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <FancyCircleWithBorder bg={"pink"} size={"$4"} />
        <FancyCircle bg={"red"} size={"$4"} />
        <Separator />
        <Paragraph ta="center">
          Made by{" "}
          <Anchor color="$color" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{" "}
          <Anchor
            color="$color"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button>Link to user</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  );
}

function SheetDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  return (
    <>
      <Button
        size="$6"
        // icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            // icon={ChevronDown}
            onPress={() => {
              setOpen(false);
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
