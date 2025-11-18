import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabProp } from ".";
import { AllScreens, AllScreensParamList } from "../all";
import { getDefaultTabScreenOptions } from "./tabConfig";

const HomeStackNavigator = createNativeStackNavigator<AllScreensParamList>();

const HomeTab: React.FC<BottomTabProp<"HomeTab">> = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="HomePage"
      screenOptions={getDefaultTabScreenOptions?.()}
    >
      {AllScreens.map((config, index) => (
        <HomeStackNavigator.Screen key={index} {...config} />
      ))}
    </HomeStackNavigator.Navigator>
  );
};

export default HomeTab;
