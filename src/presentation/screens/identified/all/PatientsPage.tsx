import { View } from "react-native";
import { AllScreenConfig, AllScreensProps } from ".";

const PatientsPage: React.FC<AllScreensProps<"PatientsPage">> = () => {
  return <View style={{ flex: 1, backgroundColor: "white" }}></View>;
};

const PatientsPageConfig: AllScreenConfig<"PatientsPage"> = {
  name: "PatientsPage",
  component: PatientsPage,
  options: {
    title: "Patients",
    headerShadowVisible: false,
  },
};

export default PatientsPageConfig;
