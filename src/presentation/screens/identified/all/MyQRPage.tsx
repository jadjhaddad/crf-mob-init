import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";
import CustomScrollView from "@/src/presentation/components/common/CustomScrollView";

const MyQRPage: React.FC<AllScreensProps<"MyQRPage">> = () => {
  return (
    <CustomScrollView
      style={{ flex: 1, backgroundColor: "white" }}
    ></CustomScrollView>
  );
};

const MyQRPageConfig: AllScreenConfig<"MyQRPage"> = {
  name: "MyQRPage",
  component: MyQRPage,
  options: {
    title: "QR",
  },
};

export default MyQRPageConfig;
