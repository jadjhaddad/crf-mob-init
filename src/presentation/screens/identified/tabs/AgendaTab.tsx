import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabProp } from ".";
import { AllScreens, AllScreensParamList } from "../all";
import { getDefaultTabScreenOptions } from "./tabConfig";

const AgendaStackNavigator = createNativeStackNavigator<AllScreensParamList>();

const AgendaTab: React.FC<BottomTabProp<"AgendaTab">> = () => {
  return (
    <AgendaStackNavigator.Navigator
      initialRouteName="AgendaPage"
      screenOptions={getDefaultTabScreenOptions?.()}
    >
      {AllScreens.map((config, index) => (
        <AgendaStackNavigator.Screen key={index} {...config} />
      ))}
    </AgendaStackNavigator.Navigator>
  );
};

export default AgendaTab;
