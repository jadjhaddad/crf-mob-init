import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";

const ProfilePage: React.FC<AllScreensProps<"ProfilePage">> = () => {
  return <View style={{ flex: 1, backgroundColor: "white" }}></View>;
};

const ProfilePageConfig: AllScreenConfig<"ProfilePage"> = {
  name: "ProfilePage",
  component: ProfilePage,
  options: {
    title: "Profile",
    headerShadowVisible: false,
  },
};

export default ProfilePageConfig;
