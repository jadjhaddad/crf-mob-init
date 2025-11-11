import { NavigationContainer } from "@react-navigation/native";
import { GuestStackNavigator } from "./guest";
import BottomTabNavigator from "./identified/tabs";

const EntryPoint = () => {
  const auth = true;

  return (
    <NavigationContainer>
      {auth ? <BottomTabNavigator /> : <GuestStackNavigator />}
    </NavigationContainer>
  );
};

export default EntryPoint;
