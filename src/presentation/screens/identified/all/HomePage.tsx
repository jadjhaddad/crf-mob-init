import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";

const HomePage: React.FC<AllScreensProps<"HomePage">> = () => {
  return <View style={{ flex: 1, backgroundColor: "white" }}></View>;
};

const HomePageConfig: AllScreenConfig<"HomePage"> = {
  name: "HomePage",
  component: HomePage,
  options: {
    title: "Home",
    headerShadowVisible: false,
  },
};

export default HomePageConfig;
