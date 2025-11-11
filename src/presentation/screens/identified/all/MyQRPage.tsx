import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";

const MyQRPage: React.FC<AllScreensProps<"MyQRPage">> = () => {
  return <View style={{ flex: 1, backgroundColor: "white" }}></View>;
};

const MyQRPageConfig: AllScreenConfig<"MyQRPage"> = {
  name: "MyQRPage",
  component: MyQRPage,
  options: {
    title: "QR",
    headerShadowVisible: false,
  },
};

export default MyQRPageConfig;
