import { NavigationProp, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";

export type GuestStackParamList = {
  Welcome: undefined;
};

const GuestStack = createNativeStackNavigator<GuestStackParamList>();

export type GuestScreenProps<ScreenName extends keyof GuestStackParamList> = {
  route: RouteProp<GuestStackParamList, ScreenName>;
  navigation: NavigationProp<GuestStackParamList>;
};

export const GuestStackNavigator = () => {
  return (
    <GuestStack.Navigator initialRouteName="Welcome">
      <GuestStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </GuestStack.Navigator>
  );
};
