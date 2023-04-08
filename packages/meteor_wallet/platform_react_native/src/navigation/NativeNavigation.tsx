import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pages } from "@meteorwallet/meteor-app";

const Stack = createNativeStackNavigator<{
  root: undefined;
  "user-detail": {
    id: string;
  };
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="root"
        component={Pages.Root}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
}
