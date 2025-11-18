import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabProp } from ".";
import { AllScreens, AllScreensParamList } from "../all";
import { getDefaultTabScreenOptions } from "./tabConfig";

const PatientsStackNavigator =
  createNativeStackNavigator<AllScreensParamList>();

const PatientsTab: React.FC<BottomTabProp<"PatientsTab">> = () => {
  return (
    <PatientsStackNavigator.Navigator
      initialRouteName="PatientsPage"
      screenOptions={getDefaultTabScreenOptions?.()}
    >
      {AllScreens.map((config, index) => (
        <PatientsStackNavigator.Screen key={index} {...config} />
      ))}
    </PatientsStackNavigator.Navigator>
  );
};

export default PatientsTab;
