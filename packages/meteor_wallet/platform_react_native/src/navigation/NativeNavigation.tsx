import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Root } from "@meteorwallet/meteor-app";

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
        component={Root}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
}
