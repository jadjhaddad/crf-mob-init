import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabProp } from ".";
import { AllScreens, AllScreensParamList } from "../all";

const MyQRStackNavigator = createNativeStackNavigator<AllScreensParamList>();

const MyQRTab: React.FC<BottomTabProp<"MyQRTab">> = () => {
  return (
    <MyQRStackNavigator.Navigator initialRouteName="MyQRPage">
      {AllScreens.map((config, index) => (
        <MyQRStackNavigator.Screen key={index} {...config} />
      ))}
    </MyQRStackNavigator.Navigator>
  );
};

export default MyQRTab;
