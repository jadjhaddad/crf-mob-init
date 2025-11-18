import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";
import CustomScrollView from "@/src/presentation/components/common/CustomScrollView";

const ProfilePage: React.FC<AllScreensProps<"ProfilePage">> = () => {
  return <CustomScrollView></CustomScrollView>;
};

const ProfilePageConfig: AllScreenConfig<"ProfilePage"> = {
  name: "ProfilePage",
  component: ProfilePage,
  options: {
    title: "Profile",
  },
};

export default ProfilePageConfig;
