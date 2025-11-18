import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabProp } from ".";
import { AllScreens, AllScreensParamList } from "../all";
import { getDefaultTabScreenOptions } from "./tabConfig";

const ProfileStackNavigator = createNativeStackNavigator<AllScreensParamList>();

const ProfileTab: React.FC<BottomTabProp<"ProfileTab">> = () => {
  return (
    <ProfileStackNavigator.Navigator
      initialRouteName="ProfilePage"
      screenOptions={getDefaultTabScreenOptions?.()}
    >
      {AllScreens.map((config, index) => (
        <ProfileStackNavigator.Screen key={index} {...config} />
      ))}
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileTab;
